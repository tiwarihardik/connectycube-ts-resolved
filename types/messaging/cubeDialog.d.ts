export = ChatDialogsService;
declare class ChatDialogsService {
    constructor(proxy: any);
    proxy: any;
    list(params: any): any;
    create(params: any): any;
    update(id: any, params: any): any;
    delete(idOrIds: any, params: any): any;
    addAdmins(id: any, admins_ids: any): any;
    removeAdmins(id: any, admins_ids: any): any;
    subscribe(id: any): any;
    unsubscribe(id: any): any;
    subscribeToPublic(id: any): any;
    unsubscribeFromPublic(id: any): any;
    updateNotificationsSettings(id: any, enabled: any): any;
    getNotificationsSettings(id: any): any;
    getPublicOccupants(id: any, params: any): any;
    clearHistory(id: any): any;
}
//# sourceMappingURL=cubeDialog.d.ts.map