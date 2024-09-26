export type Question = {
    id: number;
    question: string;
    themeId: number;
    answer: string;
    createdAt: Date;
    updatedAt: Date;
}

export type QuestionList = Question[]

