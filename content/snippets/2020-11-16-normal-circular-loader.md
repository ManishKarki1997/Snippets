---
title: Normal Circular Loader
description: |-
  #### **Simple circular loader**


  You can change the size of the loader by just changing the font size.
  Setup the css variables accordingly.

  ##### Variables:

  1. \--font-size
  2. *\--animation-duration*
  3. *\--loader-radius*
demo_image: /images/uploads/simple-circular-loader.gif
html: <div class="circular-loader"></div>
css: |-
  :root{
    --font-size:2rem;
    --loader-radius:6px;
    --animation-duration:1s;
  }

  .circular-loader{
    position:relative; 
    width:var(--font-size);
    height:var(--font-size);
    border-radius:50%;
    border:var(--loader-radius) solid rgba(0,0,0,0.4);
  } 
  .circular-loader::before{
    position:absolute;
    top: calc(var(--loader-radius)  *\-1);
    left: calc(var(--loader-radius)*  -1);
    content:'';
    width:100%;
    height:100%;
    border-radius:inherit;
    border: var(--loader-radius) solid transparent;
    border-top: var(--loader-radius) solid black;
    animation:circular-loader var(--animation-duration) linear infinite;
  }

  @keyframes circular-loader{
    from{

  \    transform:rotate(0deg);

    }

    to{
      transform:rotate(360deg);
    }
  }
date: 2020-11-16T16:51:58.090Z
tags:
  - loader
  - spinner
  - animation
---
