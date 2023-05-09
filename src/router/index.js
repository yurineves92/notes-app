import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/components/AppLayout.vue'
import AdminLayout from '@/components/AdminLayout.vue'
import LoginForm from '@/views/auth/LoginForm.vue'
import RegisterForm from '@/views/auth/RegisterForm.vue'
import NotesList from '@/views/admin/notes/NotesList.vue'

const routes = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: 'login',
        component: LoginForm
      },
      {
        path: 'register',
        component: RegisterForm
      }
    ]
  },
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      {
        path: 'notes',
        component: NotesList
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  base: process.env.BASE_URL,
  routes
})

export default router