import { useState } from "react";

const Form = () => {


    const [alerta, setAlerta] = useState(false)

    const handleSubmit = (e) => {
        setAlerta(true);
    }

    return (
        <div className='w-3/4 md:w-2/4 border border-cyan-400 bg-white mt-24 rounded-xl shadow-md shadow-cyan-400 p-6'>
            {alerta ? <div className="w-full p-2 bg-green-500 rounded-md text-white font-bold text-center">Gracias por tu mensaje!</div> : ''}
            <form onSubmit={handleSubmit} action={`https://formsubmit.co/${import.meta.env.VITE_EMAIL}`} method="POST" className="space-y-5">
                <input type="hidden" name="_subject" value="New Email from Web Portfolio" />
                <input type="hidden" name="_captcha" value="false"/>
                <input type="hidden" name="_next" value={`${location.origin}/contact`}></input>
                <div className='flex flex-col space-y-3'>
                    <label htmlFor="name" className='text-black font-medium text-md'>Your name:</label>
                    <input required type="text" name="name" id="name" placeholder='Your name here' className=' rounded-lg p-2 bg-gray-200 text-black'/>
                </div>
                <div className='flex flex-col space-y-3'>
                    <label htmlFor="email" className='text-black font-medium text-md'>Your email:</label>
                    <input required type="email" name="email" id="email" placeholder='Your email here' className=' rounded-lg p-2 bg-gray-200 text-black'/>
                </div>
                <div className='flex flex-col space-y-3'>
                    <label htmlFor="message" className='text-black font-medium text-md'>Your message:</label>
                    <textarea name="message" id="message" className='bg-gray-200 text-black' rows="3"></textarea>
                </div>
                <div className='flex space-y-3 justify-center'>
                    <input required type="submit" value="Send Message" className='bg-cyan-400 p-2 rounded-lg hover:scale-110 transition ease-in-out duration-300 delay-150 hover:cursor-pointer font-bold'/>
                </div>
            </form>
        </div>
    )
}

export default Form