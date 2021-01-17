<template>
  <button class="button" @click="onClick">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MyButton extends Vue {
  @Prop()
  public message?: string;

  @Prop()
  public count!: number;

  @Emit()
  public click(count: number) {
    console.log('emit_click');
  }

  public onClick() {
    this.click(this.count + 1);
    alert(this.message);
  }
}
</script>
