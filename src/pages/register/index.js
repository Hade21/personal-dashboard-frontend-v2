import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  setCPassword,
  setEmail,
  setFullname,
  setPassword,
  setUsername,
  validateEmail,
  validateMatch,
  validateName,
  validatePass,
} from "../../app/user/user";
import { Card, Typography, Input, Button } from "../../components";

const Register = () => {
  const dispatch = useDispatch();
  const fullname = useSelector((state) => state.user.fullname);
  const username = useSelector((state) => state.user.username);
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const cPassword = useSelector((state) => state.user.cPassword);
  const validName = useSelector((state) => state.user.validName);
  const validEmail = useSelector((state) => state.user.validEmail);
  const validPass = useSelector((state) => state.user.validPass);
  const validMatch = useSelector((state) => state.user.validMatch);

  useEffect(() => {
    dispatch(validateName(username));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  useEffect(() => {
    dispatch(validateEmail(email));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email]);

  useEffect(() => {
    dispatch(validatePass(password));
    dispatch(validateMatch());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [password, cPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const innerContent = (
    <div className="wrapper text-white px-7 pt-6 pb-10 flex flex-col justify-between text-left h-full">
      <Typography font="font-rubik" size="text-4xl" weight="font-medium">
        Register
      </Typography>
      <form
        className="w-4/5 mx-auto flex flex-col justify-between gap-6"
        onSubmit={handleSubmit}
      >
        <div className="inputs flex flex-col gap-7">
          <Input
            type="text"
            name="fullname"
            value={fullname}
            onChange={(e) => dispatch(setFullname(e.target.value))}
          >
            Fullname
          </Input>
          <Input
            type="text"
            name="username"
            value={username}
            onChange={(e) => dispatch(setUsername(e.target.value))}
          >
            Username
          </Input>
          <Input
            type="text"
            name="email"
            value={email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
          >
            Email
          </Input>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={(e) => dispatch(setPassword(e.target.value))}
          >
            Password
          </Input>
          <Input
            type="password"
            name="confirm-password"
            value={cPassword}
            onChange={(e) => dispatch(setCPassword(e.target.value))}
          >
            Confirm Password
          </Input>
        </div>
        <div className="button w-full text-center text-profile-color">
          <Button
            type="submit"
            px="px-6"
            py="py-2"
            bgColor={
              !validEmail || !validName || !validMatch
                ? "bg-slate-400"
                : "bg-white"
            }
            disable={
              validEmail && validName && validPass && validMatch ? false : true
            }
          >
            Register
          </Button>
        </div>
      </form>
    </div>
  );
  const outerContent = (
    <div className="wrapper text-white flex justify-center gap-2 mt-10 w-full italic">
      <Typography font="font-rubik" size="text-base" weight="font-light">
        Already have account?
      </Typography>
      <Typography font="font-rubik" size="text-base" weight="font-semibold">
        <Link to="/login" className="not-italic">
          Sign In
        </Link>
      </Typography>
    </div>
  );

  return (
    <main className="w-screen h-screen bg-home-color flex justify-center items-center">
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

export default Register;
