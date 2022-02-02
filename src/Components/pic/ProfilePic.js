import React from 'react'
import './ProfilePic.css'

const ProfilePic = () => {

    const circleText = "M in Thiha - Front End Developer - ".split("");
    const styles = {};

    return (
        <div>
            <div className="circle transform scale-125 hover:scale-150 transition duration-300 ease-linear">
                <div className="logo"></div>
                <div className="text">
                    <p>
                        {circleText.map( (el,i) => (
                            <span style={{transform: `rotate(${i*10.3}deg)`}} key={i}>{el}</span>
                        ) )}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProfilePic
