---
title: "Thoughts"
date: 2025-05-04
---

# Thoughts

<style>
.thought-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; }
.thought-card { border: 1px solid #ccc; padding: 10px; border-radius: 5px; background-color: #f9f9f9; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
</style>

<div class="thought-grid">
{{ range .Pages }}
  <div class="thought-card">
    <h2><a href="{{.RelPermalink}}">{{.Title}}</a></h2>
    <p>{{.Description | default "No description provided."}}</p>
  </div>
{{ end }}
</div>
