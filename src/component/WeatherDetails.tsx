import "../style/weatherDetails.scss";
import union from "../asset/Union.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../redux/hook";
import { addToWishList } from "../redux/Action";
import { addUser } from "../redux/weatherReducer";

const WeatherDetails = () => {
  const location = useLocation();
  //const dispatch = useDispatch();

  const dispatch = useAppDispatch();

  var time = new Date();
  console.log(location.state.props.weather.weather[0].icon);
  var pic = location.state.props.weather.weather[0].icon;
  console.log(pic);
  var url: string = `https://openweathermap.org/img/wn/${pic}@4x.png`;

  var stamp1 = location.state.props.weather.sys.sunrise;

  var date1 = new Date(stamp1 * 1000);

  var hours1 = date1.getHours();

  var minutes1 = "0" + date1.getMinutes();

  var seconds1 = "0" + date1.getSeconds();

  var formattedTime1 =
    hours1 + ":" + minutes1.substr(-2) + ":" + seconds1.substr(-2);

  var stamp2 = location.state.props.weather.sys.sunset;

  var date2 = new Date(stamp2 * 1000);

  var hours2 = date2.getHours();

  var minutes2 = "0" + date2.getMinutes();

  var seconds2 = "0" + date2.getSeconds();

  var formattedTime2 =
    hours2 + ":" + minutes2.substr(-2) + ":" + seconds2.substr(-2);

  const addWish = () => {
    dispatch(addUser(location.state.props.weather));
  };

  return (
    <div>
      <div className="headerLow">
        <NavLink to="/" style={{ textDecoration: "none" }}>
          {"< Back"}
        </NavLink>
        <div className="addList" onClick={addWish}>
          <div>Add to list </div>
          <img src={union} className="plus" />
        </div>
      </div>
      <div>
        <div className="imgRes">
          <img src={url} />
        </div>
        <div className="location">{location.state.props.weather.name}</div>
        <div className="temp_details">
          {Math.ceil(location.state.props.weather.main.temp - 273.15)}°
        </div>
      </div>
      <div className="info">
        <div className="topRow">
          <div className="topRowDis">TIME</div>
          <div className="topRowDis">PRESSURE</div>
          <div className="topRowDis">%RAIN</div>
          <div className="topRowDis">HUMIDITY</div>
        </div>
        <div className="topRow">
          <div className="RowDis">
            {time.toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          </div>
          <div className="RowDis" style={{ marginRight: "5%" }}>
            {location.state.props.weather.main.pressure}
          </div>
          <div className="RowDis" style={{ marginRight: "5%" }}>
            --
          </div>
          <div className="RowDis" style={{ marginRight: "5%" }}>
            {location.state.props.weather.main.humidity}
          </div>
        </div>
      </div>
      <div className="bottomRow">
        <div>
          <div className="heading">SUNRISE & SUNSET</div>
          <div className="lengthDay">Sunrise Time: {formattedTime1}</div>
          <div className="remDay">Sunset Time: {formattedTime2}</div>
        </div>
      </div>
    </div>
  );
};
export default WeatherDetails;
