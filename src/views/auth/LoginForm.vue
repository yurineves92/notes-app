<template>
    <div class="container mt-5">
        <h1 class="text-center">Acesso</h1>
        <div class="row">
            <div class="col-md-4 mx-auto">
                <form @submit.prevent="login">
                    <hr />
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control form-control-sm" id="email" v-model="email"
                            placeholder="Digite seu e-mail" required>
                        <div class="invalid-feedback">
                            Please enter your email.
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Senha</label>
                        <input type="password" class="form-control form-control-sm" id="password" v-model="password"
                            placeholder="Digite sua senha" required>
                        <div class="invalid-feedback">
                            Please enter your password.
                        </div>
                    </div>
                    <div>
                        <button type="submit" class="btn btn-primary float-start">Entrar</button>
                        <button type="button" class="btn btn-secondary float-end"
                            @click="$router.push('/register')">Registrar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "RegisteForm",
    data() {
        return {
            email: 'admin@example.com',
            password: '123123'
        }
    },
    methods: {
        login() {
            // Lógica de registro
            console.log('Email:', this.email)
            console.log('Password:', this.password)
            this.$router.push('/admin')
        }
    }
}
</script>
  
<style scoped>
</style>
  