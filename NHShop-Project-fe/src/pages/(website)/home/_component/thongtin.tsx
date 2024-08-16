import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      
      <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-8 text-indigo-600">
        Về Chúng Tôi
      </h1>
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Giới Thiệu</h2>
            <p className="text-gray-700">
              Sói Gear là nhà phân phối và bán lẻ hàng đầu về các thiết bị chơi game, phụ kiện máy tính và các sản phẩm công nghệ khác. Chúng tôi cam kết mang đến cho khách hàng những sản phẩm chất lượng cao với giá cả cạnh tranh.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Sứ Mệnh</h2>
            <p className="text-gray-700">
              Sứ mệnh của chúng tôi là cung cấp các sản phẩm và dịch vụ tốt nhất, đáp ứng nhu cầu của khách hàng và mang lại trải nghiệm mua sắm tuyệt vời.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Giá Trị Cốt Lõi</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Chất lượng: Cam kết cung cấp sản phẩm và dịch vụ chất lượng cao.</li>
              <li>Uy tín: Luôn đặt chữ tín lên hàng đầu trong mọi hoạt động.</li>
              <li>Khách hàng: Luôn lắng nghe và đáp ứng nhu cầu của khách hàng.</li>
              <li>Đổi mới: Không ngừng cải tiến và sáng tạo để phát triển.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Liên Hệ</h2>
            <p className="text-gray-700">
              Nếu bạn có bất kỳ thắc mắc nào, vui lòng liên hệ với chúng tôi qua các kênh sau:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Địa chỉ: Số 1 Trịnh Văn Bô,Nam Từ Liêm,Hà Nội</li>
              <li>Điện thoại: 0399926033</li>
              <li>Email: hoanganhfullstack@gmail.com</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
