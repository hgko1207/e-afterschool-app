# 방과 후 관리 프로그램 - 앱

기존 방과 후 관리 프로그램의 모바일 웹을 통해 안드로이드와 애플 앱으로 만들었다.

## 사용 기술

- expo
- react-native
- react-native-webview

### Webview

- [expo react native webview](https://docs.expo.io/versions/latest/sdk/webview/)

#### Installation

```bash
expo install react-native-webview
```

#### Usage

```js
import * as React from 'react';
import { WebView } from 'react-native-webview';

export default class App extends React.Component {
  render() {
    return <WebView source={{ uri: 'https://expo.io' }} style={{ marginTop: 20 }} />;
  }
}
```

### APP Icons

- [expo app icon](https://docs.expo.io/guides/app-icons/)
- [Configuring a splash screen and app icon](https://docs.expo.io/tutorial/configuration/)

### Build

- [expo app build](https://docs.expo.io/distribution/building-standalone-apps/)

#### Configure app.json

```json
// app.json 파일 하단에 추가
"ios": {
    "bundleIdentifier": "com.yourcompany.yourappname",
    "buildNumber": "1.0.0"
},
"android": {
    "package": "com.yourcompany.yourappname",
    "versionCode": 1
}
```

#### Start the build

```bash
expo build:android
or 
expo build:ios
```

### 스마트폰 장치에 접근 권한이 필요할 경우

- [expo permission](https://docs.expo.io/versions/latest/sdk/permissions/)
