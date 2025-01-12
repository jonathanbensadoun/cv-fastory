"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Github, Linkedin, Mail, ScrollText } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };
  useEffect(() => {
    console.log(`
     ##### #    #####    #        ###    #######    ####     ####      ##   ##
      ##  #     #       # #      #   #      #      #    #   #    #       ###
      #  #      ###    #   #      #         #      #    #   #####         #
        #       #     #######    #   #      #      #    #   #     #       #
                #    #       #    ###       #       ####    #      #      #
                
    `);
  }, []);

  return (
    <main className="min-h-screen ">
      <Navbar />
      {/* Hero Section */}
      <div className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
          style={{
            backgroundImage: "url('/bg_avatar.jpeg')",
            backgroundBlendMode: "overlay",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat block md:hidden"
          style={{
            backgroundImage: "url('/bg_avatar_mobile.jpeg')",
            backgroundBlendMode: "overlay",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Content */}
        <div className="relative  z-10 h-[calc(100vh-150px)] flex items-center justify-end">
          <div className="ml-auto mr-auto md:mr-40 px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl "
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white text-center md:text-start mb-6">
                Jonathan Bensadoun
              </h1>
              <h2 className="text-2xl md:text-3xl text-center md:text-start text-white/90 mb-8">
                Développeur Full Stack
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl text-center md:text-justify">
                Passionné par le développement web avec une expertise dans
                l&apos;écosystème JavaScript. Je crée des solutions innovantes
                et performantes.
              </p>
              <div className="flex space-x-4 text-center justify-center md:justify-start">
                <Link
                  href="#contact"
                  className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                  scroll={false}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Me contacter
                </Link>
                <Link
                  href="#experience"
                  className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
                  scroll={false}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#experience")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Mon parcours
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Why I Would Be an Asset for Fastory Section */}
      <section id="why-fastory" className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeIn}
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8 text-center md:text-left">
              Pourquoi je serais un atout pour Fastory ?
            </h2>
            <p className="text-lg mb-6 text-justify">
              Fastory incarne l&apos;innovation, la créativité et
              l&apos;engagement, des valeurs qui résonnent parfaitement avec ma
              vision du développement web. Grâce à mon expertise dans des
              technologies comme React, Redux, Next.js, TypeScript, et Node.js,
              je suis prêt à relever les défis techniques ambitieux de votre
              plateforme Fanzone et à contribuer à créer des expériences
              captivantes pour les utilisateurs.
            </p>
            <p className="text-lg mb-6 text-justify ">
              Lors de mon projet de fin de formation, j&apos;ai eu
              l&apos;occasion d&apos;utiliser Phaser pour développer un jeu
              interactif, ce qui m&apos;a permis de comprendre les défis et les
              opportunités liés au développement de mécaniques de jeu
              immersives. Mon expérience dans le développement
              d&apos;applications performantes et scalables inclut également
              l&apos;utilisation d&apos;outils modernes tels que ShadCN,
              TailwindCSS, et PostgreSQL.
            </p>
            <p className="text-lg mb-6 text-justify">
              Ce qui me distingue, c&apos;est ma passion pour l&apos;innovation
              et ma capacité à m&apos;adapter rapidement à de nouvelles
              technologies comme celles utilisées pour vos jeux Nextgen, tels
              que PixiJS ou Unity. Mon objectif est de transformer des idées
              ambitieuses en solutions concrètes, tout en apportant une énergie
              positive et une approche collaborative au sein d&apos;une équipe.
            </p>
            <p className="text-lg text-justify">
              Rejoindre Fastory serait une opportunité de mettre mes compétences
              et ma créativité au service d&apos;un projet à fort impact, tout
              en continuant à grandir professionnellement dans un environnement
              stimulant et orienté vers l&apos;avenir.
            </p>
          </motion.div>
        </div>
      </section>
      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-background  flex justify-center items-center  w-screen"
      >
        <div className="container mx-auto px-6">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeIn}
            className="max-w-4xl mx-auto"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <h2 className="text-4xl font-bold mb-8 text-center md:text-left">
              À propos
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg mb-6 text-justify">
                  Développeur fullstack passionné, avec une expertise affirmée
                  dans l&apos;écosystème JavaScript et une forte appétence pour
                  le front-end. Je suis constamment à l&apos;affût des dernières
                  innovations technologiques.
                </p>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-5 h-5" />
                    <span>jonathan.ben-sadoun@oclock.school</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ScrollText className="w-5 h-5" />
                    <span>38 ans | Permis B</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">
                  Centres d&apos;intérêt
                </h3>
                <ul className="space-y-3">
                  <li>
                    🐱 Amour des animaux: HandiChat36, L&apos;École des chats
                  </li>
                  <li>🎨 Créatif: Développement Web, Photographie, Peinture</li>
                  <li>🔧 Manuel: Bricolage, Mécanique</li>
                  <li>🎮 Logique: Jeux de Stratégie</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 bg-muted  flex justify-center items-center  w-screen"
      >
        <div className="container px-6">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeIn}
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center md:text-left">
              Expérience
            </h2>
            <div className="space-y-12">
              <div className="bg-card p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 ">
                  Développeur Web | Yuli & Friends
                </h3>
                <p className="text-muted-foreground mb-4">2024 </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Réalisation d&apos;une application iOS et Android pour le
                    bien-être animal
                  </li>
                  <li>
                    Technologies: React Native, Expo, Redux, Supabase, Tailwind
                    CSS, TypeScript
                  </li>
                  <li>Méthodologie Agile</li>
                </ul>
              </div>
              <div className="space-y-12">
                <div className="bg-card p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold mb-4">
                    Projet O&apos;Survivors
                  </h3>
                  <p className="text-muted-foreground mb-4">2023 - 2024</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      Développement d&apos;une application web collaborative
                      dans un univers de survie, du concept au déploiement
                      d&apos;un MVP
                    </li>
                    <li>
                      Technologies: React, Redux, Node.js, Express.js, SCSS,
                      Phaser 3
                    </li>
                    <li>Méthodologie Agile</li>
                    <li>
                      <a
                        href="https://osurvivors.netlify.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        Voir le projet en ligne
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 ">
                  Responsable adjoint | Relay Lagardère
                </h3>
                <p className="text-muted-foreground mb-4">2016 - 2023</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Supervision d&apos;une équipe de 19 personnes</li>
                  <li>Gestion des stocks et analyse des données de vente</li>
                  <li>Relations partenaires et gestion des imprévus</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-background ">
        <div className="container mx-auto px-6">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeIn}
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center md:text-left">
              Projets
            </h2>
            <div className="grid md:grid-cols-2 gap-8 ">
              {/* O'Survivors Project */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-card rounded-lg overflow-hidden shadow-lg"
              >
                <div
                  className="h-48 bg-cover bg-start"
                  style={{
                    backgroundImage: "url('/OSurvivors.png')",
                  }}
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">
                    O&apos;Survivors
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Application web de jeu développée en équipe, de la
                    conception au déploiement d&apos;un MVP en méthodologie
                    agile.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-secondary rounded-full text-sm">
                      React
                    </span>
                    <span className="px-3 py-1 bg-secondary rounded-full text-sm">
                      Redux
                    </span>
                    <span className="px-3 py-1 bg-secondary rounded-full text-sm">
                      Node.js
                    </span>
                    <span className="px-3 py-1 bg-secondary rounded-full text-sm">
                      Express
                    </span>
                    <span className="px-3 py-1 bg-secondary rounded-full text-sm">
                      SCSS
                    </span>
                    <span className="px-3 py-1 bg-secondary rounded-full text-sm">
                      Phaser 3
                    </span>
                  </div>
                  <a
                    href="https://osurvivors.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    Voir le projet <Code2 className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-card rounded-lg overflow-hidden shadow-lg"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/CosmoDecouverte.png')",
                  }}
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">
                    Cosmo Découverte
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Plateforme interactive sur l&apos;exploration spatiale,
                    développée avec des technologies modernes pour une
                    expérience utilisateur immersive.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-secondary rounded-full text-sm">
                      ShadCN
                    </span>
                    <span className="px-3 py-1 bg-secondary rounded-full text-sm">
                      Next.js
                    </span>
                    <span className="px-3 py-1 bg-secondary rounded-full text-sm">
                      React
                    </span>
                    <span className="px-3 py-1 bg-secondary rounded-full text-sm">
                      Tailwind CSS
                    </span>
                  </div>
                  <a
                    href="https://cosmo-decouverte.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    Voir le projet <Code2 className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </motion.div>

              {/* Yuli & Friends Project */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-card rounded-lg overflow-hidden shadow-lg"
              >
                <div
                  className="h-48 bg-cover bg-start"
                  style={{
                    backgroundImage: "url('/yuli.png')",
                  }}
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">
                    Yuli & Friends
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Application mobile iOS et Android dédiée au bien-être
                    animal. Développée en équipe avec une approche centrée
                    utilisateur.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-secondary rounded-full text-sm">
                      React Native
                    </span>
                    <span className="px-3 py-1 bg-secondary rounded-full text-sm">
                      Expo
                    </span>
                    <span className="px-3 py-1 bg-secondary rounded-full text-sm">
                      Redux
                    </span>
                    <span className="px-3 py-1 bg-secondary rounded-full text-sm">
                      Supabase
                    </span>
                    <span className="px-3 py-1 bg-secondary rounded-full text-sm">
                      TypeScript
                    </span>
                  </div>
                  <a
                    href="https://www.yulisolutions.fr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    Voir le projet <Code2 className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-card rounded-lg overflow-hidden shadow-lg"
              >
                <div
                  className="h-48 bg-cover bg-start"
                  style={{
                    backgroundImage: "url('/GuideAnimation.png')",
                  }}
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">
                    Guide Animation
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Plateforme dédiée aux animations interactives, développée
                    avec une intégration fluide de designs modernes et
                    transitions dynamiques.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-secondary rounded-full text-sm">
                      Next.js
                    </span>
                    <span className="px-3 py-1 bg-secondary rounded-full text-sm">
                      React
                    </span>
                    <span className="px-3 py-1 bg-secondary rounded-full text-sm">
                      ShadCN
                    </span>
                    <span className="px-3 py-1 bg-secondary rounded-full text-sm">
                      Framer Motion
                    </span>
                  </div>
                  <a
                    href="https://guide-animation.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    Voir le projet <Code2 className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-card rounded-lg overflow-hidden shadow-lg"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/PokeTCGPActu.png')",
                  }}
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">
                    Poke TCGP Actu
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Une plateforme créée pour un streamer Twitch passionné par
                    le jeu mobile Pokémon TCG Pocket.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-secondary rounded-full text-sm">
                      Next.js
                    </span>
                    <span className="px-3 py-1 bg-secondary rounded-full text-sm">
                      React
                    </span>
                    <span className="px-3 py-1 bg-secondary rounded-full text-sm">
                      ShadCN
                    </span>
                  </div>
                  <a
                    href="https://poke-tcgp-actu.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    Voir le projet <Code2 className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-card rounded-lg overflow-hidden shadow-lg"
              >
                <div
                  className="h-48 bg-cover bg-start"
                  style={{
                    backgroundImage: "url('/PortfolioPreview.png')",
                  }}
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">Mon Portfolio</h3>
                  <p className="text-muted-foreground mb-4">
                    Explorez mon portfolio, un espace coloré et dynamique conçu
                    avec React , ThreeJS et Tailwind CSS. Une présentation
                    amusante de mes compétences et projets, le tout dans un
                    design qui donne le sourire ! A découvrir de préférence sur
                    ordinateur.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-secondary rounded-full text-sm">
                      React
                    </span>
                    <span className="px-3 py-1 bg-secondary rounded-full text-sm">
                      Tailwind CSS
                    </span>
                    <span className="px-3 py-1 bg-secondary rounded-full text-sm">
                      JavaScript
                    </span>
                    <span className="px-3 py-1 bg-secondary rounded-full text-sm">
                      Three JS
                    </span>
                  </div>
                  <a
                    href="https://jonathan-bensadoun.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    Voir le portfolio <Code2 className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeIn}
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center md:text-left">
              Compétences
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Technologies</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card p-4 rounded-lg">
                    <h4 className="font-semibold mb-3">Front-End</h4>
                    <ul className="space-y-2">
                      <li>React | Next.js</li>
                      <li>React Native</li>
                      <li>HTML | SCSS</li>
                      <li>Redux</li>
                      <li>Three.js</li>
                    </ul>
                  </div>
                  <div className="bg-card p-4 rounded-lg">
                    <h4 className="font-semibold mb-3">Back-End</h4>
                    <ul className="space-y-2">
                      <li>Node.js</li>
                      <li>Express.js</li>
                      <li>Supabase</li>
                      <li>PostgreSQL</li>
                      <li>API REST</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6">Soft Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card p-4 rounded-lg">
                    <ul className="space-y-2">
                      <li>Travail en équipe</li>
                      <li>Sens de l&apos;écoute</li>
                      <li>Gestion du stress</li>
                      <li>Adaptabilité</li>
                    </ul>
                  </div>
                  <div className="bg-card p-4 rounded-lg">
                    <ul className="space-y-2">
                      <li>Polyvalent</li>
                      <li>Autonome</li>
                      <li>Pro-actif</li>
                      <li>Esprit analytique</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeIn}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-8 ">Me contacter</h2>
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://linkedin.com/in/jonathan-bensadoun"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-8 h-8" />
              </a>
              <a
                href="https://github.com/jonathanbensadoun"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Github className="w-8 h-8" />
              </a>
              <a
                href="mailto:jonathan.ben-sadoun@oclock.school"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-8 h-8" />
              </a>
              <a
                href="https://jonathan-bensadoun.netlify.app/"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Code2 className="w-8 h-8" />
              </a>
            </div>
            <p className="text-lg">
              N&apos;hésitez pas à me contacter pour discuter de vos projets ou
              opportunités de collaboration.
            </p>
            <p>
              <span className="text-lg">Email: </span>
              <a
                href="mailto:jonathan.ben-sadoun@oclock.school"
                className="text-primary hover:underline"
              >
                jonathan.ben-sadoun@oclock.school
              </a>
            </p>
            <p>
              <span className="text-lg">Téléphone: </span>
              <span className="text-primary">06 20 93 24 03</span>
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
