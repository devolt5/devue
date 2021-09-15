<template>
  <v-app>
      <v-app-bar
      app
      flat
      style="position: absolute; z-index: 10"
      color="primary lighten-2"
      class="desktop-bar hidden-sm-and-down"
      height="100"
    >
      <v-img
        class="float-left pt-3"
        :src="require('@/assets/logo.png')"
        contain
        max-height="80"
        max-width="280"
      />
    </v-app-bar>
    <v-app-bar
      app
      flat
      style="position: absolute; z-index: 10"
      color="primary lighten-2"
      class="mobile-bar hidden-md-and-up"
      height="120"
    >
      <v-img
        class="float-left pt-3 mobile-logo"
        :src="require('@/assets/logo.png')"
        max-width="100px"
        min-height="100px"
      />
    </v-app-bar>
    <v-app-bar
      app
      color="primary lighten-2"
      style="position: relative"
      class="hidden-sm-and-down mt-15"
    >
      <template v-slot:extension>
        <v-item-group>
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
    <v-app-bar app color="primary lighten-2" style="margin-top: 7.5em; position: relative;" class="hidden-md-and-up">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>SCDH Mobile title</v-app-bar-title>
    </v-app-bar>

    <v-navigation-drawer style="margin-top: 7.5em;" v-model="drawer" absolute left temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
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
    group: null,
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
  created: function () {
    this.$vuetify.lang.current = "de";
  },
  methods: {
    changeLang: function () {
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
