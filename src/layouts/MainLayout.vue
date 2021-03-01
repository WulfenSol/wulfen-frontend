<template>
  <q-layout view="lhh Lpr lFf">
    <q-header elevated reveal>
      <div class="row justify-center">
        <q-toolbar class="col-12 col-sm-11 col-md-8  row">
          <div class="xs">
            <q-btn
              flat
              dense
              round
              icon="menu"
              aria-label="Menu"
              @click="leftDrawerOpen = !leftDrawerOpen"
            />
          </div>

          <q-toolbar-title shrink class="col-12 col-sm-3">Wulfen</q-toolbar-title>

          <!-- <q-space></q-space> -->

          <!-- <q-tabs inline-label no-caps align="center" class="col-6 text-white"> -->
          <div class="gt-xs col-12 col-sm  text-center">
            <q-btn-dropdown auto-close stretch flat label="Lore">
              <q-list>
                <q-item clickable @click="navigate('/lore/introduction')">
                  <q-item-section>Intoduction</q-item-section>
                </q-item>
                <q-item clickable @click="navigate('/lore/heraldic-tribes')">
                  <q-item-section>Heraldic Tribes</q-item-section>
                </q-item>
                <q-item clickable @click="navigate('/lore/shard-of-the-cosmos')">
                  <q-item-section>Shard of the Cosmos</q-item-section>
                </q-item>
                <q-item clickable @click="navigate('/lore/birth-of-magic')">
                  <q-item-section>Birth of Magic</q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
            <q-btn-dropdown auto-close stretch flat label="World">
              <q-list>
                <q-item clickable @click="navigate('/world/currency')">
                  <q-item-section>Currency</q-item-section>
                </q-item>
                <q-item clickable @click="navigate('/world/flora')">
                  <q-item-section>Flora</q-item-section>
                </q-item>
                <q-item clickable @click="navigate('/world/fauna')">
                  <q-item-section>Fauna</q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
            <q-btn unelevated stretch @click="navigate('/design')">Design</q-btn>
          </div>

          <div class="gt-xs col-1 col-sm-2 col-md-3" />

          <!-- <q-tabs>
            <q-route-tab align="right" to="about" exact replace label="About" />
          </q-tabs> -->
        </q-toolbar>
      </div>
    </q-header>

    <q-drawer overlay v-model="leftDrawerOpen">
      <q-list>
        <q-item-label header class="text-grey-8">
          Navigation
        </q-item-label>
        <q-item
          clickable
          v-ripple
          :active="$route.path.startsWith('/lore')"
          @click="loreNavsOpen = !loreNavsOpen"
          active-class="navigation-link"
        >
          <q-item-section>Lore</q-item-section>
        </q-item>
        <q-slide-transition>
          <div v-show="loreNavsOpen">
            <q-item
              clickable
              v-ripple
              :inset-level="0.5"
              :active="$route.path.startsWith('/lore/introduction')"
              @click="navigate('/lore/introduction')"
              active-class="sub-navigation-link"
            >
              <q-item-section>Intoduction</q-item-section>
            </q-item>

            <q-item
              clickable
              v-ripple
              :inset-level="0.5"
              :active="$route.path.startsWith('/lore/heraldic-tribes')"
              @click="navigate('/lore/heraldic-tribes')"
              active-class="sub-navigation-link"
            >
              <q-item-section>Heraldic Tribes</q-item-section>
            </q-item>
            <q-item
              clickable
              v-ripple
              :inset-level="0.5"
              :active="$route.path.startsWith('/lore/shard-of-the-cosmos')"
              @click="navigate('/lore/shard-of-the-cosmos')"
              active-class="sub-navigation-link"
            >
              <q-item-section>Shard of the Cosmos</q-item-section>
            </q-item>
            <q-item
              clickable
              v-ripple
              :inset-level="0.5"
              :active="$route.path.startsWith('/lore/birth-of-magic')"
              @click="navigate('/lore/birth-of-magic')"
              active-class="sub-navigation-link"
            >
              <q-item-section>Birth of Magic</q-item-section>
            </q-item>
          </div>
        </q-slide-transition>
        <q-item
          clickable
          v-ripple
          :active="$route.path.startsWith('/world')"
          @click="worldNavsOpen = !worldNavsOpen"
          active-class="navigation-link"
        >
          <q-item-section>World</q-item-section>
        </q-item>
        <q-slide-transition>
          <div v-show="worldNavsOpen">
            <q-item
              clickable
              v-ripple
              :inset-level="0.5"
              :active="$route.path.startsWith('/world/currency')"
              @click="navigate('/world/currency')"
              active-class="sub-navigation-link"
            >
              <q-item-section>Currency</q-item-section>
            </q-item>

            <q-item
              clickable
              v-ripple
              :inset-level="0.5"
              :active="$route.path.startsWith('/world/flora')"
              @click="navigate('/world/flora')"
              active-class="sub-navigation-link"
            >
              <q-item-section>Flora</q-item-section>
            </q-item>
            <q-item
              clickable
              v-ripple
              :inset-level="0.5"
              :active="$route.path.startsWith('/world/fauna')"
              @click="navigate('/world/fauna')"
              active-class="sub-navigation-link"
            >
              <q-item-section>Fauna</q-item-section>
            </q-item>
          </div>
        </q-slide-transition>

        <q-item
          clickable
          v-ripple
          :active="$route.path.startsWith('/design')"
          @click="navigate('/design')"
          active-class="navigation-link"
        >
          <q-item-section>Design</q-item-section>
        </q-item>
        <q-item-label header class="text-grey-8">
          External Links
        </q-item-label>
        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title class="gt-xs" shrink>
          <q-avatar>
            <q-icon name="info" style="font-size:2em" />
          </q-avatar>
          Legal
        </q-toolbar-title>
        <p>{{ legalText.trim() }}</p>
        <q-space />
        <div class="row">
          <a v-for="link in essentialLinks" :key="link.title" :href="link.link">
            <q-btn flat avatar>
              <q-icon :name="link.icon" />
            </q-btn>
          </a>
        </div>
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
    title: 'Twitter',
    caption: 'twitter.com/WulfenSol',
    icon: 'fab fa-twitter',
    link: 'https://twitter.com/WulfenSol',
    color: '#1da1f2',
  },
  {
    title: 'Twitch',
    caption: 'www.twitch.tv/wulfensol',
    icon: 'fab fa-twitch',
    link: 'https://www.twitch.tv/wulfensol',
    color: '#6441a5',
  },
  {
    title: 'Discord',
    caption: '',
    icon: 'fab fa-discord',
    link: 'https://discord.gg/BZYPSS4',
    color: '#7289da',
  },
];

export default defineComponent({
  name: 'MainLayout',
  components: { EssentialLink },
  setup() {
    const leftDrawerOpen = ref(false);
    const essentialLinks = ref(linksData);
    const loreNavsOpen = ref(false);
    const worldNavsOpen = ref(false);

    return { leftDrawerOpen, essentialLinks, legalText, loreNavsOpen, worldNavsOpen };
  },
  methods: {
    navigate(tab: string) {
      this.loreNavsOpen = false;
      this.worldNavsOpen = false;
      void this.$router.push(tab).catch((e: Error) => {
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
a {
  color: white;
}
.navigation-link {
  color: white;
  background: #f2c037;
}
.sub-navigation-link {
  color: white;
  background: #e09b40;
}
</style>
