<template>
    <SectionHome />
    <AboutMe />
    <MyProjects />
    <MySkills />
    <MyCertifications />
    <ContactMe />
    <MyFooter />
    
    <!-- Botón flotante para ir al inicio -->
    <a 
        v-show="showScrollButton" 
        href="#inicio"
        class="scroll-to-top-btn"
        title="Ir al inicio"
    >
        ↑
    </a>
</template>

<script>
import SectionHome from '../components/SectionHome.vue'
import AboutMe from '../components/AboutMe.vue'
import MyProjects from '../components/MyProjects.vue'
import MySkills from '../components/MySkills.vue'
import MyCertifications from '../components/MyCertifications.vue'
import ContactMe from '../components/ContactMe.vue'     
import MyFooter from '../components/MyFooter.vue'

export default {
    components: {
        SectionHome,
        AboutMe,
        MyProjects,
        MySkills,
        MyCertifications,
        ContactMe,
        MyFooter
    },
    data() {
        return {
            showScrollButton: false
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll() {
            this.showScrollButton = window.scrollY > 300
        },
    }
}
</script>

<style scoped>
.scroll-to-top-btn {
    text-decoration: none;
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background-color: #93BEA9;
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
}

.scroll-to-top-btn:hover {
    background-color: #7da896;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.scroll-to-top-btn:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

/* Responsivo para dispositivos móviles */
@media (max-width: 768px) {
    .scroll-to-top-btn {
        bottom: 20px;
        right: 20px;
        width: 45px;
        height: 45px;
        font-size: 18px;
    }
}
</style>