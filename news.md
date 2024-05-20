---
layout: default
title: News
order: 1
permalink: /news/
---


<style>

body {
	overflow-x: hidden;
	-webkit-font-smoothing: antialiased;
	margin: 0;
}

.flex {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-justify-content: flex-start;
	justify-content: flex-start;
}

.slider-wrapper div {
	position: relative;
}

.slider-wrapper {
	margin-top: 5vw;
	margin-left: 5vw;
}

.slide-image {
  /* width: 24vw; */
	height: 12vw;
}

.slide-image img {
	width: 60vw;
	cursor: pointer;
}

.slide-content {
	width: 50vw;
	color: #6c757d;
	padding: 3vw 18vw 3vw 9vw;
}

.slide-date {
	color: #6c757d;
	font-size: 1.1vw;
	font-weight: 400;
	letter-spacing: 0.1vw;
	padding-bottom: 1.4vw;
}

.slide-title {
	font-size: 1.2vw;
	font-weight: 400;
	letter-spacing: 0.1vw;
	line-height: 1.55vw;
	padding-bottom: 1.8vw;
}

.slide-text {
	font-size: 0.80vw;
	line-height: 1.2vw;
	opacity: 0.8;
	padding-bottom: 4vw;
}

.slide-more {
	font-weight: 400;
	letter-spacing: 0.1vw;
	float: left;
	font-size: 0.9vw;
}

.slide-bullet {
	width: 0.5vw;
	height: 0.5vw;
	background-color: #6c757d;
	border-radius: 200%;
	position: relative;
	margin-left: 1.2vw;
}

.slide-nav {
	margin-left: 64vw;
	margin-top: -5.5vw;
}

div.overlay-blue {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	transition: 0.5s ease all;
}

/* div.overlay-blue:hover {
	background-color: rgba(206, 212, 218, 0.5); 
} */

.arrows {
	width: 3.5vw;
	margin-top: -5.8vw;
	margin-left: 72vw;
	position: relative;
}

.arrow {
	display: inline-block;
	position: absolute;
	width: 1.2vw;
	height: 1.2vw;
	background: transparent;
	text-indent: -9999px;
	border-top: 0.15vw solid #6c757d;
	border-left: 0.15vw solid #6c757d;
	transition: all .1s ease-in-out;
	text-decoration: none;
	color: transparent;
}

.arrow:hover {
	border-color: #0A8ACB;
	border-width: 0.25vw;
}

.arrow:before {
	display: block;
	height: 200%;
	width: 200%;
	margin-left: -50%;
	margin-top: -50%;
	content: "";
	transform: rotate(45deg);
}

.arrow.prev {
	transform: rotate(-45deg);
	left: 0;
}

.arrow.next {
	transform: rotate(135deg);
	right: 0;
}
</style>

<script src="/manoline-git.github.io/JS/slider.js"></script>

<!-- 
<div class="post-list">
  {%- if site.posts.size > 0 -%}
  <h2 class="post-list-heading" style="font-size: 24px !important">{{ page.list_title | default: "Recent News" }}</h2>
  <ul class="post-list">
    {%- for post in site.posts -%}
    <li>
      {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y"
      -%}
      <span class="post-meta">{{ post.date | date: date_format }}</span>
      <h3>
        <div class="effect-one">
          <a
            class="post-link"
            href="{{ post.url | relative_url }}"
            style="font-size: 18px !important"
          >
            {{ post.title | escape }}
          </a>
        </div>
      </h3>
      {%- if site.show_excerpts -%} {{ post.excerpt }} {%- endif -%}
    </li>
    {%- endfor -%}
  </ul>
  {%- endif -%}
</div> -->

<h2 class="post-list-heading" style="font-size: 24px !important">Recent News</h2>

