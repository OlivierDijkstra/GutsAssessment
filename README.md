# Guts Assessment
Here is my application for Guts. The app consists of a simple <SeatMap> component 
which will automatically display the sample data once passed.
## Features

- Automatic layout generation
- Custom color schema's
- Legend for easy color identification
- Tooltip on hover for more details
- Unit tests
  
## Run Locally

Clone the project

```bash
  git clone  git@github.com:OlivierDijkstra/GutsAssessment.git
```

Go to the project directory

```bash
  cd guts-assessment
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run serve
```

  
## Usage/Examples

```javascript
<template>
  <div id="app">
    <SeatMap :map="{
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
        }" 
    />
  </div>
</template>

<script>
import SeatMap from './components/SeatMap.vue';

export default {
  name: 'App',
  components: {
    SeatMap,
  },
  data() {
    return {
        layout
    };
  },

};
</script>

```

  
## API Reference

| Props | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `map` | `object` | **Required**. Sample data layout |
| `groups` | `object` | Sample data groups |
| `colors` | `object` | Color schema object |

### Map
Example: 

```js
const layout = {
  ranks: ['rank1', 'rank2'],
  sections: [
    {
      name: 'main',
      rows: [
        {
          row: '1',
          seats: [
            { seat: '1', rank: 'rank2' },
            { seat: '2', rank: 'rank2' },
            { seat: '3', rank: 'rank2' },
            { seat: '4', rank: 'rank1' },
            { seat: '5', rank: 'rank1' },
          ],
        },
        {
          row: '2',
          seats: [
            { seat: '1', rank: 'rank1' },
            { seat: '2', rank: 'rank1' },
          ],
        },
      ],
    },
  ],
};
```


### Groups
Example: 

```js
const groups = [
  {
    id: '+31611111111',
    seats: [
      { section: 'main', row: '1', seat: '1' },
      { section: 'main', row: '1', seat: '1' },
      { section: 'main', row: '2', seat: '1' },
      { section: 'main', row: '2', seat: '2' },
    ],
  },
];
```

### Colors
If a color for a `group id` or `rank` is not set, a random color will be generated.

Example: 

```js
const customColorScheme = {
  ranks: {
    rank1: '#262B37',
    rank2: '#AFCBAD',
  },
  groups: {
    '+31611111111': '#F1C440',
  },
};
```
## Running Tests

To run tests, run the following command

```bash
  npm run test:unit
```

  