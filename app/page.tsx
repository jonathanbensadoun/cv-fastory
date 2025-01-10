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

  return (
    <main className="min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <div className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
            backgroundBlendMode: "overlay",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-[calc(100vh-80px)] flex items-center">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Jonathan Bensadoun
              </h1>
              <h2 className="text-2xl md:text-3xl text-white/90 mb-8">
                Développeur Full Stack
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl">
                Passionné par le développement web avec une expertise dans
                l&apos;écosystème JavaScript. Je crée des solutions innovantes
                et performantes.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="#contact"
                  className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Me contacter
                </Link>
                <Link
                  href="#experience"
                  className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
                >
                  Mon parcours
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeIn}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8">À propos</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg mb-6">
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
      <section id="experience" className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeIn}
          >
            <h2 className="text-4xl font-bold mb-12">Expérience</h2>
            <div className="space-y-12">
              <div className="bg-card p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">
                  Développeur Web | Yuli & Friends
                </h3>
                <p className="text-muted-foreground mb-4">2024 - Présent</p>
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

              <div className="bg-card p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">
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
      <section id="projects" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeIn}
          >
            <h2 className="text-4xl font-bold mb-12">Projets</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* O'Survivors Project */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-card rounded-lg overflow-hidden shadow-lg"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
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

              {/* Yuli & Friends Project */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-card rounded-lg overflow-hidden shadow-lg"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
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
                  <p className="text-sm text-muted-foreground">
                    Sortie prévue pour Mars 2025
                  </p>
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
          >
            <h2 className="text-4xl font-bold mb-12">Compétences</h2>
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
            <h2 className="text-4xl font-bold mb-8">Me contacter</h2>
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
                href="#"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Code2 className="w-8 h-8" />
              </a>
            </div>
            <p className="text-lg">
              N&apos;hésitez pas à me contacter pour discuter de vos projets ou
              opportunités de collaboration.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
