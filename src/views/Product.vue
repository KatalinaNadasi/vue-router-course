<script setup lang="ts">

type Product = {
  id: number
  name: string
  category: 'sun glasses' | 'clothes' | 'jewellery'
  emoji: string
  oldPrice: number
  salePrice: number
  description: string
  details: string
}


const products: Product[] = [
  {
    id: 1,
    name: 'Classic Summer Sunglasses',
    category: 'sun glasses',
    emoji: '🕶️',
    oldPrice: 79,
    salePrice: 49,
    description: 'Stylish sunglasses perfect for sunny summer days.',
    details:
      'These sunglasses are designed for everyday summer use. They are light, comfortable, and easy to wear with casual outfits. Perfect for beach days, city walks, and sunny weekends.'
  },
  {
    id: 2,
    name: 'Beach Round Sunglasses',
    category: 'sun glasses',
    emoji: '🕶️',
    oldPrice: 69,
    salePrice: 39,
    description: 'Round sunglasses with a relaxed beach look.',
    details:
      'A soft rounded shape with a simple summer style. These sunglasses are ideal for a relaxed holiday look and protect your eyes while keeping your outfit elegant.'
  },
  {
    id: 3,
    name: 'Oversized Black Sunglasses',
    category: 'sun glasses',
    emoji: '🕶️',
    oldPrice: 89,
    salePrice: 59,
    description: 'A bold oversized shape for a confident summer style.',
    details:
      'These oversized sunglasses add a strong fashion statement to your outfit. They are perfect if you want a modern, confident, and stylish summer accessory.'
  },
  {
    id: 4,
    name: 'Light Summer Dress',
    category: 'clothes',
    emoji: '👗',
    oldPrice: 119,
    salePrice: 79,
    description: 'A light and comfortable dress for warm weather.',
    details:
      'This dress is made for comfort during warm days. Its light fit makes it easy to wear for a walk, a summer dinner, or a casual day outside.'
  },
  {
    id: 5,
    name: 'Linen Shirt',
    category: 'clothes',
    emoji: '👕',
    oldPrice: 85,
    salePrice: 55,
    description: 'A breathable linen shirt for a clean summer outfit.',
    details:
      'This linen shirt is simple, fresh, and breathable. It is a great choice for summer because it keeps your outfit clean while staying comfortable.'
  },
  {
    id: 6,
    name: 'Summer Shorts',
    category: 'clothes',
    emoji: '🩳',
    oldPrice: 65,
    salePrice: 39,
    description: 'Casual shorts designed for comfort and sunny days.',
    details:
      'These shorts are practical and comfortable for summer activities. They are easy to combine with T-shirts, shirts, or light summer tops.'
  },
  {
    id: 7,
    name: 'Gold Sun Necklace',
    category: 'jewellery',
    emoji: '📿',
    oldPrice: 99,
    salePrice: 69,
    description: 'A delicate gold necklace inspired by summer light.',
    details:
      'This necklace brings a warm golden accent to your outfit. It is subtle, elegant, and perfect for completing a summer look.'
  },
  {
    id: 8,
    name: 'Pearl Earrings',
    category: 'jewellery',
    emoji: '💎',
    oldPrice: 75,
    salePrice: 45,
    description: 'Elegant pearl earrings for a fresh summer look.',
    details:
      'These earrings are simple and elegant. They can be worn with casual outfits or more dressed-up summer looks.'
  },
  {
    id: 9,
    name: 'Minimal Gold Bracelet',
    category: 'jewellery',
    emoji: '💍',
    oldPrice: 110,
    salePrice: 72,
    description: 'A minimal bracelet that adds a subtle golden detail.',
    details:
      'This bracelet is designed to be minimal and easy to wear every day. It adds a small but elegant detail to your summer outfit.'
  }
]


</script>

<template>
  <main class="product-page">
    <section v-if="product" class="product-wrapper">
      <router-link to="/products" class="back-link">
        ← Back to products
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
        <h2>Product description</h2>

        <p>
          {{ product.details }}
        </p>
      </section>
    </section>

    <section v-else class="not-found">
      <h1>Product not found</h1>

      <p>
        The product you are looking for does not exist.
      </p>

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
  font-weight: 700;
  text-decoration: none;
}

.back-link:hover {
  color: #42b883;
}

.product-card {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 32px;
  align-items: center;
  padding: 32px;
  border-radius: 28px;
  background: #ffffff;
  box-shadow: 0 24px 60px rgba(31, 45, 61, 0.14);
}

.product-image {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 240px;
  border-radius: 24px;
  background: #f4f7f8;
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