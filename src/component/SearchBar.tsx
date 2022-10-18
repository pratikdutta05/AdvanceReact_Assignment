import emptyIcon from "../asset/emptyScreen.png";
import "../style/searchBar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import React, { useState, useEffect } from "react";
import { searchAction } from "../redux/Action";
import WeatherCard from "./WeatherCard";
import { City } from "../interfaces";

const SearchBar: React.FC = () => {
  const [searchKey, setSearchKey] = useState("");
  const [suggestedCity, setSuggestedCity] = useState([] as any);
  const [selectCity, setSelectCity] = useState("");
  const [cardInfo, setCardInfo] = useState<City>();

  const handleChange = (e: any) => {
    // debounce
    setSearchKey(e.target.value);
    setSelectCity(e.target.value);
    setCardInfo(undefined);
  };
  useEffect(() => {
    if (searchKey) {
      var data = require("../asset/cities.json");
      var city_names: String[] = [];
      data.map((value: any) => {
        city_names.push(value["name"]);
      });
      const cityNames: String[] = city_names.filter((data) => {
        return data.toLowerCase().startsWith(searchKey.toLowerCase());
      });
      setSuggestedCity(cityNames);
    } else {
      setSuggestedCity([]);
    }
  }, [searchKey]);

  const handleCityClick = (e: any) => {
    setSelectCity(e);
    console.log(e);
  };

  const handleSearch = () => {
    searchAction(selectCity).then((response) => {
      if (response.status === 200) {
        // console.log(response["data"]);
        setCardInfo(response["data"]);
        console.log(cardInfo);
      } else {
        console.error(response);
      }
    });
  };

  return (
    <div>
      <div className="searchParent">
        <input
          type="text"
          placeholder="Search Location"
          name="search"
          value={selectCity}
          className="searchbar"
          onChange={(e) => handleChange(e)}
        />
        <div className="searchIconDiv">
          <SearchOutlinedIcon className="icon" onClick={handleSearch} />
        </div>
      </div>
      <div className="cityList">
        {suggestedCity.map((city: String) => {
          return (
            <button className="pill" onClick={(e) => handleCityClick(city)}>
              {city}
            </button>
          );
        })}
      </div>
      {searchKey === "" && (
        <div className="emptyImage">
          <img src={emptyIcon} />
          <p>No location added to watchlist</p>
        </div>
      )}
      {cardInfo !== undefined && <WeatherCard weather={cardInfo} />}
    </div>
  );
};
export default SearchBar;
