import React from "react";
import "../../src/index.css";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  const handleShowData = () => {
    navigate("/showdata");
  };

  const handleLanding = () => {
    navigate("/");
  };

  return (
    <div className="body-aboutus flex justify-left items-center min-h-screen relative">
      <div className="text-center px-4 md:px-8">
        <h2 className="font-bold text-2xl md:text-4xl">
            Optimasi Penempatan Titik Pelayanan Ojek Online di Area Metropolitan
        </h2>
        <h2 className="text-left md:text-lg mt-4">
            Tujuan website ini adalah untuk mencari pilihan shelter terbaik untuk pengemudi ojek agar mengurangi waktu tunggu pelanggan dan jarak yang harus ditempuh dan meningkatkan pendapatan pengemudi.
        </h2>
        <h2 className="font-bold text-2xl md:text-xl mt-8">
            Developers
        </h2>
        <h2 className="text-left md:text-lg mt-4">
            1. Dinda Desfira (1301223236)
        </h2>
        <h2 className="text-left md:text-lg mt-4">
            2. Indah Pratiwi (1301223157)
        </h2>
        <div className="absolute top-0 right-0 mt-4 mr-4 flex items-center">
          <button
            className="btn bg-transparent text-white hover:bg-transparent hover:text-[#3399ff] border-none ml-4 md:text-lg md:px-8 md:rounded-1xl"
            onClick={handleLanding}
          >
            Home
          </button>
          <button
            className="btn bg-transparent text-white hover:bg-transparent hover:text-[#3399ff] border-none ml-4 md:text-lg md:px-8 md:rounded-1xl"
            onClick={handleShowData}
          >
            Data Perjalanan
          </button>
          <button
            className="btn bg-transparent text-white hover:bg-transparent hover:text-[#3399ff] border-none ml-4 md:text-lg md:px-8 md:rounded-1xl"
          >
            About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
