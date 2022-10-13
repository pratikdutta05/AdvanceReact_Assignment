import emptyIcon from "../asset/emptyScreen.png";
import searchIcon from "../asset/search.png";
import "../style/searchBar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import React, { useState, useEffect } from "react";
// const handleClick = () => {
//   console.log("Click Handled");
// };
// var filterList: String[] = [];
// const suggestCity = (val: string) => {
//   var data = require("../asset/cities.json");
//   data.map((value: any) => {
//     let targetName: String = value["name"];
//     if (
//       targetName.toLocaleLowerCase().startsWith(val.toLowerCase()) &&
//       val != ""
//     ) {
//       console.log(value["name"]);
//       filterList.push(value["name"]);
//     }
//   });
//   console.log(filterList);
// };
const SearchBar: React.FC = () => {
  const [searchKey, setSearchKey] = useState("");
  const [suggestedCity, setSuggestedCity] = useState([] as any);
  const [selectCity, setSelectCity] = useState("");
  const handleChange = (e: any) => {
    // debounce
    setSearchKey(e.target.value);
    setSelectCity(e.target.value);
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
  const test = (e: any) => {
    setSelectCity(e);
    console.log(e);
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
          <SearchOutlinedIcon className="icon" />
        </div>
      </div>
      <div style={{ margin: "10px" }}>
        {suggestedCity.map((city: String) => {
          return (
            <button className="pill" onClick={(e) => test(city)}>
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
    </div>
  );
};
export default SearchBar;
