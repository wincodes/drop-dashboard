import * as React from "react";
import { useRef, useState } from "react";
import { useDrag } from "react-dnd";

interface _dt {
  svg: string;
  chart: string;
  backgroundColor1: string;
  backgroundColor2: string;
  data: object;
}

interface obj {
  svgL: _dt;
}

export default ({
  svgL: { svg, chart, backgroundColor1, backgroundColor2 , data},
}: obj) => {
  const ref = useRef(null);
  const [{ isDragging }, drag] = useDrag({
    type: "div",
    item: { type: "div", chart, backgroundColor1, backgroundColor2, data },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  drag(ref);

  return (
    <div
      className="cursor-pointer col-span-1 py-3"
      style={{ opacity }}
      ref={ref}
    >
      <div dangerouslySetInnerHTML={{ __html: svg }} />
    </div>
  );
};
