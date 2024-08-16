import { IUsers } from "@/common/types/users";
import instance from "@/config/axios";

export const getUsers = async (): Promise<IUsers[]> => {
  try {
    const { data } = await instance.get("/users");
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export const deleteUsers = async (id: Number | String) => {
  try {
    const { data } = await instance.delete(`/users/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const updateUsers = async (users: IUsers) => {
  try {
    const { data } = await instance.put(`/users/${users._id}`, users);
    return data;
  } catch (error) {
    console.log(error);
  }
};
