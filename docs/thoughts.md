---
layout: default
title: Thoughts
---

# Thoughts

A collection of ideas, insights, and reflections on technology and innovation.

<div class="thoughts-container">
  <div class="thoughts-list">
    <h2>Recent Thoughts</h2>
    <ul>
    {% assign thoughts = site.thoughts | sort: 'date' | reverse %}
    {% for thought in thoughts %}
      {% unless thought.title == 'Index' or thought.basename == 'index' %}
        <li class="thought-post">
          <a href="{{ thought.url }}">{{ thought.title }}</a>
          <span class="thought-date">({{ thought.date | date: "%B %d, %Y" }})</span>
        </li>
      {% endunless %}
    {% endfor %}
    </ul>
  </div>

  <div class="thoughts-tags">
    <h2>Browse by Tag</h2>
    {% assign tags = site.thoughts | map: 'tags' | join: ',' | split: ',' | uniq | sort %}
    {% for tag in tags %}
      <div class="tag-section">
        <h3 id="{{ tag }}">{{ tag }}</h3>
        <ul>
          {% for thought in site.thoughts %}
            {% if thought.tags contains tag %}
              <li><a href="{{ thought.url }}">{{ thought.title }}</a></li>
            {% endif %}
          {% endfor %}
        </ul>
      </div>
    {% endfor %}
  </div>
</div> 