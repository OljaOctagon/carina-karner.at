<template>
  <header class="navbar">
    <nav class="navbar__inner">
      <NuxtLink to="/" class="navbar__brand">Carina Karner</NuxtLink>

      <button
        class="navbar__toggle"
        aria-label="Toggle navigation"
        @click="isOpen = !isOpen"
      >
        <span :class="['navbar__bar', { 'navbar__bar--open': isOpen }]" />
      </button>

      <ul :class="['navbar__links', { 'navbar__links--open': isOpen }]">
        <li><NuxtLink to="/about" @click="isOpen = false">About</NuxtLink></li>
        <li><NuxtLink to="/publications" @click="isOpen = false">Publications</NuxtLink></li>
        <li><NuxtLink to="/projects" @click="isOpen = false">Projects</NuxtLink></li>
        <li><NuxtLink to="/blog" @click="isOpen = false">Blog</NuxtLink></li>
        <li><NuxtLink to="/cv" @click="isOpen = false">CV</NuxtLink></li>
        <li><NuxtLink to="/contact" @click="isOpen = false">Contact</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
const isOpen = ref(false)
</script>

<style lang="scss" scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--color-bg);
  border-bottom: 1px solid var(--color-border);
  backdrop-filter: blur(8px);
}

.navbar__inner {
  max-width: var(--max-width-wide);
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
}

.navbar__brand {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--color-text);
  text-decoration: none;

  &:hover {
    color: var(--color-accent);
  }
}

.navbar__links {
  display: flex;
  list-style: none;
  gap: var(--spacing-lg);
  margin: 0;
  padding: 0;

  a {
    font-size: 0.9rem;
    color: var(--color-text-secondary);
    text-decoration: none;
    transition: color var(--transition-fast);

    &:hover,
    &.router-link-active {
      color: var(--color-accent);
    }
  }
}

.navbar__toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  width: 24px;
  height: 24px;
  position: relative;
}

.navbar__bar {
  display: block;
  width: 20px;
  height: 2px;
  background: var(--color-text);
  position: relative;
  transition: background var(--transition-fast);

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background: var(--color-text);
    transition: transform var(--transition-normal);
  }

  &::before {
    top: -6px;
  }

  &::after {
    top: 6px;
  }

  &--open {
    background: transparent;

    &::before {
      transform: rotate(45deg) translate(4px, 4px);
    }

    &::after {
      transform: rotate(-45deg) translate(4px, -4px);
    }
  }
}

@media (max-width: 640px) {
  .navbar__inner {
    padding: 0 var(--spacing-md);
  }

  .navbar__toggle {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .navbar__links {
    display: none;
    position: absolute;
    top: 56px;
    left: 0;
    right: 0;
    flex-direction: column;
    background: var(--color-bg);
    border-bottom: 1px solid var(--color-border);
    padding: var(--spacing-md) var(--spacing-lg);
    gap: var(--spacing-sm);

    &--open {
      display: flex;
    }

    a {
      padding: var(--spacing-sm) 0;
    }
  }
}
</style>
