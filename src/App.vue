<template>
  <div class="px-6 space-y-4">
    <header
      class="flex justify-between items-baseline py-9 border-b border-stone-200 mb-8"
    >
      <Header title="Task Tracker" />

      <Button
        :text="showAddTask ? '✕ Close' : ' + Add Task'"
        @click="toggleAddTask()"
        :className="showAddTask ? '!bg-stone-300' : ''"
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
    async addTask(task) {
      const response = await fetch("http://127.0.0.1:5000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      }).catch((error) => console.error(error));

      const newTask = await response.json();

      this.tasks = [...this.tasks, newTask];
    },
    async scheduleTask(id) {
      const task = await this.fetchTask(id).catch((error) =>
        console.error(error)
      );
      const updatedTask = { ...task, reminder: !task.reminder };

      const response = await fetch(`http://127.0.0.1:5000/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updatedTask),
      });

      const data = await response.json();

      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      );
    },
    async deleteTask(id) {
      if (confirm("Are you sure you want to delete this task?")) {
        const response = await fetch(`http://127.0.0.1:5000/tasks/${id}`, {
          method: "DELETE",
        }).catch((error) => console.error(error));

        response.status === 200
          ? (this.tasks = this.tasks.filter((task) => task.id !== id))
          : alert("Sorry something went wrong during the delete");
      }
    },
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
    async fetchTasks() {
      const response = await fetch(`http://127.0.0.1:5000/tasks`).catch(
        (error) => {
          console.error(error);
        }
      );
      const tasks = await response.json().catch((error) => {
        console.error(error);
      });
      return tasks;
    },
    async fetchTask(id) {
      const response = await fetch(`http://127.0.0.1:5000/tasks/${id}`).catch(
        (error) => {
          console.error(error);
        }
      );
      const task = await response.json().catch((error) => {
        console.error(error);
      });
      return task;
    },
  },
  async created() {
    this.tasks = await this.fetchTasks().catch((error) => console.error(error));
  },
};
</script>

<style scoped></style>
