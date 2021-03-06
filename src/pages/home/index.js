import React from "react";
import { CardContent, Profile, Typography } from "../../components";

const Home = () => {
  return (
    <main className="bg-home-color w-screen h-screen">
      <div className="content h-full flex items-center gap-4 justify-center">
        <Profile />
        <div className="cards-wrapper text-white flex flex-col justify-between gap-14">
          <div className="title lg:w-4/5 lg:mx-auto xl:mx-1">
            <Typography
              font="font-rubik"
              size="lg:text-4xl xl:text-5xl"
              weight="font-semibold"
            >
              Welcome to Your Personal Dashboard
            </Typography>
          </div>
          <div className="cards flex gap-4">
            <CardContent card="finance" color="bg-finance-color" />
            <CardContent card="notes" color="bg-todo-color" />
            <CardContent card="article" color="bg-article-color" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
