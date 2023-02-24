import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'

const LayoutPublic = () => {

  const navigation = useNavigation()

  return (
    <>
    <div className='bg-gradient-to-b from-emerald-600  to-emerald-900'>
    <header>
        <NavBar/>
    </header>
        <main>
            {
              navigation.state === 'loading' && (
                <div className='text-white font-bold text-center w-2/3 m-auto border-2 my-20'>Loading...</div>
              )
            }
            <Outlet/>
        </main>
    <Footer/>    
    </div>   
    </>
  )
}

export default LayoutPublic