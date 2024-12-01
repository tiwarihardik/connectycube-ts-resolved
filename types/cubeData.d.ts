export = DataService;
declare class DataService {
    constructor(proxy: any);
    proxy: any;
    create(className: any, data: any): any;
    list(className: any, data?: {}): any;
    readPermissions(className: any, id: any): any;
    update(className: any, data?: {}): any;
    delete(className: any, requestedData: any): any;
}
//# sourceMappingURL=cubeData.d.ts.map