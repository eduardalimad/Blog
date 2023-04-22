<template>
  <div class="pagination">
    <button
      class="btn-previous"
      @click="previousPage"
      :disabled="currentPage === 1"
    >
      Anterior
    </button>
    <span> Página {{ currentPage }} de {{ totalPages }} </span>
    <button
      class="btn-next"
      @click="nextPage"
      :disabled="currentPage === totalPages"
    >
      Próxima
    </button>
  </div>
</template>
  
  <script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
  methods: {
    previousPage() {
      this.$emit("update:currentPage", this.currentPage - 1);
    },
    nextPage() {
      this.$emit("update:currentPage", this.currentPage + 1);
    },
  },
};
</script>
  <style scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  gap: 0.5rem;
}
button {
  background: linear-gradient(88.27deg, #574ae8 0%, #3ea1db 100%);
  color: white;
  border: none;
  border-radius: 0.5rem;
  height: 1.5rem;
  width: 6rem;
}
</style>