import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { DrawerDemo } from "./drawer";

interface QueryCardProps {
  title: string;
  img: string;
  type: string;
  id: string;
}

const QueryCard: React.FC<QueryCardProps> = ({ title, img, type, id }) => {
  return (
    <div className="flex mx-10 my-16">
      <div>
        <Image src={img} height={100} width={100} alt={title} />
      </div>

      <div className="text-2xl">
        <p>{title}</p>
        <p>{type}</p>
        <p>{id}</p>
        <DrawerDemo title={title} />
      </div>
    </div>
  );
};

export default QueryCard;
