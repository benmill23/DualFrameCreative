# Bug log

This file lists the bugs found in this project and their fixes.

Add each new entry above the older entries. Use this format:

## YYYY-MM-DD — short title

- Symptom: what the user or the test saw
- Root cause: why the bug happened
- Fix: what you changed
- Files: the files you changed

## 2026-10-31 — Pages scroll sideways on narrow phones

- Symptom: at 320px and 360px wide, all six pages scrolled sideways by 21–61px. On Contact at 320px, the form card was 316px wide in a 280px space.
- Root cause: grid items use `min-width: auto`, so a column cannot shrink below its widest content. In the footer, the email link "hello@dualframecreative.com" set the width of a half-width column. On Contact, the service `<select>` kept the width of its longest option.
- Fix: below 400px the footer uses one column. `.contact-grid > *` gets `min-width: 0`. Checked: no sideways scroll on any page at 320, 360, 390, 430, 768, 1024, and 1440px.
- Files: `site.css`

## 2026-10-31 — Contact email breaks inside the word on phones

- Symptom: on Contact at 390px, the "Email us directly" card showed "hello@dualframecreative.c" on one line and "om" on the next.
- Root cause: `.big-link` used `word-break: break-word` at a minimum size of 20px. The address did not fit the card, so the browser broke it at any letter.
- Fix: added `<wbr>` after the `@`, changed to `overflow-wrap: break-word`, and set the size to `clamp(18px, 5.4vw, 24px)`. Checked: the address breaks only after the `@` from 320px to 430px, and stays on one line from 768px up.
- Files: `contact.html`, `site.css`

## 2026-10-31 — Invisible text on purple and black testimonial cards

- Symptom: on Testimonials, the HLTHi avatar was an empty white circle. The play triangles on purple and black cards were pale lilac or grey on a white dot. The same fault showed on the Tiply proof card on Services.
- Root cause: `.on-purple span` and `.on-black span` set a light text colour on every span in the card. `.play-dot` set no colour of its own, so it took the light colour. `.t-card.on-purple .cite span` also matched `.initials` and made the "H" white on white.
- Fix: `.clip .play-dot` now sets `color: var(--black)`. The cite rule now targets `.cite div span` only. Checked: all play icons and initials compute to `#0b0b0f`.
- Files: `site.css`
