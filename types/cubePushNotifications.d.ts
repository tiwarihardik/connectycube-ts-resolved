export = PushNotificationsService;
declare class PushNotificationsService {
    constructor(proxy: any);
    proxy: any;
    subscriptions: SubscriptionsService;
    events: EventsService;
    base64Encode: (str: any) => any;
}
declare class SubscriptionsService {
    constructor(proxy: any);
    proxy: any;
    create(params: any): any;
    list(): any;
    delete(id: any): any;
}
declare class EventsService {
    constructor(proxy: any);
    proxy: any;
    create(params: any): any;
}
//# sourceMappingURL=cubePushNotifications.d.ts.map