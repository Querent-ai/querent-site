<script lang="ts">
  import PuneetHead from '../lib/assets/headshots/Puneet.png';
  import AudreyHead from '../lib/assets/headshots/Audrey.png';
  import AnshHead from '../lib/assets/headshots/Ansh.png';
  import NishantHead from '../lib/assets/headshots/Nishant.png';
  import FounderProfile from './FounderProfile.svelte';
  import SlideIn from './SlideIn.svelte';
</script>

<section class="flex flex-col gap-6 text-cream sm:-mb-[100px] lg:mb-[80px] vertical-lg:-mb-[100px]">
  <SlideIn>
    <h3 class="font-title text-xl tracking-wide">Meet the Innovators</h3>
  </SlideIn>
  <div class="flex gap-6">
    <FounderProfile
      imgSrc={PuneetHead}
      name="Puneet Saraswat"
      linkedinUrl="https://www.linkedin.com/in/psaraswat10074"
    />
    <FounderProfile imgSrc={AudreyHead} name="Audrey Cisneros" linkedinUrl="https://www.linkedin.com/in//audrey-cisneros" />
    <FounderProfile imgSrc={NishantHead} name="Nishant Gupta" linkedinUrl="https://www.linkedin.com/in/nishant-gupta-data" />
    <FounderProfile imgSrc={AnshHead} name="Ansh Joshi" linkedinUrl="https://www.linkedin.com/in/ansh-joshi-626bb8184" />
  </div>
</section>
