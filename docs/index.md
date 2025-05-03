---
layout: default
title: Experiments
---

# Experiments

A list of all experiments:

<ul>
{% assign experiment_pages = site.pages | where_exp: "page", "page.path contains 'experiments/' and page.path != 'experiments/index.md'" %}
{% for experiment in experiment_pages %}
  <li>
    <a href="{{ experiment.url }}">{{ experiment.title }}</a> - {{ experiment.description }}
  </li>
{% endfor %}
</ul> 