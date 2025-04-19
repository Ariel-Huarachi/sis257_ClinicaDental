<h1>Clínica Dental - Sistema de Gestión Integral</h1>

<p>La Clínica Dental es un sistema web diseñado para digitalizar y optimizar los procesos de atención y administración de un centro odontológico moderno. Esta solución permite gestionar pacientes, profesionales, tratamientos, horarios, citas y pagos, mejorando la experiencia de usuarios y personal médico mediante una plataforma ágil, segura y escalable.</p>

<hr>

<h2>🚀 Funcionalidades principales</h2>

<ul>
  <li><strong>Administración de Odontólogos:</strong> Registro y gestión de profesionales, especialidades y horarios disponibles.</li>
  <li><strong>Gestión de Pacientes:</strong> Control detallado de los datos de clientes, su historial clínico y citas programadas.</li>
  <li><strong>Agenda de Citas:</strong> Sistema inteligente de reservas que valida horarios, odontólogos y servicios solicitados.</li>
  <li><strong>Catálogo de Servicios Dentales:</strong> Registro de tratamientos ofrecidos, precios, duración y detalles.</li>
  <li><strong>Control de Pagos:</strong> Registro de pagos realizados, métodos utilizados y vinculación a citas.</li>
  <li><strong>Roles de Usuario y Seguridad:</strong> Sistema de autenticación y autorización basado en roles diferenciados.</li>
  <li><strong>Historial Clínico:</strong> Registro histórico de diagnósticos, tratamientos y observaciones realizadas a los pacientes.</li>
</ul>

<hr>

<h2>📋 Modelo de Datos</h2>

<p>El sistema se apoya en una base de datos relacional optimizada para garantizar consistencia, rendimiento y escalabilidad.</p>

<h3>Entidades principales:</h3>

<ul>
  <li><strong>Odontólogos</strong>
    <ul>
      <li>id (PK)</li>
      <li>nombre</li>
      <li>primer_apellido</li>
      <li>segundo_apellido</li>
      <li>email</li>
      <li>telefono</li>
      <li>direccion</li>
      <li>especialidad</li>
      <li>rol_id (FK)</li>
      <li>fecha_creacion</li>
      <li>fecha_modificacion</li>
      <li>fecha_eliminacion</li>
    </ul>
  </li>
  <li><strong>Pacientes</strong>
    <ul>
      <li>id (PK)</li>
      <li>nombre</li>
      <li>primer_apellido</li>
      <li>segundo_apellido</li>
      <li>email</li>
      <li>password</li>
      <li>telefono</li>
      <li>direccion</li>
      <li>rol_id (FK)</li>
      <li>fecha_creacion</li>
      <li>fecha_modificacion</li>
      <li>fecha_eliminacion</li>
    </ul>
  </li>
  <li><strong>Servicios</strong>
    <ul>
      <li>id (PK)</li>
      <li>nombre</li>
      <li>descripcion</li>
      <li>precio</li>
      <li>duracion (minutos)</li>
      <li>fecha_creacion</li>
      <li>fecha_modificacion</li>
      <li>fecha_eliminacion</li>
    </ul>
  </li>
  <li><strong>Roles</strong>
    <ul>
      <li>id (PK)</li>
      <li>nombre_rol</li>
      <li>fecha_creacion</li>
      <li>fecha_modificacion</li>
      <li>fecha_eliminacion</li>
    </ul>
  </li>
  <li><strong>Odontólogos_Servicios</strong>
    <ul>
      <li>id (PK)</li>
      <li>odontologo_id (FK)</li>
      <li>servicio_id (FK)</li>
      <li>fecha_creacion</li>
      <li>fecha_modificacion</li>
      <li>fecha_eliminacion</li>
    </ul>
  </li>
  <li><strong>Horarios</strong>
    <ul>
      <li>id (PK)</li>
      <li>odontologo_id (FK)</li>
      <li>fecha</li>
      <li>hora</li>
      <li>estado (Disponible, Reservado, Ocupado, No disponible)</li>
      <li>fecha_creacion</li>
      <li>fecha_modificacion</li>
      <li>fecha_eliminacion</li>
    </ul>
  </li>
  <li><strong>Citas</strong>
    <ul>
      <li>id (PK)</li>
      <li>estado (Programada, Completada, Cancelada)</li>
      <li>cliente_id (FK)</li>
      <li>odontologo_id (FK)</li>
      <li>fecha_hora_inicio</li>
      <li>fecha_hora_fin</li>
      <li>fecha_creacion</li>
      <li>fecha_modificacion</li>
      <li>fecha_eliminacion</li>
    </ul>
  </li>
  <li><strong>Historial Clínico</strong>
    <ul>
      <li>id (PK)</li>
      <li>cliente_id (FK)</li>
      <li>diagnostico</li>
      <li>tratamiento_realizado</li>
      <li>observaciones</li>
      <li>fecha_tratamiento</li>
      <li>fecha_creacion</li>
      <li>fecha_modificacion</li>
    </ul>
  </li>
  <li><strong>Pagos</strong>
    <ul>
      <li>id (PK)</li>
      <li>cita_id (FK)</li>
      <li>monto_pagado</li>
      <li>metodo_pago (Efectivo, Tarjeta, QR)</li>
      <li>fecha_pago</li>
      <li>fecha_creacion</li>
      <li>fecha_modificacion</li>
    </ul>
  </li>
  <li><strong>Citas_Servicios</strong>
    <ul>
      <li>id (PK)</li>
      <li>cita_id (FK)</li>
      <li>servicio_id (FK)</li>
      <li>precio_servicio</li>
      <li>fecha_creacion</li>
      <li>fecha_modificacion</li>
    </ul>
  </li>
</ul>

<hr>

<h2>💻 Tecnologías utilizadas</h2>

<ul>
  <li><strong>PostgreSQL:</strong> Motor de base de datos relacional.</li>
  <li><strong>pgAdmin:</strong> Herramienta de administración de bases de datos.</li>
  <li><strong>Node.js:</strong> Entorno backend basado en JavaScript.</li>
  <li><strong>NestJS:</strong> Framework para construcción de APIs con Node.js.</li>
  <li><strong>TypeORM:</strong> ORM para interacción con bases de datos.</li>
  <li><strong>Vue.js:</strong> Framework para la construcción de interfaces frontend.</li>
  <li><strong>Axios:</strong> Cliente HTTP para solicitudes entre frontend y backend.</li>
  <li><strong>Swagger:</strong> Documentación interactiva de APIs REST.</li>
  <li><strong>Postman:</strong> Herramienta para pruebas de APIs.</li>
</ul>

<hr>

<h2>📊 Diagrama Entidad-Relación (ERD)</h2>

<p>La base de datos está modelada para mantener la integridad referencial, optimizar consultas y facilitar futuras expansiones.</p>

<p><em>(Aquí debe insertarse la imagen del diagrama ER generado)</em></p>

<hr>

<h2>✨ Características especiales</h2>

<ul>
  <li>Autenticación y autorización segura mediante tokens JWT.</li>
  <li>Validaciones y control de errores en frontend y backend.</li>
  <li>Arquitectura modular y escalable.</li>
  <li>Documentación automática de APIs mediante Swagger.</li>
  <li>Interfaces responsivas adaptadas a distintos dispositivos.</li>
</ul>

