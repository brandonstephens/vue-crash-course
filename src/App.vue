<template>
  <div class="px-6 space-y-4">
    <header
      class="flex justify-between items-baseline py-9 border-b border-stone-200 mb-8"
    >
      <Header title="Task Tracker" />

      <Button
        :text="showAddTask ? '✕ Close' : ' + Add Task'"
        @click="toggleAddTask()"
        :className="[showAddTask ? '!bg-stone-300' : '']"
      />
    </header>

    <AddTask @add-task="addTask" v-show="showAddTask" />

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
import AddTask from "./components/AddTask.vue";

export default {
  name: "App",
  components: {
    Header,
    Button,
    TaskList,
    AddTask,
  },
  data() {
    return {
      tasks: [],
      showAddTask: false,
    };
  },
  methods: {
    addTask(task) {
      this.tasks = [...this.tasks, task];
    },
    scheduleTask(id) {
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      );
    },
    deleteTask(id) {
      if (confirm("Are you sure you want to delete this task?")) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
      }
    },
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
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
