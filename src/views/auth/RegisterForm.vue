<template>
  <div class="container mt-5">
    <div class="row main_content">
      <div class="col-md-4 mx-auto">
        <form @submit.prevent="register">
          <div class="mb-3">
            <label for="name" class="form-label">Nome:</label>
            <input type="text" class="form-control form-control-sm" id="name" v-model="name" placeholder="Digite seu nome"
              required>
            <div class="invalid-feedback">
              Please enter your email.
            </div>
          </div>
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
          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-success float-start">Criar conta</button>
          </div>
        </form>
        <hr>
        <div class="d-flex justify-content-between">
          <p>Já tem conta?</p>
          <button @click="$router.push('/login')" class="link btn btn-primary float-start">Fazer login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisteForm",
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register() {
      // Lógica de registro
      console.log('Name:', this.name)
      console.log('Email:', this.email)
      console.log('Password:', this.password)
    }
  }
}
</script>

<style scoped>
.link {
  text-decoration: none;
  color: var(--font-color);
  padding-top: 0.5rem;
}
</style>
