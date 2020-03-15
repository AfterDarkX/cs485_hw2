const element_collection = [
  {
    ZElement: "Wood",
    Personality:
      "has high morals, self-confident, expansive and co-operative, with wide and varied interests and idealistic goals"
  },
  {
    ZElement: "Fire",
    Personality:
      "has leadership qualities, dynamic passion, and is decisive, self-confident, positive and assertive"
  },
  {
    ZElement: "Earth",
    Personality:
      "is serious, logical and methodical, intelligent,objective and good at planning"
  },
  {
    ZElement: "Metal",
    Personality:
      "is sincere, has fixed values and opinions, is strong of will, and has eloquence of speech"
  },
  {
    ZElement: "Water",
    Personality:
      "is persuasive, intuitive, empathetic, objective and often sought out for their counsel"
  }
];
let element_table = document.getElementById("element-table");
let e_checkbox = document.getElementById("element-checkbox");
const generateElementTableHead = (table, data) => {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
};
const generateElementTable = (table, data) => {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
};

const e_function = () => {
  if (e_checkbox.checked == true) {
    element_table.style.display = "block";
  } else {
    element_table.style.display = "none";
  }
};
let etable = document.querySelector("#element-table-test");
let edata = Object.keys(element_collection[0]);
generateElementTable(etable, element_collection);
generateElementTableHead(etable, edata);
