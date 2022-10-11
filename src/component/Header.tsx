import header_icon from "../asset/header_icon.png";
import "../style/header.scss";

export default function Header() {
  return (
    <div className="headerWeather">
      <div>
        <img src={header_icon} />
      </div>
      <div className="algn">Weather Forecast</div>
    </div>
  );
}
