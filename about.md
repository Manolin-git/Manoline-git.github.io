---
layout: default
title: About
order: 4
permalink: /about/
---

&nbsp;

<!-- <div style="text-align: justify">

Hi there! I am an MS in Physical and Mathematical Science at Division of Physical and Math. Sciences, Indian Institute of Science. I am also part of Quantum Optics and Quantum Information Lab at the Department of Instrumental and Applied Physics, working under Prof. CM Chandrashekar. Additionally, I am a quantum intern at IBM Research Lab, Bangalore.
</div> <br>


&nbsp;

Detailed Curriculum Vit&aelig; : <a href="/CV/Curriculum Vitae.pdf" target="_blank" rel="noopener noreferrer">
<i class="ai ai-cv"></i> <small> PDF </small> </a> -->


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



<body class="" id="top">
  <div class="history-wrapper-content">
      <section class='scrollContainer'>
          <section class="section start-content">
              <div class="item start-chapter">
                  <div class="caption">
                      <h2>
                          My History
                      </h2>
                      <p>
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
              <div class="chapters c01">
                  <div class="double-images type-01">
                      <figure>
                          <img
                              src="/img/ibm_research_intern_group.jpg">
                      </figure>
                      <figure class="parallax">
                          <img
                              src="/img/ibm_quantum_group.jpg">
                      </figure>
                  </div>
                  <div class="caption fadeUp">
                      <h2 class="slideText">
                          03/2024-Present
                      </h2>
                      <p>
                      Quantum Intern at IBM Quantum
                      </p>
                  </div>
              </div>
          </section>
          <section class='section'>
              <div class="chapters">
                  <div class="triple-images">
                      <figure>
                          <img
                              src="/img/iisc_01.jpg">
                      </figure>
                      <!-- <figure class="parallax">
                          <img
                              src="/img/qoqi_group_01.jpg">
                      </figure> -->
                      <figure class="parallax">
                          <img
                              src="/img/qoqi_group_01.jpg">
                      </figure>
                  </div>
              </div>
          </section>
          <section class='section'>
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
                      <p style = "padding-right: 0 !important;">
                        MS Research Student @ Indian Institute of Science | Quantum Optics and Quantum Information Lab 
                      </p>
                  </div>
              </div>
          </section>
      </section>
  </div>
</body>


