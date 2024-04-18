import { CiImageOn } from "react-icons/ci";
import Canvas from "./Canvas";

const Editor = () => {
 
  return (
    <>
      <div className="flex flex-row">
        <Canvas  />
        <div className="flex flex-col items-center w-3/4 h-screen justify-center">
          <p className="font-bold text-xl">Ad customization</p>
          <p className="text-xs text-gray-500">
            Customise your ad and get the templates accordingly
          </p>
          <div className="border flex flex-row items-center w-4/5 h-10 rounded-lg p-2 mt-6">
            <CiImageOn className="h-8 w-8" />
            <p className="text-sm text-gray-400 ml-2">
              Change the ad creative image.
            </p>
            <label
              htmlFor="file-input"
              className="text-sm ml-1 text-blue-600 underline hover:cursor-pointer"
            >
              <a>select file</a>
            </label>
            <input
              id="file-input"
              type="file"
              style={{ display: "none" }}
              
            ></input>
          </div>
          <div className="flex flex-row w-4/5 items-center justify-center mt-4">
            <div className="border h-0 w-80 mr-2" />
            <p className="text-sm text-gray-400">Edit contents</p>
            <div className="border h-0 w-80 ml-2"></div>
          </div>
          <div className="flex flex-col border rounded-xl w-4/5 my-2 p-2 px-4">
            <p className="text-xs text-gray-400">Ad Content</p>
            <input
              type="text"
              className="border-none focus:border-none focus:outline-none"
              
            ></input>
          </div>
          <div className="flex flex-col border rounded-xl w-4/5 my-2 p-2 px-4">
            <p className="text-xs text-gray-400">CTA</p>
            <input
              type="text"
              className="border-none focus:border-none focus:outline-none"
              
            ></input>
          </div>
          <div className="flex flex-col w-4/5">
            <p className="text-sm text-gray-400">Choose your color</p>
            <div className="flex flex-row">
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editor;