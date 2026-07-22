<template>
  <footer class="footer">
    <div class="footer__inner">
      <p class="footer__copy">&copy; {{ currentYear }} Carina Karner</p>
      <div class="footer__links">
        <a href="mailto:hello@carina-karner.at">Email</a>
        <a href="https://www.researchgate.net/profile/Carina-Karner" target="_blank" rel="noopener">ResearchGate</a>
        <a href="https://scholar.google.com" target="_blank" rel="noopener">Google Scholar</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<style lang="scss" scoped>
.footer {
  border-top: 1px solid var(--color-border);
  padding: var(--spacing-xl) 0;
}

.footer__inner {
  max-width: var(--max-width-wide);
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--spacing-md);
}

.footer__copy {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  margin: 0;
}

.footer__links {
  display: flex;
  gap: var(--spacing-lg);

  a {
    font-size: 0.85rem;
    color: var(--color-text-muted);
    text-decoration: none;
    transition: color var(--transition-fast);

    &:hover {
      color: var(--color-accent);
    }
  }
}

@media (max-width: 640px) {
  .footer__inner {
    flex-direction: column;
    text-align: center;
  }
}
</style>
