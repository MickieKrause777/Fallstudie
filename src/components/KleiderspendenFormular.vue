<template>
    <form @submit.prevent="abgebenSpende" class="p-3 text-light" style="background-color: rgb(177, 99, 99);">
        <h4>Persönliche Daten</h4>
        <div class="row m-1">
          <div class="col-sm-6 my-1">
            <label for="Vorname" class="form-label">Vorname</label>
            <input id="Vorname" type="text" class="form-control" required v-model="Vorname">
          </div>
          <div class="col-sm-6 my-1">
            <label for="Nachname" class="form-label">Nachname</label>
            <input id="Nachname" type="text" class="form-control" required v-model="Nachname">
          </div>
          <div class="col-sm-4 my-1">
            <label for="Land" class="form-label">Land</label>
            <input id="Land" type="text" class="form-control" required v-model="Land">
          </div>
          <div class="col-sm-3 my-1">
            <label for="PLZ" class="form-label">PLZ</label>
            <input id="PLZ" type="text" class="form-control" required v-model="PLZ">
          </div>
          <div class="col-sm-5 my-1">
            <label for="Ort" class="form-label">Ort</label>
            <input id="Ort" type="text" class="form-control" required v-model="Ort">
          </div>
          <div class="col-sm-9 my-1">
            <label for="Straße" class="form-label">Straße</label>
            <input id="Straße" type="text" class="form-control" required v-model="Straße">
          </div>
          <div class="col-sm-3 my-1">
            <label for="Hausnummer" class="form-label">Nr.</label>
            <input id="Hausnummer" type="text" class="form-control" required v-model="Hausnummer">
          </div>
          <div class="col-sm-6 my-1">
            <label for="Telefonnummer" class="form-label">Telefonnummer</label>
            <input id="Telefonnummer" type="text" class="form-control" required v-model="Telefonnummer">
          </div>
          <div class="col-sm-6 my-1">
            <label for="Email" class="form-label">E-Mail</label>
            <input id="Email" type="text" class="form-control" required v-model="Email">
          </div>
        </div>

        <hr class="m-3">
                          
        <div class="formcheck mb-3 d-flex gap-2" @click="toggleAbholung" v-if="!inGS">
          <input id="Abholung" name="AbholungLieferung" type="radio" class="form-check-input fs-5" required>
          <label for="Abholung" class="form-check-label fs-5">Abholung per Sammelfahrzeug</label>
        </div>

        <div class="my-2 mx-4" v-show="zeigeAbholung">
          <div class="form-check">
            <input id="gleicheAdresse" name="Abholung" type="radio" class="form-check-input" @click="hideAndereAdresse">
            <label for="gleicheAdresse">Abholungsadresse ist identisch mit Wohnort</label>
          </div>
          <div class="form-check">
            <input id="andererOrt" name="Abholung" type="radio" class="form-check-input" @click="zeigeAndereAdresse">
            <label for="andererOrt">andere Adresse</label>
          </div>
        </div>

        <div class="class row m-1" v-show="andereAdresse">
          <div class="row">
            <div class="col-sm-4 my-1">
              <label for="anderesLand" class="form-label">Land</label>
              <input id="anderesLand" type="text" class="form-control">
            </div>
            <div class="col-sm-3 my-1">
              <label for="anderePLZ" class="form-label">PLZ</label>
              <input id="anderePLZ" type="text" class="form-control" v-model="anderePLZ">
            </div>
            <div class="col-sm-5 my-1">
              <label for="andererOrt" class="form-label">Ort</label>
              <input id="andererOrt" type="text" class="form-control" v-model="andererOrt">
            </div>
            <div class="col-sm-9 my-1">
              <label for="andereStraße" class="form-label">Straße</label>
              <input id="andereStraße" type="text" class="form-control" v-model="andereStraße">
            </div>
            <div class="col-sm-3 my-1">
              <label for="andereHausnummer" class="form-label">Nr.</label>
              <input id="andereHausnummer" type="text" class="form-control" v-model="andereHausnummer">
            </div>
          </div> 
        </div> 

        <div class="formcheck d-flex gap-2" @click="toggleGeschäftsstellen">
          <input id="Abgabe" name="AbholungLieferung" type="radio" class="form-check-input fs-5" required>
          <label for="Abgabe" class="form-check-label fs-5">persönliche Abgabe in Geschäftsstelle</label>
        </div>
        <div v-show="zeigeGS">
          <select class="form-select m-2" v-model="GeschäftsstellePLZ">
            <option disabled value="">Wähle eine Geschäftsstelle</option>
            <option value="92224">Amberg</option>
          </select>
        </div>

        <div v-if="ungleichePLZ" class="Fehler rounded-pill">{{ ungleichePLZ }}</div>

        <hr class="m-3">

        <h4>Kleidung</h4>
        <div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" value="Mützen" v-model="Kleidung">
            <label>Mützen</label>
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" value="Jacken" v-model="Kleidung">
            <label>Jacken</label>
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" value="T-Shirts" v-model="Kleidung">
            <label>T-Shirts</label>
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" value="Sweatshirts/Pullover" v-model="Kleidung">
            <label>Sweatshirts/Pullover</label>
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" value="Hosen" v-model="Kleidung">
            <label>Hosen</label>
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" value="Schuhe" v-model="Kleidung">
            <label>Schuhe</label>
          </div>
        </div>
        <div v-if="FehlerKleidung" class="Fehler rounded-pill">{{ FehlerKleidung }}</div>

        <hr class="m-3">
        
        <h4>Krisengebiet</h4>

        <select class="form-select" v-model="Krisengebiet" required>
          <option value="Ukraine">Ukraine</option>
          <option value="Jemen">Jemen</option>
          <option value="Syrien">Syrien</option>
          <option value="Irak">Irak</option>
          <option value="Indien">Indien</option>
        </select>

        <hr class="my-3">

        <div class="m-1">
          <label for="Bemerkungen" class="form-label">Ergänzende Bemerkungen</label>
          <textarea class="form-control" id="Bemerkungen" rows="3" v-model="Bemerkungen"></textarea>
        </div>

        <hr class="my-3">

        <div class="form-check">
            <input type="checkbox" class="form-check-input" required>
            <label>Ich akzeptiere die Nutzungsbedingungen</label>
        </div>
        
        <hr class="my-3">

        <div v-if="ungleichePLZ" class="Fehler rounded-pill">{{ ungleichePLZ }}</div>

        <div class="text-center">
          <button class="btn btn-primary rounded-pill p-3 mt-3">Spende abschließen</button>
        </div>
    </form>
