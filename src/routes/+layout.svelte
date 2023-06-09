<script lang="ts">
  import TheHeader from "./_TheHeader.svelte";
  import "../assets/css/default.css";
</script>

<header class="h-20"><TheHeader /></header>
<slot />
<footer class="bg-slate-100 py-6 text-center">
  <p class="text-slate-500 text-sm text-center">
    © All Rights Reserved by
    <a
      href="https://www.linkedin.com/in/farzadfarzanehnya/"
      class="border-b border-slate-600 border-dashed">Farzad Farzanehnya</a
    >
  </p>
</footer>
