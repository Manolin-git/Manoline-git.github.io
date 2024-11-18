---
title:
layout: default
permalink: /projects/
published: true
---


<div class="article-list">
  {% for project in site.projects %}

  {% if project.redirect %}
    <h4><a href="{{ project.redirect }}" target="_blank">{{project.title}}</a></h4>
    <small>{{project.description}}</small>

  {% else %}
    <h4><a href="{{ project.url | prepend: site.baseurl | prepend: site.url }}">{{project.title}}</a></h4>
    <small>{{project.description}}</small>

  {% endif %}

  {% endfor %}
</div>


