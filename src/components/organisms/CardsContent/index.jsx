import React from "react";
import { Typography } from "../../atoms";
import { Card } from "../../molecules";
import { Articles, List, Chart } from "../../../assets";

const CardContent = ({ card, color }) => {
  const innerContent = (
    <div className="wrapper text-white p-5 flex flex-col justify-between items-start h-full">
      <Typography font="font-rubik" size="text-sm" weight="font-normal">
        My{" "}
        {card === "article"
          ? "Articles"
          : card === "todo"
          ? "ToDo"
          : "Financial Records"}
      </Typography>
      <div className="preview flex justify-start items-end">
        <Typography font="font-rubik" size="text-2xl" weight="font-normal">
          +
        </Typography>
        <Typography font="font-rubik" size="text-4xl" weight="font-normal">
          2000
        </Typography>
        <Typography font="font-rubik" size="text-2xl" weight="font-normal">
          K
        </Typography>
      </div>
      <Typography font="font-rubik" size="text-sm" weight="font-light">
        Last month -{" "}
        {card === "article"
          ? `20 articles`
          : card === "todo"
          ? `10 list`
          : `200K (save)`}
      </Typography>
    </div>
  );
  const outerContent = (
    <div className="wrapper relative">
      <img
        src={card === "article" ? Articles : card === "todo" ? List : Chart}
        alt="icon"
        className="absolute right-0 -top-1"
      />
    </div>
  );

  return (
    <div>
      <Card
        innerContent={innerContent}
        outerContent={outerContent}
        flexDir="flex-col-reverse"
        width="w-[13.5rem]"
        height="h-[17.25rem]"
        innerColor="bg-card-color"
        outerColor={color}
        innerHeight="h-[13rem]"
      />
    </div>
  );
};

export default CardContent;
