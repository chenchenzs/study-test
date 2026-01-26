import type { IQueryResultPromise } from "@/env";
import useDatabase from "@/utils/useDatabase";

const examRecordsDB = useDatabase('examRecords');
const testDataDB = useDatabase('testData');


export interface ExamRecordItem {
    id: string;
    examName: string;
    examDetail: any[];
    time: number;
}


export function getExamRecords():IQueryResultPromise<ExamRecordItem> {
    return examRecordsDB.get();
}

export function getTestData(type: string) {
    return testDataDB.where({ type }).get();
}

export function addExamRecord(record: any) {
    return examRecordsDB.add({
        data: record
    })
}