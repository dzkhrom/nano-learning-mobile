import React from 'react';
import { WebView, View } from 'react-native';


const ApplicationWebViewComponent = ({html, url: uri}) => (
    <View style={{flex: 1}} >
            <WebView
                originWhitelist={['*']}
                source={{uri}}
                style={{marginTop: 20}}
            />
    </View>
    );


export default ApplicationWebViewComponent;
