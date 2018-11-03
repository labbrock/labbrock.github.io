<template>

  <v-app light>
    <v-content style="margin-top: 30px" class="content">
      <h1 class="headline"> Labbrock.</h1>

      <p>
        <i>
          "The lab is the heart of your innovation business."
        </i>
        – Jenny M.L, Labbrock
      </p>

      <p>
        Life Science of the future is here – more important than ever – and Sweden should take the opportunity to become
        pioneer in lab communication before 2022. Labbrock [labb-rock] is the Swedish slang expression for white coat,
        named to give a strong association to the swedish Life Science. Our goal is to inspire the power of implement
        non-verbal communication tools in labs to helping solve a fundamental problem – weak verbal lab communication –
        that will prevent the ongoing investments and coactions to strengthen the swedish Life Science to become a
        world-leading nation of the future. We are convinced that by using color marks/logic symbols it will create
        sustainable social innovations – with small efforts/high outputs – in complex work environments.
      </p>

      <ul>
        <li>encourage 360° inclusion and diversity.</li>
        <li>create social sustainability in high performance cultures.</li>
        <li>accelerating and focusing collaborations.</li>
        <li>attract external investors and talents with USP.</li>
      </ul>

      <p>
        <br>
        Come join our journey now! We will start the implementation in West Sweden. We are open-minded
        to collaborate with all companies, research teams, university educations and the upcoming ecosystem platforms.
        The color marks/logic symbols are available for free with an accompanying manual and individualised
        collaboration setup.
        <br><br>
        To learn more now feel free
        to contact <a class="co" href="mailto:hello@labbrock.com?Subject=Hello" target="_top">hello@labbrock.com</a>.
      </p>

      <p>
        <span class="co">#labbrock2022</span>
      </p>
    </v-content>

    <v-footer dark light height="auto">
      <v-card class="flex" flat tile>
        <v-card-actions class="justify-center">&copy;2018 Labbrock</v-card-actions>
      </v-card>
    </v-footer>
  </v-app>


</template>

<style scoped>

  .v-list__tile__title {
    font-size: 18px
  }

  .co {
    color: #bc8f8f;
    font-weight: 800;
  }

  li {
    font-size: 16px;
  }

  h1 {
    margin-bottom: 16px;
    font-size: 24px !important;
  }

  p {
    font-size: 16px;
  }

  .theme--light.v-list {
    background: none;
  }

  .content {
    text-align: justify;
    width: 800px;
    margin: auto;
    font-family: 'Montserrat', sans-serif !important;
    font-size: 18px !important;
  }

</style>

<script>
  export default {
    data () {
      return {
        items: [
          'encourage social sustainability',
          'Accelerate and focus your coworking',
          'Tool for employer branding and marketing',
          'Make your work culture stand out',
          'Faster inclusion and onboarding',
          'Better involve weak speakers and introvert talents',
          'Inspire and attract talents of tomorrow'
        ].map(d => d.toLowerCase())
      }
    }
  }
</script>