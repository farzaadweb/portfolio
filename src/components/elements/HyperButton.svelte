<script lang="ts">
  export let type: "link" | "button";
  export let href: string | undefined = type === "link" ? "" : undefined;
  export let size: "fit" | "sm" | "md" | "lg" | "xl" = "md";
  export let rounded: "none" | "sm" | "md" | "lg" | "full" = "md";
  export let block: boolean = false;
  export let disabled: boolean = false;
  export let style: "solid" | "ghost" | "nobackground" = "solid";
  export let target = "_blank";
  export let theme:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "attention"
    | "info";

  let currentSize = {
    fit: "text-sm px-1.5",
    sm: "px-4 py-1.5",
    md: "px-8 py-2",
    lg: "px-12 py-3",
    xl: "px-16 py-4",
  }[size];
  let currentRounded = {
    none: "rounded-none",
    sm: "rounded-md",
    md: "rounded-2xl",
    lg: "rounded-3xl",
    full: "rounded-full",
  }[rounded];
  let currentTheme = {
    primary: ["24, 24, 27", "31, 41, 55"],
    secondary: ["248, 250, 252", "241, 245, 249"],
    success: ["22, 163, 74", "34, 197, 94"],
    warning: ["202, 138, 4", "234, 179, 8"],
    attention: ["220, 38, 38", "239, 68, 68"],
    info: ["37, 99, 235", "59, 130, 246"],
  }[theme];

  let styleConfigs = `--theme: ${currentTheme[0]}; --theme-onHover: ${currentTheme[1]}`;
  let baseClasses = `flex items-center justify-center ${
    theme === "secondary" ? "text-zinc-900 " : "text-white"
  }
  ${
    !block ? "w-max" : "w-full"
  } ${currentSize} ${currentRounded} ${style} transition-all duration-150`;
</script>

{#if type === "link"}
  <a {href} style={styleConfigs} class={baseClasses} {target}><slot /></a>
{:else if type === "button"}
  <button style={styleConfigs} class={baseClasses} {disabled}><slot /></button>
{:else}
  <p>Please Enter Correct Type</p>
{/if}

<style scoped>
  .solid {
    background-color: rgb(var(--theme));
    outline: 2px solid transparent;
    outline-offset: 4px;
  }
  .solid:hover {
    background-color: rgb(var(--theme-onHover));
  }
  .solid:focus {
    background-color: rgb(var(--theme-onHover));
    outline: 2px solid rgb(var(--theme-onHover));
  }
  .ghost {
    border-width: 2px;
    border-color: rgb(var(--theme));
    color: rgb(var(--theme));
    font-weight: 600;
  }
  .ghost:hover {
    border-color: rgb(var(--theme-onHover));
    color: rgb(var(--theme-onHover));
  }
  .ghost:focus {
    background-color: rgb(var(--theme-onHover));
    border-color: rgb(var(--theme-onHover));
    color: white;
  }
  .noBackground {
    color: rgb(var(--theme));
  }
  .noBackground:hover {
    color: rgb(var(--theme-onHover));
  }
  .noBackground:focus {
    color: rgb(var(--theme-onHover));
  }
</style>
