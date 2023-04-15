<template>
  <q-page class="q-pa-sm full-width justify-center justify-evenly">
    <q-card square  class="ll-shadow-3">
      <q-card-section>
        <div class="row q-col-gutter-lg">
          <div class="col-3">
            <div class="row items-center">
              <div class="col">
                <div class="row">
                  <div class="col text-subtitle1">
                    Total Orders
                  </div>

                </div>
                <div class="row">
                  <div class="col text-caption text-grey-7">
                    Last year expenses
                  </div>

                </div>
              </div>
              <div class="col-auto text-h4 text-blue text-bold">1986</div>
            </div>
            <div class="row q-mt-sm">
              <q-linear-progress stripe size="8px" :value="0.78"/>
            </div>
          </div>
          <div class="col-3">
            <div class="row items-center">
              <div class="col">
                <div class="row">
                  <div class="col text-subtitle1">
                    Followers
                  </div>

                </div>
                <div class="row">
                  <div class="col text-caption text-grey-7">
                    People interested
                  </div>

                </div>
              </div>
              <div class="col-auto text-h4 text-green text-bold">25.62%</div>
            </div>
            <div class="row q-mt-sm">
              <q-linear-progress stripe size="8px" color="green" :value="0.58"/>
            </div>
          </div>
          <div class="col-3">
            <div class="row items-center">
              <div class="col">
                <div class="row">
                  <div class="col text-subtitle1">
                    Clients
                  </div>

                </div>
                <div class="row">
                  <div class="col text-caption text-grey-7">
                    Total Profit
                  </div>

                </div>
              </div>
              <div class="col-auto text-h4 text-red text-bold">$ 527</div>
            </div>
            <div class="row q-mt-sm">
              <q-linear-progress stripe size="8px" color="red" :value="0.28"/>
            </div>
          </div>
          <div class="col-3">
            <div class="row items-center">
              <div class="col">
                <div class="row">
                  <div class="col text-subtitle1">
                    Products Sold
                  </div>

                </div>
                <div class="row">
                  <div class="col text-caption text-grey-7">
                    Total revenue streams
                  </div>

                </div>
              </div>
              <div class="col-auto text-h4 text-orange text-bold">682</div>
            </div>
            <div class="row q-mt-sm">
              <q-linear-progress stripe size="8px" color="orange" :value="0.88"/>
            </div>

          </div>
        </div>
      </q-card-section>
    </q-card>
    <q-card  class="q-mt-sm ll-shadow-3">
      <div class="row">
        <div class="col-3">
          <q-markup-table :separator="separator" flat square style="border-right: 1px solid #dddddd">
            <thead>
            <tr>
              <th class="text-left">Dessert (100g serving)</th>

            </tr>
            </thead>
            <tbody>
            <tr>
              <td class="text-left">Frozen Yogurt</td>

            </tr>
            <tr>
              <td class="text-left">Ice cream sandwich</td>

            </tr>
            <tr>
              <td class="text-left">Eclair</td>

            </tr>
            <tr>
              <td class="text-left">Cupcake</td>

            </tr>
            <tr>
              <td class="text-left">Gingerbread</td>

            </tr>
            <tr>
              <td class="text-left">Ice cream sandwich</td>

            </tr>
            <tr>
              <td class="text-left">Eclair</td>

            </tr>
            <tr>
              <td class="text-left">Cupcake</td>

            </tr>
            <tr>
              <td class="text-left">Gingerbread</td>

            </tr>
            <tr>
              <td class="text-left">Ice cream sandwich</td>

            </tr>
            <tr>
              <td class="text-left">Eclair</td>

            </tr>
            <tr>
              <td class="text-left">Cupcake</td>

            </tr>
            <tr>
              <td class="text-left">Gingerbread</td>

            </tr>
            <tr>
              <td class="text-left">Gingerbread</td>

            </tr>
            </tbody>
          </q-markup-table>
        </div>
        <div class="col-8">
          <customer-relation/>
        </div>
      </div>
    </q-card>

  </q-page>
</template>

<script lang="ts" setup>

import CustomerRelation from 'components/dashboard/CustomerRelation.vue';
</script>

