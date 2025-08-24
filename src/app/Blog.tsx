import listedPosts from '../content/listedPosts.json';
import tagColors from '../content/tagColors.json';
import { useState } from 'react';
import Tag from '../components/Tag'
import Dropdown from '../components/Dropdown'
import PostListing from '../components/PostListing';

export const blogMainTags = ["All", "Mathematics", "Programming", "Experience"]

export default function Blog() {
  const [ selectedTag, setSelectedTag ] = useState<string>("All")
  
  let posts = listedPosts
  if ( selectedTag != "All") {
    posts = posts.filter(post => post.frontmatter.tags.includes(selectedTag))
  }

  return (
    <>
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
        {blogMainTags.map(tag => (
          <Tag
            key={tag}
            label={tag}
            isActive={selectedTag == tag}
            onSelect={() => setSelectedTag(tag)}
          />
        ))}
        
          <Dropdown label={<span className='p-2'><span className={`${!blogMainTags.includes(selectedTag)? `text-black bg-white` : `hover:bg-opacity-60 text-white`} hover:bg-white hover:text-black`}>More</span></span>} content={
            Object.keys(tagColors).map( tag => (
              !blogMainTags.includes(tag) &&
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
            <PostListing 
              post={post}
              selectedTag={selectedTag}
              setSelectedTag={setSelectedTag}
              mainTags={blogMainTags}/>
          ))}
        </ul>
      </div>
    </>
  );
}
