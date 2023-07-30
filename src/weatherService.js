const API_KEY = "54576ccf95f761f74825bfe47a06e7ae";

const getFormattedData = async (city, units = "metric") => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

  const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);

  console.log(data);
};

export { getFormattedData };
