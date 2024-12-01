export = HTTPProxy;
declare class HTTPProxy {
    sdkInstance: {
        config: {
            version: any;
            creds: {
                appId: string;
                authKey: string;
                authSecret: string;
            };
            endpoints: {
                api: string;
                chat: string;
                muc: string;
            };
            hash: string;
            chatProtocol: {
                bosh: string;
                websocket: string;
                active: number;
            };
            webSession: {
                getSessionTimeInterval: number;
                getSessionTimeout: number;
            };
            chat: {
                contactList: {
                    subscriptionMode: {
                        mutual: boolean;
                    };
                };
                streamManagement: {
                    enable: boolean;
                };
                ping: {
                    enable: boolean;
                    timeInterval: number;
                };
                reconnect: {
                    enable: boolean;
                    timeInterval: number;
                };
            };
            videochat: {
                alwaysRelayCalls: boolean;
                answerTimeInterval: number;
                dialingTimeInterval: number;
                disconnectTimeInterval: number;
                statsReportTimeInterval: boolean;
                iceServers: ({
                    urls: string;
                    username?: undefined;
                    credential?: undefined;
                } | {
                    urls: string;
                    username: string;
                    credential: string;
                })[];
            };
            conference: {
                server: string;
            };
            whiteboard: {
                server: string;
            };
            urls: {
                session: string;
                webSession: string;
                login: string;
                users: string;
                chat: string;
                blobs: string;
                subscriptions: string;
                events: string;
                data: string;
                addressbook: string;
                addressbookRegistered: string;
                meetings: string;
                whiteboards: string;
                calls: string;
                type: string;
            };
            on: {
                sessionExpired: any;
                xmppDataWrite: any;
                xmppDataRead: any;
            };
            timeout: any;
            debug: {
                mode: number;
            };
        };
        session: any;
    };
    currentUserId: any;
    requestsNumber: number;
    fetchImpl: any;
    abortControllersMap: {};
    setSession(session: any): void;
    getSession(): any;
    setCurrentUserId(userId: any): void;
    getCurrentUserId(): any;
    logRequest(params: any, requestId: any): void;
    logResponse(response: any, requestId: any): void;
    buildRequestAndURL(params: any): any[];
    buildRequestBody(params: any, isMultipartFormData: any, isPostOrPutType: any): any;
    serializeQueryParams(obj: any, prefix: any, useArrayQuery: any, level: any): any;
    encodeURIComponent(str: any): string;
    abortRequest(abortId: any): void;
    processSuccessfulOrFailedRequest(abort_id: any): void;
    ajax(params: any): Promise<any>;
    processAjaxResponse(body: any, resolve: any, requestId: any): void;
    processAjaxError(response: any, body: any, error: any, reject: any, resolve: any, params: any, requestId: any): void;
    handleExpiredSessionResponse(error: any, response: any, reject: any, resolve: any, params: any): void;
}
//# sourceMappingURL=cubeProxy.d.ts.map