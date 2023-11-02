<template>
<div class="modal fade modal-sm" id="Bestätigung" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="Bestätigung" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content" style="background-color: #523838; color: white">
      <div class="modal-header">
        <h1 class="modal-title fs-5">Spendenbestätigung</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-start">
        <div>
          <p>Ihre Spende wurde erfolgreich abgegeben!</p>
          <p class="fs-light small">Abgabezeitpunkt: {{ Datum }}</p>
        </div>
        <hr>
        <div>
          <p>Name: {{ Spende.Vorname }} {{ Spende.Nachname }}</p>
          <p>Adresse: {{ Spende.Straße }} {{ Spende.Hausnummer }}, {{ Spende.PLZ }} {{ Spende.Ort }}</p>
          <p>Kontaktdaten: {{ Spende.Telefonnummer }}, {{ Spende.Email }}</p>
          <p>Kleidungsstücke: <li v-for="Teil in Spende.Kleidung">{{ Teil }}</li></p>
          <p>Krisengebiet: {{ Spende.Krisengebiet }}</p>
          <p>Bemerkungen: {{ Spende.Bemerkungen }}</p>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Beenden</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "Bestätigung",
        props: {
            Spende: "",
            Datum: "",
        },
}
</script>