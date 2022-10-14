import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import SearchBar from "./component/SearchBar";
import WeatherDetails from "./component/WeatherDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchBar />} />
          <Route path="/details" element={<WeatherDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
