# Getting started

1. Go to Github -> Settings -> Developer Settings
2. Under _Personal Access Tokens_ create a fine-grained token
3. Select _Public Repositories (read-only)_ permission
4. _(optional)_ Create a _.env.local_ file, add your token: `NEXT_PUBLIC_GITHUB_TOKEN=<YOUR_GH_TOKEN>`
5. Install dependencies: `npm install`
6. Build & Run the application: `npm run build && npm start`

> **NOTE:** Step 4 ensures 5000 API requests instead of 60 per hour

## Structure

Modularized folder structure, easy to navigate. In some cases, it could be broken into more folders, but it would be an overkill in the current scale.

> **NOTE:** There is no base component at all except for [shadcn](https://ui.shadcn.com/docs/components), so changing a component does not directly impact other components!

```
📦src
┣ 📂app
┃ ┣ 📂(home)
┃ ┃ ┗ 📜page.tsx
┃ ┣ 📂[user_tag]
┃ ┃ ┗ 📂repos
┃ ┃ ┃ ┗ 📜page.tsx
┃ ┣ 📜favicon.ico
┃ ┣ 📜globals.css
┃ ┗ 📜layout.tsx
┣ 📂components
┃ ┣ 📂cards
┃ ┃ ┣ 📜ContributorCard.tsx
┃ ┃ ┗ 📜RepositoryCard.tsx
┃ ┣ 📂common
┃ ┃ ┣ 📜BackButton.tsx
┃ ┃ ┗ 📜InfiniteScrollMessage.tsx
┃ ┣ 📂maps
┃ ┃ ┗ 📜SimpleMap.tsx
┃ ┣ 📂popups
┃ ┃ ┗ 📜UserLocationPopup.tsx
┃ ┗ 📂ui
┃ ┃ ┣ 📜button.tsx
┃ ┃ ┗ 📜popover.tsx
┣ 📂hooks
┃ ┣ 📂api
┃ ┃ ┣ 📜useGetContributorName.ts
┃ ┃ ┣ 📜useInfiniteContributors.ts
┃ ┃ ┗ 📜useInfiniteRepos.ts
┃ ┗ 📂common
┃ ┃ ┣ 📜useIntersectionObserver.ts
┃ ┃ ┗ 📜useMediaQuery.ts
┣ 📂interfaces
┃ ┗ 📂entities
┃ ┃ ┣ 📜IContributor.ts
┃ ┃ ┣ 📜ILocation.ts
┃ ┃ ┣ 📜IRepository.ts
┃ ┃ ┗ 📜IUser.ts
┣ 📂lib
┃ ┣ 📜http.ts
┃ ┗ 📜utils.ts
┣ 📂providers
┃ ┗ 📜ReactQueryClientProvider.tsx
┗ 📂views
┃ ┣ 📜ContributorList.tsx
┃ ┗ 📜RepositoryList.tsx
```

## Solution

Fetching the contributor list does not include the name of the contributor, so for each card we have to fetch the corresponding user object from another source as well. This is NOT optimal, but to work around it a temporary variable is set instead of the name (user's tag).

This makes the change smooth as the viewer scrolls infinitely. No loading states, no excessive waiting.
