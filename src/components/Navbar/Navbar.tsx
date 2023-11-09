import { AiFillHome } from 'react-icons/ai'
import { IoFastFood } from 'react-icons/io5'
import { MdModeOfTravel } from 'react-icons/md'
import { FaPhotoFilm } from 'react-icons/fa6'
import logo from '../../assets/logo.png'
export default function Navbar() {
  return (
    <>
        <nav className="p-2 shadow-md flex justify-around bg-yellow-500 text-white items-center">
            <div className="flex gap-4 items-center">
                <a href=""><AiFillHome size="22px" /></a>
                <a href=""><IoFastFood size="22px" /></a>
                <a href=""><MdModeOfTravel size="22px" /></a>
                <a href=""><FaPhotoFilm  size="22px"/></a>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <img src={logo} className='w-10' alt="logo" />
                <h2 className='text-xl font-bold text-white'>AlemaniaTravels</h2>
            </div>
            <div>
                <button className="border p-2 rounded-lg w-36 text-white">Ver mapa</button>
            </div>
        </nav>
    
    </>
  )
}
