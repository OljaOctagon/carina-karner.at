<template>
  <div>
    <fixed-background>
      <div>    
        <h1>carina-karner.at</h1>
        <slot />
      </div>
      <template #background>
        <shader  path="assets/shaders/torus.txt"></shader>
      </template>
    </fixed-background>
  </div>
</template>