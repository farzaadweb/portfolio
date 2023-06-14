<script lang="ts">
  import TheHeader from "./_TheHeader.svelte";
  import TheFooter from "./_TheFooter.svelte";
  import "../assets/css/default.css";
</script>

<div class="py-3 bg-blue-600 text-white">
  <div class="flex items-center gap-6 container relative">
    <div class="w-4 h-4 rounded-full bg-yellow-500 animate-ping" />
    <h3 class="font-medium">این سایت در حال بهبود و توسعه است.</h3>
  </div>
</div>
<header><TheHeader /></header>
<slot />
<footer><TheFooter /></footer>
