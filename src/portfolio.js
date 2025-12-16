/* Change this file to get your Personal Portfolio */

import emoji from "react-easy-emoji";

const greeting = {
  username: "Abdelrahim Badr",
  title: "Hi all I'm Abdelrahim",
  subTitle: emoji(
    "A passionate DevOps Engineer 🚀 with experience in Linux system administration, containerization, and cloud infrastructure. I build scalable automation pipelines and support modern DevOps practices."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1sURMRAU_cicqvmN4-du1r95jHg6xIBDx/view?usp=drive_link", // Replace with your Google Drive resume link
  profilePic: require("./assets/images/bebo.jpg"), // Added your photo
  displayGreeting: true
};

// About Me Section
const aboutSection = {
  display: true,
  title: "About Me",
  content: `I started my career deep in the world of embedded systems, where precision and reliability were more than technical goals—they were a passion. Over time, I realized the processes around building and deploying this software were often manual and slow, limiting what teams could achieve and introducing unnecessary risk. That realization became my catalyst for change.

Driven to make a broader impact, I stepped up as part of the engineering team and championed the adoption of DevOps practices. I was directly involved in introducing modern CI/CD pipelines and automation, helping the group shift from legacy manual deployments to fast, repeatable, and reliable workflows. This transformation wasn't just technical—it was cultural, requiring trust, training, and open collaboration.

Helping guide my team through this change, I ran hands-on demo sessions, wrote clear documentation, and always ensured we had safety nets—like robust rollback plans—for our new approaches. The result was a more agile, resilient, and empowered team, ready to take on challenges with confidence. My journey from embedded systems to DevOps taught me that innovation thrives at the intersection of curiosity and courage, and I bring this mindset to every project I join.`
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/Abdelrahim-bebo",
  linkedin: "https://www.linkedin.com/in/abdelrahim-badr-38886726b/", // Add your LinkedIn profile
  gmail: "abdelrahimbebo@gmail.com",
  // Add other social media if you have them
  // gitlab: "https://gitlab.com/your-username",
  // facebook: "https://www.facebook.com/your-profile",
  // instagram: "https://www.instagram.com/your-username/",
  // twitter: "https://twitter.com/your-username",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle:
    "PASSIONATE DEVOPS ENGINEER WHO WANTS TO EXPLORE CLOUD TECHNOLOGIES AND AUTOMATION",
  fullWidth: true, // Added to make it take full width
  skills: [
    emoji(
      "⚡ Build and maintain CI/CD pipelines using Jenkins and GitHub Actions"
    ),
    emoji(
      "⚡ Containerize applications using Docker and orchestrate with Kubernetes"
    ),
    emoji(
      "⚡ Automate infrastructure provisioning and configuration management using Ansible and Terraform"
    ),
    emoji("⚡ Deploy and manage applications on AWS cloud platforms"),
    emoji("⚡ Monitor system performance and implement logging solutions"),
    emoji("⚡ Develop scripts in Bash and Python for automation tasks"),
    emoji(
      "⚡ Design and implement secure network architectures (CCNA/CCNP certified)"
    ),
    emoji(
      "⚡ Manage databases and virtualized environments (Oracle, Solaris, Virtualization)"
    ),
    emoji(
      "⚡ Visualize metrics and alert on system health using Prometheus and Grafana"
    ),
    emoji("⚡ Deploy cloud infrastructure and services on Microsoft Azure")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */
  softwareSkills: [
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Golang",
      fontAwesomeClassname: "fab fa-golang"
    },
    {
      skillName: "Ansible",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "Terraform",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "Bash",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Oracle",
      fontAwesomeClassname: "fas fa-database" // Generic database icon
    },
    {
      skillName: "Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "CCNA",
      fontAwesomeClassname: "fas fa-network-wired" // Generic network icon
    },
    {
      skillName: "CCNP",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "MCSA",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: "GitHub Actions",
      fontAwesomeClassname: "fas fa-play-circle" // Represents 'Actions/Running'
    },
    {
      skillName: "Prometheus",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Grafana",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "Solaris",
      fontAwesomeClassname: "fas fa-sun"
    },
    {
      skillName: "Web",
      fontAwesomeClassname: "fas fa-globe"
    },
    {
      skillName: "Virtualization",
      fontAwesomeClassname: "fas fa-desktop"
    }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Alexandria University",
      logo: require("./assets/images/alexu_logo.png"), // Add Alexandria University logo to assets/images/
      subHeader: "Bachelor of Electronics and Communication Engineering",
      duration: "October 2020 - July 2025",
      desc: "CGPA: 3.32 (Grade: Excellent)",
      descBullets: [
        "Graduated with Excellent grade",
        "Specialized in embedded systems and communication technologies",
        "Completed graduation project on AI-based Driver Monitoring System"
      ]
    },
    {
      schoolName: "ITI (Information Technology Institute)",
      logo: require("./assets/images/iti.jpeg"), // Add ITI logo to assets/images/
      subHeader:
        "Joined ITI for Professional Diploma in System Administration and Cloud Computing",
      duration: "October 2025 - July 2026",
      descBullets: [
        "joined 9-month intensive diploma program at ITI",
        "Studied System Administration, Cloud Computing, and DevOps tools",
        "Studies included hands-on labs and real-world projects",
        "Completed a lot of practical assignments, projects, and exams to get International Certifications and build skills"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "DevOps & Automation",
      progressPercentage: "85%"
    },
    {
      Stack: "Linux System Administration",
      progressPercentage: "80%"
    },
    {
      Stack: "Containerization & Orchestration",
      progressPercentage: "75%"
    },
    {
      Stack: "Cloud Platforms (AWS)",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming (Python, Go, C++)",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false
};

// Work experience section
const workExperiences = {
  display: true,
  experience: [
    {
      role: "DEPI DevOps Track Scholarship",
      company: "Digital Egypt Pioneers Initiative",
      companylogo: require("./assets/images/depi_logo.png"), // Add DEPI logo
      date: "June 2025 – December 2025",
      location: "Alexandria, Egypt",
      desc: "6-Month intensive DevOps training program focusing on modern cloud and automation technologies.",
      descBullets: [
        "Gained hands-on experience in Linux system administration, including configuration and troubleshooting",
        "Trained in containerization using Docker and server automation with Ansible",
        "Mastered CI/CD pipelines with Jenkins and cloud deployment on AWS",
        "Learned monitoring and observability with Prometheus and Kubernetes orchestration"
      ]
    },
    {
      role: "IT (Information Technology) Intern",
      company: "PMS (Petroleum Marine Services)",
      companylogo: require("./assets/images/pms_logo.png"), // Add PMS logo
      date: "July 2024 – August 2024",
      location: "Alexandria, Egypt",
      desc: "Supported the IT team in day-to-day technical tasks and gained exposure to professional IT workflows.",
      descBullets: [
        "Supported the IT team in day-to-day technical tasks and troubleshooting",
        "Gained practical exposure to IT workflows and teamwork in a professional environment",
        "Worked with Linux basics, networking fundamentals, and version control systems",
        "Developed scripting skills in Bash and Python for automation tasks"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */
const openSource = {
  showGithubProfile: "false",
  display: false // Disabled the Open Source section
};

// Some big projects you have worked on
const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME MAJOR PROJECTS THAT I HAVE WORKED ON",
  projects: [
    {
      // image: require("./assets/images/dms_project.png"), // Add project image
      projectName: "AI-based Driver Monitoring System (DMS)",
      projectDesc:
        "Real-time AI-based Driver Monitoring System developed on BeagleBone AI-64 using IMX219 camera. Built and compared minimal Yocto and Buildroot Linux images with MIPI CSI-2 camera support.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/Abdelrahim-bebo/DMS-GP" // Add your project link
        }
      ]
    },
    // {
    //   image: require("./assets/images/docker_project.png"), // Add project image
    //   projectName: "Containerized Web Application",
    //   projectDesc: "Built and deployed a Python Flask web application using Docker containers. Utilized Docker Compose to manage multi-container environment with web application and database services.",
    //   footerLink: [
    //     {
    //       name: "Visit Project",
    //       url: "https://github.com/your-username/docker-web-app" // Add your project link
    //     }
    //   ]
    // },
    {
      // image: require("./assets/images/ansible_project.png"), // Add project image
      projectName: "Automated Node.js Deployment",
      projectDesc:
        "Developed and executed Ansible playbooks to automate system tasks like package installations, updates, and user management targeting multiple Ubuntu/RedHat servers simultaneously.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/Abdelrahim-bebo/Ansible-Deploying-nodejs_app" // Add your project link
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "KodeKloud DevOps Certifications",
      subtitle:
        "Completed comprehensive DevOps training including Jenkins, Ansible, Docker, Kubernetes, and Shell Scripting",
      image: require("./assets/images/kodekloud_logo.png"),
      footerLink: [
        {
          name: "View Certifications",
          url: "https://drive.google.com/drive/folders/1FRCB-p4C1-96G12lBX_QNOwzCxqgb7Lz?usp=drive_link" // Add your certificate verification link
        }
      ]
    },
    {
      title: "Linux System Administration",
      subtitle:
        "Completed multiple Linux fundamentals courses totaling 98+ hours of hands-on training",
      image: require("./assets/images/Linux.jpg"),
      footerLink: [] // Empty array since we don't have certificates yet
    },
    {
      title: "Programming Skills",
      subtitle:
        "Completed intensive programming courses in C++ (80 hrs), Python (50 hrs), and Golang",
      image: require("./assets/images/Python.png"),
      footerLink: [] // Empty array since we don't have certificates yet
    }
  ],
  display: true
};

// Blogs Section - You can add your Medium articles here
const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@your-medium-username/article-title",
      title: "Getting Started with DevOps: A Beginner's Journey",
      description:
        "My journey from Electronics Engineering to DevOps and the key lessons learned along the way."
    }
    // Add more blog posts as needed
  ],
  display: false // Set to true if you want to show blog section
};

// Talks Sections - If you have given any talks
const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    // Add your talks here if any
  ],
  display: false
};

