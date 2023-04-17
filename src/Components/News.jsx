import React, { useState } from "react";
import classNames from "classnames";

function News() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  const switchClasses = classNames(
    "relative inline-block w-10 h-6 rounded-full",
    isOn ? "bg-gray-300" : "bg-black"
  );

  const circleClasses = classNames(
    "absolute left-0 top-0 w-6 h-6 rounded-full",
    isOn ? "bg-white transform translate-x-full" : "bg-gray-400"
  );

  return (
    <div className={`${isOn? 'bg-black h-screen overflow-hidden':'bg-white h-screen overflow-hidden'}`}>
      <div className="mt-2 mr-2 flex justify-end">
        <div
          role="button"
          tabIndex="0"
          className={switchClasses}
          onClick={handleToggle}
          onKeyDown={(e) => e.key === "Enter" && handleToggle()}
        >
          <span className={circleClasses}></span>
        </div>
      </div>
    </div>
  );
}

export default News;
