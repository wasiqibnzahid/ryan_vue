<script lang="ts" setup>
defineProps<{
  open: boolean;
}>();
const emit = defineEmits<{
  close: [];
}>();
</script>

<template>
  <div v-if="open" class="modal-container">
    <div @click="emit('close')" class="modal-overlay"></div>
    <div class="modal-content card px-2 py-2">
      <div>
        <slot name="header"></slot>
      </div>
      <div>
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>
