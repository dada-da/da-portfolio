"use client";

import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import VietlottInput from "@/components/vietlott/vietlott-input/vietlott-input";

import { getRandomNumber, updateNumberList, VietlottTypes } from "./ulti";

const VietlottMain = () => {
  const [vietlottType, setVietlottType] = useState(VietlottTypes.Mega);
  const [numbers, setNumbers] = useState<number[]>(
    getRandomNumber(vietlottType),
  );
  const [customNumberPosition, setCustomNumberPosition] = useState<number[]>(
    [],
  );
  const [isRolling, setIsRolling] = useState(false);

  const handleSelectVietlottType = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setVietlottType(
      (event.target as HTMLInputElement).value as unknown as VietlottTypes,
    );
  };

  const handleInputNumber = (value: number, position: number) => {
    const newCustomNumberPosition = [...customNumberPosition, position];
    setCustomNumberPosition(newCustomNumberPosition);
    const newNumbers = updateNumberList(value, position, numbers);
    setNumbers(newNumbers);
  };

  const handleGetRandomNumber = (clearCustomNumber = false) => {
    const oldNumbers = [...numbers];
    const newNumbers = getRandomNumber(vietlottType);

    const mergedNumbers = newNumbers.map((number, index) => {
      if (customNumberPosition.includes(index)) {
        return oldNumbers[index];
      } else return number;
    });

    setNumbers(mergedNumbers);
    if (clearCustomNumber) setCustomNumberPosition([]);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center">
        <RadioGroup
          className="radio-button-group"
          row
          aria-labelledby="vietlott-type-input-label"
          name="vietlott-type-group"
          value={vietlottType}
          onChange={handleSelectVietlottType}
        >
          <FormControlLabel
            value={VietlottTypes.Mega}
            control={<Radio />}
            label="Mega 6/45"
          />
          <FormControlLabel
            value={VietlottTypes.Power}
            control={<Radio />}
            label="Power 6/55"
          />
        </RadioGroup>
      </div>

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
      <div className="flex justify-center items-center gap-10">
        <button
          className="underline underline-offset-4"
          onClick={() => handleGetRandomNumber()}
        >
          Get It!!!
        </button>

        <button
          className="underline underline-offset-4"
          onClick={() => handleGetRandomNumber(true)}
        >
          Clear custom number
        </button>
      </div>
    </div>
  );
};

export default VietlottMain;
