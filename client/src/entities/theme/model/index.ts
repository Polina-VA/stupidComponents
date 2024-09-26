import { QuestionList } from "@/entities/question";

export type Theme = {
    id: number;
    title: string;
    questions: QuestionList;
    createdAt: Date;
    updatedAt: Date;
}

export type ThemeList = Theme[];

