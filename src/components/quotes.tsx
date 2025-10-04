'use client';

interface quote {
  message: string;
  author: string;
}

const leQuotes: quote[] = [
  {
    message:
      "It's your life—but only if you make it so. The standards by which you live must be your own standards, your own values, your own convictions in regard to what is right and wrong, what is true and false, what is important and what is trivial.",
    author: 'Eleanor Roosevelt',
  },
  {
    message: 'I wanted to be a ballerina. I changed my mind.',
    author: 'Beverly Cleary',
  },
  {
    message: `And all the petty shit aside\nAll the phony shit aside\nI just want what's mine.`,
    author: 'SZA',
  },
  {
    message:
      'Much of my rebelliousness starts with indifference to what is urgently important to others.',
    author: 'Barbara Ehrenreich',
  },
  {
    message:
      "Fitting in is about assessing a situation and becoming who you need to be to be accepted. Belonging, on the other hand, doesn't require us to change who we are; it requires us to be who we are.",
    author: 'Brené Brown',
  },
  {
    message: 'Progressive improvement beats delayed perfection.',
    author: 'Mark Twain',
  },
  {
    message: "Don't look back - you're not going that way.",
    author: 'Mary Engelbreit',
  },
  {
    message:
      'I know who I WAS when I got up this morning, but I think I must have been changed several times since then.',
    author: 'Lewis Carroll, Alice in Wonderland',
  },
];

import { useState } from 'react';

export default function Quote() {
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const currentQuote = leQuotes[currentIndex];

  // const nextQuote = () => {
  //   setCurrentIndex((prev) => (prev + 1) % leQuotes.length);
  // };

  // const prevQuote = () => {
  //   setCurrentIndex((prev) => (prev - 1 + leQuotes.length) % leQuotes.length);
  // };

  return (
    <div className="flex flex-column">
      {/* <button onClick={prevQuote} className="text-indigo hover:text-indigo-200 text-1xl">
          ←
        </button> */}
      <div className="p-4 rounded-lg bg-indigo-500 h-full">
        <blockquote className="mt-4 pl-4 border-l-3 border-white text-lg whitespace-pre-wrap">
          &quot;{leQuotes[0].message}&quot;
        </blockquote>

        <div className="flex flex-row justify-end">
          <p className="text-right font-bold font-mono text-xl p-4">
            - {leQuotes[0].author}
          </p>
          {/* <button onClick={nextQuote} className="flex-none text-indigo hover:text-indigo-200 text-xl">
          →
        </button> */}
        </div>
      </div>
    </div>
  );
}
