import React from "react";
import phone from "../../assets/phone.svg";
import email from "../../assets/email.svg";
import geo from "../../assets/geo.svg";
import {
  TutorsWrapper,
  LinkWrapper,
  ImageWrapper,
  DataWraper,
} from "./Tutors.styled";

const Tutors = () => {
  return (
    <TutorsWrapper>
      <div>
        <div>Руденко</div>
        <div>Марія</div>
        <div>Олександрівна</div>
      </div>
      <div>
        <DataWraper>
          <ImageWrapper src={phone} alt="" />
          <LinkWrapper href="tel:+380993457809">+38 (099) 345 7809</LinkWrapper>
        </DataWraper>
        <div>
          <ImageWrapper src={email} alt="" />
          <LinkWrapper href="mailto:rudenko@gmail.com">
            rudenko@gmail.com
          </LinkWrapper>
        </div>
        <div>
          <ImageWrapper src={geo} alt="" />
          <span>Полтава</span>
        </div>
      </div>
      <div>
        Создание групп, создание стран, редактировани профилей преподавателей
      </div>
    </TutorsWrapper>
  );
};

export default Tutors;
