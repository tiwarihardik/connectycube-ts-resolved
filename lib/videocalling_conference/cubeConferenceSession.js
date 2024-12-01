const Utils = require('../cubeInternalUtils');
const { mediaDevices } = require('../cubeDependencies');
const { Client: JanusVideoConferencingClient } = require('./JanusVideoConferencingWrapper');
const { CALL_TYPES, JANUS_EVENTS } = require('./cubeConferenceConstants');

class ConferenceSession {
  constructor(janusConfig) {
    this.id = `${Math.random()}`;
    this._clientConf = new JanusVideoConferencingClient(janusConfig);
    this._setOnParticipantJoinListener();
    this._setOnParticipantLeftListener();
    this._setOnRemoteStreamListener();
    this._setOnRemoteTracksUpdatedListener();
    this._setOnDataChannelOpenListener();
    this._setOnDataChannelMessageListener();
    this._setOnErrorListener();

    this.currentUserDisplayName;

    this.localStream;

    this.onParticipantJoinedListener = null;
    this.onParticipantLeftListener = null;
    this.onSlowLinkListener = null;
    this.onRemoteStreamListener = null;
    this.onRemoteTracksUpdatedListener = null;
    this.onRemoteConnectionStateChangedListener = null;
    this.onDataChannelOpenedListener = null;
    this.onDataChannelMessageListener = null;
    this.onSessionConnectionStateChangedListener = null;
    this.onErrorListener = null;
  }

  get currentRoomId() {
    return this._clientConf.currentRoomId;
  }

  set currentRoomId(roomId) {
    return (this._clientConf.currentRoomId = roomId);
  }

  get currentPublisherPC() {
    return this._clientConf.videoRoomPlugin.webrtcStuff.pc;
  }

  _createSession() {
    let isResolved = false;

    return new Promise((resolve, reject) => {
      this._clientConf.createSession({
        success: () => {
          isResolved = true;
          resolve();
        },
        error: (err) => {
          if (isResolved) {
            this._onError(err);
          } else {
            reject(err);
          }
        },
      });
    });
  }

  // joinAsPublisher+Listener
  async join(roomId, user_id, userDisplayName) {
    this.currentUserDisplayName = userDisplayName;
    await this._createSession();
    this.currentRoomId = roomId;

    await this._createHandler(false, user_id);
    await this._join(this.currentRoomId, user_id);
  }

  async joinAsListener(roomId, user_id, userDisplayName) {
    this.currentUserDisplayName = userDisplayName;
    await this._createSession();
    this.currentRoomId = roomId;

    await this._createHandler(false, user_id, true);
    await this._join(this.currentRoomId, user_id);
  }

  sendKeyframeRequest(roomId) {
    return new Promise((resolve, reject) => {
      this._clientConf.sendKeyframeRequest(roomId, {
        success: resolve,
        error: reject,
      });
    });
  }

  async _createListener(user_id) {
    await this._createHandler(true, user_id);
  }

  _createHandler(isRemote, user_id, skipMedia = false) {
    return new Promise((resolve, reject) => {
      this._clientConf.attachVideoConferencingPlugin(isRemote, user_id, skipMedia, {
        success: resolve,
        error: reject,
        iceState: isRemote
          ? this._onRemoteIceStateChanged.bind(this, user_id)
          : this._onLocalIceStateChanged.bind(this),
        slowLink: isRemote ? this._onSlowLink.bind(this, user_id) : this._onSlowLink.bind(this, void 0),
        localStream: this.localStream,
        displayName: this.currentUserDisplayName,
      });
    });
  }

  _join(roomId, user_id) {
    return new Promise((resolve, reject) => {
      this._clientConf.join(roomId, user_id, false, {
        success: resolve,
        error: reject,
        displayName: this.currentUserDisplayName,
      });
    });
  }

  _setOnParticipantJoinListener() {
    this._clientConf.on(JANUS_EVENTS.PARTICIPANT_JOINED, this._onParticipantJoined.bind(this));
  }

  _setOnParticipantLeftListener() {
    this._clientConf.on(JANUS_EVENTS.PARTICIPANT_LEFT, this._onParticipantLeft.bind(this));
  }

  _setOnRemoteStreamListener() {
    this._clientConf.on(JANUS_EVENTS.REMOTE_STREAM, this._onRemoteStream.bind(this));
  }

  _setOnRemoteTracksUpdatedListener() {
    this._clientConf.on(JANUS_EVENTS.REMOTE_TRACKS_UPDATED, this._onRemoteTracksUpdated.bind(this));
  }

  _setOnDataChannelOpenListener() {
    this._clientConf.on(JANUS_EVENTS.DATA_CHANNEL_OPEN, this._onDataChannelOpen.bind(this));
  }

