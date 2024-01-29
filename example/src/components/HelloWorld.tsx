import React from 'react';
import type { PropsWithChildren } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

function HelloWorld(): React.JSX.Element {
    return (
        <View>
            <Text>Hello,</Text>
        </View>
    );
}

export default HelloWorld;