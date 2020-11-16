---
title: Multiple bordered circular spinner
description: >-
  Multiple bordered circular spinner with and without border background color.


  You can replace 'transparent' with any color to set the border background color. 


  > border: var(--loader-radius) solid transparent;
demo_image: /images/uploads/multiple-bordered-circular-spinner.gif
html: <div class="loader"></div>
css: |-
  :root{
    --loader-size:2rem;
    --loader-radius:6px;
    --animation-duration:1s;
  }

  .loader{
    position:relative;
    width:var(--loader-size);
    height:var(--loader-size);
   * border:5px solid rgba(0,0,0,0.4);*
    border-radius:50%;
  }
  .loader::before{
    width: inherit;
    height: inherit;
    border-radius:inherit;
    position:absolute;
    top: calc(var(--loader-radius)  *\-1);
    left: calc(var(--loader-radius)*  -1);
    content:'';
    border: var(--loader-radius) solid transparent;
    border-top: var(--loader-radius) solid #4a5568;
    border-bottom: var(--loader-radius) solid #4a5568;
    animation: loader var(--animation-duration) linear infinite;
  }

  @keyframes loader{
    from {
      transform: rotate(0deg);
    }

    to{
      transform: rotate(360deg);
    }
  }
date: 2020-11-16T17:27:33.376Z
tags:
  - loader
  - spinner
  - animation
---
