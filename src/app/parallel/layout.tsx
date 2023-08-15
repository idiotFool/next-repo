import React from "react";

export default function ParallelLayout({
  children,
  cats,
  dogs,
  auth,
}: {
  children: React.ReactNode;
  dogs: React.ReactNode;
  cats: React.ReactNode;
  auth: React.ReactNode;
  }) {
  console.log(auth, '======')
  return (
    <div className="parallelWrapper">
      {dogs}
      <hr />
      {children}
      <hr />
      {cats}
      <hr />
      {auth}
    </div>
  );
}
