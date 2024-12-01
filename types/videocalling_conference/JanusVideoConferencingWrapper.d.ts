declare class JanusVideoConferencingWrapper {
    constructor(configParams: any);
    token: any;
    configs: any;
    engine: Janus;
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
}
import Janus = require("./janus");
export { JanusVideoConferencingWrapper as Client };
//# sourceMappingURL=JanusVideoConferencingWrapper.d.ts.map