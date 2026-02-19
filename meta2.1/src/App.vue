<script setup></script>

<template>
  <div class="position-relative">
    <img src="https://picsum.photos/1900/300" class="img-fluid" alt="..."><div class="position-absolute top-50 start-50 translate-middle text-white text-center">
		<h1>Bienvenido </h1>
	</div>
  </div>
  <hr class="my-4">
      <div class="container">         
        <div class="row">
            <div class="col-sm-6 mb-3 mb-sm-0">
                <div class="card">
                    <img src="https://picsum.photos/300/210" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Título de la tarjeta 1</h5>
                        <p class="card-text">Este es un texto descriptivo para la tarjeta 1.</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card">
                    <img src="https://picsum.photos/300/200" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Título de la tarjeta 2</h5>
                        <p class="card-text">Este es un texto descriptivo para la tarjeta 2.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <hr class="my-4">
	<div class="container">
	<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Webber</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Nico</td>
      <td>Hulkenberg</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Fernando</td>
      <td>Alonso</td>
    </tr>
  </tbody>
</table>
	<button type="button" class="btn btn-primary">Cerrar</button>
</div>
    <footer>&copy; Hola, Todos los Derechos Reservados</footer>

</template>

<style scoped></style>
