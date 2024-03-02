<script lang="ts">
  import SectionParagraph from '../SectionParagraph.svelte';
  import SlideIn from '../SlideIn.svelte';
  import Section3Wave from './Section3Wave.svelte';
  import SectionWrapper from './SectionWrapper.svelte';
  import SplitSection from './SplitSection.svelte';
</script>

<SectionWrapper
  id="section3"
  classes="z-0 flex sm:justify-center md:justify-center overflow-hidden sm:pt-[40px]  vertical-lg:pt-0 text-cream"
>
  <!-- Desktop Wave -->
  <div class="absolute bottom-0 left-0 h-full w-[50%] sm:hidden lg:block vertical-lg:hidden">
    <Section3Wave />
  </div>

  <!-- Text Content -->
  <section class="flex h-full flex-1 justify-center sm:flex-col sm:pt-[40px] lg:flex-row vertical-lg:flex-col">
    <SplitSection isLeft={true} classes="relative sm:pb-[100px] lg:pb-0">
      <SlideIn>
        <h2 class="title-75 text-right text-navy sm:max-w-[300px] md:max-w-[400px] lg:max-w-[540px]">
          Build Knowledge Graphs and Train AI Models
        </h2>
      </SlideIn>
      <div class="z-10 sm:block md:block lg:hidden">
        <Section3Wave />
      </div>
    </SplitSection>
    <SplitSection
      isLeft={false}
      classes={`lg:border-b-[5px] h-full lg:border-yellow bg-teal lg:mr-0 transition-[height] sm:pt-[100px] vertical-lg:pt-6 duration-[2s] sm:pb-[80px]`}
    >
      <SectionParagraph classes="sm:pr-[100px] md:pr-[140px] lg:px-0">
        At the heart of Querent lies the sophisticated architecture for building and refining knowledge graphs. These intricate structures serve as the cornerstone of data organization, interlinking vast arrays of information to uncover hidden patterns, relationships, and trends. Through meticulous curation and analysis, Querent empowers users to construct comprehensive representations of their data ecosystems, laying the groundwork for robust AI-driven decision-making processes.
      </SectionParagraph>
    </SplitSection>
  </section>
</SectionWrapper>
