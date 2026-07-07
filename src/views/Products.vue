<script setup lang="ts">
import { computed } from 'vue'

type Product = {
  id: number
  name: string
  category: 'sun glasses' | 'clothes' | 'jewellery'
  emoji: string
  oldPrice: number
  salePrice: number
  isOnSale: boolean
}

const products: Product[] = [
  {
    id: 1,
    name: 'Classic Summer Sunglasses',
    category: 'sun glasses',
    emoji: '🕶️',
    oldPrice: 79,
    salePrice: 49,
    isOnSale: true
  },
  {
    id: 2,
    name: 'Beach Round Sunglasses',
    category: 'sun glasses',
    emoji: '🕶️',
    oldPrice: 69,
    salePrice: 39,
    isOnSale: true
  },
  {
    id: 3,
    name: 'Oversized Black Sunglasses',
    category: 'sun glasses',
    emoji: '🕶️',
    oldPrice: 89,
    salePrice: 59,
    isOnSale: true
  },
  {
    id: 4,
    name: 'Light Summer Dress',
    category: 'clothes',
    emoji: '👗',
    oldPrice: 119,
    salePrice: 79,
    isOnSale: true
  },
  {
    id: 5,
    name: 'Linen Shirt',
    category: 'clothes',
    emoji: '👕',
    oldPrice: 85,
    salePrice: 55,
    isOnSale: true
  },
  {
    id: 6,
    name: 'Summer Shorts',
    category: 'clothes',
    emoji: '🩳',
    oldPrice: 65,
    salePrice: 39,
    isOnSale: true
  },
  {
    id: 7,
    name: 'Gold Sun Necklace',
    category: 'jewellery',
    emoji: '📿',
    oldPrice: 99,
    salePrice: 69,
    isOnSale: true
  },
  {
    id: 8,
    name: 'Pearl Earrings',
    category: 'jewellery',
    emoji: '💎',
    oldPrice: 75,
    salePrice: 45,
    isOnSale: true
  },
  {
    id: 9,
    name: 'Minimal Gold Bracelet',
    category: 'jewellery',
    emoji: '💍',
    oldPrice: 110,
    salePrice: 72,
    isOnSale: true
  },
  {
    id: 10,
    name: 'Casual White T-Shirt',
    category: 'clothes',
    emoji: '👕',
    oldPrice: 45,
    salePrice: 29,
    isOnSale: true
  },
  {
    id: 11,
    name: 'Summer Hat',
    category: 'clothes',
    emoji: '👒',
    oldPrice: 55,
    salePrice: 35,
    isOnSale: true
  },
  {
    id: 12,
    name: 'Ocean Blue Sunglasses',
    category: 'sun glasses',
    emoji: '🕶️',
    oldPrice: 95,
    salePrice: 62,
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
      <p class="eyebrow">Summer Sales</p>

      <h1>Sales Products</h1>

      <p class="hero-text">
        Explore our best summer deals. Sunglasses, clothes, and jewellery are
        now available at special prices.
      </p>
    </section>

    <section class="products-info">
      <p>
        Showing {{ salesProducts.length }} sales products
      </p>

      <span>Maximum 20 products displayed</span>
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
  background: #f4f7f8;
  color: #1f2d3d;
  font-family: Arial, sans-serif;
}

.products-hero {
  max-width: 820px;
  margin: 0 auto 40px;
  text-align: center;
}

.eyebrow {
  display: inline-block;
  margin-bottom: 16px;
  padding: 8px 16px;
  border-radius: 999px;
  background: rgba(66, 184, 131, 0.12);
  color: #42b883;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.products-hero h1 {
  margin: 0;
  font-size: clamp(42px, 7vw, 76px);
  line-height: 1;
  color: #1f2d3d;
}

.hero-text {
  max-width: 640px;
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
  background: #ffffff;
  box-shadow: 0 12px 28px rgba(31, 45, 61, 0.06);
}

.products-info p,
.products-info span {
  margin: 0;
  font-size: 14px;
  color: rgba(31, 45, 61, 0.72);
}

.products-info p {
  font-weight: 700;
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
  border: 1px solid rgba(31, 45, 61, 0.08);
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 0 18px 40px rgba(31, 45, 61, 0.08);
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
  font-weight: 800;
  letter-spacing: 1px;
}

.product-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 24px 50px rgba(31, 45, 61, 0.14);
}

.product-emoji {
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

.product-content {
  flex: 1;
}

.category {
  display: inline-block;
  margin-bottom: 10px;
  color: #42b883;
  font-size: 13px;
  font-weight: 700;
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
  color: rgba(31, 45, 61, 0.45);
  font-size: 15px;
  text-decoration: line-through;
}

.sale-price {
  color: #1f2d3d;
  font-size: 22px;
  font-weight: 800;
}

.details-link {
  display: inline-block;
  margin-top: auto;
  padding: 12px 18px;
  border-radius: 999px;
  background: #42b883;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
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