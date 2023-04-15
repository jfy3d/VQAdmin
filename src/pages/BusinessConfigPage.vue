<template>
  <div class="q-pa-sm full-width full-height">
    <q-card square flat bordered>
      <q-card-section>
        <div class="row items-center">
          <div class="col text-center">
            <div class="row">
              <div class="col-6">
                <div class="row text-caption">
                  原始容量
                </div>
                <div class="row text-h5 q-pt-sm q-pb-sm items-baseline">
                  128.6 <span class="text-subtitle1 q-ml-sm">GB</span>
                </div>
                <div class="row text-caption">
                  月同比 <span class="text-purple q-ml-sm">29.58%</span>
                  <q-icon
                    class="text-purple"

                    size="xs"
                    name="north"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="row text-caption">
                  计费容量
                </div>
                <div class="row text-h5 q-pt-sm q-pb-sm items-baseline">
                  89.53 <span class="text-subtitle1 q-ml-sm">GB</span>
                </div>
                <div class="row text-caption">
                  月同比 <span class="text-red q-ml-sm">18.21%</span>
                  <q-icon
                    class="text-red"

                    size="xs"
                    name="south"
                  />
                </div>

              </div>
            </div>
            <q-separator vertical />
          </div>
          <q-separator vertical/>
          <div class="col items-center">
            <div class="row justify-center">
              安全评分
            </div>
            <div class="row text-h4 q-mt-md justify-center">
                <span class="text-secondary">96</span> /100
            </div>
          </div>
          <q-separator vertical/>
          <div class="col q-pa-md">
            <div class="row text-caption">
              阅读产品生产量
            </div>
            <div class="row text-h5 q-pt-sm q-pb-sm items-baseline">
              2398043 <span class="text-subtitle1 q-ml-sm">套</span>
            </div>
            <div class="row text-caption">
              <q-linear-progress stripe color="warning" size="5px" :value="0.6" />
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>
    <q-card square flat bordered class="q-mt-sm">
      <q-expansion-item
        expand-icon-toggle
        expand-separator
        default-opened
        icon="list"
        label="业务数据"

      >
        <q-table
          title="Treats"
          :rows="rows"
          :columns="columns"
          row-key="name"
          binary-state-sort
          square
          flat

          class="my-sticky-table-handle"
          :pagination="initialPagination"
        >
          <template v-slot:top>
            <div class="q-gutter-md">
            <q-btn color="green" icon="add" label="新建" unelevated rounded class="l-shadow-2"/>
            <q-btn color="orange" icon="visibility" label="审核" unelevated rounded class="l-shadow-2"/>
            </div>
            <q-space/>
            <q-btn-group outline class="q-mr-md">
              <q-btn outline color="primary" label="本年" />
              <q-btn outline color="primary"  label="本月" />
              <q-btn outline color="primary"  label="本周" />
            </q-btn-group>
            <q-input dense outlined debounce="300" color="primary">
              <template v-slot:append>
                <q-icon name="search"/>
              </template>
            </q-input>
          </template>
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="name" :props="props">
                {{ props.row.name }}
                <q-popup-edit v-model="props.row.name" v-slot="scope">
                  <q-input v-model="scope.value" dense autofocus counter/>
                </q-popup-edit>
                <q-icon name="edit" color="green" class="q-ml-xs"/>
              </q-td>
              <q-td key="address" :props="props">
                <div><q-chip dense color="transparent" icon="explore"> <span class="text-primary">安徽省</span> / <span class="text-secondary">巢湖市</span></q-chip>
                </div>
                <q-chip  dense color="transparent" icon="pin_drop" class="text-grey-8"> 朝阳区安民路15号东方家园B</q-chip>

              </q-td>
              <q-td key="calories" :props="props">
                {{ props.row.calories }}
                <q-popup-edit v-model="props.row.calories" title="Update calories" buttons v-slot="scope">
                  <q-input type="number" v-model="scope.value" dense autofocus/>
                </q-popup-edit>
                <q-icon name="edit" color="green" class="q-ml-xs"/>
              </q-td>
              <q-td key="fat" :props="props">

                <q-chip dense :color="props.row.fat<15?'green':'red'" text-color="white" icon="star"
                        style="min-width: 50px">
                  {{ props.row.fat }}
                </q-chip>
              </q-td>
              <q-td key="carbs" :props="props">
                {{ props.row.carbs }}
                <q-popup-edit v-model="props.row.carbs" title="Update carbs" buttons persistent v-slot="scope">
                  <q-input type="number" v-model="scope.value" dense autofocus hint="Use buttons to close"/>
                </q-popup-edit>
                <q-icon name="edit" color="green" class="q-ml-xs"/>
              </q-td>
              <q-td key="protein" :props="props">{{ props.row.protein }}</q-td>
              <q-td key="sodium" :props="props">{{ props.row.sodium }}</q-td>
              <q-td key="calcium" :props="props">{{ props.row.calcium }}</q-td>
              <q-td key="iron" :props="props">{{ props.row.iron }}</q-td>
              <q-td :props="props" key="handle">

                <q-btn flat
                       dense
                       round
                       color="primary"
                       icon="o_edit"
                       size="md"></q-btn>
                <q-btn flat
                       dense
                       round
                       color="red"
                       icon="o_delete_forever"
                       size="md"></q-btn>
              </q-td>
            </q-tr>
          </template>

        </q-table>
      </q-expansion-item>
    </q-card>
  </div>
