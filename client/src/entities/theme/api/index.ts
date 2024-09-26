import { axiosInstance } from "@/shared/lib/axiosInstance";
import { ThemeList } from "../model";


export class ThemeService {
    static async getAllThemesAndQuestions() : Promise<ThemeList> {
        try {
        const response = await axiosInstance.get<ThemeList>('/questions')
            return response.data;
        } catch (error) {
            console.error('Error getting all themes:', error);
            throw new Error('Failed to get all themes');
        }
    
    }

}