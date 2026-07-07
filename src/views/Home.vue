


<template>
  <main class="home-page">
    <section class="hero">
      <p class="eyebrow">Summer Collection 2026</p>

      <h1>Summer Sales</h1>

      <p class="hero-text">
        Discover our best summer deals on sunglasses, clothes, and jewellery.
        Fresh styles, sunny vibes, and special prices for a limited time.
      </p>
    </section>

    <section class="categories">
      <article class="category-card">
        <div class="icon">🕶️</div>
        <h2>Sun Glasses</h2>
        <p>Protect your eyes with stylish summer sunglasses.</p>
      </article>
      <article class="category-card">
        <div class="icon">👗</div>
        <h2>Clothes</h2>
        <p>Light outfits and fresh looks for sunny days.</p>
      </article>

      <article class="category-card">
        <div class="icon">💍</div>
        <h2>Jewellery</h2>
        <p>Complete your summer outfit with elegant accessories.</p>
      </article>
    </section>

    <div class="cta-wrapper">
      <router-link to="/products" class="cta-button">
        Explore sales products
      </router-link>
    </div>
  </main>
</template>


<style scoped>
.home-page {
  min-height: 100vh;
  padding: 64px 24px;
  background: linear-gradient(135deg, #fff7e6, #ffe4ec);
  color: #222;
  font-family: Arial, sans-serif;
}

.hero {
  max-width: 800px;
  margin: 0 auto 48px;
  text-align: center;
}

.eyebrow {
  margin-bottom: 12px;
  color: #ff7a00;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.hero h1 {
  margin: 0;
  font-size: clamp(48px, 8vw, 88px);
  line-height: 1;
  color: #1f2937;
}

.hero-text {
  max-width: 620px;
  margin: 24px auto 0;
  font-size: 18px;
  line-height: 1.6;
  color: #555;
}

.categories {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 1050px;
  margin: 0 auto;
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

.category-card {
  padding: 32px 24px;
  border-radius: 24px;
  background: #ffffff;
  text-align: center;
  box-shadow: 0 18px 40px rgba(31, 41, 55, 0.12);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.category-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 24px 50px rgba(31, 41, 55, 0.18);
}

.icon {
  margin-bottom: 18px;
  font-size: 44px;
}

.category-card h2 {
  margin: 0 0 12px;
  font-size: 24px;
  color: #1f2937;
}

.category-card p {
  margin: 0;
  font-size: 15px;
  line-height: 1.5;
  color: #666;
}

.cta-wrapper {
  margin-top: 44px;
  text-align: center;
}

.cta-button {
  display: inline-block;
  padding: 16px 28px;
  border-radius: 999px;
  background: #ff7a00;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 12px 28px rgba(255, 122, 0, 0.35);
  transition: transform 0.2s ease, background 0.2s ease;
}

.cta-button:hover {
  background: #e86f00;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .home-page {
    padding: 48px 18px;
  }

  .categories {
    grid-template-columns: 1fr;
  }

  .category-card {
    padding: 28px 20px;
  }
}
</style>