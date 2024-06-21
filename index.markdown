---
layout: home
---

<script>
    // use a script tag or an external JS file
    document.addEventListener("DOMContentLoaded", (event) => {
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
    });
   
 </script>


<h1 class="text">Hi there!<span>I'm Himanshu</span></h1>
<h1 class="text">I'm a Physicist.<span><a style = "color: #fdfdfd !important;" href = "/about/">broadly speaking!</a></span></h1>
<h1 class="text"> My research lie @ &cap; of <span><a style = "color: #fdfdfd !important;" href="/research/">more specifically?</a></span></h1>
<h1 class="text">quantum many-body,<span>quantum-computing,</span></h1>
<h1 class="text">& information theory.<span><a style = "color: #fdfdfd !important;" href = "/contact/">Let's connect!</a></span></h1>


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


