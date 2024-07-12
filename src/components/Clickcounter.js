import React, { useState } from 'react';

const ClickCounter = () => {
  // State to track number of clicks
  const [count, setCount] = useState(0);

  // Click event handler
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <p>Button clicked {count} times</p>
    </div>
  );
};

export default ClickCounter;
