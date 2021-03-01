<template>
  <q-layout view="lhh Lpr lFf">
    <q-header elevated reveal>
      <div class="row justify-center">
        <q-toolbar class="col-12 col-sm-8">
          <!-- <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        /> -->

          <q-toolbar-title shrink>Wulfen</q-toolbar-title>

          <q-space></q-space>

          <!-- <q-tabs inline-label no-caps align="center" class="col-6 text-white"> -->
          <q-btn-dropdown auto-close stretch flat label="Lore">
            <q-list>
              <q-item clickable @click="navigate('lore/introduction')">
                <q-item-section>Intoduction</q-item-section>
              </q-item>
              <q-item clickable @click="navigate('lore/heraldic-tribes')">
                <q-item-section>Heraldic Tribes</q-item-section>
              </q-item>
              <q-item clickable @click="navigate('lore/shard-of-the-cosmos')">
                <q-item-section>Shard of the Cosmos</q-item-section>
              </q-item>
              <q-item clickable @click="navigate('lore/birth-of-magic')">
                <q-item-section>Birth of Magic</q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <q-btn-dropdown auto-close stretch flat label="World">
            <q-list>
              <q-item clickable @click="navigate('world/currency')">
                <q-item-section>Currency</q-item-section>
              </q-item>
              <q-item clickable @click="navigate('world/flora')">
                <q-item-section>Flora</q-item-section>
              </q-item>
              <q-item clickable @click="navigate('world/fauna')">
                <q-item-section>Fauna</q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <q-btn unelevated stretch @click="navigate('design')">Design</q-btn>
          <!-- <q-route-tab to="Photos" exact replace label="Photos" /> -->
          <!-- </q-tabs> -->

          <q-space></q-space>

          <q-tabs>
            <q-route-tab align="right" to="about" exact replace label="About" />
          </q-tabs>
        </q-toolbar>
      </div>
    </q-header>

    <!-- <q-drawer v-model="leftDrawerOpen" show-if-above>
      <q-list>
        <q-item-label header class="text-grey-8">
          Essential Links
        </q-item-label>
        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title shrink>
          <q-avatar>
            <q-icon name="info" style="font-size:2em" />
          </q-avatar>
          Legal
        </q-toolbar-title>
        <p>{{ legalText.trim() }}</p>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import EssentialLink from 'components/EssentialLink.vue';

import legalText from 'assets/legal.txt';

const linksData = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev',
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework',
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev',
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev',
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev',
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev',
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev',
  },
];

export default defineComponent({
  name: 'MainLayout',
  components: { EssentialLink },
  setup() {
    const leftDrawerOpen = ref(false);
    const essentialLinks = ref(linksData);

    return { leftDrawerOpen, essentialLinks, legalText };
  },
  methods: {
    navigate(tab: string) {
      void this.$router.push('/' + tab).catch((e: Error) => {
        if (e.name !== 'NavigationDuplicated') throw e;
      });
    },
  },
});
</script>

<style lang="scss" scoped>
footer > .q-toolbar > p {
  white-space: pre-wrap;
  margin: 0;
}
</style>
