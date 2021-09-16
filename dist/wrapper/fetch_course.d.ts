export declare const COURSE_STATUS: Readonly<{
    ALL: string;
    BEFORE_LEARNING: string;
    DURING_LEARNING: string;
    COMPLETE_LEARNING: string;
}>;
export declare const COURSE_ORDER_BY: Readonly<{
    LAST_STUDY_DATE: number;
    COURSE_NAME: number;
    REGISTRATION_DATE: number;
    STUDY_START_DATE: number;
}>;
export declare function fetchCourse(token: string, classUrlPath: string, query: {
    status: string;
    orderBy: number;
    searchWord?: string;
}): Promise<any>;
export declare function isMemberOfCourse(token: string, classUrlPath: string): Promise<any>;