  _setOnDataChannelMessageListener() {
    this._clientConf.on(JANUS_EVENTS.DATA_CHANNEL_MESSAGE, this._onDataChannelMessage.bind(this));
  }

  _setOnErrorListener() {
    this._clientConf.on(JANUS_EVENTS.ERROR, this._onError.bind(this));
  }

  _onParticipantJoined(user_id, userDisplayName, isExistingParticipant) {
    Utils.DLog('[_onParticipantJoined]', user_id, userDisplayName, isExistingParticipant);
    this._createListener(user_id);
    Utils.safeCallbackCall(this.onParticipantJoinedListener, this, user_id, userDisplayName, isExistingParticipant);
  }

  _onParticipantLeft(user_id, userDisplayName) {
    Utils.DLog('[_onParticipantLeft]', user_id, userDisplayName);
    Utils.safeCallbackCall(this.onParticipantLeftListener, this, user_id, userDisplayName);
  }

  _onError(error) {
    Utils.DLog('[_onError]', error);
    Utils.safeCallbackCall(this.onErrorListener, this, error);
  }

  _onDataChannelOpen(label) {
    Utils.DLog('[_onDataChannelOpen]', label);
    Utils.safeCallbackCall(this.onDataChannelOpenedListener, this, label);
  }

  _onDataChannelMessage(user_id, data) {
    Utils.DLog('[_onDataChannelMessage]', user_id, data);
    Utils.safeCallbackCall(this.onDataChannelMessageListener, this, user_id, data);
  }

  _onLocalIceStateChanged(iceState) {
    Utils.DLog('[_onLocalIceStateChanged]', iceState);
    Utils.safeCallbackCall(this.onSessionConnectionStateChangedListener, this, iceState);
  }

  _onRemoteIceStateChanged(user_id, iceState) {
    Utils.DLog('[_onRemoteIceStateChanged]', user_id, iceState);
    Utils.safeCallbackCall(this.onRemoteConnectionStateChangedListener, this, user_id, iceState);
  }

  _onRemoteStream(user_id, stream) {
    Utils.DLog('[_onRemoteStream]', user_id, stream);
    Utils.safeCallbackCall(this.onRemoteStreamListener, this, user_id, stream);
  }

  _onRemoteTracksUpdated(user_id, track, eventType) {
    Utils.DLog('[_onRemoteTracksUpdated]', user_id, track, eventType);
    Utils.safeCallbackCall(this.onRemoteTracksUpdatedListener, this, user_id, track, eventType);
  }

  _onSlowLink(user_id, uplink, nacks) {
    Utils.DLog('[_onSlowLink]', user_id, uplink, nacks);
    Utils.safeCallbackCall(this.onSlowLinkListener, this, user_id, uplink, nacks);
  }

  listOfOnlineParticipants() {
    return new Promise((resolve, reject) => {
      this._clientConf.listOnlineParticipants(this.currentRoomId, {
        success: resolve,
        error: reject,
      });
    });
  }

  async leave() {
    await this._leaveGroup();
    this.currentRoomId = undefined;
    this.currentUserDisplayName = undefined;
    await this._detachVideoConferencingPlugin();
    await this._destroy();
    if (this.localStream) {
      this.localStream.getTracks().forEach((track) => track.stop());
      this.localStream = undefined;
    }
  }

  _leaveGroup() {
    return new Promise((resolve, reject) => {
      this._clientConf.leave({
        success: resolve,
        error: reject,
      });
    });
  }

  _destroy() {
    return new Promise((resolve, reject) => {
      this._clientConf.destroySession({
        success: resolve,
        error: reject,
      });
    });
  }

  _detachVideoConferencingPlugin() {
    return new Promise((resolve, reject) => {
      this._clientConf.detachVideoConferencingPlugin({
        success: resolve,
        error: reject,
      });
    });
  }

