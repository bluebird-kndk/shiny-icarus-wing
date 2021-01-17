<template>
  <v-container>
    <v-row>
      <v-col>
        <h3>
          アイドルパラメータ
        </h3>
        <v-row>
          <v-col>
            <IdolParameterRow
              v-bind:produceIdol.sync="produceIdol"
              v-bind:supportIdols.sync="supportIdols"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <h3>
          各種係数
        </h3>
        <AppealBuffSetting />
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
import IdolParameterBox from './IdolParameterBox.vue';
import IdolParameterRow from './IdolParameterRow.vue';
import AppealBuffSetting from './AppealBuffSetting.vue';

@Component({
  components: {
    IdolParameterBox,
    IdolParameterRow,
    AppealBuffSetting,
  },
})
export default class CalcPlayerPower extends Vue {
  private name = 'HelloWorld';

  private produceIdol = {
    name: 'Pアイドル',
    color: 'red lighten-4',
    parameters: {
      Vo: 283,
      Da: 283,
      Vi: 283,
    },
  };

  private supportIdols = [
    {
      name: 'Sアイドル1',
      color: 'yellow lighten-4',
      parameters: {
        Vo: 283,
        Da: 283,
        Vi: 283,
      },
    },
    {
      name: 'Sアイドル2',
      color: 'green lighten-4',
      parameters: {
        Vo: 283,
        Da: 283,
        Vi: 283,
      },
    },
    {
      name: 'Sアイドル3',
      color: 'blue lighten-4',
      parameters: {
        Vo: 283,
        Da: 283,
        Vi: 283,
      },
    },
    {
      name: 'Sアイドル4',
      color: 'purple lighten-4',
      parameters: {
        Vo: 283,
        Da: 283,
        Vi: 283,
      },
    },
  ];

  public debugClick() {
    console.log(this.supportIdols);
  }
}
</script>
