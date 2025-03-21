export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
  { name: "Resume", link: "/Mohak-Nagaraju-Resume.pdf"}
];

export const gridItems = [
  {
    id: 1,
    title: "Driving Efficiency with Full-Stack Development",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Optimizing Backend Performance for High-Volume Applications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a AI Resume Analyzer",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to collaborate and create something exciting?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Blogging Website",
    des: "Check out News Update World, a sleek and responsive blog platform where stories come alive with interaction.",
    img: "/p1.png",
    iconLists: ["/re.svg","/aws.svg","/fb.svg","/mdb.svg"],
    link: "https://newsupdateworld.netlify.app/",
  },
  {
    id: 2,
    title: "Netflix Clone",
    des: "Experience seamless entertainment with our Netflix clone, designed for your ultimate viewing pleasure!",
    img: "/p2.png",
    iconLists: ["/js.svg","/re.svg","/mdb.svg","/tail.svg"],
    link: "https://mern-netflix-clone-6nu1.onrender.com/",
  },
  {
    id: 3,
    title: "Car Rental Application",
    des: "Transform your car rental experience with our streamlined system, designed for faster bookings, seamless browsing, and improved operational efficiency.",
    img: "/p3.png",
    iconLists: ["/re.svg","/tail.svg","/fm.svg","/rc.png"],
    link: "https://github.com/Mohak-Nagaraju/DriveNow-Car-Rental-Application",
  },
  {
    id: 4,
    title: "Human Behavioral Analysis",
    des: "Built an advanced framework for real-time human behavior and safety assessment using Python, ML, and sensor data, featuring face recognition and drowsiness detection with the Haar cascade algorithm to boost vehicle safety.",
    img: "/p4.jpg",
    iconLists: ["/py.svg","/ml.svg","/ss.svg"],
    link: "https://github.com/Mohak-Nagaraju/Human_Behavior_Analysis",
  },
];

export const testimonials = [
  {
    quote:
      "It was a great experience working with Mohak. His enthusiasm, creativity, and strong work ethic truly stood out throughout our collaboration. He consistently delivered high-quality results and was always eager to tackle new challenges. I wholeheartedly recommend Mohak for any project—he's a valuable asset to any team!",
    name: "Bhavya Ashok Kallur",
    title: "Software Developer",
  },
  {
    quote:
      "As Mohak's professor, I have had the pleasure of witnessing his growth and dedication firsthand. He consistently demonstrated a strong understanding of the material, combined with a passion for learning and innovation. His ability to grasp complex concepts and apply them in creative ways set him apart from his peers. Mohak is an exceptional student, and I am confident he will excel in all his future endeavors!",
    name: "Dr.Deepa Yogish",
    title: "Professor",
  },
  {
    quote:
      "Working with Mohak as a teammate was an incredible experience. He brought a positive attitude, great collaboration skills, and a strong work ethic to every task. His technical expertise and willingness to help the team succeed made him an invaluable part of our project. Mohak is a fantastic teammate, and I’d be thrilled to work with him again!",
    name: "Deepak Kumar",
    title: "Colleague",
  },
  {
    quote:
      "Mohak joined KeeperAI as an Software Engineer Intern after graduating from Stevens Institute of Technology, he worked with our extended team also took initiative which was cross functional and client focused. His ability to learn and to be a team player impressed me a lot. I wish him the best in his professional journey.",
    name: "Vishal Ahluwalia",
    title: "CEO",
  },
];


export const workExperience = [
  {
    id: 1,
    title: "Full Stack Software Engineer",
    desc: "Developed and managed platform features using JavaScript, ReactJS, and NodeJS, overseeing usability testing, debugging, code reviews, and software launches.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Engineer",
    desc: "Developed and deployed the \"Change Plan\" feature for a leading UK telecom app, optimizing user journey and simplifying plan changes, while revamping a car rental system in Java to improve operational efficiency and streamline data processing.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Software Engineering Intern",
    desc: "Collaborated on delivering IoT solutions for over 500 residents in remote areas, including weather prediction, automated irrigation, and livestock tracking, while simulating router and switch configurations and conducting network analysis to improve efficiency.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp4.svg",
  },
  {
    id: 4,
    title: "Multi-Cloud, DevOps & AI",
    desc: "Completed an intensive 5-day bootcamp on Multi-Cloud, DevOps, and AI, utilizing AWS, Google Cloud, Azure, Kubernetes, Docker, Terraform, and AI technologies to build an AI-powered e-commerce platform.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Mohak-Nagaraju",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/mohaknagaraju/",
  },
];
