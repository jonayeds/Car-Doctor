import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const Products = () => {
    const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
    return (
        <div>
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <p className="text-red-500 text-lg font-semibold">Popular Products</p>
        <h1 className="text-3xl font-bold">Browse Our Products</h1>
        <p>
        the majority have suffered alteration in some form, by injected humour, or randomised words which don`t look even slightly believable. 
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-12">
      {services.map((product) => (
        <div key={product._id}>
          <div className="card card-compact w-96 bg-base-100 shadow-xl p-4 border h-96 mx-auto">
            <figure>
              <img
                src={product.img}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.title}</h2>
             
              <div className=" flex justify-between items-center text-red-500">
              <p className="font-semibold text-lg">Price: ${product.price}</p>
                <button className="btn bg-white border-none text-red-500"><FaArrowRightLong /></button>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
      <div className=" flex">
      <button className="btn btn-error btn-outline mx-auto">More Products</button>
      </div>
    </div>
    );
};

export default Products;