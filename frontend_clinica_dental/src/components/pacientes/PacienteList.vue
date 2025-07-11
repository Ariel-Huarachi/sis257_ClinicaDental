<script setup lang="ts">
import type { Paciente } from '../../models/Paciente' // Importamos el modelo
import { ref, onMounted } from 'vue'
import { useAuthStore } from '../../stores' // Acceso al paciente autenticado
import http from '../../plugins/axios'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import { useToast } from 'primevue/usetoast'


const toast = useToast()

const authStore = useAuthStore() // Obtener el paciente autenticado
const paciente = ref<Paciente | null>(null) // Especificamos que paciente puede ser paciente o null

const emit = defineEmits(['editar', 'cambiarPassword']) // Ahora incluye 'cambiarPassword'

// Cargar los datos del paciente autenticado desde el backend
async function cargarpacienteAutenticado() {
  try {
    paciente.value = await http.get('pacientes/mi-perfil').then(res => res.data)
  } catch (error) {
    console.error('Error al cargar los datos del paciente:', error)
    toast.add({ severity: 'error', summary: 'Error', detail: 'No se pudieron cargar los datos del paciente.', life: 3000 });
  }
}

// Eliminar la cuenta del usuario autenticado
async function eliminarCuenta() {
  if (confirm('¿Estás seguro de que deseas eliminar tu cuenta? Esta acción no se puede deshacer.')) {
    try {
      // Solicitud al backend para eliminar la cuenta
      await http.delete(`pacientes/${paciente.value?.id}`);

      // Cerrar sesión y redirigir al inicio
      authStore.logout(); // Asegúrate de tener un método para cerrar sesión
      toast.add({
        severity: 'success',
        summary: 'Exito',
        detail: `Tu cuenta ha sido eliminada correctamente.`,
        life: 3000,
      });
      window.location.href = '/'; // Redirige al inicio
    } catch (error) {
      toast.add({ severity: 'error', summary: 'Error', detail: 'No se pudo eliminar la cuenta. Inténtalo de nuevo.', life: 3000 });
    }
  }
}



// Inicializar los datos al montar el componente
onMounted(() => {
  cargarpacienteAutenticado()
})
</script>

<template>
  <div>
    <div v-if="paciente" class="card flex flex-column gap-4">
      <div class="flex items-center gap-4 mb-4">
        <label for="nombre" class="font-semibold w-24">Nombre</label>
        <InputText id="nombre" :value="paciente.nombre" disabled class="flex-auto" />
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label for="primer_apellido" class="font-semibold w-24">Primer <br />
          Apellido</label>
        <InputText id="primer_apellido" :value="paciente.primerApellido" disabled class="flex-auto" />
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label for="segundo_apellido" class="font-semibold w-24">Segundo Apellido</label>
        <InputText id="segundo_apellido" :value="paciente.segundoApellido" disabled class="flex-auto" />
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label for="email" class="font-semibold w-24">Correo</label>
        <InputText id="email" :value="paciente.email" disabled class="flex-auto" />
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label for="telefono" class="font-semibold w-24">Teléfono</label>
        <InputText id="telefono" :value="paciente.telefono" disabled class="flex-auto" />
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label for="direccion" class="font-semibold w-24">Dirección</label>
        <InputText id="direccion" :value="paciente.direccion" disabled class="flex-auto" />
      </div>

      <!-- Botón para abrir el diálogo de edición -->

      <Button label="Editar" icon="pi pi-pencil" class="p-button-text" @click="$emit('editar')" />

      <Button label="Cambiar Contraseña" icon="pi pi-lock" class="p-button-text p-button-danger"
        @click="$emit('cambiarPassword')" />
      <!-- Botón para eliminar la cuenta -->
      <Button label="Eliminar Cuenta" icon="pi pi-trash" class="p-button-text p-button-danger"
        @click="eliminarCuenta" />
    </div>
    <p v-else>Cargando datos del paciente...</p>
  </div>
</template>

<style scoped>
/* Contenedor principal del formulario */
.card {
  max-width: 600px;
  /* Define un ancho máximo para el formulario */
  margin: 0 auto;
  /* Centra horizontalmente el formulario */
  padding: 20px;
  /* Espaciado interno */
  background-color: #f9f9f9;
  /* Color de fondo claro */
  border: 1px solid #ddd;
  /* Borde del formulario */
  border-radius: 10px;
  /* Bordes redondeados */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  /* Sombra para resaltar el formulario */
}

/* Ajustes para las filas del formulario */
.flex {
  display: flex;
  /* Usar flexbox para organizar los elementos */
  align-items: center;
  /* Alinear verticalmente */
}

/* Etiquetas */
label {
  font-size: 1.2rem;
  /* Tamaño de fuente estándar */
  font-weight: bold;
  /* Texto en negrita */
  color: #333;
  /* Color de las etiquetas */
  width: 180px;
  /* Ancho fijo para alinear etiquetas */
  text-align: start;
  /* Alinear texto de las etiquetas a la derecha */
}

/* Campos deshabilitados */
input[disabled],
textarea[disabled] {
  background-color: #f2f2f2;
  /* Fondo gris claro */
  cursor: not-allowed;
  /* Cursor indicando no editable */
}

/* Botón Editar */
.p-button-text {
  color: #4caf50;
  /* Verde para el botón de editar */
  font-weight: bold;
  /* Texto en negrita */
}

.p-button-text:hover {
  background-color: rgba(76, 175, 80, 0.1);
  /* Fondo verde claro al pasar */
}
</style>
