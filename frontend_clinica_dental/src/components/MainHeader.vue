<script setup lang="ts">
import Button from 'primevue/button';
import { useAuthStore } from '@/stores'; // Aseguramos la ruta correcta
import { ref, computed } from 'vue';
import router from '@/router';
import Menu from 'primevue/menu';
import Dialog from 'primevue/dialog';

const authStore = useAuthStore();
const showLogoutMessage = ref(false); // Controla la visibilidad del mensaje flotante
const userMenu = ref<InstanceType<typeof Menu> | null>(null);
const showConfirmLogout = ref(false); // Estado para mostrar el diálogo de confirmación

async function handleLogout() {
  showConfirmLogout.value = false; // Oculta el diálogo
  showLogoutMessage.value = true; // Muestra el mensaje flotante
  setTimeout(() => {
    authStore.logout(); // Llama al método de cierre de sesión
    showLogoutMessage.value = false; // Oculta el mensaje flotante
    router.push('/'); // Redirige al inicio
  }, 1000); // Espera 1 segundo antes de redirigir
}

// Opciones dinámicas del menú del usuario según el rol
const userMenuItems = computed(() => {
  if (authStore.role === 'cliente') {
    return [
      {
        label: 'Ver Perfil',
        icon: 'pi pi-user',
        command: () => router.push('/cliente-perfil'),
      },
      {
        label: 'Salir',
        icon: 'pi pi-sign-out',
        command: () => (showConfirmLogout.value = true),
      },
    ];
  } else if (authStore.role === 'odontologo') {
    return [
      {
        label: 'Ver Perfil',
        icon: 'pi pi-user',
        command: () => router.push('/odontologo-perfil'),
      },
      {
        label: 'Salir',
        icon: 'pi pi-sign-out',
        command: () => (showConfirmLogout.value = true),
      },
    ];
  }
  return []; // Menú vacío para otros roles o usuarios no autenticados
});
</script>

