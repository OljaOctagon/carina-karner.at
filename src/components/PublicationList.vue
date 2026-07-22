<template>
  <div class="pub-list">
    <div v-if="publications.length === 0" class="pub-list__empty">
      <p>No publications yet. Add entries to <code>publications.bib</code> and run <code>npm run parse-bib</code>.</p>
    </div>
    <PublicationCard
      v-for="pub in publications"
      :key="pub.key"
      :publication="pub"
    />
  </div>
</template>

<script setup lang="ts">
import type { Publication } from '~/types/publication'

const publications = ref<Publication[]>([])

try {
  const data = await import('~/assets/data/publications.json')
  publications.value = (data.default || data) as Publication[]
} catch {
  publications.value = []
}
</script>

<style lang="scss" scoped>
.pub-list__empty {
  color: var(--color-text-muted);
  padding: var(--spacing-xl) 0;

  code {
    font-size: 0.85em;
  }
}
</style>
