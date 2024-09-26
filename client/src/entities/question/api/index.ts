import { ThemeList } from "@/entities/theme/model";
import { axiosInstance } from "@/shared/lib/axiosInstance";

export class QuestionService {
    static async getThemes(): Promise<ThemeList> {
        try {
            const { data } = await axiosInstance.get('/questions');
            return data.data;
        } catch (error) {
            console.error('Error getting all themes:', error);
            throw new Error('Failed to get all themes');
        }

    }
}