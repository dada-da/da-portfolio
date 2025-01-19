"use client";

import { useState } from "react";
import VietlottInput from "@/components/vietlott-input/VietlottInput";

const Vietlott = () => {
  const [isRolling, setIsRolling] = useState(false);
  const getNumbers = () => {
    setIsRolling(true);
  };

  return (
    <div className="container text-center">
      <h1 className="text-3xl font-bold leading-tight tracking-tighter sm:text-4xl">
        Get lucky number
      </h1>
      <div className="pt-10">
        <div className="flex justify-center items-center gap-2">
          {[...Array(6)].map((x, i) => (
            <VietlottInput key={`${x}-${i}`} isRolling={isRolling} />
          ))}
        </div>
        <button onClick={getNumbers}>Get Nums</button>
      </div>
    </div>
  );
};

export default Vietlott;
