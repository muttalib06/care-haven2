
import axiosInstance from "@/lib/axiosInstance";

export async function saveCaregiver(formData) {
  const response = await axiosInstance.post("/caregivers/apply", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
}
