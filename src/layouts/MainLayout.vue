<template>
  <q-layout view="hHh LpR fFf">
    <q-header class="shadow-1">
      <app-bar @switch-right="toggleRightDrawer" @switch-left="toggleLeftDrawer"/>
    </q-header>

    <q-drawer
      class="shadow-0"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :width="200"
      id="left-menu"
    >
      <LeftMenu/>
    </q-drawer>

    <q-drawer class="l-shadow-3" no-swipe-backdrop v-model="rightDrawerOpen" side="right" bordered overlay
              :width="240"
              @mouseleave="toggleRightDrawer"
    >
      <u-i-config/>
    </q-drawer>
    <q-page-container class="main-container">
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import LeftMenu from 'components/common/LeftMenu.vue';
import AppBar from 'components/common/AppBar.vue';
import UIConfig from 'components/common/UIConfig.vue';


export default defineComponent({
  name: 'MainLayout',

  components: {
    UIConfig,
    AppBar,
    LeftMenu,
  },

  setup() {
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)
    return {

      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }

    }
  }
});
</script>
