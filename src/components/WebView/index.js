import React, { Component } from 'react';
import { WebView } from 'react-native';

const ApplicationWebViewComponent = ({url}) => (
            <WebView
                source={{uri: url}}
                style={{marginTop: 20}}
            />

    );

export default ApplicationWebViewComponent;
