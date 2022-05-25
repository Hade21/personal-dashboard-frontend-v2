import { faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  reset,
  setEmail,
  setPassword,
  setUsername,
  validateEmail,
  validateName,
  validatePass,
} from "../../app/user/user";
import { Button, Card, Typography, Input } from "../../components";

const Login = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.username);
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const validEmail = useSelector((state) => state.user.validEmail);
  const validUsername = useSelector((state) => state.user.validName);

  const changeEmailOrUser = (e) => {
    dispatch(validateName(e.target.value));
    dispatch(validateEmail(e.target.value));
    if (validUsername) {
      dispatch(setUsername(e.target.value));
      console.log(validUsername);
      console.log(username);
      return;
    } else if (validEmail) {
      dispatch(setEmail(e.target.value));
      console.log(validEmail);
      console.log(email);
      return;
    }
  };

  useEffect(() => {
    dispatch(validatePass(password));
    console.log(password);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(username);
    console.log(password);
  };

  const innerContent = (
    <div className="wrapper text-white px-7 pt-6 pb-10 flex flex-col justify-between text-left h-full">
      <Typography font="font-rubik" size="text-4xl" weight="font-medium">
        Login
      </Typography>
      <form
        className="w-4/5 mx-auto flex flex-col justify-between h-3/5"
        onSubmit={handleSubmit}
      >
        <div className="inputs flex flex-col gap-7">
          <Input
            type="text"
            name="username/email"
            icon={faUser}
            onChange={changeEmailOrUser}
          >
            Username/Email
          </Input>
          <Input
            type="password"
            name="password"
            icon={faKey}
            onChange={(e) => dispatch(setPassword(e.target.value))}
          >
            Password
          </Input>
        </div>
        <div className="button w-fit mx-auto">
          <Button
            px="px-6"
            py="py-2"
            bgColor={
              (username && password) || (email && password)
                ? "bg-white"
                : "bg-slate-400"
            }
            textColor="text-profile-color"
            disable={
              (username && password) || (email && password) ? false : true
            }
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
    <main className="bg-home-color w-screen h-screen flex justify-center items-center">
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
