export type CourseTab = "about" | "lessons" | "reviews";

export const courseDetailsPath = "/courses/build-digital-asset";

export const courseRatingBreakdown = [
  { count: 720, stars: 5 },
  { count: 120, stars: 4 },
  { count: 21, stars: 3 },
  { count: 12, stars: 2 },
  { count: 16, stars: 1 },
] as const;

const reviewCount = courseRatingBreakdown.reduce(
  (total, row) => total + row.count,
  0,
);
const ratingTotal = courseRatingBreakdown.reduce(
  (total, row) => total + row.count * row.stars,
  0,
);

export const courseSummary = {
  title: "Build Digital Asset: A Comprehensive Guide",
  subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
  author: "purepearl studio",
  level: "Intermediate",
  rating: Math.round((ratingTotal / reviewCount) * 10) / 10,
  reviewCount,
  students: "199 Students",
  lessonCount: 112,
  duration: "24 hours",
  price: 25,
};

export const lessonPreview = [
  {
    number: "01",
    title: "Introduction to Digital Assets",
    duration: "12 mins",
  },
  {
    number: "02",
    title: "Design Principles for Impact",
    duration: "21 mins",
  },
  {
    number: "03",
    title: "Advanced Techniques in Digital Creation",
    duration: "16 mins",
  },
];

export const courseBenefits = [
  { icon: "resources", label: "Learning Resources" },
  { icon: "video", label: "Quality Lesson Videos" },
  { icon: "certificate", label: "Certificate of Completion" },
  { icon: "consultation", label: "Private Consultation" },
] as const;

export const courseDescription = [
  "Embark on an enlightening exploration into the world of digital creation with our comprehensive course, \"Build Digital Assets: A Comprehensive Guide.\" This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.",
  "In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
  "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.",
];

export const keyPoints = [
  "Foundational Concepts",
  "Design Principles Mastery",
  "Advanced Techniques in Digital Creation",
  "Project Showcase and Critique",
  "Optimizing for Various Platforms",
  "Digital Asset Management Best Practices",
  "Monetization Strategies",
  "Capstone Project: Building Your Portfolio",
];

export const courseModules = [
  {
    title: "Module 1: Introduction to Digital Assets",
    description:
      "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
  },
  {
    title: "Module 2: Design Principles for Impact",
    description:
      "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
  },
  {
    title: "Module 3: Advanced Techniques in Digital Creation",
    description:
      "Build on the fundamentals with advanced composition, reusable workflows, and practical production techniques for polished digital assets.",
  },
  {
    title: "Module 4: User-Centric Design Strategies",
    description:
      "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
  },
  {
    title: "Module 5: Interactive Media and Engagement",
    description:
      "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
  },
  {
    title: "Module 6: Project Showcase and Critique",
    description:
      "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
  },
  {
    title: "Module 7: Optimizing Digital Assets for Various Platforms",
    description:
      "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
  },
];

export const reviews = [
  {
    avatar: "/assets/hero/avatars/avatar-08.png",
    name: "PurePearl Studio",
    role: "UI/UX Designer",
    date: "September 12, 2025",
    dateTime: "2025-09-12",
    rating: 5,
    quote:
      "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!",
  },
  {
    avatar: "/assets/hero/avatars/avatar-04.png",
    name: "Albert Flores",
    role: "UI/UX Designer",
    date: "August 28, 2025",
    dateTime: "2025-08-28",
    rating: 5,
    quote:
      "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
  },
  {
    avatar: "/assets/hero/avatars/avatar-03.png",
    name: "Cody Fisher",
    role: "UI/UX Designer",
    date: "August 3, 2025",
    dateTime: "2025-08-03",
    rating: 4,
    quote:
      "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
  },
  {
    avatar: "/assets/hero/avatars/avatar-06.png",
    name: "Brooklyn Simmons",
    role: "UI/UX Designer",
    date: "July 19, 2025",
    dateTime: "2025-07-19",
    rating: 5,
    quote:
      "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
  },
];
