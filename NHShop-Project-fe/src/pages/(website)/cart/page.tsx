import useCart from "@/common/hooks/useCart";
import { TrashIcon } from "@/components/icons";
import { Link } from "react-router-dom";
import Services from "../home/_component/Services";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const CartPage = () => {
  const { data, mutate, isLoading, isError, total } = useCart();
  if (isLoading) return <div className="container text-center">Loading...</div>;
  if (isError)
    return (
      <h2 className="container text-center">
        Bạn chưa thêm sản phẩm nào vào giỏ hàng!
      </h2>
    );

  const hasProducts = data?.products.length > 0;

  const handleBuyNowClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!hasProducts) {
      e.preventDefault();
      alert("Giỏ hàng của bạn đang trống!");
    }
  };

  return (
    <div className="container mx-auto p-8">
      <div className="shadow-md rounded-lg bg-white">
      <h2 className="text-3xl font-bold mb-6  text-indigo-600 ml-4">
       Giỏ Hàng
      </h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" />
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sản phẩm</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Giá tiền</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Số lượng</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Thành tiền</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Chức năng</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data?.products.map((product: any, index: number) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded-md" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${product.price}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <button
                      className="bg-gray-200 p-2 rounded-md text-gray-600 hover:bg-gray-300"
                      onClick={() =>
                        mutate({
                          action: "DECREMENT",
                          productId: product.productId,
                        })
                      }
                    >
                      -
                    </button>
                    <span className="mx-4">{product.quantity}</span>
                    <button
                      className="bg-gray-200 p-2 rounded-md text-gray-600 hover:bg-gray-300"
                      onClick={() =>
                        mutate({
                          action: "INCREMENT",
                          productId: product.productId,
                        })
                      }
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${product.price * product.quantity}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <AlertDialog>
                    <AlertDialogTrigger>
                      <img src={TrashIcon} alt="Remove" className="w-6 h-6 text-red-500 cursor-pointer" />
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Bạn có muốn xoá sản phẩm khỏi giỏ hàng?</AlertDialogTitle>
                        <AlertDialogDescription>Sản phẩm sẽ bị xoá khỏi giỏ hàng</AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Huỷ</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() =>
                            mutate({
                              action: "REMOVE",
                              productId: product.productId,
                            })
                          }
                        >
                          Đồng ý
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Hóa Đơn</h2>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-700">Thành tiền:</span>
            <span className="text-gray-900 font-semibold">${total()}</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-700">Số Tiền Cần Thanh Toán:</span>
            <span className="text-gray-900 font-semibold">${total()}</span>
          </div>
          <Link
            to={hasProducts ? "/order" : "#"}
            className={`inline-block w-full py-2 px-4 text-center text-white rounded-md shadow-sm bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              !hasProducts ? "cursor-not-allowed opacity-50" : ""
            }`}
            onClick={handleBuyNowClick}
          >
            Mua Ngay
          </Link>
        </div>
      </div>
      <Services />
    </div>
  );
};

export default CartPage;
