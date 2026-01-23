import axiosInstance from "@/lib/axiosInstance";

export async function getCareGuides() {
  const response = await axiosInstance.get("/care-guide");
  return response;
}
