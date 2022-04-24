<template>
  <v-dialog v-model="dialog" width="330">
    <template v-slot:activator="{ on, attrs }">
      <v-text-field v-model="date">
        <v-icon slot="prepend" v-bind="attrs" v-on="on"> mdi-calendar </v-icon>
        <v-icon slot="append" @click="change('')"> mdi-close </v-icon>
      </v-text-field>
    </template>

    <v-card>
      <v-card-text>
        <v-date-picker
          v-model="tmpDate"
          :show-current="true"
          full-width
          @change="changeTmpDate"
        >
        </v-date-picker>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="dialog = false"> Cancel </v-btn>
        <v-btn color="primary" text @click="change(tmpDate)"> OK </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "DatePicker",

  data: () => ({
    date: "",
    tmpDate: "",
    dialog: false,
  }),
  methods: {
    cancel(): void {
      this.tmpDate = this.date;
      this.dialog = false;
    },
    change(newDate: string): void {
      this.date = newDate;
      this.$emit("change", this.date);
      this.tmpDate = this.date;
      this.dialog = false;
    },
    changeTmpDate(value: string): void {
      this.tmpDate = value;
    },
  },
});
</script>
