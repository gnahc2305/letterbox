import React from "react";
import Image from "next/image";

interface QueryCardProps {
  title: string;
  img: string;
  type: string;
}

const QueryCard: React.FC<QueryCardProps> = ({ title, img, type }) => {
    console.log(img);
  return (
    <div className="flex mx-10 my-16">
      <div>
        <Image src={img} height={100} width={100} alt={title} />
      </div>

      <div className="text-2xl">
        <p>{title}</p>
        <p>{type}</p>
      </div>
    </div>
  );
};

export default QueryCard;
