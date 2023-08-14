import React from "react";

export default function Province({ params }: { params: { province: string } }) {
  return <h1>这是一个动态的省会名称{params.province}</h1>;
}
