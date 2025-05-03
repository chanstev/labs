---
layout: default
title: Steven's Lab
---

# Welcome to Steven's Lab

A space for experiments, thoughts, and innovation.

## Featured Experiments

{% if site.experiments.size > 0 %}
  {% assign experiments = site.experiments | sort: 'date' | reverse | limit:3 %}
  {% for experiment in experiments %}
    <article class="experiment-card">
      <h2><a href="{{ experiment.external_url }}">{{ experiment.title }}</a></h2>
      <p>{{ experiment.description }}</p>
      <div class="experiment-tags">
        {% for tag in experiment.tags %}
          <span class="tag">{{ tag }}</span>
        {% endfor %}
      </div>
    </article>
  {% endfor %}
{% else %}
  <p>No experiments available yet. Check back soon!</p>
{% endif %}

[View all experiments →](/experiments) 