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
      <div className="max-w-screen h-screen  flex">
      <Nav></Nav>
      <div className="container w-[80%] p-10 grid grid-cols-5 gap-6">
        {products
          .filter((pro) => {
            return category === "undefined" || pro.category === category;
          })
          .map((product, index) => {
            return (
              <Link
                key={index}
                to={`/details/${product.id}`}
                className="card w-[12rem] h-[15rem]  p-5 border shadow rounded flex flex-col items-center justify-center"
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
                <div className="mt-3  ">
                  <h1 className="hover:text-blue-600 text-center text-xs font-semibold ">
                    {(product.title.length>40? product.title.slice(0,40)+"...":product.title )}
                  </h1>
                </div>
              </Link>
            );
          })}
      </div>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
