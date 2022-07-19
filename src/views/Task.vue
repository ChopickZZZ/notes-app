<template>
  <div class="card" v-if="task">
    <h2>{{ task.title }}</h2>
    <p>
      <strong>Статус</strong>:
      <AppStatus :status="task.status" />
    </p>
    <p><strong>Дэдлайн</strong>: {{ task.date }}</p>
    <p><strong>Описание</strong>: {{ task.description }}</p>
    <div>
      <button class="btn" data-status="pending" @click="statusHandler($event)">
        Взять в работу
      </button>
      <button
        class="btn primary"
        data-status="done"
        @click="statusHandler($event)"
      >
        Завершить
      </button>
      <button
        class="btn danger"
        data-status="cancelled"
        @click="statusHandler($event)"
      >
        Отменить
      </button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{ $route.params.id }}</strong> нет.
  </h3>
</template>

<script>
import AppStatus from "../components/AppStatus.vue";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const task = computed(() => store.getters.task(props.id));

    const statusHandler = (event) => {
      store.dispatch("changeStatus", {
        id: props.id,
        status: event.target.dataset.status,
      });
    };

    return { task, statusHandler };
  },
  components: { AppStatus },
};
</script>

<style scoped>
</style>