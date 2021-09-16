import Home from "@/components/Home";
import Vuetify from "vuetify";
import { createLocalVue, shallowMount } from "@vue/test-utils";

describe("Home.vue", () => {
  const localVue = createLocalVue();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  // needed for i18n
  const $t = () => {};

  it("should mount correctly", () => {
    const wrapper = shallowMount(Home, {
      mocks: { $t },
      localVue,
      vuetify,
    });
    expect(wrapper.vm).toBeTruthy();
  });
});
