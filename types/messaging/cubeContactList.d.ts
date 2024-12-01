export = ContactListService;
declare class ContactListService {
    constructor(options: any);
    helpers: any;
    xmppClient: any;
    stanzasCallbacks: any;
    contacts: {};
    xmlns: string;
    get(): Promise<any>;
    add(params: any): Promise<any>;
    confirm(params: any): Promise<any>;
    reject(userId: any): Promise<any>;
    updateName(params: any): Promise<any>;
    remove(userId: any): Promise<any>;
    _sendSubscriptionPresence(params: any): void;
}
//# sourceMappingURL=cubeContactList.d.ts.map