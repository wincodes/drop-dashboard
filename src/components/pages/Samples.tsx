import * as React from "react";

interface _dt {
  svg: string;
}

export default ({ svg }: _dt) => {
  return (
    <div className="col-span-1 py-3">
      <div dangerouslySetInnerHTML={{ __html: svg }} />
    </div>
  );
};
