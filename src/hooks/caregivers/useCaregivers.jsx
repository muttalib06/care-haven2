import { getAllCaregivers } from "@/data-handling/GetAllCaregivers";
import { useQuery } from "@tanstack/react-query";

export const useCaregivers = () => {
  return useQuery({
    queryKey: ["caregivers"],
    queryFn: getAllCaregivers,
  });
};
