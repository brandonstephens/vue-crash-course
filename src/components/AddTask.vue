<template>
  <form class="pb-8" @submit="submitForm">
    <div class="form-control">
      <label for="text">Task</label>
      <input
        id="text"
        type="text"
        name="text"
        placeholder="Task"
        class="form-input"
        v-model="text"
      />
    </div>

    <div class="form-control">
      <label for="day">Day & Time</label>
      <input
        id="day"
        type="text"
        name="day"
        placeholder="Day & time"
        class="form-input"
        v-model="day"
      />
    </div>

    <div class="form-control">
      <label for="reminder">
        <input
          id="reminder"
          type="checkbox"
          name="reminder"
          v-model="reminder"
        />
        Set Reminder</label
      >
    </div>

    <Button :click="submitForm" text="Save Task" />
  </form>
</template>

<script>
import Button from "./Button.vue";
export default {
  name: "Add Task",
  components: { Button },
  data() {
    return {
      text: "",
      day: "",
      reminder: false,
    };
  },
  methods: {
    submitForm(e) {
      e.preventDefault();

      if (!this.text) {
        alert("Please add a task!");
        return;
      }

      const newTask = {
        id: Math.floor(Math.random() * 100000),
        text: this.text,
        day: this.day,
        reminder: this.reminder,
      };

      this.text = "";
      this.day = "";
      this.reminder = false;

      this.$emit("add-task", newTask);
    },
  },
};
</script>

<style scoped>
.form-control {
  @apply space-y-2;
  @apply mb-4;
}
.form-control input[type="checkbox"] {
  @apply rounded;
  @apply border-stone-300;
  @apply text-amber-500;
  @apply shadow-sm;
  @apply focus:border-amber-300;
  @apply focus:ring;
  @apply focus:ring-offset-0;
  @apply focus:ring-amber-200 focus:ring-opacity-50;
}
.form-control input[type="text"] {
  @apply block;
  @apply w-full;
  @apply rounded-md;
  @apply border-stone-300;
  @apply shadow-sm;
  @apply focus:border-amber-300;
  @apply focus:ring;
  @apply focus:ring-amber-200;
  @apply focus:ring-opacity-50;
}
</style>
