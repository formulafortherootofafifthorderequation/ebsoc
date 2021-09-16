export declare class ContentsDTO {
    data: any;
    constructor(json: any);
    ContentsMvp(): ContentsMvpDTO;
}
export declare class ContentsMvpDTO {
    data: any;
    constructor(json: any);
    MvpFile(): any;
}
export declare class SimplePlayer {
    token: string;
    classUrlPath: string;
    lessonSeq: number;
    lectureInfo: any;
    lectureDetailInfo: any;
    private contentsSeq;
    private contentsTypeCode;
    private lectureSeq;
    private lessonAttendanceSeq;
    private officeEduCode;
    private schoolCode;
    private subLessonSeq;
    private lctreLrnSqno;
    constructor(token: string, classUrlPath: string, lessonSeq: number, subLessonSeq: number);
    courseData(): Promise<any>;
    lectureData(): Promise<any>;
    lectureDetailData(): Promise<any>;
    create(): Promise<any>;
    Contents(): Promise<ContentsDTO | {
        err: any;
    }>;
    encrypt(memberSeq: number, percent: number): Promise<void>;
}
