import { useParams } from 'react-router-dom'

const posts = import.meta.glob('../content/posts/*.mdx', { eager: true })

export default function Post({ id }: {id?: string}) {
  const params = useParams<{id: string}>()
  const postId = id ?? params.id

  const post = posts[`../content/posts/${postId}.mdx`]

  if (!post) {
    return <p>404 - page not found</p>
  }

  const Content = post.default
  return (
    <article className="prose prose-invert max-w-none mt-4 text-justify">
      <Content />
    </article>
  )
}

