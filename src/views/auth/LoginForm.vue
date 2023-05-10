<template>
    <div class="container mt-5">
        <div class="row main_content">
            <div class="col-md-4 mx-auto">
                <form @submit.prevent="login">
                    <div class="mb-3">
                        <label for="email" class="form-label">Email:</label>
                        <input type="email" class="form-control form-control-sm" id="email" v-model="email"
                            placeholder="Digite seu e-mail" required>
                        <div class="invalid-feedback">
                            Please enter your email.
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Senha:</label>
                        <input type="password" class="form-control form-control-sm" id="password" v-model="password"
                            placeholder="Digite sua senha" required>
                        <div class="invalid-feedback">
                            Please enter your password.
                        </div>
                    </div>
                    <div class="d-flex justify-content-between">
                        <a @click="$router.push('/reset')" class="link">Recuperar Senha?</a>
                        <button type="submit" class="btn btn-success float-start">Entrar</button>
                    </div>
                </form>
                <hr>
                <div class="d-flex justify-content-between">
                    <p>Ainda não tem conta?</p>
                    <button @click="$router.push('/register')" class="link btn btn-primary float-start">Cadastrar-se aqui</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
//@click="$router.push('/register')"
export default {
    name: "LoginForm",
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
            this.$router.push('/admin/dashboard')
        }
    }
}
</script>
  
<style scoped>
.link {
    text-decoration: none;
    color: var(--font-color);
    cursor: pointer;
    padding-top: 0.5rem;
}
</style>
  