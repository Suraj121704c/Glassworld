import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import { Footer2 } from "../Footer/Footer2";
import NavBar from "../NavBar/NavBar";

const SunGlasses = () => {
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
            TRENDING <span style={{ color: "black" }}> SUNGLASSES </span>
          </h1>
          <p>
            A great collection of 500+ Sunglasses Buy 1 Get 1 Free with Gold
            Membership
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
                src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/black-grey-full-rim-aviator-vincent-chase-polarized-vintage-vc-s11075-c10-sunglasses_g_3370_6_02_22.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-s14944-c1-sunglasses_g_9048_06_09_2022.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/gold-blue-gradient-full-rim-aviator-vincent-chase-polarized-vintage-vc-s11075-c12-sunglasses_g_3383_6_02_22.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-s13820-c3-suglasses_suglasses_g_6195.jpg"
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
                src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/Gold-Blue-Full-Rim-Aviator-Vincent-Chase-LIVEWIRE-VC-S14508-C5-Polarized-Sunglasses_G_7216.jpg"
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
            EXTRA 60% OFF | VOUCHER: TRYUS
          </h1>

          <Swiper
            watchSlidesProgress={true}
            slidesPerView={3}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/black-full-rim-wayfarer-vincent-chase-online-mirage-vc-s15212-c6-sunglasses_g_8229_29_12_2022.jpg"
                alt="1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/green-full-rim-wayfarer-vincent-chase-online-mirage-vc-s15214-c6-sunglasses_g_8235_29_12_2022.jpg"
                alt="2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/green-black-grey-full-rim-aviator-vincent-chase-online-vintage-vc-s15374-c2-sunglasses_g_7669_22_12_2022.jpg"
                alt="3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/green-full-rim-wayfarer-vincent-chase-online-mirage-vc-s15212-c7-sunglasses_g_8291_29_12_2022.jpg"
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
            NEW ARRIVALS <span style={{ color: "black" }}> SUNGLASSES </span>
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
            URBAN STYLE <span style={{ color: "black" }}> SUNGLASSES </span>
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
            JOHN JACOBS <span style={{ color: "black" }}> SUNGLASSES </span>
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
            BEST SELLERS <span style={{ color: "black" }}> SUNGLASSES </span>
          </h1>
          <p>
            A great collection of 500+{" "}
            <span> Sunglasses Buy 1 Get 1 Free with Gold Membership </span>
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

        <Footer2 />
      </div>
    </>
  );
};

export default SunGlasses;
