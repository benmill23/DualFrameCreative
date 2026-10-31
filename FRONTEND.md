# Frontend context

This file holds the UI patterns for this project.

## Stack

- Six static HTML pages in the root: `index.html`, `work.html`, `services.html`, `about.html`, `testimonials.html`, `contact.html`. Vercel serves them as static files. There is no build step and no framework.
- One shared stylesheet: `site.css`. One shared script: `site.js`, loaded with `defer`.
- One font: Archivo from Google Fonts (weight 400–900, width 62–125%). Headings use width 112%.
- Short posters: `shorts/<youtube-id>.jpg`, 540x960 copies of the YouTube Shorts thumbnails.
- Brand logos: `brands/<name>.jpg`, cut from `sponsors.png`. Each logo sits on its own dark ground (`--logo-bg`) and uses `mix-blend-mode: lighten`.
- No component library and no dependencies.

## Component conventions

- Each page repeats the same header, phone menu, footer, and player dialog markup. When you change one of them, change it on all six pages.
- Each page keeps its own `<head>`: title, meta, Open Graph, canonical, and JSON-LD. Do not remove these when you edit a page.
- Tokens live in `:root` at the top of `site.css`. Use the tokens, not new hex values.
- Colour blocks use `.on-purple`, `.on-black`, `.on-green`, `.on-lilac`, `.bg-paper`, `.bg-lilac`, `.bg-black`. Add `.dots` for the dot pattern on purple, black, or green.
- Every script feature works without the script: a clip is a plain link to YouTube, and the form posts to formsubmit.

## State management

- There is no state library. `site.js` holds three small parts: the phone menu, the clip player dialog, and the form confirmation.
- The contact form posts to `https://formsubmit.co/hello@dualframecreative.com`. Formsubmit redirects to `contact.html?submitted=true`, and `site.js` then shows the confirmation.

## Known patterns

- **Look**: white ground, black 2px borders (`--line`), 20px radius on cards, one purple `#5b2fd6`, one green `#0c7a4d`. No neon, no gradients except the dot pattern.
- **Lift** (`.lift`, all pages): on hover a card moves up and left and shows a hard black shadow. Buttons do the same.
- **Clip** (`.clip`, all pages): a 9:16 poster link with a play dot. `data-yt="<id>"` makes `site.js` play it in the `#player` dialog.
- **Page hero** (`.page-hero`, inner pages): each page has its own colour (Work black, Services purple, About white, Testimonials lilac, Contact green).
- **Ticker** (`.ticker`): a scrolling band of words with sparkle marks. `.purple-band` makes it purple.
- **Stats** (`.stats`, `.stats.three`): bordered cells, each can take an `.on-*` colour.
- **Bento** (`.bento` + `.tile-*`, `index.html`): the services as tiles of different sizes and colours.
- **Chapter** (`.chapter`, `work.html`): client name, goal card, a `.reel` of clips, and `.result` boxes. The reel scrolls sideways on phones.
- **Service row** (`.svc`, `services.html`): a sticky side with the name, a "What's included" card, and one proof card.
- **Frames** (`.frames`, Home and About): the founder photo with a coloured frame offset behind it.
- **CTA box** (`.cta-box`, all pages except Contact): green by default, `.purple` or `.black` for variation, with a circle in the corner.
- **Phone menu** (`.menu-btn` + `#menu`): below 760px. Escape closes it and returns focus to the button.
- **Motion**: the lift on hover and the ticker only. `prefers-reduced-motion` turns both off.
