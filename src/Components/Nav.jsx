import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { ProductContext } from "../utilis/context";

const Nav = () => {
  const [products] = useContext(ProductContext);
  let distinctCategory =
    products &&
    products.reduce((acc, product) => [...acc, product.category], []);
  distinctCategory = [...new Set(distinctCategory)];

  let color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},${(
      Math.random() * 255
    ).toFixed()},${(Math.random() * 255).toFixed()},.4`;
  };

  return (
    <nav className="w-[20%] h-full bg-zinc-100 flex flex-col  pt-5 items-center gap-5">
      <Link
        to="/create"
        className="py-3 px-5 border rounded-md border-blue-300 text-blue-400"
      >
        Add New Product
      </Link>
      <hr className="w-[80%] my-3" />
      <h1 className="text-2xl w-[80%]">Category Filter</h1>
      {distinctCategory.map((c, i) => {
        return (
          <div key={i} className=" w-[80%]">
            <Link
              to={`/?category=${c}`}
              className="hover:scale-125 transition-all flex items-center gap-1 px-2"
            >
              <span
                style={{ backgroundColor: color() }}
                className={`hover:scale-125 transition-all w-[12px] h-[12px] rounded-full inline-block`}
              ></span>
              {c.toUpperCase()}
            </Link>
          </div>
        );
      })}
      <Link
        to="/"
        className="hover:scale-125 transition-all py-2 px-3 border text-sm rounded-md border-blue-300 text-blue-400"
      >
        ClearALL
      </Link>
    </nav>
  );
};

export default Nav;
