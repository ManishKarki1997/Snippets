---
title: Button - Sliding Content on Hover
demo_image: /images/uploads/button-hover-sliding-content.gif
html: |-
  <button class="button">

      <svg

          xmlns="http://www.w3.org/2000/svg"

          fill="none"

          stroke="currentColor"

          stroke-linecap="round"

          stroke-linejoin="round"

          stroke-width="2"

          viewBox="0 0 24 24">

              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />

              <circle cx="12" cy="12" r="3" />

     </svg>

     <span> Preview </span>

  </button>
css: |-
  .button {

    color: #1a202c;

    display: flex;

    align-items: center;

    justify-content: space-between;

    border: 1px solid #2d3748;

    border-radius: 0.25rem;

    padding: 0.25rem 1.5rem;

    overflow: hidden;

  }

  .button svg {

    width: 1rem;

    height: 1rem;

    stroke-width: 2px;

    stroke: black;

    cursor: pointer;

    transform: translateX(-10rem);

    transition: all 0.3s ease-in-out;

  }

  .button svg:hover {

    stroke: #2c5282;

  }

  .button:hover svg {

    transform: translateX(-0.5rem);

  }

  .button span {

    transform: translateX(-0.5rem);

    transition: all 0.3s ease-in-out;

  }

  .button:hover span {

    transform: translateX(0.5rem);

  }
tailwind: >-
  <button


            class="flex items-center px-6 py-1 overflow-hidden text-black border border-gray-800 rounded justify-evenly group"


  \>


     <svg


              class="w-4 h-4 text-black transition-all duration-300 transform -translate-x-40 border rounded-sm cursor-pointer stroke-2 group-hover:-translate-x-2 hover:text-blue-800"


              xmlns="http://www.w3.org/2000/svg"


              width="24"


              height="24"


              fill="none"


              stroke="currentColor"


              stroke-linecap="round"


              stroke-linejoin="round"


              stroke-width="2"


              viewBox="0 0 24 24">


              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />


              <circle cx="12" cy="12" r="3" />


            </svg>


            <span


              class="text-gray-900 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-2">


              Preview


            </span>


  </button>
date: 2020-11-13T14:29:27.029Z
description: A button, when hovered, an icon will come in sliding from the left
  and the button text moves slightly to the right.
tags:
  - button
  - tailwind
---
