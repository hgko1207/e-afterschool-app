import React from 'react';
import { WebView } from 'react-native-webview';

export default function App() {
  return <WebView source={{ uri: 'http://e-afterschool.kr/' }} style={{ marginTop: 25 }} />;
}
