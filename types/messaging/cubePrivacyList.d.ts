export = PrivacyListService;
declare class PrivacyListService {
    constructor(options: any);
    helpers: any;
    xmppClient: any;
    stanzasCallbacks: any;
    xmlns: string;
    create(list: any): Promise<any>;
    getList(name: any): Promise<any>;
    update(listWithUpdates: any): Promise<any>;
    getNames(): Promise<any>;
    delete(name: any): Promise<any>;
    setAsDefault(name: any): Promise<any>;
}
//# sourceMappingURL=cubePrivacyList.d.ts.map