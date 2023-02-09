import {motion} from 'framer-motion';

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
            duration: 0.5
        }
    }
}

const Resume = () => {
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
                
                <main className='w-5/8 w-screen h-auto bg-black flex flex-col items-center'>
                    <motion.div 
                        className='md:w-1/4 pt-5'
                        initial={{y: -100}}
                        animate={{ y: 0 }}
                        transition={{ type: "spring", stiffness: 100 , delay: 0.5,}}
                    >
                        <h1 className='text-2xl text-center p-2 font-bold border-cyan-400 border-2 uppercase'>Resume</h1> 
                    </motion.div>
                    <div className='w-5/6 my-20 space-y-5'>
                        <motion.div 
                            className='grid grid-cols-1 md:grid-cols-3 gap-10'
                            variants={container}
                            initial="hidden"
                            animate="show"
                        >
                            <motion.div 
                                variants={item}
                                className='w-full'
                            >
                                <h3 className='text-cyan-400 text-lg font-bold mb-5'>Software SkillSet</h3>
                                <ul
                                    variants={container}
                                    initial="hidden"
                                    animate="show"
                                    className='w-3/4 flex flex-col justify-between space-y-2'
                                >
                                    <li
                                        variants={item}
                                        className="flex space-x-5 justify-between"
                                    >
                                        <p>HTML</p>
                                        <img src="https://cdn-icons-png.flaticon.com/512/174/174854.png" alt="" className='h-6'/>
                                    </li>
                                    <li
                                        variants={item}
                                        className="flex space-x-5 justify-between"
                                    >
                                        <p>CSS</p>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/250px-CSS3_logo.svg.png" alt="" className='h-6'/>
                                    </li>
                                    <li
                                        variants={item}
                                        className="flex space-x-5 justify-between"
                                    >
                                        <p>Javascript</p>
                                        <img src="https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-1.png" alt="" className='h-6 rounded-sm'/>
                                    </li>
                                    <li
                                        variants={item}
                                        className="flex space-x-5 justify-between"
                                    >
                                        <p>Typescript</p>
                                        <img src="https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.png" alt="" className='h-6 rounded-sm'/>
                                    </li>
                                    <li
                                        variants={item}
                                        className="flex space-x-5 justify-between"
                                    >
                                        <p>React</p>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" className='h-6'/>
                                    </li>
                                    <li
                                        variants={item}
                                        className="flex space-x-5 justify-between"
                                    >
                                        <p>Expo + React Native</p>
                                        <img src="data:image/png;base64,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" alt="" className='h-6 rounded-sm'/>
                                    </li>
                                    <li
                                        variants={item}
                                        className="flex space-x-5 justify-between"
                                    >
                                        <p>NodeJS</p>
                                        <img src="https://lirp.cdn-website.com/f89a94ee/dms3rep/multi/opt/nodejs-logo-615aa92d-320w.png" alt="" className='h-6'/>
                                    </li>
                                    <li
                                        variants={item}
                                        className="flex space-x-5 justify-between"
                                    >
                                        <p>MongoDB</p>
                                        <img src="https://www.pngrepo.com/png/331488/512/mongodb.png" alt="" className='h-6'/>
                                    </li>
                                    <li
                                        variants={item}
                                        className="flex space-x-5 justify-between"
                                    >
                                        <p>Express</p>
                                        <img src="https://www.orafox.com/wp-content/uploads/2019/01/expressjs.png" alt="" className='h-6'/>
                                    </li>
                                    <li
                                        variants={item}
                                        className="flex space-x-5 justify-between"
                                    >
                                        <p>Postman</p>
                                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png" alt="" className='h-6'/>
                                    </li>
                                    <li
                                        variants={item}
                                        className="flex space-x-5 justify-between"
                                    >
                                        <p>Jest</p>
                                        <img src="https://cdn.freebiesupply.com/logos/large/2x/jest-logo-png-transparent.png" alt="" className='h-6'/>
                                    </li>
                                    <li
                                        variants={item}
                                        className="flex space-x-5 justify-between"
                                    >
                                        <p>GIT</p>
                                        <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="" className='h-6'/>
                                    </li>
                                    <li
                                        variants={item}
                                        className="flex space-x-5 justify-between"
                                    >
                                        <p>NPM</p>
                                        <img src="https://authy.com/wp-content/uploads/npm-logo.png" alt="" className='h-6'/>
                                    </li>
                                </ul>
                            </motion.div>
                            <motion.div variants={item} className='w-3/4 space-y-5'>
                                <h3 className='text-cyan-400 text-lg font-bold mb-5'>Education</h3>
                                <p className='italic'>UAA</p>
                                <p className='list-item'>Bachelor Degree in Intelligent Computing Engineering</p>
                                <hr className='w-56' />
                                <p className='italic'>Udemy Courses</p>
                                <p className='list-item'>Modern Javascript: The Full Guide</p>
                                <p className='list-item'>NodeJS Bootcamp</p>
                                <p className='list-item'>NodeJS: From Zero to Expert</p>
                                <p className='list-item'>ReactJS: From Zero to Expert</p>
                                <p className='list-item'>ReactJS: The Complete Guide</p>
                                <p className='list-item'>React Native: The Practical Guide</p>
                                <hr className='w-56'/>
                                <p className='italic'>LinkedIn Learning</p>
                                <p className='list-item'>Typescript Essential Training</p>
                                <p className='list-item'>Docker for Developers</p>
                                <p className='list-item'>NodeJS Microservices</p>
                                <p className='list-item'>Software Architecture</p>
                                <p className='list-item'>GIT Essential Training</p>
                            </motion.div>
                            <motion.div variants={item} className='w-full space-y-5'>
                                <h3 className='text-cyan-400 text-lg font-bold'>Experience</h3>
                                <p className='italic'>Solgeek</p>
                                <p>Web Developer</p>
                                <p className='list-item'>HTML, CSS, JS, ReactJS, NodeJS</p>
                                <p>Mobile Developer</p>
                                <p className='list-item'>JS, Expo ReactNative, NodeJS</p>
                                <hr className='w-56' />
                                <p className='italic'>Epam Systems</p>
                                <p className=''>Junior Software Engineer</p>
                                <p className='list-item'>HTML, CSS, Javascript, ReactJS, Typescript, NodeJS, Jest</p>
                                <h3 className='text-cyan-400 text-lg font-bold'>Languages</h3>
                                <p className='list-item'>Spanish (Native)</p>
                                <p className='list-item'>English (B2)</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </main>
            </div>
        </motion.div>
    )
}

export default Resume