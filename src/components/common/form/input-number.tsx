"use client";

import React, { useRef, useState } from "react";

import { isNumber } from "@/util/typecheck";

interface IInputProps {
  id: string;
  value: number | string;
  setValue: (value: number | string) => void;
  name?: string;
  min?: number;
  max?: number;
  className?: string;
  onInputChange?: (value: number | string) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const InputNumber = (props: IInputProps) => {
  const {
    id,
    name,
    value,
    setValue,
    className,
    min,
    max,
    onInputChange,
    onBlur,
  } = props;
  const ref = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState<number | string>(value);

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const value = handleValidate(event.target.value);
    setInputValue(value);
    if (value === "") {
      ref.current?.focus();
    }
    setValue(value);
    onInputChange && onInputChange(value);
  };

  const handleOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    onBlur && onBlur(event);
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
      id={`input-number-${id}`}
      name={name}
      ref={ref}
      className={className || "input size-10 text-center"}
      type="number"
      value={inputValue}
      min={min}
      max={max}
      onChange={(e) => {
        handleChangeValue(e);
      }}
      onBlur={(event: React.FocusEvent<HTMLInputElement>) =>
        handleOnBlur(event)
      }
    />
  );
};

export default InputNumber;
