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
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Example',
        position: 'Example',
        img: 'assets/review1.png',
        review:
            'Example review',
    },
    {
        id: 2,
        name: 'Example',
        position: 'Example',
        img: 'assets/review2.png',
        review:
            'Example review',
    },
    {
        id: 3,
        name: 'Example',
        position: 'Example ',
        img: 'assets/review3.png',
        review:
            'Example review',
    },
    {
        id: 4,
        name: 'Example',
        position: 'Example',
        img: 'assets/review4.png',
        review:
            'Example review',
    },
];

export const myProjects = [
    {
        title: 'SpoilerAlert',
        desc: 'Example project 1',
        subdesc:
            'Example project 1',
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
        ],
    },
    {
        title: 'Personal Portfolio',
        desc: 'Example personal portfolio ',
        subdesc:
            'Example personal portfolio ',
        href: 'Example project 1',
        logo: '/assets/personal.svg',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
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
        title: 'Kanto Pokédex',
        desc: 'Example kanto desc',
        subdesc:
            'Example kanto desc ',
        href: 'example',
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
                path: 'assets/java-icon.svg',
            },
            {
                id: 3,
                name: 'MongoDB',
                path: '/assets/mongodb.svg',
            },
            {
                id: 4,
                name: 'SpringBoot',
                path: '/assets/spring-icon.svg',
            },
        ],
    },
    {
        title: 'AthenaAI',
        desc: 'AthenaAI was one of my first projects, developed as part of a Morgan & Morgan hackathon challenge. My team and I created a GPT-based tool to provide legal advisory services for KnightHacks. We incorporated the Google Speech-to-Text API and presented our project to Morgan & Morgan.',
        subdesc:
            'Python, GPT-4, Google Speech-to-Text API, AI assistant to help process legal documents and advise you to speak with professionals regarding sensitive topics and information.',
        href: 'Example project 1',
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
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        rocksScale: isSmall ? 13 : isMobile ? 13 : isTablet ? 16 : 20,
        rocksPosition: isMobile ? [0, 2, 2] : isTablet ? [0, 1, 4] : [0, 0, 5],

        noFaceScale: isSmall ? 0.6 : isMobile ? 0.7 : isTablet ? 0.9 : 1.2,
        noFacePosition: isMobile ? [4.3, -0.8, 8] : isTablet ? [6, -2, 8] : [8, -3, 8],

        carScale: isSmall ? 1 : isMobile ? 1 : isTablet ? 1.5 : 1.9,
        carPosition: isMobile ? [0.75, -1.4, 12] : isTablet ? [1.5, -3, 12] : [1.4, -4, 12],

        moneyScale: isSmall ? 0.4 : isMobile ? 0.4 : isTablet ? 0.6 : 0.8,
        moneyPosition: isMobile ? [-3.7, -1.4, 11] : isTablet ? [-4.6, -3, 14] : [-7.1, -4, 15],

        cubePosition: isSmall ? [4, 5, 0] : isMobile ? [5, 5, 0] : isTablet ? [6, 5, 0] : [9, 5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [6, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'U.N.A.R.Y Lab',
        pos: 'Undergraduate Research Assistant',
        duration: 'Aug 2024 - Present',
        title: "I'm part of an 8-member team developing a unary brain-computer interface using PyTorch and Python, guided by a PhD professor. My role involves designing a processing pipeline that links a custom LLM with LangChain to classify EEG signals and conducting unit tests on different LLMs to verify EEG classification.",
        icon: '/assets/unary.svg',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'The Eye Avenue',
        pos: 'Optical Assistant',
        duration: '2024 - Present',
        title: "At The Eye Avenue, I assist patients with eyeglass orders, ensuring they find the perfect fit and style. Additionally, I support the optician with lab orders and provide comprehensive patient care, giving them a great experience.",
        icon: '/assets/eyeavenue.svg',
        animation: 'clapping',
    },
];