import axiosInstance from "@/lib/axiosInstance";

export const getAllCaregivers = async () => {
  const response = await axiosInstance.get("/caregivers");
  return response.data;
};
