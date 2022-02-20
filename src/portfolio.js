import emoji from "react-easy-emoji";

// Summary And Greeting Section

const greeting = {
  displayGreeting: true,
  username: "Hunter Schuler",
  title: "Hey everyone, meet Hunter",
  subTitle:
    "A passionate full stack developer with experience in cloud computing, code testing, cyber security, and data analytics.",
  resumeLink:
    "https://drive.google.com/file/d/14T7XrnE46YtSKVQWwhrc85QwD40w5O8I/view?usp=sharing",
};

// Social Media Links

const socialMediaLinks = {
  display: true,
  github: "https://github.com/SchulerHunter",
  linkedin: "https://www.linkedin.com/in/hunter-schuler/",
  gmail: "schuler.hunter.l@gmail.com",
};

// Skills Section

const skillsSection = {
  display: true,
  title: "What I do",
  subTitle: "COMPLETE WORK WITH LIBRARIES AND FRAMEWORKS ON EVERY LEVEL OF THE TECH STACK",
  skills: [
    emoji("⚡ Create secure API layers to connect the user to your system"),
    emoji("⚡ WEB3 based applications to fulfill your needs"),
    emoji("⚡ Learn new skills every day to become a better programmer",)
  ],

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "devicon-javascript-plain"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "devicon-react-original"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "devicon-nodejs-plain"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "devicon-npm-original-wordmark"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "devicon-docker-plain"
    },
    {
      skillName: "databases",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "devicon-amazonwebservices-original"
    },
    {
      skillName: "matlab",
      fontAwesomeClassname: "devicon-matlab-plain"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "devicon-python-plain"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "devicon-java-plain"
    },
    {
      skillName: "c",
      fontAwesomeClassname: "devicon-c-plain"
    },
    {
      skillName: "c++",
      fontAwesomeClassname: "devicon-cplusplus-plain"
    },
    {
      skillName: "arduino",
      fontAwesomeClassname: "devicon-arduino-plain"
    },
    {
      skillName: "raspberry pi",
      fontAwesomeClassname: "devicon-raspberrypi-line"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "devicon-linux-plain"
    },
    {
      skillName: "windows",
      fontAwesomeClassname: "devicon-windows8-original"
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "Frontend/Design",
      progressPercentage: "60%"
    },
  ],
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Penn State University",
      logo: require("./assets/images/pennstateLogo.jpg"),
      subHeader: "Bachelor of Science in Computer Science and Physics",
      duration: "August 2018 - May 2022",
      desc: "Minor In Cyber Security, Math, and Engineering Leadership Development",
      descBullets: [
        "Lab Assistant working with LIGO foundation from December 2018",
        "Projects Executive for local IEEE branch from August 2019",
        "Resident Assistant from August 2020",
        "Co-founder of Quantum Information and Computation Club from February 2021",
      ]
    },
  ]
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Development Engineering Intern",
      company: "Amazon",
      companylogo: require("./assets/images/amazonLogo.png"),
      date: "July 2021 – August 2021",
      desc: "Implement a cloud-friedly solution to verify and analyze the quality of ML training data labeling results using AWS EMR clusters and Apache Spark 3.",
      descBullets: [
        "Use AWS utilities and tools to automate the framework and visualize the results in an interactive QuickSight dashboard"
      ]
    },
    {
      role: "Software Engineering Intern",
      company: "The Boeing Company",
      companylogo: require("./assets/images/boeingLogo.jpg"),
      date: "July 2020 – August 2020",
      desc: "Design and implement a thin-layer operating system for kenel call emulation of INTEGRITY RTOS to allow for package compilation without third party hardware..",
      descBullets: [
        "Add local server-client communications for automated script testing of B-52 simulation software for radar modernization project.",
        "Implement and test data management and verification utilities of B-52 simulation software."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Johns Hopkin's APL",
      companylogo: require("./assets/images/aplLogo.png"),
      date: "July 2019 – September 2019",
      desc: "Create and deploy a data analytics softawre to be used within bio-survveillance software ESSENCE at the CDC and DC Metro Area Hospitals.",
      descBullets: [
        "Create a custom API to access and transfer data between a React frontend to a Java Spring backend and MySQL database.",
        "Develop a solution to create a secure public facing side to the data analytic platform for export dashboards to the public."
      ]
    },
    {
      role: "Programming Lab Assistant",
      company: "LIGO Foundation",
      companylogo: require("./assets/images/ligoLogo.png"),
      date: "December 2018 – Present",
      desc: "Design, create, and implement a configurable website frontend to analyze the results of various LIGO metrics using Plotly.JS",
      descBullets: [
        "Use various javascript libraries to create a user-friendly analytics dashboard and custom plots for gravitational wave analysis.",
        "Create a website for sharing scientific data and tools amongst LIGO collaborators."
      ]
    },
  ],
};

// Github open source code section

const openSource = {
  display: true,
  showGithubProfile: false,
};

// Large projects

const bigProjects = {
  display: true,
  title: "Big Projects",
  subtitle: "LARGE PROJECTS WORKED WITH BIG COMPANIES",
  projects: [
    {
      image: require("./assets/images/epriLogo.jpg"),
      projectName: "Cinnamon List",
      projectDesc: "Created in the fall of 2021, this project aims to create a single location to store synonym terms from global energy companies in order to train ML models in identifying energy-related news.",
      footerLink: [
        {
          name: "EPRI Website",
          url: "https://www.epri.com/"
        },
        {
          name: "Github Repository",
          url: "https://github.com/SchulerHunter/CinnamonList"
        }
      ]
    },
    {
      image: require("./assets/images/essenceLogo.jpg"),
      projectName: "ESSENCE",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "JHU APL Website",
          url: "https://www.jhuapl.edu/"
        },
        {
          name: "ESSENCE PR",
          url: "https://www.jhuapl.edu/PressRelease/200325"
        }
      ]
    },
  ],
};

// Achievement Section

const achievementSection = {
  display: true,
  title: emoji("Achievements 🏆 "),
  subtitle:
    "ACHIEVEMENTS, CERTIFICATIONS, AWARDS AND SOME COOL STUFF THAT I'VE DONE!",
  achievementsCards: [
    {
      title: "Lockheed Martin Scholar",
      subtitle:
        "Recipient of the Lockheed Martin Scholar award at Penn State University through the Engineering Leadership Development minor.",
      image: require("./assets/images/lmLogo.jpg"),
      footerLink: []
    },
    {
      title: "Penn State IEEE Projects Chair",
      subtitle:
        "Led numerous workshops for the Penn State branch of IEEE.",
      image: require("./assets/images/ieeeLogo.jpg"),
      footerLink: [
        {
          name: "Workshop Github Repository",
          url: "https://github.com/SchulerHunter/IEEE-Workshops"
        }
      ]
    },
  ],
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "WANT TO DISCUSS SOME OPPERTUNITIES? MY INBOX IS ALWAYS OPEN.",
  number: "+1 (610) 360-2551",
  email_address: "Schuler.Hunter.L@gmail.com"
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
};
