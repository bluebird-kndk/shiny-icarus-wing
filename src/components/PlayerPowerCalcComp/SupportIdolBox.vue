<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <div class="text-subtitle-1">
          <slot></slot>
        </div>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>
        <v-text-field
          color="pink accent-1"
          outlined
          label="Vo"
          v-model.number="parameters.Vo"
          type="number"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>
        <v-text-field
          color="blue accent-2"
          outlined
          label="Da"
          v-model.number="parameters.Da"
          type="number"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>
        <v-text-field
          color="yellow darken-2"
          outlined
          label="Vi"
          v-model.number="parameters.Vi"
          type="number"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class CalcPlayerPower extends Vue {
  @Prop()
  public parameters!: Record<string, number>;
}
</script>
