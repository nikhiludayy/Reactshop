import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../utilis/context";
import Loading from "./Loading";
import Nav from "./Nav";
const Home = () => {
  const [products] = useContext(ProductContext);
  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);


  return products ? (
    <>
      <Nav></Nav>
      <div className="container w-[80%] p-10 flex justify-center gap-5 flex-wrap overflow-x-hidden overflow-y-auto">
        {products
          .filter((pro) => {
            return category === "undefined" || pro.category === category;
          })
          .map((product, index) => {
            return (
              <Link
                key={index}
                to={`/details/${product.id}`}
                className="card w-[20%] h-[40vh]  p-5 border shadow rounded flex flex-col items-center justify-center"
              >
                <div
                  className="w-full h-full hover:scale-110 transition-all mix-blend-multiply"
                  style={{
                    backgroundImage: `url(${product.image})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div className="  mt-2  ">
                  <h1 className="hover:text-blue-600 w-[160px] text-center whitespace-nowrap text-ellipsis inline-block overflow-hidden text-xs font-semibold ">
                    {product.title}
                  </h1>
                </div>
              </Link>
            );
          })}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
