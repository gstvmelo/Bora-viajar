import "./style.css";

const menu = document.querySelector("#mobile-menu-bars");
const menuX = document.querySelector("#mobile-menu-x");
const nav = document.querySelector("#nav-mobile-menu");
const headerHide = document.querySelector("#header-section");

menu.addEventListener("click", (e) => {
  e.preventDefault();
  nav.classList.toggle("hidden");
  menuX.classList.toggle("hidden");
  menu.classList.toggle("hidden");
  headerHide.classList.toggle("invisible");
  document.documentElement.style.overflow = "hidden";
});

menuX.addEventListener("click", (e) => {
  e.preventDefault();
  nav.classList.toggle("hidden");
  menuX.classList.toggle("hidden");
  menu.classList.toggle("hidden");
  headerHide.classList.toggle("invisible");
  document.documentElement.style.overflow = "auto";
});




// API Skyscanner
const url =
  "https://skyscanner-api.p.rapidapi.com/v3/flights/live/search/create";

const searchFlight = document.querySelector("#search-flight");

const apiKey = process.env.API_KEY;

searchFlight.addEventListener("submit", async (e) => {
  e.preventDefault();

  const from = document.querySelector("#from-flight");
  const to = document.querySelector("#to-flight");
  const dateFlight = document.querySelector("#date-flight").valueAsDate;
  const numPass = document.querySelector("#passengers");

  const day = dateFlight.getDate();
  const month = dateFlight.getMonth() + 1;
  const year = dateFlight.getFullYear();

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "skyscanner-api.p.rapidapi.com",
    },
    body: JSON.stringify({
      query: {
        market: "PT",
        locale: "pt-BR",
        currency: "BRL",
        queryLegs: [
          {
            originPlaceId: { iata: from.value },
            destinationPlaceId: { iata: to.value },
            date: {
              day: day,
              month: month,
              year: year,
            },
          },
        ],
        cabinClass: "CABIN_CLASS_ECONOMY",
        adults: parseInt(numPass.value),
      },
    }),
  };

  try {
    const response = await fetch(url, options);
    const resultText = await response.text();
    const resultObject = JSON.parse(resultText);
    console.log(resultObject);
    return resultObject;
  } catch (error) {
    console.error(error);
  }
});
