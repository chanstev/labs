---
layout: default
title: Thoughts
---

# Thoughts

A list of all thoughts:

<ul>
{% assign thought_pages = site.pages | where: "dir", "/thoughts/" %}
{% for thought in thought_pages %}
  {% if thought.path != "thoughts/index.md" %}
    <li>
      <a href="{{ thought.url }}">{{ thought.title }}</a> ({{ thought.date | date: "%B %d, %Y" }})
    </li>
  {% endif %}
{% endfor %}
</ul> 