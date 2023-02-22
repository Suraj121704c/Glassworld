import React from "react";
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard, Grid } from "swiper";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <div
        style={{ marginTop: "20px", marginBottom: "20px", textAlign: "center" }}
      >
        <h1 style={{ marginTop: "10px", marginBottom: "10px" }}>
          OUR TOP PRODUCTS
        </h1>
        <Swiper
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://static1.lenskart.com/media/desktop/img/Apr22/a2.png"
              alt="img1"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://static1.lenskart.com/media/desktop/img/Apr22/b2.png"
              alt="img2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static1.lenskart.com/media/desktop/img/Apr22/d2.png"
              alt="img3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static1.lenskart.com/media/desktop/img/June22/prog11.jpg"
              alt="img4"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="main">
      <Swiper
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://static1.lenskart.com/media/desktop/img/Oct22/kiara/Refresh-Banner-Web.gif" alt="1"/></SwiperSlide>
        <SwiperSlide><img src="https://static1.lenskart.com/media/desktop/img/Dec22/1-Dec/Homepage-Banner-web.gif" alt="1"/></SwiperSlide>
        <SwiperSlide><img src="https://static1.lenskart.com/media/desktop/img/Dec22/new-collection/desktop.gif" alt="1"/></SwiperSlide>
        <SwiperSlide><img src="https://static1.lenskart.com/media/desktop/img/Nov22/tinted/launch-desk.gif" alt="1"/></SwiperSlide>

        <SwiperSlide><img src="https://static1.lenskart.com/media/desktop/img/Jan23/helios-plp/web%20banner.gif" alt="1"/></SwiperSlide>
      </Swiper>
      </div>


      <div className="cart">
        <div className="card">
          <img
            src="https://static1.lenskart.com/media/desktop/img/Sep21/image179.png"
            alt="exploreimage"
          />
          <p>Rounded</p>
          <button>EXPLORE</button>
        </div>

        <div className="card">
          <img
            src="https://static1.lenskart.com/media/desktop/img/Sep21/cateeye.jpg"
            alt="expoloreimage"
          />
          <p>Clubmaster</p>
          <button>EXPLORE</button>
        </div>

        <div className="card">
          <img
            src="https://static1.lenskart.com/media/desktop/img/Sep21/image179.png"
            alt="exploreimage"
          />
          <p>Transparent</p>
          <button>EXPLORE</button>
        </div>

        <div className="card">
          <img
            src="https://static1.lenskart.com/media/desktop/img/Sep21/cateeye.jpg"
            alt="expoloreimage"
          />
          <p>Cat-Eye</p>
          <button>EXPLORE</button>
        </div>
      </div>

      <div className="banner">
        <h2>As Seen At New York Fashion Week</h2>
        <div className="img">
          <img
            src="https://static1.lenskart.com/media/desktop/img/Oct22/nyfw/web%20banner.gif"
            alt="bannerimage1"
          />
        </div>
      </div>

      <div className="banner">
        <h2>FIND THE PERFECT FIT</h2>
        <div className="t-img">
          <img
            src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/ce-square.jpg"
            alt="bannerimage2"
          />
          <img
            src="https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/Banner03_TileDesktop.jpg"
            alt="bannerimage2"
          />
        </div>
      </div>

      <div className="banner" style={{ textAlign: "center" }}>
        <h1 style={{marginTop:"10px",marginBottom:"10px"}}>INTRODUCING OJOS Wear - SUBSCRIBE & SAVE</h1>
        <div className="img">
          <img
            src="https://static1.lenskart.com/media/desktop/img/May22/ojos-web.jpg"
            alt="bannerimage3"
          />
        </div>
      </div>

      <div className="banner">
        <h2>OUR BRANDS</h2>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
            <img
              src="https://static1.lenskart.com/media/desktop/img/Aug21/25-Aug/LK-Readers-Banner.jpg"
              alt="bannerimage3"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/Banner05_Final2ndDec21.jpg"
              alt="bannerimage3"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/VC-Banner.jpg"
              alt="bannerimage3"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div
        className="swiper"
        style={{ textAlign: "center", marginTop: "20px", marginBottom: "30px" }}
      >
        <h1>Slide And Watch Our New Products</h1>
        <Swiper
          watchSlidesProgress={true}
          slidesPerView={3}
          className="mySwiper"
          style={{ marginTop: "10px" }}
        >
          <SwiperSlide>
            <img
              src="https://static1.lenskart.com/media/desktop/img/June22/prog11.jpg"
              alt="1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//j/o/john-jacobs-jj-e10235-c7-eyeglasses_g_2374.jpg"
              alt="2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static1.lenskart.com/media/desktop/img/Sep21/image179.png"
              alt="3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static1.lenskart.com/media/desktop/img/Apr22/b2.png"
              alt="4"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static1.lenskart.com/media/desktop/img/June22/prog11.jpg"
              alt="5"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//j/o/john-jacobs-jj-e10235-c7-eyeglasses_g_2374.jpg"
              alt="6"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static1.lenskart.com/media/desktop/img/June22/prog11.jpg"
              alt="7"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static1.lenskart.com/media/desktop/img/Sep21/image179.png"
              alt="8"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static1.lenskart.com/media/desktop/img/Apr22/b2.png"
              alt="9"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="main-m=img">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://static1.lenskart.com/media/desktop/img/Aug21/25-Aug/LK-AIR-Banner.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static1.lenskart.com/media/desktop/img/Nov22/Updated%20brand%20banner%20jj%20.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/Banner05_Final2ndDec21.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div
        className="swiperlast"
        style={{ marginTop: "20px", marginBottom: "20px", textAlign: "center" }}
      >
        <h1 style={{ marginTop: "10px", marginBottom: "10px" }}>
          CLICK NEXT TO SEE OUR UPCOMING PRODUCTS
        </h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://cdn.eyemyeye.com/shared/images/products/S12A2001/S12A2001-1.jpg"
              alt="9"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.eyemyeye.com/shared/images/products/S15C4698/S15C4698-1.jpg"
              alt="9"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.eyemyeye.com/shared/images/products/S25B3668/S25B3668-1.jpg"
              alt="9"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.eyemyeye.com/shared/images/products/S75B2001/S75B2001-1.jpg"
              alt="9"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.eyemyeye.com/shared/images/products/S12A4733/S12A4733-1.jpg"
              alt="9"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.eyemyeye.com/shared/images/products/S66A4672/S66A4672-1.jpg"
              alt="9"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.eyemyeye.com/shared/images/products/S25B3676/S25B3676-1.jpg"
              alt="9"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.eyemyeye.com/shared/images/products/S66B2000/S66B2000-1.jpg"
              alt="9"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.eyemyeye.com/shared/images/products/S15B4211/S15B4211-1.jpg"
              alt="9"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div
        className="whatsapp"
        style={{ marginTop: "20px", marginBottom: "20px" }}
      >
        <img
          src="https://static1.lenskart.com/media/desktop/img/Aug21/25-Aug/whatsapp.png"
          alt="whatsapp"
        />
      </div>

      <div className="contactLens">
        <img
          src="https://static1.lenskart.com/media/desktop/img/June22/Our-Brands-Banner.jpg"
          alt="contactLens"
        />
      </div>

      <div
        className="grid"
        style={{ marginTop: "20px", marginBottom: "20px", textAlign: "center" }}
      >
        <h1 style={{ marginTop: "10px", marginBottom: "10px" }}>
          SOME VERIFIED LENSES
        </h1>
        <Swiper
          slidesPerView={3}
          grid={{
            rows: 2,
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//a/q/aqualens-24-h-nt-daily-dis-toric-20lens_g_3984.jpg"
              alt="contactLens"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//a/q/aqualens-24-h-nxt-monly-dis-con-3lens_g_1202.jpg"
              alt="contactLens"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//a/q/aqualens-10h-montly-3lns-contact-lens_g_1197.jpg"
              alt="contactLens"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//a/q/aqualens-dly-dspoble-cntct-lense-10-lenses_aqualens-dly-dspoble-cntct-lense-10-lenses_g_1173-10.jpg"
              alt="contactLens"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//a/q/aqualens-24-h-nxt-monly-dis-con-3lens_g_1202.jpg"
              alt="contactLens"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//a/q/aqualens-10h-montly-3lns-contact-lens_g_1197.jpg"
              alt="contactLens"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//a/q/aqualens-dly-dspoble-cntct-lense-10-lenses_aqualens-dly-dspoble-cntct-lense-10-lenses_g_1173-10.jpg"
              alt="contactLens"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//a/q/aqualens-24-h-nxt-monly-dis-con-3lens_g_1202.jpg"
              alt="contactLens"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//a/q/aqualens-24-h-nt-daily-dis-toric-20lens_g_3984.jpg"
              alt="contactLens"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
