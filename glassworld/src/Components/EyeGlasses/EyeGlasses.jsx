import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import { Footer2 } from "../Footer/Footer2";
import NavBar from "../NavBar/NavBar";

const EyeGlasses = () => {
  return (
    <>
    <NavBar />
    <div>
      <img
        style={{ marginTop: "20px", marginBottom: "20px" }}
        src="https://static1.lenskart.com/media/desktop/img/Feb23/style/plp/PLP%20Camapaign%20-%20WEB%20(6).jpg"
        alt="bar"
      />
      <div className="container" style={{ textAlign: "center" }}>
        <h1
          style={{
            color: "green",
            fontSize: "40px",
            fontWeight: "300",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          EXTRA 60% OFF | VOUCHER: TRYUS
        </h1>

        <Swiper
          watchSlidesProgress={true}
          slidesPerView={3}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e14928-c2-eyeglasses_g_9873_07_07_2022.jpg"
              alt="1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13307-c4-eyeglasses_G_0490.jpg"
              alt="2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/e/lenskart-air-la-e13648-foll-rim-cat-eye-tr90-c4-eyegasus_g_8552.jpg"
              alt="3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/grey-black-full-rim-rectangle-lenskart-air-flex-la-e14830-c1-eyeglasses_g_2915_18_july.jpg"
              alt="4"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/blue-full-rim-round-vincent-chase-sleek-steel-vc-e14716-c3-eyeglasses_g_4100_9_july.jpg"
              alt="5"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e14934-c1-eyeglasses_g_0008_07_07_2022.jpg"
              alt="6"
            />
          </SwiperSlide>
        </Swiper>
        <button
          style={{
            color: "white",
            backgroundColor: "green",
            width: "140px",
            height: "50px",
            borderRadius: "20px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          VIEW RANGE
        </button>

        <hr />
      </div>

      <div className="container" style={{ textAlign: "center" }}>
        <h1
          style={{
            color: "green",
            fontSize: "40px",
            fontWeight: "300",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          BEST SELLERS{" "}
          <span style={{ color: "black" }}> STARTING AT RS.1199 </span>
        </h1>
        <p>
          Buy 1 Get 1 Free with Free Upgrade to 2 Years Gold Membership at
          R̶s̶.̶1̶2̶0̶0̶ Rs.600
        </p>

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
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/sand-dune-full-rim-hustlr-eyeglasses_csvfile-1672134506028-g_6941_12_13_22.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/Transparent-Gold-Transparent-Full-Rim-Wayfarer-Lenskart-Air-Signia-LA-E11821-C3-Eyeglasses_lenskart-air-la-e11821-fall-rim-wfe-stais-stel-c1-eyeglasses_g_251307_02_2022.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/midnight-blue-full-rim-hustlr-eyeglasses_blue-full-rim-round-lenskart-air-classic-la-e15417-c3-eyeglasses_g_7844_24_12_2022_28_12_2022.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/amber-full-rim-hustlr-eyeglasses_peyush-bansal-shark-tank-yellow-transparent-full-rim-square-lenskart-air-air-classic-la-e15417-c2-eyeglasses_csvfile-1671778597763-air_yellow-transparent-full-rim-square-_28_12_2022.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13046-c5-eyeglasses_G_9427.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/blue-sky-full-rim-hustlr-eyeglasses_eyeglasses_csvfile-1671778448401-air_blue-transparent-full-rim-square-lenskar_28_12_2022.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>

        <button
          style={{
            color: "white",
            backgroundColor: "green",
            width: "140px",
            height: "50px",
            borderRadius: "20px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          VIEW RANGE
        </button>

        <hr />
      </div>

      <div className="container" style={{ textAlign: "center" }}>
        <h1
          style={{
            color: "green",
            fontSize: "40px",
            fontWeight: "300",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          COMPUTER GLASSES{" "}
          <span style={{ color: "black" }}> STARTING AT RS.1199 </span>
        </h1>
        <p>
          Buy 1 Get 1 Free with Free Upgrade to 2 Years Gold Membership at
          R̶s̶.̶1̶2̶0̶0̶ Rs.600
        </p>

        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/blue-sky-full-rim-hustlr-eyeglasses_blue-block-screen-glasses_-peyush-bansal-shark-tank-_-sky-blue-transparent-full-rim-wayfarer-lenskart-hustlr-lb-e14058-h-c3_csvfile-1671778849582-hustlr_1_28_12_2022.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/blue-block-phone-&-computer-glasses:-blue-full-rim-rectangle-lenskart-blu-lb-e13737-c2_lenskart-blu-lb-e13737-c2-eyeglasses_lenskart-blu-lb-e13737-c2-eyeglasses_eyeglasses_g_100923_02_2022.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/blue-block-phone-&-computer-glasses:-matte-black-full-rim-square-lenskart-blu-lb-e13740-c1_lenskart-blu-lb-e13740-c1-eyeglasses_eyeglasses_g_9584_123_02_2022.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/e/lenskart-air-la-e14098-c1-c1-eyeglasses_lenskart-air-la-e14098-c1-c1-eyeglasses_G_7446.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/e/lenskart-air-la-e14097-c2-c2-eyeglasses_lenskart-air-la-e14097-c2-c2-eyeglasses_G_7467.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/dark-night-full-rim-hustlr-eyeglasses_csvfile-1671778958351-hustlr_2_28_12_2022.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>

        <button
          style={{
            color: "white",
            backgroundColor: "green",
            width: "140px",
            height: "50px",
            borderRadius: "20px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          VIEW RANGE
        </button>

        <hr />
      </div>

      <div className="container" style={{ textAlign: "center" }}>
        <h1
          style={{
            color: "green",
            fontSize: "40px",
            fontWeight: "300",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          BEST SELLERS{" "}
          <span style={{ color: "black" }}> STARTING AT RS.1199 </span>
        </h1>
        <p>
          Buy 1 Get 1 Free with Free Upgrade to 2 Years Gold Membership at
          R̶s̶.̶1̶2̶0̶0̶ Rs.600
        </p>

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
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/sand-dune-full-rim-hustlr-eyeglasses_csvfile-1672134506028-g_6941_12_13_22.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/Transparent-Gold-Transparent-Full-Rim-Wayfarer-Lenskart-Air-Signia-LA-E11821-C3-Eyeglasses_lenskart-air-la-e11821-fall-rim-wfe-stais-stel-c1-eyeglasses_g_251307_02_2022.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/midnight-blue-full-rim-hustlr-eyeglasses_blue-full-rim-round-lenskart-air-classic-la-e15417-c3-eyeglasses_g_7844_24_12_2022_28_12_2022.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/amber-full-rim-hustlr-eyeglasses_peyush-bansal-shark-tank-yellow-transparent-full-rim-square-lenskart-air-air-classic-la-e15417-c2-eyeglasses_csvfile-1671778597763-air_yellow-transparent-full-rim-square-_28_12_2022.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13046-c5-eyeglasses_G_9427.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/blue-sky-full-rim-hustlr-eyeglasses_eyeglasses_csvfile-1671778448401-air_blue-transparent-full-rim-square-lenskar_28_12_2022.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>

        <button
          style={{
            color: "white",
            backgroundColor: "green",
            width: "140px",
            height: "50px",
            borderRadius: "20px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          VIEW RANGE
        </button>

        <hr />
      </div>

      <div className="container" style={{ textAlign: "center" }}>
        <h1
          style={{
            color: "green",
            fontSize: "40px",
            fontWeight: "300",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          URBAN RETRO{" "}
          <span style={{ color: "black" }}> STARTING AT RS.1199 </span>
        </h1>
        <p>
          Buy 1 Get 1 Free with Free Upgrade to 2 Years Gold Membership at
          R̶s̶.̶1̶2̶0̶0̶ Rs.600
        </p>

        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-s14088-c3-c3-sunglasses_vincent-chase-vc-s14088-c3-c3-sunglasses_G_6385.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/Black-Blue-Gradient-Full-Rim-Wayfarer-Vincent-Chase-Polarized-AUTUMN-21-VC-S14090-C2-Polarized-Sunglasses_vincent-chase-vc-s14090-c2-c2-sunglasses_vincent-chase-vc-s14090-c2-c2-sunglasses_vincent-chase-vc-s14090-c2-c2-sunglasses_G_618918_02_2022.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e11560-m-c3-full-rim-round-eyeglasses_vincent-chase-vc-e11560-m-c3-full-rim-round-eyeglasses_G_2784.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/e/lenskart-air-la-e14098-c1-c1-eyeglasses_lenskart-air-la-e14098-c1-c1-eyeglasses_G_7446.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e14107-c2-c2-eyeglasses_vincent-chase-vc-e14107-c2-c2-eyeglasses_G_8487.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e14107-c1-c1-eyeglasses_vincent-chase-vc-e14107-c1-c1-eyeglasses_G_8542.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>

        <button
          style={{
            color: "white",
            backgroundColor: "green",
            width: "140px",
            height: "50px",
            borderRadius: "20px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          VIEW RANGE
        </button>

        <hr />
      </div>

      <div className="container" style={{ textAlign: "center" }}>
        <h1
          style={{
            color: "green",
            fontSize: "40px",
            fontWeight: "300",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          JOHN JACOBS{" "}
          <span style={{ color: "black" }}> STARTING AT RS3000 </span>
        </h1>

        <Swiper
          watchSlidesProgress={true}
          slidesPerView={3}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e14928-c2-eyeglasses_g_9873_07_07_2022.jpg"
              alt="1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13307-c4-eyeglasses_G_0490.jpg"
              alt="2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/e/lenskart-air-la-e13648-foll-rim-cat-eye-tr90-c4-eyegasus_g_8552.jpg"
              alt="3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/grey-black-full-rim-rectangle-lenskart-air-flex-la-e14830-c1-eyeglasses_g_2915_18_july.jpg"
              alt="4"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/blue-full-rim-round-vincent-chase-sleek-steel-vc-e14716-c3-eyeglasses_g_4100_9_july.jpg"
              alt="5"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e14934-c1-eyeglasses_g_0008_07_07_2022.jpg"
              alt="6"
            />
          </SwiperSlide>
        </Swiper>
        <button
          style={{
            color: "white",
            backgroundColor: "green",
            width: "140px",
            height: "50px",
            borderRadius: "20px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          VIEW RANGE
        </button>
      </div>

      <Footer2 />

    </div>
    </>
  );
};

export default EyeGlasses;
