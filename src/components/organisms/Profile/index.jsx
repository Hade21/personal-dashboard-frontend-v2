import React from "react";
import Card from "../../molecules/Card";
import { Avatar } from "../../../assets";
import { Button, Typography } from "../../atoms";
import { useNavigate } from "react-router-dom";

const Profile = (props) => {
  const navigate = useNavigate();
  const { img = Avatar } = props;

  const toLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  const toRegister = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  const innerContent = (
    <div className="wrapper text-white p-7 text-left">
      <img
        src={img}
        alt="profile"
        className="lg:w-[4.5rem] xl:w-[5rem] rounded-full mb-12"
      />
      <Typography
        font="font-rubik"
        weight="font-normal"
        size="lg:text-base xl:text-lg"
      >
        Hello!
      </Typography>
      <Typography
        font="font-rubik"
        weight="font-medium"
        size="lg:text-4xl xl:text-5xl"
      >
        Guest
      </Typography>
    </div>
  );
  const outerContent = (
    <div className="wrapper flex flex-col gap-2 p-7 items-start text-white">
      <Button type="button" onClick={toLogin}>
        Login
      </Button>
      <Button type="button" onClick={toRegister}>
        Register
      </Button>
    </div>
  );

  return (
    <Card
      innerContent={innerContent}
      outerContent={outerContent}
      innerColor="bg-profile-color"
      outerColor="bg-card-color"
      width="lg:w-[14.75rem] xl:w-[15.50rem]"
      height="lg:h-[26rem] xl:h-[28.5rem]"
      innerHeight="lg:h-[18.125rem] xl:h-[19.125rem]"
      flexDir="flex-col"
    />
  );
};

export default Profile;
