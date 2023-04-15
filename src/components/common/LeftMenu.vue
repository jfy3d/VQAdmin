<template>
  <q-list>

    <q-expansion-item
      expand-separator
      icon="addchart"
      label="数据统计"
      default-opened
      header-class="left-menu-root"
    >
      <q-list>
        <q-item class="left-menu-item" clickable v-ripple :to="{name:'index'}">
          <q-item-section>业务总览</q-item-section>
        </q-item>
        <q-item class="left-menu-item" clickable v-ripple :to="{name:'customer'}">
          <q-item-section>客户统计</q-item-section>
        </q-item>
      </q-list>

    </q-expansion-item>

    <q-expansion-item
      header-class="left-menu-root"
      expand-separator icon="o_data_exploration" label="运营管理" default-opened>
      <q-list>
        <q-item class="left-menu-item" clickable v-ripple :to="{name:'business_config'}">
          <q-item-section>业务配置</q-item-section>
        </q-item>
        <q-item class="left-menu-item" clickable v-ripple :to="{name:'customer_list'}">
          <q-item-section>客户管理</q-item-section>
        </q-item>
        <q-item class="left-menu-item" clickable v-ripple :to="{name:'order'}">
          <q-item-section>订单管理</q-item-section>
        </q-item>
      </q-list>

    </q-expansion-item>
    <q-expansion-item
      header-class="left-menu-root"
      expand-separator icon="o_settings" label="系统管理">
      <q-list>
        <q-item class="left-menu-item" clickable v-ripple>
          <q-item-section>参数配置</q-item-section>
        </q-item>
        <q-item class="left-menu-item" clickable v-ripple>
          <q-item-section>角色管理</q-item-section>
        </q-item>
        <q-item class="left-menu-item" clickable v-ripple>
          <q-item-section>用户管理</q-item-section>
        </q-item>
      </q-list>

    </q-expansion-item>
  </q-list>
</template>

<script>
export default {
  name: 'LeftMenu'
}
</script>

<style scoped>

</style>
