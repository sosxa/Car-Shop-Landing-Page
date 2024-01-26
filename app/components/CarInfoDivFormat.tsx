'use client';
import React, { useState } from 'react'

type ImageProps = {
    src?: string,
    title?: string
    id? : string
}

function CarInfoDivFormat(props: ImageProps) {

    const [hoverActive, setHoverActive] = useState(false);

// the state is being changed but there is no reset to the state once 
// the change occurs 

    const EnterCursor = () => {
        if (typeof window !== 'undefined') {
            if (window.MouseEvent) {
                setHoverActive(true);
                console.log(hoverActive);
            }else {
                setHoverActive(false);
            }

        }

    }

    const ExitCursor = () => {
        if (typeof window !== 'undefined') {
            if (window.MouseEvent) {
                setHoverActive(false);
                 console.log(hoverActive);
            }
        }
    }


    React.useEffect(() => {
        window.addEventListener('mouseenter', EnterCursor);
        // mouseleave
        window.addEventListener('mouseleave', ExitCursor);
    }, [])


    return (
        <div id={props.id} className='car-container'>
        {/* // <div className={hoverActive ? "hovered" : "car-container"}> */}
            <img className={hoverActive ? "hovered" : "brand-img"}
                src={props.src}
                onMouseEnter={EnterCursor}
                onMouseLeave={ExitCursor}
            >
            </img>
            <h2 className={hoverActive ? "activated" : 'brand-name'}>{props.title}</h2>
        </div>

    )
}

export default CarInfoDivFormat
