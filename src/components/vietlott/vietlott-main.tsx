"use client";

import { useState } from "react";

import VietlottInput from "@/components/vietlott/vietlott-input/vietlott-input";
import { getRandomNumber, updateNumberList } from "./ulti";

const VietlottMain = () => {
  const [numbers, setNumbers] = useState<number[]>(getRandomNumber());
  const [customNumberPosition, setCustomNumberPosition] = useState<number[]>(
    [],
  );
  const [isRolling, setIsRolling] = useState(false);

  const handleInputNumber = (value: number, position: number) => {
    const newCustomNumberPosition = [...customNumberPosition, position];
    setCustomNumberPosition(newCustomNumberPosition);
    const newNumbers = updateNumberList(value, position, numbers);
    setNumbers(newNumbers);
  };

  const handleGetRandomNumber = () => {
    const oldNumbers = [...numbers];
    const newNumbers = getRandomNumber();

    const mergedNumbers = newNumbers.map((number, index) => {
      if (customNumberPosition.includes(index)) {
        return oldNumbers[index];
      } else return number;
    });

    setNumbers(mergedNumbers);
    setCustomNumberPosition([]);
  };

  return (
    <>
      <div className="flex justify-center items-center gap-2">
        {numbers.map((number, index) => (
          <VietlottInput
            key={`${number}-${index}`}
            isRolling={isRolling}
            position={index}
            defaultValue={number}
            onInputChange={handleInputNumber}
          />
        ))}
      </div>
      <button className="pt-4" onClick={handleGetRandomNumber}>
        Get It!!!
      </button>
    </>
  );
};

export default VietlottMain;
