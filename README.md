# vue-navigator-online
[navigator.onLine](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/onLine) plugin for Vue.js

## Requirements

- [Vue.js](https://vuejs.org) (v2.0.0+)

## Installation

```bash
$ npm install vue-navigator-online
```

## Usage

```js
import VueOnlinePlugin from 'vue-navigator-online'

Vue.use(VueOnlinePlugin)
```

```html
<h1 v-if="online">I'm online</h1>
<h1 v-else>I'm offline</h1>
```
