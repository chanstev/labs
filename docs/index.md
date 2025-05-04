---
layout: default
title: Experiments
---

<div class="experiments-list">
  <h1>Experiments</h1>
  <div class="experiments-grid">
    {% for experiment in site.experiments %}
      <div class="experiment-card">
        <h2><a href="{{ experiment.url }}">{{ experiment.title }}</a></h2>
        <p>{{ experiment.description }}</p>
        {% if experiment.tags.size > 0 %}
          <div class="tags">
            {% for tag in experiment.tags %}
              <span class="tag">{{ tag }}</span>
            {% endfor %}
          </div>
        {% endif %}
      </div>
    {% endfor %}
  </div>
</div>
