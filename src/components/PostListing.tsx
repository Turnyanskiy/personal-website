import { Link } from 'react-router-dom'
import Tag from './Tag'
import Dropdown from './Dropdown'

export default function PostListing({
  post,
  selectedTag,
  setSelectedTag,
  mainTags,
}: {
  post: any;
  selectedTag: string;
  setSelectedTag: (tag: string) => void;
  mainTags: string[];
}) {
  return (
    <li
      key={post.id}
      className="p-5 border-2 border-white"
    >
      <h2 className="text-lg m-0">
        <Link className="font-bold hover:text-white hover:underline decoration-blue-400 transition" to={`/blog/${post.id}`}>
          {post.frontmatter.title}
        </Link> [<Tag label={post.frontmatter.tags[0]} isActive={selectedTag == post.frontmatter.tags[0]} onSelect={() => setSelectedTag(post.frontmatter.tags[0])} />] {/* This will be the master tag. Hovering over it will highlight with correct color and clicking will sort by that tag.*/}
      </h2>

      <p className="my-2">{post.frontmatter.description}</p>

      <Dropdown label={<span className={`${!mainTags.includes(selectedTag)? `text-black bg-white` : `hover:bg-opacity-60`} hover:bg-white hover:text-black text-xs underline`}>Show all tags</span>} content={
        post.frontmatter.tags.map( (tag: string) => (
        <Tag
          key={tag}
          label={tag}
          isActive={selectedTag == tag}
          onSelect={() => setSelectedTag(tag)}
        />
        ))
        }/>
    </li>
  )
}
