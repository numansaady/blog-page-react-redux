import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import searchImg from "../assets/search.svg";
import { filteredResult } from "../redux/filters/actions";

const Searchbar = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  const filterBySearchHandler = (text) => {
    dispatch(filteredResult("searchText", text));
  };
  const searchRef = useRef(null);

  const { searchText } = useSelector((state) => state.filters);

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      filterBySearchHandler(searchValue);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [searchValue]);

  useEffect(() => {
    !searchText && setSearchValue(searchText);
  }, [searchText]);
  
  return (
    <div className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200">
      <input
        className="outline-none border-none bg-gray-50 h-full w-full mr-2"
        type="search"
        name="search"
        placeholder="Search"
        value={searchValue}
        ref={searchRef}
        onChange={({ target: { value } }) => {
          setSearchValue(value);
        }}
      />
      <img className="inline h-6 cursor-pointer" src={searchImg} alt="Search" />
    </div>
  );
};

export default Searchbar;
