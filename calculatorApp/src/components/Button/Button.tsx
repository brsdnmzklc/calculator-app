import { TouchableOpacity, Text, Dimensions } from 'react-native';
import React from 'react';
import styles from './Button.style';
const Button = ({
    title,
    backgrounColor,
    onPress,
}: {
    title: string;
    backgrounColor: string;
    onPress: Function;
}) => {
    let style = 'container';
    if (title === '0') {
        style = 'secondaryContainer';
    }
    return (
        <TouchableOpacity
            onPress={() => onPress(title)}
            style={
                backgrounColor
                    ? { ...styles.container, backgroundColor: backgrounColor }
                    : styles[style]
            }>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;
