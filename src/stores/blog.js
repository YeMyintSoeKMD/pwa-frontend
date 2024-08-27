import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useBlogStore = defineStore('blog', () => {
  
  /* Get blogs */
  const blogs = ref([])
  const getBlogs = async () => {
    try {
      const res = await axios.get("blogs");
      if(res.status === 200){
        blogs.value = res.data.data
      }
    } catch (error) {
      console.log(error.response.data);
    }
  }
  getBlogs()


  /* Get a blog */
  const blog = ref({})
  const getBlog = async (id) => {
    try {
      const res = await axios.get(`blogs/${id}`);
      if(res.status === 200){
        blog.value = res.data.data
      }
    } catch (error) {
      console.log(error.response.data);
    }
  }

  /* Store blog */
  const form = reactive({
    'title': '',
    'body': '',
  })

  const storeBlog = async (e, form) => {
    e.preventDefault()
    try {
      const data = {
        "title": form.title,
        "body": form.body,
      }
      const res = await axios.post("blogs", data);
      if(res.status === 201){
        blogs.value.unshift(res.data.data)
        alert("Blog created successfully")
        form.title = ""
        form.body = ""
      }
    } catch (error) {
      console.log(error.response.data);
    }
  }

  /* Update blog */

  /* Delete blog */
  const deleteBlog = async (id) => {
    try {
      const res = await axios.delete(`blogs/${id}`);
      if(res.status === 200){
        blogs.value = blogs.value.filter(blog => blog.id !== id)
        alert("Blog deleted successfully")
      }
    } catch (error) {
      console.log(error.response.data);
    }
  }

  return { 
    blogs,

    getBlog,
    blog,

    form,
    storeBlog,

    deleteBlog
  }
})
