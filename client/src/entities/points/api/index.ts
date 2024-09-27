import { axiosInstance } from "@/shared/lib/axiosInstance";
import { Point } from "../model";

export class PointService {
  static async createPoint(): Promise<Point> {
    try {
      const response = await axiosInstance.post("/points");
      return response.data;
    } catch (error) {
      console.error("Error creating points:", error);
      throw new Error("Failed to create points.");
    }
  }
  static async getPoints(): Promise<Point> {
    try {
      const response = await axiosInstance.get("/points");
      return response.data;
    } catch (error) {
      console.error("Error fetching points:", error);
      throw new Error("Failed to fetch points.");
    }
  }

  static async updatePoint(points: number): Promise<Point> {
    try {
      const response = await axiosInstance.put("/points", {
        points});
      return response.data;
    } catch (error) {
      console.error("Error updating points:", error);
      throw new Error("Failed to update points.");
    }
  }
}
