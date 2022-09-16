import { NextPage } from 'next';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface MemberProps {
  name: string;
  description: string;
  avatarHref: string;
  interests: ReadonlyArray<string>;
  href: string;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      duration: 0,
      staggerChildren: 0.05
    }
  }
};

const memberVariants = {
  hidden: {
    opacity: 0,
    y: -100
  },
  visible: {
    opacity: 1,
    y: 0
  }
};

const Member = ({ name, interests, description, avatarHref, href }: MemberProps) => (
  <motion.a
    href={href}
    target="_blank"
    rel="norefferer"
    variants={memberVariants}
    className="group flex flex-col gap-4 focus:outline-none"
  >
    <div
      className="relative w-full h-96 rounded-md focus-ring hover-ring overflow-hidden"
      style={{
        backgroundImage: `url(${avatarHref})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
    />
    <div className="flex flex-col gap-2">
      <h1 className="w-fit font-bold text-black text-2xl dark:text-white">
        {name}
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-1 bg-primary" />
      </h1>
      <div className="flex gap-2">
        {interests.map((interest) => (
          <span
            key={interest}
            className="uppercase px-2 rounded py-1 font-bold text-white dark:text-black"
            style={{
              backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`
            }}
          >
            {interest}
          </span>
        ))}
      </div>
      <p className="text-gray-500 font-medium">{description}</p>
    </div>
  </motion.a>
);

const MembrosPage: NextPage = () => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className="mt-32 w-full min-h-screen p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-center gap-8"
  >
    <Member
      name="João Dematte"
      href="http://instagram.com/joaodematte"
      avatarHref="https://github.com/joaodematte.png"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi saepe sed, magnam ullam a possimus vero nesciunt laborum autem consequatur odio voluptatem, hic unde voluptate sequi dolor fugit doloremque? Omnis!"
      interests={['Web dev', 'hacking']}
    />
    <Member
      name="Luciano Wayand"
      href="http://instagram.com/lucianowayand"
      avatarHref="https://github.com/lucianowayand.png"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi saepe sed, magnam ullam a possimus vero nesciunt laborum autem consequatur odio voluptatem, hic unde voluptate sequi dolor fugit doloremque? Omnis!"
      interests={['Web dev']}
    />
    <Member
      name="Gabriel Junkes"
      href="http://instagram.com/gabrielfjunkes"
      avatarHref="https://github.com/gabrielfjunkes.png"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi saepe sed, magnam ullam a possimus vero nesciunt laborum autem consequatur odio voluptatem, hic unde voluptate sequi dolor fugit doloremque? Omnis!"
      interests={['Web dev']}
    />
    <Member
      name="César Eduardo"
      href="http://instagram.com/cesareds"
      avatarHref="https://github.com/cesareds.png"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi saepe sed, magnam ullam a possimus vero nesciunt laborum autem consequatur odio voluptatem, hic unde voluptate sequi dolor fugit doloremque? Omnis!"
      interests={['Web dev']}
    />
    <Member
      name="Geórgia Betina"
      href="http://instagram.com/georgia-betina"
      avatarHref="https://github.com/georgia-betina.png"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi saepe sed, magnam ullam a possimus vero nesciunt laborum autem consequatur odio voluptatem, hic unde voluptate sequi dolor fugit doloremque? Omnis!"
      interests={['Web dev']}
    />
  </motion.div>
);

export default MembrosPage;
