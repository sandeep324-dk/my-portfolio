// Central content file — edit this to update the whole site.

export const personal = {
  name: 'Sandeep D K',
  logo: 'Sandeep.dev',
  role: 'Full Stack Java Developer',
  location: 'Bengaluru, Karnataka',
  phone: '+91 6363215657',
  email: 'sandeepdk.324@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sandeep-dk-b1663b37b/',
  github: 'https://github.com/sandeep324-dk',
  resumeUrl: '/resume.pdf', // drop your resume PDF into /public and keep this filename
  roles: [
    'Java Full Stack Developer',
    'Spring Boot Developer',
    'MERN Stack Developer',
    'Problem Solver',
    'Software Engineer',
  ],
  summary:
    'Aspiring Full Stack Java Developer with strong knowledge of Java, OOP, DSA, JDBC, Hibernate, Spring, Spring Boot, and MERN Stack. Passionate about building scalable applications, solving real-world problems, and continuously learning modern technologies.',
}

export const aboutStats = [
  { label: 'Projects Completed', value: 4, suffix: '+' },
  { label: 'Technologies Learned', value: 20, suffix: '+' },
  { label: 'Problem Solving', value: 300, suffix: '+' },
  { label: 'Continuous Learning', value: 100, suffix: '%' },
]

export const aboutParagraphs = [
  "I'm a Computer Science undergraduate and aspiring Full Stack Java Developer, building my foundation on Java, Object-Oriented Programming and Data Structures & Algorithms, then extending it across Spring Boot and the MERN stack.",
  "I care about writing code that's easy to read a year from now, not just code that works today — clean architecture, sensible naming and small, testable pieces.",
  "Outside of coursework, I build things: a hostel management platform, an AI-powered video generator, weather apps — anything that lets me pair backend logic with a interface people actually enjoy using.",
]

export const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'JavaScript', level: 80 },
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Spring', level: 75 },
      { name: 'Spring Boot', level: 78 },
      { name: 'Hibernate', level: 72 },
      { name: 'JDBC', level: 80 },
      { name: 'Maven', level: 75 },
      // { name: 'Node.js', level: 75 },
      // { name: 'Express.js', level: 72 },
    ],
  },
  // {
  //   title: 'Frontend',
  //   skills: [
  //     { name: 'React.js', level: 82 },
  //     { name: 'Tailwind CSS', level: 85 },
  //     { name: 'Responsive Design', level: 88 },
  //   ],
  // },
  {
    title: 'Database',
    skills: [
      { name: 'MySQL', level: 80 },
      { name: 'Oracle', level: 68 },
      // { name: 'MongoDB', level: 75 },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'GitHub', level: 85 },
      { name: 'VS Code', level: 90 },
      // { name: 'Postman', level: 78 },
    ],
  },
]

export const projects = [
  {
    id: 'dormlink',
    title: 'DormLink — Bridging Hostel Life',
    description:
      'A full-stack hostel management platform built with the MERN stack and JWT authentication, enabling complaint tracking, student networking and dorm management.',
    features: [
      'JWT-based authentication and role-based access',
      'Complaint tracking and resolution workflow',
      'Admin dashboard with fee management module',
      'Full CRUD across student and hostel records',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    github: 'https://github.com/sandeep324-dk',
    demo: '',
    image: 'dormlink',
  },
  {
    id: 'ai-motion-graphics',
    title: 'AI Motion Graphics Video Generator',
    description:
      'An AI-powered text-to-video generation platform that automates motion graphics creation from a script prompt.',
    features: [
      'AI-based script generation pipeline',
      'Automated motion graphics rendering with Remotion',
      'Secure authentication and backend APIs',
      'Built on React.js, Next.js and Node.js',
    ],
    tech: ['React', 'Next.js', 'Node.js', 'Factory.ai', 'Remotion'],
    github: 'https://github.com/sandeep324-dk',
    demo: '',
    image: 'motion-graphics',
  },
  {
    id: 'HireHub – Campus Placement Management System',
    title: 'HireHub – Campus Placement Management System',
    description:
      'A comprehensive platform for managing campus placements, connecting students with recruiters and providing real-time updates.',
    features: [
      'Student profile management and resume building',
      'Job posting and application tracking',
      'Interview scheduling and feedback collection',
      'Analytics and reporting for placement statistics',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    github: 'https://github.com/sandeep324-dk',
    demo: '',
    image: 'hirehub',
    github: 'https://github.com/sandeep324-dk',
    demo: '',
    image: 'weathersphere',
  },
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio Website',
    description:
      'A responsive portfolio showcasing projects, technical skills and certifications, focused on modern UI and smooth navigation.',
    features: [
      'Cross-device, responsive layout',
      'Smooth section-to-section navigation',
      'Built with semantic, accessible HTML/CSS',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/sandeep324-dk',
    demo: '',
    image: 'portfolio',
  },
]

export const education = [
  {
    degree: 'Bachelor of Engineering — Computer Science & Engineering',
    duration: 'December 2022 – May 2026',
    detail: 'CGPA: 6.92',
  },
]

export const certifications = [
  {
    title: 'Full-Stack JAVA Development',
    issuer: 'KodNest, Bengaluru',
  },
  {
    title: 'Full-Stack AI Development',
    issuer: 'GN JERBI Foundation, NIDHI DST iTBI Center',
  },
]

export const navLinks = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Education', to: 'education' },
  { label: 'Certifications', to: 'certifications' },
  { label: 'Contact', to: 'contact' },
]

export const floatingTech = ['Java', 'Spring Boot', 'React', 'Node.js', 'MongoDB', 'MySQL', 'Git', 'GitHub']
