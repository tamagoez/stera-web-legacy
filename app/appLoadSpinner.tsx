"use client"
import { useEffect } from "react";
import layoutStyles from './styles/pages/layoutStyles.module.css'

export default function AppLoadSpinner() {
    useEffect(() => {
        const firstScreen = document.getElementById("load_screen");
        if (firstScreen) {
            firstScreen.style.transition = "opacity 0.5s";
            firstScreen.style.opacity = "0";
            setTimeout(() => {
                firstScreen.style.display = "none";
            }, 500);
        }
    }
    )
    return <div className={layoutStyles.load_screen} id="load_screen">
        <div className={layoutStyles.svg_wrap}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.70667in"
                height="1.70667in"
                viewBox="0 0 512 512"
            >
                <path
                    id="n"
                    className={layoutStyles.line_n}
                    d="M 84.25,491.00
     C 84.25,491.00 84.25,175.20 84.25,175.20
       84.25,129.50 101.41,89.75 135.72,55.95
       167.81,24.65 208.07,9.00 256.50,9.00
       304.36,9.00 344.62,24.65 377.27,55.95
       411.58,89.20 428.73,128.95 428.73,175.20
       428.73,175.20 428.73,453.61 428.73,453.61
       428.73,453.61 349.89,491.00 349.89,491.00
       349.89,491.00 345.73,491.00 345.73,491.00
       345.73,491.00 345.73,175.23 345.73,175.23
       345.73,143.38 337.09,120.05 319.80,105.23
       302.50,90.41 281.41,83.00 256.50,83.00
       231.59,83.00 210.49,90.41 193.20,105.23
       175.91,120.05 167.27,143.38 167.27,175.23
       167.27,175.23 167.27,453.61 167.27,453.61
       167.27,453.61 88.41,491.00 88.41,491.00
       88.41,491.00 84.25,491.00 84.25,491.00 Z"
                />
            </svg>
        </div>
    </div>
}