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
    name: "SNAKE",
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
// initial collection of zodiac and element
let radioValue = document.getElementsByName("choice-radio"); // initial radio button
let input_field = document.getElementById("input-field"); //initial input field
let zodiac_dropdown_sect = document.getElementById("zodiac-dropdown-sect"); //initial dropdown
//create empty element for initial webpage
/*
this webpage will seperate state in to 2 state
1. year radio state will have choice state to keep state of snippet
2. zodiac radio state will have zodiac state to keep state of snippet
 */
let choice_state = [
  // in case select by year (default) to save state
  {
    year: "----",
    chinese_zodiac: "----",
    yinYang: "----",
    element: "----",
    desc: "----",
    imgSrc: "----"
  }
];
let zodiac_state = [
  // in case select by zodiac to save state
  {
    chinese_zodiac: "----",
    yinYang: "----",
    element: "----",
    desc: "----",
    imgSrc: "----"
  }
];
let temp_year = "";
let empty_year = "----";
let year_desc = document.getElementById("yearText"); //init element year in snippet
let year_text = document.getElementById("year"); // init element Year  (for hidden and show)
let chinese_zodiac = document.getElementById("chinese-zodiac"); // init chinese zodiac value
let yinyang = document.getElementById("YinYang"); // init yinYang value
let element = document.getElementById("element"); // init element value
let zodiac_desc = document.getElementById("zodiac-desc"); // init zodiac desc value
let zodiac_img = document.getElementById("zodiac-img"); // init zodiac-img value

