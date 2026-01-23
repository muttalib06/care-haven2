import axiosInstance from "@/lib/axiosInstance";

export async function getSingleGuide(slug) {
  const response = await axiosInstance.get(`/care-guide/${slug}`);
  return response;
}
