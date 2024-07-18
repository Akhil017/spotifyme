# Spotify Me

### Overview

Spotify Me is an open-source web application that provides a visual overview of your Spotify account. It allows you to explore your Spotify profile, view your top artists, tracks, and playlists, and gain insights into your listening habits with a sleek and intuitive interface.

### Features

- View your Spotify user profile
- Explore your top artists and tracks
- Browse your playlists

### Preview

![Dashboar screenshot 1](/screenshots/app-screenshot-1.png)
![Dashboar screenshot 2](/screenshots/app-screenshot-2.png)

### Installation

To get started with Spotify Dashboard, follow these steps:

### Prerequisites

Node.js (version 14 or higher)
npm or yarn or pnpm

### Clone the Repository

```bash
git clone https://github.com/your-username/spotify-dashboard.git
cd spotify-dashboard
```

### Install Dependencies

```bash
pnpm install
# or
npm install
# or
yarn install
```

### Set Up Environment Variables

Create a .env file in the root of the project and add your Spotify API credentials:

```bash
AUTH_SPOTIFY_ID="<Your spotify client id>"
AUTH_SPOTIFY_SECRET="<Your spotify client secret>"
AUTH_SECRET="<auth secret for auth.js>"
NEXTAUTH_URL="<redirect uri given in the spotify api dashboard>"
```

### Run the Application

```bash
pnpm run dev
```

Visit http://localhost:3000 in your browser to see the app in action.

### Usage

1. Login with Spotify: Click the "Get Started" button to authenticate with your Spotify account.
2. Explore Your Data: Navigate through the app to view your profile, top artists, tracks, and playlists.

### License

This project is licensed under the MIT License. See the LICENSE file for details.

### Contact

For any questions or feedback, please open an issue on the GitHub repository or contact the project maintainer at akhilmp1721@gmail.com.

### Acknowledgments

- [Spotify API](https://developer.spotify.com/documentation/web-api) for providing access to Spotify data.
- [Next JS](https://nextjs.org/) for the front-end framework and hosting.
- [Shadcn UI](https://ui.shadcn.com/) for the styling framework.
