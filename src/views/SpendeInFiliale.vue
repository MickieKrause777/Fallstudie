
<template>
    <div style="padding-top: 114px;">
        <KleiderspendenFormular @bestätige-Spende="bestätigeSpende"></KleiderspendenFormular>
        <Bestätigung :Spende="Spende" :Datum="Datum"/>
    </div>
</template>

<script>
import KleiderspendenFormular from '../components/KleiderspendenFormular.vue';
import Bestätigung from "../components/Bestätigung.vue"

export default {
    name: "SpendeInFiliale",
    components:{
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
