import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const OrderConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orderData = location.state?.orderData;

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Xác Nhận Đơn Hàng</h2>
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-lg font-bold mb-4">Cảm ơn bạn đã đặt hàng!</h3>
        <p className="mb-4">
          Đơn hàng của bạn đã được gửi đi thành công.
        </p>
        <p className="text-black-500 mb-4">
          Chúng tôi sẽ sớm liên hệ lại với bạn!
        </p>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
