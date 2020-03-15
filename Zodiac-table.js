const zodiac_collection = [
  {
    id: 0,
    name: "RAT",
    yinYang: "Yang",
    ZElement: "Water",
    ImageName: "zodiac0.jpg"
  },
  {
    id: 1,
    name: "OX",
    yinYang: "Yin",
    ZElement: "Earth",
    ImageName: "zodiac1.jpg"
  },
  {
    id: 2,
    name: "TIGER",
    yinYang: "Yang",
    ZElement: "Wood",
    ImageName: "zodiac2.jpg"
  },
  {
    id: 3,
    name: "RABBIT",
    yinYang: "Yin",
    ZElement: "Wood",
    ImageName: "zodiac3.jpg"
  },
  {
    id: 4,
    name: "DRAGON",
    yinYang: "Yang",
    ZElement: "Earth",
    ImageName: "zodiac4.jpg"
  },
  {
    id: 5,
    name: "SANKE",
    yinYang: "Yin",
    ZElement: "Fire",
    ImageName: "zodiac5.jpg"
  },
  {
    id: 6,
    name: "HORSE",
    yinYang: "Yang",
    ZElement: "Fire",
    ImageName: "zodiac6.jpg"
  },
  {
    id: 7,
    name: "GOAT",
    yinYang: "Yin",
    ZElement: "Earth",
    ImageName: "zodiac7.jpg"
  },
  {
    id: 8,
    name: "MONKEY",
    yinYang: "Yang",
    ZElement: "Metal",
    ImageName: "zodiac8.jpg"
  },
  {
    id: 9,
    name: "ROOSTER",
    yinYang: "Yin",
    ZElement: "Metal",
    ImageName: "zodiac9.jpg"
  },
  {
    id: 10,
    name: "DOG",
    yinYang: "Yang",
    ZElement: "Earth",
    ImageName: "zodiac10.jpg"
  },
  {
    id: 11,
    name: "PIG",
    yinYang: "Yin",
    ZElement: "Water",
    ImageName: "zodiac11.jpg"
  }
];

let zodiac_table = document.getElementById("zodiac-table");
let z_checkbox = document.getElementById("zodiac-checkbox");

const z_function = () => {
  if (z_checkbox.checked == true) {
    zodiac_table.style.display = "block";
  } else {
    zodiac_table.style.display = "none";
  }
};
// const generateTableHead = (table, data) => {
//   let thead = table.createTHead();
//   let row = thead.insertRow();
//   for (let key of zodiac_collection) {
//     let th = document.createElement("th");
//     let text = document.createTextNode(key);
//     th.appendChild(text);
//     row.appendChild(th);
//   }
// };
window.onload = () => {
  // let table = document.querySelector("table");
  // let data = Object.keys(zodiac_collection[0]);
  // console.log(data);
  // generateTableHead(table, data);
};
