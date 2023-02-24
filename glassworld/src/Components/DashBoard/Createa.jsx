import React, { useEffect } from "react";
import styles from "../DashBoard/Dashboard.module.css";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, FormControl, Heading, Input } from "@chakra-ui/react";
import { useReducer } from "react";

const initialState = {
  imageTsrc: "",
  productRefLink: "",
  rating: "",
  colors: "",
  price: "",
  mPrice: "",
  name: "",
  shape: "",
  gender: "",
  style: "",
  dimension: "",
  productType: "",
  productId: "",
  userRated: "",
  quntity: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "imageTsrc": {
      return { ...state, imageTsrc: action.payload };
    }
    case "productRefLink": {
      return { ...state, productRefLink: action.payload };
    }
    case "rating": {
      return { ...state, rating: action.payload };
    }
    case "colors": {
      return { ...state, colors: action.payload };
    }
    case "price": {
      return { ...state, price: action.payload };
    }
    case "mPrice": {
      return { ...state, mPrice: action.payload };
    }

    case "name": {
      return { ...state, name: action.payload };
    }
    case "shape": {
      return { ...state, shape: action.payload };
    }
    case "gender": {
      return { ...state, gender: action.payload };
    }
    case "style": {
      return { ...state, style: action.payload };
    }
    case "dimension": {
      return { ...state, dimension: action.payload };
    }
    case "productType": {
      return { ...state, productType: action.payload };
    }

    case "productId": {
      return { ...state, productId: action.payload };
    }
    case "userRated": {
      return { ...state, userRated: action.payload };
    }
    case "quntity": {
      return { ...state, quntity: action.payload };
    }

    case "reset": {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

const Create = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const HandleSubmit = (e) => {
    e.preventDefault();
    handleAddCat(state);
    dispatch({ type: "reset", payload: { ...initialState } });
  };

  const handleAddCat = (data) => {
    addCats(data);
  };

  const addCats = (data = {}) => {
    return axios({
      method: "post",
      url: `https://easy-pink-bull-shoe.cyclic.app/Products`,
      data: {
        imageTsrc: data.imageTsrc,
        productRefLink: data.productRefLink,
        rating: data.rating,
        colors: data.colors,
        price: data.price,
        mPrice: data.mPrice,
        name: data.name,
        shape: data.shape,
        gender: data.gender,
        style: data.style,
        dimension: data.dimension,
        productType: data.productType,
        productId: data.productId,
        userRated: data.userRated,
        quntity: data.quntity,
      },
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        <ul>
          <li>
            <a href="#">
              <span className={styles.title} style={{ fontSize: "40px" }}>
                Glass World
              </span>
            </a>
          </li>

          <li>
            <a href="/dashboard">
              <span className={styles.title}>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="/create">
              <span className={styles.title}>Create-Product</span>
            </a>
          </li>

          <li>
            <Link to={"/"}>
              <button
                className={styles.title}
                id="singout"
                onClick={() => {
                  alert("Thanks Admin For Visiting !!!");
                  window.location.href("./");
                }}
              >
                Sign-Out
              </button>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.main}>
        <div className={styles.topbar}>
          <div className={styles.toogle}>
            <ion-icon name={styles["menu-outlin"]}></ion-icon>
          </div>

          <div className={styles.search}>
            <label>
              <input type="text" placeholder="search-products-here" />
              <ion-icon name="search-outline"></ion-icon>
            </label>
          </div>

          <div className={styles.user}>
            <img
              src="https://c4.wallpaperflare.com/wallpaper/127/164/7/kid-luffy-monkey-d-luffy-one-piece-anime-hd-wallpaper-preview.jpg"
              alt=""
            />
          </div>
        </div>
        <div className={styles.cardBox}>
          <div className={styles.card}>
            <div>
              <div className={styles.numbers}>1,5045+</div>
              <div className={styles.cardName}>Daily Views</div>
            </div>

            <div className={styles.iconBx}>
              <ion-icon name={styles["eye-outline"]}></ion-icon>
            </div>
          </div>

          <div className={styles.card}>
            <div>
              <div className={styles.numbers}>800+</div>
              <div className={styles.cardName}>Sales</div>
            </div>

            <div className={styles.iconBx}>
              <ion-icon name={styles["cart-outline"]}></ion-icon>
            </div>
          </div>

          <div className={styles.card}>
            <div>
              <div className={styles.numbers}>2840+</div>
              <div className={styles.cardName}>Comments</div>
            </div>

            <div className="iconBx">
              <ion-icon name="chatbubbles-outline"></ion-icon>
            </div>
          </div>

          <div className={styles.card}>
            <div>
              <div className={styles.numbers}>₹10,00,00,000</div>
              <div className={styles.cardName}>Earning</div>
            </div>
            <div className="iconBx">
              <ion-icon name="cash-outline"></ion-icon>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center", width: "500px", margin: "0 auto" }}>
          <form
            className="form"
            style={{ marginTop: "50px" }}
            onSubmit={HandleSubmit}
          >
            <Heading color="green">Create Product Here</Heading>

            <FormControl style={{ marginTop: "50px" }}>
              <Input
                className="imageTsrc"
                placeholder="imageTsrc"
                value={state.imageTsrc}
                onChange={(e) =>
                  dispatch({ type: "imageTsrc", payload: e.target.value })
                }
              />
              <Input
                className="productRefLink"
                placeholder="productRefLink"
                type="text"
                value={state.productRefLink}
                onChange={(e) =>
                  dispatch({ type: "productRefLink", payload: e.target.value })
                }
              />
              <Input
                className="rating"
                placeholder="rating"
                type="number"
                value={state.rating}
                onChange={(e) =>
                  dispatch({ type: "rating", payload: e.target.value })
                }
              />
              <Input
                className="colors"
                placeholder="colors"
                value={state.colors}
                onChange={(e) =>
                  dispatch({ type: "colors", payload: e.target.value })
                }
              />
              <Input
                className="price"
                placeholder="price"
                type="number"
                value={state.price}
                onChange={(e) =>
                  dispatch({ type: "price", payload: e.target.value })
                }
              />
              <Input
                className="mPrice"
                placeholder="mPrice"
                type="number"
                value={state.mPrice}
                onChange={(e) =>
                  dispatch({ type: "mPrice", payload: e.target.value })
                }
              />
              <Input
                className="name"
                placeholder="name"
                value={state.name}
                onChange={(e) =>
                  dispatch({ type: "name", payload: e.target.value })
                }
              />
              <Input
                className="shape"
                placeholder="shape"
                value={state.shape}
                onChange={(e) =>
                  dispatch({ type: "shape", payload: e.target.value })
                }
              />
              <Input
                className="gender"
                placeholder="gender"
                value={state.gender}
                onChange={(e) =>
                  dispatch({ type: "gender", payload: e.target.value })
                }
              />
              <Input
                className="style"
                placeholder="style"
                value={state.style}
                onChange={(e) =>
                  dispatch({ type: "style", payload: e.target.value })
                }
              />
              <Input
                className="dimension"
                placeholder="dimension"
                type="number"
                value={state.dimension}
                onChange={(e) =>
                  dispatch({ type: "dimension", payload: e.target.value })
                }
              />
              <Input
                className="productType"
                placeholder="productType"
                value={state.productType}
                onChange={(e) =>
                  dispatch({ type: "productType", payload: e.target.value })
                }
              />
              <Input
                className="productId"
                placeholder="productId"
                type="number"
                value={state.productId}
                onChange={(e) =>
                  dispatch({ type: "productId", payload: e.target.value })
                }
              />
              <Input
                className="userRated"
                placeholder="userRated"
                value={state.userRated}
                onChange={(e) =>
                  dispatch({ type: "userRated", payload: e.target.value })
                }
              />
              <Input
                className="quntity"
                placeholder="quntity"
                type="number"
                value={state.quntity}
                onChange={(e) =>
                  dispatch({ type: "quntity", payload: e.target.value })
                }
              />
              <Button
                colorScheme={"green"}
                className="submitBtn"
                onClick={() => {
                  alert(`Product Created Successfully!!!`);
                }}
                marginBottom={"30px"}
                marginTop={"20px"}
              >
                Submit
              </Button>
            </FormControl>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