<div class="slider">
<div class="slider-wrapper flex">
	<div class="slide flex">
		<div class="slide-image slider-link prev"><img src="/manoline-git.github.io/img/non local.svg" alt="Book Cover"><div class="overlay"></div></div>
		<div class="slide-content">
			<div class="slide-date">11.03.2024</div>
			<div class="slide-title">New paper out in the Physical Review D</div>
			<div class="slide-text">My paper titled '<a href="https://doi.org/10.1103/PhysRevD.109.066010">Krylov complexity for non-local spin chains</a>' is officially published in the Physics Review D (also available at <a href="https://arxiv.org/abs/2312.11677">arXiv</a>). </div>
			<div class="slide-more"><a
            href="/manoline-git.github.io/publication/update/2024/03/11/New-paper-out-in-the-Physics-Review-D.html"
          >READ MORE</a></div>
		</div>
  </div>	
	<div class="slide flex">
		<div class="slide-image slider-link next"><img src="/manoline-git.github.io/img/Circuit Complexity.svg" alt="Studio Ghibli"><div class="overlay"></div></div>
		<div class="slide-content">
			<div class="slide-date">20.02.2024</div>
			<div class="slide-title">New paper out in the Physical Review A</div>
			<div class="slide-text">My paper titled '<a href="https://doi.org/10.1103/PhysRevA.109.022223">Complexity for one-dimensional discrete-time quantum walk circuits</a>' is officially published in the Physics Review A (also available at <a href="https://doi.org/10.48550/arXiv.2307.13450">arXiv</a>). </div>
			<div class="slide-more"><a
            href="/manoline-git.github.io/publication/update/2024/02/20/New-paper-out-in-the-Physics-Review-A!.html"
          >READ MORE</a></div>
	  </div>
  </div>	
  	<div class="slide flex">
		<div class="slide-image slider-link next"><img src="/manoline-git.github.io/img/graph.jpg" alt="Studio Ghibli"><div class="overlay"></div></div>
		<div class="slide-content">
			<div class="slide-date">02.02.2024</div>
			<div class="slide-title">New paper out in the Scientific Reports</div>
			<div class="slide-text">My paper titled '<a href = "https://www.nature.com/articles/s41598-024-51709-0">Quantum-walk search in motion</a>' is officially published in the Scientific Reports and available in Open acess.</div>
			<div class="slide-more"><a
            href="/manoline-git.github.io/publication/update/2024/02/02/New-paper-out-in-the-Scientific-Reports!.html"
          >READ MORE</a></div>
	  </div>
  </div>
  <div class="slide flex">
		<div class="slide-image slider-link next"><img src="/manoline-git.github.io/img/QIF.svg" alt="Studio Ghibli"><div class="overlay"></div></div>
		<div class="slide-content">
			<div class="slide-date">02.01.2024</div>
			<div class="slide-title">New paper out in the Quantum Information Processing</div>
			<div class="slide-text">My paper titled ''<a href="https://doi.org/10.1007/s11128-023-04222-8">Open system approach to neutrino oscillations in a quantum walk framework</a>' is officially published in the Quantum Information Processing (also available at <a href="https://doi.org/10.48550/arXiv.2305.13923">arXiv</a>).</div>
			<div class="slide-more"><a
            href="/manoline-git.github.io/publication/update/2024/01/02/New-paper-out-in-the-Quantum-Information-Processing!.html"
          >READ MORE</a></div>
	  </div>
  </div>	
	<!-- <div class="slide flex">
		<div class="slide-image slider-link next"><img src="https://goranvrban.com/codepen/img5.jpg"><div class="overlay"></div></div>
		<div class="slide-content">
			<div class="slide-date">30.09.2017.</div>
			<div class="slide-title">LOREM IPSUM DOLOR SITE MATE, AD EST ABHORREANT</div>
			<div class="slide-text">Lorem ipsum dolor sit amet, ad est abhorreant efficiantur, vero oporteat apeirian in vel. Et appareat electram appellantur est. Ei nec duis invenire. Cu mel ipsum laoreet, per rebum omittam ex. </div>
			<div class="slide-more">READ MORE</div>
		</div>	
	</div>
		<div class="slide flex">
		<div class="slide-image slider-link next"><img src="https://goranvrban.com/codepen/img6.jpg"><div class="overlay"></div></div>
		<div class="slide-content">
			<div class="slide-date">30.10.2017.</div>
			<div class="slide-title">LOREM IPSUM DOLOR SITE MATE, AD EST ABHORREANT</div>
			<div class="slide-text">Lorem ipsum dolor sit amet, ad est abhorreant efficiantur, vero oporteat apeirian in vel. Et appareat electram appellantur est. Ei nec duis invenire. Cu mel ipsum laoreet, per rebum omittam ex. </div>
			<div class="slide-more">READ MORE</div>
		</div>	
	</div> -->
</div>
<div class="arrows">
<a href="#" title="Previous" class="arrow slider-link prev"></a>
<a href="#" title="Next" class="arrow slider-link next"></a>
</div>
</div>

&nbsp;
&nbsp;

&nbsp;
&nbsp;