<template>
    <div class="text-center text-lg-start border-top" style="background-color: rgb(177, 99, 99);">
          <div class="d-flex justify-content-center justify-content-lg-between pt-3 border-bottom ">
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto text-light">
              <h6 class="text-uppercase fw-bold mb-4">
                Hilfreiche Links
              </h6>
              <p>
                <router-link to="/SpendeInFiliale" class="text-reset">Spende in der Geschäftsstelle!</router-link>
              </p>
              <p>
                <router-link to="/Datenschutz" class="text-reset">Datenschutz</router-link>
              </p>
              <p>
                <router-link to="/Impressum" class="text-reset">Impressum</router-link>
              </p>
            </div>
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-1 text-light">
              <h6 class="text-uppercase fw-bold">Kontakt</h6>
              <p>Teststraße 1, 92224 Amberg</p>
              <p>kontakt@ksk-spenden.com</p>
              <p>09621/123-4</p>
            </div>
        </div>
        <div class="text-center p-2 text-light">
          © 2023 Copyright:
          <router-link class="text-reset fw-bold" to="/">KSK Kleiderspenden für Krisenregionen e.V.</router-link>
        </div>
    </div>
</template>

<script>
export default{
    name: "Footer",
}
</script>