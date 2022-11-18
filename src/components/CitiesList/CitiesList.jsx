import React from "react";
import { nanoid } from "nanoid";
import EditField from "../EditField/EditField";
import data from "../../utils/data.json";
import { CitiesListWrapper } from "./CitiesList.styled.js";

const CitiesList = () => {
  const { cities } = data;
  return (
    <CitiesListWrapper>
      <ul>
        {cities.map((el) => {
          return <EditField key={nanoid()} title={el} />;
        })}
      </ul>
    </CitiesListWrapper>
  );
};

export default CitiesList;
