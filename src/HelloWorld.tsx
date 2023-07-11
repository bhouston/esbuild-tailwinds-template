import React from "react";

interface HelloWorldProps {
  name: string;
}

const HelloWorld: React.FC<HelloWorldProps> = ({ name }) => (
  <h1 className="text-2xl text-blue-700">Hello, {name}!</h1>
);

export default HelloWorld;
