<template>
  <q-toolbar>
    <q-btn
      flat
      dense
      round
      icon="menu"
      aria-label="Menu"
      @click="doSwitchL"
    />

    <q-toolbar-title style="max-width: 160px">
      VAdmin
    </q-toolbar-title>
    <q-breadcrumbs class="text-white" active-color="text-white">
      <q-breadcrumbs-el icon="home" label="Home"/>
      <q-breadcrumbs-el label="Components"/>

    </q-breadcrumbs>
    <q-space/>
    <q-btn-dropdown color="primary" label="销售业务" flat rounded text-color="white">
      <q-list>
        <q-item clickable v-close-popup>
          <q-item-section>
            <q-item-label>Photos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup>
          <q-item-section>
            <q-item-label>Videos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup>
          <q-item-section>
            <q-item-label>Articles</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
    <q-btn flat round dense icon="reply" class="q-mr-xs"/>
    <q-btn flat round dense class="q-mr-xs" :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
           @click="$q.fullscreen.toggle()"/>
    <q-btn flat round dense icon="person">
      <q-badge color="red" rounded floating>4</q-badge>
      <q-menu>
        <q-list style="min-width: 100px">
          <q-item clickable v-close-popup>
            <q-item-section @click="showUserInfo">个人信息</q-item-section>
          </q-item>
          <q-item clickable v-close-popup>
            <q-item-section @click="updatepassword">修改密码</q-item-section>
          </q-item>
          <q-item clickable v-close-popup>
            <q-item-section @click="confirm">退出</q-item-section>
          </q-item>

        </q-list>
      </q-menu>
    </q-btn>
    <q-btn flat round dense class="q-mr-xs" icon="o_settings"
           @click="doSwitchR"/>
  </q-toolbar>
</template>

<script lang="ts" setup>
import AppBar from '../../services/appbar'
import {defineEmits} from 'vue';
const emit = defineEmits([]);
const {doSwitchL, doSwitchR} = AppBar(emit);
</script>
