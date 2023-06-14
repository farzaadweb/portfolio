<script setup lang="ts">
  import { Segment, SegmentHeader, HyperButton } from "$elements";
  import { Technology, Articles, SocialMedia, Contact } from "$segments";
</script>

<Segment height="fit" backgroundColor="primary">
  <div class="h-full flex items-center gap-6">
    <div class="w-1/2 flex justify-end">
      <div>
        <h4 class="text-blue-600 text-xl font-semibold mb-4">
          لیاقت بهترین ها را دارید
        </h4>
        <h1 class="text-slate-700 font-black text-5xl">
          با همراهی من و تیمم بهترین
        </h1>
        <h1 class="text-slate-700 font-black text-3xl mt-3.5">
          کسب و کار آنلاین خود را راه اندازی کنید.
        </h1>
        <p class="text-slate-500 mt-4 max-w-xl leading-relaxed font-medium">
          به برند شخصی ما خوش آمدید! ما یک تیم پویا از حرفه‌ایان ماهر در حوزه
          توسعه و طراحی وب هستیم. با تخصص در توسعه جلوه‌های بینابین، توسعه
          پشتیبان و طراحی UI/UX، ترکیبی از خلاقیت و مهارت فنی را در اختیار داریم
          تا تجربه‌های دیجیتال استثنایی را به شما ارائه دهیم.
        </p>
      </div>
    </div>
    <div class="w-1/2 flex justify-start">
      <img src="src/assets/hero-hold-logo.png" alt="hero_hold_logo" />
    </div>
  </div>
</Segment>

<Segment height="fit" backgroundColor="secondary" padding="pb-6 lg:pb-10">
  <Technology />
</Segment>
<!--

<Segment height="fit" backgroundColor="primary">
  <SegmentHeader>Work Samples</SegmentHeader>
  <div class="mt-12 lg:mt-14 text-center">
    <span class="text-slate-400">In Progress ...</span>
  </div>
</Segment> -->

<!-- <Segment height="fit" backgroundColor="secondary">
  <SegmentHeader>Articles</SegmentHeader>
  <div class="mt-12 lg:mt-14">
    <Articles />
  </div>
</Segment> -->

<!-- 

<Segment height="fit" backgroundColor="primary" padding="py-10">
  <SocialMedia />
</Segment>

<Segment height="fit" backgroundColor="secondary">
  <SegmentHeader theme="dark">Contact Me</SegmentHeader>
  <div class="mt-12 lg:mt-14"><Contact /></div>
</Segment> -->
