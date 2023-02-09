import {motion} from 'framer-motion';
import Form from '../components/Form';

const Contact = () => {
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
        <div className='flex flex-col text-white'>
            <main className='w-screen h-screen bg-black flex flex-col items-center'>
                <div className='md:w-1/4 pt-5 '>
                    <h1 className='text-2xl text-center p-2 font-bold border-cyan-400 border-2 uppercase'>Contact</h1> 
                </div>
                <Form />
            </main>
        </div>
        </motion.div>
    )
}

export default Contact