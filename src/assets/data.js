const layout = {
  ranks: ['rank1', 'rank2', 'rank3'],
  sections: [
    {
      name: '1st balcony',
      rows: [
        {
          row: '1',
          seats: [
            { seat: '3', rank: 'rank1' },
            { seat: '5', rank: 'rank1' },
            { seat: '6', rank: 'rank1' },
            { seat: '4', rank: 'rank1' },
            { seat: '2', rank: 'rank1' },
          ],
        },
        {
          row: '2',
          seats: [
            { seat: '1', rank: 'rank1' },
            { seat: '3', rank: 'rank1' },
            { seat: '5', rank: 'rank1' },
            { seat: '6', rank: 'rank1' },
            { seat: '4', rank: 'rank1' },
            { seat: '2', rank: 'rank1' },
          ],
        },
      ],
    },
    {
      name: 'main hall',
      rows: [
        {
          row: '1',
          seats: [
            { seat: '1', rank: 'rank1' },
            { seat: '3', rank: 'rank1' },
            { seat: '4', rank: 'rank1' },
            { seat: '2', rank: 'rank1' },
          ],
        },
        {
          row: '2',
          seats: [
            { seat: '1', rank: 'rank1' },
            { seat: '3', rank: 'rank1' },
            { seat: '5', rank: 'rank1' },
            { seat: '6', rank: 'rank1' },
            { seat: '4', rank: 'rank1' },
            { seat: '2', rank: 'rank1' },
          ],
        },
        {
          row: '3',
          seats: [
            { seat: '1', rank: 'rank2' },
            { seat: '3', rank: 'rank2' },
            { seat: '5', rank: 'rank2' },
            { seat: '6', rank: 'rank2' },
            { seat: '4', rank: 'rank2' },
            { seat: '2', rank: 'rank2' },
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
      { section: 'main hall', row: '1', seat: '4' },
      { section: 'main hall', row: '1', seat: '2' },
      { section: 'main hall', row: '2', seat: '2' },
      { section: 'main hall', row: '2', seat: '4' },
    ],
  },
  {
    id: '+31622222222',
    seats: [
      { section: 'main hall', row: '2', seat: '6' },
      { section: 'main hall', row: '2', seat: '5' },
    ],
  },
  {
    id: '+31633333333',
    seats: [
      { section: '1st balcony', row: '2', seat: '2' },
      { section: 'main hall', row: '3', seat: '2' },
    ],
  },
];

export { layout, groups };
