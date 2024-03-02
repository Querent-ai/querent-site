<script lang="ts">
  import HeaderNav from '../Header/HeaderNav.svelte';
  import HeaderNavMobile from '../Header/HeaderNavMobile.svelte';
  import OpenCloseIcon from '../OpenCloseIcon.svelte';
  import { MAX_MOBILE_WIDTH } from '../../lib/consts';
  export let navColor: string = '';
  export let section: number;

  $: isNavOpen = false;

  $: textColor = `text-${navColor}`;

  $: innerWidth = window.innerWidth;

  $: {
    window.addEventListener('resize', () => {
      innerWidth = window.innerWidth;
      let hasMobileNav = innerWidth <= 900;
      if (!hasMobileNav) isNavOpen = false;
    });
  }
</script>

<div
  id="header"
  class={`freq-container z-50 flex max-w-page items-center justify-between sm:pt-[10px] lg:pt-[30px] ${isNavOpen ? 'fixed' : ''}`}
>
  <svg
    class="mr-3 sm:w-[180px] md:w-[180px] lg:w-[210px]"
    width="216"
    height="32"
    viewBox="0 0 216 32"
    xmlns="http://www.w3.org/2000/svg"
    role="none"
  >
  <path d="M 13.152 28.96 L 9.632 22.72 L 3.712 22.72 L 0 20.576 L 0 2.144 L 3.712 0 L 13.088 0 L 16.8 2.144 L 16.8 20.576 L 13.088 22.72 L 16.704 28.96 L 13.152 28.96 Z M 25.952 22.72 L 22.24 20.576 L 22.24 6.56 L 25.344 6.56 L 25.344 19.936 L 32.736 19.936 L 32.736 6.56 L 35.84 6.56 L 35.84 22.72 L 33.504 22.72 L 32.736 21.408 L 30.464 22.72 L 25.952 22.72 Z M 98.816 6.4 L 102.528 8.544 L 102.528 22.56 L 99.424 22.56 L 99.424 9.184 L 92.032 9.184 L 92.032 22.56 L 88.928 22.56 L 88.928 6.4 L 91.264 6.4 L 92.032 7.712 L 94.304 6.4 L 98.816 6.4 Z M 44.064 19.776 L 53.6 19.776 L 53.6 22.56 L 44.672 22.56 L 40.96 20.416 L 40.96 8.544 L 44.672 6.4 L 49.888 6.4 L 53.6 8.544 L 53.6 15.648 L 44.064 15.648 L 44.064 19.776 Z M 74.272 19.776 L 83.808 19.776 L 83.808 22.56 L 74.88 22.56 L 71.168 20.416 L 71.168 8.544 L 74.88 6.4 L 80.096 6.4 L 83.808 8.544 L 83.808 15.648 L 74.272 15.648 L 74.272 19.776 Z M 109.312 9.344 L 106.368 9.344 L 106.368 6.56 L 109.312 6.56 L 109.312 3.872 L 112.416 2.08 L 112.416 6.56 L 116.256 6.56 L 116.256 9.344 L 112.416 9.344 L 112.416 19.776 L 116.256 19.776 L 116.256 22.56 L 113.024 22.56 L 109.312 20.416 L 109.312 9.344 Z M 13.6 2.88 L 3.2 2.88 L 3.2 19.84 L 13.6 19.84 L 13.6 2.88 Z M 67.648 6.56 L 67.648 9.344 L 61.824 9.344 L 61.824 22.56 L 58.72 22.56 L 58.72 6.56 L 61.056 6.56 L 61.824 7.872 L 64.096 6.56 L 67.648 6.56 Z M 50.496 9.184 L 44.064 9.184 L 44.064 12.864 L 50.496 12.864 L 50.496 9.184 Z M 80.704 9.184 L 74.272 9.184 L 74.272 12.864 L 80.704 12.864 L 80.704 9.184 Z"/>
  </svg>

  <!-- For Desktop -->
  <div class={`transition-color duration-1000 ${innerWidth <= MAX_MOBILE_WIDTH ? 'text-navy' : textColor}`}>
    <HeaderNav textColor={navColor} bind:section />
  </div>

  <!-- For Mobile -->
  <OpenCloseIcon onClick={() => (isNavOpen = !isNavOpen)} isOpen={isNavOpen} classes={'md:hidden lg:hidden'} />
  <HeaderNavMobile isOpen={isNavOpen} bind:section />
</div>
