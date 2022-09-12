# Music Events

Music Events is a web app where a user can search and find music events. If authenticated a user can also create new events, update and delete his own created events but not others'. Visit [here](https://music-events-six.vercel.app).

## Tech Stack Used

- Next.js
- TailwindCSS
- GraphQL
- Prisma
- Typescript
- Next-Auth

## Description

Music Events is a fully functional website built with Next.js, TailwindCSS, Prisma, GraphQL, Typescript and Next-Auth. It has a fully functional authentication system with Email/Password and sessions. It is fully responsive and mobile friendly. It also has a fully functional CRUD system for events. It uses GraphQL for the API and Prisma as the database ORM. It uses both server side rendering and static site generation.

### How To Use

1. ```bash
    git clone https://github.com/geovla93/portfolio.git
    ```
2. ```bash 
    npm install
    #or
    yarn
    #or
    pnpm install
    ```
3. ```bash
    npm run dev
    #or
    yarn dev
    #or
    pnpm dev
    ```

### Environment Variables

In order to run the app, you will have to create a .env file at the root of the project with the following variables:
- NEXTAUTH_URL (base url of the app, http://localhost:3000 if tested locally)
- NEXTAUTH_SECRET (secret for next-auth session)
- DATABASE_URL (ex. postgresql://username:password@localhost:5432/postgres)
- CLOUDINARY_CLOUD_NAME (cloudinary cloud name)
- CLOUDINARY_API_KEY (cloudinary api key)
- CLOUDINARY_API_SECRET (cloudinary api secret)
- HOST_URL (same as NEXTAUTH_URL)