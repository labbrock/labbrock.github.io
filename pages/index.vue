<template>

  <v-app dark>
    <v-content style="margin-top: 30px" class="content">
      <h1 class="headline">Labbrock - <span class="co">co</span>:stickers 2020</h1>

      <p>
        Sweden should be pioneer in lab communication in 2020.
        <i>Labbrock [labb-rock]</i> is the Swedish slang expression for white coat named to give a strong
        association to Life Science Sweden. The vision of Labbrock is to do our best to make that happen –
        together with our brave customers – based on a social innovation with <span class="co">co</span>:stickers.
      </p>

      <p>
        The use of <span class="co">co</span>:stickers as a <span class="co">co</span>:working tool in a accelerated
        and
        focused approach while encourage
        social sustainability is unique – especially within labs and Life Science. Also, environmental
        sustainability responsibility takes seriously with on demand eco printing of the <span class="co">co</span>:stickers
        made
        from eco papers together with eco shipping.
      </p>


      <v-list dark subheader>
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
        Follow our journey on
        <a class="co" href="https://instagram.com/go.labbrock"
           target="_blank">@go.labbrock</a>
        to get
        <span class="co">co</span>:inspired or <br>contact us on
        <a class="co"
           href="mailto:hello@labbrock.com?Subject=Hello"
           target="_top">hello@labbrock.com</a>.
      </p>
    </v-content>
    <v-footer
      dark
      height="auto"
    >
      <v-card
        class="flex"
        flat
        tile
      >
        <v-card-actions class="justify-center">
          &copy;2018 <strong>Labbrock</strong>
        </v-card-actions>
      </v-card>
    </v-footer>
  </v-app>


</template>

<style scoped>

  .co {
    color: #bc8f8f;
    font-weight: 800;
  }

  h1 {
    margin-bottom: 16px;
    font-size: 24px !important;
  }

  .theme--dark.v-list {
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
        icons: [
          'fab fa-facebook',
          'fab fa-twitter',
          'fab fa-google-plus',
          'fab fa-linkedin',
          'fab fa-instagram'
        ],
        items: [
          {title: 'Encourage social sustainability'},
          {title: 'Accelerate and focus your co:working'},
          {title: 'Employer branding and marketing tool'},
          {title: 'Make your work culture stand out'},
          {title: 'Faster inclusion and onboarding of new hires'},
          {title: 'Better involve weak speakers and introvert talents'},
          {title: 'Inspire the scientists of tomorrow'},
        ].map(d => d.title.toLowerCase())
      }
    }
  }
</script>