---
title: "Thoughts"
date: 2025-05-04
---

# Thoughts

{{ range .Pages | where "Params.draft" "==" false | sort "Title" "asc" }}
- [{{.Title}}]({{.RelPermalink}})
{{ end }}
