<script lang="ts">
  import XLogo from '../lib/assets/XLogo.svg';
  import DiscordLogo from '../lib/assets/DiscordLogo.svg';
  import LinkedInLogo from '../lib/assets/LinkedInLogo.svg';
  import GithubLogo from '../lib/assets/GithubLogo.svg';
  import IconBtn from './IconBtn.svelte';
</script>

<div class="w-full max-w-[425px] pb-[80px] sm:pt-[80px] lg:pl-[140px] lg:pt-6">
  <h3 class="text-base font-semibold">Join the new era of actionable insights.</h3>
  <p class="text-sm"> Enable Querent to craft innovative solution and power your AI needs towards an exponential growth.</p>
  <div class="mt-4 flex gap-4" aria-label="Social Links">
    <IconBtn label="X/Twitter" imgSrc={XLogo} href={'https://twitter.com/querent_ai'} />
    <IconBtn label="Discord" imgSrc={DiscordLogo} href="https://discord.gg/3fVAVmZXyh" />
    <IconBtn label="LinkedIn" imgSrc={LinkedInLogo} href={'https://www.linkedin.com/company/querent-ai'} />
    <IconBtn label="GitHub" imgSrc={GithubLogo} href={'https://github.com/querent-ai'} />
  </div>
</div>
