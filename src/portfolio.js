/* Change this file to get your Personal Portfolio */

import emoji from "react-easy-emoji";

const greeting = {
  username: "Abdelrahim Badr",
  title: "Hi all I'm Abdelrahim",
  subTitle: emoji(
    "A passionate DevOps Engineer 🚀 with experience in Linux system administration, containerization, and cloud infrastructure. I build scalable automation pipelines and support modern DevOps practices."
  ),
  resumeLink: "https://drive.google.com/file/d/1RfJjixSuGwaephF76zv5Jvwp2v1HyExW/view?usp=sharing", // Replace with your Google Drive resume link
  displayGreeting: true
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
  subTitle: "PASSIONATE DEVOPS ENGINEER WHO WANTS TO EXPLORE CLOUD TECHNOLOGIES AND AUTOMATION",
  skills: [
    emoji("⚡ Build and maintain CI/CD pipelines using Jenkins and GitHub Actions"),
    emoji("⚡ Containerize applications using Docker and orchestrate with Kubernetes"),
    emoji("⚡ Automate infrastructure provisioning and configuration management using Ansible and Terraform"),
    emoji("⚡ Deploy and manage applications on AWS cloud platforms"),
    emoji("⚡ Monitor system performance and implement logging solutions"),
    emoji("⚡ Develop scripts in Bash and Python for automation tasks")
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
      fontAwesomeClassname: "fab fa-go"
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
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true
};

// Some big projects you have worked on
const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME MAJOR PROJECTS THAT I HAVE WORKED ON",
  projects: [
    {
      // image: require("./assets/images/dms_project.png"), // Add project image
      projectName: "AI-based Driver Monitoring System (DMS)",
      projectDesc: "Real-time AI-based Driver Monitoring System developed on BeagleBone AI-64 using IMX219 camera. Built and compared minimal Yocto and Buildroot Linux images with MIPI CSI-2 camera support.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/Alaaabdelmoneam/DMS-GP" // Add your project link
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
      projectDesc: "Developed and executed Ansible playbooks to automate system tasks like package installations, updates, and user management targeting multiple Ubuntu/RedHat servers simultaneously.",
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
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "KodeKloud DevOps Certifications",
      subtitle: "Completed comprehensive DevOps training including Jenkins, Ansible, Docker, Kubernetes, and Shell Scripting",
      image: require("./assets/images/kodekloud_logo.png"),
      footerLink: [
        {
          name: "View Certifications",
          url: "#" // Add your certificate verification link
        }
      ]
    },
    {
      title: "Linux System Administration",
      subtitle: "Completed multiple Linux fundamentals courses totaling 98+ hours of hands-on training",
      // image: require("./assets/images/linux_logo.png"),
      footerLink: [
        {
          name: "View Certificates",
          url: "#" // Add certificate link
        }
      ]
    },
    {
      title: "Programming Certifications", 
      subtitle: "Completed intensive programming courses in C++ (80 hrs), Python (50 hrs), and Golang",
      // image: require("./assets/images/programming_logo.png"),
      footerLink: [
        {
          name: "View Certificates",
          url: "#" // Add certificate link
        }
      ]
    }
  ],
  display: true
};

// Blogs Section - You can add your Medium articles here
const blogSection = {
  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@your-medium-username/article-title",
      title: "Getting Started with DevOps: A Beginner's Journey",
      description: "My journey from Electronics Engineering to DevOps and the key lessons learned along the way."
    }
    // Add more blog posts as needed
  ],
  display: false // Set to true if you want to show blog section
};

// Talks Sections - If you have given any talks
const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

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
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+201090337089",
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
  enabled: true, // set false to disable splash screen
  animation: require("./assets/lottie/splashAnimation.json"),
  duration: 2000 // Set animation duration as per your animation
};

// SEO Related settings
const seo = {
  title: "Abdelrahim Badr Portfolio",
  description:
    "A passionate DevOps Engineer who loves building scalable automation pipelines and cloud infrastructure solutions.",
  og: {
    title: "Abdelrahim Badr Portfolio",
    type: "website",
    url: "https://Abdelrahim-bebo.github.io/",
  },
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  resumeLink: "https://drive.google.com/file/d/1RfJjixSuGwaephF76zv5Jvwp2v1HyExW/view?usp=sharing", // Replace with your Google Drive resume link,
  display: true // Set false to hide this section, defaults to true
};

// Illustration Settings
const illustration = {
  animated: true // Set to false to use static SVG
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