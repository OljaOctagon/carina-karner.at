<template>
  <div class="contact">
    <h1>Contact</h1>

    <section class="contact__section">
      <h2>Email</h2>
      <p>
        <a href="mailto:hello@carina-karner.at">hello@carina-karner.at</a>
      </p>
    </section>

    <section class="contact__section">
      <h2>Affiliation</h2>
      <p>
        Institute of Theoretical Physics<br />
        TU Wien<br />
        Wiedner Hauptstrasse 8-10<br />
        1040 Vienna, Austria
      </p>
    </section>

    <section class="contact__section">
      <h2>Profiles</h2>
      <ul class="contact__links">
        <li>
          <a href="https://www.researchgate.net/profile/Carina-Karner" target="_blank" rel="noopener">
            ResearchGate
          </a>
        </li>
        <li>
          <a href="https://scholar.google.com" target="_blank" rel="noopener">
            Google Scholar
          </a>
        </li>
        <li>
          <a href="https://univie.academia.edu/CarinaKarner" target="_blank" rel="noopener">
            Academia.edu
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.contact__section {
  margin-bottom: var(--spacing-2xl);
}

.contact__links {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}
</style>
