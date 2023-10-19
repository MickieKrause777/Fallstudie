<template>
  <div class="border-bottom fixed-top">
          <nav class="navbar navbar-expand-lg" style="background-color: rgb(177, 99, 99);">
            <div class="container-fluid d-flex justify-content-md-center">
              <router-link to="/" class="navbar-brand text-center border p-3 p-sm-3 m-1 border-4 rounded-pill text-decoration-none">
                    <div class="d-flex gap-1 align-items-center" style="color: white;">
                      <img class="rounded-circle" style="width: 50px;" src="https://img.freepik.com/vektoren-kostenlos/charity-logo-haende-die-herz-symbol-flache-design-vektor-illustration-unterstuetzen_53876-136265.jpg?w=826&t=st=1695111421~exp=1695112021~hmac=df7de16068fd496eb792d3934a15d4b7e524b2c65c48a1a4979cd6b1f2394a95">
                      <h4 class="d-none d-sm-block p-1 pt-2"> KSK Kleiderspenden für Krisenregionen e.V.</h4>
                    </div>  
              </router-link>

              <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarToggleExternalContent">
                <ul class="navbar-nav ms-auto m-1 gap-2 align-items-center">
                  <li class="nav-item">
                    <router-link to="/" class="nav-link text-center fw-bold p-3 border rounded-pill text-light bg-primary">Home</router-link>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-center fw-bold p-3 border rounded-pill text-light" data-bs-toggle="modal" data-bs-target="#Spendenformular">Kleiderspende</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-center border p-3 rounded-pill" href="#Krisengebiet" style="color: white;">Krisengebiete</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-center border p-3 rounded-pill" href="#about" style="color: white;">Über uns</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    </div>  
</template>