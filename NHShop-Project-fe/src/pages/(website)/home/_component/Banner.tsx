import React, { useState, useEffect } from "react";
import { useSprings, animated, config } from "@react-spring/web";

const images = [
  "https://bizweb.dktcdn.net/100/438/322/themes/837712/assets/slider_2.jpg?1720955587125",
  "https://bizweb.dktcdn.net/100/438/322/themes/837712/assets/slider_3.jpg?1720955587125",
  "https://bizweb.dktcdn.net/100/438/322/themes/837712/assets/slider_1.jpg?1720955587125",
  "https://bizweb.dktcdn.net/100/438/322/themes/837712/assets/slider_4.jpg?1720955587125",
];

const Banner = () => {
  const [index, setIndex] = useState(0);

  const springs = useSprings(
    images.length,
    images.map((image, i) => ({
      opacity: i === index ? 1 : 0,
      transform: i === index ? "translateX(0%)" : "translateX(50%)",
      config: config.stiff,
    }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner-container relative overflow-hidden w-full h-[660px]">
      {" "}
      <div className="banner-wrapper absolute inset-0">
        {springs.map((props, i) => (
          <animated.img
            key={i}
            src={images[i]}
            style={{
              ...props,
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              willChange: "opacity, transform",
            }}
            alt={`Banner ${i}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
