import Container from "../components/container"
import MoreStories from "../components/more-stories"
import HeroPost from "../components/hero-post"
import Intro from "../components/intro"
import Layout from "../components/layout"
import { getAllProjectsForHome } from "../lib/api"
import { Project } from "../studio/schemas/project"
import Head from "next/head"
import { CMS_NAME } from "../lib/constants"

type Props = {
  allProjects: Project[]
}

export default function Index({ allProjects }: Props) {
  const heroPost = allProjects[0]
  const morePosts = allProjects.slice(1)
  return (
    <>
      <Layout preview={false}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          <div className="whitespace-pre">
            {JSON.stringify(allProjects, null, 2)}
          </div>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.image}
              date={heroPost.date}
              slug={heroPost.slug}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allProjects = await getAllProjectsForHome()
  return {
    props: { allProjects },
    revalidate: 1,
  }
}
