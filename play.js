const myArr = ["hello", "cool", "people", "today"];

const rule = (el) => {
  //   let returnVal;

  //   if (el === "today") {
  //     returnVal = el;
  //   }

  //   return returnVal;

  return el === "people";
};

const index = myArr.findIndex(rule);

console.log(index);
