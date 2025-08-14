import { useParams } from 'react-router-dom'

const posts = import.meta.glob('../posts/*.mdx', { eager: true })

export default function Post({ id }: {id?: string}) {
  const params = useParams<{id: string}>()
  const postId = id ?? params.id

  const post = posts[`../posts/${postId}.mdx`]

  if (!post) {
    return <p>404 - page not found</p>
  }

  const Content = post.default
  return (
    <article className="prose prose-invert max-w-none mt-10 text-justify">
      <Content />
    </article>
  )
}

