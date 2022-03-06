import React, { FC, useState } from "react";

type Props = {};

const ExentExemple: FC = (props: Props) => {
  const [value, setValue] = useState<string>("");
  const [isDrag, setisDrag] = useState<boolean>(false);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(value);
  };

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("darg");
  };
  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setisDrag(false);
    console.log("dropHandler");
  };
  const leaveDragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setisDrag(false);
    console.log("leaveDragHandler");
  };
  const DragOverDragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setisDrag(true);
    console.log("DragOverDragHandler");
  };

  return (
    <div>
      <input value={value} onChange={changeHandler} />
      <button onClick={clickHandler}>value</button>
      <div
        style={{ width: 200, height: 200, margin: 10, background: "red" }}
        onDrag={dragHandler}
      ></div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaveDragHandler}
        onDragOver={DragOverDragHandler}
        style={{
          width: 200,
          height: 200,
          margin: 10,
          background: isDrag ? "red" : "blue",
        }}
      ></div>
    </div>
  );
};
export default ExentExemple;
