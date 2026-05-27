// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "My research focuses on State Estimation, SLAM, and Multi-Sensor Fusion for autonomous systems.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-minor-projects",
          title: "minor_projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/other%20projects/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "projects-within-hand-manipulation-using-rl",
          title: 'Within Hand Manipulation using RL',
          description: "Model-free reinforcement learning approach for planning within-hand manipulation tasks in robotic systems with multiple DOF and contact points.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_within_hand_manipulation/";
            },},{id: "projects-multi-goal-rl-for-legged-robot-footstep-planning",
          title: 'Multi-Goal RL for Legged Robot Footstep Planning',
          description: "Iterative optimization method using multi-goal reinforcement learning for real-time dynamic footstep planning over a receding horizon for legged robots.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_multi_goal_rl_puck_pushing/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Resume.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%6D%62%75%72%67%75%6C@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/cmburgul", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/chinmay-burgul", "_blank");
        },
      },];
