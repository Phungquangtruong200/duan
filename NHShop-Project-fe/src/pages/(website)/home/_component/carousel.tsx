import React from "react";

const images = [
  {
    src: "https://bizweb.dktcdn.net/thumb/small/100/438/322/collections/zoom65v2-exploded2-vuong.jpg?v=1679055931887",
    caption: "Bàn phím cơ",
  },
  {
    src: "https://bizweb.dktcdn.net/thumb/small/100/438/322/collections/15307-cherry-mx-keycap-r2-translucent-black-01.jpg?v=1634229563697",
    caption: "Keycap",
  },
  {
    src: "https://bizweb.dktcdn.net/thumb/small/100/438/322/collections/f0048a3ee665ce54d0dd82cc89ddc026.jpg?v=1634229637710",
    caption: "Phụ kiện",
  },
  {
    src: "https://bizweb.dktcdn.net/thumb/small/100/438/322/collections/10r.jpg?v=1679055556480",
    caption: "RK  ",
  },
  {
    src: "https://bizweb.dktcdn.net/thumb/small/100/438/322/collections/base.jpg?v=1679054732477",
    caption: "Keycap Cherry",
  },
  {
    src: "https://bizweb.dktcdn.net/thumb/small/100/438/322/collections/61ifhaojxwl-ac-sy450.jpg?v=1634229851633",
    caption: "Keycap OEM",
  },
  {
    src: "https://bizweb.dktcdn.net/thumb/small/100/438/322/collections/o1cn01sxqv5z2dpsaupksjc-35038659.jpg?v=1634402688307",
    caption: "Dầu lube",
  },
  {
    src: "https://bizweb.dktcdn.net/thumb/small/100/438/322/collections/3b7c3ec0f91039567075815f7288bfc1.jpg?v=1634229979927",
    caption: "Dụng cụ lube",
  },
  {
    src: "https://bizweb.dktcdn.net/thumb/small/100/438/322/collections/51935-mat-truoc-co-khoa-cua-tui-dung-ban-phim-leopold-keyboard-pouch-full-size-467-x-160-x-40mm-cobalt-blue.jpg?v=1634230021157",
    caption: "Túi đựng phím",
  },
];

const Carousel = () => {
  return (
    <div className="carousel-wrapper">
      <div className="carousel-container">
        {images.map((image, i) => (
          <div key={i} className="carousel-item">
            <img
              src={image.src}
              alt={`Carousel ${i}`}
              className="carousel-image"
              style={{ animationDelay: `${i * 1}s` }}
            />
            <div className="carousel-caption">{image.caption}</div>
          </div>
        ))}
      </div>
      <style>
        {`
          .carousel-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 300px;
            overflow: hidden;
          }

          .carousel-container {
            display: flex;
            gap: 50px; /* Adjust gap as needed */
            flex-direction: row;
          }

          .carousel-item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100px;
            height: 150px; /* Adjust height as needed */
            position: relative;
            overflow: hidden;
          }

          .carousel-image {
            width: 100px;
            height: 100px;
            object-fit: cover;
            border-radius: 50%;
            border: 1px solid #999999;
            animation: rotate 10s linear infinite;
          }

          .carousel-caption {
            margin-top: 17px;
            text-align: center;
            font-weight: 600; 
            font-size: 14px; 
            color: #333;
          }

          @keyframes rotate {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Carousel;
