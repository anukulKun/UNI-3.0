import Link from "next/link";
import { Button } from "@/components/ui/button";

const Component: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 md:px-6 md:py-12">
      <header className="mb-8 md:mb-12">
        <h1 className="text-3xl font-bold tracking-tight">Courses</h1>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-background rounded-lg overflow-hidden shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
          >
            <Link href={course.link} className="block" prefetch={false}>
              <img
                src={course.image}
                alt="Course Image"
                width="300"
                height="200"
                className="w-full h-48 object-cover"
                style={{ aspectRatio: "300/200", objectFit: "cover" }}
              />
              <div className="p-4 md:p-6">
                <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                <p className="text-muted-foreground text-sm mb-4">
                  {course.description}
                </p>
                <Button variant="outline" size="sm">
                  <Link href={`/courses/${course.courseId}`}>
                    View Course
                  </Link>
                </Button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const courses = [
  {
    courseId: 1,
    link: "#",
    image:
      "https://imgs.search.brave.com/KkU96l5vx155vI4d7iUBZLit2B2TGaeS5GMKlOj6kMU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jb21wb3NpdGUt/aW1hZ2Utd2ViLWNv/dXJzZS1hZF8xMTM0/LTM4ODYxLmpwZz9z/aXplPTYyNiZleHQ9/anBn",
    title: "Introduction to Web Development",
    description:
      "Learn the fundamentals of web development, including HTML, CSS, and JavaScript.",
  },
  {
    courseId: 1,
    link: "#",
    image:
      "https://imgs.search.brave.com/fQWFtD-024o4oYwHeg4i9mgSAl8P1e-vlY1BeOwVfnA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbG91/ZGluYXJ5LW1hcmtl/dGluZy1yZXMuY2xv/dWRpbmFyeS5jb20v/aW1hZ2VzL3dfMTAw/MCxjX3NjYWxlL3Yx/NzA4NjQyMTEyL0lt/cG9ydF9JbWFnZXNf/aW5fUmVhY3RfaGVh/ZGVyL0ltcG9ydF9J/bWFnZXNfaW5fUmVh/Y3RfaGVhZGVyLXBu/Zz9faT1BQQ",
    title: "Mastering React.js",
    description:
      "Dive deep into the world of React.js and learn how to build modern web applications.",
  },
  {
    courseId: 2,
    link: "#",
    image:
      "https://imgs.search.brave.com/zv8DAIX1dikR9D5IDCLDDa_400YzQkmHYwp_rak42Sw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM5/Nzk0MDYxNi9waG90/by9jb25jZXB0dWFs/LTMtbGV0dGVycy1r/ZXl3b3JkLWRzYS1v/bi1tdWx0aWNvbG9y/ZWQtc3RpY2tlcnMu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PU5qeGItM2RlR3Bf/aE9ZZXY2VFROZGpQ/c0RFMUh6ZlFYYjFu/VTBZUHcxYzg9",
    title: "Data Structures and Algorithms",
    description:
      "Explore the fundamental concepts of data structures and algorithms and learn how to solve complex problems.",
  },
  {
    courseId: 3,
    link: "#",
    image:
      "https://imgs.search.brave.com/xsHSJVoOMO7fwwHEB_VQtPclAUJe1oXC0F4FdeCVHDk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzIyOTM4/MDgvc2NyZWVuc2hv/dHMvMTgxMDg5MjAv/bWVkaWEvMzYzOWM5/NDIwOGE3MGRlOWNm/YTA2YjVjZjMzM2U1/NDguanBnP3Jlc2l6/ZT00MDB4MA",
    title: "Responsive Web Design",
    description:
      "Learn how to create websites that adapt seamlessly to different devices and screen sizes.",
  },
  {
    courseId: 4,
    link: "#",
    image:
      "https://imgs.search.brave.com/XpPn2ZxqnTl-aP1L6MZpIzDvlulTMDL0L43l_02wAhU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbG91/ZGluYXJ5LW1hcmtl/dGluZy1yZXMuY2xv/dWRpbmFyeS5jb20v/aW1hZ2VzL3dfMTAw/MCxjX3NjYWxlL3Yx/NzEwODc3NzI4L3B5/dGhvbl9pbWFnZV9k/aXNwbGF5X2hlYWRl/ci9weXRob25faW1h/Z2VfZGlzcGxheV9o/ZWFkZXItcG5nP19p/PUFB",
    title: "Mastering Python",
    description:
      "Dive into the world of Python and learn how to build powerful applications and scripts.",
  },
  {
    courseId: 5,
    link: "#",
    image:
      "https://imgs.search.brave.com/Gf77Ba5CzjBrCAyd7L63vfhyQxH2d6fDWEUSDeKAX3E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/ZGF0YWJhc2UtZGVz/aWduLWljb24tY29u/Y2VwdHVhbC1zZXJ2/ZXItcm9vbS1yYWNr/LWRhdGEtY2VudGVy/XzM5NDIyLTUyNy5q/cGc_c2l6ZT02MjYm/ZXh0PWpwZw",
    title: "Database Fundamentals",
    description:
      "Explore the core concepts of databases and learn how to design and manage data-driven applications.",
  },
];

export default Component;
