import React, { useState } from 'react';
import { View, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const LoginBody = ({ children, style }) => {
    const [formHeight, setFormHeight] = useState(0);

    return (
        <View
            onLayout={(event) => {
                const { height } = event.nativeEvent.layout;
                setFormHeight(height);
            }}
            style={[
                {
                    position: 'absolute',
                    top: height / 2,
                    left: width * 0.05,
                    width: width * 0.9,
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    borderRadius: 5,
                    zIndex: 1,
                    transform: [{ translateY: -formHeight / 2 }],
                    paddingBottom: '2.5%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: 20,
                    paddingBottom: 30,
                    minHeight: 100,
                },
                style,
            ]}
        >
            {children}
        </View>
    );
};

export default LoginBody;
