<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Perfil</li>
        </ol>
    </nav>
    <div>
        <form>
            <div class="row">
                <div class="col-md-6">
                    <div class="mb-3">
                        <label for="name" class="form-label">Nome:</label>
                        <input type="email" class="form-control" name="name">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email:</label>
                        <input type="email" class="form-control" name="email">
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Senha:</label>
                        <input type="password" class="form-control" name="password">
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Repetir a senha:</label>
                        <input type="password" class="form-control" name="password">
                    </div>
                    <div class="d-flex justify-content-between">
                        <button type="submit" class="btn btn-primary">Salvar</button>
                        <a @click="$router.push('/admin/dashboard')" class="btn btn-secondary">Cancelar</a>
                    </div>
                </div>
                <div class="col-md-6 text-center">
                    <div class="mb-3">
                        <label class="form-label">Avatar</label>
                        <div class="user-img-container">
                            <img :src="imageDefault" alt="" class="mt-3">
                        </div>
                        <input type="file" class="form-control mt-2">
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "ProfileView",
    data() {
        return {
            imageDefault: "https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_960_720.png"
        }
    }
}
</script>

<style scoped>
.user-img-container img {
    border-radius: 30%;
    width: 40%;
    height: 40%;
    border: 1px solid #ccc;
}
</style>