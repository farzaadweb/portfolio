<script lang="ts">
  import { fly } from "svelte/transition";
  import { HyperButton } from "$elements";

  const headerItems: Array<{
    name: string;
    href?: string;
    child?: Array<{ name: string; href: string }>;
    childIsOpen?: boolean;
  }> = [
    {
      name: "صفحه اصلی",
      href: "/",
    },
    {
      name: "نمونه کارها",
      href: "/work-samples",
    },
    {
      name: "سرویس‌ها",
      child: [
        {
          name: "خدمات",
          href: "/services",
        },
        {
          name: "لیست قیمت‌ها",
          href: "/price-list",
        },
        {
          name: "خدمات افزودنی",
          href: "/additive-services",
        },
        {
          name: "سایر",
          href: "/other",
        },
      ],
      childIsOpen: false,
    },
    {
      name: "درباره من",
      href: "/about-me",
    },
    {
      name: "وبلاگ",
      href: "/blog",
    },
  ];

  let navbarStatus: boolean = false;
  let activeChildOpen: number | null = null;
</script>

<!-- Desktop Size -->
<div class="h-16 hidden lg:flex justify-between items-center container">
  <div class="flex items-center gap-20">
    <a href="/"><img src="src/assets/logo.svg" alt="logo" class="w-8" /></a>
    <div class="flex gap-6">
      {#each headerItems as item}
        {#if item.child}
          <div
            class="relative z-40 group overflow-hidden hover:overflow-visible"
          >
            <span class="flex items-end gap-0.5 nav-item">
              {item.name}
              <img
                src="src/assets/icons/direction-down.svg"
                alt="direction-down"
                class="w-5"
              /></span
            >
            <div
              class="w-max absolute top-4 right-0 pt-4 opacity-0 group-hover:opacity-100 group-hover:top-full transition-all duration-300"
            >
              <ul
                class="list-disc space-y-2 bg-slate-50 shadow-2xl rounded-xl border-t-4 border-blue-600 py-4 px-8"
              >
                {#each item.child as child}
                  <li class="nav-item">
                    <a href={child.href}>{child.name}</a>
                  </li>
                {/each}
              </ul>
            </div>
          </div>
        {:else}
          <a href={item.href} class="nav-item">{item.name}</a>
        {/if}
      {/each}
    </div>
  </div>
  <div class="flex items-center gap-4">
    <HyperButton type="button" style="nobackground" theme="primary" size="fit">
      <img src="src/assets/icons/search.svg" alt="call_icon" />
    </HyperButton>
    <HyperButton type="button" style="solid" theme="primary" size="sm"
      ><img
        src="src/assets/icons/call.svg"
        alt="call_icon"
        class="w-5 inline ml-1.5"
      /> تماس‌ با من
    </HyperButton>
  </div>
</div>

<!-- Mobile Size -->
<div class="h-16 lg:hidden flex justify-between items-center container">
  <button
    class="bg-slate-200/80 rounded-xl"
    on:click={() => (navbarStatus = true)}
  >
    <img src="src/assets/icons/menu.svg" alt="menu_icon" class="w-10" />
  </button>
  <div class="flex items-center gap-2">
    <HyperButton type="button" style="nobackground" theme="primary" size="fit">
      <img src="src/assets/icons/search.svg" alt="call_icon" />
    </HyperButton>
    <HyperButton type="button" style="solid" theme="primary" size="sm"
      ><img
        src="src/assets/icons/call.svg"
        alt="call_icon"
        class="w-5 inline"
      />
    </HyperButton>
  </div>
</div>

{#if navbarStatus}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    class="lg:hidden absolute top-0 right-0 z-50 w-full h-screen bg-slate-900 bg-opacity-80"
    transition:fly
  >
    <div
      class="absolute top-0 right-0 w-full h-full -z-20"
      on:click={() => (navbarStatus = false)}
    />
    <div
      class="h-full w-4/5 bg-slate-100 z-50 py-4 px-6"
      transition:fly={{ x: 100 }}
    >
      <div class="text-end">
        <button on:click={() => (navbarStatus = false)}
          ><img src="src/assets/icons/remove.svg" alt="" class="w-12" /></button
        >
      </div>
      <div class="mt-4 flex flex-col gap-7">
        {#each headerItems as item, index}
          {#if item.child}
            <div class="border-b-2 border-slate-200 pb-2">
              <button
                class="w-full flex items-center justify-between gap-0.5 nav-item"
                on:click={() => (item.childIsOpen = !item.childIsOpen)}
              >
                {item.name}
                <img
                  src={`src/assets/icons/direction-${
                    item.childIsOpen ? "up" : "down"
                  }.svg`}
                  alt="direction-down"
                  class="w-5 bg-slate-200 rounded-full"
                /></button
              >
              {#if item.childIsOpen}
                <div
                  class="mt-4 border border-slate-300 px-6 py-3 rounded-2xl space-y-4"
                  transition:fly
                >
                  {#each item.child as child}
                    <a
                      href={child.href}
                      class="nav-item block border-b border-slate-200 pb-1"
                      >{child.name}</a
                    >
                  {/each}
                </div>
              {/if}
            </div>
          {:else}
            <a
              href={item.href}
              class="nav-item border-b-2 border-slate-200 pb-2">{item.name}</a
            >
          {/if}
        {/each}
      </div>
    </div>
  </div>
{/if}

<style scoped>
  .nav-item {
    font-weight: 600;
    color: #525252;
    transition: all 0.1s;
    cursor: pointer;
    font-size: 15px;
  }
  .nav-item:hover {
    color: #6b7280;
  }
</style>
