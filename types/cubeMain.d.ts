export = CB;
declare const CB: ConnectyCube;
declare class ConnectyCube {
    RTCView: any;
    init(credentials: any, configMap?: any): void;
    service: import("./cubeProxy");
    auth: import("./cubeAuth");
    users: import("./cubeUsers");
    storage: import("./cubeStorage");
    pushnotifications: import("./cubePushNotifications");
    data: import("./cubeData");
    addressbook: import("./cubeAddressBook");
    chat: import("./messaging/cubeChat");
    meeting: import("./cubeMeeting");
    whiteboard: import("./cubeWhiteboard");
    utils: typeof Utils;
    videochat: import("./videocalling/cubeWebRTCClient");
    videochatconference: import("./videocalling_conference/cubeConferenceClient");
    setSession(session: any): void;
    getSession(): Promise<any>;
    createSession(params: any): Promise<any>;
    destroySession(): Promise<any>;
    createWebSession(params: any): Promise<any>;
    checkWebSessionUntilUpgrade(callback: any): NodeJS.Timeout;
    upgradeWebSession(webToken: any): any;
    login(params: any): Promise<any>;
    logout(): any;
}
import Utils = require("./cubeInternalUtils");
//# sourceMappingURL=cubeMain.d.ts.map