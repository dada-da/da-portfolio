import { randomNumberInRange } from "@/util/number";

const getRandomNumber = () => {
  const newNumbers: number[] = [];

  while (newNumbers.length < 6) {
    const randomNumber = randomNumberInRange(1, 45);
    if (!newNumbers.includes(randomNumber)) {
      newNumbers.push(randomNumber);
    }
  }

  return newNumbers;
};

const updateNumberList = (
  value: number,
  position: number,
  numberList: number[],
): number[] => {
  const list: number[] = [...numberList];
  list[position] = value;
  return list;
};

export { getRandomNumber, updateNumberList };