  getDisplayMedia(params) {
    if (!mediaDevices.getDisplayMedia) {
      throw new Error("Your environment does not support 'getDisplayMedia' API");
    }

    const elementId = params && params.elementId;
    const options = params && params.options;
    const mediaParams = { ...params };

    delete mediaParams.elementId;
    delete mediaParams.options;

    return mediaDevices
      .getDisplayMedia(mediaParams)
      .then((stream) => {
        return this._upsertStream(stream, elementId, options);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }

  getUserMedia(params) {
    const elementId = params && params.elementId;
    const options = params && params.options;
    const mediaParams = { ...params };

    delete mediaParams.elementId;
    delete mediaParams.options;

    return mediaDevices
      .getUserMedia(mediaParams)
      .then((stream) => {
        return this._upsertStream(stream, elementId, options);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }

  _upsertStream(stream, elementId, options) {
    const shouldUpdateCurrentStream = !!this.localStream;

    if (shouldUpdateCurrentStream) {
      this.localStream.getTracks().forEach((track) => {
        if (track.kind === CALL_TYPES.AUDIO && stream.getAudioTracks().length === 0) {
          return;
        } else {
          track.stop();
          this.localStream.removeTrack(track);
        }
      });

      this._replaceTracks(stream);
    } else {
      this.localStream = stream;
    }

    if (elementId) {
      if (shouldUpdateCurrentStream) {
        this.detachMediaStream(elementId, options);
      }

      this.attachMediaStream(elementId, this.localStream, options);
    }

    return this.localStream;
  }

  _replaceTracks(stream) {
    stream.getTracks().forEach((track) => {
      const pcSenders = this.currentPublisherPC.getSenders();
      const sender = pcSenders.find((sender) => track.kind === sender.track.kind);

      if (track.kind === CALL_TYPES.AUDIO) {
        track.enabled = this.localStream.getAudioTracks().every((track) => track.enabled);
      } else {
        track.enabled = this.localStream.getVideoTracks().every((track) => track.enabled);
      }

      if (sender) {
        sender.replaceTrack(track);
        this.localStream.addTrack(track);
      } else {
        console.warn(`No sender found for track kind: ${track.kind}`);
      }
    });
  }

  switchMediaTracks(constraints) {
    if (constraints[CALL_TYPES.VIDEO]) {
      return this._switchVideo(constraints[CALL_TYPES.VIDEO]);
    } else if (constraints[CALL_TYPES.AUDIO]) {
      return this._switchAudio(constraints[CALL_TYPES.AUDIO]);
    }
    return Promise.reject();
  }

  _switchVideo(mediaDeviceId) {
    return this._switchMediaTracks({
      audio: true,
      video: { deviceId: mediaDeviceId },
    });
  }

  _switchAudio(mediaDeviceId) {
    return this._switchMediaTracks({
      audio: { deviceId: mediaDeviceId },
      video: true,
    });
  }

  _switchMediaTracks(mediaParams) {
    return this.getUserMedia(mediaParams, true).then((newLocalStream) => {
      const newStreamTracks = newLocalStream.getTracks();
      const pcSenders = this.currentPublisherPC.getSenders();
      newStreamTracks.forEach((track) => {
        const sender = pcSenders.find((sender) => track.kind === sender.track.kind);
        sender.replaceTrack(track);
      });
      return this.localStream;
    });
  }

  muteVideo() {
    if (!this.isVideoMuted()) {
      this._clientConf.toggleVideoMute();
    }
  }

  unmuteVideo() {
    if (this.isVideoMuted()) {
      this._clientConf.toggleVideoMute();
    }
  }

  muteAudio() {
    if (!this.isAudioMuted()) {
      this._clientConf.toggleAudioMute();
    }
  }

  unmuteAudio() {
    if (this.isAudioMuted()) {
      this._clientConf.toggleAudioMute();
    }
  }

  isVideoMuted() {
    return this._clientConf.isVideoMuted();
  }

  isAudioMuted() {
    return this._clientConf.isAudioMuted();
  }

  getUserVolume() {
    return new Promise((resolve, reject) => {
      return this._clientConf.getVolume(resolve);
    });
  }

  getRemoteUserBitrate(userId) {
    return this._clientConf.getUserBitrate(userId);
  }

  getRemoteUserVolume(userId) {
    return new Promise((resolve, reject) => {
      return this._clientConf.getUserVolume(userId, resolve);
    });
  }

  attachMediaStream(id, stream, options) {
    const elem = document.getElementById(id);

    if (elem) {
      if (typeof elem.srcObject === 'object') {
        elem.srcObject = stream;
      } else {
        elem.src = window.URL.createObjectURL(stream);
      }

      if (options && options.muted) {
        elem.muted = true;
      }

      if (options && options.mirror) {
        elem.style.webkitTransform = 'scaleX(-1)';
        elem.style.transform = 'scaleX(-1)';
      }

      elem.onloadedmetadata = function (e) {
        elem.play();
      };
    } else {
      throw new Error('Unable to attach media stream, element ' + id + ' is undefined');
    }
  }

  detachMediaStream(id, options) {
    const elem = document.getElementById(id);

    if (elem) {
      elem.pause();

      if (typeof elem.srcObject === 'object') {
        elem.srcObject = null;
      } else {
        elem.src = '';
      }

      if (options && !options.mirror) {
        elem.style.webkitTransform = '';
        elem.style.transform = '';
      }
    } else {
      throw new Error('Unable to attach media stream, element ' + id + ' is undefined');
    }
  }

  async sendData(data, channelLabel) {
    const sendParams = { data, label: channelLabel };
    return new Promise((resolve, reject) => {
      const pluginParams = { success: resolve, error: reject };
      Object.assign(pluginParams, sendParams);

      this._clientConf.videoRoomPlugin.data(pluginParams);
    });
  }
}

module.exports = ConferenceSession;
