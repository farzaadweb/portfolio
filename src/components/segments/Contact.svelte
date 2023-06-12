<script lang="ts">
  import { HyperButton } from "$elements";
</script>

<form
  method="POST"
  action="/contact"
  class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
>
  <label for="first_name">
    First Name <br />
    <input type="text" name="first_name" id="first_name" placeholder="Farzad" />
  </label>
  <label for="last_name">
    Last Name<br />
    <input
      type="text"
      name="last_name"
      id="last_name"
      placeholder="Farzanehnia"
    />
  </label>
  <label for="email">
    Email<br />
    <input
      type="email"
      name="email"
      id="email"
      placeholder="farzad.fa@gmail.com"
    />
  </label>
  <label for="description" class="lg:col-span-3">
    Description<br />
    <textarea
      name="description"
      id="description"
      placeholder="Lorem ipsum dolor sit amet ..."
      maxlength="1000"
      class="max-h-28"
    />
  </label>
  <div class="md:col-span-2 lg:col-span-3 flex justify-center gap-4">
    <HyperButton type="button" theme="success">Submit</HyperButton>
    <HyperButton type="button" theme="attention">Cancel</HyperButton>
  </div>
</form>

<style scoped>
  label {
    font-weight: 600;
  }
  input,
  textarea {
    width: 100%;
    outline: none;
    color: #f4f4f5;
    padding: 10px 12px;
    font-size: 0.875rem; /* 14px */
    line-height: 1.25rem; /* 20px */
    margin-top: 6px;
    border-radius: 8px;
    font-weight: 400;
    background-color: #27272a;
    border: 1px solid #3f3f46;
  }
</style>
