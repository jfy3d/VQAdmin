<template>
  <q-page padding class="q-pa-sm">


    <q-card square flat bordered>
      <q-card-section>
        <div class="row items-center">
          <div class="col q-pr-md">KPI</div>
          <div class="col-auto">
            <q-rating
              v-model="model1"

              max="7"
              size="2em"
              color="green-5"
              icon="star_border"
              icon-selected="star"
              icon-half="star_half"
            />

          </div>
        </div>
      </q-card-section>
    </q-card>
    <div class="row q-mt-sm full-width">
      <div class="col-12">
        <q-tabs
          v-model="tab"
          dense

          inline-label
no-caps
          indicator-color="white"

          flat
          align="justify"
          active-class="text-white"
          class="bg-green text-grey-9"
        >
          <q-tab name="mails" icon="mail" label="注册"/>
          <q-tab name="alarms" icon="alarm" label="开通业务"/>
          <q-tab name="movies" icon="movie" label="办理记录"/>
        </q-tabs>
        <q-separator/>

        <q-tab-panels v-model="tab" animated >
          <q-tab-panel name="mails" class="q-col-gutter-y-sm">
            <div class="text-subtitle2">基本信息</div>
            <q-separator style="padding:0" class="q-mt-sm q-mb-sm"/>
            <div class="row items-center q-col-gutter-sm">
              <div class="col-2">用户名
                <q-badge rounded color="red"/>
              </div>
              <div class="col-4">
                <q-input v-model="name" filled square placeholder="请输入用户名" dense/>
              </div>
              <div class="col-2">手机号码
                <q-badge rounded color="red"/>
              </div>
              <div class="col-4">
                <q-input filled square placeholder="" fill-mask="#" dense mask="### #### ####"/>
              </div>
            </div>
            <div class="row items-center q-col-gutter-sm">
              <div class="col-2">电子邮箱</div>
              <div class="col-4">
                <q-input filled square placeholder="Placeholder" dense>
                  <template v-slot:append>
                    <q-icon name="mail"/>
                  </template>
                </q-input>
              </div>
              <div class="col-2">身份证号</div>
              <div class="col-4">
                <q-input filled square placeholder="Placeholder" fill-mask="#" dense mask="###### ######## ###X"/>
              </div>
            </div>
            <div class="row items-center q-col-gutter-sm">
              <div class="col-2">生日</div>
              <div class="col-4">
                <q-input v-model="date" filled square placeholder="请输入用户名" dense>


                  <template v-slot:append>
                    <q-icon name="event">
                      <q-popup-proxy ref="datepop" @before-show="updateProxy" cover  transition-show="scale" transition-hide="scale">
                        <q-date v-model="proxyDate">
                          <div class="row items-center justify-end q-gutter-sm">
                            <q-btn label="Cancel" color="primary" flat v-close-popup/>
                            <q-btn label="OK" color="primary" flat @click="save" v-close-popup/>
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>

              </div>
              <div class="col-2">工作类型</div>
              <div class="col-4">
                <q-select filled square dense :options="['教师','工程师','销售','运动员']"/>

              </div>
            </div>
            <div class="text-subtitle2">职业信息</div>
            <q-separator style="padding:0" class="q-mt-sm q-mb-sm"/>
            <div class="row items-center q-col-gutter-sm">
              <div class="col-2">所在行业</div>
              <div class="col-4">
                <div class="q-gutter-sm">

                  <q-radio v-model="shape" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="rectangle"
                           label="游戏"/>
                  <q-radio v-model="shape" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="ellipse"
                           label="教育"/>
                  <q-radio v-model="shape" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="polygon"
                           label="金融"/>
                </div>
              </div>
              <div class="col-2">是否团员</div>
              <div class="col-4">
                <q-toggle
                  v-model="third"
                  checked-icon="check"
                  color="green"
                  unchecked-icon="clear"
                />
              </div>
            </div>
            <div class="row items-center q-col-gutter-sm">
              <div class="col-2">常用地址</div>
              <div class="col-4">
                <q-input filled square placeholder="请输入地址" dense/>
              </div>
              <div class="col-2">兴趣爱好</div>
              <div class="col-4">
                <q-input filled square dense/>
              </div>
            </div>
            <div class="row items-center q-col-gutter-sm">
              <div class="col-2">自我介绍</div>
              <div class="col-10">
                <q-editor square v-model="name" min-height="5rem"/>
              </div>


            </div>
            <div class="row q-mt-md">
              <div class="col-12 q-gutter-lg text-right">
                <q-btn color="white" unelevated text-color="black" rounded label="取消" style="min-width: 100px" icon="reply" class="l-shadow-2"/>
                <q-btn color="primary" unelevated label="保存" rounded style="min-width: 100px" icon="save" class="l-shadow-2"/>
              </div>
            </div>

          </q-tab-panel>

          <q-tab-panel name="alarms">
            <q-list bordered>
              <q-expansion-item
                expand-separator
                icon="perm_identity"
                label="Account settings"
                caption="John Doe"
              >
                <q-card>
                  <q-card-section>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                    commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                    eveniet doloribus ullam aliquid.
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-expansion-item
                expand-separator
                icon="signal_wifi_off"
                label="Wifi settings"
                default-opened
              >
                <q-card>
                  <q-card-section>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                    commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                    eveniet doloribus ullam aliquid.
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-expansion-item
                expand-separator
                icon="drafts"
                label="Drafts"
                header-class="text-purple"
                default-opened
              >
                <q-card>
                  <q-card-section>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                    commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                    eveniet doloribus ullam aliquid.
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-expansion-item icon="assessment" label="Disabled" disable>
                <q-card>
                  <q-card-section>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                    commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                    eveniet doloribus ullam aliquid.
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </q-list>
          </q-tab-panel>

          <q-tab-panel name="movies">

            <q-tree
              :nodes="simple"
              node-key="label"
              no-connectors
              v-model:expanded="expanded"
            />
          </q-tab-panel>
        </q-tab-panels>

      </div>


    </div>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-fab
        icon="add"
        direction="up"
        color="accent"
      >
        <q-fab-action @click="onClick" color="primary" icon="person_add"/>
        <q-fab-action @click="onClick" color="primary" icon="mail"/>
      </q-fab>
    </q-page-sticky>
  </q-page>
