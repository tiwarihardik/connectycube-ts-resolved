export = WebRTCSignalingProcessor;
declare class WebRTCSignalingProcessor {
    constructor(delegate: any);
    delegate: any;
    _onMessage(userId: any, extraParams: any): void;
    _getExtension(extraParams: any): {
        iceCandidates: {}[];
        opponentsIDs: number[];
    };
}
//# sourceMappingURL=cubeWebRTCSignalingProcessor.d.ts.map