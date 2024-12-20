export = ChatService;
declare class ChatService {
    constructor(proxy: any);
    proxy: any;
    xmppClient: any;
    webrtcSignalingProcessor: any;
    stanzasCallbacks: {};
    earlyIncomingMessagesQueue: any[];
    isConnected: boolean;
    _isConnecting: boolean;
    _isLogout: boolean;
    _isReconnect: boolean;
    _checkPingTimer: NodeJS.Timeout;
    helpers: ChatHelpers;
    dialog: any;
    message: any;
    xmppClientListeners: any[];
    connectPromise: any;
    contactList: ContactListProxy;
    privacylist: PrivacyListProxy;
    muc: MucProxy;
    streamManagement: StreamManagement;
    _sentMessageCallback: (messageLost: any, messageSent: any) => void;
    onChatStatusListener: any;
    onConnectionErrorListener: any;
    onDisconnectedListener: any;
    onReconnectListener: any;
    onMessageListener: any;
    onSentMessageCallback: any;
    onSystemMessageListener: any;
    onMessageErrorListener: any;
    onMessageTypingListener: any;
    onMessageUpdateListener: any;
    onMessageDeleteListener: any;
    onMessageReactionsListener: any;
    onDeliveredStatusListener: any;
    onReadStatusListener: any;
    onLastUserActivityListener: any;
    onSubscribeListener: any;
    onConfirmSubscribeListener: any;
    onRejectSubscribeListener: any;
    onContactListListener: any;
    onJoinOccupant: any;
    onLeaveOccupant: any;
    onKickOccupant: any;
    get connectionStatus(): any;
    connect(params: any): any;
    /**
     * @deprecated since version 2.0
     */
    getContacts(): Promise<any>;
    ping(): Promise<any>;
    pingWithTimeout(timeout?: number): Promise<any>;
    startPingTimer(): void;
    stopPingTimer(): void;
    send(jidOrUserId: any, message: any): any;
    sendSystemMessage(jidOrUserId: any, message: any): any;
    sendIsTypingStatus(jidOrUserId: any): void;
    sendIsStopTypingStatus(jidOrUserId: any): void;
    sendDeliveredStatus(params: any): void;
    sendReadStatus(params: any): void;
    editMessage(params: any): void;
    deleteMessage(params: any): void;
    getLastUserActivity(jidOrUserId: any): Promise<any>;
    _onLastActivityStanza(stanza: any): {
        userId: number;
        seconds: number;
    };
    markActive(): void;
    markInactive(): void;
    disconnect(): any;
    search(params: any): any;
    _onMessage(rawStanza: any): boolean;
    _onPresence(stanza: any): void;
    _onIQ(stanza: any): void;
    _onSystemMessageListener(rawStanza: any): void;
    _onMessageErrorListener(stanza: any): void;
    _postConnectActions(): void;
    _enableCarbons(): void;
    _setSubscriptionToUserLastActivity(jidOrUserId: any, _isEnable: any): void;
    subscribeToUserLastActivityStatus(jidOrUserId: any): void;
    unsubscribeFromUserLastActivityStatus(jidOrUserId: any): void;
}
import ChatHelpers = require("./cubeChatHelpers");
import ContactListProxy = require("./cubeContactList");
import PrivacyListProxy = require("./cubePrivacyList");
import MucProxy = require("./cubeMultiUserChat");
import StreamManagement = require("./cubeStreamManagement");
//# sourceMappingURL=cubeChat.d.ts.map