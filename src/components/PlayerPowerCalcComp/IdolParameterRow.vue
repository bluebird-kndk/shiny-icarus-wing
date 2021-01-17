<template>
  <v-container>
    <v-row>
      <v-col>
        <v-sheet rounded :color="produceIdol.color">
          <IdolParameterBox v-bind:parameters.sync="produceIdol.parameters">{{
            produceIdol.name
          }}</IdolParameterBox>
        </v-sheet>
      </v-col>
      <v-col v-for="idol in supportIdols" :key="idol.name">
        <v-sheet rounded :color="idol.color">
          <IdolParameterBox v-bind:parameters.sync="idol.parameters">{{
            idol.name
          }}</IdolParameterBox>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import IdolParameterBox from './IdolParameterBox.vue';

@Component({
  components: {
    IdolParameterBox,
  },
})
export default class IdolParameterRow extends Vue {
  @Prop()
  public produceIdol!: Record<string, unknown>;

  @Prop()
  public supportIdols!: Record<string, unknown>;
}
</script>
