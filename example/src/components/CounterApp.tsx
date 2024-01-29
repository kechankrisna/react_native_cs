import React, { useState } from "react";
import { Button, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

interface CounterAppProp {
    initializeValue?: number,
    children?: React.ReactNode | undefined;
    id?: string | undefined;
    style?: StyleProp<ViewStyle> | undefined;
    testID?: string | undefined;
    nativeID?: string | undefined;
}

function CounterApp(props: CounterAppProp): React.JSX.Element {
    let [value, setValue] = useState(props.initializeValue ?? 0)
    var increase = () => {
        setValue(value + 1)
    }
    var decrease = () => {
        setValue(value - 1)
    }
    return (
        <View style={props.style} testID={props.testID} nativeID={props.nativeID} id={props.id}>

            <View style={styles.row}>
                
                <TouchableOpacity onPress={decrease} style={[styles.button]} >
                    <Text style={styles.buttonLabel}>decrease</Text>
                </TouchableOpacity>

                <View>
                    <Text style={
                        {
                            textAlign: 'center',
                            verticalAlign: 'middle',
                            alignContent: 'center',
                            textDecorationLine: 'underline',
                            color: Colors.white
                        }
                    } >{value}</Text>
                </View>

                <TouchableOpacity onPress={increase} style={[styles.button]} >
                    <Text style={styles.buttonLabel}>increase</Text>
                </TouchableOpacity>

                {props.children}
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 8,
        backgroundColor: 'aliceblue',
    },
    box: {
        width: 50,
        height: 50,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center',
        verticalAlign: 'middle',
        textAlign: 'center'
    },
    button: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 4,
        backgroundColor: 'oldlace',
        alignSelf: 'flex-start',
        marginHorizontal: '1%',
        marginBottom: 6,
        minWidth: '30%',
        textAlign: 'center',
    },
    selected: {
        backgroundColor: 'coral',
        borderWidth: 0,
    },
    buttonLabel: {
        fontSize: 12,
        fontWeight: '500',
        color: 'coral',
    },
    selectedLabel: {
        color: 'white',
    },
    label: {
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 24,
    },
});

export default CounterApp;
