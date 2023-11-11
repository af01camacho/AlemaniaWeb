import { AiFillHome } from 'react-icons/ai'
import { IoFastFood } from 'react-icons/io5'
import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <>
        <nav className="p-2 shadow-md flex justify-around bg-yellow-500 text-white items-center">
            <div className="flex gap-4 items-center">
                <Link to="/"><AiFillHome size="22px" /></Link>
                <a href="/food"><IoFastFood size="22px" /></a>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <img src={logo} className='w-10' alt="logo" />
                <h2 className='text-xl font-bold text-white'>AlemaniaTravels</h2>
            </div>
            <div>
                <a href="https://maps.app.goo.gl/KFU24NDZwPbbWfyg7">
                <button className="border p-2 rounded-lg w-36 text-white">Ver ubicación</button>
                </a>
            </div>
        </nav>
    
    </>
  )
}
