const Blog = () => {
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
      <section className="blog">
        <div className="container">
          <div className="section-heading section-blog-heading">
            <h2 className="section-heading__title" style={rainbowTextStyle}>
              Blog
            </h2>
          </div>
          <div className="section-body">
            <div className="post-list">
              <div className="post-item">
                <div className="post-image">
                  <a href="">
                    <img
                      src="https://picsum.photos/id/16/665/250"
                      alt=""
                      className="post__thumbnail"
                    />
                  </a>
                </div>
                <div className="post-info">
                  <h3 className="post__title">
                    <a href="" className="post__link">
                      THE ULTIMATE SOFA BUYING GUIDE
                    </a>
                  </h3>
                  <p className="post__excerpt">
                    The versatility of our living space is more crucial than
                    ever. But buying a sofa might be a difficult undertaking.
                    Your needs and the size of your living area will determine
                    everything, However, don’t worry, were are here to help you
                  </p>
                  <a href="" className="post__readmore">
                    ABOUT
                    <img src="/src/assets/icons/icon-arrow-right.svg" alt="" />
                  </a>
                </div>
              </div>
              {/*End .post-item*/}
              <div className="post-item">
                <div className="post-image">
                  <a href="">
                    <img
                      src="https://picsum.photos/id/18/665/250"
                      alt=""
                      className="post__thumbnail"
                    />
                  </a>
                </div>
                <div className="post-info">
                  <h3 className="post__title">
                    <a href="" className="post__link">
                      THE ULTIMATE SOFA BUYING GUIDE
                    </a>
                  </h3>
                  <p className="post__excerpt">
                    The versatility of our living space is more crucial than
                    ever. But buying a sofa might be a difficult undertaking.
                    Your needs and the size of your living area will determine
                    everything, However, don’t worry, were are here to help you
                  </p>
                  <a href="" className="post__readmore">
                    ABOUT
                    <img src="/src/assets/icons/icon-arrow-right.svg" alt="" />
                  </a>
                </div>
              </div>
              {/*End .post-item*/}
              <div className="post-item">
                <div className="post-image">
                  <a href="">
                    <img
                      src="https://picsum.photos/id/17/665/250"
                      alt=""
                      className="post__thumbnail"
                    />
                  </a>
                </div>
                <div className="post-info">
                  <h3 className="post__title">
                    <a href="" className="post__link">
                      THE ULTIMATE SOFA BUYING GUIDE
                    </a>
                  </h3>
                  <p className="post__excerpt">
                    The versatility of our living space is more crucial than
                    ever. But buying a sofa might be a difficult undertaking.
                    Your needs and the size of your living area will determine
                    everything, However, don’t worry, were are here to help you
                  </p>
                  <a href="" className="post__readmore">
                    ABOUT
                    <img src="/src/assets/icons/icon-arrow-right.svg" alt="" />
                  </a>
                </div>
              </div>
              {/*End .post-item*/}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
