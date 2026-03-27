# AppXemPhim-UI - Ứng Dụng Xem Phim Trực Tuyến

## 📱 Giới Thiệu Ứng Dụng

**AppXemPhim-UI** là một ứng dụng mobile xem phim trực tuyến được xây dựng với **React Native** và **Expo**. Ứng dụng cung cấp trải nghiệm xem phim mượt mà, hỗ trợ đăng ký tài khoản, thanh toán, quản lý lịch sử xem, và nhiều tính năng khác.

---

## 🎯 Các Tính Năng Chính

### 1. **Xác Thực & Tài Khoản**
- ✅ Đăng ký tài khoản mới
- ✅ Đăng nhập với email/mật khẩu
- ✅ Quên mật khẩu & Đặt lại mật khẩu
- ✅ Quản lý hồ sơ người dùng
- ✅ Bảo mật với JWT Token (lưu trữ trong AsyncStorage)

### 2. **Khám Phá Phim**
- 📽️ Trang chủ với banner phim nổi bật
- 🔍 Tìm kiếm phim theo tên/thể loại
- ⭐ Xếp hạng phim & Phim được đề xuất
- 📋 Danh sách phim theo thể loại

### 3. **Xem Phim**
- 🎬 Phát video trực tuyến từ liên kết phim
- 📊 Xem chi tiết phim (tóm tắt, diễn viên, đạo diễn...)
- 📱 Hỗ trợ trailer
- 💬 Thông tin nhân vật & tập phim

### 4. **Quản Lý Thanh Toán**
- 💳 Gói thành viên đa cấp (miễn phí, cơ bản, cao cấp)
- 💰 Nạp tiền vào ví
- 📜 Lịch sử giao dịch chi tiết
- 🔐 Các phương thức thanh toán an toàn

### 5. **Quản Lý Người Dùng**
- 👤 Hồ sơ cá nhân
- 📱 Cập nhật thông tin tài khoản
- 🔑 Quản lý mật khẩu
- ⚙️ Cài đặt ứng dụng

### 6. **Lịch Sử & Thông Báo**
- 📜 Lịch sử xem phim
- 🔔 Thông báo sự kiện & cập nhật mới
- 📌 Danh sách phim đã lưu

---

## 🏗️ Kiến Trúc Dự Án

```
AppXemPhim-UI/
├── App.js                          # Thành phần gốc của ứng dụng
├── app.json                        # Cấu hình Expo
├── index.js                        # Entry point
├── package.json                    # Dependencies
│
├── assets/                         # Tài nguyên tĩnh (hình ảnh, fonts)
│   └── img/                       
│
├── components/                     # Các component tái sử dụng
│   ├── Commons/                   # Component chung
│   │   ├── BoxTitle.js            # Tiêu đề custom
│   │   ├── RenderPagination.js    # Phân trang
│   │   └── SeeMore.js             # Nút "Xem thêm"
│   │
│   ├── Header/                    # Header & Navigation
│   │   ├── Header.js              # Header chính
│   │   ├── HeaderStyles.js        # Style cho header
│   │   └── NavbarMenu.js          # Menu điều hướng
│   │
│   ├── Footer/                    # Bottom Tab Navigation
│   │   ├── BottomTabNavigator.js  # Thanh tab dưới
│   │   └── BottomTabNavigatorStyles.js
│   │
│   ├── Layouts/                   # Layout cho các trang chính
│   │   ├── Acc/                   # Tài khoản
│   │   ├── FilmBannerList/        # Banner phim nổi bật
│   │   ├── FilmList/              # Danh sách phim
│   │   ├── FilmRanking/           # Xếp hạng phim
│   │   ├── FilmVideo/             # Phát video phim
│   │   ├── Notice/                # Thông báo
│   │   ├── PhimBanner/            # Banner phim
│   │   ├── PhimList/              # Danh sách phim
│   │   ├── PhuongThucThanhToan/   # Phương thức thanh toán
│   │   ├── Plan/                  # Gói thành viên
│   │   ├── Profile/               # Hồ sơ người dùng
│   │   ├── TabsPhim/              # Chi tiết phim (Tabs)
│   │   └── ThongBao/              # Thông báo nâng cao
│   │
│   └── Login-container/           # Container đăng nhập
│       ├── LoginContainer.js      # Thành phần chính
│       ├── LoginBody.js           # Nội dung form
│       ├── FloatingLabelInput.js  # Input với label nổi
│       ├── Contact.js             # Liên hệ
│       ├── RecaptchaNotice.js     # Thông báo Recaptcha
│       └── Redirect.js            # Chuyển hướng
│
├── pages/                         # Các trang (Screens)
│   ├── Home/                      # Trang chủ
│   ├── SearchPhim/                # Tìm kiếm phim
│   ├── SearchScreen/              # Màn hình tìm kiếm nâng cao
│   ├── Phim/                      # Chi tiết phim
│   ├── XemPhim/                   # Phim đang xem
│   ├── Account/                   # Tài khoản người dùng
│   ├── Authen/                    # Xác thực
│   │   ├── Login.js               # Đăng nhập
│   │   ├── Register.js            # Đăng ký
│   │   ├── ForgotPassword.js      # Quên mật khẩu
│   │   ├── ResetPassword.js       # Đặt lại mật khẩu
│   │   └── Help.js                # Trợ giúp
│   ├── GoiThanhVien/              # Gói thành viên
│   ├── History/                   # Lịch sử xem
│   ├── InfoAccount/               # Thông tin tài khoản
│   ├── LichSuGiaoDich/            # Lịch sử giao dịch
│   ├── NapTien/                   # Nạp tiền
│   └── LienHe/                    # Liên hệ
│
├── navigations/                   # Cấu hình điều hướng
│   ├── AppNavigator.js            # Navigator chính
│   └── Stacks/
│       ├── HomeStack.js           # Stack trang chủ
│       ├── SearchStack.js         # Stack tìm kiếm
│       ├── AccoutStack.js         # Stack tài khoản
│       └── WalletStack.js         # Stack ví tiền
│
├── services/                      # Dịch vụ API & Business Logic
│   ├── AuthenticationService.js   # Xử lý xác thực
│   └── ManagerService.js          # Quản lý dữ liệu chung
│
├── hooks/                         # Custom React Hooks
│   └── auth.js                    # Hook quản lý xác thực
│
└── utils/                         # Hàm tiện ích
    ├── Format.js                  # Định dạng dữ liệu
    └── request.js                 # Cấu hình HTTP requests
```

