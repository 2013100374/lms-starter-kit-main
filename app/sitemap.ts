import { getBlogCategories, getBlogs } from "@/actions/blogs";
import { siteConfig } from "@/config/site";
export default async function sitemap() {
  const baseUrl = siteConfig.url;
  const blogs = (await getBlogs()) || [];
  const blogCategories = (await getBlogCategories()) || [];

  const blogUrls = blogs.map((blog) => {
    return {
      url: `${baseUrl}/blogs/${blog.slug}`,
      lastModified: new Date(),
    };
  });
  const blogCategoryUrls = blogCategories.map((cat) => {
    return {
      url: `${baseUrl}/blogs/category/${cat.slug}`,
      lastModified: new Date(),
    };
  });

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/showcases`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/feedback`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/change-logs`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/docs`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/agency`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    ...blogUrls,
    ...blogCategoryUrls,
  ];
}
