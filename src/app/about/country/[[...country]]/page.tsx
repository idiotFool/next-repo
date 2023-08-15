import React from "react";

export default function Country({ params }: { params: { Country: string } }) {
  return <h1>这是一个动态的省会名称{params.Country}</h1>;
}
