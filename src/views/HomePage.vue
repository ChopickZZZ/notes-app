<template>
  <h1 class="text-white center" v-if="!tasks?.length">Задач пока нет</h1>
  <template v-else>
    <h3 class="text-white">Всего активных задач: {{ activeTasks.length }}</h3>
    <div class="card" v-for="task in tasks" :key="task.id">
      <h2 class="card-title">
        {{ task.title }}
        <AppStatus :status="task.status" />
      </h2>
      <p>
        <strong>
          <small>
            {{ task.date }}
          </small>
        </strong>
      </p>
      <button
        @click="$router.push({ name: 'task', params: { id: task.id } })"
        class="btn primary"
      >
        Посмотреть
      </button>
    </div>
  </template>
</template>

<script>
import AppStatus from "../components/AppStatus.vue";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  async setup() {
    const store = useStore();
    const tasks = computed(() => store.getters.tasks);
    const activeTasks = computed(() => store.getters.activeTasks);

    return { tasks, activeTasks };
  },
  components: { AppStatus },
};
</script>
