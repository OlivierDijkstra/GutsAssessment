import { mount } from '@vue/test-utils';
import SeatMap from '@/components/SeatMap.vue';
import SeatRow from '@/components/SeatRow.vue';
import Seat from '@/components/Seat.vue';
import { layout as sampleLayout, groups as sampleGroups } from '@/assets/data';

// This test uses rgb instead of hex codes because vue seems to automatically
// convert hex codes to rgb when passing them as a :style prop.
// This is to avoid having to write a hexToRGB function.
const color = 'rgb(38, 43, 55)';

const layout = {
  ranks: ['rank1', 'rank2'],
  sections: [
    {
      name: 'main',
      rows: [
        {
          row: '1',
          seats: [
            { seat: '1', rank: 'rank1' },
            { seat: '2', rank: 'rank1' },
            { seat: '3', rank: 'rank1' },
          ],
        },
        {
          row: '2',
          seats: [
            { seat: '1', rank: 'rank2' },
            { seat: '2', rank: 'rank2' },
            { seat: '3', rank: 'rank2' },
          ],
        },
      ],
    },
  ],
};

const groups = [
  {
    id: '+31611111111',
    seats: [
      { section: 'main', row: '1', seat: '1' },
    ],
  },
];

describe('Rendering', () => {
  test('renders with map props', () => {
    const wrapper = mount(SeatMap, {
      propsData: {
        map: layout,
      },
    });

    // Expect the html of <SeatMap /> to contain the first sections's name.
    expect(wrapper.html()).toContain('main');
    // Expect total amount of seat rows available to be 2
    expect(wrapper.findAllComponents(SeatRow).length).toBe(2);
    // Expect total amount of seats available to be 6
    expect(wrapper.findAllComponents(Seat).length).toBe(6);
  });

  test('renders with order props', () => {
    const wrapper = mount(SeatMap, {
      propsData: {
        map: layout,
        groups,
      },
    });

    // Expect total amount of seats available to be 6
    expect(wrapper.findAllComponents(Seat).length).toBe(6);
    // Expect the total amount of <Seat/> components that have a order or group attached to be 1
    expect(wrapper.findAllComponents(Seat).filter((w) => w.attributes('data-has-order')).length).toBe(1);
  });

  test('renders with sample data', () => {
    const wrapper = mount(SeatMap, {
      propsData: {
        map: sampleLayout,
        groups: sampleGroups,
      },
    });

    // Expect total amount of seats available to be 27
    expect(wrapper.findAllComponents(Seat).length).toBe(27);
    // Expect the total amount of <Seat/> components that have a order or group attached to be 7
    expect(wrapper.findAllComponents(Seat).filter((w) => w.attributes('data-has-order')).length).toBe(7);
  });
});

describe('Colors', () => {
  test('can have custom rank colors', () => {
    const customColorScheme = {
      ranks: {
        rank1: color,
      },
    };

    const wrapper = mount(SeatMap, {
      propsData: {
        map: layout,
        groups,
        colors: customColorScheme,
      },
    });

    // Expect to the color to be assigned to every seat with rank 1
    const styles = wrapper.findAllComponents(Seat).at(0).attributes().style;

    const backgroundStyle = styles.split(';')[0];

    expect(backgroundStyle).toBe(`background-color: ${color}`);
  });
  test('can have custom group colors', () => {
    const customColorScheme = {
      groups: {
        '+31611111111': color,
      },
    };

    const wrapper = mount(SeatMap, {
      propsData: {
        map: layout,
        groups,
        colors: customColorScheme,
      },
    });

    // Expect to the color to be assigned to every seat with rank 1
    const styles = wrapper.findAllComponents(Seat).at(0).attributes().style;

    const backgroundStyle = styles.split(';')[1];

    expect(backgroundStyle).toBe(` border-color: ${color}`);
  });
});
