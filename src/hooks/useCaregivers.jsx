
import { getAllCaregivers } from "@/data-handling/caregivers";
import { useQuery } from "@tanstack/react-query";

export const useCaregivers = () => {
  return useQuery({
    queryKey: ["caregivers"],
    queryFn: getAllCaregivers,
  });
};
