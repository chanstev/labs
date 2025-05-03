---
layout: default
title: Experiments
---

# Experiments

Welcome to my experiments page. Here you'll find a list of my featured experiments.

## All Experiments

{% assign experiments = site.experiments | sort: 'title' %}
{% for experiment in experiments %}
  <article class="project-card">
    <h2><a href="{{ experiment.external_url }}">{{ experiment.title }}</a></h2>
    <p>{{ experiment.description }}</p>
    <div class="project-tags">
      {% for tag in experiment.tags %}
        <span class="tag">{{ tag }}</span>
      {% endfor %}
    </div>
  </article>
{% endfor %} 