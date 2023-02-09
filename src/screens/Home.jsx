import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Typed from 'typed.js';

import Img from '../assets/ImagenPerfil.jpg'

function Home() {
  
  const el = useRef(null);
	const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'Emmanuel',
        'FRONT-END DEV',
        'BACK-END DEV'
      ],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true
    };
    
    typed.current = new Typed(el.current, options);
    
    return () => {
      typed.current.destroy();
    }
  }, [])

  return (
    <motion.div
      initial={{
          y: "-100%"
      }}
      animate={{y: "0%"}}
      exit={{
          opacity: 1
      }}
      transition={{duration: 1, ease: "easeOut"}}
      className="absolute top-0 left-0 overflow-hidden"
    > 
      <div className='bg-black mt-20 mb-0 md:my-0 md:flex justify-between text-white'>
        {/* Content */}
        <div className='md:w-4/6 flex justify-center items-center'>
          <div className='w-3/4'>

            <h1 className='text-xl md:text-5xl font-bold uppercase'>Hello There!</h1>
            <h2 className='text-2xl md:text-7xl uppercase font-bold'>I'm <span className='text-cyan-400' ref={el}></span></h2>

            <motion.div 
              className='bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-500 rounded p-2 md:py-2 md:px-4 mt-5 w-fit'
              initial={{opacity: 0}}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 2 , delay: 1.2,}}
            >
              <p className='text-xs md:text-lg font-bold'>Software Engineer</p>
            </motion.div>

            <p className='mt-8 text-sm'>
            I have a strong understanding of modern web development technologies and have delivered several successful web applications. My passion lies in using technology to create user-friendly and scalable solutions. 
            </p>

            <motion.div 
              initial={{y: 1000}}
              animate={{ y: 0 }}
              transition={{ ease: "easeOut", duration: 1.5 , delay: 2.5}}
            >
              <Link to={'/about'}>
                <button className='mt-10 p-2 md:p-4 text-black font-bold text-xs md:text-md transition ease-in-out delay-150 bg-cyan-400 border-2 border-transparent rounded-xl hover:bg-black hover:border-cyan-400 hover:border-2 hover:text-cyan-400 hover:-translate-y-1 hover:scale-110 duration-300'>
                  More About Me
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
        <motion.div 
          className='w-full md:w-2/6 mt-10 md:mt-0 flex justify-center'
          initial={{x: 500}}
          animate={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 1.5 , delay: 0.75,}}
        >
          <img className='object-cover h-full md:h-screen rounded-lg md:rounded-none' src={Img} alt=""/>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Home
