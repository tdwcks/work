import React from "react";
import Link from 'next/link'

const Hero = ({
  foreground,
  background,
  description,
  title,
}) => {
  if (title === "") {
  return (
    <div className={'hero md:fixed md:w-1/2 h-screen p-6 flex bg-' + background}>

      <h2 className="text-3xl pb-4 flex-0 leading-tight self-end text-white md:text-5xl">{description}</h2>
    </div>
  )
  } else {
    return (
      <div className={'hero md:fixed p-6 flex md:w-1/2 h-screen bg-' + background + ' text-' + foreground}>
        <div className={'arrow z-10 custom-box-shadow rounded-lg cursor-pointer bg-white fixed p-1 text-' + background}>

          <Link href="/">
            <svg className="fill-current" width="25" height="25" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0606 9.06065L17.9393 6.93933L4.87866 20L17.9393 33.0607L20.0606 30.9393L10.1213 21H34V18H11.1213L20.0606 9.06065Z" fill={background}/>
            </svg>
          </Link>
        </div>
        <h2 className="text-3xl pb-4 flex-1 leading-tight self-end text-white md:text-5xl"><span className={'text-' + foreground}>{title} </span>{description}</h2>
      </div>
    )
  }
};

export default Hero;
