---
title: Sliding Border Button Animation
description: Sliding bordered button animation
demo_image: /images/uploads/sliding-border-animation.gif
html: "<button class=\"button\">\r

  \  <span></span>\r

  \  <span></span>\r

  \  <span></span>\r

  \  <span></span>\r

  \  Bordered Animating Button

  </button>\r\n"
css: ":root{\r

  \  --animation-duration-horizontal:2s;\r

  \  --animation-duration-vertical:2s;\r

  \  --animation-delay:1s;\r

  }\r

  \r

  body{\r

  \  display:flex;\r

  \  align-items:center;\r

  \  justify-content:space-around;\r

  \  height:100vh;\r

  \  width:100%;\r

  \  background-color:#dedede;\r

  }\r

  .button{\r

  \  padding:20px;\r

  \  font-size:18px;\r

  \  letter-spacing:1px;\r

  \  border:none;\r

  \  overflow:hidden;\r

  \  position:relative;\r

  \  cursor:pointer;\r

  \  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0,
  0, 0, 0.04);\r

  }\r

  \r

  .button span:nth-child(1){\r

  \  position:absolute;\r

  \  top:0;\r

  \  left:0;\r

  \  height:2px;\r

  \  width:100%;\r

  \  background: #3182ce;\r

  \  animation: button-top var(--animation-duration-horizontal) linear
  infinite;\r

  \  animation-delay:1s;\r

  }\r

  \r

  \r

  .button span:nth-child(2){\r

  \  position:absolute;\r

  \  top:0;\r

  \  right:0;\r

  \  height:100%;\r

  \  width:2.5px;\r

  \  background: #3182ce;\r

  \  animation: button-right var(--animation-duration-vertical) linear
  infinite;\r

  \  animation-delay:2s;\r

  \ \r

  }\r

  \r

  .button span:nth-child(3){\r

  \  position:absolute;\r

  \  left:0;\r

  \  bottom:0;\r

  \  height:2px;\r

  \  width:100%;\r

  \  background: #3182ce;\r

  \  animation: button-bottom var(--animation-duration-horizontal) linear
  infinite;\r

  \  animation-delay: 1s;\r

  }\r

  \r

  .button span:nth-child(4){\r

  \  position:absolute;\r

  \  top:0;\r

  \  left:0;\r

  \  height:100%;\r

  \  width:2.5px;\r

  \  background: #3182ce;\r

  \  animation: button-left var(--animation-duration-vertical) linear
  infinite;\r

  \  animation-delay:2s;\r

  }\r

  \r

  \r

  @keyframes button-top{\r

  \  from{\r

  \    transform:translateX(-100%);\r

  \  }\r

  \  to{\r

  \    transform:translateX(100%);\r

  \  }\r

  }\r

  \r

  @keyframes button-right{\r

  \  from{\r

  \    transform:translateY(-100%);\r

  \  }\r

  \  to{\r

  \    transform:translateY(100%);\r

  \  }\r

  }\r

  @keyframes button-bottom{\r

  \  from{\r

  \    transform:translateX(100%);\r

  \  }\r

  \  to{\r

  \    transform:translateX(-100%);\r

  \  }\r

  }\r

  @keyframes button-left{\r

  \  from{\r

  \    transform:translateY(100%);\r

  \  }\r

  \  to{\r

  \    transform:translateY(-100%);\r

  \  }\r

  }\r

  \r\n"
date: 2020-11-15T18:34:13.704Z
tags:
  - button
  - tailwind
  - animation
---
