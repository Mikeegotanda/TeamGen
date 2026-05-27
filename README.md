# TeamGen - JRM Team Org Generator

A static GitHub Pages app for building client-facing team org slides.

## Features

- Slide presets: `Pre Construction`, `Construction`, `Corporate Services`, `Introduction`
- Left-side member library with search and department filters
- Drag members onto the canvas to auto-create and auto-space rows
- Drag existing cards to re-order row and hierarchy placement
- Auto connector lines by row/position
- Manual connectors by clicking one card then another
- Style controls for colors, card outline, radius, typography, and background image
- Export to `PNG`, `PDF`, `PPTX`, and static `HTML`
- Prompt-based AI layout generator for one-click starting layouts
- Local autosave in browser (`localStorage`)

## Local Use

Open `index.html` in a browser, or run any simple static server from this folder.

## GitHub Pages Deployment (/TeamGen)

1. Push these files to your `TeamGen` repository root:
- `index.html`
- `styles.css`
- `app.js`

2. In GitHub:
- Go to `Settings` -> `Pages`
- Set Source to `Deploy from a branch`
- Choose branch `main` and folder `/ (root)`

3. Your site URL will be:
- `https://<your-org-or-user>.github.io/TeamGen/`

## Notes

- Export libraries are loaded via CDN, so internet access is needed for export buttons.
- Individual people photos can be added via `Add Team Member` in the left panel.
