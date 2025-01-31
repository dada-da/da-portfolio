"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useInView } from "motion/react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { useSectionInView } from "@/hooks/useSectionInView";
import { experiencesData } from "@/lib/data";

const AlternateTimeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <VerticalTimeline lineColor="var(--grey)">
      {experiencesData.map(({ title, description, duration, logo }) => (
        <VerticalTimelineElement
          ref={ref}
          key={title}
          visible={isInView}
          contentStyle={{
            background: "var(--grey-disabled)",
            boxShadow: "none",
            padding: "20px",
          }}
          contentArrowStyle={{ display: "none" }}
          date={duration}
          dateClassName="!font-medium"
          icon={
            <Image
              className="p-1 bg-white rounded-full"
              src={logo}
              alt="etc"
              fill
              style={{
                objectFit: "cover",
              }}
              sizes="(max-width: 768px) 10vw, (max-width: 1200px) 20vw, 5vw"
            />
          }
          iconStyle={{
            background: "white",
          }}
        >
          <h3 ref={ref} className="font-medium">
            {title}
          </h3>
          <p className="text-muted-foreground !mt-1 !font-normal">
            {description}
          </p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export const Experience = () => {
  const { ref: sectionRef } = useSectionInView("Experience");

  return (
    <section ref={sectionRef} id="experience">
      <div className="flex flex-col gap-10 w-full justify-between items-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter sm:text-4xl">
          My Experience
        </h2>
        <p className="max-w-2xl text-center leading-7">
          Experience that I have accumulated over several years.
        </p>
      </div>
      <AlternateTimeline />
    </section>
  );
};
