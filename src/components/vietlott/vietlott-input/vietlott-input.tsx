"use client";

import React, { useState, useEffect } from "react";

import InputNumber from "@/components/common/form/input-number";

interface IProps {
  isRolling: boolean;
  position: number;
  defaultValue: number;
  onInputChange: (value: number, position: number) => void;
}

const VietlottInput = ({
  isRolling,
  defaultValue,
  position,
  onInputChange,
}: IProps) => {
  const [value, setValue] = useState<string | number>(defaultValue);

  const handleInput = (value: string | number) => {
    setValue(value);
    onInputChange(value as number, position);
  };

  const handleOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (event.target.value === "") {
      setValue(1);
      onInputChange(1 as number, position);
    }
  };

  useEffect(() => {
    // if (isRolling && !isCustomNumber) {
    //   const randomNum = Math.floor(Math.random() * (45 - 1 + 1) + 1);
    //   setValue(randomNum);
    // }
  }, [isRolling]);

  return (
    <div className="relative bg-primary size-10">
      <InputNumber
        id={`vietlott-input-${position}`}
        value={value}
        setValue={setValue}
        onInputChange={handleInput}
        onBlur={handleOnBlur}
        min={1}
        max={45}
        className="input size-full top-0 right-0 text-black text-center absolute bg-transparent transition-[top] ease-in-out duration-500"
      />
    </div>
  );
};

export default VietlottInput;
