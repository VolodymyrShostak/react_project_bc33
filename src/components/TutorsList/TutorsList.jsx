import React, { Component } from "react";
import data from "../../utils/data.json";
import EditField from "../EditField/EditField";
import { nanoid } from "nanoid";
import Tutors from "../Tutors/Tutors";
import Paper from "../Paper/Paper";

export default class Edit extends Component {
  render() {
    const { tutors } = data;
    return (
      <ul>
        {tutors.map(
          ({
            firstName,
            lastName,
            patronymic,
            phone,
            email,
            city,
            options,
          }) => {
            return (
              <li key={email}>
                <Paper>
                  <Tutors
                    firstName={firstName}
                    lastName={lastName}
                    patronymic={patronymic}
                    phone={phone}
                    email={email}
                    city={city}
                    options={options}
                  />
                </Paper>
              </li>
            );
          }
        )}
      </ul>
    );
  }
}
