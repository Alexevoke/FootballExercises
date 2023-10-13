<template>
<nav class="navbar navbar-expand-sm bg-light">
    <div class="container-fluid">
        <!-- Links -->
        <ul class="navbar-nav">
            <li class="nav-item">
                <RouterLink to="/" class="nav-link">Home</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink to="/exercises" class="nav-link">Exercises</RouterLink>
            </li>
        </ul>
    </div>
</nav>
<RouterView></RouterView>
</template>

<script>
import {RouterLink, RouterView} from 'vue-router'


</script>

<style>

</style>
