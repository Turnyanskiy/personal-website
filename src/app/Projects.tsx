import projectsJson from '../content/projects.json'
import Tag from '../components/Tag'
import Dropdown from '../components/Dropdown';
import tagColors from '../content/tagColors.json';
import { useState } from 'react';
import ProjectListing from '../components/ProjectListing';

export const projectMainTags = ["All", "Python", "TypeScript", "R"]

export default function Projects() {
  const [ selectedTag, setSelectedTag ] = useState<string>("All")

  const filteredProjects = projectsJson.filter(project => (project.tags.includes(selectedTag) || selectedTag == "All"))

  return (
      <>
      <div className="mb-5 divide-x">
      {projectMainTags.map(tag => (
          <Tag
            key={tag}
            label={tag}
            isActive={selectedTag == tag}
            onSelect={() => setSelectedTag(tag)}
          />
        ))}
        <Dropdown label={<span className='p-2'><span className={`${!projectMainTags.includes(selectedTag)? `text-black bg-white` : `hover:bg-opacity-60 text-white`} hover:bg-white hover:text-black`}>More</span></span>} content={
              Object.keys(tagColors).map( tag => (
                !projectMainTags.includes(tag) &&
                <Tag
                  key={tag}
                  label={tag}
                  isActive={selectedTag == tag}
                  onSelect={() => setSelectedTag(tag)}
                />
        ))}/>
      </div>
      <ul className="grid grid-cols-3 gap-3">
        {filteredProjects.map(project => (
            <ProjectListing project={project} selectedTag={selectedTag} setSelectedTag={setSelectedTag} mainTags={projectMainTags} />
          )
        )}
      </ul>
    </>
  )
}
