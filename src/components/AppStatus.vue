<template>
  <span
    class="badge"
    :class="{
      primary: status === 'active' || status === 'done',
      danger: status === 'cancelled',
      warning: status === 'pending',
    }"
    >{{ status === "pending" ? "in progress" : status }}</span
  >
</template>

<script>
export default {
  props: {
    status: {
      type: String,
      required: true,
    },
  },
};
</script>