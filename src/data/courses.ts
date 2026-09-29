export type Course = {
  id: number;
  title: string;
  author: string;
  image: string;
  categories: string[];
  rating: number;
  price: number;
};

export const courseCategories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
  "+ More",
] as const;

export const courses: Course[] = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    image: "/assets/courses/thumbnails/course-01-figma-design.png",
    categories: ["UI/UX Design", "Graphic Design", "Web Development"],
    rating: 4.5,
    price: 25,
  },
  {
    id: 2,
    title: "Build Digital Asset",
    author: "purepearl studio",
    image: "/assets/courses/thumbnails/course-02-digital-assets.png",
    categories: ["Digital Illustration", "Animation", "Graphic Design"],
    rating: 4.5,
    price: 25,
  },
  {
    id: 3,
    title: "the Power of Big Data",
    author: "purepearl studio",
    image: "/assets/courses/thumbnails/course-03-big-data.png",
    categories: ["Data Science", "Web Development"],
    rating: 4.5,
    price: 25,
  },
  {
    id: 4,
    title: "Balancing Productivity and Work",
    author: "purepearl studio",
    image: "/assets/courses/thumbnails/course-04-productivity.png",
    categories: ["Productivity", "Freelance & Entrepreneurship"],
    rating: 4.5,
    price: 25,
  },
  {
    id: 5,
    title: "Mastering Money Management",
    author: "purepearl studio",
    image: "/assets/courses/thumbnails/course-05-money-management.png",
    categories: ["Freelance & Entrepreneurship", "Marketing"],
    rating: 4.5,
    price: 25,
  },
  {
    id: 6,
    title: "From Idea to Startup Success",
    author: "purepearl studio",
    image: "/assets/courses/thumbnails/course-06-startup-success.png",
    categories: ["Marketing", "Creative Marketing", "Social Media"],
    rating: 4.5,
    price: 25,
  },
];
