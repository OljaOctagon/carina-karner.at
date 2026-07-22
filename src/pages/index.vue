<template>
  <div class="home">
    <section class="home__hero">
      <h1>Carina Karner</h1>
      <p class="home__subtitle">Computational Physicist</p>
      <p class="home__bio">
        I study how complex structures and collective behavior emerges from simple microscopic rules.
        It turns out that similar principles apply across scales: from molecules organizing into materials
        to colloidal particles assembling into clusters, crystals and responsive surfaces.<br>
        I am particularly 
        interested in systems where the same building block can form several different structures, 
        assembled materials can reorganize as their environment changes, 
        and where order may be local, heterogeneous, or incomplete. <br>
        To investigate these systems, I combine statistical mechanics
        and particle-based simulations with structural analysis 
        and symmetry-aware machine learning.
      </p>
    </section>

    <section class="selected-work">
      <h2 class="selected-work__heading">Some of my work</h2>
      <p class="selected-work__intro">
        Research and teaching across statistical physics, complex systems, and computational methods.
      </p>

      <div class="selected-work__grid">
        <FeaturedTile
          v-for="item in featured"
          :key="item.href"
          v-bind="item"
        />
      </div>
    </section>

    <section class="home__links">
      <NuxtLink to="/about" class="home__link">About &rarr;</NuxtLink>
      <NuxtLink to="/publications" class="home__link">Publications &rarr;</NuxtLink>
      <NuxtLink to="/projects" class="home__link">Projects &rarr;</NuxtLink>
      <NuxtLink to="/contact" class="home__link">Contact &rarr;</NuxtLink>
    </section>
  </div>
</template>

<script setup lang="ts">
import { featuredWork } from '~/data/featured-work'

const featured = featuredWork
</script>

<style lang="scss" scoped>
.home__hero {
  padding-top: var(--spacing-3xl);
  padding-bottom: var(--spacing-2xl);
}

.home__hero h1 {
  font-size: 2.75rem;
  margin-bottom: var(--spacing-sm);

  @media (max-width: 640px) {
    font-size: 2rem;
  }
}

.home__subtitle {
  font-family: var(--font-heading);
  font-size: 1.15rem;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-xl);
}

.home__bio {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--color-text-secondary);
  max-width: 600px;
}

.selected-work {
  margin-bottom: var(--spacing-3xl);
}

.selected-work__heading {
  font-size: 1.5rem;
  margin-bottom: var(--spacing-sm);
}

.selected-work__intro {
  color: var(--color-text-secondary);
  font-size: 0.95rem;
  margin-bottom: var(--spacing-xl);
}

.selected-work__grid {
  display: grid;
  gap: var(--spacing-lg);

  > :first-child {
    grid-column: 1 / -1;
  }

  > :not(:first-child) {
    grid-column: span 1;
  }

  @media (min-width: 641px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));

    > :first-child {
      grid-column: 1 / -1;
    }
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
}

.home__links {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.home__link {
  display: inline-block;
  font-size: 1rem;
  color: var(--color-text);
  text-decoration: none;
  padding: var(--spacing-sm) 0;
  border-bottom: 1px solid var(--color-border-light);
  transition: color var(--transition-fast), border-color var(--transition-fast);

  &:hover {
    color: var(--color-accent);
    border-color: var(--color-accent);
  }
}
</style>
