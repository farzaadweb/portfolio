<script lang="ts">
  export let direction: "horizontal" | "vertical";
  export let haveImage: boolean = true;
</script>

<div
  class={`flex ${
    direction === "horizontal" ? "" : " flex-col"
  } border border-zinc-600 rounded-3xl hover:shadow-xl px-2 py-2 card transition-all`}
>
  {#if haveImage}
    <div class="w-full h-56 rounded-3xl overflow-hidden">
      <img
        src="src/assets/code-refrence.jpg"
        alt=""
        class="w-full h-full object-cover object-center"
      />
    </div>
  {/if}
  <div class="py-6 px-4">
    {#if $$slots.title}
      <h1 class="text-2xl font-bold mb-1"><slot name="title" /></h1>
    {/if}
    {#if $$slots.date}
      <span class="text-sm text-zinc-400 mb-2"><slot name="date" /></span>
    {/if}
    {#if $$slots.description}
      <p class="text-sm text-zinc-500 line-clamp-2">
        <slot name="description" />
      </p>
    {/if}
  </div>
</div>

<!-- <div
  class="border border-zinc-800 rounded-3xl   flex flex-col"
>
  
  <div class="px-4 py-6">
    <h1 class="text-2xl font-bold">
      <a href="/">Optimization Front End Codes</a>
    </h1>
    <span class="text-sm text-zinc-400 mt-1 mb-2 inline-block"
      >2023/06/05 - New Release</span
    >
    <p class="text-sm text-zinc-500 line-clamp-3">
      in this article we will know about how to optimization front end codes in
      this article we will know about how to optimization front end codes in
      this article we will know about how to optimization front end codes
    </p>
  </div>
</div> -->

<style scoped>
  .card {
    cursor: pointer;
  }
</style>
