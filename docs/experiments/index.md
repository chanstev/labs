---
layout: default
title: Experiments
---

# Experiments

A list of all experiments:

<ul>
{% assign experiment_pages = site.pages | where: "dir", "/experiments/" %}
{% for experiment in experiment_pages %}
  {% if experiment.path != "experiments/index.md" %}
    <li>
      <a href="{{ experiment.url }}">{{ experiment.title }}</a> - {{ experiment.description }}
    </li>
  {% endif %}
{% endfor %}
</ul> 