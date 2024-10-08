<script lang="ts" setup>
import Table from "./common/table/Table.vue";
import data from "../data/data.json";
import { Column } from "./common/table/table.types";
import Modal from "./common/modal/Modal.vue";
import { ref } from "vue";
import Button from "./common/button/Button.vue";
const columns: Column<(typeof data)[0]>[] = [
  {
    accessor: "id",
    name: "ID",
  },
  {
    accessor: "status",
    name: "Status",
  },
  {
    accessor: "quantity",
    name: "Quantity",
  },
  {
    accessor: "product",
    name: "Product Name",
  },
  {
    accessor: "total",
    name: "Prices",
  },
];
const isModalOpen = ref(false);
</script>
<template>
  <Table :columns="columns" :data="data">
    <template #product-td="{ value }">
      <div>a {{ value }}</div>
    </template>
  </Table>
  <button @click="isModalOpen = true">SHOW MODAL</button>
  <Modal :open="isModalOpen" @close="isModalOpen = false">
    <template #header> Header </template>
    <template #content>Contenta sadsa d </template>
  </Modal>
  <Button>asd</Button>
</template>
