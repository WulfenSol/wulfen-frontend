<template>
  <q-page class="row justify-center items-start ">
    <div class="text-content col-12 col-md-8 col-sm-10">
      <div style="height: 50px"></div>
      <q-stepper v-model="path" header-nav vertical ref="stepper" color="primary" animated>
        <q-step
          name="/lore/introduction"
          title="Intoduction"
          caption="Lore"
          icon="book"
          active-icon="remove_red_eye"
        >
          <p>{{ introduction.trim() }}</p>
          <q-stepper-navigation>
            <q-btn @click="path = '/lore/heraldic-tribes'" color="primary" label="Continue" />
          </q-stepper-navigation>
        </q-step>

        <q-step
          name="/lore/heraldic-tribes"
          title="Heraldic Tribes"
          icon="book"
          active-icon="remove_red_eye"
        >
          <q-img
            src="icons/Librarian_Sol_icon_gray-256.png"
            spinner-color="white"
            class="inline-image"
          />
          <p>{{ heraldicTribes.trim() }}</p>
          <q-stepper-navigation>
            <q-btn
              @click="path = '/lore/shard-of-the-cosmos'"
              color="primary"
              label="Continue"
            />
            <q-btn
              flat
              @click="path = '/lore/introduction'"
              color="primary"
              label="Back"
              class="q-ml-sm"
            />
          </q-stepper-navigation>
        </q-step>

        <q-step
          name="/lore/shard-of-the-cosmos"
          title="Shard of the Cosmos"
          icon="book"
          active-icon="remove_red_eye"
          id="test-test"
        >
          <p>{{ shardOfTheCosmos.trim() }}</p>
          <q-stepper-navigation>
            <q-btn @click="path = '/lore/birth-of-magic'" color="primary" label="Continue" />
            <q-btn
              flat
              @click="path = '/lore/heraldic-tribes'"
              color="primary"
              label="Back"
              class="q-ml-sm"
            />
          </q-stepper-navigation>
        </q-step>

        <q-step
          name="/lore/birth-of-magic"
          title="Birth of Magic"
          icon="book"
          active-icon="remove_red_eye"
        >
          <p>{{ birthOfMagic.trim() }}</p>
          <q-stepper-navigation>
            <q-btn color="primary" @click="path = '/world/currency'" label="World" />
            <q-btn
              flat
              @click="path = '/lore/shard-of-the-cosmos'"
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

import introduction from 'assets/lore/introduction.txt';
import heraldicTribes from 'assets/lore/heraldic-tribes.txt';
import shardOfTheCosmos from 'assets/lore/shard-of-the-cosmos.txt';
import birthOfMagic from 'assets/lore/birth-of-magic.txt';

export default defineComponent({
  name: 'LorePage',
  setup() {
    return { introduction, heraldicTribes, shardOfTheCosmos, birthOfMagic };
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
