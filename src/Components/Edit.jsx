import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../utilis/context";
const Edit = () => {
  const [products, setProducts] = useContext(ProductContext);
  const { id } = useParams();
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  const { register, handleSubmit, reset } = useForm({
    defaultValues: product,
  });
  const handleData = (data) => {
    if (
      data.title.trim().length < 1 ||
      data.price.trim().length < 1 ||
      data.description.trim().length < 5 ||
      data.category.trim().length < 1 ||
      data.image.trim().length < 1
    )
      return alert("Fill all");
    const updatedProduct = { ...product, ...data };
    const updatedProducts = products.map((p) =>
      p.id === id ? updatedProduct : p
    );

    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    reset();
    return alert("Data has been UPDATED");
  };
  const changehandle = (e) => {
    console.log(e.target.name, e.target.value);
    setProduct({...product, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    setProduct(products && products.filter((p) => p.id == id)[0]);
    reset(product);
  }, [id, reset]);
  console.log(product);
  return (
    <>
      <div className="bg-red-200 p-10 w-screen h-screen overflow-hidden ">
        <Link
          to="/"
          className="py-2 px-4 border rounded-md bg-blue-400 text-white font-semibold"
        >
          HOME
        </Link>
        <form
          onSubmit={handleSubmit(handleData)}
          className="items-center justify-center flex flex-col"
        >
          <h1 className="w-1/2 text-3xl font-semibold">Edit Product</h1>
          <input
            {...register("title")}
            type="text"
            name="title"
            onChange={changehandle}
            placeholder="title"
            className="text-xl bg-zinc-100 mt-4 rounded p-3 w-1/2 outline-none"
          />
          <input
            {...register("price", { value: product.price })}
            onChange={changehandle}
            placeholder="price"
            className="text-xl bg-zinc-100 mt-2 rounded p-3 w-1/2 outline-none"
          />
          <textarea
            {...register("description")}
            type="text"
            placeholder="description"
            className="text-xl bg-zinc-100 mt-2 rounded p-3 w-1/2 outline-none"
          />
          <input
            {...register("category")}
            type="text"
            placeholder="category"
            className="text-xl bg-zinc-100 mt-2 rounded p-3 w-1/2 outline-none"
          />
          <input
            {...register("image")}
            type="url"
            placeholder="image"
            className="text-xl bg-zinc-100 mt-2 rounded p-3 w-1/2 outline-none"
          />
          <input
            onClick={() => {}}
            type="submit"
            className="w-1/2 mt-2 px-4 py-3 bg-blue-200 font-semibold rounded-md"
          />
        </form>
      </div>
    </>
  );
};

export default Edit;
