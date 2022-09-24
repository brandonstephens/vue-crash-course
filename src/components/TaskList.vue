<template>
  <div class="space-y-4">
    <h2 class="text-xl">{{ title }}</h2>

    <div class="space-y-1">
      <div :key="task.id" v-for="task in tasks">
        <Task
          :task="task"
          @delete-task="$emit('delete-task', task.id)"
          @schedule-task="$emit('schedule-task', task.id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Task from "./Task.vue";

export default {
  name: "Task List",
  props: {
    title: String,
    tasks: Array,
  },
  components: {
    Task,
  },
  emits: ["delete-task", "schedule-task"],
};
</script>

<style></style>
