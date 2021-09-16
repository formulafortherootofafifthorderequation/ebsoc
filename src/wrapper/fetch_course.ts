import { Cls, Lecture } from "..";
export const COURSE_STATUS = Object.freeze({
    ALL: "",
    BEFORE_LEARNING: "000",
    DURING_LEARNING: "001",
    COMPLETE_LEARNING: "002"
});
export const COURSE_ORDER_BY = Object.freeze({
    LAST_STUDY_DATE: 1,
    COURSE_NAME: 2,
    REGISTRATION_DATE: 3,
    STUDY_START_DATE: 4
});
export async function fetchCourse(token: string, classUrlPath: string, query: { status: string, orderBy: number, searchWord?: string }) {
    try {
        let res = await Lecture.$classUrlPath.lesson.list(token,
            { classUrlPath: classUrlPath },
            { atltStsCd: query.status, orderBy: query.orderBy, lsnNm: query.searchWord });
        return res;
    } catch (err) {
        return { err: err };
    }
}
export async function isMemberOfCourse(token: string, classUrlPath: string) {
    try {
        let res = await Cls.classMember.$classUrlPath.isMember(token, { classUrlPath: classUrlPath });
        return res;
    } catch (err) {
        return { err: err };
    }
}