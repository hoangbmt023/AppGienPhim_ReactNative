import React, { useEffect, useState, useCallback } from 'react';
import {
    View,
    Text,
    TextInput,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    Keyboard
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import debounce from 'lodash.debounce';
import * as managerServices from "../../services/ManagerService"
import FilmItem from '../../components/Layouts/FilmList/FilmItem';

// bạn đổi lại theo component bạn đang dùng

export default function SearchScreen() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const navigation = useNavigation();

    // Hàm debounce để gọi API
    const debouncedSearch = useCallback(
        debounce(async (value) => {
            if (!value.trim()) {
                setSearchResult([]);
                return;
            }

            const result = await managerServices.searchphim(value,1,6);
            setSearchResult(result.data || []);
        }, 600),
        []
    );

    useEffect(() => {
        debouncedSearch(searchValue);
    }, [searchValue]);

    const handleSearchPress = () => {
        navigation.navigate("SearchPhim",{type: "Search" ,timtheo: searchValue })
    };

    return (
        <View style={styles.container}>
            {/* Thanh tìm kiếm */}
            <View style={styles.searchBar}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Tìm anime..."
                    placeholderTextColor="#aaa"
                    value={searchValue}
                    onChangeText={(text) => {
                        setSearchValue(text);
                        setShowResult(true);
                    }}
                    onFocus={() => setShowResult(true)}
                />
                <TouchableOpacity style={styles.searchButton} onPress={handleSearchPress}>
                    <Text style={styles.searchButtonText}>Tìm</Text>
                </TouchableOpacity>
            </View>

            {/* Danh sách kết quả */}
            {showResult && searchResult.length > 0 && (
                <FlatList
                    data={searchResult}
                    keyExtractor={(item) => item.phimId.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Home", {
                                screen: "Phim",
                                params: { id: item.phimId }
                            })}
                            style={styles.filmItemWrapper} // 👈 thêm vào đây
                        >
                            <FilmItem data={item} type="search" />
                        </TouchableOpacity>
                    )}
                    numColumns={2}
                    columnWrapperStyle={styles.columnWrapper}
                    contentContainerStyle={styles.listContent}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1e1e1e',
        flex: 1,
        padding: 12,
    },
    searchBar: {
        flexDirection: 'row',
        backgroundColor: '#2c2c2c',
        paddingHorizontal: 10,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 12,
        height: 48,
    },
    searchInput: {
        flex: 1,
        color: '#fff',
        fontSize: 16,
    },
    searchButton: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: '#ff2f2f',
        borderRadius: 10,
        marginLeft: 8,
    },
    searchButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },
    columnWrapper: {
        justifyContent: 'space-between', // 👈 Căn giữa mỗi hàng
        marginBottom: 12,
    },
    listContent: {
        paddingBottom: 100,
    },
    filmItemWrapper: {
        width: '48%',
        paddingVertical: 10,
        marginBottom: 12,
        backgroundColor: 'rgba(54, 52, 52, 0.66)',
        borderRadius: 10,
        overflow: 'hidden',
        alignSelf: 'center',
        alignItems: "center"
    },
});
