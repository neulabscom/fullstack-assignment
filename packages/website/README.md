


# Step 1


Every post inside the datasource contains a `userId` of the post's author

User objects published at this URL: `https://jsonplaceholder.typicode.com/users`

Show the `name` and `email` of the author alongside with the other information `inside the posts list`


- *DO NOT* fetch the rest api directly from the client: attach the new datasource to the BFF instead
- *DO NOT* mock data inside the BFF as we did for the posts list: use Apollo rest datasources instead
- Do not change the post list mocked in the bff
- Do not change posts resolver
- Pay no attention to SSR or any other production related stuff, like env variables, etc


# Step 2

Stylize the posts page replicating the UI of `"Ultimi articoli" section` in `https://www.vitavi.it/magazine`

Emotion is considered a plus

`Separate the UI components` into a folder with at least a Post component

author's avatar image with `https://randomuser.me/api/portraits/men/--userId--.jpg`

for the cover use random `https://picsum.photos/`



# Step 3

Apply a `3px red border` to the `triplet of adjacent posts` with the `shortest` possible title length sum

can assume that the list length is at least 3

assignment limit to use `only the for statement` for the algorithm








This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
