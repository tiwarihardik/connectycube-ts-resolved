export = WebRTCHelpers;
declare class WebRTCHelpers {
    static getUserJid(id: any, appId: any): string;
    static getUserIdFromJID(jid: any): number;
    static userCurrentJid(client: any): string;
    static trace(text: any): void;
    static traceWarning(text: any): void;
    static traceError(text: any): void;
    static getVersionFirefox(): number;
    static getVersionSafari(): number;
}
//# sourceMappingURL=cubeWebRTCHelpers.d.ts.map