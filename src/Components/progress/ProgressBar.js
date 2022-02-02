import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";

const ProgressBar = ({color, text, value}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-24 h-auto">
        <AnimatedProgressProvider
          valueStart={0}
          valueEnd={value}
          duration={4}
          easingFunction={easeQuadInOut}
          // repeat
        >
          {(value) => {
            const roundedValue = Math.round(value);
            return (
              <CircularProgressbar
                value={value}
                text={`${roundedValue}%`}
                strokeWidth={14}
                styles={buildStyles({ pathTransition: "none", pathColor: `${color}`, textColor: `${color}` })}
              />
            );
          }}
        </AnimatedProgressProvider>
      </div>
      <h1 className="mt-5 text-sm font-bold tracking-widest">{text}</h1>
    </div>

  );
};

export default ProgressBar;
