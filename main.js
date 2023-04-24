let converter = document.querySelector("#convert-button");
converter.addEventListener("click", () => {
  let year = document.querySelector("#year");
  let month = document.querySelector("#month");
  let day = document.querySelector("#day");
  let userDate = new Date(`${year.value}-${month.value}-${day.value}`);
  let currentDate = new Date();
  if (+userDate < +currentDate) {
    let years = currentDate.getFullYear() - userDate.getFullYear();
    let months = currentDate.getMonth() - userDate.getMonth();
    let days = currentDate.getDate() - userDate.getDate();

    if (months < 0) {
      years = years - 1;
      months = months + 12;

      if (days < 0) {
        months = months - 1;
        days = days + 30;
        document.querySelector("#output-years").innerHTML = years;
        document.querySelector("#output-months").innerHTML = months;
        document.querySelector("#output-days").innerHTML = days;
        console.log("months and day < 0");
      } else {
        document.querySelector("#output-years").innerHTML = years;
        document.querySelector("#output-months").innerHTML = months;
        document.querySelector("#output-days").innerHTML = days;
        console.log("months < 0");
      }
    } else {
      if (days < 0) {
        months = months - 1;
        days = days + 30;
        document.querySelector("#output-years").innerHTML = years;
        document.querySelector("#output-months").innerHTML = months;
        document.querySelector("#output-days").innerHTML = days;
        console.log("else");
      } else {
        document.querySelector("#output-years").innerHTML = years;
        document.querySelector("#output-months").innerHTML = months;
        document.querySelector("#output-days").innerHTML = days;
        console.log("else else");
      }
    }
  } else {
    console.log("you're kidding!");
  }
});
