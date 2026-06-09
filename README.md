# Social Blog

Social Blog is a responsive social blogging platform built with Next.js, Prisma, Clerk, and Tailwind CSS. It supports post creation with images, likes, comments, profiles, follow relationships, notifications, and a polished dark UI designed for desktop and mobile.

## Table of Contents

- [Social Blog](#social-blog)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [User Experience](#user-experience)
  - [Design](#design)
  - [Features](#features)
  - [Screenshots](#screenshots)
    - [Responsive Design](#responsive-design)
    - [Home Page](#home-page)
    - [Notifications Page](#notifications-page)
    - [Profile Page - Posts View](#profile-page---posts-view)
    - [Profile Page - Unfollow Profile State](#profile-page---unfollow-profile-state)
    - [404 Page](#404-page)
  - [Technologies](#technologies)
    - [Core](#core)
    - [UI and Styling](#ui-and-styling)
    - [Authentication and Utilities](#authentication-and-utilities)
  - [Testing](#testing)
  - [Project Setup](#project-setup)
  - [Deployment](#deployment)
  - [Environment Variables](#environment-variables)
  - [Credits](#credits)

## Project Overview

This project is a full-stack social blogging app where users can sign in, create posts, upload images, follow other users, like posts, comment on content, and manage their own profile. It uses a modern app-router architecture with server actions and Prisma for data access.

The application is structured around a clean feed layout, a profile experience with editable user details, and a notifications page that surfaces follows, likes, and comments.

Live site: https://social-blog-app-indol.vercel.app/

## User Experience

The interface is built to feel consistent across screen sizes. On desktop, the app uses a two-column layout with a sidebar and feed. On smaller screens, the layout collapses into a mobile-friendly view while keeping navigation accessible.

The main user journeys are:

- Sign in or sign up using Clerk.
- Create a post and attach an image.
- Browse the feed and interact with posts through likes and comments.
- Follow and unfollow users.
- Edit profile details such as name, bio, location, and website.
- View notifications for activity on the account.

## Design

The visual direction is a dark, high-contrast social interface with subtle borders, rounded cards, and restrained accent colors. The layout emphasizes content readability while still showing profile context and navigation clearly.

The `amiresponsive.png` screenshot shows the app rendered across desktop, tablet, and mobile layouts, confirming that the interface adapts well to different device sizes.

## Features

- Authentication with Clerk.
- Home feed with posts displayed as cards.
- Post composer with image upload.
- Like and comment interactions.
- User profiles with follower and following counts.
- Follow and unfollow actions.
- Editable profile fields including bio, location, and website.
- Notifications for follows, likes, and comments.
- Responsive navigation for desktop and mobile.
- Custom 404 page with a link back to the home page.

## Screenshots

### Responsive Design

![Responsive design preview showing the app on desktop, tablet, and mobile layouts](assets/amiresponsive.png)

### Home Page

![Home page showing the main feed, profile card, and post composer](assets/screencapture-social-blog-app-indol-vercel-app-2026-06-09-11_43_35.png)

### Notifications Page

![Notifications page showing follow, like, and comment activity](assets/screencapture-social-blog-app-indol-vercel-app-notifications-2026-06-09-11_44_02.png)

### Profile Page - Posts View

![Profile page showing the posts tab with the user's feed and profile summary](assets/screencapture-social-blog-app-indol-vercel-app-profile-sergiykochenko-2026-06-09-11_44_29.png)

### Profile Page - Unfollow Profile State

![Profile page showing the edit profile button and profile details layout](assets/screencapture-social-blog-app-indol-vercel-app-profile-sergiy-kochenko-2026-06-09-11_45_22.png)

### 404 Page

![404 page showing the custom not found message and return link](assets/screencapture-social-blog-app-indol-vercel-app-profile-sergiykochenkor-2026-06-09-11_46_17.png)

## Technologies

### Core

- Next.js 14
- React 18
- TypeScript
- Prisma
- PostgreSQL / Neon

### UI and Styling

- Tailwind CSS
- shadcn/ui
- Radix UI
- Lucide React icons
- next-themes

### Authentication and Utilities

- Clerk
- date-fns
- react-hot-toast

## Testing

This project does not currently include a dedicated automated test suite in the repository.

## Manual Testing

The following checks were completed during development:

| Feature | Expected Result | Actual Result | Status |
| --- | --- | --- | --- |
| Home feed loads | Posts display correctly in the main feed | Posts loaded correctly | Pass |
| Profile editing | User can update profile details | Profile updates saved successfully | Pass |
| Follow and unfollow | Button updates follow state correctly | Follow state changed as expected | Pass |
| Notifications | Recent activity appears in the notifications page | Notifications rendered correctly | Pass |
| Responsive layout | Layout adapts across desktop, tablet, and mobile | Responsive views displayed correctly | Pass |

## Project Setup

The project was created with Next.js 14 and then extended with the dependencies below.

```bash
npx create-next-app@14.2.15 .
npm install @clerk/nextjs@6.36.10 --legacy-peer-deps
npm install swr@1.3.0 --legacy-peer-deps
npx shadcn@latest init
npm install clsx tailwind-merge class-variance-authority lucide-react tailwindcss-animate
npx shadcn@latest add button
npm install next-themes
npx shadcn@latest add sheet
npm i prisma --save-dev
npm i @prisma/client
npx prisma init
npx prisma db push
npx prisma generate
npm install @prisma/adapter-pg
npm install @prisma/adapter-neon
npx shadcn@latest add card
npx shadcn@latest add avatar
npx shadcn@latest add separator
npx shadcn@latest add textarea
npm install react-hot-toast
npm i date-fns
npx shadcn@latest add alert-dialog
npm install @radix-ui/react-scroll-area
npx shadcn@latest add skeleton
npx shadcn@latest add scroll-area
npm install @radix-ui/react-tabs
npm install @radix-ui/react-label
npx shadcn@latest add dialog tabs input label
npm install uploadthing @uploadthing/react
```

If you want to recreate the app from scratch, run the commands above in order before starting the dev server.

## Deployment

The app is deployed on Vercel at https://social-blog-app-indol.vercel.app/.

### Deploying to Vercel

Vercel is the recommended hosting platform for this project because it is optimized for Next.js applications and supports automatic deployments from GitHub.

To deploy the project:

1. Push the latest code to your GitHub repository.
2. Sign in to https://vercel.com/ and click **Add New...** > **Project**.
3. Import the `social_blog_app` repository from GitHub.
4. Keep the default Next.js framework settings.
5. Add the required environment variables in the Vercel project settings:

```env
DATABASE_URL="your_database_url"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
CLERK_SECRET_KEY="your_clerk_secret_key"
```

6. Make sure your Prisma database is available and the schema has been applied with:

```bash
npx prisma generate
npx prisma db push
```

7. Click **Deploy**.
8. After deployment, Vercel will provide a production URL for the live app.

### Local Development

To run the project locally:

```bash
npm install
npx prisma generate
npx prisma db push
npm run dev
```

To build and start production locally:

```bash
npm run build
npm run start
```

## Environment Variables

Create a `.env` file in the project root and add the values required by your database and Clerk integration.

```env
DATABASE_URL="postgresql://username:password@host:5432/dbname"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
CLERK_SECRET_KEY="your_clerk_secret_key"
```

If you are using Prisma with Neon or Postgres adapters, make sure the database connection details match the deployment target.

## Credits

- Built by Sergiy Kochenko.
- UI components powered by shadcn/ui and Radix UI.
- Authentication handled by Clerk.
- Images in this README come from the screenshots stored in the `assets` folder.
