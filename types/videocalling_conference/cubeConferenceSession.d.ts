export = ConferenceSession;
declare class ConferenceSession {
    constructor(janusConfig: any);
    id: string;
    _clientConf: {
        token: any;
        configs: any;
        engine: import("./janus");
        videoRoomPlugin: any;
        isOnlyAudio: boolean;
        currentRoomId: any;
        remoteFeeds: {};
        remoteJseps: {};
        remoteFeedsAttachingInProgress: {};
        bitrateTimers: {};
        emitter: any;
        createSession(callbacks: any): void;
        getSessionId(): any;
        destroySession(callbacks: any): void;
        attachVideoConferencingPlugin(isRemote: any, userId: any, skipMedia: any, callbacks: any): void;
        onLocalTrack(track: any, on: any): void;
        onRemoteTrack(remoteFeed: any, track: any, mid: any, on: any, metadata: any): void;
        getPluginId(): any;
        detachVideoConferencingPlugin(callbacks: any): void;
        join(roomId: any, userId: any, isOnlyAudio: any, callbacks: any): void;
        currentUserId: any;
        leave(callbacks: any): void;
        listOnlineParticipants(roomId: any, callbacks: any): void;
        toggleAudioMute(): any;
        isAudioMuted(): any;
        toggleRemoteAudioMute(userId: any): boolean;
        isRemoteAudioMuted(userId: any): boolean;
        toggleVideoMute(): any;
        isVideoMuted(): any;
        toggleRemoteVideoMute(userId: any): boolean;
        isRemoteVideoMuted(userId: any): boolean;
        switchVideoinput(mediaDeviceId: any, callbacks: any): void;
        switchAudioinput(mediaDeviceId: any, callbacks: any): void;
        sendKeyframeRequest(roomId: any, callbacks: any): void;
        getTracksFromStream(stream: any): {
            type: string;
            capture: any;
            recv: boolean;
        }[];
        createOffer(mediaParams: any, callbacks: any): void;
        getTracksMidsFromStream(stream: any): {
            type: string;
            mid: any;
            recv: boolean;
        }[];
        createAnswer({ remoteFeed, jsep }: {
            remoteFeed: any;
            jsep: any;
        }, existedStream: any, callbacks: any): void;
        detachRemoteFeed(userId: any): boolean;
        getUserBitrate(userId: any): any;
        getVolume(resultCallback: any): any;
        getUserVolume(userId: any, resultCallback: any): any;
        showBitrate(userId: any, element: any): void;
        hideBitrate(userId: any, element: any): void;
        on(eventType: any, listener: any): any;
        removeAllListeners(eventType: any): void;
    };
    onParticipantJoinedListener: any;
    onParticipantLeftListener: any;
    onSlowLinkListener: any;
    onRemoteStreamListener: any;
    onRemoteTracksUpdatedListener: any;
    onRemoteConnectionStateChangedListener: any;
    onDataChannelOpenedListener: any;
    onDataChannelMessageListener: any;
    onSessionConnectionStateChangedListener: any;
    onErrorListener: any;
    set currentRoomId(roomId: any);
    get currentRoomId(): any;
    get currentPublisherPC(): any;
    _createSession(): Promise<any>;
    join(roomId: any, user_id: any, userDisplayName: any): Promise<void>;
    currentUserDisplayName: any;
    joinAsListener(roomId: any, user_id: any, userDisplayName: any): Promise<void>;
    sendKeyframeRequest(roomId: any): Promise<any>;
    _createListener(user_id: any): Promise<void>;
    _createHandler(isRemote: any, user_id: any, skipMedia?: boolean): Promise<any>;
    _join(roomId: any, user_id: any): Promise<any>;
    _setOnParticipantJoinListener(): void;
    _setOnParticipantLeftListener(): void;
    _setOnRemoteStreamListener(): void;
    _setOnRemoteTracksUpdatedListener(): void;
    _setOnDataChannelOpenListener(): void;
    _setOnDataChannelMessageListener(): void;
    _setOnErrorListener(): void;
    _onParticipantJoined(user_id: any, userDisplayName: any, isExistingParticipant: any): void;
    _onParticipantLeft(user_id: any, userDisplayName: any): void;
    _onError(error: any): void;
    _onDataChannelOpen(label: any): void;
    _onDataChannelMessage(user_id: any, data: any): void;
    _onLocalIceStateChanged(iceState: any): void;
    _onRemoteIceStateChanged(user_id: any, iceState: any): void;
    _onRemoteStream(user_id: any, stream: any): void;
    _onRemoteTracksUpdated(user_id: any, track: any, eventType: any): void;
    _onSlowLink(user_id: any, uplink: any, nacks: any): void;
    listOfOnlineParticipants(): Promise<any>;
    leave(): Promise<void>;
    localStream: any;
    _leaveGroup(): Promise<any>;
    _destroy(): Promise<any>;
    _detachVideoConferencingPlugin(): Promise<any>;
    getDisplayMedia(params: any): Promise<any>;
    getUserMedia(params: any): Promise<any>;
    _upsertStream(stream: any, elementId: any, options: any): any;
    _replaceTracks(stream: any): void;
    switchMediaTracks(constraints: any): Promise<any>;
    _switchVideo(mediaDeviceId: any): Promise<any>;
    _switchAudio(mediaDeviceId: any): Promise<any>;
    _switchMediaTracks(mediaParams: any): Promise<any>;
    muteVideo(): void;
    unmuteVideo(): void;
    muteAudio(): void;
    unmuteAudio(): void;
    isVideoMuted(): any;
    isAudioMuted(): any;
    getUserVolume(): Promise<any>;
    getRemoteUserBitrate(userId: any): any;
    getRemoteUserVolume(userId: any): Promise<any>;
    attachMediaStream(id: any, stream: any, options: any): void;
    detachMediaStream(id: any, options: any): void;
    sendData(data: any, channelLabel: any): Promise<any>;
}
//# sourceMappingURL=cubeConferenceSession.d.ts.map