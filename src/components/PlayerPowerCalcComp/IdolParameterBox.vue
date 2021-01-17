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
          color="Vo"
          outlined
          dense
          label="Vo"
          v-model.number="parameters.Vo"
          type="number"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>
        <v-text-field
          color="Da"
          outlined
          dense
          label="Da"
          v-model.number="parameters.Da"
          type="number"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>
        <v-text-field
          color="Vi"
          outlined
          dense
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
export default class IdolParameterBox extends Vue {
  @Prop()
  public parameters!: Record<string, number>;
}
</script>
