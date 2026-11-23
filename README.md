# Lumio Games website

Plain static site: HTML + CSS + a little JS. No build step. Upload the whole folder to any web host.

```
index.html                 home: game collection, about, contact
games/<game>.html          one detail page per game
assets/css/style.css       shared styles (each game page overrides --accent colours in a <style> block)
assets/js/main.js          screenshot lightbox
assets/games/<game>/       images and video per game
```

## Preview locally

    python -m http.server 8080      then open http://localhost:8080

## Add a game

1. Make `assets/games/<new-game>/` and put screenshots in it (16:9 JPG, ~1600 px wide).
2. Copy `games/legal-football.html` to `games/<new-game>.html` and change the text, colours and images.
3. In `index.html`, copy a `<a class="game-card">` block, point it at the new page and swap the image.

## Where the media came from (first version)

- Neon Velocity: stills and the 12 s trailer loop are cut from `RetroGame/renders/neon-velocity-1080p60.mp4`;
  world and car images are copied from `RetroGame/public/store/`.
- Legal Football 1: no in-game screenshots yet; the card and page header use a plain green placeholder.
  Put real screenshots in `assets/games/legal-football/` when you have them.
