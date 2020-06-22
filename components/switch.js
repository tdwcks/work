import React from "react"
import { motion } from 'framer-motion';
import Link from 'next/link'
import Router from 'next/router'


let easing = [0.77,0,0.18,1];

const switchLeft = {
  exit: { x: -57, transition: { duration: 0.3, ease: easing } },
  enter: { x: 0,  transition: { duration: 0.3, ease: easing } }
};

const switchRight = {
  exit: { x: 57, transition: { duration: 0.3, ease: easing } },
  enter: { x: 0,  transition: { duration: 0.3, ease: easing } }
};

const Description = ({
  switcheroo,
  colour,
}) => {
  if (switcheroo.includes("/info")) {
  return (
    <Link href={switcheroo}>
      <div className="switch z-10 custom-box-shadow rounded-lg cursor-pointer m-6 fixed top-0 left-0 bg-white text-xs">
        <div className="relative flex py-2 px-4">
          <div className={'flex-1 w-8 mr-4 text-' + colour}>Work</div>
          <div className={'flex-1 text-center w-8 text-' + colour}>Info</div>
        </div>
        <motion.div className={'switch-inner text-white absolute top-0 left-0 rounded-md bg-' + colour} initial="initial" animate="enter" exit="exit" variants={switchRight}>Work</motion.div>
      </div>
    </Link>
  )
  } else {
    return (
      <div onClick={() => Router.back()}>
        <div className="switch z-10 custom-box-shadow rounded-lg cursor-pointer m-6 fixed top-0 left-0 bg-white text-xs">
          <div className="relative flex py-2 px-4">
            <div className={'flex-1 w-8 mr-4 text-' + colour}>Work</div>
            <div className={'flex-1 text-center w-8 text-' + colour}>Info</div>
          </div>
          <motion.div className={'switch-inner text-white absolute top-0 right-0 rounded-md bg-' + colour} initial="initial" animate="enter" exit="exit" variants={switchLeft}>Info</motion.div>
        </div>
        </div>


    )
  }
}

export default Description
