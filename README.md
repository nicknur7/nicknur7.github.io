# nick-site

Personal site for Nick Nuraliyev — AI builder.

- **Stack:** plain static HTML/CSS/JS. No build step, no dependencies.
- **Design:** clean modern, builder-first. One accent color, system + Inter/JetBrains Mono fonts.
- **Hosting:** GitHub Pages. For a root-domain URL (`nicknur7.github.io`), deploy to a repo named
  `nicknur7.github.io`. A custom domain can be added later via a `CNAME` file + DNS.

## Sections
Hero → Selected work (the system) → Case study → Thesis → About → Contact.

## Open items before/after launch
- [ ] Decide whether to name the system ("Core") publicly — currently described generically.
- [ ] Add LinkedIn button once the profile is public (placeholder commented in `index.html` contact block).
- [ ] Optional: custom domain (add `CNAME`, point DNS).
- [ ] Add OG image for nicer link previews.

## Local preview
Open `index.html` directly in a browser, or serve the folder:
`python3 -m http.server` then visit `http://localhost:8000`.
