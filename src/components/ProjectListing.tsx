import Tag from './Tag'
import Dropdown from './Dropdown'
import githubImg from '../assets/images/github.svg';

export default function ProjectListing({
  project,
  selectedTag,
  setSelectedTag,
  mainTags,
}: {
  project: any;
  selectedTag: string;
  setSelectedTag: (tag: string) => void;
  mainTags: string[];
}) {
  return (
    <li className="p-5 border-2 border-white aspect-square flex flex-col justify-between">
      <div>
        <a href={project.github} className="no-underline" target="_blank"><h2 className="m-0 text-center font-bold text-xl hover:text-white hover:underline decoration-blue-400 transition">{project.title} <img src={githubImg} className="m-0 inline h-[1em]"/></h2></a>
        <p className="text-base m-0 p-0 line-clamp-10 text-justify">{project.description}</p>
      </div>
      <div className="flex justify-center divide-x">
        {project.tags.slice(0, 2).map( (tag: string) => (
            <Tag key={tag} label={tag} isActive={selectedTag == tag} onSelect={() => setSelectedTag(tag)} />
          ))
        }
        <Dropdown label={<span className='p-2'><span className={`${!mainTags.includes(selectedTag)? `text-black bg-white` : `hover:bg-opacity-60 text-white`} hover:bg-white hover:text-black`}>More</span></span>} content={
              project.tags.slice(2).map( (tag: string) => (
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
