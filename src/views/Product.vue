<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

type Product = {
  id: number
  name: string
  category: 'pdf courses' | 'online videos' | 'they talk about us'
  emoji: string
  oldPrice: number
  salePrice: number
  isOnSale: boolean
  description: string
  details: string
}

const route = useRoute()

const products: Product[] = [
  {
    id: 1,
    name: 'Vue Router Quick Start PDF',
    category: 'pdf courses',
    emoji: '📄',
    oldPrice: 39,
    salePrice: 19,
    isOnSale: true,
    description: 'A practical PDF course to understand Vue Router fast.',
    details:
      'This PDF course helps you understand Vue Router step by step. You will learn how to create routes, connect pages, use router-link, display views with router-view, and work with dynamic route parameters.'
  },
  {
    id: 2,
    name: 'Vue Components Essentials PDF',
    category: 'pdf courses',
    emoji: '📄',
    oldPrice: 45,
    salePrice: 24,
    isOnSale: true,
    description: 'A clear PDF guide to master Vue components.',
    details:
      'Learn how Vue components work, how to organize your interface, pass props, reuse UI blocks, and build cleaner frontend applications with simple examples.'
  },
  {
    id: 3,
    name: 'TypeScript for Vue PDF',
    category: 'pdf courses',
    emoji: '📄',
    oldPrice: 49,
    salePrice: 29,
    isOnSale: true,
    description: 'A focused PDF course to use TypeScript with Vue.',
    details:
      'This course explains how to type your Vue code, define product types, avoid implicit any errors, and write safer components using script setup with TypeScript.'
  },
  {
    id: 4,
    name: 'Vue Router Video Course',
    category: 'online videos',
    emoji: '🎥',
    oldPrice: 89,
    salePrice: 49,
    isOnSale: true,
    description: 'Short videos to learn Vue Router quickly.',
    details:
      'Follow a practical video course where you build navigation between pages, configure createRouter, use createWebHistory, and understand how a SPA works with Vue Router.'
  },
  {
    id: 5,
    name: 'Build a Vue App Step by Step',
    category: 'online videos',
    emoji: '🎥',
    oldPrice: 119,
    salePrice: 69,
    isOnSale: true,
    description: 'Build a real Vue app from start to finish.',
    details:
      'This course guides you through the creation of a complete Vue application. You will build pages, components, product cards, detail pages, and navigation with Vue Router.'
  },
  {
    id: 6,
    name: 'JavaScript Modern Features',
    category: 'online videos',
    emoji: '🎥',
    oldPrice: 79,
    salePrice: 39,
    isOnSale: true,
    description: 'Learn modern JavaScript used in Vue projects.',
    details:
      'Improve your JavaScript skills with modern features like arrays, objects, modules, arrow functions, template literals, and useful methods such as filter, find, and map.'
  },
  {
    id: 7,
    name: 'Frontend Bootcamp Pack',
    category: 'pdf courses',
    emoji: '📚',
    oldPrice: 129,
    salePrice: 79,
    isOnSale: true,
    description: 'A complete PDF pack for frontend learners.',
    details:
      'This bootcamp pack brings together essential frontend topics: HTML, CSS, JavaScript, Vue, components, routing, and project structure. Perfect to keep as a learning reference.'
  },
  {
    id: 8,
    name: 'Developer Workflow Videos',
    category: 'online videos',
    emoji: '🎬',
    oldPrice: 99,
    salePrice: 59,
    isOnSale: true,
    description: 'Improve your workflow as a frontend developer.',
    details:
      'Learn how to work faster with VS Code, terminal commands, project folders, Git commits, clean code habits, and a better daily developer workflow.'
  },
  {
    id: 9,
    name: 'Students Success Stories',
    category: 'they talk about us',
    emoji: '💬',
    oldPrice: 29,
    salePrice: 9,
    isOnSale: true,
    description: 'Real stories from learners who improved their tech skills.',
    details:
      'Discover how students used our courses to understand Vue, build real projects, and become more confident with frontend development.'
  },
  {
    id: 10,
    name: 'Tech Masters Testimonials',
    category: 'they talk about us',
    emoji: '⭐',
    oldPrice: 35,
    salePrice: 15,
    isOnSale: true,
    description: 'Testimonials from learners becoming tech masters.',
    details:
      'Read feedback from learners who started with simple courses and progressively became more comfortable with Vue, JavaScript, and modern frontend tools.'
  },
  {
    id: 11,
    name: 'Vue Composition API PDF',
    category: 'pdf courses',
    emoji: '📄',
    oldPrice: 59,
    salePrice: 34,
    isOnSale: true,
    description: 'A practical PDF guide to the Vue Composition API.',
    details:
      'Learn how to use script setup, refs, computed properties, reusable logic, and clean component structure with the Vue Composition API.'
  },
  {
    id: 12,
    name: 'Fast Track Vue Videos',
    category: 'online videos',
    emoji: '🚀',
    oldPrice: 109,
    salePrice: 64,
    isOnSale: true,
    description: 'Fast video lessons to become productive with Vue.',
    details:
      'This fast-track course focuses on the most useful Vue concepts so you can quickly understand components, pages, routing, and data rendering.'
  }
]

