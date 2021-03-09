<template>
  <q-page>
    <div style="min-height: 60px" class="text-content row justify-center items-start">
      <p class="col-sm col-11 text-h5 self-center text-center">{{ designText }}</p>
    </div>
    <div style="width: 100%" class="row justify-evenly">
      <div
        class="col-11 col-sm-5 col-md-3 cursor-pointer"
        @click="imageDetails = wulfenNonStar"
      >
        <q-img :src="wulfenNonStar.thumb" />
      </div>
      <div
        class="gt-sm col-11 col-sm-5 col-md-3 cursor-pointer"
        @click="imageDetails = wulfenHorns"
      >
        <q-img :src="wulfenHorns.thumb" />
      </div>
      <div
        class="col-11 col-sm-5 col-md-3 cursor-pointer"
        @click="imageDetails = wulfenStarBound"
      >
        <q-img :src="wulfenStarBound.thumb" />
      </div>
      <div
        class="lt-md col-11 col-sm-5 col-md-3 cursor-pointer"
        @click="imageDetails = wulfenHorns"
      >
        <q-img :src="wulfenHorns.thumb" />
      </div>

      <div
        class="col-11 col-sm-9 col-md-7 cursor-pointer"
        @click="imageDetails = wulfenMarkings"
      >
        <q-img :src="wulfenMarkings.thumb" />
      </div>
    </div>

    <q-dialog v-model="showImage" full-width>
      <q-card>
        <q-card-section v-if="imageDetails" class="row items-center q-pb-none">
          <div class="col-9 col-sm-10 text-h6">
            {{ imageDetails.title }} - Click to open in a new tab
          </div>
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
  thumb: string;
}
type DesignKeys = 'wulfenNonStar' | 'wulfenStarBound' | 'wulfenHorns' | 'wulfenMarkings';

const DESIGN_IMAGES: { [k in DesignKeys]: imgItem } = {
  wulfenNonStar: {
    title: 'Wulfen (Non Star)',
    src: 'images/design/wulfen-nonstar.jpg',
    thumb: 'images/design/wulfen-nonstar-thumb.jpg',
  },
  wulfenStarBound: {
    title: 'Wulfen (Star Bound)',
    src: 'images/design/wulfen-starbound.jpg',
    thumb: 'images/design/wulfen-starbound-thumb.jpg',
  },
  wulfenHorns: {
    title: 'Wulfen Horns',
    src: 'images/design/wulfen-horns.png',
    thumb: 'images/design/wulfen-horns-thumb.png',
  },
  wulfenMarkings: {
    title: 'Wulfen Markings',
    src: 'images/design/wulfen-markings.png',
    thumb: 'images/design/wulfen-markings-thumb.png',
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
