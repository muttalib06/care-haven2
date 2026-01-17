import axiosInstance from "@/lib/axiosInstance";

export async function saveUser(data) {
  const response = await axiosInstance.post("/users", data);
  return response;
}
