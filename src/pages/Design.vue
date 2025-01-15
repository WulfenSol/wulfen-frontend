<template>
  <q-page>
    <div style="min-height: 60px" class="text-content row justify-center items-start">
      <p class="col-sm col-11 text-h5 self-center text-center">{{ designText }}</p>
    </div>

    <div style="width: 100%" class="row justify-center">
      <p class="col-11 text-h6 self-center text-center">Base Design</p>
      <div class="col-11 col-sm-5 col-md-3 cursor-pointer" @click="imageDetails = wulfen-base.png">
        <q-img :src="wulfen-base.png" />
      </div>
      <div style="width: 100%" class="row justify-center">
        <div class="col-11 col-sm-5 col-md-3 col-lg-2">
          <a href="images/design/Wulfen-Template2.clip">
            <p class="text-h6 self-center text-center">Download for Clip Studio Paint</p>
          </a>
        </div>
        <div class="col-11 col-sm-5 col-md-3 col-lg-2">
          <a href="images/design/Wulfen-Template2.psd">
            <p class="text-h6 self-center text-center">Download for Photoshop</p>
          </a>
        </div>
      </div>
    </div>

    <div style="width: 100%" class="row justify-evenly">
      <p class="col-11 text-h6 self-center text-center">More Designs</p>
      <div
        class="col-11 col-sm-5 col-md-3 cursor-pointer"
        @click="imageDetails = wulfenNonStar"
      >
        <q-img :src="wulfenNonStar.thumb" />
      </div>
      <!-- Place wulfenHorns in the middle for wide screen -->
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
      <!-- Place wulfenHorns in the row bellow for less wide screen -->
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

    <image-dialog :details.sync="imageDetails"></image-dialog>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import designText from 'assets/design.txt';
import ImageDialog from 'src/components/ImageDialog.vue';

const DESIGN_IMAGES = {
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
  wulfenBase: {
    title: 'Wulfen Base',
    src: 'images/design/wulfen-base.jpg',
    thumb: 'images/design/wulfen-base-thumb.jpg',
  },
};

export default defineComponent({
  components: { ImageDialog },
  name: 'WorldPage',
  setup() {
    return { designText };
  },
  data() {
    return { imageDetails: null, ...DESIGN_IMAGES };
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
