---
layout: default
title: News
order: 1
permalink: /news/
---

&nbsp;

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
</div>
