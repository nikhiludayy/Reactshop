import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ProductContext } from "../utilis/context";
import { useContext } from "react";
const Create = () => {
  const [products, setProducts] = useContext(ProductContext);
  const { register, handleSubmit, reset } = useForm();
  const handleData = (data) => {
    if (
      data.title.trim().length < 1 ||
      data.price.trim().length < 1 ||
      data.description.trim().length < 5 ||
      data.category.trim().length < 1 ||
      data.image.trim().length < 1
    )
      return alert("Fill all");
    data = { id: products.length + 1, ...data };
    setProducts([...products, data]);
    localStorage.setItem('products', JSON.stringify([...products, data]));
    reset();
    return alert("Data has been ADDED");
  };

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
          <h1 className="w-1/2 text-3xl font-semibold">Add New Product</h1>
          <input
            {...register("title")}
            type="text"
            placeholder="title"
            className="text-xl bg-zinc-100 mt-4 rounded p-3 w-1/2 outline-none"
          />
          <input
            {...register("price")}
            type="number"
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

export default Create;
