import { defineStore } from 'pinia';

export interface ExamItem {
    title: string,
    type: string,
    id: string,
    code: string,
    answer?: string
}

export const useExamStore = defineStore('exam', {
    state: () => ({
        examList: [] as ExamItem[]
    }),

    getters: {
        getExamList: (state) => state.examList
    },
    
    actions: {
        setExamList(list: ExamItem[]) {
            this.examList = list
        },
        resetExamList() {
            this.examList = []
        }
    }
})
