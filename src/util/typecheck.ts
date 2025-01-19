const isNumber = (val: any): boolean => {
  if (typeof val === "number" && !isNaN(val)) {
    return true;
  } else return !isNaN(parseInt(val));
};

export { isNumber };
