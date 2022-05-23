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
      <img src={img} alt="profile" className="w-[4.5rem] rounded-full mb-12" />
      <Typography font="font-rubik" weight="font-normal" size="text-base">
        Hello!
      </Typography>
      <Typography font="font-rubik" weight="font-medium" size="text-4xl">
        Guest
      </Typography>
    </div>
  );
  const outerContent = (
    <div className="wrapper flex flex-col gap-2 p-7 items-start">
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
      width="w-[14.75rem]"
      height="h-[26rem]"
      innerHeight="h-[18.125rem]"
      flexDir="flex-col"
    />
  );
};

export default Profile;
