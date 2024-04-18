import React from "react";


const Canvas = () => {

    return (
    <>
      <div className="flex items-center w-2/4 h-screen justify-center bg-zinc-300">
        <canvas
          height="1080"
          width="1080"
          style={{ height: 400, width: 400, backgroundColor: "white" }}
        ></canvas>
      </div>
    </>
  );
};

export default Canvas;
