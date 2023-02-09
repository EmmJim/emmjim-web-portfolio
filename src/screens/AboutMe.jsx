import { motion } from 'framer-motion';
import AboutImg from '../assets/About.jpeg';

const AboutMe = () => {
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
                        <h1 className='text-2xl text-center p-2 font-bold border-cyan-400 border-2 uppercase'>About Me</h1> 
                    </motion.div>
                    <motion.div 
                        className='w-5/6 md:w-3/5 mt-20 space-y-5'
                        initial={{opacity: 0}}
                        animate={{ opacity: 1 }}
                        transition={{ ease: "easeOut", duration: 2 , delay: 0.75,}}
                    >
                        
                            <p className='text-2xl font-light'>I'm <span className='font-bold'>Emmanuel Jimenez, </span>Front-end/Back-end Developer </p><br />
                            <p className='text-md'>I am a Junior Software Engineer with 2 years of experience in developing web applications using React and Node.js. 
                            I have worked on several projects that have honed my skills in developing user-friendly and efficient web applications.<br /> <br />
                            <p className='text-md mt-3'>
                            I have studied in the UAA, where i got a Bachelor degree in Intelligent Computing engineering.
                            My passion for coding has driven me to continuously expand my skillset and stay up-to-date with the latest technology trends. 
                            </p>

                            
                        </p>
                    </motion.div>
                    <motion.div 
                        className='w-5/6 md:w-3/5 mt-10 md:flex space-y-10 md:space-y-0'
                        initial={{opacity: 0}}
                        animate={{ opacity: 1 }}
                        transition={{ ease: "easeOut", duration: 2 , delay: 1.25,}}
                    >
                        <div className='md:w-1/3 shadow-md hover:scale-110 transition ease-in-out hover:shadow-cyan-400 rounded-lg'>
                            <img src={AboutImg} alt="Aboute me image" className='object-cover rounded-lg opacity-90 hover:opacity-100'/>
                        </div>
                        <div className='md:w-2/3 md:pl-8'>
                            <p className='text-md'>I'm currently working at Epam Systems. I consider myself a good team member.</p>
                            <p className='text-md mt-5'>Finally i would like to continue learning and growing as a software engineer and contribute to exciting projects with a talented team.</p>
                        </div>
                    </motion.div>
                    
                </main>
            </div>
        </motion.div>
    )
}

export default AboutMe