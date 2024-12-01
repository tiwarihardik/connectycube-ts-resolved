const coreConfig = require('../cubeConfig');
const ConferenceSession = require('./cubeConferenceSession');
const { DEVICE_INPUT_TYPES, CALL_TYPES } = require('./cubeConferenceConstants');
const { mediaDevices } = require('../cubeDependencies');

class ConferenceClient {
  constructor(proxy) {
    this.proxy = proxy;

    this.DEVICE_INPUT_TYPES = DEVICE_INPUT_TYPES;
    this.CALL_TYPES = CALL_TYPES;

    this.sessionsStore = {};

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

  createNewSession() {
    const session = new ConferenceSession(
      Object.assign(coreConfig.conference, {
        token: this.getCurrentSessionToken(),
      })
    );

    session.onParticipantJoinedListener = this.onParticipantJoinedListener;
    session.onParticipantLeftListener = this.onParticipantLeftListener;

    session.onSlowLinkListener = this.onSlowLinkListener;
    session.onRemoteStreamListener = this.onRemoteStreamListener;
    session.onRemoteTracksUpdatedListener = this.onRemoteTracksUpdatedListener;
    session.onRemoteConnectionStateChangedListener = this.onRemoteConnectionStateChangedListener;
    session.onDataChannelOpenedListener = this.onDataChannelOpenedListener;
    session.onDataChannelMessageListener = this.onDataChannelMessageListener;
    session.onSessionConnectionStateChangedListener = this.onSessionConnectionStateChangedListener;
    session.onErrorListener = this.onErrorListener;

    this.sessionsStore[session.id] = session;

    return session;
  }

  async getMediaDevices(deviceInputType) {
    const mediaDevices = await this._listDevices();
    if (deviceInputType === DEVICE_INPUT_TYPES.VIDEO) {
      return mediaDevices.filter(({ kind }) => kind === DEVICE_INPUT_TYPES.VIDEO);
    } else if (deviceInputType === DEVICE_INPUT_TYPES.AUDIO) {
      return mediaDevices.filter(({ kind }) => kind === DEVICE_INPUT_TYPES.AUDIO);
    }
    return mediaDevices;
  }

  _listDevices() {
    return mediaDevices.enumerateDevices();
  }

  clearSession(session_id) {
    delete this.sessionsStore[session_id];
  }

  getCurrentSessionToken() {
    const currentSession = this.proxy.getSession();
    if (!currentSession) {
      throw new Error('Session does not exist');
    }
    return this.proxy.getSession().token;
  }
}

module.exports = ConferenceClient;
