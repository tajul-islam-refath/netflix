import React from "react";
import ListSearch from "../../components/list/ListSearch";

const Search = ({ searchTerms, setSearchTerms, searchPlaceHolder }) => {
  return (
    <>
      <ListSearch
        searchTerms={searchTerms}
        setSearchTerms={setSearchTerms}
        searchPlaceHolder={searchPlaceHolder}
      />
    </>
  );
};

export default Search;
