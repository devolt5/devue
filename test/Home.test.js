import Home from "@/components/Home";
import { createLocalVue, mount, shallowMount } from "@vue/test-utils";

describe("CustomCard.vue", () => {

  // TODO make clear, if these lines are needed later on
  // const localVue = createLocalVue();
  // let vuetify;

  // beforeEach(() => {
  //   vuetify = new Vuetify();
  // });

  const $t = () => {};

  it("should mount correctly", () => {
    // can use "shallowMount" also, but "mount" covers more
    const wrapper = mount(Home, { 
      mocks: { $t },
      // localVue,
      // vuetify
    });
    expect(wrapper.vm).toBeTruthy();
  });
});
