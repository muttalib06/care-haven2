import axiosInstance from "@/lib/axiosInstance";

export async function userUpdateByEmail(email, data) {
  const response = await axiosInstance.patch(
    `/users?email=${email}`,
    data,
  );
  return response;
}
