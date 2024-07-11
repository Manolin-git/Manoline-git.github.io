---
layout: default
title: About
order: 4
permalink: /about/
---

&nbsp;

<div style="text-align: justify">

Hi there! I am an MS in Physical and Mathematical Science at Division of Physical and Math. Sciences, Indian Institute of Science. I am also part of Quantum Optics and Quantum Information Lab at the Department of Instrumental and Applied Physics, working under Prof. CM Chandrashekar. Additionally, I am a quantum intern at IBM Research Lab, Bangalore.
</div> <br>


&nbsp;

Detailed Curriculum Vit&aelig; : <a href="/CV/Curriculum Vitae.pdf" target="_blank" rel="noopener noreferrer">
<i class="ai ai-cv"></i> <small> PDF </small> </a>


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



<!-- <body class="" id="top">
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
                          src="https://www.ibm.com/quantum/_next/image?url=%2Fquantum%2Fimages%2Fresearch%2Fcareers.png&w=1584&q=75">
                  </figure>
              </div>
          </section>
          <section class='section'>
              <div class="chapters c01">
                  <div class="double-images type-01">
                      <figure>
                          <img
                              src="https://www.ibm.com/quantum/_next/image?url=%2Fquantum%2Fimages%2Fresearch%2Fcareers.png&w=1584&q=75">
                      </figure>
                      <figure class="parallax">
                          <img
                              src="https://images.unsplash.com/photo-1579702493487-45a296ba9e34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80">
                      </figure>
                  </div>
                  <div class="caption fadeUp">
                      <h2 class="slideText">
                          03/2024-07/2024
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
                              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80">
                      </figure>
                      <figure class="parallax">
                          <img
                              src="https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80">
                      </figure>
                      <figure class="parallax">
                          <img
                              src="https://images.unsplash.com/photo-1455165814004-1126a7199f9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80">
                      </figure>
                  </div>
              </div>
          </section>
          <section class='section'>
              <div class="chapters c02">
                  <div class="double-images type-02">
                      <figure>
                          <img class="inner-scale"
                              src="https://images.unsplash.com/photo-1565089200536-d69692d4525e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60">
                      </figure>
                      <figure class="parallax">
                          <img
                              src="https://images.unsplash.com/photo-1589320011103-48e428abcbae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80">
                      </figure>
                  </div>
                  <div class="caption fadeUp">
                      <h2>
                          1977
                      </h2>
                      <p>
                          Our deep roots in automotive sealing systems go back to 1977 when Standard Profil was
                          founded by Rıfat Kamhi in Istanbul on March 10
                      </p>
                  </div>
              </div>
          </section>
      </section>
  </div>
</body>

 -->
