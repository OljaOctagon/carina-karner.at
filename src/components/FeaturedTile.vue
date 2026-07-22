<template>
  <NuxtLink :to="href" :class="['featured-tile', { 'featured-tile--featured': featured }]">
    <div class="featured-tile__image">
      <NuxtImg
        :src="image"
        :alt="imageAlt"
        :sizes="featured ? '100vw' : '(max-width: 640px) 100vw, (max-width: 960px) 50vw, 320px'"
        densities="1x 2x"
        :loading="featured ? 'eager' : 'lazy'"
        :style="{ objectPosition }"
        fit="cover"
        format="webp"
        quality="80"
        preload
      />
    </div>
    <div class="featured-tile__overlay" />
    <div class="featured-tile__content">
      <span class="featured-tile__category">{{ category }}</span>
      <h3 class="featured-tile__title">{{ title }}</h3>
      <p v-if="subtitle" class="featured-tile__subtitle">{{ subtitle }}</p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
  title: string
  category: 'Research' | 'Teaching'
  subtitle?: string
  image: string
  imageAlt: string
  href: string
  featured?: boolean
  objectPosition?: string
}

withDefaults(defineProps<Props>(), {
  subtitle: '',
  featured: false,
  objectPosition: 'center',
  imageAlt: '',
})
</script>

<style lang="scss" scoped>
.featured-tile {
  display: block;
  position: relative;
  aspect-ratio: 4 / 3;
  border-radius: var(--radius-lg);
  overflow: hidden;
  text-decoration: none;
  color: #fff;
  transition: transform var(--transition-normal);

  &:hover,
  &:focus-visible {
    transform: scale(1.02);

    .featured-tile__overlay {
      background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.72) 0%,
        rgba(0, 0, 0, 0.32) 42%,
        rgba(0, 0, 0, 0.04) 72%
      );
    }

    .featured-tile__content {
      transform: translateY(-2px);
    }
  }

  &:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }
}

.featured-tile__image {
  position: absolute;
  inset: 0;

  :deep(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
}

.featured-tile__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.68) 0%,
    rgba(0, 0, 0, 0.28) 42%,
    transparent 72%
  );
  z-index: 1;
  transition: background var(--transition-normal);
}

.featured-tile__content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  padding: var(--spacing-lg);
  transition: transform var(--transition-normal);
}

.featured-tile__category {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.78);
  margin-bottom: var(--spacing-xs);
}

.featured-tile__title {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1.3;
  color: #fff;
  margin: 0 0 var(--spacing-xs);
}

.featured-tile__subtitle {
  font-size: 0.85rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.82);
  margin: 0;
  max-width: 480px;
}

.featured-tile--featured {
  .featured-tile__content {
    padding: var(--spacing-xl);
  }

  .featured-tile__title {
    font-size: 1.6rem;

    @media (max-width: 640px) {
      font-size: 1.25rem;
    }
  }

  .featured-tile__subtitle {
    font-size: 0.95rem;
    max-width: 560px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .featured-tile,
  .featured-tile__overlay,
  .featured-tile__content {
    transition: none;
  }

  .featured-tile:hover,
  .featured-tile:focus-visible {
    transform: none;
  }
}
</style>
