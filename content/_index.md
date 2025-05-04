---
title: "Steven's Lab"
---

# Welcome to Steven's Lab

A place for experiments and thoughts.

<style>
  .home-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; }
  .home-card { border: 1px solid #ccc; padding: 10px; border-radius: 5px; background-color: #f9f9f9; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
</style>

## Featured Experiments
<div class="home-grid">
{{ range .Site.RegularPages | where "Section" "experiments" | where "Params.featured" true | where "Params.draft" "==" false | sort "Title" "asc" }}
  <div class="home-card">
    <h2><a href="{{.RelPermalink}}">{{.Title}}</a></h2>
    <p>{{.Description | default "No description provided."}}</p>
  </div>
{{ end }}
</div>

## Featured Thoughts
<div class="home-grid">
{{ range .Site.RegularPages | where "Section" "thoughts" | where "Params.featured" true | where "Params.draft" "==" false | sort "Title" "asc" }}
  <div class="home-card">
    <h2><a href="{{.RelPermalink}}">{{.Title}}</a></h2>
    <p>{{.Description | default "No description provided."}}</p>
  </div>
{{ end }}
</div>
