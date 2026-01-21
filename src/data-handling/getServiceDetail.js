import axiosInstance from "@/lib/axiosInstance";

export async function getServiceDetail(slug) {
  const response = await axiosInstance.get(`/services/${slug}`);
  return response;
}
