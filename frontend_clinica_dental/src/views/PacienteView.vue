<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useToast } from 'primevue/usetoast';
import http from '../plugins/axios'
import pacienteList from '../components/pacientes/pacienteList.vue'
import pacienteSave from '../components/pacientes/pacienteSave.vue'
import CambiarPasswordDialog from '../components/pacientes/CambiarPasswordDialog.vue'
import Dialog from 'primevue/dialog'
import type { Paciente } from '../models/Paciente' // Importar el modelo

// Estado
const paciente = ref<Paciente | null>(null) // Datos del paciente autenticado
const mostrarDialog = ref(false) // Controla la visibilidad del diálogo
const mostrarDialogPassword = ref(false) // Controla la visibilidad del diálogo de cambiar contraseña

// Toast Service
const toast = useToast();

// Cargar datos del paciente autenticado
async function cargarpacienteAutenticado() {
  try {
    paciente.value = await http
    .get('pacientes/mi-perfil')
    .then(response => response.data)
    toast.add({ severity: 'success', summary: 'Éxito', detail: 'Datos del paciente cargados correctamente.', life: 3000 });
  } catch (error) {
    console.error('Error al cargar los datos del paciente:', error);
    toast.add({ severity: 'error', summary: 'Error', detail: 'No se pudieron cargar los datos del paciente.', life: 3000 });
  }
}

// Cambiar contraseña
async function cambiarPassword(passwordActual: string, nuevaPassword: string) {
  try {
    const response = await http.post('pacientes/cambiar-password', { 
      passwordActual, 
      nuevaPassword,
    });
    mostrarDialogPassword.value = false; // Cerrar el diálogo
    toast.add({ severity: 'success', summary: 'Éxito', detail: response.data, life: 3000 });
  } catch (error) {
    console.error('Error al cambiar la contraseña:', error);
    toast.add({ severity: 'error', summary: 'Error', detail: 'No se pudo cambiar la contraseña.', life: 3000 });
  }
}

// Guardar cambios en el servidor
async function guardarCambios(pacienteActualizado: Paciente) {
  try {
    await http.patch(`pacientes/${pacienteActualizado.id}`, pacienteActualizado)
    paciente.value = { ...pacienteActualizado } // Actualizar los datos locales
    mostrarDialog.value = false; // Cerrar el diálogo
    toast.add({ severity: 'success', summary: 'Éxito', detail: 'Datos actualizados correctamente.', life: 3000 });
  } catch (error) {
    console.error('Error al guardar los cambios:', error);
    toast.add({ severity: 'error', summary: 'Error', detail: 'No se pudieron guardar los cambios.', life: 3000 });
  }
}

// Inicializar datos al montar el componente
onMounted(() => {
  cargarpacienteAutenticado()
})
</script>

<template>
  <div class="slider-background">
    <Toast /> <!-- Componente Toast -->

    <div class="content-container">
      <h1 class="title">Mi Perfil</h1>
      <div v-if="paciente">
        <!-- Muestra los datos del paciente -->
        <pacienteList
          :paciente="paciente"
          @editar="mostrarDialog = true"
          @cambiarPassword="mostrarDialogPassword = true"
        />

        <!-- Diálogo para editar los datos -->
        <Dialog
          v-model:visible="mostrarDialog"
          header="Editar Perfil"
          :style="{ width: '30rem' }"
          modal
        >
          <pacienteSave
            :paciente="{ ...paciente }"
            :modoEdicion="true"
            @guardar="guardarCambios"
          />
        </Dialog>

        <!-- Diálogo para cambiar la contraseña -->
        <Dialog
          v-model:visible="mostrarDialogPassword"
          header="Cambiar Contraseña"
          :style="{ width: '30rem' }"
          modal
        >
          <CambiarPasswordDialog
            @guardar="cambiarPassword"
            @cerrar="mostrarDialogPassword = false"
          />
        </Dialog>
      </div>
      <p v-else>Cargando datos del paciente...</p>
    </div>
  </div>
</template>
<style scoped>
.slider-background {
  background-color: #2700c1; /* Fondo sólido con el color especificado */
  min-height: 100vh; /* Asegura que cubra al menos el alto de la ventana */
  display: flex; /* Flexbox para centrar el contenido */
  justify-content: center; /* Centra el contenido horizontalmente */
  align-items: flex-start; /* Alinea el contenido al inicio vertical */
  padding: 2rem; /* Espaciado interno */
}
.content-container {
  background: rgba(255, 255, 255, 0.9); /* Fondo blanco semitransparente */
  border-radius: 8px; /* Bordes redondeados */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Sombra */
  padding: 2rem; /* Espaciado interno */
  width: 100%; /* Ajusta al contenedor */
  max-width: 1000px; /* Ancho máximo */
  margin-top: 200px; /* Espaciado superior */
}
.title {
  font-size: 2rem; /* Tamaño del título */
  text-align: center; /* Centrado del título */
  margin-bottom: 1.5rem; /* Espaciado inferior */
}
</style>
