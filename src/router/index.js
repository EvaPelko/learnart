import Vue from 'vue'
import VueRouter from 'vue-router'
//import HomeView from '../views/HomeView.vue'
//import NewImage from '../views/NewImageView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ProfileView from '../views/ProfileView.vue'
//import NewAnimalView from '../views/NewAnimalView.vue'
import LandingPageView from '../views/LandingPageView.vue'
import StudentFeedView from '../views/StudentFeedView.vue'
import TeacherFeedView from '../views/TeacherFeedView.vue'
import WelcomeView from '../views/WelcomeView.vue'
import PostView from '../views/PostView.vue'
import NewPostView from '../views/NewPostView.vue'
import AboutView from '../views/AboutView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'welcome-view',
    component: WelcomeView,
    meta: { excludeFromAppTemplate: true },
  },
  {
    path: '/login',
    name: 'login-view',
    component: LoginView
  },
  {
    path: '/registration',
    name: 'register-view',
    component: RegisterView
  },
  {
    path: '/profile',
    name: 'profile-view',
    component: ProfileView
  },
  {
    path: '/landing',
    name: 'landing-page-view',
    component: LandingPageView
  },
  {
    path: '/studentfeed',
    name: 'student-feed-view',
    component: StudentFeedView
  },
  {
    path: '/teacherfeed',
    name: 'teacher-feed-view',
    component: TeacherFeedView
  },
  {
    path: '/post',
    name: 'post-view',
    component: PostView
  },
  {
    path: '/newpost',
    name: 'newpost-view',
    component: NewPostView
  },
  {
    path: '/about',
    name: 'about-view',
    component: AboutView
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
