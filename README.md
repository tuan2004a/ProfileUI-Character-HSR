# ProfileUI-Character-GI

A web application for viewing Genshin Impact character banners and detailed character information. This project provides an intuitive user interface to explore game characters, including banner images, keywords, skill statistics, and other information.

## ✨ Main Features

- Display Genshin Impact character banners with beautiful interface
- View detailed character information (skills, stats, biography)
- Search characters by keywords
- Display character artwork and chibi images
- User-friendly and responsive interface

## 🛠️ Technologies Used

### Front-end
- **Next.js**: Modern React framework for web application development
- **Axios**: HTTP client library for API calls
- **GSAP**: Powerful animation library for motion effects
- **Swiper**: Slider/carousel library for banner and image display
- **TailwindCSS**: Utility-first CSS framework for interface design
- **TypeScript**: Statically typed JavaScript programming language

### Back-end
- **JSON Server**: Simple mock API server for serving character data

## 💻 System Requirements

- **Node.js**: Version 18.0.0 or higher
- **pnpm**: Package manager
- **Modern web browser**: Chrome, Firefox, Safari, Edge (latest versions)
- **Internet connection**: For downloading dependencies and resources

## 📥 Installation Guide

1. **Clone the project**
   ```bash
   git clone <repository-url>
   cd ProfileUI-Character-HSR
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

## 🚀 Running the Project

1. **Start JSON Server (Back-end)**
   ```bash
   pnpm json
   ```
   JSON Server will run at: http://localhost:3001

2. **Start Next.js application (Front-end)**
   ```bash
   pnpm dev
   ```
   Application will run at: http://localhost:3000

3. **Open browser and access**
   
   Open your web browser and navigate to: http://localhost:3000

## 🏗️ Building for Production

```bash
pnpm build
pnpm start
```

## 📁 Project Structure

- `/app`: Contains Next.js application pages and layouts
- `/components`: React components used in the application
- `/config`: Application configuration (like axios instance)
- `/context`: React Context API for state management
- `/db`: JSON data for JSON Server
- `/public`: Static resources (images, fonts)
- `/service`: Services for API calls
- `/store`: State management (Redux)
- `/types`: TypeScript type definitions