---

## 🔄 Luồng Hoạt Động Của Ứng Dụng

### 1️⃣ **Khởi Động Ứng Dụng**
```
App.js
  ↓
NavigationContainer (React Navigation)
  ↓
AppNavigator
  ↓
Bottom Tab Navigator (5 tabs: Home, Search, ..., Account)
```

### 2️⃣ **Flow Xác Thực (Authentication)**

```
Không Đăng Nhập
     ↓
Màn Hình Login/Register
     ↓
[Đăng Ký || Đăng Nhập]
     ↓
AuthenticationService.js (gửi API)
     ↓
JWT Token nhận được
     ↓
AsyncStorage (lưu token)
     ↓
Hook useAuth() kiểm tra token
     ↓
Chuyển hướng tới Home Screen
```

### 3️⃣ **Flow Xem Phim**

```
Trang Chủ (Home)
     ↓
[Tìm Kiếm || Danh Sách Phim || Banner]
     ↓
Chọn một bộ phim
     ↓
Chi Tiết Phim (Tabs: Trailer, Chi Tiết, Diễn Viên...)
     ↓
[Xem Phim || Truy Cập Nếu Có Đăng Ký]
     ↓
Màn Hình Phát Video (XemPhim.js)
     ↓
React Native WebView phát video
```

### 4️⃣ **Flow Thanh Toán & Gói Thành Viên**

```
Tài Khoản → Gói Thành Viên
     ↓
Chọn Gói (Miễn Phí / Cơ Bản / Cao Cấp)
     ↓
Thanh Toán → Nạp Tiền
     ↓
Chọn Phương Thức Thanh Toán
     ↓
Xử Lý Giao Dịch (ManagerService.js)
     ↓
Lưu Lịch Sử Giao Dịch
     ↓
Cập Nhật Trạng Thái Gói
```

### 5️⃣ **Flow Quản Lý Tài Khoản**

```
Tab Account
     ↓
[Hồ Sơ || Thông Tin || Giao Dịch || Cài Đặt]
     ↓
Xem/Cập Nhật Thông Tin
     ↓
Lưu thay đổi qua API
     ↓
AsyncStorage cập nhật
```

---

## 🛠️ Công Nghệ & Dependencies

### Frontend Framework
- **React Native** v0.79.3 - Framework mobile
- **Expo** v53.0.10 - Platform phát triển
- **React** v19.0.0 - Core library

### Navigation
- `@react-navigation/native` - Điều hướng cơ bản
- `@react-navigation/bottom-tabs` - Bottom tab navigation
- `@react-navigation/native-stack` - Stack navigation

### State & Storage
- `@react-native-async-storage/async-storage` - Lưu dữ liệu cục bộ
- `jwt-decode` - Giải mã JWT token
- `lodash.debounce` - Debounce function

### API & Network
- `axios` - HTTP client
- `expo-linking` - Deep linking

### UI & Media
- `react-native-vector-icons` - Icon library
- `react-native-webview` - Phát video
- `react-native-image-picker` - Chọn ảnh
- `expo-image-picker` - Picture picker
- `react-native-responsive-dimensions` - Responsive design
- `react-native-reanimated` - Animation library
- `dayjs` - Date/Time management

