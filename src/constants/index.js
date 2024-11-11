export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Experience',
        href: '#experience',
    },
    {
        id: 4,
        name: 'Projects',
        href: '#projects',
    },
    {
        id: 5,
        name: 'Contact',
        href: '#contact',
    },
];

export const myProjects = [
    {
        id: 1,
        title: 'BCI',
        desc: 'As part of my research with the U.N.A.R.Y Lab, I am developing an EEG data pipeline to process signals ' +
            'and input them into a Large Language Model (LLM) for real-time classification. ' +
            'This project aims to leverage machine learning for real-time brain activity insights, advancing brain-computer interfaces.',
        subdesc:
            'Fall 2024',
        logo: '/assets/BCI.svg',
        logoStyle: {
            backgroundColor: '#1C1A43',
            border: '0.2px solid #252262',
            boxShadow: '0px 0px 60px 0px #6ß35BFF4D',
        },
        spotlight: '/assets/spotlight5.png',
        tags: [
            {
                id: 1,
                name: 'Python',
                path: '/assets/python.svg',

            },
            {
                id: 2,
                name: 'LangChain',
                path: '/assets/langchain.svg',
            },
            {
                id: 3,
                name: 'Llama',
                path: '/assets/llama.svg',
            },
            {
                id: 4,
                name: 'Anaconda',
                path: '/assets/anaconda.svg',
            },
            {
                id: 5,
                name: 'PyTorch',
                path: '/assets/pytorch.svg',
            },
            {
                id: 6,
                name: 'Hugging Face',
                path: '/assets/huggingface.svg',
            },
        ],
        hasLink: true,
        link: 'https://www.unarylab.com/',
    },
    {
        id: 2,
        title: 'BIDS Parser',
        desc: 'The BIDS-parser is a tool that converts EEG datasets into the Brain Imaging Data Structure (BIDS) format, ' +
            'standardizing neuroimaging data for better analysis and collaboration. It automates the organization and ' +
            'labeling of EEG data, ensuring BIDS compliance and simplifying integration with other research tools.',
        subdesc:
            'Fall 2024',
        logo: '/assets/bids.svg',
        logoStyle: {
            backgroundColor: '#1C1A43',
            border: '0.2px solid #252262',
            boxShadow: '0px 0px 60px 0px #6ß35BFF4D',
        },
        spotlight: '/assets/spotlight5.png',
        tags: [
            {
                id: 1,
                name: 'Python',
                path: '/assets/python.svg',
            },
            {
                id: 2,
                name: 'BIDS DSA',
                path: '/assets/dsa.svg',
            },
            {
                id: 3,
                name: 'EEG (Electroencephalogram)',
                path: '/assets/eeg.svg',
            },
        ],
        hasLink: true,
        link: 'https://www.unarylab.com/',
    },
    {
        id: 3,
        title: 'Personal Portfolio',
        desc: 'This project aimed to deepen my front-end development skills, incorporating frameworks like ' +
            'Three.js and Tailwind for 3D models. I also integrated back-end functionality with email messaging for' +
            ' seamless communication, creating a fun experience that showcased both creative and technical abilities.',
        subdesc:
            'Fall 2024',
        logo: '/assets/personal.svg',
        logoStyle: {
            backgroundColor: '#2596be',
            background:
                'linear-gradient(0deg, #f31838 #f31838), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid red)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwind.svg',
            },
            {
                id: 3,
                name: 'Blender',
                path: '/assets/blender.svg',
            },
            {
                id: 4,
                name: 'Three.js',
                path: '/assets/threejs.svg',
            },
        ],
    },
    {
        id: 4,
        title: 'Kanto Pokédex',
        desc: 'Kanto Pokédex was a project I developed to learn back-end basics. I set up a MongoDB database, used' +
            ' Spring Boot for the back-end, and Maven for dependency management. I built RESTful APIs for efficient ' +
            'data handling and created a dynamic React front-end to allow users access to Pokémon data.',
        subdesc:
            'Spring 2024',
        logo: '/assets/pokedex.svg',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'Java',
                path: 'assets/java.svg',
            },
            {
                id: 3,
                name: 'MongoDB',
                path: '/assets/mongodb.svg',
            },
            {
                id: 4,
                name: 'SpringBoot',
                path: '/assets/springboot.svg',
            },
        ],
    },
    {
        id: 5,
        title: 'AthenaAI',
        desc: 'AthenaAI was a GPT-based tool developed for Morgan & Morgan to provide legal advisory services to ' +
            'civilians in need. My team integrated Google Speech-to-Text for voice interactions, aiming to make legal ' +
            'information more accessible and showcasing the potential of technology in the legal field.',
        subdesc:
            'KnightHacks VI',
        logo: '/assets/athenaAI.svg',
        logoStyle: {
            backgroundColor: '#1C1A43',
            border: '0.2px solid #252262',
            boxShadow: '0px 0px 60px 0px #6ß35BFF4D',
        },
        spotlight: '/assets/spotlight5.png',
        tags: [
            {
                id: 1,
                name: 'Python',
                path: '/assets/python.svg',
            },
            {
                id: 2,
                name: 'GPT',
                path: 'assets/gpt.svg',
            },
            {
                id: 3,
                name: 'Morgan & Morgan',
                path: '/assets/mm.svg',
            },
            {
                id: 4,
                name: 'Google Text-to-Speech',
                path: '/assets/tts.svg',
            },
        ],
        hasLink: true,
        link: 'https://devpost.com/software/athenaai',
    },
    {
        id: 6,
        title: 'SpoilerAlert',
        desc: 'I developed the back-end for SpoilerAlert, a project designed to block movie spoilers, using MongoDB to ' +
            'store over 90 years of movie data and 600,000+ titles. I worked with Node.js for server-side operations,' +
            ' built a Chrome extension, and used JavaScript, HTML, and CSS for the front-end.',
        subdesc:
            'KnightHacks VII',
        logo: '/assets/spoiler.svg',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'JavaScript',
                path: '/assets/javascript.svg',
            },
            {
                id: 2,
                name: 'Express',
                path: 'assets/express.svg',
            },
            {
                id: 3,
                name: 'Node.js',
                path: '/assets/nodejs.svg',
            },
            {
                id: 4,
                name: 'MongoDB',
                path: '/assets/mongodb.svg',
            },
            {
                id: 5,
                name: 'HTML',
                path: '/assets/html.svg',
            },
            {
                id: 6,
                name: 'CSS',
                path: '/assets/css.svg',
            },
        ],
        hasLink: true,
        link: 'https://devpost.com/software/spoiler-alert-ikhyfg',
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        floorScale:isSmall ? 4 : isMobile ? 4 : isTablet ? 7 : 9.06,
        floorPosition: isMobile ? [0, -3.6,3] : isTablet ? [0, -7.2,2] : [0, -11.63,2],

        SunScale:isSmall ? 0.018 : isMobile ? 0.02 : isTablet ? 0.04 : 0.05,
        SunPosition: isMobile ? [-6.9, 8.3,-9] : isTablet ? [-12, 13,-29] : [-25, 13.6,-20],

        HoohScale:isSmall ? 0.02 : isMobile ? 0.02 : isTablet ? 0.03 : 0.04,
        HoohPosition: isMobile ? [-5.9, 8.3,-6] : isTablet ? [-20, 13,-20] : [-60,12,-15],

        CloudsScale:isSmall ? 20 : isMobile ? 20 : isTablet ? 20 : 40,
        CloudsPosition: isMobile ? [-5.9, 7.9,-20] : isTablet ? [-12, 13,-20] : [0,10.5,-40],

        rocksScale: isSmall ? 13 : isMobile ? 13 : isTablet ? 16 : 26,
        rocksPosition: isMobile ? [0, 1.6, 2] : isTablet ? [0, 1, 4] : [-2, -0.1, 4],

        noFaceScale: isSmall ? 1.5 : isMobile ? 1.5 : isTablet ? 2 : 3,
        noFacePosition: isMobile ? [3.24, -0.6, 5] : isTablet ? [6, -2, 8] : [8, -5, 10],

        swordScale: isSmall ? 0.3 : isMobile ? 0.3 : isTablet ? 0.4 : 0.6,
        swordPosition: isMobile ? [3, -0.15, 8] : isTablet ? [-2, -1.267, 14] : [4, -3.9, 15],

        cabinScale: isSmall ? 1.5 : isMobile ? 1.5 : isTablet ? 2 : 2.9,
        cabinPosition: isMobile ? [0.4, 1.15, 4] : isTablet ? [1.5, 0.47, 6] : [-0.6, -1.2, 7],

        moneyScale: isSmall ? 0.45 : isMobile ? 0.45 : isTablet ? 0.7 : 0.8,
        moneyPosition: isMobile ? [-0.2, -.25, 3] : isTablet ? [-5, -1.3, 12] : [-7.1, -4.1, 15],

        linkScale: isSmall ? 0.0035 : isMobile ? 0.003 : isTablet ? 0.004 : 0.006,
        linkPosition: isMobile ? [-2, -.6, 10] : isTablet ? [-5, -2, 12] : [-7.1, -4.87, 15],

        campScale: isSmall ? 0.18 : isMobile ? 0.18: isTablet ? 0.2 : 0.3,
        campPosition: isMobile ? [-3, -0.6, 8] : isTablet ? [5.45, -1.95, 12] : [10, -4.9, 13],

        cubePosition: isSmall ? [3.5, 5.7, -4] : isMobile ? [5, 5, 0] : isTablet ? [6, 5, 0] : [9, 5.5, 0],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'University of Central Florida',
        pos: 'B.S. in CS',
        duration: 'Present - Fall 2026',
        title: "As a Computer Science student at the University of Central Florida," +
            " I've completed Data Structures I and II, Cyber Security, and Mobile Development." +
            " These courses have strengthened my skills in algorithms, security, and app development, " +
            "preparing me for practical challenges in the tech industry.",
        icon: '/assets/unary.svg',
    },
    {
        id: 2,
        name: 'U.N.A.R.Y Lab',
        pos: 'Research Assistant',
        duration: 'Aug 2024 - Present',
        title: "As a member of an 8-person team, I am developing a unary brain-computer interface using PyTorch and Python under the guidance of a PhD professor. My primary responsibility is designing a processing pipeline that integrates a custom large language model (LLM) with LangChain to classify EEG signals. I also conduct unit tests on various LLMs to ensure the accuracy of EEG classification.",
        icon: '/assets/unary.svg',
    },
    {
        id: 4,
        name: 'AWS Academy',
        pos: 'Student',
        duration: 'Aug 2024 - Present',
        title: "Completed foundational cloud computing courses and earned badges in Cloud Security and Foundations. Gained practical skills in AWS services and architecture, focusing on secure application deployment.",
        icon: '/assets/eyeavenue.svg',
    },
    {
        id: 3,
        name: 'The Eye Avenue',
        pos: 'Optical Assistant',
        duration: 'Oct 2023 - Present',
        title: "At The Eye Avenue, I assist patients with eyeglass orders, ensuring they find the perfect fit and style. Additionally, I support the optician with lab orders and provide comprehensive patient care, giving them a good experience.",
        icon: '/assets/eyeavenue.svg',
    },
];