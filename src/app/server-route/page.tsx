// import ImageSlider from "@/components/imageSlider";
import ImageSlider from "@/components/imageSlider";

export default function ImageSliderServer() {
  return (
    <div className="slider mt-5">
      <h1 className="text-center mb-4 text-[1rem]">SERVER PAGE</h1>

      <div className="slider-box">
        <h1 className='text-[2rem] text-center'>slider component</h1>
        <ImageSlider />
      </div>
    </div>
  );
}
