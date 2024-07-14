---
layout: post
title: "Get busy with abstraction"
date: 2024-06-21 00:55:31 +0530
---

<style>

.centered-image {
	display: block;
	margin: 0 auto;
	max-width: 100%; /* Adjust the width as needed */
	width: 100%;
}

img
{
	max-width: 15%;
}

.image-left, .image-right
{
	margin: 1em 0;
}

@media (min-width: 20em)
{
	.image-left, .image-right
	{
		display: flex;
		align-items: center;
	}

	.image-left img
	{
		margin-right: 1em;
		float: left; /* fallback */
	}

	.image-right img
	{
		order: 1;
		margin-left: 1em;
		float: right; /* fallback */
	}
	
	/* clearfix for fallback */
	.image-left::after,
	.image-right::after
	{
		content: "";
  	display: block;
		clear: both;
	}
}

@media (min-width: 30em)
{
	.image-left img, .image-right img
	{
		flex-shrink: 0;
	}
}

blockquote {
    /* border-left: 7px solid #b83131; */
	font-style: normal;
	color: #343A40;
    background: #E9ECEF;
    margin: 1.5em 0px;
    padding: 1px 10px;
	font-size: 16px;
    /* quotes:"\201C""\201D""\2018""\2019"; */
}

</style>

<img src="/blogs/img/plague_wide.jpg" alt="Image 1" class="centered-image">

'The Plague' is said to be best describing our situation during the time of Covid-19. Whether it comes to reaction from officials
<blockquote>
Please answer me quite frankly. Are you absolutely convinced it’s plague?
</blockquote>
or reaction of general populus
<blockquote>
So they went on strolling about the town as usual and sitting at the tables on cafe terraces. Generally speaking, they did not lack courage, bandied more jokes than lamentations, and made a show of accepting cheerfully unpleasantnesses that obviously could be only passing.
</blockquote>
Apart from this theme of confronting the possibility of ceasing to exist, there are other themes explored through five or six characters. One of the main theme that explored through the narrator (Rieux) on <i>abstraction</i> which I did not understood so well on the first read, but only after when I listned to 'The Partially Examined Life' that it started to make more sense.



<!-- Covid-19 was the best time to read 'The Plague' which said to be  -->


