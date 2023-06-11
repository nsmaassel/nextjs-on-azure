# Next.js Server-Side Rendering on Azure

This is a [Next.js](https://nextjs.org/) project demonstrating the use of server-side rendering (SSR) on Azure. 
This project was bootstrapped with  [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)
and follows steps from the [Microsoft Docs tutorial](https://learn.microsoft.com/en-us/azure/static-web-apps/deploy-nextjs-hybrid#add-server-rendered-data)
to deploy a hybrid Next.js website on Azure Static Web Apps.

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

## Server-Side Rendering

To insert server-rendered data into a Next.js page, we exported a special function called `getServerSideProps` 
in `pages/index.ts`. This function serializes a data object on the server and includes it in the props sent to the client. 
The `Home` component receives this server-rendered data and deserializes it for use in the component.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
