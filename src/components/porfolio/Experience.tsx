'use client';

import React from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { useSectionInView } from '@/hooks/useSectionInView';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { experiencesData } from '@/lib/data';

const AlternateTimeline = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <VerticalTimeline lineColor="text-red">
      {experiencesData.map(({ title, description, duration, logo }) => (
        <VerticalTimelineElement
          key={title}
          visible={inView}
          contentStyle={{
            background: 'transparent',
            boxShadow: 'none',
            padding: '20px',
          }}
          contentArrowStyle={{ display: 'none' }}
          date={duration}
          dateClassName="!font-medium"
          icon={
            <div className="bg-content rounded-full hidden w-15 h-15 relative lg:block">
              <Image
                src={logo}
                alt="etc"
                fill
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
          }
          iconStyle={{
            boxShadow: 'none',
            border: '2px solid',
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
  const { ref: sectionRef } = useSectionInView('Experience');

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
