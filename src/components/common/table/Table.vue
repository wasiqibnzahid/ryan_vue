<script setup lang="ts" generic="T extends Record<string, any>">
import { defineProps } from "vue";
import { Column } from "./table.types";

defineProps<{
  columns: Column<T>[];
  data: T[];
}>();
const emit = defineEmits<{
  headerClick: [column: Column<T>, index: number];
  cellClick: [cell: T, accessor: keyof T, index: number];
}>();

function headerClicked(column: Column<T>, index: number) {
  emit("headerClick", column, index);
}
function cellClicked(cell: T, accessor: keyof T, index: number) {
  emit("cellClick", cell, accessor, index);
}
</script>
<template>
  <table>
    <thead>
      <template v-if="$slots.header">
        <slot name="header"></slot>
      </template>
      <template v-else>
        <tr>
          <template v-for="(column, index) in columns" :key="index">
            <th @click="headerClicked(column, index)">
              <slot
                :name="`${column.accessor.toString()}-th`"
                :column="column"
                >{{ column.name }}</slot
              >
            </th>
          </template>
        </tr>
      </template>
    </thead>

    <tbody>
      <template v-for="(row, rowIndex) in data" :key="rowIndex">
        <tr>
          <template v-for="(column, colIndex) in columns" :key="colIndex">
            <td @click="cellClicked(row, column.accessor, colIndex)">
              <slot
                :name="`${column.accessor.toString()}-td`"
                :column="column"
                :row="row"
                :value="row[column.accessor]"
                >{{ row[column.accessor] }}</slot
              >
            </td>
          </template>
        </tr>
      </template>
    </tbody>

    <tfoot v-if="$slots.footer">
      <slot name="footer"></slot>
    </tfoot>
  </table>
</template>
