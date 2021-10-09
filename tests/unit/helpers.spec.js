import { randomColor, groupBy } from '@/lib/helpers';

test('randomColor() returns a random hex color code', () => {
  const hexColorRegex = '^#(?:[0-9a-fA-F]{3}){1,2}$';

  expect(randomColor()).toMatch(new RegExp(hexColorRegex));
});

test('groupBy() to correctly group an array by a key', () => {
  const array = [
    {
      id: '1',
      name: 'john doe',
      placement: 'first',
    },
    {
      id: '2',
      name: 'john doe',
      placement: 'second',
    },
    {
      id: '3',
      name: 'john doe',
      placement: 'first',
    },
  ];

  expect(groupBy(array, 'placement').first.length).toBe(2);
  expect(groupBy(array, 'placement').second.length).toBe(1);
  expect(Object.keys(groupBy(array, 'placement'))).toContain('first');
  expect(Object.keys(groupBy(array, 'placement'))).toContain('second');
});
