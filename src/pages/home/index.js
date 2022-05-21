import React from "react";
import { Profile } from "../../components";

const Home = () => {
  return (
    <main className="bg-home-color w-screen h-screen flex items-center justify-center">
      <div className="content">
        <Profile />
      </div>
    </main>
  );
};

export default Home;
