import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'display': 'flex',
    'minHeight': [{ 'unit': 'vh', 'value': 100 }],
    'flexDirection': 'column',
    'backgroundColor': '#f2f2f2'
  },
  'main': {
    'flex': '1 0 auto'
  },
  'parallax-container': {
    'height': [{ 'unit': 'em', 'value': 25 }]
  },
  'center-a': {
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'flexDirection': 'column',
    'height': [{ 'unit': 'em', 'value': 25 }]
  },
  'search-a': {
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center'
  },
  'search-a input': {
    'background': '#ffffff',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'em', 'value': 40 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1 }],
    '<w640': {
      'width': [{ 'unit': 'em', 'value': 30 }]
    },
    '<w500': {
      'width': [{ 'unit': 'em', 'value': 15 }]
    }
  },
  'search-a a': {
    'background': '#ffffff',
    'height': [{ 'unit': 'rem', 'value': 3 }],
    'display': 'flex',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }],
    'justifyContent': 'center',
    'alignItems': 'center'
  },
  'search-a-nav': {
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'flexDirection': 'column',
    'margin': [{ 'unit': 'em', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'px', 'value': 0 }]
  },
  'search-a-nav contenedor-a': {
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center'
  },
  'search-a-nav a': {
    'margin': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 1 }],
    'color': '#fff'
  }
});