<template>
  <div class="section header-section stylish-header">
    <div v-if="showLogoutMessage" class="logout-overlay">
      <p>Cerrando sesión...</p>
    </div>

    <!-- Header Top Start -->
    <div class="header-top d-none d-lg-block">
      <div class="container">
        <div class="header-top-wrapper">
          <div class="header-top-info">
            <ul>
              <li>
                <i class="ri-map-pin-add-line"></i>
                <span>257 Calle Audiencia, Frente a la plaza 25 de Mayo</span>
              </li>
              <li>
                <i class="ri-mail-unread-fill"></i>
                <span>info@clinicadental.com</span>
              </li>
              <li><i class="ri-phone-fill"></i> +591 76543210</li>
            </ul>
          </div>

          <div class="header-social">
            <ul class="social">
              <li><a href="#"><i class="ri-facebook-fill"></i></a></li>
              <li><a href="#"><i class="ri-twitter-fill"></i></a></li>
              <li><a href="#"><i class="ri-linkedin-fill"></i></a></li>
              <li><a href="#"><i class="ri-instagram-fill"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Header Bottom Start -->
    <div class="header-bottom">
      <div class="container">
        <div class="header-bottom-wrapper d-flex align-items-center justify-content-between">
          <div class="header-logo">
            <router-link to="/">
              <img src="@/assets/images/logo.png" alt="Logo" />
            </router-link>
          </div>

          <div class="header-primary-menu d-none d-lg-flex align-items-center">
            <ul class="nav-menu d-flex align-items-center">
              <li><router-link to="/" class="active">Inicio</router-link></li>

              <!-- Opciones dinámicas -->
              <li v-if="authStore.token && authStore.role === 'cliente'">
                <router-link to="/citas">Mis Citas</router-link>
              </li>
              <li v-if="authStore.token && authStore.role === 'odontologo'">
                <router-link to="/citas">Ver Citas</router-link>
              </li>
              <li v-if="authStore.token && authStore.role === 'odontologo'">
                <router-link to="/odontologo_servicios">Servicios</router-link>
              </li>
              <li v-if="authStore.token && authStore.role === 'odontologo'">
                <router-link to="/odontologos">Odontólogos</router-link>
              </li>
              <li v-if="authStore.token && authStore.role === 'cliente'">
                <router-link to="/odontologo-cards">Odontólogos</router-link>
              </li>
              <li v-if="authStore.token && authStore.role === 'odontologo'">
                <router-link to="/clientes">Clientes</router-link>
              </li>
            </ul>

            <div class="d-flex align-items-center ms-4">
              <p
                v-if="authStore.token"
                class="welcome-text"
              >
                Bienvenido, {{ authStore.user?.name || 'Usuario' }}!
              </p>

              <div v-if="authStore.token" class="user-menu ms-3">
                <Button
                  icon="pi pi-user"
                  style="font-size: 2rem"
                  class="p-button-rounded p-button-text custom-button"
                  aria-label="User Menu"
                  @click="userMenu?.toggle($event)"
                />
                <Menu ref="userMenu" :model="userMenuItems" popup />
                <Dialog
                  v-model:visible="showConfirmLogout"
                  header="Confirmación"
                  modal
                  :closable="false"
                  :style="{ width: '350px' }"
                >
                  <p>¿Está seguro de que desea cerrar sesión?</p>
                  <div class="d-flex justify-content-end mt-4">
                    <Button label="Cancelar" icon="pi pi-times" class="p-button-text" @click="showConfirmLogout = false" />
                    <Button label="Salir" icon="pi pi-check" class="p-button-danger" @click="handleLogout" />
                  </div>
                </Dialog>
              </div>

              <router-link
                v-if="!authStore.token"
                to="/login"
                class="btn btn-login"
              >
                INICIAR SESIÓN
              </router-link>
            </div>
          </div>

          <div class="header-toggle d-lg-none">
            <button class="menu-toggle" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile Menu -->
  <div class="offcanvas offcanvas-start" id="offcanvasMenu">
    <div class="offcanvas-header">
      <a class="logo" href="#"><img src="@/assets/images/logo.png" alt="Logo" /></a>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>

    <div class="offcanvas-body">
      <div class="header-top-info">
        <ul>
          <li><i class="ri-map-pin-add-line"></i> 257 Calle Audiencia</li>
          <li><i class="ri-mail-unread-fill"></i> info@clinicadental.com</li>
          <li><i class="ri-phone-fill"></i> +591 76543210</li>
        </ul>
      </div>
      <div class="header-social">
        <ul class="social">
          <li><a href="#"><i class="ri-facebook-fill"></i></a></li>
          <li><a href="#"><i class="ri-twitter-fill"></i></a></li>
          <li><a href="#"><i class="ri-linkedin-fill"></i></a></li>
          <li><a href="#"><i class="ri-instagram-fill"></i></a></li>
        </ul>
      </div>

      <div class="mobile-menu">
        <ul class="nav-menu">
          <li><router-link to="/" class="active">Inicio</router-link></li>
          <li v-if="authStore.token && authStore.role === 'cliente'"><router-link to="/citas">Mis Citas</router-link></li>
          <li v-if="authStore.token && authStore.role === 'odontologo'"><router-link to="/citas">Ver Citas</router-link></li>
          <li v-if="authStore.token && authStore.role === 'odontologo'"><router-link to="/odontologo_servicios">Servicios</router-link></li>
          <li v-if="authStore.token && authStore.role === 'odontologo'"><router-link to="/odontologos">Odontólogos</router-link></li>
          <li v-if="authStore.token && authStore.role === 'odontologo'"><router-link to="/clientes">Clientes</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
.stylish-header {
  background: linear-gradient(to right, #1976d2, #42a5f5);
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
.header-top-info ul,
.header-social ul {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}
.header-top-info li,
.header-social li {
  list-style: none;
}
.header-top-info i,
.header-social i {
  color: #fff;
  font-size: 1.2rem;
  transition: transform 0.3s ease, color 0.3s ease;
}
.header-social a:hover i {
  transform: scale(1.2);
  color: #ffeb3b;
}
.nav-menu li a {
  color: white;
  font-weight: 500;
  padding: 0.5rem 1rem;
  transition: background 0.3s ease, color 0.3s ease;
}
.nav-menu li a:hover,
.nav-menu li a.active {
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 5px;
}
.btn-login {
  background-color: #ffffff;
  color: #1976d2;
  border-radius: 25px;
  font-weight: bold;
  padding: 0.5rem 1.5rem;
  margin-left: 1rem;
  transition: all 0.3s ease;
}
.btn-login:hover {
  background-color: #ffeb3b;
  color: #000;
}
.logout-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
.logout-overlay p {
  background-color: #000000bb;
  padding: 1rem 2rem;
  color: white;
  font-size: 1.3rem;
  border-radius: 10px;
}
.welcome-text {
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: #2e7d32;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
}
.custom-button {
  transform: scale(1.5);
  color: white;
}
</style>