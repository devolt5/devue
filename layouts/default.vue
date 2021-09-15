<template>
  <v-app>
    <v-app-bar flat color="primary lighten-2" height="80">
      <v-img
        :src="require('@/assets/logo.png')"
        contain
        max-height="80"
        max-width="280"
      />
    </v-app-bar>
    <v-navigation-drawer class="hidden-sm-and-up" v-model="sidebar" app>
      <v-list nav dense>
        <v-list-item-group active-class="grey--text">
          <v-list-item
            v-for="item in nav"
            :key="item.icon"
            :to="item.path"
            :title="item.title"
            text
            >{{ item.text }}</v-list-item
          >
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar height="10">
      <template v-slot:extension>
        <span class="hidden-sm-and-up">
          <v-app-bar-nav-icon @click="sidebar = !sidebar"> </v-app-bar-nav-icon>
        </span>
        <v-item-group class="hidden-xs-only">
          <v-btn
            v-for="item in nav"
            :key="item.icon"
            :to="item.path"
            :title="item.title"
            text
            >{{ item.text }}</v-btn
          >
        </v-item-group>
        <v-spacer></v-spacer>
        <v-checkbox
          class="mt-3"
          v-model="$vuetify.theme.dark"
          off-icon="mdi-brightness-2"
          on-icon="mdi-brightness-5"
        ></v-checkbox>
        <v-btn v-on:click="changeLang" fab small class="mb-3 ml-3">
          {{ langBtn }}</v-btn
        >
      </template>
    </v-app-bar>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer app color="primary lighten-1">
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in nav"
          :key="link.icon"
          color="white"
          text
          rounded
          class="my-2"
        >
          {{ link.text }}
        </v-btn>
        <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import i18n from "@/plugins/i18n";

export default {
  name: "App",
  i18n,
  data: () => ({
    langBtn: "en",
    drawer: false,
    appTitle: "DeVue",
    sidebar: false,
    nav: [
      {
        icon: "home",
        text: "Home",
        path: "/",
        title: "Back to Home page",
        active: true
      },
      {
        icon: "info",
        text: "About",
        path: "/inspire",
        title: "About this demo",
        active: false
      },
      {
        icon: "assignment_turned_in",
        text: "Todos",
        title: "Some stuff that needs doing",
        active: false
      },
      {
        icon: "email",
        text: "Contact",
        title: "Our Contact info",
        active: false
      }
    ]
  }),
  watch: {
    group() {
      this.drawer = false;
    }
  },
  created: function() {
    this.$vuetify.lang.current = "de";
  },
  methods: {
    changeLang: function() {
      const currentlang = this.$vuetify.lang.current === "en" ? "de" : "en";
      this.$vuetify.lang.current = currentlang;
      i18n.locale = currentlang;
      this.langBtn = currentlang === "en" ? "de" : "en"; //anticyclical
    }
  }
};
</script>

<style scoped>
.mobile-logo >>> .v-image__image {
  background-position: -94px 7px !important;
  background-size: 310px !important;
}
</style>
