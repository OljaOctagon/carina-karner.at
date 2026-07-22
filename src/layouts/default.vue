<template>
  <div class="layout">
    <NavBar />
    <main class="layout__main">
      <div class="container">
        <slot />
      </div>
    </main>
    <SiteFooter />
  </div>
</template>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.layout__main {
  flex: 1;
  padding-top: var(--spacing-2xl);
  padding-bottom: var(--spacing-3xl);
}

.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
}

@media (max-width: 640px) {
  .container {
    padding: 0 var(--spacing-md);
  }
}
</style>
