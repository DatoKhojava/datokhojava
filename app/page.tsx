import { BlogPosts } from "app/components/posts";
import Link from "next/link";
import Image from "next/image";

import me from "../public/images/home/me.png";
import robot from "../public/images/home/robot.jpg";
import conf from "../public/images/home/conf.jpg";
import acb from "../public/images/home/acb.jpg";
import confCard from "../public/images/home/confcard.png";
import notion from "../public/images/home/meNotion.png";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hello, I'm Dato Khojava 👋
      </h1>
      <p className="mb-4">
        {`I'm frontend developer, creative and team worker. Currently I'm building the `}
        <Link className="text-purple-600 hover:text-purple-400" href="/blog">
          Purple Moon inc.
        </Link>
        {` project. I'm keen on with programing 🧑‍💻, robot technology 🧑‍💻 and gardening 🌱.`}
      </p>
      <div className="grid grid-cols-3 grid-rows-4 sm:grid-rows-4 sm:grid-cols-3 gap-4 my-8">
        <div className="relative h-40">
          <Image
            alt="I'm in the office"
            src={me}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative sm:col-span-2 col-span-2">
          <Image
            alt="I discuss robotics in the American corner of Batumi"
            src={acb}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative sm:col-span-2 col-span-2">
          <Image
            alt="Me and my friends on Online Cyber ​Olympics in Tbilisi"
            src={conf}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative sm:row-span-2 row-span-2">
          <Image
            alt="My badge in Purple moon inc."
            src={confCard}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative row-span-2 col-span-2">
          <Image
            alt="My robotics workshop where I work on various projects"
            src={robot}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40">
          <Image
            alt="My notion avatar"
            src={notion}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