---

## 🚀 Cài Đặt & Chạy Ứng Dụng

### Yêu Cầu Hệ Thống
- Node.js v16+
- npm hoặc yarn
- Expo CLI

### 1. Clone Repository
```bash
git clone <your-repo-url>
cd AppXemPhim-UI
```

### 2. Cài Đặt Dependencies
```bash
npm install
# hoặc
yarn install
```

### 3. Chạy Ứng Dụng

**Trên Android:**
```bash
npm run android
# hoặc
expo start --android
```

**Trên iOS:**
```bash
npm run ios
# hoặc
expo start --ios
```

**Trên Web:**
```bash
npm run web
# hoặc
expo start --web
```

**Chế Độ Phát Triển (Development):**
```bash
npm start
# hoặc expo start
```

---

## 📋 API Integration

### AuthenticationService.js
Quản lý toàn bộ xác thực:
- `login(email, password)` - Đăng nhập
- `register(data)` - Đăng ký
- `forgotPassword(email)` - Quên mật khẩu
- `resetPassword(token, newPassword)` - Đặt lại mật khẩu
- `logout()` - Đăng xuất

### ManagerService.js
Quản lý dữ liệu chung:
- `getFilms()` - Lấy danh sách phim
- `getFilmDetails(id)` - Chi tiết phim
- `searchFilms(keyword)` - Tìm kiếm
- `getUserTransactions()` - Lịch sử giao dịch
- `subscribePackage(packageId)` - Đăng ký gói

### Token Management
Token JWT được lưu trong `AsyncStorage` và gửi trong header của mỗi request:
```javascript
headers: {
  'Authorization': 'Bearer ' + token
}
```

---

## 🔐 Bảo Mật

- ✅ JWT Token xác thực
- ✅ Token lưu trữ an toàn (AsyncStorage)
- ✅ HTTPS cho tất cả requests
- ✅ Recaptcha bảo vệ form
- ✅ Password hashing trên backend

---

## 📱 Cấu Trúc Navigation

```
App Navigator (Tab-based)
├── Home Stack
│   ├── Home
│   ├── Film Detail
│   └── Video Player
├── Search Stack
│   ├── Search
│   └── Search Results
├── Notification Stack
│   └── Notifications
├── Account Stack
│   ├── Account
│   ├── Profile
│   ├── Membership
│   └── History
└── More Stack
    ├── Settings
    └── Help
```

---

## 📊 Hooks & State Management

### useAuth() Hook
```javascript
const { user, token, login, logout, isLoading } = useAuth();
```
- Quản lý trạng thái xác thực toàn cục
- Kiểm tra token từ AsyncStorage
- Cung cấp hàm login/logout

---

## 🎨 Styling

- Mỗi component chính có file `*Styles.js` tương ứng
- Sử dụng StyleSheet từ React Native
- Responsive design với `react-native-responsive-dimensions`

---

## 📝 File Cấu Hình

### app.json
```json
{
  "expo": {
    "name": "gienphim-ui-reactnative",
    "slug": "gienphim-ui",
    "version": "1.0.0",
    "scheme": "gienphim",
    ...
  }
}
```

### Deep Linking Config
- Prefix: `gienphim://`
- Hỗ trợ Reset Password: `gienphim://reset-password`

---

## 🧪 Thử Nghiệm

### Disable FETCH Support (trên Web)
Đã thu nhỏ `__FETCH_SUPPORT__.blob = false` trong App.js để tránh lỗi

---

## 🐛 Troubleshooting

| Vấn Đề | Giải Pháp |
|--------|----------|
| Token hết hạn | Tự động refresh token hoặc đăng nhập lại |
| Không load hình ảnh | Kiểm tra kết nối internet & media URLs |
| Video không phát | Kiểm tra WebView & quyền truy cập |
| AsyncStorage error | Clear cache: `expo r -c` |

---

## 📚 Tài Liệu Tham Khảo

- [React Native Docs](https://reactnative.dev/)
- [Expo Documentation](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)

---

## 👨‍💻 Quy Trình Phát Triển

1. **Tạo Feature Branch**: `git checkout -b feature/new-feature`
2. **Phát Triển**: Thực hiện thay đổi & test
3. **Commit Changes**: `git commit -m "Add: description"`
4. **Push**: `git push origin feature/new-feature`
5. **Pull Request**: Tạo PR để review

---

## 📞 Liên Hệ & Hỗ Trợ

Nếu có vấn đề hoặc câu hỏi, vui lòng:
- Tạo Issue trên repository
- Liên hệ thông qua form "Liên Hệ" trong ứng dụng
- Gửi email cho team support

---

## 📄 License

MIT License - Xem file LICENSE để chi tiết

---

**Phiên bản**: 1.0.0  
**Cập nhật lần cuối**: 2026  
**Developer**: AppXemPhim Team
