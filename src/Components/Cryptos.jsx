import React, { useState, useEffect } from "react";
// import img from '../assets/images/bitcoin.png'
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import axios from "axios";

const Cryptos = () => {
  const [data, setData] = useState(null);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!data) return null;

  return (
    <div className="bg-black sm:h-screen text-center flex flex-col justify-center">
        <h1 className="text-white sm:w-[400px] m-auto">Our top picks today</h1>
      <div className="justify-items-center align-center flex flex-col items-center sm:grid grid-cols-3 lg:grid-cols-4 bg-black text-white">
        {/* card */}
        <div className="flex flex-col justify-center items-center m-4 w-[200px] h-[200px] border-2 border-solid rounded-3xl border-white hover:scale-125 transition duration-500">
          <div className="flex flex-col">
            <img
              className="w-[50px] m-auto py-3 px-0"
              src={data[0].image}
              alt="/"
            />
          </div>
          <div>
            <h5>{data[0].name}</h5>
            <p>₹{data[0].current_price.toLocaleString("en-IN")}</p>
          </div>
          {data[0].price_change_percentage_24h < 0 ? (
            <span className="text-red-600">
              <FiArrowDown />
              {data[0].price_change_percentage_24h.toFixed(2)}%
            </span>
          ) : (
            <span className="text-green-600">
              <FiArrowUpRight />
              {data[0].price_change_percentage_24h.toFixed(2)}%
            </span>
          )}
          {/* <span><FiArrowUpRight/>2.5%</span> */}
        </div>

        {/* card */}
        <div className="flex flex-col justify-center items-center m-4 w-[200px] h-[200px] border-2 border-solid rounded-3xl border-white hover:scale-125 transition duration-500">
          <div className="flex flex-col">
            <img
              className="w-[50px] m-auto py-3 px-0"
              src={data[1].image}
              alt="/"
            />
          </div>
          <div>
            <h5>{data[1].name}</h5>
            <p>₹{data[1].current_price.toLocaleString("en-IN")}</p>
          </div>
          {data[1].price_change_percentage_24h < 0 ? (
            <span className="text-red-600">
              <FiArrowDown />
              {data[1].price_change_percentage_24h.toFixed(2)}%
            </span>
          ) : (
            <span className="text-green-600">
              <FiArrowUpRight />
              {data[1].price_change_percentage_24h.toFixed(2)}%
            </span>
          )}
          {/* <span><FiArrowUpRight/>2.5%</span> */}
        </div>

        {/* card */}
        <div className="flex flex-col justify-center items-center m-4 w-[200px] h-[200px] border-2 border-solid rounded-3xl border-white hover:scale-125 transition duration-500">
          <div className="flex flex-col">
            <img
              className="w-[50px] m-auto py-3 px-0"
              src={data[2].image}
              alt="/"
            />
          </div>
          <div>
            <h5>{data[2].name}</h5>
            <p>₹{data[2].current_price.toLocaleString("en-IN")}</p>
          </div>
          {data[2].price_change_percentage_24h < 0 ? (
            <span className="text-red-600">
              <FiArrowDown />
              {data[2].price_change_percentage_24h.toFixed(2)}%
            </span>
          ) : (
            <span className="text-green-600">
              <FiArrowUpRight />
              {data[2].price_change_percentage_24h.toFixed(2)}%
            </span>
          )}
          {/* <span><FiArrowUpRight/>2.5%</span> */}
        </div>

        {/* card */}
        <div className="flex flex-col justify-center items-center m-4 w-[200px] h-[200px] border-2 border-solid rounded-3xl border-white hover:scale-125 transition duration-500">
          <div className="flex flex-col">
            <img
              className="w-[50px] m-auto py-3 px-0"
              src={data[3].image}
              alt="/"
            />
          </div>
          <div>
            <h5>{data[3].name}</h5>
            <p>₹{data[3].current_price.toLocaleString("en-IN")}</p>
          </div>
          {data[3].price_change_percentage_24h < 0 ? (
            <span className="text-red-600">
              <FiArrowDown />
              {data[3].price_change_percentage_24h.toFixed(2)}%
            </span>
          ) : (
            <span className="text-green-600">
              <FiArrowUpRight />
              {data[3].price_change_percentage_24h.toFixed(2)}%
            </span>
          )}
          {/* <span><FiArrowUpRight/>2.5%</span> */}
        </div>

        {/* card */}
        <div className="flex flex-col justify-center items-center m-4 w-[200px] h-[200px] border-2 border-solid rounded-3xl border-white hover:scale-125 transition duration-500">
          <div className="flex flex-col">
            <img
              className="w-[50px] m-auto py-3 px-0"
              src={data[4].image}
              alt="/"
            />
          </div>
          <div>
            <h5>{data[4].name}</h5>
            <p>₹{data[4].current_price.toLocaleString("en-IN")}</p>
          </div>
          {data[4].price_change_percentage_24h < 0 ? (
            <span className="text-red-600">
              <FiArrowDown />
              {data[4].price_change_percentage_24h.toFixed(2)}%
            </span>
          ) : (
            <span className="text-green-600">
              <FiArrowUpRight />
              {data[4].price_change_percentage_24h.toFixed(2)}%
            </span>
          )}
          {/* <span><FiArrowUpRight/>2.5%</span> */}
        </div>

        {/* card */}
        <div className="flex flex-col justify-center items-center m-4 w-[200px] h-[200px] border-2 border-solid rounded-3xl border-white hover:scale-125 transition duration-500">
          <div className="flex flex-col">
            <img
              className="w-[50px] m-auto py-3 px-0"
              src={data[5].image}
              alt="/"
            />
          </div>
          <div>
            <h5>{data[5].name}</h5>
            <p>₹{data[5].current_price.toLocaleString("en-IN")}</p>
          </div>
          {data[5].price_change_percentage_24h < 0 ? (
            <span className="text-red-600">
              <FiArrowDown />
              {data[5].price_change_percentage_24h.toFixed(2)}%
            </span>
          ) : (
            <span className="text-green-600">
              <FiArrowUpRight />
              {data[5].price_change_percentage_24h.toFixed(2)}%
            </span>
          )}
          {/* <span><FiArrowUpRight/>2.5%</span> */}
        </div>

        {/* card */}
        <div className="flex flex-col justify-center items-center m-4 w-[200px] h-[200px] border-2 border-solid rounded-3xl border-white hover:scale-125 transition duration-500">
          <div className="flex flex-col">
            <img
              className="w-[50px] m-auto py-3 px-0"
              src={data[6].image}
              alt="/"
            />
          </div>
          <div>
            <h5>{data[6].name}</h5>
            <p>₹{data[6].current_price.toLocaleString("en-IN")}</p>
          </div>
          {data[6].price_change_percentage_24h < 0 ? (
            <span className="text-red-600">
              <FiArrowDown />
              {data[6].price_change_percentage_24h.toFixed(2)}%
            </span>
          ) : (
            <span className="text-green-600">
              <FiArrowUpRight />
              {data[6].price_change_percentage_24h.toFixed(2)}%
            </span>
          )}
          {/* <span><FiArrowUpRight/>2.5%</span> */}
        </div>

        {/* card */}
        <div className="flex flex-col justify-center items-center m-4 w-[200px] h-[200px] border-2 border-solid rounded-3xl border-white hover:scale-125 transition duration-500">
          <div className="flex flex-col">
            <img
              className="w-[50px] m-auto py-3 px-0"
              src={data[7].image}
              alt="/"
            />
          </div>
          <div>
            <h5>{data[7].name}</h5>
            <p>₹{data[7].current_price.toLocaleString("en-IN")}</p>
          </div>
          {data[7].price_change_percentage_24h < 0 ? (
            <span className="text-red-600">
              <FiArrowDown />
              {data[7].price_change_percentage_24h.toFixed(2)}%
            </span>
          ) : (
            <span className="text-green-600">
              <FiArrowUpRight />
              {data[7].price_change_percentage_24h.toFixed(2)}%
            </span>
          )}
          {/* <span><FiArrowUpRight/>2.5%</span> */}
        </div>

        {/* card */}
        <div className="flex flex-col justify-center items-center m-4 w-[200px] h-[200px] border-2 border-solid rounded-3xl border-white hover:scale-125 transition duration-500">
          <div className="flex flex-col">
            <img
              className="w-[50px] m-auto py-3 px-0"
              src={data[8].image}
              alt="/"
            />
          </div>
          <div>
            <h5>{data[8].name}</h5>
            <p>₹{data[8].current_price.toLocaleString("en-IN")}</p>
          </div>
          {data[8].price_change_percentage_24h < 0 ? (
            <span className="text-red-600">
              <FiArrowDown />
              {data[8].price_change_percentage_24h.toFixed(2)}%
            </span>
          ) : (
            <span className="text-green-600">
              <FiArrowUpRight />
              {data[8].price_change_percentage_24h.toFixed(2)}%
            </span>
          )}
          {/* <span><FiArrowUpRight/>2.5%</span> */}
        </div>

        {/* card */}
        <div className="flex flex-col justify-center items-center m-4 w-[200px] h-[200px] border-2 border-solid rounded-3xl border-white hover:scale-125 transition duration-500">
          <div className="flex flex-col">
            <img
              className="w-[50px] m-auto py-3 px-0"
              src={data[9].image}
              alt="/"
            />
          </div>
          <div>
            <h5>{data[9].name}</h5>
            <p>₹{data[9].current_price.toLocaleString("en-IN")}</p>
          </div>
          {data[9].price_change_percentage_24h < 0 ? (
            <span className="text-red-600">
              <FiArrowDown />
              {data[9].price_change_percentage_24h.toFixed(2)}%
            </span>
          ) : (
            <span className="text-green-600">
              <FiArrowUpRight />
              {data[9].price_change_percentage_24h.toFixed(2)}%
            </span>
          )}
          {/* <span><FiArrowUpRight/>2.5%</span> */}
        </div>
        {/* card */}
        <div className="flex flex-col justify-center items-center m-4 w-[200px] h-[200px] border-2 border-solid rounded-3xl border-white hover:scale-125 transition duration-500">
          <div className="flex flex-col">
            <img
              className="w-[50px] m-auto py-3 px-0"
              src={data[10].image}
              alt="/"
            />
          </div>
          <div>
            <h5>{data[10].name}</h5>
            <p>₹{data[10].current_price.toLocaleString("en-IN")}</p>
          </div>
          {data[10].price_change_percentage_24h < 0 ? (
            <span className="text-red-600">
              <FiArrowDown />
              {data[10].price_change_percentage_24h.toFixed(2)}%
            </span>
          ) : (
            <span className="text-green-600">
              <FiArrowUpRight />
              {data[10].price_change_percentage_24h.toFixed(2)}%
            </span>
          )}
          {/* <span><FiArrowUpRight/>2.5%</span> */}
        </div>
        {/* card */}
        <div className="flex flex-col justify-center items-center m-4 w-[200px] h-[200px] border-2 border-solid rounded-3xl border-white hover:scale-125 transition duration-500">
          <div className="flex flex-col">
            <img
              className="w-[50px] m-auto py-3 px-0"
              src={data[11].image}
              alt="/"
            />
          </div>
          <div>
            <h5>{data[11].name}</h5>
            <p>₹{data[11].current_price.toLocaleString("en-IN")}</p>
          </div>
          {data[11].price_change_percentage_24h < 0 ? (
            <span className="text-red-600">
              <FiArrowDown />
              {data[11].price_change_percentage_24h.toFixed(2)}%
            </span>
          ) : (
            <span className="text-green-600">
              <FiArrowUpRight />
              {data[11].price_change_percentage_24h.toFixed(2)}%
            </span>
          )}
          {/* <span><FiArrowUpRight/>2.5%</span> */}
        </div>
      </div>
    </div>
  );
};

export default Cryptos;
