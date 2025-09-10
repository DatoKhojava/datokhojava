"use client"

import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

import me from "../public/images/home/me.png";
import robot from "../public/images/home/robot.jpg";
import conf from "../public/images/home/conf.jpg";
import acb from "../public/images/home/acb.jpg";
import confCard from "../public/images/home/confcard.png";
import notion from "../public/images/home/meNotion.png";

export default function Page() {

  const yearsOfExperience = useMemo(() => {
    return new Date().getFullYear() - 2018;
  }, []);

  const projects = [
    {
      name: 'Purple Moon inc.',
      icon: '🌙',
      description: 'A productivity platform designed for creative teams.'
    },
    {
      name: 'Bitefolio',
      icon: '🥡',
      description: 'A Platform to explore kitchen'
    }
  ];

  return (
    <section>
      <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
        Hello, I'm Dato Khojava 👋
      </h1>

      <p className="text-md mb-4">
        I'm a <span className="font-semibold">Full Stack Engineer</span> and <span className="font-semibold">React Native Developer</span>, passionate about building seamless web and mobile experiences.
      </p>
      <p className="text-md mb-4">
        Currently, I’m working on an exciting projects called <Link className="text-purple-600 hover:text-purple-400" href="/purple-moon">
          Purple Moon inc.
        </Link> and <Link className="text-purple-600 hover:text-purple-400" href="/bitefolio">
          Bitefolio
        </Link>, focusing on creating innovative and user-friendly applications.
      </p>
      <p className="text-md mb-6">
        Besides programming 🧑‍💻, I enjoy exploring <span className="font-semibold">robotics</span> 🤖, nurturing my plants in <span className="font-semibold">gardening</span> 🌱, playing <span className="font-semibold">football</span> ⚽, collecting coins (numismatics) 🪙, and listening to <span className="font-semibold">music</span> 🎵 — which truly helps me stay focused and creative while working.
      </p>

      <h2 className="text-3xl font-bold mb-4">Why I Started This Blog</h2>
      <p className="text-md mb-4">
        I created this blog to share my experiences, insights, and unique approach to programming and technology. Writing about my journey allows me to deepen my understanding while helping others navigate the ever-evolving digital landscape.
      </p>
      <p className="text-md mb-4">
        Technology moves fast — every day brings new tools, frameworks, and challenges. Sharing knowledge not only strengthens my skills but also connects me with a community of like-minded creators and problem-solvers.
      </p>
      <p className="text-md mb-6">
        Whether you’re a fellow developer, a tech enthusiast, or just curious, I hope this space inspires you to explore, learn, and push the boundaries of what’s possible.
      </p>
      <p className="italic">
        This blog is my personal space to document the journey, share ideas, and lay out future goals. It helps me reflect on where I’ve been, stay focused on where I’m going, and maybe even inspire someone on a similar path.
        It also serves as a digital bookmark — a place to collect what I’ve learned, overcome, and achieved. Growth takes time, and this is my way of capturing it.
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
        <h2 className="text-3xl font-bold mb-4">How It All Started</h2>
        <p className="text-md mb-4">
          My journey into the binary world began in my early 20s, when I installed my first flash game on my very first PC and realized that a computer was far more than just a “game center.” That small moment sparked a curiosity that never stopped growing.
        </p>

        <p className="text-md mb-4">
          I became the go-to person in my neighborhood for fixing PCs — a kind of unofficial tech support. But what truly pulled me in was a group of friends who ran their own home server. I remember staring at the screen — black, with only white text — and thinking: <span className="italic">“Hell yes, this is magic.”</span>
        </p>

        <p className="text-md mb-4">
          That moment felt like my own <span className="italic">red pill</span>. Just like Neo in <span className="italic">The Matrix</span>, I chose to see the truth behind the screen — to step into the unknown instead of walking away. Once I saw that terminal window, I couldn't unsee it. I had to know more.
        </p>

        <p className="text-md mb-4">
          I started spending all my time at their place, asking questions and soaking up everything I could. That time was the most fascinating for me — every line of code felt like it was falling into a black hole, drawing me deeper into a world that became harder and harder to leave.
        </p>

        <p className="text-md mb-4">
          We began with the basics of PHP, and from there, my obsession only grew. When the time came to choose a direction for my future, the decision felt natural — I wanted my life to be tied to the two-dimensional world of 0s and 1s. So, I enrolled in university to study Computer Science.
        </p>

        <p className="text-md mb-6">
          Since then, it’s felt like sailing across a digital ocean — endless, unpredictable, and incredibly exciting. I may not be on a Viking ship, but my laptop has been a loyal vessel on this adventure.
        </p>

        <h2 className="text-3xl font-bold mb-4">My Skills & Experience</h2>

        <p className="text-md mb-4">
          With over <span className="font-semibold">{yearsOfExperience}+ years</span> of hands-on experience in software development, I’ve worked across a wide range of technologies and roles in the world of computer science. Throughout this journey, some tools I picked up through work, others I explored out of pure curiosity and passion — and the learning never stops. In this field, there’s always something new to discover every day.
        </p>

        <p className="text-md mb-4">
          As a <span className="font-semibold">Full Stack Engineer</span>, I specialize in building scalable and maintainable applications — from frontend interfaces to backend systems — in my current role. It's the best environment to sharpen skills and continuously learn from people who have already walked the path ahead of me.
        </p>

        <p className="text-md mb-4">
          Beyond professional work, I never stop developing myself. I'm actively working on my own startups — platforms where I try to bring my ideas to life and build what I believe in. And of course, I’m not alone. A group of passionate people, just as obsessed with the vision, are building it with me.
        </p>

        <div className="space-y-3 mb-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-md shadow-sm"
            >
              <div className="text-2xl">{project.icon}</div>
              <div>
                <h3 className="font-semibold text-md">{project.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-md mb-4">
          I believe hard work can be exhausting — even frustrating — but I truly believe one thing: if you try something with your whole heart, no matter how hard it is or how many times you fail, you’ll reach your goal one day. What describes this mindset best are the words of Thomas Wayne in <span className="italic">Batman Begins</span>:
        </p>

        <blockquote className="border-l-4 border-gray-500 italic my-8 pl-4 md:pl-8 py-4 max-w-md">
          <p className="text-md font-medium">
            - And why do we fall, Bruce? So we can learn to pick ourselves up!
          </p>
          <cite className="block text-right mt-4 text-gray-600">
            - Thomas Wayne
          </cite>
        </blockquote>

        <p className="text-md mb-4">
          Everyone goes through these moments — and they often stop us from growing. I'd say it's like a moment when the lightbulb inside us burns out. But for me, it’s better to work every single day — even just for an hour — than to work all day once a week. Stability beats sudden explosions. The hardest thing to learn in this industry is discipline — how to show up, stay consistent, and keep learning.
        </p>

        <p className="text-md mb-6">
          One last thing I want to mention is how I see this industry: for me, IT is a galaxy with no edges. The best thing you can do is stay in the loop, enjoy the process — even debugging code or writing test cases <i>(which, by the way, are !best thing in the world).</i> Better to see it as an adventure than a giant, scary machine.
        </p>

        <h2 className="text-3xl font-bold mb-4">Beyond the Code</h2>

        <p className="text-md mb-4">
          While programming takes up a big part of my life, it’s not the only thing that drives me. Outside of tech, I’m passionate about traveling, numismatics, gardening, and football. These interests keep me curious, balanced, and inspired in ways that code alone never could.
        </p>

        <p className="text-md mb-4">
          What truly matters to me, though, is balance. Spending time with family and friends, staying active, watching movies, or just looking up at the night sky — these are the moments that reset my mind and remind me why I do what I do.
        </p>

        <p className="text-md mb-6">
          In the end, I believe hobbies aren’t just “breaks from work” — they’re what keep the fire burning. They bring inspiration, discipline, curiosity, and peace — all the same things that make someone a better developer.
        </p>

        <p className="text-md mb-6">
          Thanks for taking the time to learn a bit about me. Whether you’re a fellow developer, a potential collaborator, an employer, or simply someone curious about the world of technology — I’m always open to connecting and sharing ideas.
        </p>

        <p className="text-md">
          The journey ahead is full of possibilities, and I’m excited to see where it leads. Let’s explore it together.
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
