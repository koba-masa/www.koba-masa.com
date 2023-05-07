<script setup lang="ts">

const imageWidth = () => {
  const maxWidth = 780;
  if (window.innerWidth > maxWidth) {
    return maxWidth;
  }
  return window.innerWidth - 50;
}

</script>

<template>
  <div class="githubContribution">
    <figure>
      <figcaption class="caption">
        My GitHub Contribution
      </figcaption>
      <a href="https://github.com/koba-masa" target="_blank">
        <img :src="`https://grass-graph.appspot.com/images/koba-masa.png?width=${imageWidth()}`">
      </a>
    </figure>
  </div>
</template>

<style>
.githubContribution {
  text-align: center;
}
.githubContribution .caption {
  font-weight: bold;
  margin-bottom: 10px;
}
</style>
