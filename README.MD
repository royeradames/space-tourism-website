# Space Tourism

The maintained application is the root Next.js project. It preserves the four original entry paths and the official Frontend Mentor content. The historical Angular, React/Apollo and server projects remain below for reference; their packages are not part of the root install or build.

## Run and verify

Use Node24.11.1 or later, then `npm ci` and `npm run dev`. The local app uses port4391. `npm run build` creates the production application; `npm start` serves that build. No environment variables, API, account or database are required.

Run `npm run lint`, `npm run typecheck`, `npm audit --omit=dev` and `npm run build`. `npm test` then starts an owned production server and runs the browser suite in installed Google Chrome, one worker, stopping the server on completion. It covers all content views, stable links/history, unknown routes, keyboard and no-JavaScript navigation, responsive image geometry and reduced motion. Generated screenshots/results stay ignored in `.test-state/`.

## Routes and navigation

- `/` is home.
- `/destination` is Moon. Mars, Europa and Titan have `/destination/<name>` paths.
- `/crew` is Douglas Hurley. The other crew members have their hyphenated full-name child paths.
- `/technology` is Launch vehicle. Spaceport and Space capsule have child paths.

Links are normal document navigation, so every content choice works without JavaScript and survives refresh/back/forward. Unknown selections return404. Default-member child aliases redirect to the original parent paths.

The mobile menu is a native disclosure. Enter or Space toggles it with or without JavaScript. With JavaScript, Escape closes it and restores focus. Character shortcuts are off until enabled in Keyboard help; the device remembers that preference when storage is available. Keyboard help teaches keys1–4 for the four sections and `?` to show help. Browser shortcuts and typing are not intercepted.

All content is static initial HTML. Local fonts and supplied images avoid third-party runtime requests. Technology intentionally uses landscape imagery below1100px and portrait imagery above it. The layouts follow the official home preview and original repository's desktop/tablet/mobile design montage and styles. The available montage is low resolution; no pixel-perfect comparison with unavailable full-resolution designs is claimed.

## Source and licenses

Content and imagery come from [Frontend Mentor's official Space Tourism starter](https://github.com/frontendmentorio/space-tourism-website), revision1e046e6dfd08fbf3cc6a50b3babe9111701d77c1. `reference/official-brief.md` records the brief; `lib/content.json` preserves the supplied words and data. Fonts are Barlow, Barlow Condensed and Bellefair from [Google Fonts](https://github.com/google/fonts), with their OFL licenses beside the local files in `app/fonts/`.

For deployment, use this repository's root as the Next.js project directory. Changing existing hosting settings is a separate release step; this source does not modify old deployments or the historical API.

## Historical implementation record

# Space Tourism

![Space Tourism design file](./readme-assets/design-file.PNG)
![Space Tourism in Desktop](./readme-assets/space-tourism.gif)

## 2 key folders

### Angular

Here is the implementation of the website has an angular static web page.

- URL: https://royer-space-tourism.vercel.app/

### React-front-end

React | Typescript | Apollo GraphQL | SASS | SCSS modules

The React implementation. It depends on the server folder's server to get the data to populate the pages.

- URL: https://react-spacetourism.vercel.app/

### Server

Apollo GraphQL with Postgress database empowers Knex to hold the front-end data.

- URL: https://royer-space-tourism-website.herokuapp.com/

> **Select one of the folders for specific information.**
