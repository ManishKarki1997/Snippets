<template>
  <div style="height: calc(100vh - 4rem)" class="flex">
    <div class="flex items-center justify-center w-5/12 px-16 bg-secondary">
      <div
        style="height: 80vh"
        class="w-full overflow-hidden rounded-lg shadow-xl"
      >
        <img
          v-shared-element:[`image-${$route.params.snippet}`]="{
            includeChildren: true,
            duration: '500ms',
          }"
          class="object-cover w-full h-full rounded-lg"
          :src="`https://picsum.photos/id/${$route.params.snippet - 1}/200/300`"
          alt="Snippet Image"
        />
      </div>
    </div>
    <div class="w-7/12 px-4 py-10 bg-secondary text-primary">
      <h4
        v-shared-element:[`snippet-title-${$route.params.snippet}`]="{
          includeChildren: true,
        }"
        class="-mt-1 text-xl font-bold tracking-wide"
      >
        Hello World
      </h4>
      <p>Culpa ullam modi harum nostrum quibusdam cum delectus recusandae.</p>
    </div>
  </div>
</template>
