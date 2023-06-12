<script lang="ts">
  let media = [
    {
      title: "TELEGRAM",
      src: "https://t.me/farzaadweb",
    },
    {
      title: "INSTAGRAM",
      src: "https://www.instagram.com/farzaadweb/",
    },
    {
      title: "LINKEDIN",
      src: "https://www.linkedin.com/in/farzadfarzanehnya/",
    },
    {
      title: "GITHUB",
      src: "https://github.com/farzaadweb",
    },
  ];
</script>

<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
  {#each media as m}
    <div
      class="bg-zinc-200 rounded-3xl py-3 shadow-inner border border-xinc-300 text-center group"
    >
      <a
        href={m.src}
        class="text-2xl font-semibold group-hover:tracking-[5px] transition-all duration-200"
        >{m.title}</a
      >
    </div>
  {/each}
</div>
