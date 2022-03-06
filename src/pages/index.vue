<template>
  <div class="home">
    <Calendar class="calendar-padding" />
  </div>
</template>
<script lang="ts" setup>
import Calendar from '@/components/calendar/index.vue';
</script>
<style lang="scss" scoped>
.calendar-padding {
  padding: 0 16px;
}
</style>
