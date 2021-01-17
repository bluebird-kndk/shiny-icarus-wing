<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card rounded outlined>
          <v-container>
            <v-row>
              <v-col>
                <div class="text-subtitle-1">
                  アピール性能
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-radio-group col v-model="appealIdol">
                  <template v-slot:label>
                    <div>アピールアイドル</div>
                  </template>
                  <v-radio label="Pアイドル" value="PIdol" />
                  <v-radio label="Sアイドル" value="SIdol" />
                  <v-select label="アピール担当アイドル番号" v-show="isAppealSupport" />
                </v-radio-group>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-radio-group col>
                  <template v-slot:label>
                    <div>アピール属性・達成度・倍率</div>
                  </template>
                  <v-select label="アピール属性" dense single-line></v-select>
                  <v-select label="アピール達成度" dense single-line></v-select>
                  <v-text-field dense outlined label="倍率" type="number"></v-text-field>
                </v-radio-group>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>

      <v-col>
        <v-card rounded outlined>
          <v-container>
            <v-row>
              <v-col>
                <div class="text-subtitle-1">
                  バフ関係値
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  color="Vo"
                  outlined
                  dense
                  label="パッシブバフ（合計値）%"
                  type="number"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  color="Vo"
                  outlined
                  dense
                  label="アクティブバフ（合計値）%"
                  type="number"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  color="Vo"
                  outlined
                  dense
                  label="興味UP（合計値）%"
                  type="number"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  color="Da"
                  outlined
                  dense
                  label="興味Down（合計値）%"
                  type="number"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import IdolParameterBox from './IdolParameterBox.vue';

@Component({
  components: {
    IdolParameterBox,
  },
})
export default class AppealBuffSetting extends Vue {
  @Prop()
  public produceIdol!: Record<string, unknown>;

  @Prop()
  public supportIdols!: Record<string, unknown>;

  public appealIdol = '';
  public isAppealSupport = false;

  @Watch('appealIdol')
  public appealIdolChanged() {
    console.log(this.isAppealSupport);
    console.log(this.appealIdol);
    if (this.appealIdol === 'SIdol') {
      this.isAppealSupport = true;
    } else {
      this.isAppealSupport = false;
    }
  }
}
</script>
