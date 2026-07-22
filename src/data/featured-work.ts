export interface FeaturedWorkItem {
  title: string
  category: 'Research' | 'Teaching'
  subtitle?: string
  image: string
  imageAlt: string
  href: string
  featured?: boolean
  objectPosition?: string
}

export const featuredWork: FeaturedWorkItem[] = [
  {
    title: 'Reconfigurable Colloidal Materials',
    category: 'Research',
    subtitle: 'Designing responsive structures that reorganize under changing thermodynamic conditions',
    image: '/images/featured/reconfigurable-colloids.webp',
    imageAlt: '',
    href: '/projects/reconfigurable-colloidal-materials',
    featured: true,
    objectPosition: 'center',
  },
  {
    title: 'Magnetic Patchy Particles',
    category: 'Research',
    subtitle: 'Self-assembly beyond rings and chains',
    image: '/images/featured/magnetic-particles.webp',
    imageAlt: '',
    href: '/projects/magnetic-patchy-particles',
    objectPosition: 'center',
  },
  {
    title: 'Machine Learning for Structure Identification',
    category: 'Research',
    subtitle: 'Geometric learning for local order and crystalline structures',
    image: '/images/featured/structure-identification.webp',
    imageAlt: '',
    href: '/projects/machine-learning-structure-identification',
    objectPosition: 'center',
  },
  {
    title: 'Computational Physics',
    category: 'Teaching',
    subtitle: 'Monte Carlo methods, Python, and statistical physics',
    image: '/images/featured/computational-physics.webp',
    imageAlt: '',
    href: '/teaching',
    objectPosition: 'center',
  },
]
