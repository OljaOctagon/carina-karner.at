<template>
  <article class="pub-card">
    <h3 class="pub-card__title">{{ publication.title }}</h3>
    <p class="pub-card__authors">{{ formattedAuthors }}</p>
    <p class="pub-card__venue">
      <em>{{ venue }}</em>
      <span v-if="publication.volume">, {{ publication.volume }}</span>
      <span v-if="publication.pages">, pp. {{ publication.pages }}</span>
      <span v-if="publication.year"> ({{ publication.year }})</span>
    </p>
    <div class="pub-card__links">
      <a
        v-if="publication.doi"
        :href="`https://doi.org/${publication.doi}`"
        target="_blank"
        rel="noopener"
        class="pub-card__link"
      >
        DOI
      </a>
      <a
        v-if="publication.url"
        :href="publication.url"
        target="_blank"
        rel="noopener"
        class="pub-card__link"
      >
        Link
      </a>
      <button
        class="pub-card__link pub-card__bibtex"
        @click="showBibtex = !showBibtex"
      >
        BibTeX
      </button>
    </div>
    <div v-if="showBibtex" class="pub-card__bibtex-block">
      <pre><code>{{ bibtexString }}</code></pre>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Publication } from '~/types/publication'

const props = defineProps<{
  publication: Publication
}>()

const showBibtex = ref(false)

const formattedAuthors = computed(() => {
  const authors = props.publication.authors
  if (authors.length === 0) return ''
  if (authors.length <= 2) {
    return authors.map((a) => `${a.lastName}, ${a.firstName}`).join(' & ')
  }
  return `${authors[0].lastName}, ${authors[0].firstName} et al.`
})

const venue = computed(() =>
  props.publication.journal || props.publication.booktitle || ''
)

const bibtexString = computed(() => {
  const p = props.publication
  const lines = [`@${p.type}{${p.key},`]
  lines.push(`  title     = {${p.title}},`)
  lines.push(`  author    = {${p.authors.map((a) => `${a.lastName}, ${a.firstName}`).join(' and ')}},`)
  if (p.journal) lines.push(`  journal   = {${p.journal}},`)
  if (p.booktitle) lines.push(`  booktitle = {${p.booktitle}},`)
  if (p.volume) lines.push(`  volume    = {${p.volume}},`)
  if (p.number) lines.push(`  number    = {${p.number}},`)
  if (p.pages) lines.push(`  pages     = {${p.pages}},`)
  if (p.year) lines.push(`  year      = {${p.year}},`)
  if (p.publisher) lines.push(`  publisher = {${p.publisher}},`)
  if (p.doi) lines.push(`  doi       = {${p.doi}},`)
  lines.push('}')
  return lines.join('\n')
})
</script>

<style lang="scss" scoped>
.pub-card {
  padding: var(--spacing-lg) 0;
  border-bottom: 1px solid var(--color-border-light);

  &:first-child {
    border-top: 1px solid var(--color-border-light);
  }
}

.pub-card__title {
  font-size: 1.05rem;
  font-weight: 600;
  margin-bottom: var(--spacing-xs);
  line-height: 1.4;
}

.pub-card__authors {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-xs);
}

.pub-card__venue {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  margin-bottom: var(--spacing-sm);
}

.pub-card__links {
  display: flex;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
}

.pub-card__link {
  font-size: 0.8rem;
  color: var(--color-accent);
  background: none;
  border: 1px solid var(--color-accent);
  border-radius: var(--radius-sm);
  padding: 2px 8px;
  cursor: pointer;
  text-decoration: none;
  transition: background var(--transition-fast), color var(--transition-fast);

  &:hover {
    background: var(--color-accent);
    color: var(--color-bg);
  }
}

.pub-card__bibtex-block {
  margin-top: var(--spacing-sm);

  pre {
    margin: 0;
    font-size: 0.8rem;
  }
}
</style>
