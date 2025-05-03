---
layout: default
title: Experiments
---

# Experiments

A list of all experiments:

<ul>
{% assign experiments = site.experiments | sort: 'date' | reverse %}
{% for experiment in experiments %}
  <li>
    <a href="{{ experiment.url }}">{{ experiment.title }}</a> - {{ experiment.description }}
  </li>
{% endfor %}
</ul> 