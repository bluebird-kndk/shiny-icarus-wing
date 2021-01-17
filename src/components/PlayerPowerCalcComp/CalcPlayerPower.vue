<template>
  <v-container>
    <v-row class="text-center">
      <h2>
        打点計算
      </h2>
    </v-row>
    <v-row>
      <v-col v-for="idol in supportIdols" :key="idol.name">
        <v-sheet rounded :color="idol.color">
          <SupportIdolBox :parameters="idol.parameters">{{ idol.name }}</SupportIdolBox>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn @click="debugClick">debug button</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import SupportIdolBox from './SupportIdolBox.vue';

@Component({
  components: {
    SupportIdolBox,
  },
})
export default class CalcPlayerPower extends Vue {
  private name = 'HelloWorld';

  private supportIdols = [
    {
      name: 'Sアイドル1',
      color: 'red lighten-4',
      parameters: {
        Vo: 1,
        Da: 2,
        Vi: 3,
      },
    },
    {
      name: 'Sアイドル2',
      color: 'yellow lighten-4',
      parameters: {
        Vo: 4,
        Da: 5,
        Vi: 6,
      },
    },
    {
      name: 'Sアイドル3',
      color: 'green lighten-4',
      parameters: {
        Vo: 7,
        Da: 8,
        Vi: 9,
      },
    },
    {
      name: 'Sアイドル4',
      color: 'blue lighten-4',
      parameters: {
        Vo: 1,
        Da: 2,
        Vi: 3,
      },
    },
    {
      name: 'Sアイドル5',
      color: 'purple lighten-4',
      parameters: {
        Vo: 1,
        Da: 2,
        Vi: 3,
      },
    },
  ];

  public debugClick() {
    console.log(this.supportIdols);
  }
}
</script>
