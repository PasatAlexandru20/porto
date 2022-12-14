import React from "react";

const Techstack = ({ title, description }) => {
  return (
    <div className="techstack" >
      <svg
        className="arrowSvg"
        width="20"
        height="25"
        viewBox="0 0 20 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.947549 24.422C1.46494 24.8074 2.14331 25 2.82168 25C3.50005 25 4.17842 24.8074 4.69599 24.4218L18.8324 13.8953C19.3294 13.5252 19.6086 13.0232 19.6086 12.4997C19.6086 11.9761 19.3293 11.4741 18.8322 11.104L4.69581 0.578023C3.66085 -0.192631 1.98251 -0.192762 0.947373 0.578155C-0.0877635 1.34894 -0.0877635 2.59854 0.947373 3.36932L13.2094 12.4998L0.947373 21.6307C-0.0875868 22.4015 -0.0875869 23.6512 0.947549 24.422Z"
          fill="#B0A8A8"
        />
      </svg>

      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <a href="www.google.com">
        <svg
        className="starSvg"
          width="50"
          height="29"
          viewBox="0 0 54 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 0L22.0413 10.0193L35.119 10.0193L24.5389 16.2115L28.5801 26.2307L18 20.0385L7.41987 26.2307L11.4611 16.2115L0.880983 10.0193L13.9587 10.0193L18 0Z"
            fill="#D9D9D9"
          />
          <path
            d="M36 0L40.0413 10.0193L53.119 10.0193L42.5389 16.2115L46.5801 26.2307L36 20.0385L25.4199 26.2307L29.4611 16.2115L18.881 10.0193L31.9587 10.0193L36 0Z"
            fill="#9B9BA4"
          />
        </svg>
      </a>
    </div>
  );
};

export default Techstack;
