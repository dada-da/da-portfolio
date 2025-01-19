"use client";

import React, { Ref, useState } from "react";

import { isNumber } from "@/util/typecheck";

interface IInputProps {
  ref: Ref<HTMLInputElement>;
  value?: number | string;
  setValue?: (value: number | string) => void;
  min?: number;
  max?: number;
  className?: string;
  onInputChange?: (value: number | string) => void;
}

const InputNumber = (props: IInputProps) => {
  const { value, setValue, className, min, max, ref, onInputChange } = props;
  const [inputValue, setInputValue] = useState<number | string>(value || 0);

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const value = handleValidate(event.target.value);
    if (value !== undefined) {
      setInputValue(value);
      setValue && setValue(value);
      onInputChange && onInputChange(value);
    }
  };

  const handleValidate = (value: unknown): number | string => {
    const numberValue = value as number;

    if (value === "") return "";

    if (min === undefined && max === undefined) return numberValue;

    if (min !== undefined && isNumber(min)) {
      if (numberValue < min) {
        return min;
      }
    }

    if (max !== undefined && isNumber(max)) {
      if (numberValue > max) {
        return max;
      }
    }

    return numberValue;
  };

  return (
    <input
      ref={ref}
      className={className || "input size-10 text-center"}
      type="number"
      value={value || inputValue}
      min={min}
      max={max}
      onChange={(e) => {
        handleChangeValue(e);
      }}
    />
  );
};

export default InputNumber;
