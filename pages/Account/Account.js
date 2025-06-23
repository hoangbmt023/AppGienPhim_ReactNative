import { useState, useEffect, useCallback } from "react";
import { View, ScrollView, StyleSheet } from "react-native";


import ProfileSidebar from "../../components/Layouts/Acc/Acc";
import AccountUtilities from "../../components/Layouts/Acc/AccountUtilities";

import * as authHooks from "../../hooks/auth";
import * as authServices from "../../services/AuthenticationService"; // Bỏ comment
import Notice from "../../components/Layouts/Notice/Notice";
import { useFocusEffect } from "@react-navigation/native";

function Account() {
  const [dataUser, setDataUser] = useState(null);

  useFocusEffect(
    useCallback(() => {
      const fetchUserInfo = async () => {
        const userId = await authHooks.getUserIdFromToken();
        if (!userId) return;

        try {
          const result = await authServices.GetUserById(userId);
          setDataUser(result);
        } catch (err) {
          console.log("Lỗi khi gọi API lấy user:", err);
        }
      };

      fetchUserInfo();
    }, []) // đảm bảo callback không thay đổi mỗi lần
  );

return (
  <ScrollView
    style={styles.container}
    contentContainerStyle={{ paddingBottom: 100 }} // Thêm khoảng trống dưới cùng để tránh bị footer che
  >
    <Notice />
    <View style={styles.separator} />

    {/* Bọc từng phần trong View có marginBottom để tạo khoảng cách như các khối riêng biệt */}
    <View style={{ marginBottom: 20 }}>
      <ProfileSidebar dataU={dataUser} />
    </View>

    <View style={{ marginBottom: 30 }}>
      <AccountUtilities data={dataUser}/>
    </View>
  </ScrollView>
);
}

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "black"
  },
  separator: {
    height: 3,
    backgroundColor: "gray",
    marginVertical: 16
  },
  profileContainer: {
    flexDirection: "column",
    gap: 16
  }
});
