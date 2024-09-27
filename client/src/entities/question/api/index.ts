import { axiosInstance } from "@/shared/lib/axiosInstance";
import { Question } from "../model";

export class QuestionService {
    static async getQuestion(questionId: number): Promise<Question> {
        try {
            const { data } = await axiosInstance.get(`/questions/${questionId}`);
            return data.data;
        } catch (error) {
            console.error('Error getting all themes:', error);
            throw new Error('Failed to get all themes');
        }

    }
}