import { ShopImg1, ShopImg2, ShopImg3, ShopImg4 } from "@/components/icons";

const Shop = () => {
  const rainbowTextStyle = {
    animation: "rainbowText 5s infinite",
  };

  const keyframes = `
    @keyframes rainbowText {
      0% { color: red; }
      14% { color: orange; }
      28% { color: yellow; }
      42% { color: green; }
      57% { color: blue; }
      71% { color: indigo; }
      85% { color: violet; }
      100% { color: red; }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <section className="shop">
        <div className="container">
          <div className="section-heading">
            <h2 className="section-heading__title" style={rainbowTextStyle}>
              Hot Trong Tuần
            </h2>
          </div>
          <div className="section-body">
            <div className="shops">
              <div className="shop-item">
                <a href="" className="shop__link">
                  <img src={ShopImg1} alt="" className="shop__image" />
                </a>
              </div>
              <div className="shop-item">
                <a href="" className="shop__link">
                  <img src={ShopImg2} alt="" className="shop__image" />
                </a>
              </div>
              <div className="shop-item">
                <a href="" className="shop__link">
                  <img src={ShopImg3} alt="" className="shop__image" />
                </a>
              </div>
              <div className="shop-item">
                <a href="" className="shop__link">
                  <img src={ShopImg4} alt="" className="shop__image" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
