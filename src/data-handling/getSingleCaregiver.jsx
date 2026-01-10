import axiosInstance from "@/lib/axiosInstance";


export const getSingleCaregiver = async (id) => {
  const response = await axiosInstance.get(`/getCaregiverById/${id}`);
  return response.data;
};
