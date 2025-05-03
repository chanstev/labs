---
layout: default
title: Thoughts
---

# Thoughts

A list of all thoughts:

<ul>
{% assign thoughts = site.thoughts | sort: 'date' | reverse %}
{% for thought in thoughts %}
  <li>
    <a href="{{ thought.url }}">{{ thought.title }}</a> ({{ thought.date | date: "%B %d, %Y" }})
  </li>
{% endfor %}
</ul> 