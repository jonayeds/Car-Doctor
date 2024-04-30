import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  console.log(services);
  return (
    <div>
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <p className="text-red-500 text-lg font-semibold">Service</p>
        <h1 className="text-3xl font-bold">Our Service Area</h1>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don`t look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-12">
      {services.map((service) => (
        <div key={service._id}>
          <div className="card card-compact w-96 bg-base-100 shadow-xl p-4 border h-96 mx-auto">
            <figure>
              <img
                src={service.img}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{service.title}</h2>
             
              <div className=" flex justify-between items-center text-red-500">
              <p className="font-semibold text-lg">Price: ${service.price}</p>
                <button className="btn bg-white border-none text-red-500"><FaArrowRightLong /></button>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Services;
