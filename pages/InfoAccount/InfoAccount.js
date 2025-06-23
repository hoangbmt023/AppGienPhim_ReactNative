import { useState, useEffect } from "react";
import { View, ScrollView, StyleSheet } from "react-native";

import styles from "./InfoAccountStyles";

import ProfileSidebar from "../../components/Layouts/Profile/ProfileSidebar";
import ProfileContent from "../../components/Layouts/Profile/ProfileContent";
import Notice from "../../components/Layouts/Notice/Notice";

import * as authHooks from "../../hooks/auth";
import * as authServices from "../../services/AuthenticationService"; // Bỏ comment

function InfoAccount() {
  const [dataUser, setDataUser] = useState(null);

  useEffect(() => {
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
  }, []);



  return (
    <ScrollView style={styles.container}>
      <Notice />
      <View style={styles.separator} />
      <View style={styles.profileContainer}>
        <ProfileSidebar dataU={dataUser} />
        <ProfileContent dataU={dataUser} />
      </View>
    </ScrollView>
  );
}

export default InfoAccount;


