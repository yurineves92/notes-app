<template>
  <div class="container mt-5">
    <h1 class="text-center">Cadastro</h1>
    <div class="row">
      <div class="col-md-4 mx-auto">
        <form @submit.prevent="register">
          <hr />
          <div class="mb-3">
            <label for="name" class="form-label">Nome</label>
            <input type="text" class="form-control form-control-sm" id="name" v-model="name" placeholder="Digite seu nome"
              required>
            <div class="invalid-feedback">
              Please enter your email.
            </div>
          </div>
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
            <button type="submit" class="btn btn-primary float-start">Cadastrar</button>
            <button type="button" class="btn btn-secondary float-end" @click="$router.push('/login')">Acessar</button>
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
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register() {
      // Lógica de registro
      console.log('Name:', this.email)
      console.log('Email:', this.email)
      console.log('Password:', this.password)
    }
  }
}
</script>

<style></style>
