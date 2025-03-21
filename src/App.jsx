import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './blocks/Navbar.jsx';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

import Home from './blocks/Hero.jsx';
import AboutPage from './blocks/About.jsx';
import CareerPage from './blocks/Career.jsx';
import ProjectsPage from './blocks/Projects.jsx';
import ContactPage from './blocks/Photography.jsx';
import FooterPage from './blocks/Footer.jsx';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://adrianosor.io",
    "name": "Adrian Osorio Blanchard",
    "author": {
      "@type": "Person",
      "name": "Adrian Osorio Blanchard"
    },
    "description": "Welcome to my personal website where I share my journey as a Software Engineer, Student, Researcher, Treasurer and more."
  };

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Helmet>
          <base href="/" />
          <title>Adrian Osorio Blanchard | Software Engineer</title>
          <meta 
            name="description" 
            content="Welcome to my personal website where I share my journey as a Software Engineer, Student, Researcher, and Treasurer." 
          />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://adrianosor.io" />

          <meta property="og:site_name" content="Adrian Osorio Blanchard" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://adrianosor.io" />
          <meta property="og:title" content="Adrian Osorio Blanchard | Software Engineer" />
          <meta property="og:description" content="Welcome to my personal website where I share my journey as a Software Engineer, Student, Researcher, and Treasurer." />
          <meta property="og:image" content="https://adrianosor.io/assets/og-image.jpg" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@idk" />
          <meta name="twitter:title" content="Adrian Osorio Blanchard | Software Engineer" />
          <meta name="twitter:description" content="Welcome to my personal website where I share my journey as a Software Engineer, Student, Researcher, and Treasurer." />
          <meta name="twitter:image" content="https://adrianosor.io/assets/twitter-card.jpg" />

          <meta http-equiv="Content-Security-Policy" content="
            default-src 'self' blob:;
            connect-src 'self' blob:;
            style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
            style-src-elem 'self' 'unsafe-inline' https://fonts.googleapis.com;
            font-src 'self' https://fonts.gstatic.com;
            img-src 'self' data: blob: https://adrianosor.io;
          " />

          <script type="application/ld+json">
            {JSON.stringify(jsonLdData)}
          </script>
        </Helmet>
        <Analytics />
        <SpeedInsights />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/photography" element={<ContactPage />} />
          <Route path="/footer" element={<FooterPage />} />
        </Routes>
        <FooterPage />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;