<template>
    <div class="container mt-5">
        <div class="row main_content">
            <div class="col-md-4 mx-auto">
                <form @submit.prevent="reset">
                    <div class="mb-3">
                        <label for="email" class="form-label">Email:</label>
                        <input type="email" class="form-control form-control-sm" id="email" v-model="email"
                            placeholder="Digite seu e-mail" required>
                        <div class="invalid-feedback">
                            Please enter your email.
                        </div>
                    </div>
                    <div class="d-grid gap-2">
                        <button type="submit" class="btn btn-success float-start">Recuperar a minha senha</button>
                    </div>
                </form>
                <hr>
                <div class="d-flex justify-content-between">
                    <p>Você também pode:</p>
                    <button @click="$router.push('/login')" class="link btn btn-primary float-start">Voltar ao login</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
//@click="$router.push('/register')"
export default {
    name: "ResetPasswordForm",
    data() {
        return {
            email: 'admin@example.com'
        }
    },
    methods: {
        login() {
            // Lógica de registro
            console.log('Email:', this.email)
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
  