export = StorageService;
declare class StorageService {
    constructor(proxy: any);
    proxy: any;
    list(params: any): any;
    create(params: any): any;
    delete(id: any): any;
    createAndUpload(params: any): any;
    upload(params: any): any;
    markUploaded(params: any): any;
    getInfo(id: any): any;
    getFile(uid: any): any;
    getFileObject(uid: any, params: any): any;
    update(params: any): any;
    privateUrl(fileUID: any): string;
    publicUrl(fileUID: any): string;
}
//# sourceMappingURL=cubeStorage.d.ts.map