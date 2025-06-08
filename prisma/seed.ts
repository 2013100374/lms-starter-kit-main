import { UserRole } from "@prisma/client";
import { hash } from "bcryptjs";
import { db } from "./db";

async function main() {
  try {
    // Clean existing data
    console.log("🗑️ Cleaning existing data...");
    await db.blog.deleteMany();
    await db.blogCategory.deleteMany();
    await db.category.deleteMany();
    await db.user.deleteMany();

    // Create users
    console.log("👥 Creating users...");
    const currentYear = new Date().getFullYear();
    const adminPassword = `Admin@${currentYear}`;
    const userPassword = `User@${currentYear}`;
    const hashedAdminPassword = await hash(adminPassword, 10);
    const hashedUserPassword = await hash(userPassword, 10);
    const adminUser = await db.user.create({
      data: {
        name: "Admin User",
        firstName: "Admin",
        lastName: "User",
        email: "admin@admin.com",
        phone: "+1234567890",
        password: hashedAdminPassword,
        role: UserRole.ADMIN,
        jobTitle: "System Administrator",
        isVerfied: true,
        status: true,
      },
    });

    const regularUser = await db.user.create({
      data: {
        name: "Regular User",
        firstName: "Regular",
        lastName: "User",
        email: "user@user.com",
        phone: "+1987654321",
        password: hashedUserPassword,
        role: UserRole.USER,
        jobTitle: "Software Developer",
        isVerfied: true,
        status: true,
      },
    });
    console.log("Seeding Users completed successfully!");
    console.log("Admin credentials:", {
      email: "admin@admin.com",
      password: adminPassword,
    });
    console.log("User credentials:", {
      email: "user@user.com",
      password: userPassword,
    });
    // Create blog categories
    console.log("📁 Creating blog categories...");
    const blogCategories = await Promise.all([
      db.blogCategory.create({
        data: {
          name: "Development Tips",
          slug: "development-tips",
        },
      }),
      db.blogCategory.create({
        data: {
          name: "Best Practices",
          slug: "best-practices",
        },
      }),
      db.blogCategory.create({
        data: {
          name: "Tutorials",
          slug: "tutorials",
        },
      }),
      db.blogCategory.create({
        data: {
          name: "Product Updates",
          slug: "product-updates",
        },
      }),
      db.blogCategory.create({
        data: {
          name: "Case Studies",
          slug: "case-studies",
        },
      }),
    ]);

    // Create categories
    console.log("🏷️ Creating categories...");
    // const categories = await Promise.all([
    //   db.category.create({
    //     data: {
    //       title: "Authentication",
    //       slug: "authentication",
    //       imageUrl:
    //         "https://images.unsplash.com/photo-1633265486064-086b219458ec",
    //       description: "Everything about user authentication and authorization",
    //     },
    //   }),
    //   db.category.create({
    //     data: {
    //       title: "Database",
    //       slug: "database",
    //       imageUrl: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d",
    //       description: "Database management and optimization guides",
    //     },
    //   }),
    //   db.category.create({
    //     data: {
    //       title: "UI Components",
    //       slug: "ui-components",
    //       imageUrl:
    //         "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1",
    //       description: "Building beautiful and functional UI components",
    //     },
    //   }),
    //   db.category.create({
    //     data: {
    //       title: "API Development",
    //       slug: "api-development",
    //       imageUrl: "https://images.unsplash.com/photo-1557324232-b8917d8c3908",
    //       description: "Best practices for API development",
    //     },
    //   }),
    //   db.category.create({
    //     data: {
    //       title: "Performance",
    //       slug: "performance",
    //       imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    //       description: "Optimizing your application performance",
    //     },
    //   }),
    // ]);

    // Create blogs for each category
    console.log("📝 Creating blog posts...");
    // for (const category of blogCategories) {
    //   await db.blog.createMany({
    //     data: [
    //       {
    //         title: `Getting Started with ${category.name}`,
    //         slug: `getting-started-with-${category.slug}`,
    //         description: `A comprehensive guide to understanding ${category.name.toLowerCase()} in modern web development.`,
    //         thumbnail: `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000000)}`,
    //         content: `
    //           <h2>Introduction to ${category.name}</h2>
    //           <p>Welcome to our comprehensive guide on ${category.name.toLowerCase()}. In this article, we'll explore the fundamental concepts and best practices.</p>

    //           <h3>Why ${category.name} Matter</h3>
    //           <p>Understanding ${category.name.toLowerCase()} is crucial for building modern web applications. Let's dive into the key aspects:</p>

    //           <ul>
    //             <li>Fundamental concepts</li>
    //             <li>Best practices</li>
    //             <li>Common pitfalls</li>
    //             <li>Advanced techniques</li>
    //           </ul>

    //           <h3>Getting Started</h3>
    //           <p>To begin working with ${category.name.toLowerCase()}, you'll need to understand these core concepts:</p>

    //           <pre><code>
    //           // Example code block
    //           const example = "Hello World";
    //           console.log(example);
    //           </code></pre>

    //           <h3>Conclusion</h3>
    //           <p>By following these guidelines, you'll be well on your way to mastering ${category.name.toLowerCase()}.</p>
    //         `,
    //         published: true,
    //         featured: Math.random() > 0.5,
    //         authorId: Math.random() > 0.5 ? adminUser.id : regularUser.id,
    //         authorName: Math.random() > 0.5 ? adminUser.name : regularUser.name,
    //         authorImage:
    //           "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    //         authorTitle:
    //           Math.random() > 0.5 ? adminUser.jobTitle : regularUser.jobTitle,
    //         categoryId: category.id,
    //         categoryTitle: category.name,
    //         readingTime: Math.floor(Math.random() * 10) + 5,
    //       },
    //       {
    //         title: `Advanced ${category.name} Techniques`,
    //         slug: `advanced-${category.slug}-techniques`,
    //         description: `Take your ${category.name.toLowerCase()} skills to the next level with these advanced techniques.`,
    //         thumbnail: `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000000)}`,
    //         content: `
    //           <h2>Advanced ${category.name} Techniques</h2>
    //           <p>In this advanced guide, we'll explore sophisticated approaches to ${category.name.toLowerCase()}.</p>

    //           <h3>Advanced Concepts</h3>
    //           <p>Let's dive into some advanced concepts that will help you master ${category.name.toLowerCase()}:</p>

    //           <ul>
    //             <li>Advanced patterns</li>
    //             <li>Performance optimization</li>
    //             <li>Security considerations</li>
    //             <li>Scalability techniques</li>
    //           </ul>

    //           <h3>Implementation Details</h3>
    //           <p>Here's how to implement these advanced techniques:</p>

    //           <pre><code>
    //           // Advanced implementation
    //           const advancedExample = {
    //             setup() {
    //               // Configuration
    //             },
    //             execute() {
    //               // Implementation
    //             }
    //           };
    //           </code></pre>

    //           <h3>Summary</h3>
    //           <p>These advanced techniques will help you build more robust and scalable applications.</p>
    //         `,
    //         published: true,
    //         featured: Math.random() > 0.5,
    //         authorId: Math.random() > 0.5 ? adminUser.id : regularUser.id,
    //         authorName: Math.random() > 0.5 ? adminUser.name : regularUser.name,
    //         authorImage:
    //           "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    //         authorTitle:
    //           Math.random() > 0.5 ? adminUser.jobTitle : regularUser.jobTitle,
    //         categoryId: category.id,
    //         categoryTitle: category.name,
    //         readingTime: Math.floor(Math.random() * 10) + 5,
    //       },
    //     ],
    //   });
    // }

    console.log("✅ Seed data created successfully");
  } catch (error) {
    console.error("Error seeding data:", error);
    throw error;
  } finally {
    await db.$disconnect();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
