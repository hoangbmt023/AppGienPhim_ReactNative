import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function SeeMore({children}){
    return(
        <View style={styles.seeMore}>
            <TouchableOpacity style={{color: "white" , textDecoration: "none"}} >
                <Text style={styles.seeMoreText}>
                    {children}
                </Text>
            </TouchableOpacity>
        </View>
    );
}
export default SeeMore;

const styles = StyleSheet.create({
    seeMore:{
        
        backgroundColor: "red",
        paddingVertical: 12,
        borderRadius: 5,
        marginTop: 10
    },
    seeMoreText:{
        textAlign: "center",
        color: "white",
        textDecoration: "none",
        fontWeight: "bold",
    }
});