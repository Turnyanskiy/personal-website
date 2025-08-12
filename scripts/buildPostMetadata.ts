import fs from 'fs'
import { fileURLToPath } from 'url'
import { join, dirname }  from 'path'
import matter from 'gray-matter'
import oldTagColorsJson from '../src/posts/tagColors.json' with {type: "json"}


const postsDir = join(dirname(fileURLToPath(import.meta.url)), '../src/posts')
const files = fs.readdirSync(postsDir)

// Get frontmatter for each listed post
type Post = { id: string; frontmatter: any }

const listedPosts = files.reduce<Post[]>((acc, file) => {
  if (!file.endsWith(".md")) return acc;

  const content = fs.readFileSync(join(postsDir, file), "utf-8")
  const { data } = matter(content)

  if (data.listed == true) {
    acc.push({
      id: file.replace(/\.md$/, ""),
      frontmatter: data,
    });
  }

  return acc;
}, [])

const listedPostsJson = JSON.stringify(listedPosts, null, 2)
fs.writeFileSync(join(postsDir, "listedPosts.json"), listedPostsJson, "utf-8")

console.log(listedPostsJson)

// Get tags from all listed posts and add them to the tag colors.
const allTags = listedPosts.reduce((acc, post) => {
  post.frontmatter.tags.forEach((tag: string) => acc.add(tag));
  return acc;
}, new Set<string>());

let tagColors: Record<string, string> = oldTagColorsJson

let missingColorCount = 0
for (const tag of allTags) {
  if (!(tag in tagColors))
    tagColors[tag] = "MISSING COLOR"
  
  if (tagColors[tag] == "MISSING COLOR")
    missingColorCount++;
}

const allTagsJson = JSON.stringify(tagColors, null, 2)

fs.writeFileSync(join(postsDir, "tagColors.json"), allTagsJson, "utf-8")

console.log(allTagsJson)
console.log(`There are ${missingColorCount} color definitions left to complete.`)
