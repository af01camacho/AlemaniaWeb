import CustomHook from "./CustomHook";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { RxDotFilled } from "react-icons/rx";
export default function Carrousel() {
  const { index, prevSlide, nextSlide, data_images, setIndex } = CustomHook();

  const nextSlider = (slideIndex) => {
    setIndex(slideIndex);
  };
  return (
    <>
      <div className="max-w-[1400px] h-[550px] px-4 py-4 relative">
        <div
          style={{ backgroundImage: `url(${data_images[index].url})` }}
          className="w-full h-full rounded-md bg-center bg-cover duration-500"
        >
          <button
            className="absolute top-[50%] bg-opacity-40 bg-blur bg-white rounded-lg p-2  right-[calc(100%-55px)] text-white"
            onClick={prevSlide}
          >
            {" "}
            <IoIosArrowBack color="black" />{" "}
          </button>
          <button
            className="absolute top-[50%] bg-opacity-40 bg-blur bg-white rounded-lg p-2 left-[calc(100%-55px)] text-white"
            onClick={nextSlide}
          >
            {" "}
            <IoIosArrowForward color="black" />{" "}
          </button>
        </div>
        <div className="flex absolute left-[calc(50%-25px)]">
          {data_images.map((slide, slideIndex) => (
            <div
              onClick={() => nextSlider(slideIndex)}
              className="cursor-pointer"
              key={slideIndex}
            >
              <div className="">
                <RxDotFilled />
        
              </div>
            </div>
          ))}
        </div>
      </div>
      {
        
      }
    </>
  );
}
