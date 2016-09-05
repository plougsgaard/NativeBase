/* @flow */
'use strict';

import React from 'react';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';

export default class IconNB extends NativeBaseComponent {

    propTypes: {
        style : React.PropTypes.object
    }
    contextTypes: {
      theme: React.PropTypes.object
    }
    getIconComponent() {
        const iconFamily = (this.props.iconFamily || '').toLowerCase()
        switch(iconFamily) {
            case 'ionicons':
                return Ionicons;
            case 'entypo':
                return Entypo;
            case 'fontawesome':
                return FontAwesome;
            case 'foundation':
                return Foundation;
            case 'materialicons':
                return MaterialIcons;
            case 'octicons':
                return Octicons;
            case 'zocial':
                return Zocial;
            default:
                return Ionicons;
        }
    }

    getInitialStyle() {
        return {
            icon: {
                fontSize: this.getTheme().iconFontSize,
                color: this.getContextForegroundColor()
            }
        }
    }
    prepareRootProps() {
        var defaultProps = {
            style: this.getInitialStyle().icon
        };

        return computeProps(this.props, defaultProps);
    }

    render() {
        const Icon = this.getIconComponent()
        return(
            <Icon {...this.prepareRootProps()}/>
        )
    }
}
