import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
        <nav className=' p-2 border-b-2 mb-1 flex justify-around items-center'>
        <NavLink className='text-white text-2xl font-bold' to='/'>Titulo</NavLink>
            <div className='flex justify-between gap-10 text-white font-semibold'>
                <NavLink className='border-2 px-1 shadow-md shadow-black rounded-lg hover:bg-emerald-700 hover:shadow ' to='/'>Home</NavLink>
                <NavLink className='border-2 px-2 shadow-md shadow-black rounded-lg hover:bg-emerald-700 hover:shadow ' to='/about'>About</NavLink>
                <NavLink className='border-2 px-2 shadow-md shadow-black rounded-lg hover:bg-emerald-700 hover:shadow ' to='/blog'>Blog</NavLink>
            </div>
        </nav>
    </>
  )
}

export default NavBar