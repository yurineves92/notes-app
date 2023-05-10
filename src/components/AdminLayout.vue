<template>
    <div class="container py-3">
        <header class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
            <p class="h5 my-0 me-md-auto fw-normal" @click="$router.push('/admin/dashboard')" style="cursor:pointer">Notes App</p>
            <nav class="my-2 my-md-0 me-md-3">
                <a class="p-2 menu_link" href="#" @click="$router.push('/admin/dashboard')">Dashboard</a>
                <a class="p-2 menu_link" href="#" @click="$router.push('/admin/notes')">Anotações</a>
                <a class="p-2 menu_link" href="#" @click="$router.push('/admin/profile')">Perfil</a>
                <a class="p-2 menu_link" href="#">Logout</a>
            </nav>
        </header>
        <div>
            <main>
                <router-view></router-view>
            </main>
        </div>
    </div>
</template>

<script>
export default {
    name: "AdminLayout"
}
</script>

<style scoped>
.menu_link {
    text-decoration: none;
    color: var(--font-color);
}
</style>