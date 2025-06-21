import{ useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './FilmVideoStyles';


function FilmTap({ children, data, idphim, slugtap, type, currentType, onSelect }) {
    const [dataTap, setDataTap] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        if (data) {
            setDataTap(data);
        }
    }, [data]);

    const handlePress = (result) => {
        if (onSelect) onSelect();
        navigation.navigate('XemPhim', {
            id: idphim,
            tap: result.slugTap,
        });
    };

    return (
        <View style={styles.tapContainer}>
            <View style={styles.infoTap}>
                <Text style={styles.tapTitle}>{children}</Text>
            </View>
            <ScrollView horizontal={false} contentContainerStyle={styles.tapList}>
                {dataTap.map((result) => (
                    <TouchableOpacity
                        key={result.tapPhimId}
                        style={[
                            styles.tap,
                            result.slugTap === slugtap && currentType === type
                                ? styles.activeTap
                                : null,
                        ]}
                        onPress={() => handlePress(result)}
                    >
                        <Text style={styles.tapText}>{result.tenTap}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}


export default FilmTap;