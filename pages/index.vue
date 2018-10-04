<template>

  <v-app light>
    <v-content style="margin-top: 30px" class="content">
      <h1 class="headline"> Labbrock.</h1>

      <p>
        Sweden should be pioneer in lab communication within 2021. The vision of Labbrock is to do our best to make that happen – together with you as a customer – based on a social innovation with costickers. We attach value of keeping up the social dimension. That is why we initially have chosen not to sell the costickers online to give us a unique opportunity to get to known your needs.
      </p>

      <p>
        We will start the journey in Life Science West. We are open-minded to collaborate with all companies, research teams, university educations and health tech ecosystems that have a courage and willingness to be a part of the new way of coworking and communicate in labs.
      </p>

      <p>
        Coactions Labbrock can do: encourage social sustainability, accelerate and focus coworking, tool for employer branding and marketing, make work culture stand out, faster inclusion and on-boarding, better involve weak speakers and introvert talents, inspire and attract talents of tomorrow.
      </p>

      <br>


      <p>
        To learn more please share your contact information at <a class="co" href="mailto:hello@labbrock.com?Subject=Hello"
                                                                  target="_top">hello@labbrock.com</a>.
        <br>
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