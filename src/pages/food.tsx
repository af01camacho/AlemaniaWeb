import Navbar from "../components/Navbar/Navbar"
import {Foods} from "../array/food.js"
import Carrousel from "../components/Carrousel/Carrousel.js"

const Food = () => {
  return (
    <>
        <Navbar />
        <Carrousel />
        <section className="pt-4 pb-8 px-6 bg-gray-100 dark:bg-primary-color-dm dark:text-white">
      <div className="flex items-center justify-center gap-2 mb-6 mt-2">
        <h1 className="dark:text-white text-gray-900 text-4xl font-extrabold leading-[54px]">
          Comidas tipicas
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Foods.map((food, index) => (
          <div
            key={index}
            className="flex flex-col dark:bg-gray-700  bg-white items-center h-[290px] p-4 shadow-lg rounded-lg"
          >
            <img src={food.img} className="w-36 rounded-full pb-2">
            </img>
            <h2 className="dark:text-white text-gray-900 text-lg font-semibold leading-snug mb-2">
              {food.title}
            </h2>
            <p className="dark:text-white text-gray-500 text-base font-normal leading-normal text-center">
              {food.info}
            </p>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}

export default Food