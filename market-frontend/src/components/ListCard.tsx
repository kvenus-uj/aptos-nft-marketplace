import Image from "next/image";
import React from "react";
import { Token } from "../types";

type CardProps = { key: string; data: Token; onClick: any };
export function ListCard({ data: token, onClick }: CardProps) {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <Image
        className="bg-neutral-200"
        src={token.uri}
        height={500}
        width={500}
        objectFit="cover"
        alt="picture"
      />
      <div className="card-body">
        <h2 className="card-title">{token.name}</h2>
        <p>{token.description}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={onClick}
            style={{ minWidth: "6rem" }}
          >
            {"List"}
          </button>
        </div>
      </div>
    </div>
  );
}
