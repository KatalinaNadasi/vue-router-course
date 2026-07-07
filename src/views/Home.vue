<script setup lang="ts">
import heroImage from '../assets/home-illustration.jpg'
</script>

<template>
  <main class="home-page">
    <section class="hero">
      <div class="hero-content">
        <p class="eyebrow">Summer Tech 2026</p>

        <h1>Tech courses easy to use</h1>

        <p class="hero-text">
          We don't create content, we create tech masters.
          We love technologies and technologies love us too.
          Learn fast with short courses organized by features, tools, and real
          developer needs.
        </p>
      </div>

      <div class="hero-image-wrapper">
        <img
          :src="heroImage"
          alt="Vue Router character navigating between pages"
          class="hero-image"
        />
      </div>
    </section>

    <section class="categories">
       <router-link to="/products" class="category-card">
          <article class="category-card">
            <div class="icon">📄</div>
              <h2>PDF Courses</h2>
              <p>
                Easy to take away, read anywhere, and keep as your personal tech guide.
              </p>
          </article>
       </router-link>
    
       <router-link to="/products" class="category-card">
        <article class="category-card">
          <div class="icon">🎥</div>
          <h2>Online Videos</h2>
          <p>
            Short and focused lessons to understand features step by step.
          </p>
        </article>
        </router-link>

        <router-link to="/products" class="category-card">
          <article class="category-card">
            <div class="icon">💬</div>
            <h2>They Talk About Us</h2>
            <p>
              Discover how learners use our courses to grow faster in tech.
            </p>
          </article>
        </router-link>
    </section>
  </main>
</template>

<style scoped>
.home-page {
  min-height: 100vh;
  padding: 64px 24px;
  background: linear-gradient(135deg, #fff7e6, #ffe4ec);
  color: #1f2d3d;
  font-family: Arial, sans-serif;
}

.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
  max-width: 1180px;
  margin: 0 auto 56px;
}

.hero-content {
  max-width: 560px;
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

.hero h1 {
  margin: 0;
  font-size: clamp(52px, 8vw, 92px);
  line-height: 0.95;
  color: #1f2d3d;
}

.hero-text {
  max-width: 560px;
  margin: 24px 0 0;
  font-size: 18px;
  line-height: 1.6;
  color: rgba(31, 45, 61, 0.75);
}

.hero-image-wrapper {
  padding: 18px;
  border-radius: 32px;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 24px 60px rgba(31, 45, 61, 0.14);
}

.hero-image {
  display: block;
  width: 100%;
  border-radius: 24px;
}

.cta-button {
  display: inline-block;
  margin-top: 32px;
  padding: 16px 28px;
  border-radius: 999px;
  background: #42b883;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 12px 28px rgba(66, 184, 131, 0.35);
  transition: transform 0.2s ease, background 0.2s ease;
}

.cta-button:hover {
  background: #35a372;
  transform: translateY(-2px);
}

.categories {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 1050px;
  margin: 0 auto;
}

.category-card {
  position: relative;
  overflow: hidden;
  padding: 32px 24px;
  border-radius: 24px;
  background: #ffffff;
  text-align: center;
  box-shadow: 0 18px 40px rgba(31, 45, 61, 0.12);
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
  box-shadow: 0 24px 50px rgba(31, 45, 61, 0.18);
}

.icon {
  margin-bottom: 18px;
  font-size: 44px;
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

@media (max-width: 900px) {
  .hero {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-content {
    max-width: 760px;
    margin: 0 auto;
  }

  .hero-text {
    margin-left: auto;
    margin-right: auto;
  }
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