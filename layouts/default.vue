<template>
  <v-app>
    <NavBar :locale-code="localeCode" />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer app color="primary lighten-1">
      <v-row justify="center" no-gutters>
        <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    appTitle: "DeVue",
  }),
  created: function () {
    this.localeCode = this.$i18n.locale;
  },
};
</script>

<style scoped></style>
