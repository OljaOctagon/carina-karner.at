<template>
  <div class="blog">
    <h1>Blog</h1>
    <ContentList :path="'/blog'" v-slot="{ list }">
      <ul class="blog__list">
        <li v-for="post in list" :key="post._path" class="blog__item">
          <NuxtLink :to="post._path" class="blog__link">
            <span class="blog__title">{{ post.title }}</span>
            <span v-if="post.date" class="blog__date">{{ formatDate(post.date) }}</span>
            <span v-if="post.description" class="blog__desc">{{ post.description }}</span>
          </NuxtLink>
        </li>
      </ul>
    </ContentList>
  </div>
</template>

<script setup lang="ts">
function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<style lang="scss" scoped>
.blog__list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.blog__item {
  margin: 0;
}

.blog__link {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  padding: var(--spacing-md);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  text-decoration: none;
  color: var(--color-text);
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);

  &:hover {
    border-color: var(--color-accent);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  }
}

.blog__title {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 1.1rem;
}

.blog__date {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.blog__desc {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
}
</style>