const productId = computed(() => {
  const id = route.params.id

  return Number(Array.isArray(id) ? id[0] : id)
})

const product = computed(() => {
  return products.find((item) => item.id === productId.value)
})
</script>

<template>
  <main class="product-page">
    <section v-if="product" class="product-wrapper">
      <router-link to="/products" class="back-link">
        ← Back to courses
      </router-link>

      <article class="product-card">
        <div class="product-image">
          {{ product.emoji }}
        </div>

        <div class="product-info">
          <span class="category">
            {{ product.category }}
          </span>

          <h1>{{ product.name }}</h1>

          <p class="short-description">
            {{ product.description }}
          </p>

          <div class="prices">
            <span class="old-price">
              {{ product.oldPrice }}€
            </span>

            <span class="sale-price">
              {{ product.salePrice }}€
            </span>
          </div>
        </div>
      </article>

      <section class="description-card">
        <h2>Course description</h2>

        <p>
          {{ product.details }}
        </p>
      </section>
    </section>

    <section v-else class="not-found">
      <h1>Product not found</h1>

      <p>
        The course you are looking for does not exist.
      </p>

      <router-link to="/products" class="back-link">
        Back to courses
      </router-link>
    </section>
  </main>
</template>

<style scoped>
.product-page {
  min-height: 100vh;
  padding: 64px 24px;
  background: linear-gradient(135deg, #fff7e6, #ffe4ec);
  color: #1f2d3d;
  font-family: Arial, sans-serif;
}

.product-wrapper,
.not-found {
  max-width: 900px;
  margin: 0 auto;
}

.back-link {
  display: inline-block;
  margin-bottom: 24px;
  color: #1f2d3d;
  font-size: 15px;
  font-weight: 800;
  text-decoration: none;
}

.back-link:hover {
  color: #42b883;
}

.product-card {
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 32px;
  align-items: center;
  padding: 32px;
  border-radius: 28px;
  background: #ffffff;
  box-shadow: 0 24px 60px rgba(31, 45, 61, 0.14);
}

.product-card::before {
  content: "SALE";
  position: absolute;
  top: 18px;
  right: 18px;
  padding: 7px 12px;
  border-radius: 999px;
  background: #f5b942;
  color: #1f2d3d;
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 1px;
}

.product-card::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 6px;
  width: 100%;
  background: #42b883;
}

.product-image {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 240px;
  border-radius: 24px;
  background: rgba(245, 185, 66, 0.18);
  font-size: 96px;
}

.product-info {
  min-width: 0;
}

.category {
  display: inline-block;
  margin-bottom: 14px;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(66, 184, 131, 0.12);
  color: #42b883;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.product-info h1 {
  margin: 0;
  font-size: clamp(32px, 5vw, 52px);
  line-height: 1;
  color: #1f2d3d;
}

.short-description {
  margin: 18px 0 22px;
  color: rgba(31, 45, 61, 0.72);
  font-size: 17px;
  line-height: 1.6;
}

.prices {
  display: flex;
  align-items: center;
  gap: 12px;
}

.old-price {
  color: rgba(31, 45, 61, 0.42);
  font-size: 20px;
  text-decoration: line-through;
}

.sale-price {
  color: #1f2d3d;
  font-size: 36px;
  font-weight: 900;
}

.description-card {
  margin-top: 24px;
  padding: 28px 32px;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 0 18px 40px rgba(31, 45, 61, 0.1);
}

.description-card h2 {
  margin: 0 0 12px;
  color: #1f2d3d;
  font-size: 24px;
}

.description-card p {
  margin: 0;
  color: rgba(31, 45, 61, 0.72);
  font-size: 17px;
  line-height: 1.7;
}

.not-found {
  padding: 48px;
  border-radius: 28px;
  background: #ffffff;
  text-align: center;
  box-shadow: 0 24px 60px rgba(31, 45, 61, 0.12);
}

.not-found h1 {
  margin: 0 0 16px;
  font-size: 42px;
}

.not-found p {
  margin: 0 0 24px;
  color: rgba(31, 45, 61, 0.7);
}

@media (max-width: 720px) {
  .product-page {
    padding: 48px 18px;
  }

  .product-card {
    grid-template-columns: 1fr;
    padding: 24px;
  }

  .product-image {
    min-height: 200px;
    font-size: 80px;
  }

  .description-card {
    padding: 24px;
  }
}
</style>