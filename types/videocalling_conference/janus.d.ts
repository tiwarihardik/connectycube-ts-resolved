export = Janus;
declare function Janus(gatewayCallbacks: any): {};
declare class Janus {
    constructor(gatewayCallbacks: any);
    destroyOnUnload: boolean;
    getServer: () => any;
    isConnected: () => boolean;
    reconnect: (callbacks: any) => void;
    getSessionId: () => any;
    getInfo: (callbacks: any) => void;
    destroy: (callbacks: any) => void;
    attach: (callbacks: any) => void;
}
declare namespace Janus {
    let sessions: {};
    let mobile: boolean;
    function isExtensionEnabled(): any;
    function useDefaultDependencies(deps: any): {
        newWebSocket: (server: any, proto: any) => any;
        extension: any;
        isArray: (arr: any) => arr is any[];
        webRTCAdapter: any;
        httpAPICall: (url: any, options: any) => any;
    };
    function useOldDependencies(deps: any): {
        newWebSocket: (server: any, proto: any) => any;
        isArray: (arr: any) => any;
        extension: any;
        webRTCAdapter: any;
        httpAPICall: (url: any, options: any) => any;
    };
    function mediaToTracks(media: any): {
        type: string;
    }[];
    function trackConstraints(track: any): {
        audio: any;
        video: any;
    };
    function noop(): void;
    let dataChanDefaultLabel: string;
    let endOfCandidates: any;
    function stopAllTracks(stream: any): void;
    function init(options: any): void;
    function isWebrtcSupported(): boolean;
    function isGetUserMediaAvailable(): (constraints?: MediaStreamConstraints) => Promise<MediaStream>;
    function randomString(len: any): string;
}
//# sourceMappingURL=janus.d.ts.map