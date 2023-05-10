import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/components/AppLayout.vue'
import AdminLayout from '@/components/AdminLayout.vue'

import LoginForm from '@/views/auth/LoginForm.vue'
import RegisterForm from '@/views/auth/RegisterForm.vue'
import ResetPasswordForm from '@/views/auth/ResetPasswordForm.vue'

import NotesList from '@/views/admin/notes/NotesList.vue'
import DashboardView from '@/views/admin/dashboard/DashboardView.vue'
import ProfileView from '@/views/admin/profile/ProfileView.vue'

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
      },
      {
        path: 'reset',
        component: ResetPasswordForm
      }
    ]
  },
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      {
        path: 'dashboard',
        component: DashboardView
      },
      {
        path: 'notes',
        component: NotesList
      },
      {
        path: 'profile',
        component: ProfileView
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