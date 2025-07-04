<script setup lang="ts">
import type { Paciente } from '../../models/Paciente'
import http from '../../plugins/axios'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import { onMounted, ref } from 'vue'
import { useToast } from 'primevue/usetoast'

const toast = useToast()

const ENDPOINT = 'clientes'
let clientes = ref<Paciente[]>([])

const emit = defineEmits(['edit'])
const clienteDelete = ref<Paciente | null>(null)
const mostrarConfirmDialog = ref<boolean>(false)

async function obtenerLista() {
  clientes.value = await http.get(ENDPOINT).then(response => response.data)
}

function emitirEdicion(cliente: Paciente) {
  emit('edit', cliente)
}

function mostrarEliminarConfirm(cliente: Paciente) {
  clienteDelete.value = cliente
  mostrarConfirmDialog.value = true
}

async function eliminar() {
  await http.delete(`${ENDPOINT}/${clienteDelete.value?.id}`)
  toast.add({
        severity: 'success',
        summary: 'Cliente Eliminado',
        detail: 'Los datos del cliente se han eliminado correctamente',
        life: 3000
      })
  obtenerLista()
  mostrarConfirmDialog.value = false
}

onMounted(() => {
  obtenerLista()
})

defineExpose({ obtenerLista })
</script>

<template>
  <div class="dentists-container">
    <div class="table-wrapper">
      <table class="dentists-table">
        <thead>
          <tr>
            <th class="th-number">Nro.</th>
            <th>Nombre</th>
            <th>Primer Apellido</th>
            <th>Segundo Apellido</th>
            <th>Correo</th>
            <th>Teléfono</th>
            <th>Dirección</th>
            <th class="th-actions">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(cliente, index) in clientes" :key="cliente.id">
            <td class="td-number">{{ index + 1 }}</td>
            <td>{{ cliente.nombre }}</td>
            <td>{{ cliente.primerApellido }}</td>
            <td>{{ cliente.segundoApellido }}</td>
            <td>{{ cliente.email }}</td>
            <td>
              <span class="specialty-tag">{{ cliente.telefono }}</span>
            </td>
            <td>{{ cliente.direccion }}</td>
            <td class="actions-column">
              <div class="actions-wrapper">
                <Button icon="pi pi-pencil" aria-label="Editar" text class="edit-button"
                  @click="emitirEdicion(cliente)" />
                <Button icon="pi pi-trash" aria-label="Eliminar" text class="delete-button"
                  @click="mostrarEliminarConfirm(cliente)" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <Dialog v-model:visible="mostrarConfirmDialog" header="Confirmar Eliminación" :style="{ width: '25rem' }"
      class="delete-dialog">
      <div class="dialog-content">
        <i class="pi pi-exclamation-triangle" style="font-size: 2rem; color: #ff9800;"></i>
        <p>¿Estás seguro de que deseas eliminar este registro?</p>
      </div>
      <div class="dialog-footer">
        <Button type="button" label="Cancelar" severity="secondary" @click="mostrarConfirmDialog = false"
          class="cancel-button" />
        <Button type="button" label="Eliminar" @click="eliminar" class="confirm-delete-button" />
      </div>
    </Dialog>
  </div>
</template>

<style scoped>
.dentists-container {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  overflow: hidden;
}

.table-wrapper {
  overflow-x: auto;
  max-height: calc(100vh - 300px);
}

.dentists-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  min-width: 1000px;
}

.dentists-table th {
  background-color: #240090;
  color: white;
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  position: sticky;
  top: 0;
  z-index: 10;
}

.th-number {
  width: 70px;
}

.th-actions {
  width: 120px;
}

.dentists-table td {
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
  transition: background-color 0.2s;
}

.td-number {
  color: #6b7280;
  font-weight: 500;
}


.dentists-table tbody tr:hover {
  background-color: #f8fafc;
}

.specialty-tag {
  background-color: #ecfdf5;
  color: #047857;
  padding: 0.375rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  display: inline-block;
}

.actions-column {
  padding: 0.5rem !important;
}

.actions-wrapper {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
}

.edit-button {
  color: #047857 !important;
}

.delete-button {
  color: #dc2626 !important;
}

.edit-button:hover,
.delete-button:hover {
  background-color: #f1f5f9 !important;
}

/* Estilos para el diálogo de confirmación */
.delete-dialog {
  border-radius: 8px;
}

.dialog-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
  text-align: center;
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .dentists-container {
    padding: 1rem;
  }

  .table-wrapper {
    border-radius: 0;
    box-shadow: none;
  }
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.dentists-container {
  animation: fadeIn 0.3s ease-out;
}
</style>