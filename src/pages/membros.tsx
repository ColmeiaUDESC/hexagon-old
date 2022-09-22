import { motion } from 'framer-motion';
import Image from 'next/image';
import { ReactElement } from 'react';

interface MemberProps {
  name: string;
  description: string;
  avatarHref: string;
  interests: ReadonlyArray<string>;
  href: string;
  memberType: 'Bolsista' | 'Voluntário';
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

function Member({ name, interests, description, avatarHref, href, memberType }: MemberProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="norefferer"
      variants={memberVariants}
      className="group flex flex-col gap-4 focus:outline-none"
    >
      <div className="relative w-full h-96 rounded-md focus-ring hover-ring overflow-hidden">
        <Image src={avatarHref} layout="fill" objectFit="cover" alt={name} />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="flex w-full font-bold justify-between items-center text-black text-2xl dark:text-white">
          <div className="block">
            {name}
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-1 bg-primary" />
          </div>
          <span className="text-sm font-normal text-gray-500">{memberType}</span>
        </h1>
        <div className="flex gap-2">
          {interests.map((interest) => (
            <span
              key={interest}
              className="uppercase px-2 rounded py-1 font-bold text-xs bg-red-600 text-white dark:text-black"
            >
              {interest}
            </span>
          ))}
        </div>
        <p className="transition-all duration-300 text-gray-500 font-medium dark:group-hover:text-white group-hover:text-black dark:group-focus:text-white group-focus:text-black">
          {description}
        </p>
      </div>
    </motion.a>
  );
}

export default function MembrosPage(): ReactElement {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mt-32 min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-center gap-8"
    >
      <Member
        name="João Dematte"
        href="http://instagram.com/joaodematte"
        avatarHref="https://github.com/joaodematte.png"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi saepe sed, magnam ullam a possimus vero nesciunt laborum autem consequatur odio voluptatem, hic unde voluptate sequi dolor fugit doloremque? Omnis!"
        interests={['Web dev', 'hacking']}
        memberType="Voluntário"
      />
      <Member
        name="Luciano Wayand"
        href="http://instagram.com/lucianowayand"
        avatarHref="https://github.com/lucianowayand.png"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi saepe sed, magnam ullam a possimus vero nesciunt laborum autem consequatur odio voluptatem, hic unde voluptate sequi dolor fugit doloremque? Omnis!"
        interests={['Web dev']}
        memberType="Bolsista"
      />
      <Member
        name="Gabriel Junkes"
        href="http://instagram.com/gabrielfjunkes"
        avatarHref="https://github.com/gabrielfjunkes.png"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi saepe sed, magnam ullam a possimus vero nesciunt laborum autem consequatur odio voluptatem, hic unde voluptate sequi dolor fugit doloremque? Omnis!"
        interests={['Web dev']}
        memberType="Bolsista"
      />
      <Member
        name="César Eduardo"
        href="http://instagram.com/cesareds"
        avatarHref="https://github.com/cesareds.png"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi saepe sed, magnam ullam a possimus vero nesciunt laborum autem consequatur odio voluptatem, hic unde voluptate sequi dolor fugit doloremque? Omnis!"
        interests={['Web dev']}
        memberType="Bolsista"
      />
      <Member
        name="Geórgia Betina"
        href="http://instagram.com/georgia-betina"
        avatarHref="https://github.com/georgia-betina.png"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi saepe sed, magnam ullam a possimus vero nesciunt laborum autem consequatur odio voluptatem, hic unde voluptate sequi dolor fugit doloremque? Omnis!"
        interests={['Web dev']}
        memberType="Voluntário"
      />
    </motion.div>
  );
}
