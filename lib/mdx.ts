import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

const base = path.join(process.cwd(), "content");

export async function loadCV() {
  const filePath = path.join(base, "cv/cv.mdx");
  const source = fs.readFileSync(filePath, "utf8");

  const { content } = await compileMDX({
    source,
    options: { parseFrontmatter: true },
  });

  // Return the JSX element directly
  return { Content: content };
}