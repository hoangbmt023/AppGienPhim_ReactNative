import { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import * as authServices from "../../../services/AuthenticationService"

function ProfileContent({ dataU ,onReload}) {
  const [formData, setFormData] = useState({
    id: "",
    email: "",
    phoneNumber: "",
    nameND: "",
    gioiTinh: 0,
    moTa: "",
    avatarND: null,
  });

  useEffect(() => {
    if (!dataU) return;
    setFormData({
      id: dataU.id || "",
      email: dataU.email || "",
      phoneNumber: dataU.phoneNumber || "",
      nameND: dataU.nameND || "",
      gioiTinh: [0, 1, 2].includes(dataU.gioiTinh) ? dataU.gioiTinh : 0,
      moTa: dataU.moTa || "",
      avatarND: null,
    });
  }, [dataU]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

const pickImage = async () => {
  console.log("Bắt đầu chọn ảnh...");

const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
console.log("Kết quả cấp quyền:", permissionResult);
  if (permissionResult.granted === false) {
    Alert.alert("Lỗi", "Bạn cần cấp quyền truy cập ảnh.");
    return;
  }

  // Mở thư viện ảnh
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [1, 1],
    quality: 1,
  });
console.log("Kết quả chọn ảnh:", result);
  if (!result.canceled && result.assets && result.assets.length > 0) {
    const asset = result.assets[0];
    setFormData((prev) => ({
      ...prev,
      avatarND: {
        uri: asset.uri,
        type: 'image/jpeg',
        name: asset.fileName || 'avatar.jpg',
      },
    }));
  }
};

  const handleSubmit = async () => {
    const form = new FormData();
    form.append("id", formData.id);
    form.append("nameND", formData.nameND);
    form.append("gioiTinh", formData.gioiTinh);
    form.append("moTa", formData.moTa);
    form.append("phoneNumber", formData.phoneNumber);

    if (formData.avatarND) {
      form.append("avatarND", formData.avatarND);
      console.log("Dữ liệu avatarND:", formData.avatarND);
    }

    try {
      const result = await authServices.UpdateUserInfo(form);
      if (!result) return Alert.alert("Cập nhật không thành công!");

      Alert.alert("THÀNH CÔNG","Cập nhật thành công!");
      console.log("FormData gửi:", formData);
    } catch (err) {
      Alert.alert("Lỗi", "Gặp lỗi khi cập nhật!");
      console.log(err)
    }
  };
  

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Thông Tin Tài Khoản</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={formData.email}
        editable={false}
        placeholder="Email"
        placeholderTextColor="#aaa"
      />

      <Text style={styles.label}>Số điện thoại</Text>
      <TextInput
        style={styles.input}
        value={formData.phoneNumber}
        editable={false}
        placeholder="Số điện thoại"
        placeholderTextColor="#aaa"
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>Tên</Text>
      <TextInput
        style={styles.input}
        value={formData.nameND}
        onChangeText={(value) => handleChange("nameND", value)}
        placeholder="Tên của bạn"
        placeholderTextColor="#aaa"
      />

      <Text style={styles.label}>Giới tính</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={formData.gioiTinh}
          onValueChange={(value) => handleChange("gioiTinh", value)}
          style={styles.picker}
        >
          <Picker.Item label="Không xác định" value={0} />
          <Picker.Item label="Nam" value={1} />
          <Picker.Item label="Nữ" value={2} />
        </Picker>
      </View>

      <Text style={styles.label}>Mô tả bản thân</Text>
      <TextInput
        style={styles.textarea}
        value={formData.moTa}
        onChangeText={(value) => handleChange("moTa", value)}
        placeholder="Nhập mô tả bản thân..."
        placeholderTextColor="#aaa"
        multiline
        numberOfLines={5}
      />

      <Text style={styles.label}>Avatar</Text>
      {formData.avatarND?.uri && (
        <Image
          source={{ uri: formData.avatarND.uri }}
          style={styles.avatar}
        />
      )}
      <TouchableOpacity onPress={pickImage} style={styles.pickBtn}>
        <Text style={styles.pickBtnText}>Chọn ảnh</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleSubmit} style={styles.btn}>
        <Text style={styles.btnText}>CẬP NHẬT</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default ProfileContent;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginBottom: 160,
    backgroundColor: '#222',
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    color: '#fff',
  },
  label: {
    color: '#fff',
    marginBottom: 6,
    marginTop: 12,
    fontSize: 16,
  },
  input: {
    borderColor: "#555",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#333',
    color: '#eee',
  },
  textarea: {
    borderColor: "#555",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#333',
    color: '#eee',
    textAlignVertical: "top",
    height: 100,
  },
  pickerContainer: {
    borderColor: "#555",
    borderWidth: 1,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#333',
    marginBottom: 10,
  },
  picker: {
    height: 50,
    color: '#eee',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 10,
  },
  pickBtn: {
    backgroundColor: "#666",
    padding: 10,
    borderRadius: 6,
    alignItems: "center",
    marginBottom: 10,
  },
  pickBtnText: {
    color: "#fff",
  },
  btn: {
    backgroundColor: "#e53935",
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
    marginTop: 10,
  },
  btnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
