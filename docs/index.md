---
layout: default
title: Experiments
---

# Experiments

<ul>
{% assign experiments = site.experiments | sort: 'date' | reverse %}
{% for experiment in experiments %}
  {% unless experiment.title == 'Index' or experiment.basename == 'index' %}
    <li>
      <a href="{{ experiment.url }}">{{ experiment.title }}</a> - {{ experiment.description }}
    </li>
  {% endunless %}
{% endfor %}
</ul> 