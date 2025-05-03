---
layout: default
title: Thoughts
---

# Thoughts

Welcome to my thoughts and ideas. Here you'll find my random musings, insights, and explorations.

## All Posts

{% assign posts = site.posts | sort: 'date' | reverse %}
{% for post in posts %}
  <article class="thought-post">
    <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    <div class="post-meta">
      <time datetime="{{ post.date }}">{{ post.date | date: "%B %d, %Y" }}</time>
      <div class="post-tags">
        {% for tag in post.tags %}
          <span class="tag">{{ tag }}</span>
        {% endfor %}
      </div>
    </div>
    <p>{{ post.excerpt }}</p>
    <a href="{{ post.url }}" class="read-more">Read More</a>
  </article>
{% endfor %}

## Posts by Tag

{% assign tags = site.tags | sort %}
{% for tag in tags %}
  <h3 id="{{ tag[0] }}">{{ tag[0] }}</h3>
  <ul>
    {% for post in tag[1] %}
      <li><a href="{{ post.url }}">{{ post.title }}</a> ({{ post.date | date: "%B %d, %Y" }})</li>
    {% endfor %}
  </ul>
{% endfor %} 