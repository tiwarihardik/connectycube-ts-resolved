export = StreamManagementService;
declare class StreamManagementService {
    _NS: string;
    _isStreamManagementEnabled: boolean;
    _clientProcessedStanzasCounter: number;
    _clientSentStanzasCounter: number;
    sentMessageCallback: any;
    _lastAck: number;
    _xmppClient: any;
    _originalSend: any;
    _unackedQueue: any[];
    _incomingStanzaHandler: (stanza: any) => void;
    enable(connection: any): void;
    _removeElementHandler(): void;
    _addElementHandler(): void;
    send(stanza: any, message: any): void;
    _sendStanzasRequest(data: any): void;
    getClientSentStanzasCounter(): number;
    _checkCounterOnIncomeStanza(h: any): void;
    _increaseReceivedStanzasCounter(): void;
}
//# sourceMappingURL=cubeStreamManagement.d.ts.map