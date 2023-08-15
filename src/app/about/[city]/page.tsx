import React from "react";

export default function City({ params }: { params: { city: string } }) {
  return <h1>这是一个动态的城市名称{params.city}</h1>;
}
