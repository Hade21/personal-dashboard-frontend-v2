import { faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Typography } from "../../components";
import Input from "../../components/atoms/Input";

const Login = () => {
  const innerContent = (
    <div className="wrapper text-white px-7 pt-6 pb-10 flex flex-col justify-between text-left h-full">
      <Typography font="font-rubik" size="text-4xl" weight="font-medium">
        Login
      </Typography>
      <form className="w-4/5 mx-auto flex flex-col justify-between h-3/5">
        <div className="inputs flex flex-col gap-7">
          <Input type="text" name="username/email" icon={faUser}>
            Username/Email
          </Input>
          <Input type="password" name="password" icon={faKey}>
            Password
          </Input>
        </div>
        <div className="button w-fit mx-auto">
          <Button
            px="px-6"
            py="py-2"
            bgColor="bg-white"
            textColor="text-profile-color"
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
  const outerContent = (
    <div className="wrapper flex justify-center gap-2 mt-10 text-white italic">
      <Typography font="font-rubik" size="text-base" weight="font-light">
        Don't have account?
      </Typography>
      <Typography font="font-rubik" size="text-base" weight="font-semibold">
        <Link to="/register" className="cursor-pointer not-italic">
          Sign Up
        </Link>
      </Typography>
    </div>
  );

  return (
    <main className="bg-home-color w-screen h-screen">
      <Card
        flexDir="flex-col"
        width="w-1/3"
        height="h-5/6"
        outerColor="bg-card-color"
        innerColor="bg-profile-color"
        innerHeight="h-4/5"
        innerContent={innerContent}
        outerContent={outerContent}
      />
    </main>
  );
};

export default Login;
