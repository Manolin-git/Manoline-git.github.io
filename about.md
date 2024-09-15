---
layout: default
title: About
order: 4
permalink: /about/
---

&nbsp;


<script>
    // use a script tag or an external JS file
    document.addEventListener("DOMContentLoaded", (event) => {
        gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

let sections = document.querySelectorAll(".section");
let scrollContainer = document.querySelector(".scrollContainer");

//horizontal scroll
let scrollTween = gsap.to(scrollContainer, {
  x: () => -(scrollContainer.scrollWidth - window.innerWidth),
  ease: "none",
  scrollTrigger: {
    trigger: scrollContainer,
    invalidateOnRefresh: true,
    pin: true,
    scrub: 1,
    end: () => "+=" + scrollContainer.scrollWidth,
  },
});

gsap.utils.toArray(".parallax").forEach(text => {
  gsap.timeline({
    defaults: {ease: "none"},
    scrollTrigger: {
      containerAnimation: scrollTween,
      trigger: text,
      start: "left right",
      end: "left left",
      scrub: true
    }
  })
  .fromTo(text, {x: 250}, {x: -250}, 0)
  // .from(text.nextElementSibling, {scale: 0.8}, 0)
});

    });
   
 </script>


<style>
.container{
  height: auto;
  width: auto;
  justify-content: center;
  align-items: center;
  display: flex;
}
.scrambletext {
  font-family: 'Comfortaa Light', monospace;
  /* font-weight: 100; */
  font-size: 28px;
  color: #C96868;
  /* color: black; */
}
.dud {
  font-family: monospace !important;
  color: #333 !important;
}
</style>


<body>
<div class="container">
  <div class="scrambletext"></div>
</div>
<script src="/JS/scramble.js"></script>
</body>

<body class="" id="top">
  <div class="history-wrapper-content">
      <section class='scrollContainer'>
          <section class="section start-content">
              <div class="item start-chapter">
                  <div class="caption">
                      <h2>
                          About Me
                      </h2>
                      <p style = "font-size: 20px;">
                      Hi there! I am a physicist broadly interested in the ideas at the intersection between condensed matter theory, quantum computing, and information theory.
                      </p>
                  </div>
                  <figure class="start-image">
                      <img class="parallax"
                          src="/img/quantum_computer.jpg">
                  </figure>
              </div>
          </section>
          <section class='section'>
              <div class="chapters c02">
                  <div class="double-images type-01">
                      <figure>
                          <img
                              src="/img/PI.jpg">
                      </figure>
                      <figure>
                          <img
                              src="/img/IBM-ads.jpg">
                      </figure>
                  </div>
                  <div class="triple-images">
                      <figure>
                          <img class="parallax"
                              src="/img/iisc_01.JPG">
                      </figure>
                      <!-- <figure class="parallax">
                          <img
                              src="/img/qoqi_group_01.jpg">
                      </figure> -->
                      <!-- <figure class="parallax">
                          <img
                              src="/img/iisc_flower.jpg">
                      </figure> -->
                  </div>
                  <div class="caption fadeUp">
                      <h2 class="slideText">
                          <!-- 2021-2024 -->
                      </h2>
                      <!-- <p style  = "font-size: 20px;">
                        Quantum Intern @ IBM Research 2024 <br>
                        MS Research in Physics @ Indian Institute of Science <br>
                      </p> -->
                  </div>
              </div>
          </section>
          <!-- <section class='section'>
              <div class="chapters">
                  <div class="triple-images">
                      <figure>
                          <img
                              src="/img/iisc_01.JPG">
                      </figure>
                      <figure class="parallax">
                          <img
                              src="/img/qoqi_group_01.jpg">
                      </figure>
                      <figure class="parallax">
                          <img
                              src="/img/iisc_flower.jpg">
                      </figure>
                  </div>
              </div>
          </section> -->
          <!-- <section class='section'>
              <div class="chapters c02">
                  <div class="double-images type-02">
                      <figure>
                          <img class="inner-scale"
                              src="/img/Pravega.jpg">
                      </figure>
                      <figure class="parallax">
                          <img
                              src="/img/qoqi_group.jpg">
                      </figure>
                  </div>
                  <div class="caption fadeUp">
                      <h2 class="slideText">
                          2021-24
                      </h2>
                      <p>
                        MS Research in Physics @ Indian Institute of Science <br>
                        Quantum Optics & Quantum Information
                      </p>
                  </div>
              </div>
          </section> -->
      </section>
  </div>
</body>


&nbsp;

Detailed Curriculum Vit&aelig; : <a href="/CV/Curriculum Vitae.pdf" target="_blank" rel="noopener noreferrer">
<i class="ai ai-cv"></i> <small> PDF </small> </a> 