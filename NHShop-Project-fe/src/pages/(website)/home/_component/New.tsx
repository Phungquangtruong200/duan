import React from "react";
import ProductList from "../../product/_component/ProductList";

const New = () => {
  const rainbowTextStyle = {
    animation: "rainbowText 8s infinite",
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
      <section className="mt-[10px]">
        <div className="container">
          <div className="section-heading">
            <h2 className="section-heading__title" style={rainbowTextStyle}>
              Sản Phẩm Mới
            </h2>
          </div>
          <ProductList featured={true} />
        </div>
      </section>
    </>
  );
};

export default New;
