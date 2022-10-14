import "../style/WeatherCard.scss";
import warningImg from "../asset/warning.png";
import { useNavigate } from "react-router-dom";

const WeatherCard = (props: any) => {
  var pic = props.weather.weather[0].icon;
  var url: string = `https://openweathermap.org/img/wn/${pic}@2x.png`;

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `details`;
    navigate(path);
  };

  return (
    <div className="card" onClick={routeChange}>
      <div className="commonProp">
        <div className="city">{props.weather.name}</div>
        <div>{">"}</div>
      </div>
      <div className="commonProp" style={{ marginTop: "45px" }}>
        <div className="temp">
          {Math.ceil(props.weather.main.temp - 273.15)}°
        </div>
        <img src={url} className="weatherImage" />
      </div>
      <div className="commonProp" style={{ marginTop: "40px" }}>
        <div className="warning">
          <img src={warningImg} />
          <div className="warningText">WARNING</div>
        </div>
        <div className="warningText">
          Expecting {props.weather.weather[0].main}
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
