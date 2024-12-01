export namespace SignalingConstants {
    let MODULE_ID: string;
    namespace SignalingType {
        let CALL: string;
        let ACCEPT: string;
        let REJECT: string;
        let STOP: string;
        let RESTART: string;
        let RESTART_ACCEPT: string;
        let CANDIDATE: string;
    }
}
export namespace SessionConnectionState {
    let UNDEFINED: number;
    let CONNECTING: number;
    let CONNECTED: number;
    let FAILED: number;
    let DISCONNECTED: number;
    let CLOSED: number;
    let COMPLETED: number;
}
export namespace SessionState {
    export let NEW: number;
    export let ACTIVE: number;
    export let HUNGUP: number;
    export let REJECTED: number;
    let CLOSED_1: number;
    export { CLOSED_1 as CLOSED };
}
export namespace PeerConnectionState {
    let NEW_1: number;
    export { NEW_1 as NEW };
    let CONNECTING_1: number;
    export { CONNECTING_1 as CONNECTING };
    export let CHECKING: number;
    let CONNECTED_1: number;
    export { CONNECTED_1 as CONNECTED };
    let DISCONNECTED_1: number;
    export { DISCONNECTED_1 as DISCONNECTED };
    let FAILED_1: number;
    export { FAILED_1 as FAILED };
    let CLOSED_2: number;
    export { CLOSED_2 as CLOSED };
    let COMPLETED_1: number;
    export { COMPLETED_1 as COMPLETED };
}
export namespace CallType {
    let VIDEO: number;
    let AUDIO: number;
}
//# sourceMappingURL=cubeWebRTCConstants.d.ts.map