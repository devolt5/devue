import NavBar from "@/components/NavBar";
import Vuetify from "vuetify";
import { shallowMount } from "@vue/test-utils";

describe("NavBar.vue", () => {

  // we need Vuetify for breakpoints etc.
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("should mount correctly", () => {
    // TODO to use "mount" we have to take care of router-link etc.
    const wrapper = shallowMount(NavBar, {
      // this is the way to mock vuetify objects
      // mocks: {
      //   $vuetify: { breakpoint: {} }
      // },
      vuetify
    });
    expect(wrapper.vm).toBeTruthy();
  });
});
