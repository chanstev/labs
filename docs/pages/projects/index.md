---
layout: default
title: Projects
---

# Projects

Welcome to my projects page. Here you'll find a list of my featured projects.

## All Projects

{% assign projects = site.projects | sort: 'title' %}
{% for project in projects %}
  <article class="project-card">
    <h2><a href="{{ project.external_url }}">{{ project.title }}</a></h2>
    <p>{{ project.description }}</p>
    <div class="project-tags">
      {% for tag in project.tags %}
        <span class="tag">{{ tag }}</span>
      {% endfor %}
    </div>
  </article>
{% endfor %} 