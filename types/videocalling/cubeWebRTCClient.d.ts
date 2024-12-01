export = WebRTCClient;
declare class WebRTCClient {
    constructor(connection: any, proxy: any);
    connection: any;
    proxy: any;
    signalingProcessor: WebRTCSignalingProcessor;
    signalingProvider: WebRTCSignalingProvider;
    SessionConnectionState: {
        UNDEFINED: number;
        CONNECTING: number;
        CONNECTED: number;
        FAILED: number;
        DISCONNECTED: number;
        CLOSED: number;
        COMPLETED: number;
    };
    PeerConnectionState: {
        NEW: number;
        CONNECTING: number;
        CHECKING: number;
        CONNECTED: number;
        DISCONNECTED: number;
        FAILED: number;
        CLOSED: number;
        COMPLETED: number;
    };
    CallType: {
        VIDEO: number;
        AUDIO: number;
    };
    sessions: {};
    onCallListener: any;
    onAcceptCallListener: any;
    onRejectCallListener: any;
    onStopCallListener: any;
    onUserNotAnswerListener: any;
    onInvalidEventsListener: any;
    onRemoteStreamListener: any;
    onSessionConnectionStateChangedListener: any;
    onSessionCloseListener: any;
    onCallStatsReport: any;
    onDevicesChangeListener: any;
    getMediaDevices(spec: any): Promise<any>;
    createNewSession(opponentsIDs: any, callType: any): WebRTCSession;
    _createAndStoreSession(sessionID: any, initiatorID: any, opIDs: any, callType: any, maxBandwidth: any): WebRTCSession;
    clearSession(sessionId: any): void;
    callRejectRequest(extension: any): any;
    _onCallListener(userID: any, sessionID: any, extension: any): void;
    _onAcceptListener(userID: any, sessionID: any, extension: any): void;
    _onRejectListener(userID: any, sessionID: any, extension: any): void;
    _onStopListener(userID: any, sessionID: any, extension: any): void;
    _onIceCandidatesListener(userID: any, sessionID: any, extension: any): void;
    _onIceRestartListener(userID: any, sessionID: any, extension: any): void;
    _onIceRestartAcceptListener(userID: any, sessionID: any, extension: any): void;
    _onDevicesChangeListener(): void;
}
import WebRTCSignalingProcessor = require("./cubeWebRTCSignalingProcessor");
import WebRTCSignalingProvider = require("./cubeWebRTCSignalingProvider");
import WebRTCSession = require("./cubeWebRTCSession");
//# sourceMappingURL=cubeWebRTCClient.d.ts.map