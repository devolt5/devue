<template>
  <div>
    <v-app-bar flat color="primary lighten-2" height="80">
      <v-img
        src="_nuxt/assets/logo.png"
        contain
        max-height="80"
        max-width="280"
      />
    </v-app-bar>
    <v-navigation-drawer v-model="sidebar" class="hidden-sm-and-up" app>
      <v-list nav dense>
        <v-list-item-group active-class="grey--text">
          <v-list-item
            v-for="item in nav"
            :key="item.icon"
            :to="item.path"
            :title="item.title"
            text
          >
            {{ item.text }}
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar height="10">
      <template #extension>
        <span class="hidden-sm-and-up">
          <v-app-bar-nav-icon @click="sidebar = !sidebar" />
        </span>
        <v-item-group class="hidden-xs-only">
          <v-btn
            v-for="item in nav"
            :key="item.icon"
            :to="item.path"
            :title="item.title"
            text
          >
            {{ item.text }}
          </v-btn>
        </v-item-group>
        <v-spacer />
        <v-checkbox
          v-model="$vuetify.theme.dark"
          class="mt-3"
          off-icon="mdi-brightness-2"
          on-icon="mdi-brightness-5"
        />
        <v-btn
          v-for="locale in availableLocales"
          :key="locale.code"
          fab
          small
          class="mb-3 ml-3"
          @click.prevent.stop="$i18n.setLocale(locale.code)"
        >
          {{ locale.code }}
        </v-btn>
      </template>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: ["localeCode"],
  data: () => ({
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
        path: "/about",
        title: "About this demo",
        active: false
      },
      {
        icon: "assignment_turned_in",
        text: "Todos",
        path: "/todos",
        title: "Some stuff that needs doing",
        active: false
      },
      {
        icon: "email",
        text: "Contact",
        path: "/contact",
        title: "Our Contact info",
        active: false
      }
    ]
  }),
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale);
    }
  }
};
</script>
