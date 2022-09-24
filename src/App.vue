<template>
  <div class="px-6 space-y-4">
    <header
      class="flex justify-between items-baseline py-9 border-b border-stone-200 mb-8"
    >
      <Header title="Task Tracker" />
      <Button text="+ Add Task" />
    </header>

    <TaskList
      title="My tasks"
      :tasks="tasks"
      @delete-task="deleteTask"
      @schedule-task="scheduleTask"
    />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Button from "./components/Button.vue";
import TaskList from "./components/TaskList.vue";

export default {
  name: "App",
  components: {
    Header,
    Button,
    TaskList,
  },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    deleteTask(id) {
      if (confirm("Are you sure you want to delete this task?")) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
      }
    },
    scheduleTask(id) {
      this.tasks = [
        ...this.tasks.map((task) => {
          if (task.id == id) {
            return { ...task, reminder: !task.reminder };
          } else {
            return task;
          }
        }),
      ];
    },
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: "Doctors Appointment",
        day: "March 1st at 2:30pm",
        reminder: true,
      },
      {
        id: 2,
        text: "Meeting at School",
        day: "March 3rd at 1:30pm",
        reminder: true,
      },
      {
        id: 3,
        text: "Food Shopping",
        day: "March 3rd at 11:00am",
        reminder: false,
      },
    ];
  },
};
</script>

<style scoped></style>
