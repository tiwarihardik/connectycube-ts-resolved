export = AuthService;
declare class AuthService {
    constructor(proxy: any);
    proxy: any;
    webSessionCheckInterval: NodeJS.Timeout;
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
//# sourceMappingURL=cubeAuth.d.ts.map