export type Question = {
    id: number;
    question: string;
    themeId: number;
    answer: string;
    image:string;
    point: number;
    createdAt: Date;
    updatedAt: Date;
}

export type QuestionList = Question[]

