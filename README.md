# My Interview Test Submission 

![Responsive Web Application](https://savannah-informatics-interview.vercel.app/)

This my interview test submission built with **Next.js** for browsing and discovering movies and TV shows. Powered by the **TMDB API**,  to explore trending, popular, top-rated, and Korean content, with detailed pages for individual movies and TV shows.

## ✨ Features

### 🏠 Dynamic Home Page
- Shows categorized movies and shows

### 🎬 Movie & TV Show Listings Search Page
- A search page that uses url state to search anf filter movies and tv shows.
- This is a protected page to achieve the authentication feature

### 📺 Details Page
- Unified dynamic route (`/details/[type]/[id]`) for movie and TV show details

### ⚡ Performance & UX
- Skeleton loaders for all sections during data fetching
- Infinite looping carousels with autoplay and responsive breakpoints

### 🔌 API Integration
- Fetches data from TMDB via custom **Next.js API routes** (`/api/movies`, `/api/tv`, `/api/details`)
- **Caching** with React Query for optimized performance
- **URL state management** using Nuqs adapter

### 🔐 Authentication
- **Supabase Auth** configured for user authentication

### 🧪 Testing
- **Unit tests** for components using **Cypress**

## 🛠️ Technologies

- **Framework**: Next.js 14 (App Router)
- **Frontend**: React, TypeScript (with `strict` mode), Tailwind CSS, Shadcn UI
- **Data Fetching**: React Query, Axios
- **Carousels**: react-slick
- **Authentication**: Supabase
- **Icons**: Lucide React
- **Testing**: Cypress
- **URL State**: Nuqs adapter
- **Build Tool**: npm
- **Environment**: Node.js 18+

## 📋 Prerequisites

- Node.js: v18 or higher
- pnpm
- TMDB API Key: [Obtain from TMDB](https://www.themoviedb.org/settings/api)

## 🚀 Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/savannah-informatics-interview/saintstream.git
   cd saintstream
2. Install Dependencies:
    ```bash
    pnpm install
3. Set Up Environment Variables:
    ```bash
    pnpm dev
