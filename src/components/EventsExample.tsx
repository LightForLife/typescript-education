import React, { FC, useState, useRef } from "react";

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>("");
  const [isDrag, setDrag] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(` Управляемый ${value}`);
    console.log(` НЕуправляемый ${inputRef.current?.value}`);
  };

  const dragHandler = (event: React.DragEvent<HTMLDivElement>) => {
    console.log("Drag");
  };

  const dragWithPreventHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDrag(true);
  };

  const leaveHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDrag(false);
  };

  const dropHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDrag(false);
    console.log("Drag");
  };

  return (
    <div>
      <input
        style={{ marginTop: 20 }}
        value={value}
        onChange={changeHandler}
        type="text"
        placeholder="Управляемый"
      />
      <input
        style={{ marginTop: 20 }}
        ref={inputRef}
        type="text"
        placeholder="Неуправляемый"
      />
      <button style={{ marginLeft: 20 }} onClick={clickHandler}>
        Test
      </button>
      <div
        onDrag={dragHandler}
        draggable
        style={{ width: 200, height: 200, background: "red", marginTop: 20 }}
      ></div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWithPreventHandler}
        style={{
          width: 200,
          height: 200,
          background: isDrag ? "blue" : "red",
          marginTop: 20,
        }}
      ></div>
    </div>
  );
};

export default EventsExample;
