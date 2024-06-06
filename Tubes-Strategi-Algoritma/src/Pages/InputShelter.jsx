import React from "react";
import { useNavigate } from "react-router-dom";

const InputShelter = ({ updateEntry }) => {
  const navigate = useNavigate();

  const handleSelectTime = (shelter) => {
    const currentDate = new Date().toLocaleDateString();
    updateEntry("shelter", shelter);
    updateEntry("date", currentDate);
    navigate("/inputjarak");
  };

  return (
    <div className="body-shelter px-[35px]">
      <div className="flex justify-center items-center min-h-screen">
        <div className="px-[30px] py-[30px] flex flex-col items-center text-center">
          <h2 className="text-[30px] font-bold sm:text-[40px]">Pilih Titik Shelter</h2>
          <div className="mt-[40px] flex justify-center space-x-20">
            <button className="btn bg-[#cc0000] text-white hover:bg-white hover:text-[#cc0000] border-none px-[30px] sm:px-[50px]" onClick={() => handleSelectTime("A")}>
              A
            </button>
            <button className="btn bg-[#cc0000] text-white hover:bg-white hover:text-[#cc0000] border-none px-[30px] sm:px-[50px]" onClick={() => handleSelectTime("B")}>
              B
            </button>
            <button className="btn bg-[#cc0000] text-white hover:bg-white hover:text-[#cc0000] border-none px-[30px] sm:px-[50px]" onClick={() => handleSelectTime("C")}>
              C
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputShelter;
