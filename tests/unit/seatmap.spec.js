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
  expect(wrapper.findAllComponents(Seat).filter((w) => w.attributes('data-has-order')).length).toBe(7);
});

test('can have custom colors', () => {
  // This test uses rgb instead of hex codes because vue seems to automatically
  // convert hex codes to rgb when passing them as a :style prop.
  // This is to avoid having to write a hexToRGB function.
  const color = 'rgb(38, 43, 55)';

  const customColorScheme = {
    ranks: {
      rank1: color,
    },
  };

  const customLayout = {
    ranks: ['rank1', 'rank2', 'rank3'],
    sections: [
      {
        name: 'test',
        rows: [
          {
            row: '1',
            seats: [
              { seat: '1', rank: 'rank1' },
              { seat: '2', rank: 'rank1' },
              { seat: '3', rank: 'rank1' },
            ],
          },

        ],
      },
    ],
  };

  const wrapper = mount(SeatMap, {
    propsData: {
      map: customLayout,
      groups,
      colors: customColorScheme,
    },
  });

  // Expect to the color to be assigned to every seat with rank 1
  const styles = wrapper.findAllComponents(Seat).at(0).attributes().style;

  const backgroundStyle = styles.split(';')[0];

  expect(backgroundStyle).toBe(`background-color: ${color}`);
});
