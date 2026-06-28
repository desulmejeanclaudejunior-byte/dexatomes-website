'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, GraduationCap, Users, Award, Layers, MonitorPlay, Terminal, BadgeCheck } from 'lucide-react'
import Image from 'next/image'

const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay: d, ease: 'easeOut' as const },
})

const stats = [
  { icon: GraduationCap, value: '12+', label: 'Specialized Courses' },
  { icon: Users, value: '5K+', label: 'Active Learners' },
  { icon: Award, value: 'Certified', label: 'Programs' },
]

const features = [
  { icon: Layers, title: 'Hands-on Learning', desc: 'Real projects to build concrete skills.' },
  { icon: MonitorPlay, title: 'Interactive Courses', desc: 'Videos, quizzes, exercises, and challenges.' },
  { icon: Terminal, title: 'Live Code Editor', desc: 'Write, run, and test code in the browser.' },
  { icon: BadgeCheck, title: 'Certificates', desc: 'Earn credentials to boost your career.' },
]

export default function Hero() {
  return (
    <>
      <section className="hero-gradient grid-bg relative overflow-hidden pt-16">
        {/* Glow orbs */}
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-blue-600/[0.07] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-blue-500/[0.05] rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left text */}
            <div>
              <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-8">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-blue-300 text-xs font-semibold tracking-wide">
                  Learn. Build. Innovate.
                </span>
              </motion.div>

              <motion.h1 {...fadeUp(0.1)} className="text-white text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.08] tracking-tight mb-6">
                Master Engineering.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">
                  Build Your Future.
                </span>
              </motion.h1>

              <motion.p {...fadeUp(0.2)} className="text-slate-400 text-lg leading-relaxed mb-10 max-w-lg">
                Dex Atomes is the all-in-one platform to learn real engineering skills through practical courses, real-world projects, and challenging builds.
              </motion.p>

              <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-4 mb-12">
                <a href="/courses" className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-blue-600/25">
                  Get Started Free
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a href="/courses" className="inline-flex items-center gap-2 bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 text-white font-medium px-7 py-3.5 rounded-xl text-sm transition-all backdrop-blur-sm">
                  <Play size={15} />
                  View Courses
                </a>
              </motion.div>

              {/* Stats row */}
              <motion.div {...fadeUp(0.4)} className="flex gap-8">
                {stats.map(s => (
                  <div key={s.label} className="flex items-center gap-3">
                    <s.icon size={20} className="text-slate-500" />
                    <div>
                      <p className="text-white font-bold text-lg leading-none">{s.value}</p>
                      <p className="text-slate-500 text-xs mt-0.5">{s.label}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' as const }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop"
                  alt="Robotics engineering"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/80 via-transparent to-transparent" />

                {/* Overlay card */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#111936]/90 backdrop-blur-md border border-white/10 rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white text-sm font-semibold">Current Project</p>
                      <p className="text-slate-400 text-xs mt-0.5">6-Axis Robotic Arm</p>
                    </div>
                    <div className="text-right">
                      <p className="text-blue-400 text-sm font-bold">72%</p>
                      <div className="w-20 h-1.5 bg-slate-700 rounded-full mt-1">
                        <div className="w-[72%] h-full bg-blue-500 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating demo badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-4 top-8 bg-[#111936]/90 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3 shadow-xl"
              >
                <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center">
                  <Play size={16} className="text-blue-400 ml-0.5" />
                </div>
                <div>
                  <p className="text-white text-xs font-semibold">Watch Demo</p>
                  <p className="text-slate-500 text-[10px]">1:45</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Feature bar */}
        <div className="relative border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.5, ease: 'easeOut' as const }}
                  className="flex items-start gap-4"
                >
                  <div className="w-11 h-11 bg-blue-600/10 border border-blue-500/20 rounded-xl flex items-center justify-center shrink-0">
                    <f.icon size={18} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{f.title}</p>
                    <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
