import { useState } from "react";
import { data_images } from "./Data";

export default function CustomHook() {

  const [index, setIndex] = useState(0);

  /* CustomHooks */

   const prevSlide = () => {
    const FirstSlide = index === 0;
    const newIndex = FirstSlide ? data_images.length - 1 : index - 1;
    setIndex(newIndex);
  };

   const nextSlide = () => {
    const LastSlide = index === data_images.length - 1;
    const newIndex = LastSlide ? 0 : index + 1;
    setIndex(newIndex);
  };
  return {prevSlide,   nextSlide, index , data_images, setIndex  }
}
