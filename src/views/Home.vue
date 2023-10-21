<template>

<main class="pt-5">
<div class="bg-image" style="background-image: url('https://mdbootstrap.com/img/Photos/Others/images/76.jpg');">

<section class="d-flex align-items-center text-light p-5 text-center text-sm-start" style="position: relative;">
  <div class="container mt-5">
    <div class="d-md-flex align-items-center">
      <div class="mx-3">
        <div class="container-fluid d-flex align-items-center justify-content-center">
          <h1 style="font-size: 250%;">Spenden Sie jetzt 
            <span class="fw-bold" style="color: rgb(177, 99, 99)">Kleidung</span> 
            an aktuelle 
            <span class="fw-bold" style="color: rgb(177, 99, 99);">Krisenregionen</span>
          </h1>
        </div>
      <p class="lead my-5">Suchen Sie sich aus an wen Sie spenden möchten und ob Sie die Kleidung in eine unserer Filialen bringen oder wir Sie bei Ihnen abholen sollen!</p>
      <button type="button" class="btn btn-lg text-light" style="background-color: rgb(177, 99, 99); font-size: 35px;" data-bs-toggle="modal" data-bs-target="#Spendenformular">
        Jetzt spenden!</button>
      </div> 
      <img class="rounded-circle d-none d-md-block" style="width: 30%; height: auto," src="https://img.freepik.com/vektoren-kostenlos/charity-logo-haende-die-herz-symbol-flache-design-vektor-illustration-unterstuetzen_53876-136265.jpg?w=826&t=st=1695111421~exp=1695112021~hmac=df7de16068fd496eb792d3934a15d4b7e524b2c65c48a1a4979cd6b1f2394a95">
    </div>
  </div>
</section>

<div class="modal fade" id="Spendenformular" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="Spendenformular" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content" style="background-color: rgb(177, 99, 99);">
      <div class="modal-header text-light">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Spendenformular</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-start">
        <KleiderspendenFormular @bestätige-Spende="bestätigeSpende"/>
        <Bestätigung :Spende="Spende" :Datum="Datum"/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary border" data-bs-dismiss="modal">Beenden</button>
      </div>
    </div>
  </div>
</div>

<section class="pt-4 pb-3 text-light border-top border-bottom border-3 mb-5" style="background-color: rgb(177, 99, 99);">
  <div class="container-fluid mx-auto">
    <div class="text-start">
      <h5 class="fw-bold">So einfach geben Sie eine Spende ab:</h5>
    </div>
    <div class="d-sm-flex justify-content-center align-items-center mt-4">
      <div class="col-md-4 container d-flex justify-content-md-center align-items-center m-1">
        <img src="https://cdn3.iconfinder.com/data/icons/delivery-and-logistics/24/iconfinder-67-1024.png" class="d-none d-sm-block" style="width: 35%; height: auto,">
        <div class="m-md-3">
          <h6>1. Formular ausfüllen</h6>
          <p class="small fw-light">Kurze Erfassung der Kontaktdaten und Auswahl der Kleidung</p>
        </div>
      </div>
      <div class="col--md-4 container d-flex align-items-center justify-content-md-center m-1">
        <img src="https://cdn0.iconfinder.com/data/icons/let-s-promote-peace-line/32/line-Peace_t-512.png" class="d-none d-sm-block" style="width: 35%; height: auto,">
        <div class="m-md-3">
          <h6>2. Krisengebiet auswählen</h6>
          <p class="small fw-light">Suchen Sie Ihr Krisengebiet aus einer Auswahl aus</p>
        </div>
      </div>
      <div class="col-md-4 container d-flex align-items-center justify-content-md-center m-1">
        <img src="https://cdn0.iconfinder.com/data/icons/idol/512/idol-popular-famous-13-512.png" class="d-none d-sm-block" style="width: 35%; height: auto,">
        <div class="m-md-3">
          <h6>3. Menschen helfen!</h6>
          <p class="small fw-light">Helfen Sie Menschen in der Not</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="my-5" id="Krisengebiet">
  <div class="text-light text-start border border-3 pb-5" style="background-color: rgb(177, 99, 99);">
    <div class="py-3 text-center">
      <h3 class="fw-bold">Beispiele aktueller Krisengebiete:</h3>
    </div>
  <div id="carouselExampleDark" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner border-top border-bottom">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="https://www.rescue.org/sites/default/files/styles/landscape_4x3_1024px_wide/public/2022-12/20221018%20Ukraine%20DZAlhindawi%20Dnipro%20legal-03258-Edited-1200x800-5b2df79.jpg?itok=0rEeZ8ib" class="d-block w-100 img" alt="...">
      <div class="carousel-caption text-light">
        <h2>Ukraine</h2>
        <p>Krieg führt zur größten Vertreibungskrise der Welt</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://media.unsertirol24.com/uploads/2019/11/75270011451592026_BLD_Online.jpg" class="d-block w-100 img" alt="...">
      <div class="carousel-caption text-light">
        <h2>Irak</h2>
        <p>Bandengewalt und Klimawandel sorgen für Chaos</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://www.rescue.org/sites/default/files/styles/landscape_4x3_1024px_wide/public/2022-12/20210918%20NW%20Syria%20Swasan%201205-1200x800-5b2df79.jpg?itok=o0j_KcS_" class="d-block w-100 img" alt="...">
      <div class="carousel-caption text-light">
        <h2>Syrien</h2>
        <p>Jahrelanger Krieg löst eine Wirtschaftskrise aus</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  </div>
</div>
</section>

<section id="about" class="p-5">
      <div class="container">
        <h1 class="text-center fw-bold text-light">Über uns</h1>
        <p class="lead text-center text-white mb-5">
          Wir sind ein kleines ehrenamtliches Team, welches versucht die <span style="color: rgb(0, 0, 0);">Krisenregionen</span> dieser Welt zu unterstützen.
        </p>
        <div class="row g-4">
          <div class="col-lg-6">
            <div class="card bg-light">
              <div class="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/men/10.jpg"
                  class="rounded-circle mb-3"
                  alt=""
                />
                <h3 class="card-title mb-3" style="color: rgb(177, 99, 99);">Fabian Gräml</h3>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="card bg-light">
              <div class="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/women/11.jpg"
                  class="rounded-circle mb-3"
                  alt=""
                />
                <h3 class="card-title mb-3" style="color: rgb(177, 99, 99);">Jane Doe</h3>
              </div>
            </div>
          </div>
          </div>
          </div>
</section>


</div>
</main>
</template>

<script>
import KleiderspendenFormular from "../components/KleiderspendenFormular.vue"
import Bestätigung from "../components/Bestätigung.vue"


export default {
    name: "Home",
    components: { 
        KleiderspendenFormular,
        Bestätigung,
    },
    data() {
        return{
            Spende: "",
            Datum: "",
        }
    },
    methods: {
        bestätigeSpende(spende) {
          this.Spende = spende;

          var Zeitpunkt = new Date();
          var AbgabeZeitpunkt = Zeitpunkt.toLocaleString();
          this.Datum = AbgabeZeitpunkt;

          var modalBestätigung = new bootstrap.Modal(document.getElementById("Bestätigung"), {
            keyboard: false
          });
          modalBestätigung.show();
        }
    }
}
</script>

<style scoped>
.img{
  @media only screen and (min-width: 1150px) {
    height: 700px;
  }
  @media only screen and (max-width: 1150px) {
    height: 480px;
  }
  @media only screen and (max-width: 800px) {
    height: 300px;
  }
}
</style>