</template>

<script>

export default {
  name: "Kleiderspendenformular",
    data(){
      return {
        Vorname: "",
        Nachname: "",
        Land: "",
        PLZ: "",
        Ort: "",
        Straße: "",
        Hausnummer: "",
        Telefonnummer: "",
        Email:"",
        gleicheAdresse: false,
        anderePLZ: "",
        andererOrt: "",
        andereStraße: "",
        andereHausnummer: "",
        GeschäftsstellePLZ: "92224",
        Kleidung: [],
        Krisengebiet: "",
        zeigeGS: false,
        zeigeAbholung: false,
        andereAdresse: false,
        ungleichePLZ: "",
        FehlerKleidung: "",
        Bemerkungen: "",
      }
     },
     methods: {
      toggleGeschäftsstellen() {
        this.zeigeGS = !this.zeigeGS
        if(this.zeigeGS = true){
          document.getElementById("gleicheAdresse").checked = false;
          document.getElementById("andererOrt").checked = false;
        }
      },
      toggleAbholung() {
        this.zeigeAbholung =!this.zeigeAbholung
        if(this.zeigeAbholung = true){
          document.getElementById("gleicheAdresse").checked = true;
        }
        this.zeigeGS = false
      },
      zeigeAndereAdresse() {
        this.andereAdresse = true
        document.getElementById("Abgabe").checked = false;
      },
      hideAndereAdresse() {
        this.andereAdresse = false
      },
      abgebenSpende() {
        if(this.Kleidung == ""){
          this.FehlerKleidung = "Wähle mindestens ein Kleidungsstück aus"
          return
        }
        if(this.anderePLZ != ""){
          if(this.GeschäftsstellePLZ.substring(0, 2) !== this.anderePLZ.substring(0, 2)) {
          this.ungleichePLZ = "Abholadresse muss in der Nähe von der Geschäftsstelle sein"
          return
          }
          const newSpende = {
          Vorname: this.Vorname,
          Nachname: this.Nachname,
          Land: this.Land,
          PLZ: this.anderePLZ,
          Ort: this.andererOrt,
          Straße: this.andereStraße,
          Hausnummer: this.andereHausnummer,
          Telefonnummer: this.Telefonnummer,
          Email: this.Email,
          Kleidung: this.Kleidung,
          Krisengebiet: this.Krisengebiet,
          Bemerkungen: this.Bemerkungen,
          }
          this.$emit("bestätige-Spende", newSpende)
        }
        if(this.anderePLZ == ""){
          if(this.zeigeAbholung == true){
          if(this.GeschäftsstellePLZ.substring(0, 2) !== this.PLZ.substring(0, 2)) {
          this.ungleichePLZ = "Abholadresse muss in der Nähe von der Geschäftsstelle sein"
          return
          }
          }
          const newSpende = {
          Vorname: this.Vorname,
          Nachname: this.Nachname,
          Land: this.Land,
          PLZ: this.PLZ,
          Ort: this.Ort,
          Straße: this.Straße,
          Hausnummer: this.Hausnummer,
          Telefonnummer: this.Telefonnummer,
          Email: this.Email,
          Kleidung: this.Kleidung,
          Krisengebiet: this.Krisengebiet,
          Bemerkungen: this.Bemerkungen,
        }
          this.$emit("bestätige-Spende", newSpende)
      }
     },
    },
    computed:{
      inGS(){
        return this.$route.name === "SpendeInFiliale"
      }
    }
}
</script>

<style scoped>
.Fehler {
  color:rgb(114, 55, 55);
  background: salmon;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
  text-align: center;
}
</style>