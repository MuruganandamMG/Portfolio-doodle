# Portfolio starter

A four-page React portfolio with an animated hero, experience timeline, skills chart and certificate carousel, project gallery, and contact page.

## Run locally

Use Node.js 20.19+ or 22.12+.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

Vite writes the production site to `dist/`. Configure the host to serve `index.html` for application routes. The included Netlify rewrite handles this on Netlify.

## Add your content

Edit `src/content.js`. The starter hides links with empty destinations and shows empty states for sections that have no entries.

| Field | Entry format |
| --- | --- |
| `profile` | Name, role, short bio, résumé path, GitHub and LinkedIn URLs, email address, phone number |
| `experience` | `{ title, organization, date, description, education }`. Set `education` to true for education entries. |
| `skills` | `{ label, rating, src }`. Use a rating from 0 to 100. The icon path is optional. |
| `projects` | `{ label, imgSrc, description, src, githubSrc, stack }`. Set `src` to the demo URL and `stack` to an array of technology names. |
| `certificates` | `{ label, src, href }`. Use a certificate image path and credential URL. |

Store public images and the public version of your résumé under `public/static/`. Set the page title and description in `index.html`.

## Attribution

The original MIT license and copyright notice are in `LICENSE`.
