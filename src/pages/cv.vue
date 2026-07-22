<template>
  <div class="cv">
    <h1>Curriculum Vitae</h1>
    <div class="cv__actions">
      <a href="/cv.pdf" target="_blank" rel="noopener" class="cv__download">
        Download PDF &darr;
      </a>
    </div>
    <ContentDoc path="cv" />
  </div>
</template>

<style lang="scss" scoped>
.cv__actions {
  margin-bottom: var(--spacing-2xl);
}

.cv__download {
  display: inline-block;
  padding: var(--spacing-sm) var(--spacing-lg);
  border: 1px solid var(--color-accent);
  border-radius: var(--radius-md);
  color: var(--color-accent);
  font-size: 0.9rem;
  text-decoration: none;
  transition: background var(--transition-fast), color var(--transition-fast);

  &:hover {
    background: var(--color-accent);
    color: var(--color-bg);
  }
}
</style>
