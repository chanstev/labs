---
title: "Home"
---

# Welcome to Steven's Lab

A hub for experiments and thoughts.

## Featured Experiments
{{ range .Site.RegularPages | where "Section" "experiments" | where "Params.featured" true | where "Params.draft" false | sort "Title" "asc" }}
- [{{.Title}}]({{.RelPermalink}})
{{ end }}

## Featured Thoughts
{{ range .Site.RegularPages | where "Section" "thoughts" | where "Params.featured" true | where "Params.draft" false | sort "Title" "asc" }}
- [{{.Title}}]({{.RelPermalink}})
{{ end }}
