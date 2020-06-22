import React from "react";
import Link from 'next/link'

const Work = ({
  fileName,
  title,
  description,
  url,
}) => {
  return (
    <Link href={url}>
      <div className="cursor-pointer feature-box mb-8 overflow-hidden">
        <div className="bg-sky h-32 overflow-hidden" style={{padding: "0 0 65% 0"}}>
          <img className="w-full self-center" src={fileName} />
        </div>
        <div className="z-10 bg-white pt-6 pl-8">
          <h3 className="text-3xl text-gray-700">{title}</h3>
          <p className="text-lg text-gray-600">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Work;
