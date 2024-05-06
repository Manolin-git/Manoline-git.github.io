---
layout: home
---

<script>
gsap.registerPlugin(ScrollTrigger);

const textElements = gsap.utils.toArray('.text');

textElements.forEach(text => {
  gsap.to(text, {
    backgroundSize: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: text,
      start: 'center 80%',
      end: 'center 20%',
      scrub: true,
    },
  });
});

</script>


<h1 class="text">Hi there!<span>I'm Himanshu</span></h1>
<h1 class="text">I'm a Physicist.<span>Exploring the ideas</span></h1>
<h1 class="text">@ the &cap; between<span>quantum many-body</span></h1>
<h1 class="text">quantum-computing<span>& information theory.</span></h1>
<h1 class="text">to know more<span><a style = "color: #fdfdfd !important;" href="/Manoline-git.github.io/about/">click here</a></span></h1>


<!-- <a href="https://stacksorted.com/text-effects/minh-pham" target="_blank">SOURCE</a> -->

<!-- <div id="sentence-wrapper">
                <h5 class="sentence">
                    <span>I transform</span>
                    <span> coffee </span>
                    <span>into</span>
                    <div class="words words-1">
                        <span>idea</span>
                        <span>happiness</span>
                        <span>article</span>
                        <span>answer</span>
                        <span>learning</span>
                        <span>website</span>
                    </div>
                </h5>
</div>

&nbsp; -->


<!-- 

<div class="image-container">
    <img src="/Manoline-git.github.io/img/img.jpg" alt="Image" />
    <p class="text-content">
            I am a physicist broadly interested in the ideas at the intersection between condensed matter theory, quantum computing, and information theory.
            A significant fraction of my research is naturally devoted to the development and use of quantum algorithms and simulations.
            I'm also interested in studying quantum information scrambling in many-body systems.
    </p>
</div>

&nbsp; -->
