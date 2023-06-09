<script lang="ts">
  const headerItems = [
    {
      name: "HOME",
      to: "/",
    },
    {
      name: "ABOUT US",
      to: "/about us",
    },
    {
      name: "SERVICES",
      to: "/services",
    },
    {
      name: "PROJECTS",
      to: "/projects",
    },
    {
      name: "CONTACT",
      to: "/contact",
    },
  ];

  let navbarStatus: boolean = false;
</script>

<div class="h-full bg-slate-100 hidden lg:block">
  <div class="w-full h-full container flex items-center justify-between">
    <div>
      <h1 class="font-semibold text-2xl text-zinc-800">Farzad Farzanehnya</h1>
    </div>
    <div class="flex items-center">
      {#each headerItems as link, index}
        <div class="flex items-center">
          <a
            href={link.to}
            class="hover:text-slate-600 transition-none duration-200"
            >{link.name}</a
          >
          {#if index !== headerItems.length - 1}<div
              class="h-1 border-2 border-zinc-900 mx-4"
            />{/if}
        </div>
      {/each}
    </div>
  </div>
</div>

<!-- For Mobile First -->
<div class="h-full bg-slate-100 lg:hidden">
  <div class="h-full container flex justify-between items-center">
    <h1 class="font-semibold text-xl text-zinc-800">Farzad Farzanehnya</h1>
    <button on:click={() => (navbarStatus = true)}>
      <img src="../assets/icons/menu.svg" alt="" />
    </button>
  </div>
</div>

{#if navbarStatus}
  <div
    class="absolute left-0 top-0 z-50 bg-zinc-800 bg-opacity-75 h-screen w-full"
  />
{/if}

<style scoped></style>