window.onload = () => {
  // webpage initial
  // in this case value will be ---- for all element below
  year_desc.innerHTML = "----";
  chinese_zodiac.innerHTML = "----";
  yinyang.innerHTML = "----";
  element.innerHTML = "----";
  zodiac_desc.innerHTML = "----";
  // end initial
  console.log(choice_state);
};
const getImage = zodiac => {
  //get zodiac value then return zodiac image
  if (zodiac == "RAT") {
    let imgSrc = "img/zodiac0.jpg";
    zodiac_state[0].imgSrc = imgSrc;
    choice_state[0].imgSrc = imgSrc;
    zodiac_img.src = imgSrc;
  } else if (zodiac == "OX") {
    let imgSrc = "img/zodiac1.jpg";
    zodiac_state[0].imgSrc = imgSrc;
    choice_state[0].imgSrc = imgSrc;
    zodiac_img.src = imgSrc;
  } else if (zodiac == "TIGER") {
    let imgSrc = "img/zodiac2.jpg";
    zodiac_state[0].imgSrc = imgSrc;
    choice_state[0].imgSrc = imgSrc;
    zodiac_img.src = imgSrc;
  } else if (zodiac == "RABBIT") {
    let imgSrc = "img/zodiac3.jpg";
    zodiac_state[0].imgSrc = imgSrc;
    choice_state[0].imgSrc = imgSrc;
    zodiac_img.src = imgSrc;
  } else if (zodiac == "DRAGON") {
    let imgSrc = "img/zodiac4.jpg";
    zodiac_state[0].imgSrc = imgSrc;
    choice_state[0].imgSrc = imgSrc;
    zodiac_img.src = imgSrc;
  } else if (zodiac == "SNAKE") {
    let imgSrc = "img/zodiac5.jpg";
    zodiac_state[0].imgSrc = imgSrc;
    choice_state[0].imgSrc = imgSrc;
    zodiac_img.src = imgSrc;
  } else if (zodiac == "HORSE") {
    let imgSrc = "img/zodiac6.jpg";
    zodiac_state[0].imgSrc = imgSrc;
    choice_state[0].imgSrc = imgSrc;
    zodiac_img.src = imgSrc;
  } else if (zodiac == "GOAT") {
    let imgSrc = "img/zodiac7.jpg";
    zodiac_state[0].imgSrc = imgSrc;
    choice_state[0].imgSrc = imgSrc;
    zodiac_img.src = imgSrc;
  } else if (zodiac == "MONKEY") {
    let imgSrc = "img/zodiac8.jpg";
    zodiac_state[0].imgSrc = imgSrc;
    choice_state[0].imgSrc = imgSrc;
    zodiac_img.src = imgSrc;
  } else if (zodiac == "ROOSTER") {
    let imgSrc = "img/zodiac9.jpg";
    zodiac_state[0].imgSrc = imgSrc;
    choice_state[0].imgSrc = imgSrc;
    zodiac_img.src = imgSrc;
  } else if (zodiac == "DOG") {
    let imgSrc = "img/zodiac10.jpg";
    zodiac_state[0].imgSrc = imgSrc;
    choice_state[0].imgSrc = imgSrc;
    zodiac_img.src = imgSrc;
  } else if (zodiac == "PIG") {
    let imgSrc = "img/zodiac11.jpg";
    zodiac_state[0].imgSrc = imgSrc;
    choice_state[0].imgSrc = imgSrc;
    zodiac_img.src = imgSrc;
  }
};
let findZodiac = (zodiac, typeSubmit) => {
  // this function will find all data each zodiac contain in collection then change the Inner html value
  for (let k of zodiac_collection) {
    // loop for get all object in collection
    if (k.name == zodiac && typeSubmit == "year") {
      console.log("set year");
      // if value in k equal to zodiac
      choice_state[0].yinYang = k.yinYang; // save state yinYang state value
      choice_state[0].element = k.ZElement; // save state element state value
      yinyang.innerHTML = choice_state[0].yinYang; // set innerhtml of yingyang
      element.innerHTML = choice_state[0].element; // set innnerhtml of element
      for (let elementKey of element_collection) {
        // find all object in element in collection for search element that contain desc
        if (k.ZElement == elementKey.ZElement) {
          // if element is equal to search element
          choice_state[0].desc = elementKey.Personality; //save desc state
          zodiac_desc.innerHTML = elementKey.Personality; //set innerhtml desc state
        }
      }
      console.log("choice", choice_state);
    } else if (k.name == zodiac && typeSubmit == "zodiac") {
      console.log("set zodiac");
      zodiac_state[0].yinYang = k.yinYang;
      zodiac_state[0].element = k.ZElement;
      yinyang.innerHTML = zodiac_state[0].yinYang; // set innerhtml of yingyang
      element.innerHTML = zodiac_state[0].element; // set innnerhtml of element
      for (let elementKey of element_collection) {
        // find all object in element in collection for search element that contain desc
        if (k.ZElement == elementKey.ZElement) {
          // if element is equal to search element
          zodiac_state[0].desc = elementKey.Personality; //save desc state
          zodiac_desc.innerHTML = elementKey.Personality; //set innerhtml desc state
        }
      }
      console.log("zodiac", zodiac_state);
    }
  }
};
const yearRadioInput = _year => {
  if (choice_state[0].chinese_zodiac == "----") {
    chinese_zodiac.innerHTML = "----";
    yinyang.innerHTML = "----";
    element.innerHTML = "----";
    zodiac_desc.innerHTML = "----";
    zodiac_img.src = "img/zodiac-selector.png";
  }
  year_text.style.display = "inline"; //set css attr of year div to iniline
  year_desc.innerHTML = choice_state[0].year; // set innerhtml of year (state value)
  input_field.style.display = "inline"; //set input field attr inline
  zodiac_dropdown_sect.style.display = "none"; // set dropdwon display none
  year_desc.innerHTML = _year; // set year to input year
  choice_state[0].year = _year; // set state year value
  if (_year == undefined || _year == "") {
    // this condition will toggle when user switch from zodiac to year
    //this condition will set value of snippet to previous state in case it have
    if (temp_year < 1900) {
      temp_year = choice_state[0].year;
    }
    choice_state[0].year = temp_year;
    year_desc.innerHTML = choice_state[0].year || "----";
    chinese_zodiac.innerHTML = choice_state[0].chinese_zodiac;
    findZodiac(choice_state[0].chinese_zodiac, "year");
    getImage(choice_state[0].chinese_zodiac);
  } else {
    //if user submit an year
    year_desc.innerHTML = choice_state[0].year;
    // zodiac year will start counting at 1900 is RAT 1901 is OX

    let getYear_upper = _year - 1900;
    let getYear_lower = getYear_upper % 12;
    // console.log(getYear_upper % 100);
    // console.log(getYear_lower % 12);

    if (getYear_lower == 0) {
      choice_state[0].chinese_zodiac = "RAT";
      chinese_zodiac.innerHTML = choice_state[0].chinese_zodiac;
      findZodiac(choice_state[0].chinese_zodiac, "year");
      getImage(choice_state[0].chinese_zodiac);
    } else if (getYear_lower == 1) {
      choice_state[0].chinese_zodiac = "OX";
      chinese_zodiac.innerHTML = choice_state[0].chinese_zodiac;
      findZodiac(choice_state[0].chinese_zodiac, "year");
      getImage(choice_state[0].chinese_zodiac);
    } else if (getYear_lower == 2) {
      choice_state[0].chinese_zodiac = "TIGER";
      chinese_zodiac.innerHTML = choice_state[0].chinese_zodiac;
      findZodiac(choice_state[0].chinese_zodiac, "year");
      getImage(choice_state[0].chinese_zodiac);
    } else if (getYear_lower == 3) {
      choice_state[0].chinese_zodiac = "RABBIT";
      chinese_zodiac.innerHTML = choice_state[0].chinese_zodiac;
      findZodiac(choice_state[0].chinese_zodiac, "year");
      getImage(choice_state[0].chinese_zodiac);
    } else if (getYear_lower == 4) {
      choice_state[0].chinese_zodiac = "DRAGON";
      chinese_zodiac.innerHTML = choice_state[0].chinese_zodiac;
      findZodiac(choice_state[0].chinese_zodiac, "year");
      getImage(choice_state[0].chinese_zodiac);
    } else if (getYear_lower == 5) {
      choice_state[0].chinese_zodiac = "SNAKE";
      chinese_zodiac.innerHTML = choice_state[0].chinese_zodiac;
      findZodiac(choice_state[0].chinese_zodiac, "year");
      getImage(choice_state[0].chinese_zodiac);
    } else if (getYear_lower == 6) {
      choice_state[0].chinese_zodiac = "HORSE";
      chinese_zodiac.innerHTML = choice_state[0].chinese_zodiac;
      findZodiac(choice_state[0].chinese_zodiac, "year");
      getImage(choice_state[0].chinese_zodiac);
    } else if (getYear_lower == 7) {
      choice_state[0].chinese_zodiac = "GOAT";
      chinese_zodiac.innerHTML = choice_state[0].chinese_zodiac;
      findZodiac(choice_state[0].chinese_zodiac, "year");
      getImage(choice_state[0].chinese_zodiac);
    } else if (getYear_lower == 8) {
      choice_state[0].chinese_zodiac = "MONKEY";
      chinese_zodiac.innerHTML = choice_state[0].chinese_zodiac;
      findZodiac(choice_state[0].chinese_zodiac, "year");
      getImage(choice_state[0].chinese_zodiac);
    } else if (getYear_lower == 9) {
      choice_state[0].chinese_zodiac = "ROOSTER";
      chinese_zodiac.innerHTML = choice_state[0].chinese_zodiac;
      findZodiac(choice_state[0].chinese_zodiac, "year");
      getImage(choice_state[0].chinese_zodiac);
    } else if (getYear_lower == 10) {
      choice_state[0].chinese_zodiac = "DOG";
      chinese_zodiac.innerHTML = choice_state[0].chinese_zodiac;
      findZodiac(choice_state[0].chinese_zodiac, "year");
      getImage(choice_state[0].chinese_zodiac);
    } else if (getYear_lower == 11) {
      choice_state[0].chinese_zodiac = "PIG";
      chinese_zodiac.innerHTML = choice_state[0].chinese_zodiac;
      findZodiac(choice_state[0].chinese_zodiac, "year");
      getImage(choice_state[0].chinese_zodiac);
    }
  }
  // console.log(choice_state);
};
const zodiacRadioInput = zodiac => {
  console.log(zodiac_state);
  console.log(choice_state);
  if (zodiac_state[0].chinese_zodiac == "----") {
    chinese_zodiac.innerHTML = "----";
    yinyang.innerHTML = "----";
    element.innerHTML = "----";
    zodiac_desc.innerHTML = "----";
    zodiac_img.src = "img/zodiac-selector.png";
  } else {
    findZodiac(zodiac_state[0].chinese_zodiac, "zodiac");
    getImage(zodiac);
  }
  findZodiac(zodiac_state[0].chinese_zodiac, "zodiac");
  getImage(zodiac_state[0].chinese_zodiac);
  let year_text = document.getElementById("year");
  year_text.style.display = "none";
  input_field.style.display = "none";
  zodiac_dropdown_sect.style.display = "inline";
  getImage(zodiac);
};
const cSubmit = () => {
  let choiceText = document.getElementById("choice-text").value;
  // console.log(choiceText);
  choiceText = Number.parseInt(choiceText);
  if (choiceText < 1900) {
    alert("Year must more than 1900 or Number Format");
  }
  if (!Number.isInteger(choiceText)) {
    alert("Year must more than 1900 or Number Format");
  }
  if (choiceText >= 1900) {
    yearRadioInput(choiceText);
    choice_state[0].year = choiceText;
    temp_year = choice_state[0].year;
    let choiceTextReset = document.getElementById("choice-text");
    choiceTextReset.value = "";
  }
};
const zSubmit = () => {
  let zodiac_dropdown = document.getElementById("zodiac-dropdown");
  let chinese_zodiac = document.getElementById("chinese-zodiac");
  let yinyang = document.getElementById("YinYang");
  let element = document.getElementById("element");
  let zodiac_desc = document.getElementById("zodiac-desc");
  let zodiac_option =
    zodiac_dropdown.options[zodiac_dropdown.selectedIndex].value;
  zodiacRadioInput(zodiac_option);
  zodiac_state[0].chinese_zodiac = zodiac_option;
  chinese_zodiac.innerHTML = zodiac_option;
  findZodiac(zodiac_state[0].chinese_zodiac, "zodiac");
};
const generateDropdwonZodiac = obj => {
  let dropdownItem = document.getElementById(`zodiac-dropdown`);
  let dropdownOpt = document.createElement("option");
  for (let k of obj) {
    dropdownOpt.text = k.name;
    dropdownOpt.value = k.name;
    dropdownItem.options[k.id] = new Option(k.name, k.value);
  }
};
generateDropdwonZodiac(zodiac_collection);
