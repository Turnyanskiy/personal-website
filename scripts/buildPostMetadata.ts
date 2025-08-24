import fs from 'fs'
import { fileURLToPath } from 'url'
import { join, dirname }  from 'path'
import matter from 'gray-matter'
import oldTagColorsJson from '../src/content/tagColors.json' with {type: "json"}
import ProjectsJSON from '../src/content/projects.json' with {type: "json"}

const contentDir = join(dirname(fileURLToPath(import.meta.url)), '../src/content')
const postsDir = join(contentDir, 'posts'
)
const files = fs.readdirSync(postsDir)

// Get frontmatter for each listed post
type Post = { id: string; frontmatter: any }

const listedPosts = files.reduce<Post[]>((acc, file) => {
  if (!file.endsWith(".mdx")) return acc;

  const content = fs.readFileSync(join(postsDir, file), "utf-8")
  const { data } = matter(content)

  if (data.listed == true) {
    acc.push({
      id: file.replace(/\.mdx$/, ""),
      frontmatter: data,
    });
  }

  return acc;
}, [])

const listedPostsJson = JSON.stringify(listedPosts, null, 2)
fs.writeFileSync(join(contentDir, "listedPosts.json"), listedPostsJson, "utf-8")

console.log(listedPostsJson)

// Get tags from all listed posts and add them to the tag colors.
const allListedTags = listedPosts.reduce((acc, post) => {
  post.frontmatter.tags.forEach((tag: string) => acc.add(tag));
  return acc;
}, new Set<string>());

// Get tags from all projects and add them to the tag colors.
const allProjectTags = ProjectsJSON.reduce((acc, project) => {
  project.tags.forEach( (tag: string) => acc.add(tag))
  return acc
}, new Set<string>())

// Combine all tags and check existence in JSON tag list. If not in list adds tag to list.
let allTags = allListedTags.union(allProjectTags)

let tagColors: Record<string, string> = oldTagColorsJson

let missingColorCount = 0
for (const tag of allTags) {
  if (!(tag in tagColors))
    tagColors[tag] = "MISSING COLOR"
  
  if (tagColors[tag] == "MISSING COLOR")
    missingColorCount++;
}

const allTagsJson = JSON.stringify(tagColors, null, 2)

fs.writeFileSync(join(contentDir, "tagColors.json"), allTagsJson, "utf-8")

console.log(allTagsJson)
console.log(`There are ${missingColorCount} color definitions left to complete.`)
