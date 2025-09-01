// "use client"
// import ImageSlider from "@/components/imageSlider";
import ImageSlider from "@/components/imageSlider";
// ImageSliderClient
import serverFunctionTwo, { serverSideFunction, } from "../../utils/server-utils";
import ImageSliderClient from "../client-route/page";

export default function ImageSliderServer() {
  const result = serverSideFunction()
  const result2 = serverFunctionTwo()
  return (
    <div >
      <h1>{result}</h1>
      <h2>{result2}</h2>
      <ImageSlider />

    </div>
  );
}
