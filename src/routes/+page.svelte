<script setup lang="ts">
  import { Segment, SegmentHeader, HyperButton } from "$elements";
  import { Technology, Articles, SocialMedia } from "$segments";
</script>

<Segment height="fit">
  <div class="h-full flex flex-col items-center justify-center text-center">
    <div class="relative z-40 introducer">
      <h1 class="text-xl md:text-5xl lg:text-6xl font-bold text-blue-500">
        Hello, EveryOne
      </h1>
      <h1 class="text-2xl md:text-5xl lg:text-7xl font-bold mt-2 lg:mt-6">
        I'am Farzad Farzanehnya
      </h1>
      <h1 class="text-2xl md:text-5xl lg:text-7xl font-bold mt-1 lg:mt-4">
        A Front End Developer :)
      </h1>
      <p
        class="max-w-2xl text-sm lg:text-lg mt-2 lg:mt-4 text-zinc-600 inline-block"
      >
        Passionate Frontend Developer | Creating Engaging User Experiences with
        HTML, CSS, and JavaScript | Transforming Designs into High-Performance
        Web Applications
      </p>
    </div>
  </div>
</Segment>

<Segment height="fit" backgroundColor="secondary" padding="py-6 lg:py-8">
  <Technology />
</Segment>

<Segment height="fit" backgroundColor="primary">
  <SegmentHeader theme="light">Work Samples</SegmentHeader>
</Segment>

<Segment height="fit" backgroundColor="secondary">
  <SegmentHeader theme="dark">Articles</SegmentHeader>
  <div class="mt-12 lg:mt-14">
    <Articles />
  </div>
</Segment>

<Segment height="fit" backgroundColor="primary">
  <SegmentHeader theme="light">Social Media</SegmentHeader>
  <div class="mt-12 lg:mt-14"><SocialMedia /></div>
</Segment>

<style scoped>
  .introducer::before {
    content: "";
    width: 300px;
    height: 300px;
    border-radius: 999px;
    background-color: #ef4444;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    filter: blur(100px);
  }
  .introducer::after {
    content: "";
    width: 300px;
    height: 300px;
    border-radius: 999px;
    background-color: #3b82f6;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -1;
    filter: blur(100px);
  }

  @media only screen and (max-width: 640px) {
    .introducer::before {
      width: 200px;
      height: 200px;
    }
    .introducer::after {
      width: 200px;
      height: 200px;
    }
  }
</style>
