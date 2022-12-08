const initArr = [
  { name: "BBBB", score: "25" },
  { name: "CCCC", score: "1" },
  { name: "BBBB", score: "10" },
  { name: "DDDD", score: "5" },
  { name: "CCCC", score: "15" },
  { name: "AAAA", score: "6" },
  { name: "AAAA", score: "6" },
  { name: "UUUU", score: "8" },
  { name: "BBBB", score: "8" },
];

// const a = [...new Set(initArr.map((el) => el.name))];

// const result = initArr.filter((el, idx, arr) => {
  
// })

// const b = a.map((el) => {
//   return { name: el };
// });

// console.log(b)

// const c = initArr.sort((a, b) => b.score - a.score);
// const d = c.filter((elObj, idx, arr) => {
//   return a.map(el => el === elObj);
// })

// console.log(d);

// function sortByScore(arr) {
//   const sortArr = arr.sort((a, b) => b.score - a.score);
//   const filterArr = sortArr.filter((elObj, index, self) => {
//     return index === self.findIndex((el) => el.name === elObj.name);
//   });
//   return filterArr;
// }

// console.log(sortByScore(initArr));
