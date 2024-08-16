import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const schema = yup.object().shape({
  name: yup.string().required("Họ và tên là bắt buộc"),
  email: yup.string().email("Email không hợp lệ").required("Email là bắt buộc"),
  phone: yup.string().required("Số điện thoại là bắt buộc"),
  message: yup.string().required("Lời nhắn là bắt buộc"),
});

type FormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const ContactPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log(data);
    alert('Gửi thành công,chúng tôi sẽ liên hệ với bạn sớm nhất');
  };

  return (
     
    <div className="container mx-auto p-8 shadow-md mt-5 mb-5">
      <h1 className="text-4xl font-bold mb-8  text-indigo-600">
        Liên Hệ
      </h1>

      {/* Google Map */}
      <div className="w-full mb-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7447.727851395522!2d105.747262!3d21.03813!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313455e940879933%3A0xcf10b34e9f1a03df!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYw!5e0!3m2!1sen!2sus!4v1722291695252!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-8">
        {/* Contact Form */}
        <div className="w-full lg:w-1/2">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Họ và Tên
              </label>
              <input
                type="text"
                className={`mt-1 block w-full px-4 py-2 border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                placeholder="Nhập họ và tên của bạn"
                {...register("name")}
              />
              {errors.name && (
                <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className={`mt-1 block w-full px-4 py-2 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                placeholder="Nhập email của bạn"
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Số điện thoại
              </label>
              <input
                type="tel"
                className={`mt-1 block w-full px-4 py-2 border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                placeholder="Nhập số điện thoại của bạn"
                {...register("phone")}
              />
              {errors.phone && (
                <p className="mt-1 text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Lời nhắn
              </label>
              <textarea
                className={`mt-1 block w-full px-4 py-2 border ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                placeholder="Nhập lời nhắn của bạn"
                {...register("message")}
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-red-500 text-sm">{errors.message.message}</p>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Gửi lời nhắn
              </button>
            </div>
          </form>
        </div>

       
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 space-y-6">
          <div className="flex items-start space-x-2">
            <FaMapMarkerAlt className="text-indigo-500 w-6 h-6" />
            <div>
              <h2 className="text-xl font-semibold">Địa chỉ</h2>
              <p>Số 1 Trịnh Văn Bô,Nam Từ Liêm,Hà Nội</p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <FaPhoneAlt className="text-indigo-500 w-6 h-6" />
            <div>
              <h2 className="text-xl font-semibold">Số điện thoại</h2>
              <p>0399926033</p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <FaEnvelope className="text-indigo-500 w-6 h-6" />
            <div>
              <h2 className="text-xl font-semibold">Email</h2>
              <p>hoanganhfullstack@gmail.com</p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
           
            <div>
              <h2 className="text-xl font-semibold">Hỗ Trợ</h2>
              <p className="text-red-500 font-semibold mt-2">Để được hỗ trợ và trả lời nhanh nhất,quý khách vui lòng nhập đầy đủ thông tin vào Form sau để nhân viên hỗ trợ tốt nhất.Thân ái.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
