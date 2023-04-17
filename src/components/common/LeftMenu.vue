<template>
  <q-list>

    <q-expansion-item
      v-for="(module, index) in menus"
      :key="module.label"
      expand-separator
      :icon="module.icon"
      :label="module.label"
      :default-opened="index==0"
      header-class="left-menu-root"

    >
      <q-list>
        <q-item v-for="page in module.children" class="left-menu-item" clickable v-ripple :to="{name:page.page}"
                :key="page.page">
          <q-item-section>{{ page.label }}</q-item-section>
        </q-item>

      </q-list>

    </q-expansion-item>


  </q-list>
</template>

<script lang="ts" setup>
import {appMenu} from '../../stores/app-store';
const menus = appMenu().menus;
</script>

