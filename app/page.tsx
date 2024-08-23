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
      <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
        Hello, I'm Dato Khojava 👋
      </h1>
      <p className="mb-4">
        {`I'm frontend developer, creative and team worker. Currently I'm building the `}
        <Link className="text-purple-600 hover:text-purple-400" href="/work">
          Purple Moon inc.
        </Link>
        {` project. I'm keen on with programing 🧑‍💻, robot technology 🧑‍💻 and gardening 🌱.`}
      </p>
      <p className="italic">
        The idea to create this blog is to share my experience to people, and
        show my approach and opinion on specific issues. Also it is best
        experience to write or share about some topic with people it helps to
        uderstand it in more detail
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
        <p>
          Hello and welcome to my blog, my name is Dato Khojava, and I am a
          JavaScript developer with a deep passion for programing. Over the
          years, I have honed my skills in programing and continue doing it
          every day because I think hard working always pays off. I thrive in
          environments where creativity and innovation are valued, and I am
          constantly seeking ways to push the boundaries of what’s possible. I
          think motivation is very powerful tool but stability and love for your
          job better thing to become professional in every field and achieve
          your goal. As you may know there is no edges in programing and you can
          eseily lost your way or just give up because every day you need to be
          ready to digest new technology and updates, I think everybody have
          struggled same issue in his field and for me striving for goals is
          very powerfull weapon to deal with all problems. The most memorable
          words for me belong to Thomas Wayne from Batman!
        </p>
        <blockquote className="border-l-4 border-gray-500 italic my-8 pl-4 md:pl-8 py-4 max-w-md">
          <p className="text-lg font-medium">
            - And why do we fall, Bruce? So we can learn to pick ourselves up!
          </p>
          <cite className="block text-right mt-4 text-gray-600">
            - Thomas Wayne
          </cite>
        </blockquote>
        <p>
          My journey in to the binary world started in early 20’s when I
          installed my first flash game on my own and realized that computer is
          much more interesting box, then just a “game center”. Before I enter
          programing and displayed my first “Hello, World!” I was a rescuer of
          all people in my district related to PC. The reasson why I pass at
          university on computer science was my friends, the had seperate server
          at home and for me it was very interesting and misteryous, I was
          watching at the monitor where i only see black window and white
          letters and it was something very amazing for me. Of course I wanted
          to do same "magic" by myself at home and of course I've been at friend
          house 24/7, I asked them to teach me and we started with PHP basics.
          After a half year I passed at the computer science at university and
          it was the beginning of sailing in the endless ocean of digital world
          like a Viking on his Dracar but in my case i'm with my notebook.
        </p>
        <br />
        <p>
          As a developer with 6+ year experience I have worked with a different
          programing languages and also different fields related to computer
          science, some of them was needed at work and others due to my interest
          in it. Right now im focused on web-programing and DevOps more but of
          course I have favourite fields of study.
        </p>
        <br />
        <p>
          beyond to the programming i'm keen on with gardening, football,
          movies, traveling, music I love to collecting things. It is
          particularly noteworthy my interest to a cosmos. Hobbies, phisical
          activities, family and friends helps me to relax and dont burn up.
        </p>
        <br />
        <p>
          At the end i'll say thank you for taking the time to learn a bit about
          me. Whether you’re a developer, a potential collaborator, employer or
          simply curious about the world of technology, I’m excited to connect
          and explore the endless possibilities in future. Let’s go on this
          journey together.
        </p>
      </div>

      <h2 className="text-4xl">Contact</h2>
      <p className="mt-2">
        📨 You can reach me:{" "}
        <Link className="text-purple-600 hover:text-purple-400" href="/">
          dkhojava@purplemoonit.com
        </Link>
      </p>
    </section>
  );
}
