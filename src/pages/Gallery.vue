<template>
  <q-page>
    <div style="min-height: 60px" class="text-content row justify-center items-start">
      <p class="col-sm col-11 text-h5 self-center text-center">{{ galleryText }}</p>
    </div>

    <div id="gallery-flex" class="flex justify-center q-mx-md">
      <div
        v-for="imgItem in galleryItems"
        :key="imgItem.title"
        :style="{
          // Add a basis size for the element width size to be 12em times the ratio of the image's width/height,
          // and made sure that flex grow is relative to that ratio (with no upper bound).
          'flex': `${imgItem.ratio * 100} 0.5 ${imgItem.ratio * IMAGE_MIN_HEIGHT_EM}em`,
          // Do not allow elemnts to grow over 12em times the ratio of the image's width/height.
          'max-width': `${imgItem.ratio * IMAGE_MAX_HEIGHT_EM}em`,
          'min-width': '10px',
          'margin': '0 5px',
        }"
      >
        <q-img
          class="cursor-pointer"
          :src="imgItem.src"
          :ratio="imgItem.ratio"
          @click="imageDetails = imgItem"
        />
        <p class="text-center text-content">
          {{ imgItem.title }} / {{ titles.artist }}: {{ imgItem.artist }} / {{ titles.owner }}:
          {{ imgItem.owner }}
        </p>
        <q-tooltip>
          "{{ imgItem.title }}"
          {{ imgItem.owner !== imgItem.artist ? `for ${imgItem.owner},` : '' }}
          by
          {{ imgItem.artist }}
        </q-tooltip>
      </div>
    </div>

    <image-dialog :details.sync="imageDetails"></image-dialog>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import csvParse from 'csv-parse/lib/sync';

import galleryText from 'assets/gallery.txt';
import gallery from 'assets/gallery.csv';

import ImageDialog from 'components/ImageDialog.vue';

const RATIO_RE = /^\s*(\d+)(?:\s*[/:\\,-]\s*(\d+))\s*$/;
const DEFAULT_RATIO = 4 / 3;
const IMAGE_MIN_HEIGHT_EM = 12;
const IMAGE_MAX_HEIGHT_EM = 18;

function parseRatio(ratioString: string) {
  const regexMatch = RATIO_RE.exec(ratioString);
  const [, width, height] = regexMatch ? regexMatch : [];
  if (width) {
    return height ? Number(width) / Number(height) : Number(width);
  }
  return DEFAULT_RATIO;
}

export default defineComponent({
  components: { ImageDialog },
  name: 'WorldPage',
  setup() {
    const [titleValues, ...items] = csvParse(gallery) as [string[], ...Array<string[]>];
    const titles = {
      title: titleValues[0],
      artist: titleValues[1],
      owner: titleValues[2],
      src: titleValues[3],
      thumb: titleValues[4],
      ratio: titleValues[5],
    };
    const galleryItems = items.map((item: string[]) => ({
      title: item[0],
      artist: item[1],
      owner: item[2],
      src: item[3],
      thumb: item[4],
      ratio: parseRatio(item[5]),
    }));
    return { galleryText, titles, galleryItems, IMAGE_MIN_HEIGHT_EM, IMAGE_MAX_HEIGHT_EM };
  },
  data() {
    return { imageDetails: null };
  },
});
</script>

<style scoped lang="scss">
.text-content {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
