import { IUsers } from "@/common/types/users";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import instance from "@/config/axios";
import { useEffect, useState } from "react";

const UserManagement = () => {
  const [users, setUsers] = useState<IUsers[]>([]);

  useEffect(() => {
    const Api = async () => {
      const { data } = await instance.get("/users");
      setUsers(data);
    };
    Api();
  }, []);

  const handleDelete = async (id: string | number) => {
    try {
      if (window.confirm('Chắc chắn muốn xóa')) {
        await instance.delete(`/users/${id}`);
        setUsers(users.filter((user) => user._id !== id));
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 ml-4">Thông Tin Người Dùng</h1>
      <div className="flex flex-col gap-4 mt-10">
        <div className="flex font-semibold border-b pb-2">
          <div className="flex-1 px-4 text-center">Tên Khách Hàng</div>
          <div className="flex-1 px-4 text-center">Email</div>
          <div className="flex-1 px-4 text-center">Mật Khẩu</div>
          <div className="flex-1 px-4 text-center">Ngày Đăng Kí</div>
          <div className="w-32 px-4 text-center">Chức Năng</div>
        </div>

        {users.map((user) => (
          <div key={user._id} className="flex items-center border p-4 rounded">
            <div className="flex-1 px-4">
              <Input
                value={user.name}
                readOnly
                className="bg-gray-100 w-full text-center"
              />
            </div>
            <div className="flex-1 px-4">
              <Input
                value={user.email}
                readOnly
                className="bg-gray-100 w-full text-center"
              />
            </div>
            <div className="flex-1 px-4">
              <Input
                value={user.password}
                readOnly
                className="bg-gray-100 w-full text-center"
              />
            </div>
            <div className="flex-1 px-4">
              <Input
                value={new Date(user.createdAt).toLocaleDateString()}
                readOnly
                className="bg-gray-100 w-full text-center"
              />
            </div>
            <div className="w-32 px-4 text-center">
              <Button
                className="w-full"
                onClick={() => user._id && handleDelete(user._id)}
              >
                Xóa
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserManagement;
