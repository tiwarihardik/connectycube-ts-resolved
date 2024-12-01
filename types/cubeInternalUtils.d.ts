export = InternalUtils;
declare class InternalUtils {
    static getEnv(): {
        nativescript: boolean;
        reactnative: boolean;
        browser: boolean;
        node: boolean;
        expo: boolean;
    };
    static isRNWebRTCAvailable(): false | MediaDevices;
    static isWebRTCAvailable(): MediaDevices | {
        new (descriptionInitDict: RTCSessionDescriptionInit): RTCSessionDescription;
        prototype: RTCSessionDescription;
    };
    static safeCallbackCall(...args: any[]): void;
    static randomNonce(): number;
    static unixTime(): number;
    static getUrl(base: any, id: any, extension: any): string;
    static isArray(arr: any): boolean;
    static isObject(obj: any): boolean;
    static getBsonObjectId(): string;
    static DLog(...args: any[]): void;
    static isExpiredSessionError(error: any): boolean;
    static mergeArrays(arrayTo: any, arrayFrom: any): any;
    static toBase64(str: any): any;
    static generateCreateSessionParams(params?: {}): {
        application_id: string;
        auth_key: string;
        nonce: number;
        timestamp: any;
    };
    static signParams(message: any, secret: any): any;
    static getSizeOfString(str: any): number;
    static getDateSize(data: any): number;
    static callTrafficUsageCallback(callbackName: any, data: any): void;
    static cloneObject(obj?: {}, escapeNull?: boolean): any;
}
//# sourceMappingURL=cubeInternalUtils.d.ts.map