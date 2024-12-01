export = ChatInternalUtils;
declare class ChatInternalUtils {
    static buildUserJid(params: any): any;
    static buildUserJidLocalPart(userId: any): string;
    static createMessageStanza(params: any): any;
    static createIqStanza(params: any): any;
    static createPresenceStanza(params: any): any;
    static createNonza(elementName: any, params: any): any;
    static getAttr(el: any, attrName: any): any;
    static getElement(stanza: any, elName: any): any;
    static isErrorStanza(stanza: any): boolean;
    static getAllElements(stanza: any, elName: any): any;
    static getElementText(stanza: any, elName: any): any;
    static getElementTreePath(stanza: any, elementsPath: any): any;
    static _JStoXML(title: any, obj: any, msg: any): void;
    static _XMLtoJS(extension: any, title: any, obj: any): any;
    static filledExtraParams(stanza: any, extension: any): any;
    static parseExtraParams(extraParams: any): {
        extension: {
            dialog_id: any;
            attachments: {}[];
        };
        dialogId: any;
    };
    static buildErrorFromXMPPErrorStanza(errorStanza: any): {
        code: number;
        info: any;
    };
    static getUniqueId(suffix: any): string;
    static parseReactions(reactionsEl: any): any;
}
//# sourceMappingURL=cubeChatInternalUtils.d.ts.map