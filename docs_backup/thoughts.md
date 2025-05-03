---
layout: default
title: Thoughts
---

# Thoughts

Welcome to my thoughts and ideas. Here you'll find my random musings, insights, and explorations.

## All Posts

{% assign thoughts = site.thoughts | sort: 'date' | reverse %}
{% for thought in thoughts %}
  <article class="thought-post">
    <h2><a href="{{ thought.url }}">{{ thought.title }}</a></h2>
    <div class="post-meta">
      <time datetime="{{ thought.date }}">{{ thought.date | date: "%B %d, %Y" }}</time>
      <div class="post-tags">
        {% for tag in thought.tags %}
          <span class="tag">{{ tag }}</span>
        {% endfor %}
      </div>
    </div>
    <p>{{ thought.excerpt }}</p>
    <a href="{{ thought.url }}" class="read-more">Read More</a>
  </article>
{% endfor %}

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