<template>
<div>
  <q-card square flat>
    <q-card-section>
      <q-toggle
        v-model="dark"
        color="green"
        label="暗色模式"
        @click="$q.dark.toggle"
      />

    </q-card-section>
  </q-card>
  <q-card square flat>
    <q-card-section>

      <div class="text-subtitle2">修改主题色</div>
    </q-card-section>
    <q-card-section>

      <div class="row q-col-gutter-sm">
        <div class="col-4 column">
          <q-btn unelevated style="background-color: #7c00d0" @click="changeColor('#7c00d0')"/>
        </div>
        <div class="col-4 column">
          <q-btn unelevated style="background-color: #df1256" @click="changeColor('#df1256')"/>
        </div>
        <div class="col-4 column">
          <q-btn unelevated style="background-color: #ff9800" @click="changeColor('#ff9800')"/>
        </div>
      </div>
      <div class="row q-col-gutter-sm q-mt-sm">
        <div class="col-4 column">
          <q-btn unelevated style="background-color: #1976D2" @click="changeColor('#1976D2')"/>
        </div>
        <div class="col-4 column">
          <q-btn unelevated style="background-color: #4caf50" @click="changeColor('#4caf50')"/>
        </div>
        <div class="col-4 column">
          <q-btn unelevated style="background-color: #795548" @click="changeColor('#795548')"/>
        </div>
      </div>
    </q-card-section>
  </q-card>
</div>
</template>

<script>
import { setCssVar } from 'quasar';
import {ref} from 'vue';
export default {
  name: 'UIConfig',
  setup(){
    return {
      dark:ref(false),
      changeColor(color){
        setCssVar('primary',color)
      }
    }
  }
}
</script>

<style scoped>

</style>
