import React from "react";
import { Typography } from "../../atoms";
import { Card } from "../../molecules";
import { Articles, List, Chart } from "../../../assets";

const CardContent = ({ card, color }) => {
  const innerContent = (
    <div className="wrapper text-white p-5 flex flex-col justify-between items-start h-full">
      <Typography
        font="font-rubik"
        size="lg:text-sm xl:text-base"
        weight="font-normal"
      >
        My{" "}
        {card === "article"
          ? "Articles"
          : card === "notes"
          ? "Notes"
          : "Financial Records"}
      </Typography>
      <div className="preview flex justify-start items-end">
        <Typography
          font="font-rubik"
          size="lg:text-2xl xl:text-3xl"
          weight="font-normal"
        >
          {card === "finance" ? "+" : ""}
        </Typography>
        <Typography
          font="font-rubik"
          size="lg:text-4xl xl:text-5xl"
          weight="font-normal"
        >
          2000
        </Typography>
        <Typography
          font="font-rubik"
          size="lg:text-2xl xl:text-3xl"
          weight="font-normal"
        >
          {card === "finance" ? "K" : card === "notes" ? "notes" : "articles"}
        </Typography>
      </div>
      <Typography
        font="font-rubik"
        size="lg:text-sm xl:text-base"
        weight="font-light"
      >
        {card === "finance" ? `Last month +200k` : ""}
      </Typography>
    </div>
  );

  const outerContent = (
    <div className="wrapper relative h-max">
      <img
        src={card === "article" ? Articles : card === "notes" ? List : Chart}
        alt="icon"
        className="absolute right-0 -top-3"
      />
    </div>
  );

  return (
    <div>
      <Card
        innerContent={innerContent}
        outerContent={outerContent}
        flexDir="flex-col-reverse"
        width="lg:w-[13.5rem] xl:w-[14.25rem]"
        height="lg:h-[17.25rem] xl:h-[19.25rem]"
        innerColor="bg-card-color"
        outerColor={color}
        innerHeight="lg:h-[13rem] xl:h-[14rem ]"
      />
    </div>
  );
};

export default CardContent;