</template>

<script>
import {defineComponent, ref} from 'vue';

const columns = [
  {
    name: 'name',
    required: true,
    label: 'Dessert (100g serving)',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  {name: 'address', label: 'Address', field: 'address', align: 'left'},
  {name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true},


  {name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true, style: 'width: 10px'},
  {name: 'carbs', label: 'Carbs (g)', field: 'carbs'},
  {name: 'protein', label: 'Protein (g)', field: 'protein'},
  {name: 'sodium', label: 'Sodium (mg)', field: 'sodium'},
  {
    name: 'calcium',
    label: 'Calcium (%)',
    field: 'calcium',
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
  },
  {name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)},
  {name: 'handle', label: '操作', field: 'handle', required: true, align: 'center'}
]

const rows = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: '14%',
    iron: '1%'
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: '8%',
    iron: '1%'
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: '6%',
    iron: '7%'
  },
  {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: '3%',
    iron: '8%'
  },
  {
    name: 'Gingerbread',
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: '7%',
    iron: '16%'
  },
  {
    name: 'Jelly bean',
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: '0%',
    iron: '0%'
  },
  {
    name: 'Lollipop',
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: '0%',
    iron: '2%'
  },
  {
    name: 'Honeycomb',
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: '0%',
    iron: '45%'
  },
  {
    name: 'Donut',
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: '2%',
    iron: '22%'
  },
  {
    name: 'KitKat8',
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: '12%',
    iron: '6%'
  },
  {
    name: 'Cupcake7',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: '3%',
    iron: '8%'
  },
  {
    name: 'Gingerbread6',
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: '7%',
    iron: '16%'
  },
  {
    name: 'Jelly bean5',
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: '0%',
    iron: '0%'
  },
  {
    name: 'Lollipop4',
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: '0%',
    iron: '2%'
  },
  {
    name: 'Honeycomb3',
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: '0%',
    iron: '45%'
  },
  {
    name: 'Donut2',
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: '2%',
    iron: '22%'
  },
  {
    name: 'KitKat1',
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: '12%',
    iron: '6%'
  }
]

export default defineComponent({
  name: 'BusinessConfigPage',
  setup() {
    return {
      columns,
      rows: ref(rows),
      initialPagination: {
        sortBy: 'desc',
        descending: false,
        page: 1,
        rowsPerPage: 10
        // rowsNumber: xx if getting data from a server
      }
    }
  }
});
</script>

<style scoped>

</style>
