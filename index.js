const dataButton = document.getElementById("dataButton");
const formData = document.getElementById("formData");
let inputData = "";
let myLoading = false;
dataButton.addEventListener("click", getDataButton);

const url = "https://covid-193.p.rapidapi.com/statistics?country=";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "55ba0ff110msh6722476395efd0ap1eb1e0jsne38086f11314",
    "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
  },
};

function getDataButton(event) {
  event.preventDefault();
  const currentCountry = formData.value;
  inputData = currentCountry;

  loadData();
  removeData();
}

async function loadData() {
  myLoading = true;

  if (myLoading === true) {
    const result = await fetch(`https://covid-193.p.rapidapi.com/statistics?country=${inputData}`, options);
    const parsedResult = await result.json();

    const parameter = parsedResult.response;
    console.log(parameter);

    if (parameter.length === 0) {
      const myCard1 = document.getElementById("active-cases");
      myCard1.append("Not Found");

      const myCard2 = document.getElementById("new-cases");
      myCard2.append("Not Found");

      const myCard3 = document.getElementById("recovered-cases");
      myCard3.append("Not Found");

      const myCard4 = document.getElementById("total-cases");
      myCard4.append("Not Found");

      const myCard5 = document.getElementById("total-deaths");
      myCard5.append("Not Found");

      const myCard6 = document.getElementById("total-tests");
      myCard6.append("Not Found");
    } else {
      const myCard1 = document.getElementById("active-cases");
      myCard1.append((parameter[0].cases.active ??= 0));

      const myCard2 = document.getElementById("new-cases");
      myCard2.append((parameter[0].cases.new ??= 0));

      const myCard3 = document.getElementById("recovered-cases");
      myCard3.append((parameter[0].cases.recovered ??= 0));

      const myCard4 = document.getElementById("total-cases");
      myCard4.append((parameter[0].cases.total ??= 0));

      const myCard5 = document.getElementById("total-deaths");
      myCard5.append((parameter[0].deaths.total ??= 0));

      const myCard6 = document.getElementById("total-tests");
      myCard6.append((parameter[0].tests.total ??= 0));
    }
  } else {
    console.log("error");
  }
}

function removeData() {
  const myCard1 = document.getElementById("active-cases");
  while (myCard1.firstChild) {
    myCard1.removeChild(myCard1.firstChild);
  }

  const myCard2 = document.getElementById("new-cases");
  while (myCard2.firstChild) {
    myCard2.removeChild(myCard2.firstChild);
  }

  const myCard3 = document.getElementById("recovered-cases");
  while (myCard3.firstChild) {
    myCard3.removeChild(myCard3.firstChild);
  }

  const myCard4 = document.getElementById("total-cases");
  while (myCard4.firstChild) {
    myCard4.removeChild(myCard4.firstChild);
  }

  const myCard5 = document.getElementById("total-deaths");
  while (myCard5.firstChild) {
    myCard5.removeChild(myCard5.firstChild);
  }

  const myCard6 = document.getElementById("total-tests");
  while (myCard6.firstChild) {
    myCard6.removeChild(myCard6.firstChild);
  }
}
