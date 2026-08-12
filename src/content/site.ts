import {
  Globe, Smartphone, Cpu, Shield, Wrench, Monitor, BookOpen,
  Settings, Code, Clock, MapPin, Zap, Users,
} from 'lucide-react'

/**
 * Single source of truth for copy that appears on more than one page.
 * All strings carried over verbatim from the original pages.
 */

export const contact = {
  email: 'support@dexuslab.com',
  phone: '(863) 207-8619',
  location: 'Orlando, Florida, USA',
  dexusLab: 'https://dexuslab.com',
}

/* The three capabilities featured on the homepage. */
export const capabilities = [
  {
    icon: Monitor,
    title: 'Website Development',
    desc: 'Modern, responsive websites built to represent your brand and drive results.',
    checks: ['Custom Design', 'SEO Optimized', 'Fast & Secure', 'Mobile Friendly'],
    image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?w=1400&h=1050&fit=crop',
    link: '/services',
    linkText: 'Learn More',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    desc: 'High-performance mobile applications for iOS and Android platforms.',
    checks: ['iOS & Android Apps', 'User Friendly UI/UX', 'API Integration', 'App Store Deployment'],
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1400&h=1050&fit=crop',
    link: '/services',
    linkText: 'Learn More',
  },
  {
    icon: BookOpen,
    title: 'Engineering Education',
    desc: 'Books and resources to help you learn, build, and innovate with confidence.',
    checks: ['Robotics', 'Arduino & ESP32', 'AI & Automation', 'Practical Projects'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&h=1050&fit=crop',
    link: '/store',
    linkText: 'Visit Bookstore',
  },
]

/* The full service list shown on /services. */
export const services = [
  {
    icon: Globe,
    title: 'Website Development',
    price: 'From $500',
    desc: 'Professional websites, web apps, e-commerce, SaaS. Built with Next.js, React, TypeScript.',
    img: 'https://images.unsplash.com/photo-1550439062-609e1531270e?w=1400&h=950&fit=crop',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    price: 'From $800',
    desc: 'Native-quality iOS & Android apps. React Native, Expo, Firebase backend.',
    img: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1400&h=950&fit=crop',
  },
  {
    icon: Cpu,
    title: 'Robotics & IoT',
    price: 'From $300',
    desc: 'Custom hardware, Arduino, ESP32, PCB prototyping, drones, smart devices.',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1400&h=950&fit=crop',
  },
  {
    icon: Shield,
    title: 'IT & Network Security',
    price: 'From $200',
    desc: 'Security audits, network setup, infrastructure monitoring and hardening.',
    img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1400&h=950&fit=crop',
  },
  {
    icon: Wrench,
    title: 'Technical Consulting',
    price: '$100/hr',
    desc: 'Architecture, code reviews, system design, technology strategy.',
    img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1400&h=950&fit=crop',
  },
]

/* Why-us points from the original values bar. */
export const values = [
  { icon: Settings, title: 'Engineering Expertise', sub: 'Real engineering knowledge behind every solution.' },
  { icon: Code, title: 'Modern Technologies', sub: 'We use the latest tools and frameworks.' },
  { icon: Wrench, title: 'Practical Solutions', sub: 'We build solutions that solve real problems.' },
  { icon: Clock, title: 'Long-Term Support', sub: 'We stay with you beyond delivery.' },
  { icon: MapPin, title: 'Based in Orlando', sub: 'Proudly serving clients worldwide.' },
]

export const badges = [
  { icon: Settings, label: 'Engineering', sub: 'Focused' },
  { icon: Zap, label: 'Custom', sub: 'Solutions' },
  { icon: Users, label: 'Client', sub: 'Focused' },
  { icon: Globe, label: 'Serving Clients', sub: 'Worldwide' },
]

export const comingSoon = [
  { title: 'Arduino Mastery', desc: 'Complete guide to Arduino programming and embedded systems.' },
  { title: 'ESP32 In Action', desc: 'IoT, Wi-Fi, Bluetooth, and advanced ESP32 projects.' },
  { title: 'Drone Technology', desc: 'Build, program, and fly autonomous drones safely.' },
]

/* DexusLab learning tracks shown on /courses. */
export const tracks = [
  { title: 'Robotics & Automation', count: '12 courses', img: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=900&h=600&fit=crop', tag: 'Popular' },
  { title: 'Web Development', count: '11 courses', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&h=600&fit=crop', tag: null },
  { title: 'Cybersecurity', count: '10 courses', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900&h=600&fit=crop', tag: null },
  { title: 'AI & Machine Learning', count: '9 courses', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&h=600&fit=crop', tag: 'New' },
  { title: 'Drones & Aeronautics', count: '8 courses', img: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=900&h=600&fit=crop', tag: null },
  { title: 'Python Programming', count: '8 courses', img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=900&h=600&fit=crop', tag: null },
  { title: 'Electronics & PCB', count: '6 courses', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&h=600&fit=crop', tag: null },
  { title: 'Network & IT', count: '7 courses', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&h=600&fit=crop', tag: null },
]

/* Options offered by the contact form's Service select. */
export const serviceOptions = [
  'Website Development',
  'Mobile App',
  'Robotics & Engineering',
  'Consulting',
  'Bookstore',
  'Other',
]
