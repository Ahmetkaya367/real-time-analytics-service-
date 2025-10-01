export declare enum EventType {
    PAGE_VIEW = "page_view",
    CLICK = "click",
    LOGIN = "login",
    LOGOUT = "logout",
    OTHER = "other"
}
export declare class AnalyticsEvent {
    id: number;
    userId: number;
    type: EventType;
    metadata: string | null;
    createdAt: Date;
}
