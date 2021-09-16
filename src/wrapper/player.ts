import { Cls, Common, Lecture } from "..";

export class ContentsDTO {
    data: any;
    constructor(json: any){
        this.data = json;
    }
    ContentsMvp(){
        return new ContentsMvpDTO(this.data.lectureContentsMvpDto);
    }
}
export class ContentsMvpDTO {
    data: any;
    constructor(json: any){
        this.data = json;
    }
    MvpFile(){
        return this.data.mvpFileDto;
    }
}

export class SimplePlayer {
    token: string;
    classUrlPath: string;
    lessonSeq: number;

    lectureInfo: any;
    lectureDetailInfo: any;
    
    private contentsSeq: any;
    private contentsTypeCode: any;
    private lectureSeq: any;
    private lessonAttendanceSeq: any;
    private officeEduCode: any;
    private schoolCode: any;
    private subLessonSeq: number;
    private lctreLrnSqno: string | undefined;
    constructor(token: string, classUrlPath: string, lessonSeq: number, subLessonSeq: number) {
        this.token = token;
        this.classUrlPath = classUrlPath;
        this.lessonSeq = lessonSeq;
        this.subLessonSeq = subLessonSeq;
    }
    async courseData() {
        try {
            let res = await Lecture.$classUrlPath.lesson.lecture.attend.list.$lessonSeq(this.token, {
                classUrlPath: this.classUrlPath,
                lessonSeq: this.lessonSeq
            });
            return res;
        } catch (err) {
            return { err: err };
        }
    }
    async lectureData() {
        try {
            let res = await Lecture.$classUrlPath.lesson.lecture.attend.list._$lessonSeq.$subLessonSeq(this.token, {
                classUrlPath: this.classUrlPath,
                lessonSeq: this.lessonSeq,
                subLessonSeq: this.subLessonSeq
            });
            this.lectureInfo = res.data;
            return res;
        } catch (err) {
            return { err: err };
        }
    }
    async lectureDetailData() {
        try {
            let res = await Common.lecture.detail.lesson.$subLessonSeq(this.token, {
                subLessonSeq: this.subLessonSeq
            });
            this.lectureDetailInfo = res.data;
            return res;
        } catch (err) {
            return { err: err };
        }
    }
    async create() {
        try {
            if (!this.lectureInfo)
                await this.lectureData();
            this.contentsSeq = this.lectureInfo.cntnsSqno;
            this.contentsTypeCode = this.lectureInfo.cntnsTyCd;
            this.lectureSeq = this.lectureInfo.lctreSqno;
            this.lessonAttendanceSeq = this.lectureInfo.lsnAtltSqno;
            this.officeEduCode = this.lectureInfo.ofecCd;
            this.schoolCode = this.lectureInfo.schlCd;
            this.lctreLrnSqno = this.lectureInfo.lctreLrnSqno;
            let res = await Lecture.lesson.lecture.attend.create(this.token, {
                contentsSeq: this.contentsSeq,
                contentsTypeCode: this.contentsTypeCode,
                lectureSeq: this.lectureSeq,
                lessonAttendanceSeq: this.lessonAttendanceSeq,
                officeEduCode: this.officeEduCode,
                schoolCode: this.schoolCode,
                lessonSeq: this.lessonSeq
            });
            return res;
        } catch (err) {
            return { err: err };
        }
    }
    async Contents() {
        try {
            if (!this.lectureDetailInfo)
                await this.lectureData();
            return new ContentsDTO(this.lectureDetailInfo.lectureContentsDto);
        } catch (err) {
            return { err: err };
        }
    }

    async encrypt(memberSeq: number, percent: number){
        console.log(this.lctreLrnSqno);
    }
}