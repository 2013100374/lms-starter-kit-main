import Image from "next/image";
import {
  Play,
  BookmarkPlus,
  Clock,
  Award,
  CheckCircle,
  Lock,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

export default function CourseDetail() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-gray-100">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="space-y-8">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-2xl border border-gray-800">
            <div className="relative">
              {/* Video Preview */}
              <div className="relative aspect-video bg-gray-800 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  alt="Course Preview"
                  width={1280}
                  height={720}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center">
                  <Button
                    size="lg"
                    className="rounded-full w-20 h-20 bg-rose-600 hover:bg-rose-700 shadow-xl transition-transform hover:scale-105"
                  >
                    <Play className="h-10 w-10" />
                  </Button>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/70 px-3 py-1 rounded-md text-sm font-medium">
                  Preview Available
                </div>
              </div>
            </div>

            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-100 tracking-tight">
                    LARAVEL API MASTER CLASS
                  </h1>
                  <p className="text-xl text-gray-300">
                    In this workshop series, you'll learn how to design,
                    version, build, and protect a web API using Laravel. We'll
                    begin from scratch with a basic Laravel project, and
                    construct a fully-featured API one lesson at a time.
                  </p>

                  <div className="flex items-center gap-3">
                    <Button
                      variant="link"
                      className="text-rose-400 hover:text-rose-300 p-0 h-auto flex items-center gap-2"
                    >
                      <User className="h-4 w-4" />
                      <span>View Instructor Profile</span>
                    </Button>
                  </div>
                </div>
                <div className="shrink-0">
                  <Image
                    src="/placeholder.svg?height=160&width=160"
                    alt="Course Icon"
                    width={160}
                    height={160}
                    className="rounded-lg shadow-lg border border-gray-700"
                  />
                </div>
              </div>

              {/* Course Stats */}
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-rose-400" />
                  <span className="text-gray-300">4h 44m</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-rose-400" />
                  <span className="text-gray-300">24 episodes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-rose-400" />
                  <span className="text-gray-300">Advanced</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-rose-500/20 text-rose-400 hover:bg-rose-500/30 border-none">
                    Frameworks
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-gray-700/50 text-gray-300 hover:bg-gray-700 border-none">
                    Last Updated: Apr 20, 2024
                  </Badge>
                </div>
              </div>

              {/* Enrollment Section */}
              <div className="bg-gradient-to-r from-gray-800 to-gray-800/50 rounded-xl p-8 mb-8 border border-gray-700/50 shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-4xl font-bold text-white">
                        $79.99
                      </span>
                      <span className="text-xl text-gray-400 line-through">
                        $129.99
                      </span>
                      <Badge className="bg-green-600/90 text-white border-none px-3 py-1 text-sm">
                        38% OFF
                      </Badge>
                    </div>
                    <p className="text-gray-300">
                      Limited time offer. Sale ends in{" "}
                      <span className="text-white font-semibold">2 days</span>.
                    </p>
                  </div>
                  <Button
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 h-14 px-8 text-lg font-medium rounded-lg shadow-lg transition-transform hover:scale-105"
                  >
                    Enroll Now
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Course Content Tabs */}
          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-xl border border-gray-800">
            <Tabs defaultValue="lessons" className="w-full">
              <div className="border-b border-gray-800">
                <div className="px-6">
                  <TabsList className="bg-transparent h-16 w-full justify-start space-x-8">
                    <TabsTrigger
                      value="lessons"
                      className="data-[state=active]:border-b-2 data-[state=active]:border-rose-500 data-[state=active]:text-white data-[state=active]:shadow-none rounded-none px-2 py-4 h-full text-lg"
                    >
                      Lessons
                    </TabsTrigger>
                    <TabsTrigger
                      value="projects"
                      className="data-[state=active]:border-b-2 data-[state=active]:border-rose-500 data-[state=active]:text-white data-[state=active]:shadow-none rounded-none px-2 py-4 h-full text-lg"
                    >
                      Projects
                    </TabsTrigger>
                    <TabsTrigger
                      value="resources"
                      className="data-[state=active]:border-b-2 data-[state=active]:border-rose-500 data-[state=active]:text-white data-[state=active]:shadow-none rounded-none px-2 py-4 h-full text-lg"
                    >
                      Resources
                    </TabsTrigger>
                  </TabsList>
                </div>
              </div>

              <TabsContent
                value="lessons"
                className="p-6 md:p-8 focus-visible:outline-none focus-visible:ring-0"
              >
                <div className="space-y-10">
                  {/* Section 1 */}
                  <div>
                    <h3 className="text-xl font-bold text-rose-500 mb-6">
                      // WHAT YOU NEED
                    </h3>

                    <div className="space-y-4">
                      <div className="bg-gray-800/50 rounded-xl overflow-hidden hover:bg-gray-800/80 transition-colors border border-gray-700/50">
                        <div className="p-6">
                          <div className="flex items-start gap-6">
                            <div className="bg-rose-500/20 text-rose-400 rounded-full w-12 h-12 flex items-center justify-center shrink-0 border border-rose-500/30">
                              <span className="font-bold">01</span>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-xl font-bold mb-3">
                                Status 200
                              </h4>
                              <p className="text-gray-300 mb-4">
                                We'll start our API from scratch with a basic
                                Laravel project and build some simple routes
                                that return JSON-formatted data. We'll also
                                write a trait that we can use in our API
                                controllers to simplify...
                              </p>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <Clock className="h-4 w-4 text-gray-400" />
                                  <span className="text-sm text-gray-400">
                                    7m 59s
                                  </span>
                                </div>
                                <Badge className="bg-green-600/90 text-white border-none">
                                  Free to Watch!
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-800/50 rounded-xl overflow-hidden hover:bg-gray-800/80 transition-colors border border-gray-700/50">
                        <div className="p-6">
                          <div className="flex items-start gap-6">
                            <div className="bg-rose-500/20 text-rose-400 rounded-full w-12 h-12 flex items-center justify-center shrink-0 border border-rose-500/30">
                              <span className="font-bold">02</span>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-xl font-bold mb-3">
                                Working with Postman
                              </h4>
                              <p className="text-gray-300 mb-4">
                                The browser isn't a sufficient tool for working
                                with web APIs. Instead, we need an HTTP
                                debugger. There are many available, but we'll
                                use Postman in this series. The right tool makes
                                all the difference...
                              </p>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <Clock className="h-4 w-4 text-gray-400" />
                                  <span className="text-sm text-gray-400">
                                    9m 11s
                                  </span>
                                </div>
                                <Badge className="bg-green-600/90 text-white border-none">
                                  Free to Watch!
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 2 */}
                  <div>
                    <h3 className="text-xl font-bold text-rose-500 mb-6">
                      // SETUP THE SYSTEM
                    </h3>

                    <div className="space-y-4">
                      <div className="bg-gray-800/50 rounded-xl overflow-hidden hover:bg-gray-800/80 transition-colors border border-gray-700/50">
                        <div className="p-6">
                          <div className="flex items-start gap-6">
                            <div className="bg-rose-500/20 text-rose-400 rounded-full w-12 h-12 flex items-center justify-center shrink-0 border border-rose-500/30">
                              <span className="font-bold">03</span>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-xl font-bold mb-3">
                                Designing the Url
                              </h4>
                              <p className="text-gray-300 mb-4">
                                Every application has a user interface—even web
                                APIs! Except that our UI is the URL because
                                that's how users interact with our application.
                                So, it's important to think about our URLs and
                                design them to be...
                              </p>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <Clock className="h-4 w-4 text-gray-400" />
                                  <span className="text-sm text-gray-400">
                                    8m 04s
                                  </span>
                                </div>
                                <Badge className="bg-green-600/90 text-white border-none">
                                  Free to Watch!
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-800/50 rounded-xl overflow-hidden hover:bg-gray-800/80 transition-colors border border-gray-700/50">
                        <div className="p-6">
                          <div className="flex items-start gap-6">
                            <div className="bg-rose-500/20 text-rose-400 rounded-full w-12 h-12 flex items-center justify-center shrink-0 border border-rose-500/30">
                              <span className="font-bold">04</span>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-xl font-bold mb-3">
                                How to Version Your API
                              </h4>
                              <p className="text-gray-300 mb-4">
                                Versioning is one of the most important parts of
                                designing an API. It protects you from making
                                breaking changes for your clients, and it helps
                                to structure your project in a logical manner.
                                Let's look...
                              </p>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <Clock className="h-4 w-4 text-gray-400" />
                                  <span className="text-sm text-gray-400">
                                    9m 28s
                                  </span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Lock className="h-4 w-4 text-gray-400" />
                                  <span className="text-sm text-gray-400">
                                    Premium
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-800/50 rounded-xl overflow-hidden hover:bg-gray-800/80 transition-colors border border-gray-700/50">
                        <div className="p-6">
                          <div className="flex items-start gap-6">
                            <div className="bg-rose-500/20 text-rose-400 rounded-full w-12 h-12 flex items-center justify-center shrink-0 border border-rose-500/30">
                              <span className="font-bold">05</span>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-xl font-bold mb-3">
                                Authentication Using Tokens
                              </h4>
                              <p className="text-gray-300 mb-4">
                                Unlike typical web applications, APIs rely on
                                tokens to determine if clients are
                                authenticated. In this episode, you'll learn how
                                to generate Sanctum tokens for clients and
                                protect routes with the Sanctum...
                              </p>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <Clock className="h-4 w-4 text-gray-400" />
                                  <span className="text-sm text-gray-400">
                                    9m 10s
                                  </span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Lock className="h-4 w-4 text-gray-400" />
                                  <span className="text-sm text-gray-400">
                                    Premium
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent
                value="projects"
                className="p-6 md:p-8 focus-visible:outline-none focus-visible:ring-0"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-gray-800/50 border-gray-700/50 rounded-xl overflow-hidden hover:bg-gray-800/80 transition-colors shadow-lg">
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3">
                        Project 1: RESTful Blog API
                      </h3>
                      <p className="text-gray-300 mb-4">
                        Build a complete blog API with posts, comments, and user
                        authentication. Implement proper REST principles and
                        JSON responses.
                      </p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Difficulty</span>
                          <span className="text-rose-400">Intermediate</span>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card className="bg-gray-800/50 border-gray-700/50 rounded-xl overflow-hidden hover:bg-gray-800/80 transition-colors shadow-lg">
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3">
                        Project 2: E-commerce API
                      </h3>
                      <p className="text-gray-300 mb-4">
                        Create an API for an e-commerce platform with products,
                        categories, cart functionality, and order processing.
                      </p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Difficulty</span>
                          <span className="text-rose-400">Advanced</span>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card className="bg-gray-800/50 border-gray-700/50 rounded-xl overflow-hidden hover:bg-gray-800/80 transition-colors shadow-lg">
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3">
                        Project 3: API Authentication System
                      </h3>
                      <p className="text-gray-300 mb-4">
                        Implement a robust authentication system with Laravel
                        Sanctum, including token management, permissions, and
                        rate limiting.
                      </p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Difficulty</span>
                          <span className="text-rose-400">Advanced</span>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card className="bg-gray-800/50 border-gray-700/50 rounded-xl overflow-hidden hover:bg-gray-800/80 transition-colors shadow-lg">
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3">
                        Project 4: API Documentation
                      </h3>
                      <p className="text-gray-300 mb-4">
                        Learn to document your API using OpenAPI/Swagger and
                        create interactive documentation for your clients.
                      </p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Difficulty</span>
                          <span className="text-rose-400">Intermediate</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent
                value="resources"
                className="p-6 md:p-8 focus-visible:outline-none focus-visible:ring-0"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 shadow-lg">
                    <h3 className="text-xl font-bold mb-3">
                      Course Repository
                    </h3>
                    <p className="text-gray-300 mb-4">
                      Access the complete source code for all examples and
                      projects. Clone the repository or download as a ZIP file.
                    </p>
                    <Button className="bg-rose-600 hover:bg-rose-700">
                      Download ZIP
                    </Button>
                  </div>

                  <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 shadow-lg">
                    <h3 className="text-xl font-bold mb-3">
                      Laravel Documentation
                    </h3>
                    <p className="text-gray-300 mb-4">
                      Official Laravel documentation for reference. Includes
                      guides, API documentation, and best practices.
                    </p>
                    <Button className="bg-rose-600 hover:bg-rose-700">
                      Visit Website
                    </Button>
                  </div>

                  <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 shadow-lg">
                    <h3 className="text-xl font-bold mb-3">
                      Postman Collection
                    </h3>
                    <p className="text-gray-300 mb-4">
                      Pre-configured Postman collection for testing the API
                      endpoints. Import directly into Postman.
                    </p>
                    <Button className="bg-rose-600 hover:bg-rose-700">
                      Download Collection
                    </Button>
                  </div>

                  <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 shadow-lg">
                    <h3 className="text-xl font-bold mb-3">Cheat Sheets</h3>
                    <p className="text-gray-300 mb-4">
                      Quick reference guides for API development concepts.
                      Includes REST principles, status codes, and more.
                    </p>
                    <Button className="bg-rose-600 hover:bg-rose-700">
                      Download PDF
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
}
