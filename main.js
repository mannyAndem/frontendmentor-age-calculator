let converter = document.querySelector("#convert-button");
converter.addEventListener("click", () => {
  let year = document.querySelector("#year");
  let month = document.querySelector("#month");
  let day = document.querySelector("#day");
  let userDate = new Date(`${year.value}-${month.value}-${day.value}`);
  let currentDate = new Date();
  if (year.value && month.value && day.value) {
    if (userDate == "Invalid Date") {
      console.log(userDate);
      document.querySelector("#output-years").innerHTML = "- -";
      document.querySelector("#output-months").innerHTML = "- -";
      document.querySelector("#output-days").innerHTML = "- -";

      document.querySelector(".day").style.display = "block";
      document.querySelector(".day").innerHTML = "Must be a valid date";

      document.querySelector(".month").style.display = "none";
      document.querySelector(".year").style.display = "none";

      document.querySelectorAll("input").forEach(function (element) {
        element.style.border = "2px solid hsl(0, 100%, 67%)";
      });
      document.querySelectorAll("label").forEach(function (element) {
        element.style.color = "hsl(0, 100%, 67%)";
      });
    }
    if (+userDate < +currentDate) {
      let years = currentDate.getFullYear() - userDate.getFullYear();
      let months = currentDate.getMonth() - userDate.getMonth();
      let days = currentDate.getDate() - userDate.getDate();

      document.querySelector(".year").style.display = "none";
      document.querySelector(".month").style.display = "none";
      document.querySelector(".day").style.display = "none";

      document.querySelectorAll("input").forEach(function (element) {
        element.style.border = "1px solid hsl(0, 0%, 8%)";
      });
      document.querySelectorAll("label").forEach(function (element) {
        element.style.color = "hsl(0, 0%, 8%)";
      });

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
      document.querySelector("#output-years").innerHTML = "--";
      document.querySelector("#output-months").innerHTML = "--";
      document.querySelector("#output-days").innerHTML = "--";

      document.querySelector(".day").style.display = "block";
      document.querySelector(".day").innerHTML = "Must be a date in the past";

      document.querySelector(".month").style.display = "none";
      document.querySelector(".year").style.display = "none";

      document.querySelectorAll("input").forEach(function (element) {
        element.style.border = "2px solid hsl(0, 100%, 67%)";
      });
      document.querySelectorAll("label").forEach(function (element) {
        element.style.color = "hsl(0, 100%, 67%)";
      });
    }
  } else if (year.value == "" || month.value == "" || day.value == "") {
    document.querySelector("#output-years").innerHTML = "- -";
    document.querySelector("#output-months").innerHTML = "- -";
    document.querySelector("#output-days").innerHTML = "- -";
    console.log("Still in business mate!");
    if (year.value == "") {
      document.querySelector(".year").style.display = "block";
      document.querySelector(".year").innerHTML = "This field is required";
      console.log("hello");
    } else if (year.value) {
      document.querySelector(".year").style.display = "none";
    }
    if (month.value == "") {
      document.querySelector(".month").style.display = "block";
      document.querySelector(".month").innerHTML = "This field is required";
      console.log("hello");
    } else if (month.value) {
      document.querySelector(".month").style.display = "none";
    }
    if (day.value == "") {
      document.querySelector(".day").style.display = "block";
      document.querySelector(".day").innerHTML = "This field is required";
      console.log("hello");
    } else if (day.value) {
      document.querySelector(".day").style.display = "none";
    }
  }
});
