<template>
  <button @click="onClick">Reset</button>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ResetButton extends Vue {
  private initialValue!: string;

  /** モデルバインドのために記述必須 */
  @Prop()
  public value!: string;

  /** モデルバインドのために記述必須 */
  @Emit()
  public input(value: string) {
    console.log('resetbutton');
  }

  @Emit()
  public click() {
    console.log('resetbuttonclick');
  }

  public created() {
    this.initialValue = this.value;
  }

  public onClick() {
    this.input(this.initialValue);
    this.click();
  }
}
</script>
