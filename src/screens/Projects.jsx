import { motion } from 'framer-motion';

//Imagenes
import ImagenGymJazar from '../assets/LogoGymJazar.png';
import ImagenLaundryHome from '../assets/LogoLaundryHome.png';
import ImagenCryptomonedas from '../assets/cryptomonedas.png';
import ImagenMern from '../assets/mern.png';
import ImagenMoviesAPI from '../assets/logo.png';
import ImagenCitas from '../assets/citas.png';
import ImagenDoIt from '../assets/doit.png';
import Project from '../components/Project';

const projectsArray = [
  {
    imageName: ImagenGymJazar,
    imageAlt: 'Logo Gym Jazar',
    title: 'Gym&Fitness Jazar',
    description: 'Página para un gimnasio ubicado en la ciudad de Aguascalientes',
    href: 'https://confident-brahmagupta-19a4b3.netlify.app/'
  },
  {
    imageName: ImagenLaundryHome,
    imageAlt: 'Imagen LaundryHome',
    title: 'LaundryHome',
    description: 'Página para una lavandería en la ciudad de Aguascalientes',
    href: 'https://elastic-aryabhata-f6e1e8.netlify.app/'
  },
  {
    imageName: ImagenCryptomonedas,
    imageAlt: 'Imagen Crypto',
    title: 'Cotizador de cryptomonedas',
    description: 'Proyecto consumiendo una API de información de cryptos con ReactJS',
    href: 'https://brave-shaw-fc3b4d.netlify.app/'
  },
  {
    imageName: ImagenMern,
    imageAlt: 'Logo MERN',
    title: 'Administrador de usuarios',
    description: 'Mini Proyecto Full Stack con Mongo, Express, Node.js y ReactJS',
    href: 'https://infallible-hodgkin-932712.netlify.app/'
  },
  {
    imageName: ImagenMoviesAPI,
    imageAlt: 'Imagen MoviesAPI',
    title: 'Movies API',
    description: 'Proyecto consumiendo una API de información de peliculas con ReactJS',
    href: 'https://focused-goldstine-cdbd3e.netlify.app/'
  },
  {
    imageName: ImagenCitas,
    imageAlt: 'Imagen Citas',
    title: 'Administrador de pacientes',
    description: 'Proyecto pequeño administrador de pacientes con ReactJS',
    href: 'https://brave-visvesvaraya-1ce9b4.netlify.app/'
  },
  {
    imageName: ImagenDoIt,
    imageAlt: 'Imagen Do it',
    title: 'Do It!',
    description: 'To Do Manager made with Mongo, Express, ReactJS and Node.js ',
    href: 'https://ornate-mandazi-663ed7.netlify.app/'
  },
]

const container = {
  hidden: {
      opacity: 0,
  },
  show: {
      opacity: 1,
      transition: {
          delayChildren: 0.5,
          staggerChildren: 0.2,
          duration: 2
      }
  }
}
const item = {
  hidden: {
      opacity: 0,
  },
  show: {
      opacity: 1,
      transition: {
          duration: 0.75
      }
  }
}

const Projects = () => {
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
            className="absolute top-0 left-0"
        > 
      
        <div className='flex text-white'>
          <main className='w-5/8 w-screen h-auto mb-10 bg-black flex flex-col items-center'>
            <motion.div 
              className='md:w-1/4 pt-5'
              initial={{y: -100}}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 100 , delay: 0.5,}}
            >
              <h1 className='text-2xl text-center p-2 font-bold border-cyan-400 border-2 uppercase'>Portfolio</h1> 
            </motion.div> 
            <div 
              className='w-3/5 mt-8'
            >
                <motion.div 
                  className='grid md:grid-cols-3 gap-8'
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  {projectsArray.map(project => (
                    <motion.div
                      variants={item}
                      key={project.href}
                    >
                      <Project  project={project}/>
                    </motion.div>
                  ))}
                </motion.div>
            </div>
            
          </main>
        </div>
    </motion.div>
  )
}

export default Projects