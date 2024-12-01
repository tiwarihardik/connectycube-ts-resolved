export = WhiteboardService;
declare class WhiteboardService {
    constructor(proxy: any);
    proxy: any;
    getURL({ id, title, username }: {
        id: any;
        title: any;
        username: any;
    }): string;
    get(paramsOrId: any): any;
    create(params?: {}): any;
    update(id: any, params?: {}): any;
    delete(id: any): any;
}
//# sourceMappingURL=cubeWhiteboard.d.ts.map