import React from 'react'
import Link from 'next/link';

function about() {
    return (
        <div className='mx-auto flex flex-col h-screen items-center justify-center bg-[#151716] min-h-full min-w-full text-4xl'>
            
            Team Members
            <li className='font-semibold text-lg hover:text-blue-500 '>
                <a
                    href="https://www.github.com/Real-Enigma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 hover:underline"
                >
                    Anand Abraham(12)
                </a>
            </li>
            <li className='font-semibold text-lg hover:text-red-500 '>

                <a
                    href="https://www.github.com/Ashwathy-Ann"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-500 hover:underline"
                >
                    Ashwathy Ann Mathew(16)
                </a>
            </li>
            <li className='font-semibold text-lg hover:text-yellow-500 '>

                <a
                    href="https://www.github.com/InnovativeAR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-500 hover:underline"
                >
                    Augustine Reji(17)
                </a>
            </li>
            <li className='font-semibold text-lg hover:text-pink-500 '>

                <a
                    href="https://www.github.com/rohnjjohnson"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-500 hover:underline"
                >
                    Rohn J Johnson(52)
                </a>
            </li>
            <li className='font-semibold text-lg hover:text-green-500 '>

                <a
                    href="https://www.github.com/tomukalathil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-500 hover:underline"
                >
                    Thomas Chandy(61)
                </a>
            </li>
        </div>

    )
}

export default about