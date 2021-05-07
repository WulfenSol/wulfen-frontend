<template>
  <q-page class="row justify-center items-start ">
    <div class="text-content col-12 col-md-8 col-sm-10">
      <div style="height: 50px"></div>
      <q-stepper v-model="path" header-nav vertical ref="stepper" color="primary" animated>
        <q-step
          name="/world/currency"
          title="Currency"
          icon="book"
          active-icon="remove_red_eye"
        >
          <p>{{ currency.trim() }}</p>
          <q-stepper-navigation>
            <q-btn @click="path = '/world/flora'" color="primary" label="Continue" />
          </q-stepper-navigation>
        </q-step>

        <q-step name="/world/flora" title="Flora" icon="book" active-icon="remove_red_eye">
          <!-- <q-img
            src="icons/Librarian_Sol_icon_gray-256.png"
            spinner-color="white"
            class="inline-image"
          /> -->
          <p>{{ flora.trim() }}</p>
          <q-stepper-navigation>
            <q-btn @click="path = '/world/fauna'" color="primary" label="Continue" />
            <q-btn
              flat
              @click="path = '/world/currency'"
              color="primary"
              label="Back"
              class="q-ml-sm"
            />
          </q-stepper-navigation>
        </q-step>

        <q-step name="/world/fauna" title="Fauna" icon="book" active-icon="remove_red_eye">
          <p>{{ fauna.trim() }}</p>
          <q-stepper-navigation>
            <q-btn color="primary" @click="path = '/lore/introduction'" label="Lore" />
            <q-btn
              flat
              @click="path = '/world/flora'"
              color="primary"
              label="Back"
              class="q-ml-sm"
            />
          </q-stepper-navigation>
        </q-step>
      </q-stepper>
    </div>
    <!-- place QPageScroller at end of page -->
    <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
      <q-btn fab icon="keyboard_arrow_up" color="accent" />
    </q-page-scroller>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import currency from 'assets/world/currency.txt';
import flora from 'assets/world/flora.txt';
import fauna from 'assets/world/fauna.txt';

export default defineComponent({
  name: 'WorldPage',
  setup() {
    return { currency, flora, fauna };
  },
  computed: {
    // Use the computed 'path' to get and replace the router path.
    path: {
      get() {
        return this.$route.path;
      },
      set(val: string) {
        void this.$router.replace(val).catch((e: Error) => {
          if (e.name !== 'NavigationDuplicated') throw e;
        });
      },
    },
  },
});
</script>

<style scoped lang="scss">
.text-content {
  background-color: #00000022;
  // min-height: 200vh;
}
.q-stepper {
  margin: 15px 0;
}

p {
  white-space: pre-wrap;
  margin: 0;
}

.inline-image {
  max-width: 150px;
  float: left;
  margin: 5px 15px 10px 5px;
}
</style>
