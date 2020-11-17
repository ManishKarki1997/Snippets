---
title: Snake Animation Loader
description: ' Simple loader CSS animation'
demo_image: images/uploads/snake-animation-loader.gif
html: |-
  <div class="snake">
      <div></div>
      <div></div>
      <div></div>
    </div>
css: |-
  .snake{
    position:relative;
    display:flex;
  }

  .snake div{
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:#4299e1;
    margin:0 1px;
  }
  .snake div:nth-child(1){
    animation: snake 1s ease-in-out infinite;
  }
  .snake div:nth-child(2){
    animation: snake 1s ease-in-out infinite;
    animation-delay:0.2s;
  }
  .snake div:nth-child(3){
    animation: snake 1s ease-in-out infinite;
    animation-delay:0.4s;
  }

  @keyframes snake{
    0%{
      transform:translateY(0px);
    }
    50%{
      transform:translateY(6px);
      box-shadow: 0 8px 4px rgba(0,0,0,0.3);
    }
    100%{
      transform:translateY(0px);
    }
  }
date: 2020-11-17T15:32:51.896Z
tags:
  - loader
  - spinner
  - animation
---
