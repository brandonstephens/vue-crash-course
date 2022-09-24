<template>
  <div class="task">
    <h3 class="font-medium">{{ task.text }}</h3>

    <div class="flex space-x-4">
      <Button
        :className="[task.reminder ? '!bg-amber-100' : '']"
        @click="scheduleTask(task.id)"
        text="⏱"
      />
      <Button @click="deleteTask(task.id)" text="🗑" />
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";

export default {
  name: "Task",
  props: {
    task: Object,
  },
  components: {
    Button,
  },
  methods: {
    deleteTask(id) {
      this.$emit("delete-task", id);
    },
    scheduleTask(id) {
      this.$emit("schedule-task", id);
    },
  },
};
</script>

<style>
.task {
  @apply flex justify-between items-baseline;
  @apply bg-white;
  @apply border border-stone-100;
  @apply shadow-sm;
  @apply p-4;
  @apply rounded;
}
</style>
