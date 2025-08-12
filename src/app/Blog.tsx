import listedPosts from '../posts/listedPosts.json';
import tagColors from '../posts/tagColors.json';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Tag from '../components/Tag'
import Dropdown from '../components/Dropdown'

export default function Blog() {
  const [ selectedTag, setSelectedTag ] = useState<string>("All")
  
  const mainTags = ["All", "Mathematics", "Programming", "Experience"]
  
  let posts = listedPosts
  if ( selectedTag != "All") {
    posts = posts.filter(post => post.frontmatter.tags.includes(selectedTag))
  }

  return (
    <>
      {console.log(selectedTag)}
      <div className="mb-5 divide-x">
        {/* 
        Sorting by tags goes here. I can detect all the tags from json file and display them.

        Should like this:
        All | Mathematics | Software | Experience (All diff colors) (+See all tags button)
        These are master tags. Each post can only have one master tag. 
        
        The see all tags button should just show all tags so user can sort more specific topic.
        e.g Dimensionality Analysis, Group Theory, Python, Probability etc.

        I should decide on these tags beforehand and limit myself to them (Can add a couple extra ones later.)
        */}
        {mainTags.map(tag => (
          <Tag
            key={tag}
            label={tag}
            isActive={selectedTag == tag}
            onSelect={() => setSelectedTag(tag)}
          />
        ))}
        
          <Dropdown label={<span className='p-2'><span className={`${!mainTags.includes(selectedTag)? `text-black bg-white` : `hover:bg-opacity-60 text-white`} hover:bg-white hover:text-black`}>More</span></span>} content={
            Object.keys(tagColors).map( tag => (
              !mainTags.includes(tag) &&
              <Tag
                key={tag}
                label={tag}
                isActive={selectedTag == tag}
                onSelect={() => setSelectedTag(tag)}
              />
            ))
          }/>
      </div>
      <div>
        <ul className="space-y-4">
          {posts.map((post) => (
            <li
              key={post.id}
              className="p-5 border-2 border-white"
            >
              <h2 className="text-lg">
                <Link className="font-bold hover:text-white hover:underline decoration-blue-400 transition" to={`/blog/${post.id}`}>
                  {post.frontmatter.title}
                </Link> [<Tag label={post.frontmatter.tags[0]} isActive={selectedTag == post.frontmatter.tags[0]} onSelect={() => setSelectedTag(post.frontmatter.tags[0])} />] {/* This will be the master tag. Hovering over it will highlight with correct color and clicking will sort by that tag.*/}
              </h2>

              <p className="my-2">{post.frontmatter.description}</p>

              <Dropdown label={<span className={`${!mainTags.includes(selectedTag)? `text-black bg-white` : `hover:bg-opacity-60`} hover:bg-white hover:text-black text-xs underline`}>Show all tags</span>} content={
                post.frontmatter.tags.map( tag => (
                <Tag
                  key={tag}
                  label={tag}
                  isActive={selectedTag == tag}
                  onSelect={() => setSelectedTag(tag)}
                />
                ))
              }/>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
