<template>
  <form class="card" @submit.prevent="save">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input v-model="task.title" type="text" id="title" />
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input v-model="task.date" type="date" id="date" />
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea v-model="task.description" id="description"></textarea>
    </div>

    <button :disabled="!isFormCompleted" class="btn primary">Создать</button>
  </form>
</template>

<script>
import { reactive, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const task = reactive({
      title: "",
      date: "",
      description: "",
    });

    const save = () => {
      store.dispatch("createNewTask", task);
      task.title = task.date = task.description = "";
      router.push({ name: "home" });
    };

    const isFormCompleted = computed(() =>
      Object.values(task).every((el) => el !== "")
    );

    return {
      task,
      save,
      isFormCompleted,
    };
  },
};
</script>