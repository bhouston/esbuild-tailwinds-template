import React from "react";

interface HelloWorldProps {
  name: string;
}

const HelloWorld: React.FC<HelloWorldProps> = ({ name }) => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
    <h1 className="text-6xl text-blue-700 mb-6">Hello, {name}!</h1>
    <p className="text-xl text-blue-600">
      Welcome to our Tailwind CSS + React app!
    </p>
  </div>
);

export default HelloWorld;