</template>

<script>
import {ref} from 'vue'

export default {
  name: 'OrderPage',
  setup() {
    const date = ref('2019/03/01')
    const proxyDate = ref('2019/03/01')
    return {
      onClick() {
        // console.log('Clicked on a fab action')
      },
      third: ref(false),
      shape: ref(''),
      model1: ref(3.5),
      tab: ref('mails'),
      name: ref(''),
      date,
      proxyDate,

      updateProxy() {
        proxyDate.value = date.value
      },

      save() {
        date.value = proxyDate.value
      },
      expanded: ref(['Satisfied customers (with avatar)', 'Good food (with icon)']),

      simple: [
        {
          label: 'Satisfied customers (with avatar)',
          avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
          children: [
            {
              label: 'Good food (with icon)',
              icon: 'restaurant_menu',
              children: [
                {label: 'Quality ingredients'},
                {label: 'Good recipe'}
              ]
            },
            {
              label: 'Good service (disabled node with icon)',
              icon: 'room_service',
              disabled: true,
              children: [
                {label: 'Prompt attention'},
                {label: 'Professional waiter'}
              ]
            },
            {
              label: 'Pleasant surroundings (with icon)',
              icon: 'photo',
              children: [
                {
                  label: 'Happy atmosphere (with image)',
                  img: 'https://cdn.quasar.dev/img/logo_calendar_128px.png'
                },
                {label: 'Good table presentation'},
                {label: 'Pleasing decor'}
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
