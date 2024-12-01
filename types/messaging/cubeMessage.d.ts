export = ChatMessagesService;
declare class ChatMessagesService {
    constructor(proxy: any);
    proxy: any;
    list(params: any): any;
    create(params: any): any;
    update(id: any, params: any): any;
    delete(id: any, params?: {}): any;
    createSystem(params: any): any;
    unreadCount(params: any): any;
    listReactions(messageId: any): any;
    addReaction(messageId: any, reaction: any): any;
    removeReaction(messageId: any, reaction: any): any;
    updateReaction(messageId: any, addReaction: any, removeReaction: any): any;
}
//# sourceMappingURL=cubeMessage.d.ts.map