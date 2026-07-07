<script setup lang="ts">
import { computed } from 'vue'

type Product = {
  id: number
  name: string
  category: 'pdf courses' | 'online videos' | 'they talk about us'
  emoji: string
  oldPrice: number
  salePrice: number
  isOnSale: boolean
}

const products: Product[] = [
  {
    id: 1,
    name: 'Vue Router Quick Start PDF',
    category: 'pdf courses',
    emoji: '📄',
    oldPrice: 39,
    salePrice: 19,
    isOnSale: true
  },
  {
    id: 2,
    name: 'Vue Components Essentials PDF',
    category: 'pdf courses',
    emoji: '📄',
    oldPrice: 45,
    salePrice: 24,
    isOnSale: true
  },
  {
    id: 3,
    name: 'TypeScript for Vue PDF',
    category: 'pdf courses',
    emoji: '📄',
    oldPrice: 49,
    salePrice: 29,
    isOnSale: true
  },
  {
    id: 4,
    name: 'Vue Router Video Course',
    category: 'online videos',
    emoji: '🎥',
    oldPrice: 89,
    salePrice: 49,
    isOnSale: true
  },
  {
    id: 5,
    name: 'Build a Vue App Step by Step',
    category: 'online videos',
    emoji: '🎥',
    oldPrice: 119,
    salePrice: 69,
    isOnSale: true
  },
  {
    id: 6,
    name: 'JavaScript Modern Features',
    category: 'online videos',
    emoji: '🎥',
    oldPrice: 79,
    salePrice: 39,
    isOnSale: true
  },
  {
    id: 7,
    name: 'Frontend Bootcamp Pack',
    category: 'pdf courses',
    emoji: '📚',
    oldPrice: 129,
    salePrice: 79,
    isOnSale: true
  },
  {
    id: 8,
    name: 'Developer Workflow Videos',
    category: 'online videos',
    emoji: '🎬',
    oldPrice: 99,
    salePrice: 59,
    isOnSale: true
  },
  {
    id: 9,
    name: 'Students Success Stories',
    category: 'they talk about us',
    emoji: '💬',
    oldPrice: 29,
    salePrice: 9,
    isOnSale: true
  },
  {
    id: 10,
    name: 'Tech Masters Testimonials',
    category: 'they talk about us',
    emoji: '⭐',
    oldPrice: 35,
    salePrice: 15,
    isOnSale: true
  },
  {
    id: 11,
    name: 'Vue Composition API PDF',
    category: 'pdf courses',
    emoji: '📄',
    oldPrice: 59,
    salePrice: 34,
    isOnSale: true
  },
  {
    id: 12,
    name: 'Fast Track Vue Videos',
    category: 'online videos',
    emoji: '🚀',
    oldPrice: 109,
    salePrice: 64,
    isOnSale: true
  }
]

const salesProducts = computed(() => {
  return products
    .filter((product) => product.isOnSale)
    .slice(0, 20)
})
</script>

<template>
  <main class="products-page">
    <section class="products-hero">
      <p class="eyebrow">Summer Tech Sales 2026</p>

      <h1>Sales Courses</h1>

      <p class="hero-text">
        Discover fast and practical tech courses organized by features.
        Learn with PDF courses, online videos, and real learner stories.
      </p>
    </section>

    <section class="products-info">
        Learn with PDF courses, online videos, and real learner stories.
    </section>

    <section class="products-grid">
      <article
        v-for="product in salesProducts"
        :key="product.id"
        class="product-card"
      >
        <div class="product-emoji">
          {{ product.emoji }}
        </div>

        <div class="product-content">
          <span class="category">
            {{ product.category }}
          </span>

          <h2>{{ product.name }}</h2>

          <div class="prices">
            <span class="old-price">
              {{ product.oldPrice }}€
            </span>

            <span class="sale-price">
              {{ product.salePrice }}€
            </span>
          </div>
        </div>

        <router-link
          :to="`/products/${product.id}`"
          class="details-link"
        >
          View details
        </router-link>
      </article>
    </section>
  </main>
</template>

<style scoped>
.products-page {
  min-height: 100vh;
  padding: 64px 24px;
  background: linear-gradient(135deg, #fff7e6, #ffe4ec);
  color: #1f2d3d;
  font-family: Arial, sans-serif;
}

.products-hero {
  max-width: 900px;
  margin: 0 auto 48px;
  text-align: center;
}

.eyebrow {
  display: inline-block;
  margin-bottom: 18px;
  padding: 8px 16px;
  border-radius: 999px;
  background: rgba(66, 184, 131, 0.12);
  color: #42b883;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.products-hero h1 {
  margin: 0;
  font-size: clamp(48px, 8vw, 88px);
  line-height: 0.95;
  color: #1f2d3d;
}

.hero-text {
  max-width: 700px;
  margin: 24px auto 0;
  font-size: 18px;
  line-height: 1.6;
  color: rgba(31, 45, 61, 0.75);
}

.products-info {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  max-width: 1120px;
  margin: 0 auto 24px;
  padding: 16px 20px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 12px 28px rgba(31, 45, 61, 0.08);
}

.products-info p,
.products-info span {
  margin: 0;
  font-size: 14px;
  color: rgba(31, 45, 61, 0.72);
}

.products-info p {
  font-weight: 800;
  color: #1f2d3d;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
  max-width: 1120px;
  margin: 0 auto;
}

.product-card {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 0 18px 40px rgba(31, 45, 61, 0.12);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.product-card::before {
  content: "SALE";
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 6px 10px;
  border-radius: 999px;
  background: #f5b942;
  color: #1f2d3d;
  font-size: 11px;
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

.product-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 24px 50px rgba(31, 45, 61, 0.18);
}

.product-emoji {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 76px;
  height: 76px;
  margin-bottom: 20px;
  border-radius: 50%;
  background: rgba(245, 185, 66, 0.2);
  font-size: 40px;
}

.product-content {
  flex: 1;
}

.category {
  display: inline-block;
  margin-bottom: 10px;
  color: #42b883;
  font-size: 13px;
  font-weight: 800;
  text-transform: uppercase;
}

.product-card h2 {
  margin: 0 0 16px;
  font-size: 20px;
  line-height: 1.25;
  color: #1f2d3d;
}

.prices {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 22px;
}

.old-price {
  color: rgba(31, 45, 61, 0.42);
  font-size: 15px;
  text-decoration: line-through;
}

.sale-price {
  color: #1f2d3d;
  font-size: 24px;
  font-weight: 900;
}

.details-link {
  display: inline-block;
  margin-top: auto;
  padding: 12px 18px;
  border-radius: 999px;
  background: #42b883;
  color: #ffffff;
  font-size: 14px;
  font-weight: 800;
  text-align: center;
  text-decoration: none;
  box-shadow: 0 10px 24px rgba(66, 184, 131, 0.28);
  transition: background 0.2s ease, transform 0.2s ease;
}

.details-link:hover {
  background: #35a372;
  transform: translateY(-2px);
}

.details-link:focus-visible {
  outline: 3px solid #f5b942;
  outline-offset: 4px;
}

@media (max-width: 1024px) {
  .products-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .products-page {
    padding: 48px 18px;
  }

  .products-info {
    flex-direction: column;
  }

  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 520px) {
  .products-grid {
    grid-template-columns: 1fr;
  }
}
</style>