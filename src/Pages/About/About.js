import React from 'react'
// import ProgressBar from '../../Components/progress/ProgressBar'

const About = () => {
    return (
        <section className='w-full flex justify-center bg-black text-white py-36' id='about'>
            <div className="about-wrapper w-3/5 flex flex-col items-center">
                <h1 className='text-center text-2xl font-bold tracking-widest mb-8'>AboutMe</h1>
                {/* <div className="w-52 mt-1 mb-10 bg-white py-0.5"></div> */}
                <p className='tracking-widest font-light'>
                    Hi! I'm Min Thiha. I'm a Front-end Developer. I studied Mechatronics and graduated with bachelor of engineering (MC) from Technological University (Thanlyin).I'm very passionate and dedicated to my work. I enjoy every step of the development process, from discussion and collaboration. I've many experience in front-end development.
                </p>

                {/* <h1 className='text-center text-2xl font-bold tracking-widest mt-20'>Programming Skills</h1>
                <div className="progresses-wrapper mt-10">
                    <div className="progresses flex flex-wrap gap-10">
                    <ProgressBar color={"#f48924"} text={"HTML"} value={"80"} />
                    <ProgressBar color={"#2f89fc"} text={"CSS"} value={"70"} />
                    <ProgressBar color={"#f9ff21"} text={"JavaScript"} value={"75"} />
                    <ProgressBar color={"#7a57d1"} text={"Bootstrap"} value={"90"} />
                    <ProgressBar color={"#22b2da"} text={"Tailwind"} value={"80"} />
                    <ProgressBar color={"#46c3db"} text={"React"} value={"70"} />
                    <ProgressBar color={"#2f89fc"} text={"jQuery"} value={"75"} />
                    <ProgressBar color={"#ffd615"} text={"Figma"} value={"60"} />
                    <ProgressBar color={"#28c7fa"} text={"PHP"} value={"65"} />
                    <ProgressBar color={"#fc5c9c"} text={"SCSS"} value={"73"} />
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default About
