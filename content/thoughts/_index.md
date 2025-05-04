---
title: "Thoughts"
---
# Thoughts
{{ range .Pages | where "Params.draft" false | sort "Title" "asc" }}
- [{{.Title}}]({{.RelPermalink}})
{{ end }}
