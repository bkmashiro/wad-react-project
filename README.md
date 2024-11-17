# Assignment 1 - ReactJS app.

Name: Yuzhe Shi

Student ID: 20108862

[a@shiyuzhe.com](mailto:a@shiyuzhe.com)

[20108862@mail.wit.ie](mailto:20108862@mail.wit.ie)

## Overview.

[A brief statement on the content of this repository.]

### Features.

[ A bullet-point list of the __new features__ you added to the Movies Fan app (and any modifications to existing features) .]

- Feature 1
- Feature 2
- Feature 3
- etc
- etc

## Setup requirements.

```bash
# if you don't have pnpm installed, you can install it by running the following command.
npm i -g pnpm

# install dependencies
pnpm install

# start the app
pnpm dev
```

## API endpoints.

[ List the __additional__ TMDB endpoints used, giving the description and pathname for each one.]

- Now Playing Movies - /movie/now_playing
- Similar Movies - /movie/:id/similar

<!-- e.g.

- Discover list of movies - discover/movie
- Movie details - movie/:id
- Movie genres = /genre/movie/list -->

## Routing.

[ List the __new routes__ supported by your app and state the associated page.]

- /movies/nowplaying - Now Playing Movies
- /movies/:id/similar - Similar Movies
- /movies/:id/recommendations - Recommendations
- /movies/:id/credits - Credits

<!-- - /blogs - displays all published blogs.
- /blogs/:id - displays a particular blog.
- /blogs/:id/comments - detail view of a particular blog and its comments.
- etc. -->

[If relevant, state what aspects of your app are protected (i.e. require authentication) and what is public.]

## Independent learning (If relevant).

<!-- Itemize the technologies/techniques you researched independently and adopted in your project,
i.e. aspects not covered in the lectures/labs. Include the source code filenames that illustrate these
(we do not require code excerpts) and provide references to the online resources that helped you (articles/blogs). -->

+ Use `pnpm` as package manager.
  - `pnpm-lock.yaml`
  - ref: [pnpm](https://pnpm.io/)
+ Use TypeScript to enforce type checking.
  - `tsconfig.json` and all `.ts | .tsx` files.
  - ref: [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
  - ref: [My blog post](https://blog.yuzhes.com/posts/typescript/easy-series.html)