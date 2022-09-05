import React from 'react'
import "./index.css"
import error404 from "./assets/error404.png"

const App = () => {

    return (
    
            <div className='flex flex-col-reverse items-center justify-evenly min-h-screen max-w-[1440px] mx-auto bg-no-repeat sm:my-8 lg:px-8 lg:bg-left-top lg:flex-row lg:items-center lg:justify-evenly'>
                <div className='flex flex-col items-center lg:items-start '>
                    <h1 className='text-4xl md:text-6xl font-bold'>Whooops!</h1>
                    <p className='text-center px-4 md:text-lg mt-4 md:px-0'>Desculpe, a página que você está procurando não existe.</p>
                    <button className='bg-red-500 text-white block py-3 px-5 w-max rounded-full mt-12'>Voltar</button>
                </div>
                <img src={error404} alt="illustration with 404 error" className="w-full lg:w-3/6" />
            </div>
    )
}

export default App;