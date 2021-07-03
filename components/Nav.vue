<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <div class="m">
        <fa icon="user-astronaut" class="text-white mx-2" />
      </div>
      <NuxtLink class="navbar-brand" to="/">Give Us Space!</NuxtLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/">Home</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/launches">Launches</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/counter">Counter</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
