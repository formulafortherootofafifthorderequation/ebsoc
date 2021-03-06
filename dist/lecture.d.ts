import './substitute';
export declare let schedule: {
    student: {
        list: (token: string, data: {
            classDate: string;
            memberSeq: number;
        }) => Promise<any>;
    };
};
export declare let student: {
    learning: (token: string) => Promise<any>;
    learningProgress: (token: string, lectureLearningSeq: number, data: {
        encriptedProgressRate: string;
    }) => Promise<any>;
};
export declare let lesson: {
    lecture: {
        attend: {
            create: (token: string, data: {
                contentsSeq: number;
                contentsTypeCode: string;
                lectureSeq: number;
                lessonAttendanceSeq: number;
                lessonSeq: number;
                officeEduCode: string;
                schoolCode: string;
            }) => Promise<any>;
        };
    };
};
export declare let $classUrlPath: {
    lesson: {
        list: (token: string, path: {
            classUrlPath: string;
        }, query: {
            atltStsCd: any;
            orderBy: number;
            lsnNm?: string;
        }) => Promise<any>;
        info: (token: string, path: {
            classUrlPath: string;
            lessonSeq: number;
        }) => Promise<any>;
        lecture: {
            attend: {
                list: {
                    $lessonSeq: (token: string, path: {
                        classUrlPath: string;
                        lessonSeq: number;
                    }) => Promise<any>;
                    _$lessonSeq: {
                        $subLessonSeq: (token: string, path: {
                            classUrlPath: string;
                            lessonSeq: number;
                            subLessonSeq: number;
                        }) => Promise<any>;
                    };
                };
            };
        };
    };
};
