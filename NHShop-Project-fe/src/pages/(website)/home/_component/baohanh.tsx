import React from "react";
import {
  FaBox,
  FaShippingFast,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTimesCircle,
} from "react-icons/fa";

const WarrantyPolicy: React.FC = () => {
  return (
    <section className="bg-white p-8  rounded-lg ml-36 shadow-md mt-5 mb-5">
      <h2 className="text-3xl font-bold mb-6  text-indigo-600">
        Chính Sách Bảo Hành
      </h2>
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold">
          QUY TRÌNH GỬI BẢO HÀNH CÁC SẢN PHẨM MUA BỞI SÓI GEAR
        </h3>
        <ol className="list-decimal list-inside space-y-4">
          <li className="flex items-start space-x-2">
            <FaBox className="text-indigo-500 w-5 h-5 mt-1" />
            <span>
              Quý khách vui lòng đóng gói kỹ sản phẩm để đảm bảo an toàn khi vận
              chuyển hàng.
            </span>
          </li>
          <li className="flex items-start space-x-2">
            <FaShippingFast className="text-indigo-500 w-5 h-5 mt-1" />
            <span>
              Bên ngoài kiện hàng vui lòng ghi Tên, SĐT và Địa chỉ của quý khách
              để shop tiện liên lạc và gửi hàng lại.
            </span>
          </li>
          <li className="flex items-start space-x-2">
            <FaMapMarkerAlt className="text-indigo-500 w-5 h-5 mt-1" />
            <span>
              Gửi sản phẩm về Sói Gear theo thông tin sau (quý khách tự thanh
              toán chi phí vận chuyển chiều gửi đi):
              <br />
              <strong>Người nhận:</strong>{" "}
              <strong className="text-red-500"> Bùi Lê Hoàng Anh</strong>
              <br />
              <strong>SĐT:</strong> 0399926033
              <br />
              <strong>Địa chỉ:</strong> Số 1 Đường Trịnh Văn Bô, Nam Từ Liêm, Hà
              Nội
            </span>
          </li>
          <li className="flex items-start space-x-2">
            <FaShippingFast className="text-indigo-500 w-5 h-5 mt-1" />
            <span>
              Sau khi bảo hành xong, Sói Gear sẽ liên hệ gửi lại sản phẩm về địa
              chỉ mà quý khách cung cấp. (Chi phí vận chuyển chiều gửi lại do
              Sói Gear thanh toán)
            </span>
          </li>
        </ol>

        <h3 className="text-2xl font-semibold mt-8">A. Địa điểm bảo hành:</h3>
        <ul className="list-disc list-inside space-y-4">
          <li>
            Toàn bộ sản phẩm được phân phối và bán lẻ bởi Sói Gear đều được bảo
            hành tại địa chỉ của Sói Gear.
          </li>
          <li>
            Đối với những đơn hàng mua hàng từ xa, quý khách vui lòng gọi điện,
            nhắn tin qua Fanpage, Shopee, Lazada, Zalo để được Sói Gear hỗ trợ
            xác định tình trạng sản phẩm.
          </li>
          <li>
            Với các trường hợp bảo hành từ xa, quy trình bảo hành thực hiện như
            sau:
            <ol className="list-decimal list-inside space-y-2 ml-5 mt-2">
              <li>
                Quý khách vui lòng đóng gói kỹ sản phẩm để đảm bảo an toàn khi
                vận chuyển hàng. Sói Gear sẽ không chịu trách nhiệm khi có các
                lỗi phát sinh do quá trình vận chuyển.
              </li>
              <li>
                Bên ngoài kiện hàng vui lòng ghi Tên, SĐT và Địa chỉ của quý
                khách để shop tiện liên lạc và gửi hàng lại.
              </li>
            </ol>
          </li>
          <li>
            Gửi sản phẩm về địa chỉ của Sói Gear. Chi phí chuyển phát chiều gửi
            đi quý khách vui lòng tự thanh toán.
          </li>
          <li>
            Sau khi bảo hành xong, Sói Gear sẽ liên hệ gửi lại sản phẩm về địa
            chỉ mà quý khách cung cấp. Chi phí vận chuyển chiều gửi lại do Sói
            Gear thanh toán.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold mt-8">
          B. Những trường hợp sau không được bảo hành:
        </h3>
        <ul className="list-disc list-inside space-y-4">
          <li>
            <FaTimesCircle className="inline text-red-500 w-5 h-5 mr-2" />
            Các sản phẩm không còn nguyên tem niêm phong, tem bảo hành, có hiện
            tượng bị tháo rời để tự ý can thiệp vào kết cấu bên trong của sản
            phẩm.
          </li>
          <li>
            <FaTimesCircle className="inline text-red-500 w-5 h-5 mr-2" />
            Sử dụng nguồn sạc điện trực tiếp đối với các thiết bị không dây, dẫn
            tới hỏng hóc linh kiện và chức năng sử dụng pin của bàn phím.
          </li>
          <li>
            <FaTimesCircle className="inline text-red-500 w-5 h-5 mr-2" />
            Hư hỏng do tác động vật lý của người tiêu dùng như rơi vỡ, va chạm,
            vào nước, ẩm thấp, chập cháy.
          </li>
          <li>
            <FaTimesCircle className="inline text-red-500 w-5 h-5 mr-2" />
            Hư hỏng do thiên tai, động vật, côn trùng và do con người gây ra.
          </li>
          <li>
            <FaTimesCircle className="inline text-red-500 w-5 h-5 mr-2" />
            Hiện tượng rỉ sét do yếu tố thời tiết, độ ẩm, thói quen người dùng
            đều không được bảo hành.
          </li>
          <li>
            <FaTimesCircle className="inline text-red-500 w-5 h-5 mr-2" />
            Hết thời hạn bảo hành ghi trên tem.
          </li>
          <li>
            <FaTimesCircle className="inline text-red-500 w-5 h-5 mr-2" />
            Khách hàng tự ý can thiệp vào firmware của sản phẩm.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold mt-8">
          C. Các trường hợp khác sẽ được bảo hành theo tiêu chuẩn của nhà sản
          xuất:
        </h3>
        <ul className="list-disc list-inside space-y-4">
          <li>
            Cụ thể với bàn phím cơ sẽ được bảo hành các lỗi phát sinh do nhà sản
            xuất mà không phải do người dùng: Hỏng mạch, chết led, lỗi kết nối.
          </li>
          <li>
            Các sản phẩm không sử dụng điện như Keycap, Switch, Keypuller,
            Switch Puller, Lube Station... đều không bảo hành.
          </li>
        </ul>
      </div>
      <p className="mt-8 text-gray-600 text-center">
        Nếu bạn có bất kỳ câu hỏi nào về chế độ bảo hành, vui lòng liên hệ chúng
        tôi qua số điện thoại hoặc email hỗ trợ.
      </p>
      <div className="mt-6 flex justify-center">
        <a
          href="tel:0123456789"
          className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800 transition duration-300"
        >
          <FaPhoneAlt className="w-5 h-5" />
          <span>0399926033</span>
        </a>
      </div>
    </section>
  );
};

export default WarrantyPolicy;
