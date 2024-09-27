import { QuestionList } from "@/entities/question";

export type Theme = {
    id: number;
    title: string;
    Questions: QuestionList;
    createdAt: Date;
    updatedAt: Date;
}

export type ThemeList = Theme[];

