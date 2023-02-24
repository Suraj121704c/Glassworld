import React, { useEffect } from "react";
import styles from "../DashBoard/Dashboard.module.css";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [err, setError] = useState(false);
  const [total, setTotal] = React.useState();
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [page2, setPage2] = React.useState(1);
  const [total2, setTotal2] = React.useState();
  const [q, setq] = useState("");

  const fetchproduct = (page, q) => {
    setLoading(true);
    axios(
      `https://easy-pink-bull-shoe.cyclic.app/Products?q=${q}&_page=${page}&_limit=11`
    )
      .then((res) => {
        // console.log(res.data)
        setTotal(res.headers["x-total-count"]);
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
      });
  };

  useEffect(() => {
    fetchproduct(page, q);
  }, [page, q]);

  const fetchUsers = (page2) => {
    setLoading(true);
    axios(`https://reqres.in/api/users?page=${page2}`)
      .then((res) => {
        // console.log(res.data)
        setTotal2(res?.data?.total_pages);
        setUsers(res?.data?.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
      });
  };

  React.useEffect(() => {
    fetchUsers(page2);
  }, [page2]);

  // console.log(users);
  // console.log(products);

  // console.log(q)

  const handleDelete = (id) => {
    deleteProducts(id);
    fetchproduct(page);
  };

  const deleteProducts = (id) => {
    return axios({
      method: "delete",
      url: `https://easy-pink-bull-shoe.cyclic.app/Products/${id}`,
    })
      .then((res) => {
        console.log(res);
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
            <a href="#">
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
              <span
                className={styles.title}
                id="singout"
                onClick={() => {
                  alert("Thanks Admin For Visiting !!!");
                  window.location.href("./");
                }}
              >
                Sign-Out
              </span>
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
              <input
                type="text"
                placeholder="search-products-here"
                value={q}
                onChange={(e) => setq(e.target.value)}
              />
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

        <div className={styles.details}>
          <div className={styles.recentOrders}>
            <div className={styles.cardHeader}>
              <h2 style={{ fontSize: "25px" }}>ALL Products :--</h2>
            </div>

            <table>
              <thead>
                <tr>
                  <td style={{ color: "green" }}>BrandName</td>
                  <td style={{ color: "green" }}>Price</td>
                  <td style={{ color: "green" }}>Shape</td>
                  <td style={{ color: "green" }}>Delete</td>
                </tr>
              </thead>

              {products.map((pro) => (
                <tbody key={pro.id}>
                  <tr>
                    <td>{pro.name}</td>
                    <td>{pro.price}</td>
                    <td>{pro.shape}</td>
                    <td>
                      <span
                        style={{ color: "red" }}
                        onClick={() => handleDelete(pro.id)}
                      >
                        DELETE
                      </span>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
            <div
              className="page-section"
              style={{ textAlign: "center", marginTop: "30px" }}
            >
              <button
                disabled={page === 1}
                style={{ background: "green", width: "80px", color: "white" }}
                onClick={() => setPage(page - 1)}
              >
                PREV
              </button>
              &nbsp;&nbsp;
              <button
                disabled
                style={{ background: "green", width: "80px", color: "white" }}
              >
                {page}
              </button>
              &nbsp;&nbsp;
              <button
                disabled={(page === Math.ceil(total / 11)) === page}
                style={{ background: "green", width: "80px", color: "white" }}
                onClick={() => setPage(page + 1)}
              >
                NEXT
              </button>
            </div>
          </div>

          <div className={styles.recentOrders}>
            <div className={styles.cardHeader}>
              <h2 style={{ fontSize: "25px" }}>Our Employees :--</h2>
            </div>
            <table>
              <thead>
                <tr>
                  <td style={{ color: "green" }}>Emp-Name</td>
                  <td style={{ color: "green" }}>Sallery</td>
                  <td style={{ color: "green" }}>email</td>
                </tr>
              </thead>

              {users.map((pro) => (
                <tbody key={pro.id}>
                  <tr>
                    <td>
                      {pro.first_name} {pro.last_name}
                    </td>
                    <td>{pro.id * 1003}</td>
                    <td>{pro.email}</td>
                  </tr>
                </tbody>
              ))}
            </table>
            <div
              className="page-section"
              style={{ textAlign: "center", marginTop: "30px" }}
            >
              <button
                disabled={page2 === 1}
                style={{ background: "green", width: "80px", color: "white" }}
                onClick={() => setPage2(page2 - 1)}
              >
                PREV
              </button>
              &nbsp;&nbsp;
              <button
                disabled
                style={{ background: "green", width: "80px", color: "white" }}
              >
                {page2}
              </button>
              &nbsp;&nbsp;
              <button
                disabled={page2 === total2}
                style={{ background: "green", width: "80px", color: "white" }}
                onClick={() => setPage2(page2 + 1)}
              >
                NEXT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
