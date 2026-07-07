<template>
  <article class="category-card">
    <div class="icon">{{ icon }}</div>

    <h2>{{ title }}</h2>

    <p>{{ description }}</p>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  description: string
}>()
</script>

<style scoped>
.category-card {
  position: relative;
  overflow: hidden;
  padding: 34px 24px;
  border: 1px solid rgba(31, 45, 61, 0.08);
  border-radius: 24px;
  background: #ffffff;
  text-align: center;
  box-shadow: 0 18px 40px rgba(31, 45, 61, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.category-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 6px;
  width: 100%;
  background: #42b883;
}

.category-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 24px 50px rgba(31, 45, 61, 0.14);
}

.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 76px;
  height: 76px;
  margin-bottom: 20px;
  border-radius: 50%;
  background: rgba(245, 185, 66, 0.18);
  font-size: 40px;
}

.category-card h2 {
  margin: 0 0 12px;
  font-size: 24px;
  color: #1f2d3d;
}

.category-card p {
  margin: 0;
  font-size: 15px;
  line-height: 1.5;
  color: rgba(31, 45, 61, 0.68);
}
</style>