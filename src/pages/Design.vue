<template>
  <q-page>
    <div style="min-height: 50px" class="text-content row justify-center items-start">
      <p class="col-sm col-11 self-center text-center">{{ designText }}</p>
    </div>
    <div style="width: 100%" class="row justify-center">
      <div
        class="col-sm-5 col-md-4 col-11 cursor-pointer"
        @click="imageDetails = wulfenNonStar"
      >
        <q-img :src="wulfenNonStar.src" />
      </div>
      <div
        class="offset-sm-1 col-sm-5 col-md-4 col-11 cursor-pointer"
        @click="imageDetails = wulfenStarBound"
      >
        <q-img :src="wulfenStarBound.src" />
      </div>
    </div>
    <div style="width: 100%" class="row justify-center">
      <div class="col-sm-5 col-md-4 col-11 cursor-pointer" @click="imageDetails = wulfenHorns">
        <q-img :src="wulfenHorns.src" />
      </div>
    </div>

    <q-dialog v-model="showImage" full-width full-height>
      <q-card>
        <q-card-section v-if="imageDetails" class="row items-center q-pb-none">
          <div class="text-h6">{{ imageDetails.title }} - Click to open in a new tab</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section v-if="imageDetails">
          <a :href="imageDetails.src" target="_blank">
            <q-img :src="imageDetails.src" />
          </a>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import designText from 'assets/design.txt';

interface imgItem {
  title: string;
  src: string;
}
type DesignKeys = 'wulfenNonStar' | 'wulfenStarBound' | 'wulfenHorns';

const DESIGN_IMAGES: { [k in DesignKeys]: imgItem } = {
  wulfenNonStar: {
    title: 'Wulfen (Non Star)',
    src: 'images/design/wulfen-nonstar.jpg',
  },
  wulfenStarBound: {
    title: 'Wulfen (Star Bound)',
    src: 'images/design/wulfen-starbound.jpg',
  },
  wulfenHorns: {
    title: 'Wulfen Horns',
    src: 'images/design/wulfen-horns.png',
  },
};

export default defineComponent({
  name: 'WorldPage',
  setup() {
    return { designText };
  },
  data(): { [k in DesignKeys]: imgItem } & { imageDetails: imgItem | null } {
    return { imageDetails: null, ...DESIGN_IMAGES };
  },
  computed: {
    showImage: {
      get(): boolean {
        return this.imageDetails !== null;
      },
      set(value: imgItem | false | null): void {
        this.imageDetails = value || null;
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
p {
  white-space: pre-wrap;
  margin: 0;
}
.row > div {
  margin-bottom: 20px;
}
.inline-image {
  max-width: 150px;
  float: left;
  margin: 5px 15px 10px 5px;
}
</style>
