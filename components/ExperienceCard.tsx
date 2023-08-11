import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import vmologo from '@/public/vmo_logo.jpg';

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-2 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        src="https://cdn.vmogroup.com/vmogroup-global/assets/img/thumbnail_vmo_light.png"
        alt="vmo-logo"
        className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-center object-cover"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Fresher web developer</h4>
        <p className="font-bold text-2xl mt-1">VMM Holding</p>
        <div className="flex space-x-2 my-2">
          <Image
            src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png"
            alt="reactjs"
            className="h-10 w-10 rounded-full"
            width={10}
            height={10}
          />
        </div>
        <p className="uppercase py-5 text-gray-300">Jun 2020 - Dec 2021</p>
        <p>Web developer for Japanese customer</p>
        <ul className="list-disc space-y-4 ml-5 text-lg ">
          <li>Build new web-app to support metro usage history management</li>
          <li>Designed and developed UI friendly website</li>
        </ul>
        <p>Web developer for Australian customer</p>
        <ul className="list-disc space-y-4 ml-5 text-lg ">
          <li>
            Build web-app using ReactJS serving data, analytics and program
            management
          </li>
          <li>Adding new features and Fixing bugs</li>
        </ul>
      </div>
    </article>
  );
}
