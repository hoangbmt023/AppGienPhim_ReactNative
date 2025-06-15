
import { StyleSheet, Text, View } from "react-native";

function BoxTitle({children}){
    return(
        <View style={styles.new}>
            <View style={styles.menu}>
                <Text style={styles.menuText}>
                    {children}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    new:{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        paddingVertical: 15, // trục đứng
        paddingHorizontal: 0, // trục ngang
        margin: 0

    },
    menu:{
        backgroundColor: '#A31D1D',
        paddingVertical: 10, // thẳng
        paddingHorizontal: 20, // ngang
        borderRadius: 8,
        marginRight: 20,
        height: 45,
        justifyContent: 'center',      // canh giữa theo chiều dọc
        alignItems: 'center', 
    },
    menuText:{
        fontWeight:600,
        color: "white",
        textAlign: "center"
    }
})

export default BoxTitle;