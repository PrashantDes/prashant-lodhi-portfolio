export type Resource = {
  title: string;
  href: string;
  description: string;
  category: "articles" | "documentation";
};

export const RESOURCE_LINKS: Resource[] = [
  {
    title: "Power BI Updates Blog",
    href: "https://community.fabric.microsoft.com/category/fabricupdatesblogs/blog/fbc_pbiupdatesblog",
    description:
      "Microsoft's monthly Power BI updates, covering new product features and improvements.",
    category: "articles",
  },
  {
    title: "MySQL Documentation",
    href: "https://dev.mysql.com/doc/",
    description:
      "Official MySQL manuals and reference guides for SQL, database administration, connectors, and tools.",
    category: "documentation",
  },
  {
    title: "AI for Data Analytics: How AI Improves Speed and Insight",
    href: "https://www.databricks.com/blog/how-ai-transforming-data-analytics",
    description:
      "An overview of AI across the analytics workflow, including automated data preparation, natural-language querying, and the changing role of analysts.",
    category: "articles",
  },
  {
    title: "What Is Microsoft Fabric? Features, Benefits & Uses",
    href: "https://www.dqlabs.ai/blog/microsoft-fabric/",
    description:
      "A guide to Microsoft Fabric, covering OneLake, Data Factory, Power BI, platform components, and how they work together.",
    category: "articles",
  },
];

export const PINNED = RESOURCE_LINKS.filter(
  (resource) => resource.category === "articles"
);

export const RESOURCES: { category: string; items: Resource[] }[] = [
  {
    category: "Documentation & References",
    items: RESOURCE_LINKS.filter(
      (resource) => resource.category === "documentation"
    ),
  },
];

const RESOURCE_LOGOS: Record<string, string> = {
  "community.fabric.microsoft.com": "/resources/fabric.png",
  "dev.mysql.com": "/resources/mysql.png",
  "www.databricks.com": "/resources/databricks.png",
  "www.dqlabs.ai": "/resources/dqlabs.ico",
};

export function resourceLogoUrl(href: string) {
  const hostname = new URL(href).hostname;
  return (
    RESOURCE_LOGOS[hostname] ||
    `https://www.google.com/s2/favicons?domain=${hostname}&sz=128`
  );
}
