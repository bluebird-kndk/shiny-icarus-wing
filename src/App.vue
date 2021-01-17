<template>
  <v-app>
    <v-main>
      <div class="text-title">
        シャイニー打点計算機
      </div>
      <CalcPlayerPower />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import CalcPlayerPower from './components/PlayerPowerCalcComp/CalcPlayerPower.vue';

export default Vue.extend({
  name: 'App',

  components: {
    CalcPlayerPower,
  },

  data: () => ({
    //
  }),
});
</script>

<style>
.Vo {
  color: Vo;
}
.Da {
  color: Da;
}
.Vi {
  color: Vi;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
