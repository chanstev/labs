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

## Posts by Tag

{% assign tags = site.thoughts | map: 'tags' | join: ',' | split: ',' | uniq | sort %}
{% for tag in tags %}
  <h3 id="{{ tag }}">{{ tag }}</h3>
  <ul>
    {% for thought in site.thoughts %}
      {% if thought.tags contains tag %}
        <li><a href="{{ thought.url }}">{{ thought.title }}</a> ({{ thought.date | date: "%B %d, %Y" }})</li>
      {% endif %}
    {% endfor %}
  </ul>
{% endfor %} 