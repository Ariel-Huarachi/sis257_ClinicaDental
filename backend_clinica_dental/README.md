<<<<<<< HEAD
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

<p><em>(Aquí debe insertarse la imagen del diagrama ER)</em></p>

<hr>

<h2>✨ Características especiales</h2>

<ul>
  <li>Autenticación y autorización segura mediante tokens JWT.</li>
  <li>Validaciones y control de errores en frontend y backend.</li>
  <li>Arquitectura modular y escalable.</li>
  <li>Documentación automática de APIs mediante Swagger.</li>
  <li>Interfaces responsivas adaptadas a distintos dispositivos.</li>
</ul>

=======
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
>>>>>>> 3b39a65 (Guardando cambios antes)
