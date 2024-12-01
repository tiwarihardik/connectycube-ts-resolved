export = GroupChatService;
declare class GroupChatService {
    constructor(options: any);
    helpers: any;
    xmppClient: any;
    stanzasCallbacks: any;
    joinedRooms: {};
    xmlns: string;
    join(dialogIdOrJid: any): Promise<any>;
    leave(dialogIdOrJid: any): Promise<any>;
    listOnlineUsers(dialogIdOrJid: any): Promise<any>;
}
//# sourceMappingURL=cubeMultiUserChat.d.ts.map