<template>
  <div class="bg-primary text-primary">
    <div class="container">
      <h4>Hello world</h4>
      <div class="bg-secondary py-6 px-4 rounded my-6">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
          necessitatibus dolor vitae quo, nisi quaerat ipsam! Assumenda eius
          quasi officia.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
@import url('~/assets/css/tailwind.css');
/* Sample `apply` at-rules with Tailwind CSS */
.container {
  @apply w-10/12 mx-auto;
}
</style>
