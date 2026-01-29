import axiosInstance from "@/lib/axiosInstance";

export async function saveCaregiver(formData) {
  const response = await axiosInstance.post("/caregivers/apply", formData);
  return response;
}
