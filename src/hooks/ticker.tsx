/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
interface Props {
  className?: any;
  start?: any;
  ref?: any;
  end?: any;
}

const Ticker = ({ className, end, start }: Props) => {
  const [viewPortEntered, setViewPortEntered] = useState<any>(false);

  return (
    <CountUp end={end} start={viewPortEntered ? start : (0 as any)}>
      {({ countUpRef }) => {
        return (
          <VisibilitySensor
            active={!viewPortEntered}
            onChange={(isVisible: any) => {
              if (isVisible) {
                setViewPortEntered(true);
              }
            }}
            delayedCall
          >
            <h4 className={className} ref={countUpRef as any} />
          </VisibilitySensor>
        );
      }}
    </CountUp>
  );
};

export default Ticker;
