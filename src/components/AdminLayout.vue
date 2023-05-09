<template>
    <div class="container py-3">
        <header class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
            <p class="h5 my-0 me-md-auto fw-normal">Notes App</p>
            <nav class="my-2 my-md-0 me-md-3">
                <a class="p-2 text-dark" href="#">Notes</a>
                <a class="p-2 text-dark" href="#">Profile</a>
                <a class="p-2 text-dark" href="#">Logout</a>
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

<style></style>