<template>

  <v-app light>
    <v-content style="margin-top: 30px" class="content">
      <h1 class="headline"> Labbrock.</h1>

      <p>
        <i>
          "The fusion of verbal and non-verbal is the lab communication of tomorrow."
        </i>
        - Jenny M.L, Labbrock
      </p>


      <p>
        Life Science of the future is here – more important than ever – and Sweden should take the opportunity to become
        pioneers in lab communication. Labbrock [labb-rock] is the Swedish slang expression for white coat named to give
        a strong association to the Swedish Life Science. Our vision is to do our best to make it happen – together with
        our customers – based on a social innovation with costickers. Come join our journey now! All we require from you
        is a courage and willingness to be part of the new way of coworking in Life Science.

        <br><br>
        To learn more now feel free
        to contact <a class="co" href="mailto:hello@labbrock.com?Subject=Hello" target="_top">hello@labbrock.com</a>.
      </p>



      <p>
        <span class="co">#swedishlifescience</span>
        <span class="co">#labbrock2020</span>
      </p>
    </v-content>
    <v-footer
      dark
      light
      height="auto"
    >
      <v-card
        class="flex"
        flat
        tile
      >
        <v-card-actions class="justify-center">
          &copy;2018 Labbrock
        </v-card-actions>
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