export const projectsData = [
  {
    id: "crypto-trading-sentiment",
    title: "Sentiment Analysis Based Crypto Trading System",
    type: "Major Project",
    category: "AI/ML",
    categories: ["Major Project", "AI/ML", "Python", "Web Development"],
    featured: true,
    tagline: "AI-powered cryptocurrency trading system using sentiment analysis & FastAPI microservices.",
    description: "An AI-powered cryptocurrency decision support system that leverages natural language processing and sentiment analysis from a specialized Telegram bot to evaluate market sentiment and assist cryptocurrency trading decisions.",
    
    problem: "Cryptocurrency markets are highly volatile and heavily influenced by rapid shifts in market sentiment. Traders struggle to manually digest fast-moving sentiment signals and analyze them systematically alongside market data.",
    
    solution: "Built an intelligent decision-support platform that ingests live sentiment data via a custom Telegram bot, processes text with local LLMs (Ollama & LangChain), computes semantic vector embeddings in Qdrant, and orchestrates trading strategy evaluations using FastAPI microservices.",

    telegramBotHighlight: "Specialized Telegram Bot for real-time sentiment analysis ingestion",

    technologies: {
      frontend: ["React", "Tailwind CSS"],
      backend: ["Python", "FastAPI", "Uvicorn", "REST APIs"],
      ai_nlp: ["Ollama", "LangChain", "NLP", "Sentiment Analysis", "Agent-based processing"],
      data_infra: ["MongoDB", "Redis", "Qdrant Vector DB"]
    },

    features: [
      "Telegram bot integration for real-time sentiment signal ingestion",
      "Local LLM processing via Ollama & LangChain for privacy & speed",
      "Vector search & semantic memory using Qdrant vector database",
      "Asynchronous FastAPI backend with Redis caching layer",
      "Interactive React dashboard for sentiment visualization",
      "Modular decision engine evaluating strategy parameters"
    ],

    architecture: [
      { step: "1", title: "Frontend Dashboard", desc: "React + Tailwind dashboard rendering live analytics & sentiment metrics." },
      { step: "2", title: "Decision Engine", desc: "FastAPI service evaluating signals against trading rules." },
      { step: "3", title: "Orchestration / Agent Service", desc: "LangChain agent workflows routing sentiment and market data." },
      { step: "4", title: "AI / NLP Processing", desc: "Ollama local LLM & Telegram bot parsing natural language sentiment." },
      { step: "5", title: "Trading Strategy", desc: "Strategy evaluation module scoring market conditions." },
      { step: "6", title: "Execution Layer", desc: "Simulated order execution & signal notification system." }
    ],

    supportingServices: ["MongoDB (Data Storage)", "Redis (Fast Cache)", "Qdrant (Vector DB)"],

    disclaimer: "Note: This is an experimental decision-support project built for technical research and academic research. It does not guarantee trading profits or financial outcomes.",

    githubUrl: "https://github.com/Thanush-kt/Portfolio",
    liveUrl: null,
    image: "/projects/crypto-trading.svg"
  },
  {
    id: "ecostep-blockchain",
    title: "EcoStep",
    subtitle: "Blockchain-Based Incentive Model for Carbon Offsetting Through Walking",
    type: "Minor Project",
    category: "Web Development",
    categories: ["Minor Project", "Web Development", "Blockchain"],
    featured: true,
    tagline: "A sustainability project exploring blockchain verification for walking activity carbon offset incentives.",
    description: "EcoStep is a sustainability-focused project that explores how blockchain technology can be used to create a transparent incentive model for encouraging walking as a sustainable mode of transportation while supporting carbon-offsetting initiatives.",

    domain: ["Blockchain", "Sustainability", "Green Technology", "Carbon Offsetting", "Incentive Systems"],

    problem: "Urban transport produces high carbon emissions, yet individual daily green actions like walking lack transparent incentives and verifiable carbon-offset tracking.",

    solution: "Designed a conceptual sustainability model that connects daily walking activity to carbon-offset estimation algorithms, rewarding verified activity through a transparent blockchain-based recording mechanism.",

    conceptFlow: [
      { stage: "Walking Activity", desc: "Tracking user physical movement & distance." },
      { stage: "Carbon-Offset Estimation", desc: "Calculating estimated CO2 emissions avoided by walking instead of driving." },
      { stage: "Incentive Mechanism", desc: "Determining reward allocation based on verified offsets." },
      { stage: "Blockchain Recording", desc: "Logging verified activities to a transparent ledger." }
    ],

    objective: "The primary objective is to encourage individuals to choose walking as a sustainable mode of transport while building a transparent, verifiable incentive framework.",

    technologies: {
      frontend: ["HTML", "CSS", "JavaScript"],
      concepts: ["Blockchain Verification", "Sustainability Modeling", "Carbon Offset Estimation"]
    },

    features: [
      "Conceptual model for walking distance-to-carbon offset calculation",
      "Transparent reward mechanism design",
      "Blockchain-based immutable verification framework",
      "User-friendly sustainability dashboard concept"
    ],

    gallery: [
      { src: "/ecostepscreenshots/1.jpg", alt: "EcoStep project screen 1" },
      { src: "/ecostepscreenshots/2.jpg", alt: "EcoStep project screen 2" },
      { src: "/ecostepscreenshots/3.jpg", alt: "EcoStep project screen 3" },
      { src: "/ecostepscreenshots/4.jpg", alt: "EcoStep project screen 4" },
      { src: "/ecostepscreenshots/5.jpg", alt: "EcoStep project screen 5" },
      { src: "/ecostepscreenshots/6.jpg", alt: "EcoStep project screen 6" },
      { src: "/ecostepscreenshots/7.jpg", alt: "EcoStep project screen 7" },
      { src: "/ecostepscreenshots/8.jpg", alt: "EcoStep project screen 8" },
      { src: "/ecostepscreenshots/9.png", alt: "EcoStep project screen 9" },
      { src: "/ecostepscreenshots/10.png", alt: "EcoStep project screen 10" },
      { src: "/ecostepscreenshots/11.png", alt: "EcoStep project screen 11" },
      { src: "/ecostepscreenshots/12.png", alt: "EcoStep project screen 12" },
      { src: "/ecostepscreenshots/13.png", alt: "EcoStep project screen 13" }
    ],

    githubUrl: "https://github.com/Thanush-kt/Team_Pheonix",
    liveUrl: null,
    image: "/projects/ecostep.svg"
  },
  {
    id: "visionmove-hand-gesture",
    title: "VisionMove - Real-Time AI Hand Gesture Tracking Engine",
    subtitle: "Polished Real-Time AI Hand Tracking & Interactive Control System",
    type: "Personal Project",
    category: "AI/ML",
    categories: ["Personal Projects", "AI/ML", "Computer Vision", "Python"],
    featured: true,
    tagline: "Real-time computer vision system using OpenCV & MediaPipe for touchless gesture interaction and object manipulation.",
    description: "VisionMove is a production-quality, real-time computer vision application built with Python, OpenCV, and MediaPipe. It features 21-point hand landmark tracking, gesture recognition for 8+ distinct gestures, exponential motion smoothing, physics-based particle systems, and a futuristic cyberpunk glassmorphism UI.",

    problem: "Traditional physical input devices (mouse, keyboard) lack touchless interaction capabilities for hands-free environments, while typical gesture demos suffer from jittery motion, gesture flickering, and unoptimized UI responsiveness.",

    solution: "Engineered a modular, offline computer vision pipeline featuring MediaPipe 21-point hand landmark extraction, gesture classification with majority-voting history stabilization, exponential motion smoothing algorithms, and real-time particle/motion trail graphics rendered at 30 FPS.",

    conceptFlow: [
      { stage: "Frame Input & Detection", desc: "1280x720 video feed & MediaPipe 21-point 3D landmark extraction." },
      { stage: "Gesture Classification", desc: "Recognizes 8+ gestures with majority-voting history stabilization." },
      { stage: "Motion Smoothing Engine", desc: "Exponential velocity interpolation preventing jittery control." },
      { stage: "Visual Effects & UI", desc: "Renders cyberpunk HUD, glassmorphism panels, particles & motion trails." }
    ],

    technologies: {
      computer_vision: ["Python 3.8+", "OpenCV", "MediaPipe"],
      algorithms: ["Exponential Smoothing", "Landmark Tracking", "Physics Engine"],
      ui_graphics: ["Glassmorphism HUD", "Particle Physics", "Motion Trails"],
      architecture: ["Modular Architecture", "Offline Execution", "FPS Optimization"]
    },

    features: [
      "Real-time 21-point hand landmark tracking with confidence scoring",
      "Gesture Recognition Engine classifying 8+ distinct hand gestures (Pointing, Open Palm, Fist, Victory, Thumbs Up)",
      "Exponential motion smoothing algorithm for fluid, jitter-free object movement",
      "Physics-based particle system with speed-scaled glow effects and dual-color cyan/magenta motion trails",
      "Futuristic cyberpunk glassmorphism HUD displaying FPS counter, real-time coordinates, gesture status & directional arrows",
      "Clean modular architecture separated into tracking, gesture detection, physics controller, effects, and UI modules"
    ],

    githubUrl: "https://github.com/Thanush-kt/VisionMove",
    liveUrl: null,
    image: "/projects/hand-gesture.svg"
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    type: "Personal Project",
    category: "Web Development",
    categories: ["Personal Projects", "Web Development", "JavaScript"],
    featured: true,
    tagline: "Responsive web dashboard fetching real-time weather forecasts via REST API.",
    description: "A responsive web-based weather application that enables users to search for any global city and retrieve accurate live weather metrics, temperature forecasts, and humidity details using a weather API.",
    
    problem: "Users need a quick, distraction-free weather dashboard that loads instantly across all screen sizes with clean data visualization.",

    solution: "Built a lightweight frontend application consuming open weather REST APIs, performing dynamic DOM updates, and presenting key weather parameters with clean responsive design.",

    technologies: {
      frontend: ["HTML5", "CSS3", "JavaScript (ES6+)"],
      api: ["Weather API / REST Integration"]
    },

    features: [
      "Instant city search with dynamic data fetching",
      "Live temperature, humidity, wind speed, and conditions display",
      "API integration using asynchronous JavaScript (Fetch API)",
      "Fully responsive interface tailored for desktop & mobile devices"
    ],

    githubUrl: "https://github.com/Thanush-kt/weather-dashboard",
    liveUrl: null,
    image: "/projects/weather.svg"
  },
  {
    id: "rock-paper-scissors",
    title: "Rock Paper Scissors Game",
    type: "Personal Project",
    category: "JavaScript",
    categories: ["Personal Projects", "JavaScript"],
    featured: true,
    tagline: "Interactive browser-based game demonstrating JavaScript DOM manipulation and state management.",
    description: "An interactive browser-based Rock Paper Scissors game created to practice core JavaScript programming, game decision logic, state tracking, and responsive DOM manipulation.",

    problem: "Building intuitive game mechanics requires efficient DOM management, random computer choices, and smooth UI state updates.",

    solution: "Developed an interactive UI featuring player vs. computer decision trees, score counters, dynamic animations, and game state reset functionality.",

    technologies: {
      frontend: ["HTML5", "CSS3", "JavaScript"]
    },

    features: [
      "Interactive Player vs. Computer gameplay mechanics",
      "Real-time score tracking & persistent match state",
      "Clean JavaScript game logic & event handlers",
      "Touch and click-friendly responsive interface"
    ],

    githubUrl: "https://github.com/Thanush-kt/rock-paper-scissors",
    liveUrl: null,
    image: "/projects/rps.svg"
  }
];

export const projectCategories = [
  "All",
  "Major Project",
  "Minor Project",
  "Web Development",
  "AI/ML",
  "Computer Vision",
  "JavaScript",
  "Python"
];
