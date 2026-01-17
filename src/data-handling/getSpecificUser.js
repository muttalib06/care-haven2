import axiosInstance from "@/lib/axiosInstance";

export async function getSpecificUser(email) {
  const response = await axiosInstance.get(`/users?email=${email}`);
  return response;
}
