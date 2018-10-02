<template>

  <v-app light>
    <v-content style="margin-top: 30px" class="content">
      <h1 class="headline"> Labbrock.</h1>

      <p>
        Life Science of the future is here – more important than ever – and Sweden should be pioneer in lab
        communication in 2020. Labbrock [labb-rock] is the Swedish slang expression for white coat named to give a
        strong association to Life Science Sweden. The vision of Labbrock is to do our best to make that happen –
        together with our brave customers – based on a social innovation with costickers.
      </p>

      <p>
        The use of costickers as a coworking tool in a accelerated, focused and helpful approach while encourage social
        sustainability is unique – especially within labs and Life Science.
      </p>
      <br>


      <v-list light subheader>
        <v-list-tile
          v-for="item in items"
          :key="item"
        >
          <v-list-tile-action>
            <v-icon small color="#bc8f8f">favorite</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title v-html="item"/>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>


      <br>
      <h4>
        Launching soon
      </h4>

      <p>
        Let’s get coinspired by follow <a class="co" href="https://instagram.com/go.labbrock" target="_blank">@go.labbrock</a>.
        <br>To learn more feel free to contact <a class="co" href="mailto:hello@labbrock.com?Subject=Hello"
                                                  target="_top">hello@labbrock.com</a>.
        <br>
        <span class="co">#lifesciencecostickers</span>

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
          'Encourage social sustainability',
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