export = ConferenceClient;
declare class ConferenceClient {
    constructor(proxy: any);
    proxy: any;
    DEVICE_INPUT_TYPES: {
        VIDEO: string;
        AUDIO: string;
    };
    CALL_TYPES: {
        VIDEO: string;
        AUDIO: string;
    };
    sessionsStore: {};
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
    createNewSession(): ConferenceSession;
    getMediaDevices(deviceInputType: any): Promise<MediaDeviceInfo[]>;
    _listDevices(): Promise<MediaDeviceInfo[]>;
    clearSession(session_id: any): void;
    getCurrentSessionToken(): any;
}
import ConferenceSession = require("./cubeConferenceSession");
//# sourceMappingURL=cubeConferenceClient.d.ts.map