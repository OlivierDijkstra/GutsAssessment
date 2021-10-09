import { mount } from '@vue/test-utils';
import SeatMap from '@/components/SeatMap.vue';
import SeatRow from '@/components/SeatRow.vue';
import Seat from '@/components/Seat.vue';
import { layout, groups } from '@/assets/data';

test('renders with map props', () => {
  const wrapper = mount(SeatMap, {
    propsData: {
      map: layout,
    },
  });

  // Expect the html of <SeatMap /> to contain the first sections's name.
  expect(wrapper.html()).toContain(layout.sections[0].name);
  // Expect total amount of seat rows available to be 27
  expect(wrapper.findAllComponents(SeatRow).length).toBe(5);
  // Expect total amount of seats available to be 27
  expect(wrapper.findAllComponents(Seat).length).toBe(27);
});

test('renders with order props', () => {
  const wrapper = mount(SeatMap, {
    propsData: {
      map: layout,
      groups,
    },
  });

  // Expect total amount of seats available to be 27
  expect(wrapper.findAllComponents(Seat).length).toBe(27);
  // Expect the total amount of <Seat/> components that have a order or group attached to be 8
  expect(wrapper.findAllComponents(Seat).filter((w) => w.attributes('data-has-order')).length).toBe(8);
});
