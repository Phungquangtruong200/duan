import CategoryAdd from "@/pages/(dashboard)/category/_component/add";
import LayoutAdmin from "@/pages/(dashboard)/layout";
import ProductAdd from "@/pages/(dashboard)/product/_component/add";
import ProductEditPage from "@/pages/(dashboard)/product/_component/edit";
import ProductList from "@/pages/(dashboard)/product/_component/list";
import ProductManagement from "@/pages/(dashboard)/product/page";
import AuthPage from "@/pages/(website)/(auth)/page";
import NotFound from "@/pages/(website)/404/page";
import CartPage from "@/pages/(website)/cart/page";
import HomePage from "@/pages/(website)/home/page";
import LayoutWebsite from "@/pages/(website)/layout";
import OrderPage from "@/pages/(website)/order/page";
import CategoryDetail from "@/pages/(website)/product/category/detail/page";
import ProductDetail from "@/pages/(website)/product/detail/page";
import TestDetail from "@/pages/(website)/product/detail/test";
import ShopPage from "@/pages/(website)/product/page";
import { Route, Routes } from "react-router-dom";
import UserManagement from "@/pages/(dashboard)/category/_component/UserManagement";
import Baohanh from "@/pages/(website)/home/_component/baohanh";
import Contact from "@/pages/(website)/home/_component/contact";
import Thongtin from "@/pages/(website)/home/_component/thongtin";
import OrderConfirmationPage from "@/pages/(website)/home/_component/ordersuccess";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutWebsite />}>
          <Route path="/" index element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="detail/:id" element={<ProductDetail />} />
          <Route path="categories/:id" element={<CategoryDetail />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="order" element={<OrderPage />} />
          <Route path="auth-user" element={<AuthPage />} />
          <Route path="warranty" element={<Baohanh />} />
          <Route path="contact" element={<Contact />} />
          <Route path="ordersucess" element={<OrderConfirmationPage />} />
          <Route path="info" element={<Thongtin />} />
          <Route path="test" element={<TestDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route
          path="admin"
          element={
            // <PrivateRoute>
            <LayoutAdmin />
            // </PrivateRoute>
          }
        >
          <Route index element={<ProductManagement />} />
          <Route path="products" element={<ProductList />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="products/add" element={<ProductAdd />} />
          <Route path="products/edit/:id" element={<ProductEditPage />} />
          <Route path="categories/add" element={<CategoryAdd />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Router;
