import React from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useCart from "@/common/hooks/useCart";
import { useNavigate } from "react-router-dom";
import qrImage from "../../../assets/qr.jpg";
import axios from "axios";

const schema = yup.object().shape({
  firstname: yup.string().required("Họ là bắt buộc"),
  lastname: yup.string().required("Tên là bắt buộc"),
  city: yup.string().required("Thành phố là bắt buộc"),
  address: yup.string().required("Địa chỉ là bắt buộc"),
  phone: yup
    .string()
    .required("Số điện thoại là bắt buộc")
    .matches(/^[0-9]{11}$/, "Số điện thoại không hợp lệ"),
  email: yup.string().required("Email là bắt buộc").email("Email không hợp lệ"),
  paymentMethod: yup.string().required("Phương thức thanh toán là bắt buộc"),
});

const OrderPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { data, isLoading, isError } = useCart();
  const navigate = useNavigate();

  const FORM_URL = `https://docs.google.com/forms/d/e/1FAIpQLSd4Cmi96X82f3bBJ4dSsHNtBmVk-Ty9LfnC7wsh4OQhyJOqcA/formResponse`;

  const onSubmit = async (data: any) => {
    try {
      const formData = new URLSearchParams();
      formData.append("entry.81221352", data.firstname);
      formData.append("entry.1561075600", data.lastname);
      formData.append("entry.1646657796", data.city);
      formData.append("entry.254951697", data.address);
      formData.append("entry.845667114", data.phone);
      formData.append("entry.1174320302", data.email);
      formData.append("entry.1565494235", data.paymentMethod);

      await axios.post(FORM_URL, formData);

      alert("");
    } catch (error) {
      alert("Cảm ơn bạn đã đặt hàng, chúng tôi sẽ sớm liên hệ lại bạn.");
    } finally {
      navigate("/ordersucess");
    }
  };

  if (isLoading)
    return <div className="container text-center">Đang tải...</div>;
  if (isError)
    return (
      <h2 className="container text-center">
        Bạn chưa thêm sản phẩm nào vào giỏ hàng!
      </h2>
    );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Chi Tiết Thanh Toán</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">Tên:</label>
                <Controller
                  name="firstname"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className={`block w-full p-2 border rounded-md ${
                        errors.firstname ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Mời sếp nhập tên"
                    />
                  )}
                />
                {errors.firstname && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstname.message}
                  </p>
                )}
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">Họ:</label>
                <Controller
                  name="lastname"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className={`block w-full p-2 border rounded-md ${
                        errors.lastname ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Mời sếp nhập họ"
                    />
                  )}
                />
                {errors.lastname && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.lastname.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Thành Phố:
              </label>
              <Controller
                name="city"
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    className={`block w-full p-2 border rounded-md ${
                      errors.city ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <option value="">Chọn thành phố</option>
                    <option value="Hà Nội">Hà Nội</option>
                    <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
                    <option value="Khác">Khác</option>
                  </select>
                )}
              />
              {errors.city && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.city.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Địa Chỉ:</label>
              <Controller
                name="address"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className={`block w-full p-2 border rounded-md ${
                      errors.address ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Mời sếp nhập địa chỉ"
                  />
                )}
              />
              {errors.address && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.address.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Số điện thoại:
              </label>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className={`block w-full p-2 border rounded-md ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Mời sếp nhập số điện thoại"
                  />
                )}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email:</label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="email"
                    className={`block w-full p-2 border rounded-md ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Mời sếp nhập email"
                  />
                )}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <fieldset>
              <legend className="block text-sm font-medium mb-1">
                Phương thức thanh toán:
              </legend>
              <div className="flex flex-col space-y-2">
                <Controller
                  name="paymentMethod"
                  control={control}
                  render={({ field }) => (
                    <>
                      <label className="flex items-center">
                        <input
                          {...field}
                          type="radio"
                          value="Direct Bank Transfer"
                          className="mr-2"
                        />
                        Chuyển khoản ngân hàng
                      </label>
                    </>
                  )}
                />
                {errors.paymentMethod && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.paymentMethod.message}
                  </p>
                )}
              </div>
            </fieldset>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Xác nhận đơn hàng
            </button>
          </form>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-4">Chi Tiết Đơn Hàng</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              {/* Render order details here */}
            </table>
          </div>
          <div className="mt-4 text-center">
            <img
              src={qrImage}
              alt="Ảnh QR"
              className="custom-img mb-4 mx-auto"
            />
            <style>{`
              .custom-img {
                width: 250px; /* Bạn có thể điều chỉnh kích thước này */
                height: 300px;
              }
            `}</style>
            <p className="text-black-500 mb-4">
              Hiện tại Sói Gear chưa có phương thức thanh toán trực tiếp, chỉ
              gửi hàng sau khi nhận đủ tiền, quý khách vui lòng chuyển khoản vào
              QR ở trên. Trân trọng.
            </p>
            <p className="text-red-500 font-bold mb-4 mt-3">
              Lưu ý: chuyển khoản vui lòng ghi nội dung: Số điện thoại + Họ tên
              khách hàng, trường hợp thiếu nội dung, Sói Gear sẽ không xử lý đơn
              hàng.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
