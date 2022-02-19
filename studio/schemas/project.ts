import { DocumentIcon } from "@sanity/icons"

export type Project = {
  title: string
  slug: string
  image: {
    asset: {
      url: string
    }
  }
  stack: string[]
  date: string
  shortDescription: string
  description: string
  demo: string
  code: string
}

export default {
  name: "project",
  title: "Project",
  icon: DocumentIcon,
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "stack",
      title: "Stack",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "ShortDescription",
      title: "shortDescription",
      type: "blockContent",
    },
    {
      name: "Description",
      title: "description",
      type: "blockContent",
    },
    {
      name: "demo",
      title: "Demo",
      type: "url",
    },
    {
      name: "code",
      title: "Code",
      type: "url",
    },
  ],
}