// Podcast Section - If you have been on any podcasts
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+201044947347",
  email_address: "abdelrahimbebo@gmail.com",
  location: "SidiBeshr, Alexandria, Egypt"
};

// Twitter Section - Add your twitter username
const twitterDetails = {
  userName: "your_twitter_username", // Replace with your twitter username
  display: false // Set true to display this section, defaults to false
};

// GitHub Profile Card Settings
const isHireable = true;

// Splash Screen Settings
const splashScreen = {
  enabled: false, // Disabled splash screen
  animation: null,
  duration: 0
};

// SEO Related settings
const seo = {
  title: "Abdelrahim Badr Portfolio",
  description:
    "A passionate DevOps Engineer who loves building scalable automation pipelines and cloud infrastructure solutions.",
  og: {
    title: "Abdelrahim Badr Portfolio",
    type: "website",
    url: "https://Abdelrahim-bebo.github.io/"
  }
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  resumeLink:
    "https://drive.google.com/file/d/1RfJjixSuGwaephF76zv5Jvwp2v1HyExW/view?usp=sharing", // Replace with your Google Drive resume link,
  display: true // Set false to hide this section, defaults to true
};

// Illustration Settings
const illustration = {
  animated: false, // Disabled animations
  display: true, // Show the illustration
  imagePath: require("./assets/images/bebo2.jpg") // Using your second photo
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  aboutSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  splashScreen,
  seo,
  resumeSection,
  illustration
};
