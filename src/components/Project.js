import React from 'react'

const Project = ({title, description}) => {
  return (
    <div className="project">
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <a href="/">
          <svg
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
        </a>
      </div>
  )
}

export default Project