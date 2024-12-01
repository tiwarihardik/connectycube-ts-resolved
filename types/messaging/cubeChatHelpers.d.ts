export = ChatHelpers;
declare class ChatHelpers {
    _userCurrentJid: any;
    getUniqueId(suffix: any): string;
    isNumeric(value: any): boolean;
    jidOrUserId(jidOrUserId: any): string;
    typeChat(jidOrUserId: any): string;
    getUserJid(userId: any, appId: any): string;
    getUserNickWithMucDomain(userId: any): string;
    getUserIdFromJID(jid: any): number;
    getDialogIdFromJID(jid: any): any;
    getRoomJidFromDialogId(dialogId: any): string;
    getRoomJid(jid: any): string;
    getIdFromResource(jid: any): number;
    getRoomJidFromRoomFullJid(jid: any): any;
    getBsonObjectId(): string;
    getUserIdFromRoomJid(jid: any): any;
    userCurrentJid(client: any): string;
    getUserCurrentJid(): any;
    setUserCurrentJid(jid: any): void;
    getDialogJid(identifier: any): any;
}
//# sourceMappingURL=cubeChatHelpers.d.ts.map