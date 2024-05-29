import React from "react";
import { useNavigate } from "react-router-dom";

const InputWaktu = ({ updateEntry }) => {
  const navigate = useNavigate();

  const handleSelectTime = (shelter) => {
    updateEntry({ shelter });
    navigate("/inputjarak");
  };

  return (
    <div className="body-shelter px-[35px]">
      <div className="flex justify-center items-center min-h-screen">
        <div className="px-[30px] py-[30px] flex flex-col items-center text-center">
          <h2 className="text-[30px] font-bold sm:text-[40px]">Pilih Titik Shelter</h2>
          <div className="mt-[40px]">
            {["A", "B", "C"].map((shelter) => (
              <button
                key={shelter}
                className="btn bg-[#cc0000] text-white hover:bg-white hover:text-[#cc0000] border-none border-white px-[30px] mr-[40px] md:mr-[60px] md:px-[50px]"
                onClick={() => handleSelectTime(shelter)}
              >
                {shelter}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputWaktu;
