"use client"
import React, { useState } from 'react';

type Color = 'blue' | 'red' | 'yellow' | 'pink' | 'green';

const colorClasses: Record<Color, string> = {
  blue: 'text-blue-400',
  red: 'text-red-400',
  yellow: 'text-yellow-400',
  pink: 'text-pink-400',
  green: 'text-green-400',
};
const colorStyles = {
  blue: { color: 'blue' },
  red: { color: 'red' },
  yellow: { color: 'yellow' },
  pink: { color: 'pink' },
  green: { color: 'green' },
};

function About() {


  return (
    <div className='mx-auto flex flex-col h-screen items-center justify-center bg-[#151716] text-white'>
      <h1 className='text-4xl font-bold mb-8'>Team Members</h1>

      <ul className='list-none'>
        <MemberLink
          name='Anand Abraham'
          github='https://www.github.com/Real-Enigma'
          color='blue'
          id='12'
        />
        <MemberLink
          name='Ashwathy Ann Mathew'
          github='https://www.github.com/Ashwathy-Ann'
          color='red'
          id='16'
        />
        <MemberLink
          name='Augustine Reji'
          github='https://www.github.com/InnovativeAR'
          color='yellow'
          id='17'
        />
        <MemberLink
          name='Rohn J Johnson'
          github='https://www.github.com/rohnjjohnson'
          color='pink'
          id='52'
        />
        <MemberLink
          name='Thomas Chandy'
          github='https://www.github.com/tomukalathil'
          color='green'
          id='61'
        />
      </ul>
    </div>
  );
}

const MemberLink = ({ name, github, color, id }: { name: string; github: string; color: Color; id: string }) => {
  const [hover, setHover] = useState(false);
  return (
 
  <li className={`font-semibold text-lg mb-4 transition-all delay-100 duration-200`}>
    <a
      href={github}
      target='_blank'
      rel='noopener noreferrer'
      className={`hover:${colorClasses[color]} hover:underline`}
      style={hover ? colorStyles[color] : {}}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
    >
      {`${name} (${id})`}
    </a>
  </li>
);
  };


export default About;
