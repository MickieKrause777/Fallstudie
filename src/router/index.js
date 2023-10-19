import {createRouter, createWebHistory} from "vue-router"
import SpendeInFiliale from "../views/SpendeInFiliale.vue"
import Home from "../views/Home.vue"
import Datenschutz from "../views/Datenschutz.vue"
import Impressum from "../views/Impressum.vue"


const routes = [
    {
        path: "/SpendeInFiliale",
        name: "SpendeInFiliale",
        component: SpendeInFiliale
    },
    {
        path: "/",
        name: "Home",
        component: Home
    },   
    {
        path: "/Datenschutz",
        name: "Datenschutz",
        component: Datenschutz
    },
    {
        path: "/Impressum",
        name: "Impressum",
        component: Impressum
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router