<script lang="ts">
  import { fly } from "svelte/transition";

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
      to: "/#contact",
    },
  ];

  let navbarStatus: boolean = false;
</script>

<div class="h-20 hidden lg:block">
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
<div class="lg:hidden relative z-40">
  <div class="h-20 container flex justify-between items-center bg-slate-50">
    <h1 class="font-semibold text-xl text-zinc-800">Farzad Farzanehnya</h1>
    <button on:click={() => (navbarStatus = !navbarStatus)}>
      <img
        src={navbarStatus
          ? "src/assets/icons/remove.svg"
          : "src/assets/icons/menu.svg"}
        alt=""
      />
    </button>
  </div>
  {#if navbarStatus}
    <div
      in:fly={{ y: -200, duration: 1000, opacity: 0.7 }}
      out:fly={{ y: -200, duration: 1000, opacity: 0.7 }}
      class="w-full absolute left-0 top-full -z-10 container bg-slate-100 py-6 grid grid-cols-1 gap-3"
    >
      {#each headerItems as link}
        <a
          href={link.to}
          class="hover:text-slate-600 transition-none duration-200 divide-y-2 divide-slate-200"
          >{link.name}</a
        >
      {/each}
    </div>
  {/if}
</div>
