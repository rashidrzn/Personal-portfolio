import hotBg from "./assests/hot.jpg";

import coldBg from "./assests/cold.jpg";
import Description from "./components/Description";
import { useEffect } from "react";
import { getFormattedData } from "./weatherService";
// import coldbg from "./assests/cold";

function App() {
  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedData("paris");
    };
    fetchWeatherData();
  }, []);

  return (
    <div className="App" style={{ backgroundImage: `url(${coldBg})` }}>
      <div className="overlay">
        <div className="container">
          <div className="section section__input">
            <input type="text" name="city" placeholder="Enter the city...." />
            <button>*F</button>
          </div>
          <div className="section section__temprature">
            <div className="icon">
              <h3>London, GB</h3>
              <img
                src="https://home.openweathermap.org/assets/logo_white-12c4f864cc825cfead13b43f6fdae14172bb7848529cb9f48374b9ebb0e9f061.png"
                alt=""
              />
              <h3>Cloudy</h3>
            </div>
            <div className="tempreture">
              <h1>34 *C</h1>
            </div>
          </div>
          {/* bottom description */}
          <Description />
        </div>
      </div>
    </div>
  );
}

export default App;
