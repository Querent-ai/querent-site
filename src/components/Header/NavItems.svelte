<script lang="ts">
  export let textColor: string;
  export let section: number;
  export let isDesktop: boolean = true;
</script>

{#if isDesktop}
  <a class={`underline-on-hover after:bg-${textColor}`} href="/" on:click|preventDefault={() => (section = 1)}>About.</a
  >
{/if}
<!-- <a class={`underline-on-hover after:bg-${textColor}`} href="/#">Our Technology.</a> -->
<a
  class={`underline-on-hover after:bg-${textColor}`}
  href="https://docs.querent.xyz/"
  target="_blank"
  rel="noreferrer"
  role="">Documentation.</a
>
<a
  class={`underline-on-hover after:bg-${textColor}`}
  href="https://medium.com/@querent"
  target="_blank"
  rel="noreferrer">Publications.</a
>
<a class={`underline-on-hover after:bg-${textColor}`} href="mailto:contact@querent.xyz">Contact Us.</a>
