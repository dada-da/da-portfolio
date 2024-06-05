'use client';

import React from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import { useSectionInView } from '@/hooks/useSectionInView';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

const AlternateTimeline = () => {
  return (
    <Timeline className="p-0" position="alternate">
      <TimelineItem>
        <TimelineOppositeContent className="pb-0 px-4 pt-4">
          2021 - Presents
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector className="h-4" />
          <div className="bg-content rounded-full my-4 hidden w-10 h-10 relative lg:w-20 lg:h-20 lg:block">
            <Image
              src="/etc-logo.png"
              alt="etc"
              fill
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
          <TimelineConnector className="h-40" />
        </TimelineSeparator>
        <TimelineContent className="pb-0 px-4 pt-4">Eat</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Code</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Sleep</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>Repeat</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export const Experience = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
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
