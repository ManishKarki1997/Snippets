<template>
  <div style="height: calc(100vh - 4rem)" class="w-full bg-primary">
    <div class="container flex w-full h-full">
      <div class="flex items-center justify-center w-5/12 bg-primary">
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
            :src="`https://picsum.photos/id/${
              $route.params.snippet - 1
            }/200/300`"
            alt="Snippet Image"
          />
        </div>
      </div>
      <div class="w-7/12 px-4 py-10 bg-primary text-primary">
        <div class="w-full h-full px-6 py-6 rounded bg-secondary">
          <h4
            v-shared-element:[`snippet-title-${$route.params.snippet}`]="{
              includeChildren: true,
            }"
            class="-mt-1 text-xl font-bold tracking-wide"
          >
            Hello World
          </h4>
          <p>
            Culpa ullam modi harum nostrum quibusdam cum delectus recusandae.
          </p>

          <div class="flex items-center my-6">
            <div
              class="flex items-center mr-4 overflow-hidden rounded bg-primary text-primary group"
            >
              <div
                class="h-full px-2 py-1 transition-all duration-300 transform -translate-x-20 rounded-sm cursor-pointer text-primary group-hover:translate-x-0 hover:text-accent"
              >
                <EyeIcon class="w-5 h-5 text-current stroke-2" />
              </div>
              <button
                class="flex items-center px-2 py-1 transition-all duration-300 transform -translate-x-5 group-hover:-translate-x-1 text-primary"
              >
                HTML
              </button>
            </div>

            <div
              class="flex items-center mr-4 overflow-hidden rounded bg-primary text-primary group"
            >
              <div
                class="h-full px-2 py-1 transition-all duration-300 transform -translate-x-20 rounded-sm cursor-pointer text-primary group-hover:translate-x-0 hover:text-accent"
              >
                <EyeIcon class="w-5 h-5 text-current stroke-2" />
              </div>
              <button
                class="flex items-center px-2 py-1 transition-all duration-300 transform -translate-x-5 group-hover:-translate-x-1 text-primary"
              >
                CSS
              </button>
            </div>

            <div
              class="flex items-center mr-4 overflow-hidden rounded bg-primary text-primary group"
            >
              <div
                class="h-full px-2 py-1 transition-all duration-300 transform -translate-x-20 rounded-sm cursor-pointer text-primary group-hover:translate-x-0 hover:text-accent"
              >
                <EyeIcon class="w-5 h-5 text-current stroke-2" />
              </div>
              <button
                class="flex items-center px-2 py-1 transition-all duration-300 transform -translate-x-5 group-hover:-translate-x-1 text-primary"
              >
                JS
              </button>
            </div>

            <div
              class="flex items-center mr-4 overflow-hidden rounded bg-primary text-primary group"
            >
              <div
                class="h-full px-2 py-1 transition-all duration-300 transform -translate-x-20 rounded-sm cursor-pointer text-primary group-hover:translate-x-0 hover:text-accent"
              >
                <EyeIcon class="w-5 h-5 text-current stroke-2" />
              </div>
              <button
                class="flex items-center px-2 py-1 transition-all duration-300 transform -translate-x-5 group-hover:-translate-x-1 text-primary"
              >
                Tailwind
              </button>
            </div>
          </div>

          <div class="flex items-center w-full py-2 mt-6">
            <div
              v-shared-element:[`snippet-tag-button-${$route.params.snippet}`]="{
                includeChildren: true,
                duration: '400ms',
              }"
              class="px-2 py-1 mb-2 mr-2 transition-all duration-300 rounded text-accent"
            >
              <p class="cursor-pointer">#button</p>
            </div>
            <div
              v-shared-element:[`snippet-tag-card-${$route.params.snippet}`]="{
                includeChildren: true,
                duration: '500ms',
              }"
              class="px-2 py-1 mb-2 mr-2 transition-all duration-300 rounded text-accent"
            >
              <p class="cursor-pointer">#card</p>
            </div>
            <div
              v-shared-element:[`snippet-tag-avatar-${$route.params.snippet}`]="{
                includeChildren: true,
                duration: '600ms',
              }"
              class="px-2 py-1 mb-2 mr-2 transition-all duration-300 rounded text-accent"
            >
              <p class="cursor-pointer">#avatar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EyeIcon from '@/assets/icons/eye-outline.svg?inline'

export default {
  components: {
    EyeIcon,
  },
}
</script>
