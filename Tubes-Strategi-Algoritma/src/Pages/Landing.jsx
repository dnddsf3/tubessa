import React from "react";
import "../../src/index.css";
import { useNavigate } from "react-router-dom";

const Landing = ({ addEntry }) => {
  const navigate = useNavigate();

  const handleShowData = () => {
    addEntry();
    navigate("/showdata");
  };

  return (
    <div className="body-landing flex justify-center items-center min-h-screen"> {/* Flexbox container */}
      <div className="text-center px-4 md:px-8">
        <h2 className="font-bold text-2xl md:text-4xl">Tubes Strategi Algoritma</h2>
        <h2 className="text-sm md:text-lg mt-4">
          Mengetahui Optimasi Penempatan Titik Pelayanan Ojek Online di Area Metropolitan Menggunakan Algoritma <span className="font-bold">Brute Force</span> dan <span className="font-bold">Greedy</span>
        </h2>
        <div className="mt-8 flex flex-col md:flex-row md:gap-8 justify-center items-center">
          <button
            className="btn bg-[#3399ff] text-white hover:bg-white hover:text-[#3399ff] border-none mt-4 md:mt-0 md:text-lg md:px-8 md:rounded-1xl"
            onClick={handleShowData}
          >
            Tampilkan Data Perjalanan
          </button>
          <button
            className="btn bg-[#4da6ff] text-white hover:bg-white hover:text-[#4da6ff] border-none mt-4 md:mt-0 md:text-lg md:px-8 md:rounded-1xl"
            onClick={() => navigate("/inputwaktu")}
          >
            Input Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
