# MBK Builders - Construction Company Website

![MBK Builders Logo](<!-- Add your logo path here -->)

A modern, responsive website for MBK Builders, a construction company based in Eastern Cape, South Africa. The website showcases their services, projects, and contact information.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features
- **Responsive Design:** Works on all devices from mobile to desktop
- **Modern UI:** Clean, professional design with animations
- **Service Showcase:** Detailed display of construction services
- **Project Gallery:** Filterable portfolio of completed projects
- **Contact Form:** Easy way for clients to get in touch
- **Performance Optimized:** Fast loading times and smooth animations

## Technologies Used

### Frontend:
- React.js (v18+)
- React Bootstrap (v2+)
- Styled Components
- React Router (v6)
- React Icons

### Backend:
- Firebase (for contact form submissions)
- EmailJS (for email notifications)

### Build Tools:
- Vite
- npm

## Installation

### Clone the repository:
```bash
git clone https://github.com/your-username/mbk-builders.git
cd mbk-builders
```

### Install dependencies:
```bash
npm install
```

### Set up environment variables:
Create a `.env` file in the root directory with your configuration:
```env
VITE_FIREBASE_API_KEY=your_firebase_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_EMAILJS_SERVICE_ID=your_emailjs_service
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_USER_ID=your_user_id
```

### Run the development server:
```bash
npm run dev
```

## Configuration

### Firebase Setup
1. Create a Firebase project
2. Enable Firestore database
3. Add your web app to Firebase
4. Copy the configuration to your `.env` file

### EmailJS Setup
1. Create an EmailJS account
2. Set up email service and template
3. Add your credentials to `.env`

## Project Structure
```
src/
├── assets/            # Images and static files
├── components/        # Reusable components
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── ProjectCard.jsx
│   └── ...
├── pages/             # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Services.jsx
│   └── Contact.jsx
├── App.jsx            # Main app component
├── main.jsx           # Entry point
└── styles/            # Global styles
```

## Deployment

### Firebase Hosting
#### Install Firebase CLI:
```bash
npm install -g firebase-tools
```
#### Login to Firebase:
```bash
firebase login
```
#### Initialize Firebase project:
```bash
firebase init
```
Select Hosting and follow prompts.

#### Build and deploy:
```bash
npm run build
firebase deploy
```

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables from your `.env` file

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
Distributed under the **MIT License**. See `LICENSE` for more information.

## Contact
**MBK Builders**  
📞 065 975 2025  
📧 angambuwako@mbkbuilders.co.za 
📍 2544 Cuba Township, Butterworth, 4960

