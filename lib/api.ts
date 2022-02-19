import { Project } from "../studio/schemas/project"
import client, { previewClient } from "./sanity"

const getUniqueProjects = (projects: Project[]): Project[] => {
  const slugs = new Set()
  return projects.filter((project) => {
    if (slugs.has(project.slug)) {
      return false
    } else {
      slugs.add(project.slug)
      return true
    }
  })
}

const projectFields = `
  _id,
  title,
  'date': publishedAt,
  'slug': slug.current,
  'image': mainImage,
  'stack': stack,
  'shortDescription': shortDescription,
  'description': description,
  'demo': demo,
  'code': code
`

const getClient = (preview) => (preview ? previewClient : client)

export async function getAllProjectsForHome(): Promise<Project[]> {
  const results = await getClient(false)
    .fetch(`*[_type == "project"] | order(publishedAt desc){
      ${projectFields}
    }`)
  return getUniqueProjects(results)
}
