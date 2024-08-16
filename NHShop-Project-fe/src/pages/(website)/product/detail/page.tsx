import ProductQuery from "@/common/hooks/ProductQuery";
import { useParams } from "react-router-dom";
import RelatedProduct from "../_component/RelatedProduct";
import { useLocalStorage } from "@/common/hooks/useStorage";
import { toast } from "@/components/ui/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
const ProductDetail = () => {
  const [user] = useLocalStorage("user", {});
  const userId = user?.user?._id;
  const queryClient = useQueryClient();
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    setQuantity((quantity) => quantity + 1);
  };
  const decreaseQuantity = () => {
    setQuantity(
      quantity > 1 ? (quantity) => quantity - 1 : (quantity) => quantity
    );
  };
//   cái nút này tôi thêm để xóa cái so sánh, dùng để mua ngay sản phẩm
  const handleBuyNow = () => {
    window.location.href = "/order";
  };
  const { mutate } = useMutation({
    mutationFn: async ({
      productId,
      quantity,
    }: {
      productId: string | number;
      quantity: number;
    }) => {
      const { data } = await axios.post(
        `http://localhost:8080/api/v1/carts/add-to-cart`,
        {
          userId,
          productId,
          quantity,
        }
      );
      return data;
    },
    onSuccess: () => {
      toast({
        title: "Thêm vào giỏ hàng thành công!",
        variant: "success",
      });
      queryClient.invalidateQueries({
        queryKey: ["CART", userId],
      });
    },
  });
  const { id } = useParams();
  const { data, isLoading } = ProductQuery(id);
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div>
        <section className="filters">
          <div className="container">
            <div className="filters-around">
              <div className="filters-choose">
                <div className="filters-choose__action">
                  <span className="filters__text">Trang Chủ</span>
                  <img src="/src/assets/icons/next.svg" alt="" />
                  <span className="filters__text">Sản Phẩm</span>
                  <img src="/src/assets/icons/next.svg" alt="" />
                </div>

                <div className="filters-show">
                  <span className="filters-show__text">{data.name}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="products">
          <div className="container">
            <div className="products-around">
              <div className="products-img">
                <div className="products-img__gallery">
                  <ul className="products-img__list">
                    <li className="products-img__item">
                      <img src={data.gallery[0]} alt="" />
                    </li>
                    <li className="products-img__item">
                      <img src={data.gallery[1]} alt="" />
                    </li>
                    <li className="products-img__item">
                      <img src={data.gallery[2]} alt="" />
                    </li>
                    <li className="products-img__item">
                      <img src={data.gallery[3]} alt="" />
                    </li>
                  </ul>
                </div>
                <div className="products-img__thumbnail">
                  <img src={data.image} alt="" />
                </div>
              </div>
              <div className="products-info">
                <h2 className="products__name">{data.name}</h2>
                <h4 className="products__price">${data.price}</h4>
                <div className="products-info__judge">
                  <div className="products__star">
                    <img src="/src/assets/icons/star.svg" alt="" />
                    <img src="/src/assets/icons/star.svg" alt="" />
                    <img src="/src/assets/icons/star.svg" alt="" />
                    <img src="/src/assets/icons/star.svg" alt="" />
                    <img src="/src/assets/icons/star-half.svg" alt="" />
                  </div>
                  <div className="products__review">
                    <span>5 người đã mua</span>
                  </div>
                </div>
                <div className="products-description">
                  <p>{data.description}</p>
                </div>
                <div className="products-btn mt-8">
                  <button className="products-btn__count">
                    <button className="minus" onClick={decreaseQuantity}>
                      -
                    </button>
                    <span>{quantity}</span>
                    <button className="plus" onClick={increaseQuantity}>
                      +
                    </button>
                  </button>
                  <button
                    className="products__btn"
                    onClick={() =>
                      mutate({
                        productId: data._id as any,
                        quantity: quantity,
                      })
                    }
                  >
                    Thêm Vào Giỏ
                  </button>
                  <button className="products__btn" onClick={handleBuyNow}>
                    Mua Ngay
                  </button>
                </div>
                <hr className="hr" />
                <div className="products-info__more">
                  <div className="products__group">
                    <span className="products__title">Tên Sản Phẩm</span>
                    <span className="products__colons">:</span>
                    <span className="products__description">{data.name}</span>
                  </div>
                  <div className="products__group">
                    <span className="products__title">Phân Loại</span>
                    <span className="products__colons">:</span>
                    <span className="products__description">Phím Cơ</span>
                  </div>
                  
                  <div className="products__group">
                    <span className="products__title">Chia Sẻ</span>
                    <span className="products__colons">:</span>
                    <span className="products__description">
                      <img src="/src/assets/icons/fb.svg" alt="" />
                      <img src="/src/assets/icons/linkedin.svg" alt="" />
                      <img src="/src/assets/icons/twitter.svg" alt="" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr className="hr" />
        <section className="description">
          <div className="container">
            <div className="description-header">
              <div className="description-header__title">
                <h2 className="description__title active">Mô tả sản phẩm</h2>
              </div>
              <div className="description-body">
                <p>{data.description}</p>
                <p></p>
              </div>
              <div className="description-image">
                <img src={data.gallery[0]} alt="" />
                <img src={data.gallery[2]} alt="" />
              </div>
            </div>
          </div>
        </section>
        <hr className="hr" />
        <section className="product">
          <div className="container">
            <h1 className="related-product__title">Có Thể Bạn Quan Tâm</h1>
            <RelatedProduct id={data.category._id} />
            <div className="btn-showmore">
              <button className="btn-showmore__action">Xem Thêm</button>
            </div>
          </div>
        </section>
        <hr className="hr" />
      </div>
    </>
  );
};

export default ProductDetail;
