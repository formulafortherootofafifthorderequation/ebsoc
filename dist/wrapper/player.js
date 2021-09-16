"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimplePlayer = exports.ContentsMvpDTO = exports.ContentsDTO = void 0;
var __1 = require("..");
var ContentsDTO = /** @class */ (function () {
    function ContentsDTO(json) {
        this.data = json;
    }
    ContentsDTO.prototype.ContentsMvp = function () {
        return new ContentsMvpDTO(this.data.lectureContentsMvpDto);
    };
    return ContentsDTO;
}());
exports.ContentsDTO = ContentsDTO;
var ContentsMvpDTO = /** @class */ (function () {
    function ContentsMvpDTO(json) {
        this.data = json;
    }
    ContentsMvpDTO.prototype.MvpFile = function () {
        return this.data.mvpFileDto;
    };
    return ContentsMvpDTO;
}());
exports.ContentsMvpDTO = ContentsMvpDTO;
var SimplePlayer = /** @class */ (function () {
    function SimplePlayer(token, classUrlPath, lessonSeq, subLessonSeq) {
        this.token = token;
        this.classUrlPath = classUrlPath;
        this.lessonSeq = lessonSeq;
        this.subLessonSeq = subLessonSeq;
    }
    SimplePlayer.prototype.courseData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, __1.Lecture.$classUrlPath.lesson.lecture.attend.list.$lessonSeq(this.token, {
                                classUrlPath: this.classUrlPath,
                                lessonSeq: this.lessonSeq
                            })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                    case 2:
                        err_1 = _a.sent();
                        return [2 /*return*/, { err: err_1 }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SimplePlayer.prototype.lectureData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, __1.Lecture.$classUrlPath.lesson.lecture.attend.list._$lessonSeq.$subLessonSeq(this.token, {
                                classUrlPath: this.classUrlPath,
                                lessonSeq: this.lessonSeq,
                                subLessonSeq: this.subLessonSeq
                            })];
                    case 1:
                        res = _a.sent();
                        this.lectureInfo = res.data;
                        return [2 /*return*/, res];
                    case 2:
                        err_2 = _a.sent();
                        return [2 /*return*/, { err: err_2 }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SimplePlayer.prototype.lectureDetailData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, __1.Common.lecture.detail.lesson.$subLessonSeq(this.token, {
                                subLessonSeq: this.subLessonSeq
                            })];
                    case 1:
                        res = _a.sent();
                        this.lectureDetailInfo = res.data;
                        return [2 /*return*/, res];
                    case 2:
                        err_3 = _a.sent();
                        return [2 /*return*/, { err: err_3 }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SimplePlayer.prototype.create = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        if (!!this.lectureInfo) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.lectureData()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.contentsSeq = this.lectureInfo.cntnsSqno;
                        this.contentsTypeCode = this.lectureInfo.cntnsTyCd;
                        this.lectureSeq = this.lectureInfo.lctreSqno;
                        this.lessonAttendanceSeq = this.lectureInfo.lsnAtltSqno;
                        this.officeEduCode = this.lectureInfo.ofecCd;
                        this.schoolCode = this.lectureInfo.schlCd;
                        this.lctreLrnSqno = this.lectureInfo.lctreLrnSqno;
                        return [4 /*yield*/, __1.Lecture.lesson.lecture.attend.create(this.token, {
                                contentsSeq: this.contentsSeq,
                                contentsTypeCode: this.contentsTypeCode,
                                lectureSeq: this.lectureSeq,
                                lessonAttendanceSeq: this.lessonAttendanceSeq,
                                officeEduCode: this.officeEduCode,
                                schoolCode: this.schoolCode,
                                lessonSeq: this.lessonSeq
                            })];
                    case 3:
                        res = _a.sent();
                        return [2 /*return*/, res];
                    case 4:
                        err_4 = _a.sent();
                        return [2 /*return*/, { err: err_4 }];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    SimplePlayer.prototype.Contents = function () {
        return __awaiter(this, void 0, void 0, function () {
            var err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        if (!!this.lectureDetailInfo) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.lectureData()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, new ContentsDTO(this.lectureDetailInfo.lectureContentsDto)];
                    case 3:
                        err_5 = _a.sent();
                        return [2 /*return*/, { err: err_5 }];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SimplePlayer.prototype.encrypt = function (memberSeq, percent) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log(this.lctreLrnSqno);
                return [2 /*return*/];
            });
        });
    };
    return SimplePlayer;
}());
exports.SimplePlayer = SimplePlayer;
//# sourceMappingURL=player.js.map