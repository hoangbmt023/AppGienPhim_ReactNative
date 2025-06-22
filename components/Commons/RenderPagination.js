import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function RenderPagination({ data, onPageChange }) {
    const handlePageChange = (newPage) => {
        if (onPageChange) {
            onPageChange(newPage);
        }
    };

    if (!data || data.total <= 1) return null;

    const currentPage = data.page;
    const endPage = data.last;
    const pages = [];

    const addPageButton = (page) => {
        pages.push(
            <TouchableOpacity
                key={`page-${page}`}
                style={[
                    styles.pageBtn,
                    currentPage === page && styles.activePage
                ]}
                onPress={() => handlePageChange(page)}
            >
                <Text style={styles.pageText}>{page}</Text>
            </TouchableOpacity>
        );
    };

    if (endPage <= 4) {
        for (let i = 1; i <= endPage; i++) {
            addPageButton(i);
        }
    } else {
        addPageButton(1);

        if (currentPage > 3) {
            pages.push(
                <Text key={`start-ellipsis-${currentPage}`} style={styles.ellipsis}>...</Text>
            );
        }

        if (currentPage > 1 && currentPage < endPage) {
            addPageButton(currentPage);
        }

        if (currentPage + 1 < endPage) {
            addPageButton(currentPage + 1);
        }

        if (currentPage + 2 < endPage) {
            pages.push(
                <Text key={`end-ellipsis-${currentPage}`} style={styles.ellipsis}>...</Text>
            );
        }

        if (endPage !== 1) {
            addPageButton(endPage);
        }
    }

    return (
        <View style={styles.paginationContainer}>
            <TouchableOpacity
                style={styles.pageBtn}
                onPress={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <Text style={styles.pageText}>‹</Text>
            </TouchableOpacity>

            {pages}

            <TouchableOpacity
                style={styles.pageBtn}
                onPress={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === endPage}
            >
                <Text style={styles.pageText}>›</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        gap: 4,
        flexWrap: 'wrap',
    },
    pageBtn: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        backgroundColor: '#333',
        borderRadius: 6,
        marginHorizontal: 2,
    },
    activePage: {
        backgroundColor: '#FF4444',
    },
    pageText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
    },
    ellipsis: {
        color: 'gray',
        marginHorizontal: 6,
        fontSize: 16,
    },
});
