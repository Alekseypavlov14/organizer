# Organizer | Notion & Activity Tracker (in process...)

A web application where you can save useful information in notion form. These notions can be organized in groups by topic or presented in calendar form. Inspired by [notion.com](https://notion.com).

## 🚀 Stack

- **React**
- **TypeScript**
- **Zustand**

## ✨ Quick Start

```bash
npm install
npm run dev
```

## 📁 Project Structure

```
├── public/               
└── src/
    ├── app/              
    │   ├── navigation/         # shortcuts for app redirects
    │   ├── notifications/      # notifications within the app
    │   └── routing/            # configuration of app routing         
    ├── entities/
    │   ├── groups/          
    │   └── notions/         
    ├── features/
    │   └── notions/ 
    │       ├── display/  
    │       ├── edition/ 
    │       ├── feed/ 
    │       └── form/       
    ├── pages/
    ├── shared/
    └── widgets/
```
