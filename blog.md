---
layout: default
title: Blog
order: 4
# permalink: /blog/
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
	margin-left: 11vw;
}

.slide-image {
	height: 24vw;
}

.slide-image img {
	width: 24vw;
	cursor: pointer;
}

.slide-content {
	width: 40vw;
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

<script src="/JS/slider.js"></script>

<h2 class="post-list-heading" style="font-size: 24px !important">Blogs</h2>

<div class="slider">
<div class="slider-wrapper flex">
	<div class="slide flex">
		<div class="slide-image slider-link next"><img src="/blogs/img/Cat.jpg" alt="Studio Ghibli"><div class="overlay"></div></div>
		<div class="slide-content">
			<div class="slide-date">To be uploaded</div>
			<div class="slide-title">Cat's Universe</div>
			<div class="slide-text"> </div>
			<div class="slide-more"><a
            href="/blogs/Cats_Universe.html"
          >READ MORE</a></div>
		</div>	
	</div>	
	<div class="slide flex">
		<div class="slide-image slider-link prev"><img src="/blogs/img/Peter Camenzind.jpg" alt="Book Cover"><div class="overlay"></div></div>
		<div class="slide-content">
			<div class="slide-date">25.04.2024</div>
			<div class="slide-title">On Peter Camenzind - Novel by Hermann Hesse</div>
			<div class="slide-text">Recently, I read Hesse's Peter Camenzind -- my fourth read from Hesse. It surely left a quite different impression than some of his other works.. </div>
			<div class="slide-more"><a
            href="/blogs/Peter_Camenzind.html"
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



<!-- 
<div class="post-list">
  <h2 class="post-list-heading" style="font-size: 24px !important">Blogs</h2>
  <ul class="post-list">
    <li>
      <span class="post-meta">2024-04-25</span>
      <h3>
        <div class="effect-seven">
          <a
            href="/blogs/Peter_Camenzind.html"
            style="font-size: 18px !important"
          >On Peter Camenzind - Novel by Hermann Hesse</a>
        </div>
      </h3>
    </li>
        <li>
      <span class="post-meta">2024-05-07</span>
      <h3>
        <div class="effect-seven">
          <a
            href="//blogs/Cats_Universe.html"
            style="font-size: 18px !important"
          >Cat's Universe</a>
        </div>
      </h3>
    </li>
  </ul>
</div> -->