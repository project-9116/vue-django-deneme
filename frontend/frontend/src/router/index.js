import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostView from '@/views/PostView.vue'
import CategoryView from '@/views/CategoryView.vue'
import TagView from '@/views/TagView.vue'
import AllCategoriesView from '@/views/AllCategoriesView.vue'
import AllTagsView from '@/views/AllTagsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/category/:category",
      name: "Category",
      component: CategoryView
    },
    {
      path: "/tag",
      name: "Tag",
      component: TagView
    },
    {
      path: "/post",
      name: "Post",
      component: PostView
    },
    {
      path: "/categories",
      name: "Categories",
      component: AllCategoriesView
    },
    {
      path: "/tags",
      name: "Tags",
      component: AllTagsView
    },

  ]
})

export default router
