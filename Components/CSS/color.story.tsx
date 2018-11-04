import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { createDummyPage, wInfo } from '../utils';

storiesOf('CSS/Color', module)
  .addDecorator(
    createDummyPage({
      margin: 'auto',
      maxWidth: 800
    })
  )
  .addParameters({
    info: wInfo(
      `
      Here is a color palette based on the material design base colors. Each of these colors is defined with a base color class and an optional lighten or darken class.
      `
    )
  })
  .add('Color Palette', () => (
    <div>
      <div className="row dynamic-color">
        <div className="col s12 m6 l4">
          <div className="red lighten-5">
            <span>#ffebee red lighten-5</span>
          </div>
          <div className="red lighten-4">
            <span>#ffcdd2 red lighten-4</span>
          </div>
          <div className="red lighten-3">
            <span>#ef9a9a red lighten-3</span>
          </div>
          <div className="red lighten-2">
            <span>#e57373 red lighten-2</span>
          </div>
          <div className="red lighten-1">
            <span>#ef5350 red lighten-1</span>
          </div>
          <div className="red">
            <span>#f44336 red</span>
          </div>
          <div
            className="red darken-1"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#e53935 red darken-1</span>
          </div>
          <div
            className="red darken-2"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#d32f2f red darken-2</span>
          </div>
          <div
            className="red darken-3"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#c62828 red darken-3</span>
          </div>
          <div
            className="red darken-4"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#b71c1c red darken-4</span>
          </div>
          <div className="red accent-1">
            <span>#ff8a80 red accent-1</span>
          </div>
          <div className="red accent-2">
            <span>#ff5252 red accent-2</span>
          </div>
          <div className="red accent-3">
            <span>#ff1744 red accent-3</span>
          </div>
          <div className="red accent-4">
            <span>#d50000 red accent-4</span>
          </div>
        </div>

        <div className="col s12 m6 l4">
          <div className="pink lighten-5">
            <span>#fce4ec pink lighten-5</span>
          </div>
          <div className="pink lighten-4">
            <span>#f8bbd0 pink lighten-4</span>
          </div>
          <div className="pink lighten-3">
            <span>#f48fb1 pink lighten-3</span>
          </div>
          <div className="pink lighten-2">
            <span>#f06292 pink lighten-2</span>
          </div>
          <div className="pink lighten-1">
            <span>#ec407a pink lighten-1</span>
          </div>
          <div className="pink">
            <span>#e91e63 pink</span>
          </div>
          <div
            className="pink darken-1"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#d81b60 pink darken-1</span>
          </div>
          <div
            className="pink darken-2"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#c2185b pink darken-2</span>
          </div>
          <div
            className="pink darken-3"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#ad1457 pink darken-3</span>
          </div>
          <div
            className="pink darken-4"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#880e4f pink darken-4</span>
          </div>
          <div className="pink accent-1">
            <span>#ff80ab pink accent-1</span>
          </div>
          <div className="pink accent-2">
            <span>#ff4081 pink accent-2</span>
          </div>
          <div className="pink accent-3">
            <span>#f50057 pink accent-3</span>
          </div>
          <div className="pink accent-4">
            <span>#c51162 pink accent-4</span>
          </div>
        </div>
        <div className="col s12 m6 l4">
          <div className="purple lighten-5">
            <span>#f3e5f5 purple lighten-5</span>
          </div>
          <div className="purple lighten-4">
            <span>#e1bee7 purple lighten-4</span>
          </div>
          <div className="purple lighten-3">
            <span>#ce93d8 purple lighten-3</span>
          </div>
          <div className="purple lighten-2">
            <span>#ba68c8 purple lighten-2</span>
          </div>
          <div className="purple lighten-1">
            <span>#ab47bc purple lighten-1</span>
          </div>
          <div className="purple">
            <span>#9c27b0 purple</span>
          </div>
          <div
            className="purple darken-1"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#8e24aa purple darken-1</span>
          </div>
          <div
            className="purple darken-2"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#7b1fa2 purple darken-2</span>
          </div>
          <div
            className="purple darken-3"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#6a1b9a purple darken-3</span>
          </div>
          <div
            className="purple darken-4"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#4a148c purple darken-4</span>
          </div>
          <div className="purple accent-1">
            <span>#ea80fc purple accent-1</span>
          </div>
          <div className="purple accent-2">
            <span>#e040fb purple accent-2</span>
          </div>
          <div className="purple accent-3">
            <span>#d500f9 purple accent-3</span>
          </div>
          <div className="purple accent-4">
            <span>#aa00ff purple accent-4</span>
          </div>
        </div>
        <div className="col s12 m6 l4">
          <div className="deep-purple lighten-5">
            <span>#ede7f6 deep-purple lighten-5</span>
          </div>
          <div className="deep-purple lighten-4">
            <span>#d1c4e9 deep-purple lighten-4</span>
          </div>
          <div className="deep-purple lighten-3">
            <span>#b39ddb deep-purple lighten-3</span>
          </div>
          <div className="deep-purple lighten-2">
            <span>#9575cd deep-purple lighten-2</span>
          </div>
          <div className="deep-purple lighten-1">
            <span>#7e57c2 deep-purple lighten-1</span>
          </div>
          <div className="deep-purple">
            <span>#673ab7 deep-purple</span>
          </div>
          <div
            className="deep-purple darken-1"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#5e35b1 deep-purple darken-1</span>
          </div>
          <div
            className="deep-purple darken-2"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#512da8 deep-purple darken-2</span>
          </div>
          <div
            className="deep-purple darken-3"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#4527a0 deep-purple darken-3</span>
          </div>
          <div
            className="deep-purple darken-4"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#311b92 deep-purple darken-4</span>
          </div>
          <div className="deep-purple accent-1">
            <span>#b388ff deep-purple accent-1</span>
          </div>
          <div className="deep-purple accent-2">
            <span>#7c4dff deep-purple accent-2</span>
          </div>
          <div className="deep-purple accent-3">
            <span>#651fff deep-purple accent-3</span>
          </div>
          <div className="deep-purple accent-4">
            <span>#6200ea deep-purple accent-4</span>
          </div>
        </div>
        <div className="col s12 m6 l4">
          <div className="indigo lighten-5">
            <span>#e8eaf6 indigo lighten-5</span>
          </div>
          <div className="indigo lighten-4">
            <span>#c5cae9 indigo lighten-4</span>
          </div>
          <div className="indigo lighten-3">
            <span>#9fa8da indigo lighten-3</span>
          </div>
          <div className="indigo lighten-2">
            <span>#7986cb indigo lighten-2</span>
          </div>
          <div className="indigo lighten-1">
            <span>#5c6bc0 indigo lighten-1</span>
          </div>
          <div className="indigo">
            <span>#3f51b5 indigo</span>
          </div>
          <div
            className="indigo darken-1"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#3949ab indigo darken-1</span>
          </div>
          <div
            className="indigo darken-2"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#303f9f indigo darken-2</span>
          </div>
          <div
            className="indigo darken-3"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#283593 indigo darken-3</span>
          </div>
          <div
            className="indigo darken-4"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#1a237e indigo darken-4</span>
          </div>
          <div className="indigo accent-1">
            <span>#8c9eff indigo accent-1</span>
          </div>
          <div className="indigo accent-2">
            <span>#536dfe indigo accent-2</span>
          </div>
          <div className="indigo accent-3">
            <span>#3d5afe indigo accent-3</span>
          </div>
          <div className="indigo accent-4">
            <span>#304ffe indigo accent-4</span>
          </div>
        </div>
        <div className="col s12 m6 l4">
          <div className="blue lighten-5">
            <span>#e3f2fd blue lighten-5</span>
          </div>
          <div className="blue lighten-4">
            <span>#bbdefb blue lighten-4</span>
          </div>
          <div className="blue lighten-3">
            <span>#90caf9 blue lighten-3</span>
          </div>
          <div className="blue lighten-2">
            <span>#64b5f6 blue lighten-2</span>
          </div>
          <div className="blue lighten-1">
            <span>#42a5f5 blue lighten-1</span>
          </div>
          <div className="blue">
            <span>#2196f3 blue</span>
          </div>
          <div
            className="blue darken-1"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#1e88e5 blue darken-1</span>
          </div>
          <div
            className="blue darken-2"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#1976d2 blue darken-2</span>
          </div>
          <div
            className="blue darken-3"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#1565c0 blue darken-3</span>
          </div>
          <div
            className="blue darken-4"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#0d47a1 blue darken-4</span>
          </div>
          <div className="blue accent-1">
            <span>#82b1ff blue accent-1</span>
          </div>
          <div className="blue accent-2">
            <span>#448aff blue accent-2</span>
          </div>
          <div className="blue accent-3">
            <span>#2979ff blue accent-3</span>
          </div>
          <div className="blue accent-4">
            <span>#2962ff blue accent-4</span>
          </div>
        </div>
        <div className="col s12 m6 l4">
          <div className="light-blue lighten-5">
            <span>#e1f5fe light-blue lighten-5</span>
          </div>
          <div className="light-blue lighten-4">
            <span>#b3e5fc light-blue lighten-4</span>
          </div>
          <div className="light-blue lighten-3">
            <span>#81d4fa light-blue lighten-3</span>
          </div>
          <div className="light-blue lighten-2">
            <span>#4fc3f7 light-blue lighten-2</span>
          </div>
          <div className="light-blue lighten-1">
            <span>#29b6f6 light-blue lighten-1</span>
          </div>
          <div className="light-blue">
            <span>#03a9f4 light-blue</span>
          </div>
          <div
            className="light-blue darken-1"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#039be5 light-blue darken-1</span>
          </div>
          <div
            className="light-blue darken-2"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#0288d1 light-blue darken-2</span>
          </div>
          <div
            className="light-blue darken-3"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#0277bd light-blue darken-3</span>
          </div>
          <div
            className="light-blue darken-4"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#01579b light-blue darken-4</span>
          </div>
          <div className="light-blue accent-1">
            <span>#80d8ff light-blue accent-1</span>
          </div>
          <div className="light-blue accent-2">
            <span>#40c4ff light-blue accent-2</span>
          </div>
          <div className="light-blue accent-3">
            <span>#00b0ff light-blue accent-3</span>
          </div>
          <div className="light-blue accent-4">
            <span>#0091ea light-blue accent-4</span>
          </div>
        </div>
        <div className="col s12 m6 l4">
          <div className="cyan lighten-5">
            <span>#e0f7fa cyan lighten-5</span>
          </div>
          <div className="cyan lighten-4">
            <span>#b2ebf2 cyan lighten-4</span>
          </div>
          <div className="cyan lighten-3">
            <span>#80deea cyan lighten-3</span>
          </div>
          <div className="cyan lighten-2">
            <span>#4dd0e1 cyan lighten-2</span>
          </div>
          <div className="cyan lighten-1">
            <span>#26c6da cyan lighten-1</span>
          </div>
          <div className="cyan">
            <span>#00bcd4 cyan</span>
          </div>
          <div
            className="cyan darken-1"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#00acc1 cyan darken-1</span>
          </div>
          <div
            className="cyan darken-2"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#0097a7 cyan darken-2</span>
          </div>
          <div
            className="cyan darken-3"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#00838f cyan darken-3</span>
          </div>
          <div
            className="cyan darken-4"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#006064 cyan darken-4</span>
          </div>
          <div className="cyan accent-1">
            <span>#84ffff cyan accent-1</span>
          </div>
          <div className="cyan accent-2">
            <span>#18ffff cyan accent-2</span>
          </div>
          <div className="cyan accent-3">
            <span>#00e5ff cyan accent-3</span>
          </div>
          <div className="cyan accent-4">
            <span>#00b8d4 cyan accent-4</span>
          </div>
        </div>
        <div className="col s12 m6 l4">
          <div className="teal lighten-5">
            <span>#e0f2f1 teal lighten-5</span>
          </div>
          <div className="teal lighten-4">
            <span>#b2dfdb teal lighten-4</span>
          </div>
          <div className="teal lighten-3">
            <span>#80cbc4 teal lighten-3</span>
          </div>
          <div className="teal lighten-2">
            <span>#4db6ac teal lighten-2</span>
          </div>
          <div className="teal lighten-1">
            <span>#26a69a teal lighten-1</span>
          </div>
          <div className="teal">
            <span>#009688 teal</span>
          </div>
          <div
            className="teal darken-1"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#00897b teal darken-1</span>
          </div>
          <div
            className="teal darken-2"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#00796b teal darken-2</span>
          </div>
          <div
            className="teal darken-3"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#00695c teal darken-3</span>
          </div>
          <div
            className="teal darken-4"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#004d40 teal darken-4</span>
          </div>
          <div className="teal accent-1">
            <span>#a7ffeb teal accent-1</span>
          </div>
          <div className="teal accent-2">
            <span>#64ffda teal accent-2</span>
          </div>
          <div className="teal accent-3">
            <span>#1de9b6 teal accent-3</span>
          </div>
          <div className="teal accent-4">
            <span>#00bfa5 teal accent-4</span>
          </div>
        </div>
        <div className="col s12 m6 l4">
          <div className="green lighten-5">
            <span>#e8f5e9 green lighten-5</span>
          </div>
          <div className="green lighten-4">
            <span>#c8e6c9 green lighten-4</span>
          </div>
          <div className="green lighten-3">
            <span>#a5d6a7 green lighten-3</span>
          </div>
          <div className="green lighten-2">
            <span>#81c784 green lighten-2</span>
          </div>
          <div className="green lighten-1">
            <span>#66bb6a green lighten-1</span>
          </div>
          <div className="green">
            <span>#4caf50 green</span>
          </div>
          <div
            className="green darken-1"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#43a047 green darken-1</span>
          </div>
          <div
            className="green darken-2"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#388e3c green darken-2</span>
          </div>
          <div
            className="green darken-3"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#2e7d32 green darken-3</span>
          </div>
          <div
            className="green darken-4"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#1b5e20 green darken-4</span>
          </div>
          <div className="green accent-1">
            <span>#b9f6ca green accent-1</span>
          </div>
          <div className="green accent-2">
            <span>#69f0ae green accent-2</span>
          </div>
          <div className="green accent-3">
            <span>#00e676 green accent-3</span>
          </div>
          <div className="green accent-4">
            <span>#00c853 green accent-4</span>
          </div>
        </div>
        <div className="col s12 m6 l4">
          <div className="light-green lighten-5">
            <span>#f1f8e9 light-green lighten-5</span>
          </div>
          <div className="light-green lighten-4">
            <span>#dcedc8 light-green lighten-4</span>
          </div>
          <div className="light-green lighten-3">
            <span>#c5e1a5 light-green lighten-3</span>
          </div>
          <div className="light-green lighten-2">
            <span>#aed581 light-green lighten-2</span>
          </div>
          <div className="light-green lighten-1">
            <span>#9ccc65 light-green lighten-1</span>
          </div>
          <div className="light-green">
            <span>#8bc34a light-green</span>
          </div>
          <div
            className="light-green darken-1"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#7cb342 light-green darken-1</span>
          </div>
          <div
            className="light-green darken-2"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#689f38 light-green darken-2</span>
          </div>
          <div
            className="light-green darken-3"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#558b2f light-green darken-3</span>
          </div>
          <div
            className="light-green darken-4"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#33691e light-green darken-4</span>
          </div>
          <div className="light-green accent-1">
            <span>#ccff90 light-green accent-1</span>
          </div>
          <div className="light-green accent-2">
            <span>#b2ff59 light-green accent-2</span>
          </div>
          <div className="light-green accent-3">
            <span>#76ff03 light-green accent-3</span>
          </div>
          <div className="light-green accent-4">
            <span>#64dd17 light-green accent-4</span>
          </div>
        </div>
        <div className="col s12 m6 l4">
          <div className="lime lighten-5">
            <span>#f9fbe7 lime lighten-5</span>
          </div>
          <div className="lime lighten-4">
            <span>#f0f4c3 lime lighten-4</span>
          </div>
          <div className="lime lighten-3">
            <span>#e6ee9c lime lighten-3</span>
          </div>
          <div className="lime lighten-2">
            <span>#dce775 lime lighten-2</span>
          </div>
          <div className="lime lighten-1">
            <span>#d4e157 lime lighten-1</span>
          </div>
          <div className="lime">
            <span>#cddc39 lime</span>
          </div>
          <div
            className="lime darken-1"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#c0ca33 lime darken-1</span>
          </div>
          <div
            className="lime darken-2"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#afb42b lime darken-2</span>
          </div>
          <div
            className="lime darken-3"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#9e9d24 lime darken-3</span>
          </div>
          <div
            className="lime darken-4"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#827717 lime darken-4</span>
          </div>
          <div className="lime accent-1">
            <span>#f4ff81 lime accent-1</span>
          </div>
          <div className="lime accent-2">
            <span>#eeff41 lime accent-2</span>
          </div>
          <div className="lime accent-3">
            <span>#c6ff00 lime accent-3</span>
          </div>
          <div className="lime accent-4">
            <span>#aeea00 lime accent-4</span>
          </div>
        </div>
        <div className="col s12 m6 l4">
          <div className="yellow lighten-5">
            <span>#fffde7 yellow lighten-5</span>
          </div>
          <div className="yellow lighten-4">
            <span>#fff9c4 yellow lighten-4</span>
          </div>
          <div className="yellow lighten-3">
            <span>#fff59d yellow lighten-3</span>
          </div>
          <div className="yellow lighten-2">
            <span>#fff176 yellow lighten-2</span>
          </div>
          <div className="yellow lighten-1">
            <span>#ffee58 yellow lighten-1</span>
          </div>
          <div className="yellow">
            <span>#ffeb3b yellow</span>
          </div>
          <div
            className="yellow darken-1"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#fdd835 yellow darken-1</span>
          </div>
          <div
            className="yellow darken-2"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#fbc02d yellow darken-2</span>
          </div>
          <div
            className="yellow darken-3"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#f9a825 yellow darken-3</span>
          </div>
          <div
            className="yellow darken-4"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#f57f17 yellow darken-4</span>
          </div>
          <div className="yellow accent-1">
            <span>#ffff8d yellow accent-1</span>
          </div>
          <div className="yellow accent-2">
            <span>#ffff00 yellow accent-2</span>
          </div>
          <div className="yellow accent-3">
            <span>#ffea00 yellow accent-3</span>
          </div>
          <div className="yellow accent-4">
            <span>#ffd600 yellow accent-4</span>
          </div>
        </div>
        <div className="col s12 m6 l4">
          <div className="amber lighten-5">
            <span>#fff8e1 amber lighten-5</span>
          </div>
          <div className="amber lighten-4">
            <span>#ffecb3 amber lighten-4</span>
          </div>
          <div className="amber lighten-3">
            <span>#ffe082 amber lighten-3</span>
          </div>
          <div className="amber lighten-2">
            <span>#ffd54f amber lighten-2</span>
          </div>
          <div className="amber lighten-1">
            <span>#ffca28 amber lighten-1</span>
          </div>
          <div className="amber">
            <span>#ffc107 amber</span>
          </div>
          <div
            className="amber darken-1"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#ffb300 amber darken-1</span>
          </div>
          <div
            className="amber darken-2"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#ffa000 amber darken-2</span>
          </div>
          <div
            className="amber darken-3"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#ff8f00 amber darken-3</span>
          </div>
          <div
            className="amber darken-4"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#ff6f00 amber darken-4</span>
          </div>
          <div className="amber accent-1">
            <span>#ffe57f amber accent-1</span>
          </div>
          <div className="amber accent-2">
            <span>#ffd740 amber accent-2</span>
          </div>
          <div className="amber accent-3">
            <span>#ffc400 amber accent-3</span>
          </div>
          <div className="amber accent-4">
            <span>#ffab00 amber accent-4</span>
          </div>
        </div>
        <div className="col s12 m6 l4">
          <div className="orange lighten-5">
            <span>#fff3e0 orange lighten-5</span>
          </div>
          <div className="orange lighten-4">
            <span>#ffe0b2 orange lighten-4</span>
          </div>
          <div className="orange lighten-3">
            <span>#ffcc80 orange lighten-3</span>
          </div>
          <div className="orange lighten-2">
            <span>#ffb74d orange lighten-2</span>
          </div>
          <div className="orange lighten-1">
            <span>#ffa726 orange lighten-1</span>
          </div>
          <div className="orange">
            <span>#ff9800 orange</span>
          </div>
          <div
            className="orange darken-1"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#fb8c00 orange darken-1</span>
          </div>
          <div
            className="orange darken-2"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#f57c00 orange darken-2</span>
          </div>
          <div
            className="orange darken-3"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#ef6c00 orange darken-3</span>
          </div>
          <div
            className="orange darken-4"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#e65100 orange darken-4</span>
          </div>
          <div className="orange accent-1">
            <span>#ffd180 orange accent-1</span>
          </div>
          <div className="orange accent-2">
            <span>#ffab40 orange accent-2</span>
          </div>
          <div className="orange accent-3">
            <span>#ff9100 orange accent-3</span>
          </div>
          <div className="orange accent-4">
            <span>#ff6d00 orange accent-4</span>
          </div>
        </div>
        <div className="col s12 m6 l4">
          <div className="deep-orange lighten-5">
            <span>#fbe9e7 deep-orange lighten-5</span>
          </div>
          <div className="deep-orange lighten-4">
            <span>#ffccbc deep-orange lighten-4</span>
          </div>
          <div className="deep-orange lighten-3">
            <span>#ffab91 deep-orange lighten-3</span>
          </div>
          <div className="deep-orange lighten-2">
            <span>#ff8a65 deep-orange lighten-2</span>
          </div>
          <div className="deep-orange lighten-1">
            <span>#ff7043 deep-orange lighten-1</span>
          </div>
          <div className="deep-orange">
            <span>#ff5722 deep-orange</span>
          </div>
          <div
            className="deep-orange darken-1"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#f4511e deep-orange darken-1</span>
          </div>
          <div
            className="deep-orange darken-2"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#e64a19 deep-orange darken-2</span>
          </div>
          <div
            className="deep-orange darken-3"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#d84315 deep-orange darken-3</span>
          </div>
          <div
            className="deep-orange darken-4"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#bf360c deep-orange darken-4</span>
          </div>
          <div className="deep-orange accent-1">
            <span>#ff9e80 deep-orange accent-1</span>
          </div>
          <div className="deep-orange accent-2">
            <span>#ff6e40 deep-orange accent-2</span>
          </div>
          <div className="deep-orange accent-3">
            <span>#ff3d00 deep-orange accent-3</span>
          </div>
          <div className="deep-orange accent-4">
            <span>#dd2c00 deep-orange accent-4</span>
          </div>
        </div>
        <div className="col s12 m6 l4">
          <div className="brown lighten-5">
            <span>#efebe9 brown lighten-5</span>
          </div>
          <div className="brown lighten-4">
            <span>#d7ccc8 brown lighten-4</span>
          </div>
          <div className="brown lighten-3">
            <span>#bcaaa4 brown lighten-3</span>
          </div>
          <div className="brown lighten-2">
            <span>#a1887f brown lighten-2</span>
          </div>
          <div className="brown lighten-1">
            <span>#8d6e63 brown lighten-1</span>
          </div>
          <div className="brown">
            <span>#795548 brown</span>
          </div>
          <div
            className="brown darken-1"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#6d4c41 brown darken-1</span>
          </div>
          <div
            className="brown darken-2"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#5d4037 brown darken-2</span>
          </div>
          <div
            className="brown darken-3"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#4e342e brown darken-3</span>
          </div>
          <div
            className="brown darken-4"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#3e2723 brown darken-4</span>
          </div>
        </div>
        <div className="col s12 m6 l4">
          <div className="grey lighten-5">
            <span>#fafafa grey lighten-5</span>
          </div>
          <div className="grey lighten-4">
            <span>#f5f5f5 grey lighten-4</span>
          </div>
          <div className="grey lighten-3">
            <span>#eeeeee grey lighten-3</span>
          </div>
          <div className="grey lighten-2">
            <span>#e0e0e0 grey lighten-2</span>
          </div>
          <div className="grey lighten-1">
            <span>#bdbdbd grey lighten-1</span>
          </div>
          <div className="grey">
            <span>#9e9e9e grey</span>
          </div>
          <div
            className="grey darken-1"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#757575 grey darken-1</span>
          </div>
          <div
            className="grey darken-2"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#616161 grey darken-2</span>
          </div>
          <div
            className="grey darken-3"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#424242 grey darken-3</span>
          </div>
          <div
            className="grey darken-4"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <span>#212121 grey darken-4</span>
          </div>
        </div>
      </div>
    </div>
  ));
