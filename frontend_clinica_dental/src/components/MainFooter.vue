<template>
  <div class="section footer-area section-padding-02">
    <!-- Área de Widgets del Footer Inicio -->
    <div class="footer-widget-area">
      <div class="container">
        <!-- Contenedor de Widgets del Footer Inicio -->
        <div class="footer-wrapper">
          <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-6 widget-col">
              <!-- Widget del Footer Inicio -->
              <div class="footer-widget">
                <h3 class="title">Servicios</h3>
                <ul class="footer-link">
                  <li>
                    <i class="ri-check-line"></i>
                    <a href="#">Consultas Médicas</a>
                  </li>
                  <li>
                    <i class="ri-check-line"></i>
                    <a href="#">Exámenes Diagnósticos</a>
                  </li>
                  <li>
                    <i class="ri-check-line"></i>
                    <a href="#">Terapias Especializadas</a>
                  </li>
                  <li>
                    <i class="ri-check-line"></i>
                    <a href="#">Atención de Urgencias</a>
                  </li>
                  <li>
                    <i class="ri-check-line"></i>
                    <a href="#">Rehabilitación Física</a>
                  </li>
                </ul>
              </div>
              <!-- Widget del Footer Fin -->
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 widget-col">
              <!-- Widget del Footer Inicio -->
              <div class="footer-widget">
                <h3 class="title">Recursos</h3>
                <ul class="footer-link">
                  <li>
                    <i class="ri-check-line"></i>
                    <a href="#">Guías de Salud</a>
                  </li>
                  <li>
                    <i class="ri-check-line"></i>
                    <a href="#">Blog Informativo</a>
                  </li>
                  <li>
                    <i class="ri-check-line"></i>
                    <a href="#">Programas de Prevención</a>
                  </li>
                  <li>
                    <i class="ri-check-line"></i>
                    <a href="#">Eventos y Talleres</a>
                  </li>
                </ul>
              </div>
              <!-- Widget del Footer Fin -->
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 widget-col">
              <!-- Widget del Footer Inicio -->
              <div class="footer-widget">
                <h3 class="title">Información</h3>
                <ul class="footer-link">
                  <li>
                    <i class="ri-check-line"></i>
                    <a href="#">Nuestra Misión</a>
                  </li>
                  <li>
                    <i class="ri-check-line"></i>
                    <a href="#">Política de Privacidad</a>
                  </li>
                  <li>
                    <i class="ri-check-line"></i>
                    <a href="#">Términos y Condiciones</a>
                  </li>
                  <li>
                    <i class="ri-check-line"></i>
                    <a href="#">Preguntas Frecuentes</a>
                  </li>
                  <li>
                    <i class="ri-check-line"></i>
                    <a href="#">Trabaja con Nosotros</a>
                  </li>
                </ul>
              </div>
              <!-- Widget del Footer Fin -->
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 widget-col">
              <!-- Widget del Footer Inicio -->
              <div class="footer-widget">
                <h3 class="title">Contacto Rápido</h3>
                <ul class="footer-info">
                  <li><i class="ri-phone-fill"></i> +591 71234567</li>
                  <li>
                    <i class="ri-mail-unread-fill"></i> contacto@saludtotal.com
                  </li>
                  <li>
                    <i class="ri-map-pin-add-line"></i> Av. Central #1234, La
                    Paz, Bolivia
                  </li>
                </ul>
              </div>
              <!-- Widget del Footer Fin -->
            </div>
          </div>
        </div>
        <!-- Contenedor de Widgets del Footer Fin -->
      </div>
    </div>
    <!-- Área de Widgets del Footer Fin -->

    <!-- Área de Derechos de Autor Inicio -->
    <div class="footer-copyright-area">
      <div class="container">
        <div class="footer-copyright-wrapper">
          <div class="row">
            <!-- Texto de Derechos de Autor Inicio -->
            <div class="col-lg-7 col-md-8">
              <div class="copyright-text">
                <p>
                  © 2025 Salud Total. Diseño y Desarrollo
                  <a href="#">WebStudio</a>. Todos los derechos reservados.
                </p>
              </div>
            </div>
            <!-- Texto de Derechos de Autor Fin -->
            <!-- Redes Sociales Inicio -->
            <div class="col-lg-5 col-md-4">
              <div class="footer-social">
                <ul class="social">
                  <li>
                    <a href="#"><i class="ri-facebook-fill"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="ri-twitter-fill"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="ri-linkedin-fill"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="ri-instagram-fill"></i></a>
                  </li>
                </ul>
              </div>
            </div>
            <!-- Redes Sociales Fin -->
          </div>
        </div>
      </div>
    </div>
    <!-- Área de Derechos de Autor Fin -->
  </div>
</template>
<style scoped>
/* Aquí pegas los estilos que te di */
.footer-area {
  background-color: #0b1b32;
  color: #ffffff;
  padding-top: 50px;
  padding-bottom: 30px;
}

.footer-widget .title {
  font-size: 20px;
  color: #ffffff;
  margin-bottom: 20px;
  border-bottom: 2px solid #38b6ff;
  display: inline-block;
  padding-bottom: 5px;
}

.footer-link li {
  margin-bottom: 10px;
  color: #cccccc;
  transition: color 0.3s ease;
}

.footer-link li a {
  color: #cccccc;
  text-decoration: none;
}

.footer-link li a:hover {
  color: #38b6ff;
}

.footer-info li {
  margin-bottom: 10px;
  color: #cccccc;
}

.footer-info li i {
  margin-right: 10px;
  color: #38b6ff;
}

.footer-copyright-area {
  background-color: #091526;
  padding: 20px 0;
  font-size: 14px;
  color: #aaaaaa;
  margin-top: 30px;
}

.footer-social ul {
  list-style: none;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 0;
  margin: 0;
}

.footer-social ul li a {
  color: #cccccc;
  font-size: 18px;
  transition: color 0.3s ease;
}

.footer-social ul li a:hover {
  color: #38b6ff;
}
</style>
