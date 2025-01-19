"use client";

import { useState, useRef, useEffect } from "react";

import InputNumber from "@/components/common/form/InputNumber";

const VietlottInput = ({ isRolling }: { isRolling: boolean }) => {
  const ref = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<string | number>(1);
  const [isCustomNumber, setIsCustomNumber] = useState(false);

  const handleInput = (value: string | number) => {
    if (!!value) {
      setIsCustomNumber(true);
      setValue(value);
    }
  };

  useEffect(() => {
    if (isRolling && !isCustomNumber) {
      const randomNum = Math.floor(Math.random() * (45 - 1 + 1) + 1);
      setValue(randomNum);
    }
  }, [isRolling]);

  return (
    <div className="relative bg-primary size-10">
      <InputNumber
        ref={ref}
        value={value}
        onInputChange={handleInput}
        min={1}
        max={45}
        className="input size-full top-0 right-0 text-black text-center absolute bg-transparent transition-[top] ease-in-out duration-500"
      />
    </div>
  );
};

export default VietlottInput;
