import React from 'react';
import { useSelector } from 'react-redux';

function Greeting() {
  const greeting = useSelector((state) => state.greeting);
  return <div>{greeting}</div>;
}

export default Greeting;
