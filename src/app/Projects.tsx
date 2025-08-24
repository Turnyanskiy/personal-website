import projectsJson from '../content/projects.json'
import Tag from '../components/Tag'
import Dropdown from '../components/Dropdown';
import githubImg from '../assets/images/github.svg';
import tagColors from '../content/tagColors.json';
import { useState } from 'react';


export default function Projects() {
  const [ selectedTag, setSelectedTag ] = useState<string>("All")
  const mainTags = ["All", "UNDECIDED", "UNDECIDED", "UNDECIDED"]

  const filteredProjects = projectsJson.filter(project => (project.tags.includes(selectedTag) || selectedTag == "All"))

  return (
      <>
      <div className="mb-5 divide-x">
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
        ))}/>
      </div>
      <ul className="grid grid-cols-3 gap-3">
        {filteredProjects.map(project => {
            return (
              <li className="p-5 text border-2 border-white aspect-square flex flex-col justify-between">
                <div>
                  <a href={project.github} target="_blank"><h2 className="text-center font-bold text-xl hover:text-white hover:underline decoration-blue-400 transition">{project.title} <img src={githubImg} className="inline h-[1em]"/></h2></a>
                  <p className="line-clamp-10 text-justify">{project.description}</p>
                </div>
                <div className="flex justify-center divide-x">
                {project.tags.slice(0, 2).map( tag => (
                    <Tag key={tag} label={tag} isActive={selectedTag == tag} onSelect={() => setSelectedTag(tag)} />
                  ))
                }
                <Dropdown label={<span className='p-2'><span className={`${!mainTags.includes(selectedTag)? `text-black bg-white` : `hover:bg-opacity-60 text-white`} hover:bg-white hover:text-black`}>More</span></span>} content={
                      project.tags.slice(2).map( tag => (
                        <Tag
                          key={tag}
                          label={tag}
                          isActive={selectedTag == tag}
                          onSelect={() => setSelectedTag(tag)}
                        />
                ))}/>
                </div>
              </li>
            )
          }
        )}
      </ul>
    </>
  )
}
