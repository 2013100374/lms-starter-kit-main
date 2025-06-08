import { BookOpen, ChevronRight, Star } from "lucide-react";
import Link from "next/link";
import React from "react";
export type CourseBrief = {
  title: string;
  description: string;
  icon: React.JSX.Element;
  rating: number;
  lessons: number;
  category: string;
  technologies: string[];
  level: string;
};
// Helper function to get category label
function getCategoryLabel(category: string) {
  switch (category) {
    case "by-skill":
      return "By Skill";
    case "by-project":
      return "By Project";
    case "with-languages":
      return "With Languages";
    default:
      return "Course";
  }
}

// Helper function to get level label
function getLevelLabel(level: string) {
  switch (level) {
    case "beginner":
      return "Beginner";
    case "intermediate":
      return "Intermediate";
    case "advanced":
      return "Advanced";
    default:
      return "All Levels";
  }
}
export default function CourseCard({ course }: { course: CourseBrief }) {
  return (
    <div className="bg-gray-800/30 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition duration-300">
      <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-50 flex items-center justify-center">
          {course.icon}
        </div>
        <div className="absolute top-4 left-4 px-2 py-1 bg-black/30 backdrop-blur-sm rounded-md text-xs font-medium">
          {getCategoryLabel(course.category)}
        </div>
        <div className="absolute top-4 right-4 flex items-center">
          <div className="flex items-center px-2 py-1 bg-black/30 backdrop-blur-sm rounded-md">
            <Star className="w-3 h-3 text-yellow-400 mr-1" />
            <span className="text-xs font-medium">{course.rating}</span>
          </div>
        </div>
        {/* Level Badge */}
        <div className="absolute bottom-4 right-4 px-2 py-1 bg-black/30 backdrop-blur-sm rounded-md text-xs font-medium">
          {getLevelLabel(course.level)}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </div>

      <div className="p-6">
        <Link href={`/courses/courses-slug`} className="font-bold text-lg mb-2">
          {course.title}
        </Link>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {course.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2 py-1 text-xs rounded-md bg-gray-700/50"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center text-sm">
            <BookOpen className="w-4 h-4 mr-1 text-gray-400" />
            <span className="text-gray-400">{course.lessons} lessons</span>
          </div>
          <Link
            href={`/courses/courses-slug`}
            className="text-purple-400 font-medium flex items-center"
          >
            View Course <ChevronRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
