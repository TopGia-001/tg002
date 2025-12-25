'use client'; // Cần thiết vì sử dụng interactive elements hoặc thư viện render

import React from 'react';
import Image from 'next/image';
import { Home, MoreHorizontal, X } from 'lucide-react';
import BottomNavbar from "@/src/component/bottomNavbar";
import Link from "next/link";

// Thư viện render Markdown
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from "rehype-raw";

// --- NỘI DUNG THỂ LỆ (COPY TỪ BƯỚC OCR) ---
const RULES_CONTENT = `
# **THỂ LỆ CHƯƠNG TRÌNH KHUYẾN MẠI**

(Kèm theo công văn số 1712/2025/ĐKKM-TOPGIAKIDS ngày 17/12/2025 của Công ty Cổ phần Thiết bị Mẹ và Bé TopGiaKids)  
\\
**1. Tên chương trình khuyến mại:**
RINH TOPGIA KIDS - LỘC ĐẦY NHÀ  
\\
**2. Hàng hóa, dịch vụ được khuyến mại:**  \\
Các sản phẩm thuộc danh mục hàng hóa khăn giấy, nước giặt mang nhãn hiệu TOPGIA KIDS do Công ty Công ty Cổ phần Thiết bị Mẹ và Bé TopGiaKids sản xuất, phân phối theo Phụ lục 01 và Phụ lục 02 đính kèm văn bản này.  
Số lượng hàng hóa, dịch vụ ước tính: 50,377 sản phẩm.  
Tổng giá trị hàng được khuyến mại ước tính (VNĐ): 38,594,169,999 VNĐ (Bằng chữ: Ba mươi tám tỷ năm trăm chín mươi tư triệu một trăm sáu mươi chín nghìn chín trăm chín mươi chín đồng)  
\\
**3. Thời gian khuyến mại:**
Thời gian đặt thiệp có mã dự thưởng vào trong thùng sản phẩm theo phụ lục: Từ 0h00 ngày 05/01/2026 đến 23h59 ngày 02/02/2026  
\\
**4. Địa bàn (phạm vi) khuyến mại:**  \\
Hệ thống sàn thương mại điện tử của Công ty Công ty Cổ phần Thiết bị Mẹ và Bé TopGiaKids trên toàn lãnh thổ Việt Nam.  
\\
**Danh sách hệ thống sàn thương mại điện tử:** 
| Tên hệ thống sàn thương mại điện tử | Link hệ thống sàn thương mại điện tử |
| :--- | :--- |
| TOPGIAKIDS | https://www.tiktok.com/@topgiakidschiase |
| TOPGIAKIDS HCM STORE | https://www.tiktok.com/@topgiakids.hcm |
| TopGia HCM Store | https://shopee.vn/topgiahcm.store |
| TopGiaKids HN | https://shopee.vn/topgiakidshn |
| TopGiaKids HCM Store | https://shopee.vn/topgiakids.hcm |

**5. Hình thức khuyến mại:**
Chương trình khuyến mại mang tính may rủi  
\\
**6. Khách hàng của chương trình khuyến mại (đối tượng hưởng khuyến mại):**  \\
Các đối tượng được tham gia chương trình khuyến mại: Tất cả khách hàng trên toàn quốc mua hàng hóa khuyến mại trên sàn thương mại điện tử của Công ty Công ty Cổ phần Thiết bị Mẹ và Bé TopGiaKids quy định tại Mục 4 Thể lệ, các hàng hóa khuyến mại nêu tại Mục 2 văn bản này trong thời gian khuyến mại.   
Các đối tượng không được tham gia chương trình khuyến mại là người lao động đang làm việc cho Công ty Công ty Cổ phần Thiết bị Mẹ và Bé TopGiaKids.  
\\
**7. Cơ cấu giải thưởng:**
<table style="width: 100%; border-collapse: collapse; border: 1px solid black; text-align: center;">
  <thead>
    <tr>
      <th style="border: 1px solid black; padding: 8px;">Cơ cấu giải thưởng</th>
      <th style="border: 1px solid black; padding: 8px;">Nội dung giải thưởng (chi tiết nội dung và ký mã hiệu từng giải thưởng)</th>
      <th style="border: 1px solid black; padding: 8px;">Trị giá giải thưởng (VNĐ)</th>
      <th style="border: 1px solid black; padding: 8px;">Số giải</th>
      <th style="border: 1px solid black; padding: 8px;">Thành tiền (VNĐ)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid black; padding: 8px;">Giải thưởng xe máy điện</td>
      <td style="border: 1px solid black; padding: 8px;">Xe máy điện Vinfast Feliz 2025</td>
      <td style="border: 1px solid black; padding: 8px;">25,900,000</td>
      <td style="border: 1px solid black; padding: 8px;">1</td>
      <td style="border: 1px solid black; padding: 8px;">25,900,000</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 8px;">Giải thưởng máy hút bụi</td>
      <td style="border: 1px solid black; padding: 8px;">Máy hút bụi lau nhà cầm tay Roborock F25 ACE Combo</td>
      <td style="border: 1px solid black; padding: 8px;">12,800,000</td>
      <td style="border: 1px solid black; padding: 8px;">1</td>
      <td style="border: 1px solid black; padding: 8px;">12,800,000</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 8px;">Giải thưởng máy giặt/sấy</td>
      <td style="border: 1px solid black; padding: 8px;">Máy Giặt/Sấy Samsung Inverter 9.5 Kg WD95T4046CE/SV</td>
      <td style="border: 1px solid black; padding: 8px;">8,590,000</td>
      <td style="border: 1px solid black; padding: 8px;">1</td>
      <td style="border: 1px solid black; padding: 8px;">8,590,000</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 8px;">Giải thưởng máy lọc nước</td>
      <td style="border: 1px solid black; padding: 8px;">Máy lọc nước nóng lạnh Kangaroo KG10A17</td>
      <td style="border: 1px solid black; padding: 8px;">5,499,000</td>
      <td style="border: 1px solid black; padding: 8px;">1</td>
      <td style="border: 1px solid black; padding: 8px;">5,499,000</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 8px;">Giải thưởng máy lọc không khí</td>
      <td style="border: 1px solid black; padding: 8px;">Xiaomi Smart Air Purifier 4 máy lọc không khí diện tích 40 m²</td>
      <td style="border: 1px solid black; padding: 8px;">3,390,000</td>
      <td style="border: 1px solid black; padding: 8px;">1</td>
      <td style="border: 1px solid black; padding: 8px;">3,390,000</td>
    </tr>
    <tr>
      <td colspan="3" style="border: 1px solid black; padding: 8px; font-weight: bold; text-align: center;">Tổng</td>
      <td style="border: 1px solid black; padding: 8px; font-weight: bold;">5</td>
      <td style="border: 1px solid black; padding: 8px; font-weight: bold;">56,179,000</td>
    </tr>
  </tbody>
</table>

- Tổng giá trị giải thưởng trong chương trình khuyến mại: 56,179,000 VNĐ (Bằng chữ: Năm mươi sáu triệu một trăm bảy mươi chín nghìn đồng).  
- Giải thưởng chỉ bao gồm trị giá của giải thưởng mà không bao gồm các chi phí khác.
- Giải thưởng không được chuyển nhượng lại cho bên thứ ba.
- Tổng giá trị giải thưởng so với tổng giá trị hàng hóa, dịch vụ khuyến mãi: 0.146%
- Các giải thưởng không được quy đổi thành tiền mặt.

**8. Nội dung chi tiết thể lệ chương trình khuyến mại:**  
\\
**8.1 Điều kiện, cách thức, thủ tục cụ thể khách hàng phải thực hiện để được tham gia chương trình khuyến mại:**

**BƯỚC 1:** Trong thời gian khuyến mại từ 0h00 ngày 05/01/2026 đến 23h59 ngày 02/02/2026, khách hàng mua một sản phẩm trong Sản phẩm Khuyến mại tại Mục 2 trên các nền tảng thuộc Mục 4 Thể lệ này. Trong mỗi thùng đựng sản phẩm sẽ có một tấm thiệp.   
**BƯỚC 2:** Sau tối đa 05 ngày khách hàng nhận Sản phẩm khuyến mại sẽ thấy tấm thiệp mặt trước là QRCode dẫn vào website chương trình khuyến mãi của Công ty. Mã dự thưởng được in phía mặt trong của thiệp là mã riêng biệt, tương ứng với 01 (một) lần trải nghiệm và tham gia chương trình. Mã dự thưởng sẽ gồm 10 ký tự bao gồm cả chữ và số ngẫu nhiên để tham gia Chương trình khuyến mại của Công ty tổ chức (Sau đây gọi tắt là “Chương trình”). Mã dự thưởng trên thiệp có hiệu lực đến hết ngày 7/2/2026.
<div class="md:hidden flex flex-col items-center gap-6 my-8">
  <img src="/assets/rules-1.png" alt="Mobile Rules 1" class="w-32 h-auto object-contain" />
  <img src="/assets/rules-2.png" alt="Mobile Rules 2" class="w-32 h-auto object-contain" />
</div>

<div class="hidden md:flex justify-center my-8">
  <img src="/assets/rules-desktop.png" alt="Desktop Rules" class="md:w-[500px] h-auto object-contain" />
</div>

**BƯỚC 3:** Khách hàng quét mã QR ở phía sau thiệp hoặc trực tiếp truy cập vào địa chỉ website https://locdaynha.topgiakids.vn/ để vào trang khuyến mại của TOPGIAKIDS (Sau đây gọi là “website”). Sau khi truy cập, khách hàng chọn tham gia chương trình bằng cách nhấn vào nút “THAM GIA NGAY” và điền các thông tin sau: Mã dự thưởng, Họ và tên, Số điện thoại, Năm sinh, Địa chỉ và chọn các sản phẩm đã mua.  
Mỗi thiệp được gắn một Mã dự thưởng duy nhất, bao gồm 10 ký tự bao gồm chữ và số. Mã dự thưởng được hệ thống tạo ngẫu nhiên, và tương ứng với một cơ hội tham gia bốc thăm trúng thưởng.
<div class="flex justify-center gap-4 md:gap-10 my-8">
    <img src="/assets/rules-3.png" alt="Mô tả ảnh 3" class="w-32 md:w-50 h-auto object-contain" />
</div>

**BƯỚC 4:** Khách hàng tiếp tục nhấn vào các ô được yêu cầu tại trang đăng ký:  
+ Tôi xác nhận tham gia chương trình trên cơ sở tôi đã đọc, hiểu, đồng ý với các Điều kiện và Điều khoản áp dụng, Chính sách bảo mật, và đồng ý cung cấp thông tin cá nhân để đăng ký tham gia chương trình. (Khách hàng cần nhấn vào mục này để tiếp tục tham gia chương trình.  
Trường hợp khách hàng không đồng ý cung cấp thông tin cá nhân để đăng ký tham gia chương trình thì khách hàng không thể tiếp tục tham gia chương trình khuyến mại của TopGia).  
+ Và nhấn "ĐĂNG KÝ BỐC THĂM NGAY” để có cơ hội nhận thưởng.  

Trong vòng 1p sau khi nhập Mã dự thưởng, khách hàng nhận được thông báo từ Website:  
<table style="width: 100%; border-collapse: collapse; border: 1px solid black;">
  <thead>
    <tr>
      <th style="border: 1px solid black; padding: 8px; text-align: center;">STT</th>
      <th style="border: 1px solid black; padding: 8px; text-align: center;">Trường hợp</th>
      <th style="border: 1px solid black; padding: 8px; text-align: center;">Nội dung thông báo từ Landing Page</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid black; padding: 8px; text-align: center;">1</td>
      <td style="border: 1px solid black; padding: 8px; text-align: center;">Trường hợp gửi Mã dự thưởng thành công</td>
      <td style="border: 1px solid black; padding: 8px; ">Chúc mừng! Mã dự thưởng của bạn đã được gửi thành công.</br> Kết quả bốc thăm may mắn đợt 1 sẽ được công bố vào 17h ngày 12/01/2026 trên fanpage TopGiaKids và website chương trình. (hệ thống trả kết quả từ 0h00 ngày 05/01/2026 đến 23h59 ngày 11/01/2026)</br> Kết quả bốc thăm may mắn đợt 2 sẽ được công bố vào 17h ngày 08/02/2026 trên fanpage TopGiaKids và website chương trình.(hệ thống trả kết quả từ 0h00 ngày 12/01/2026 đến 23h59 ngày 07/02/2026</br> Đừng quên theo dõi các kênh chính thức để cập nhật kết quả và những thông tin mới nhất từ TopGiaKids nhé!</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 8px; text-align: center;">2</td>
      <td rowspan="3" style="border: 1px solid black; padding: 8px; text-align: center;">Trường hợp gửi Mã dự thưởng không thành công</td>
      <td style="border: 1px solid black; padding: 8px;">Trường hợp Mã dự thưởng đã được nhập vào hệ thống trước đó:</br>Mã dự thưởng đã được sử dụng trước đó!</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 8px; text-align: center;">3</td>
      <td style="border: 1px solid black; padding: 8px;">Trường hợp nhận sai Mã dự thưởng:</br>Mã dự thưởng không đúng!</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 8px; text-align: center;">4</td>
      <td style="border: 1px solid black; padding: 8px;">Nếu khách hàng nhập sai Mã dự thưởng từ lần thứ 03:</br>Bạn đã nhập quá số lần cho phép!</td>
    </tr>
  </tbody>
</table>

**8.2. Thời gian, cách thức phát hành bằng chứng xác nhận trúng thưởng:**
- Trong thời gian khuyến mại, khách hàng mua Sản phẩm khuyến mại sẽ nhận được thiệp dự thưởng kèm theo sản phẩm. Khách hàng thực hiện quét mã QR Code trên thiệp và nhập Mã dự thưởng in trên thiệp để tham gia chương trình.
- Tổng số lượng Mã dự thưởng được phát hành trong chương trình khuyến mại tương ứng với số lượng sản phẩm khuyến mại theo Phụ lục đính kèm.
- Sau khi khách hàng nhập Mã dự thưởng hợp lệ và hoàn tất thông tin theo yêu cầu trên Website của chương trình, hệ thống sẽ ghi nhận thông tin tham gia và gửi thông báo xác nhận đăng ký thành công cho khách hàng.   
Thông báo này được xem là bằng chứng xác nhận khách hàng đã tham gia chương trình hợp lệ.
- Thời gian phát hành và tiếp nhận Mã dự thưởng được áp dụng trong suốt thời gian diễn ra chương trình khuyến mại, theo quy định tại Thể lệ chương trình và thông báo công khai trên các kênh chính thức của doanh nghiệp.

**8.3. Quy định về bằng chứng xác định trúng thưởng**
- Mã dự thưởng gồm 10 ký tự ngẫu nhiên cả số và chữ in mặt trong của tấm thiệp được để trong thùng đựng Sản phẩm khuyến mại.  Mã dự thưởng được hệ thống tạo ngẫu nhiên, không trùng lặp và tương ứng với 01 (một) cơ hội tham gia bốc thăm trúng thưởng.
- Sản phẩm, thẻ cào phải do Công ty TNHH Thương mại xuất nhập khẩu Fani phát hành, trong đó mã dự thưởng phải rõ nét, không bị cạo xóa, chỉnh sửa, rách rời, chắp vá.
- Tổng số lượng thiệp và mã dự thưởng được phát hành trong chương trình khuyến mại tương ứng với số lượng sản phẩm khuyến mại theo Phụ lục đính kèm.

**8.4. Thời gian, địa điểm và cách thức xác định trúng thưởng**
- Chương trình khuyến mại được tổ chức trao giải thành 02 (hai) đợt, căn cứ trên thời điểm hệ thống ghi nhận Mã dự thưởng hợp lệ của khách hàng.
  - Đợt 1: Bao gồm các Mã dự thưởng được hệ thống ghi nhận từ ngày 05/01/2026 đến 23h59 ngày 11/01/2026. Đối với Đợt 1, việc bốc thăm xác định trúng thưởng được thực hiện vào 10h00 ngày 12/01/2026 thông qua hệ thống điện tử hỗ trợ quay số ngẫu nhiên tại địa chỉ https://commentpicker.com/ trước sự chứng kiến của khách hàng và được lập thành biên bản. Kết quả trúng thưởng được công bố chính thức vào 17h00 cùng ngày (12/01/2026) trên các kênh thông tin chính thức của chương trình.  
FanpageFacebook:  
https://www.facebook.com/profile.php?id=61579036809159  
\\
Các giải thưởng sẽ trao trong Đợt 1 bao gồm:
<table style="width: 100%; border-collapse: collapse; border: 1px solid black; text-align: center;">
  <thead>
    <tr>
      <th style="border: 1px solid black; padding: 8px;">Cơ cấu giải thưởng</th>
      <th style="border: 1px solid black; padding: 8px;">Nội dung giải thưởng (chi tiết nội dung và ký mã hiệu từng giải thưởng)</th>
      <th style="border: 1px solid black; padding: 8px;">Trị giá giải thưởng (VNĐ)</th>
      <th style="border: 1px solid black; padding: 8px;">Số giải</th>
      <th style="border: 1px solid black; padding: 8px;">Thành tiền (VNĐ)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid black; padding: 8px;">Giải thưởng máy hút bụi</td>
      <td style="border: 1px solid black; padding: 8px;">Máy hút bụi lau nhà cầm tay Roborock F25 ACE Combo</td>
      <td style="border: 1px solid black; padding: 8px;">12,800,000</td>
      <td style="border: 1px solid black; padding: 8px;">1</td>
      <td style="border: 1px solid black; padding: 8px;">12,800,000</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 8px;">Giải thưởng máy lọc không khí</td>
      <td style="border: 1px solid black; padding: 8px;">Xiaomi Smart Air Purifier 4 máy lọc không khí diện tích 40 m²</td>
      <td style="border: 1px solid black; padding: 8px;">3,390,000</td>
      <td style="border: 1px solid black; padding: 8px;">1</td>
      <td style="border: 1px solid black; padding: 8px;">3,390,000</td> 
    </tr>
  </tbody>
</table>

  - Đợt 2: Bao gồm các Mã dự thưởng được hệ thống ghi nhận từ 00h00 ngày 12/01/2026 đến 23h59 ngày 07/02/2026. Đối với Đợt 2, việc bốc thăm xác định trúng thưởng được thực hiện vào 10h00 ngày 08/02/2026 thông qua hệ thống điện tử hỗ trợ quay số ngẫu nhiên tại địa chỉ https://commentpicker.com trước sự chứng kiến của khách hàng và được lập thành biên bản.  Kết quả trúng thưởng được công bố chính thức vào 17h00 cùng ngày (08/02/2026) trên các kênh thông tin chính thức của chương trình.  
Fanpage Facebook:  
https://www.facebook.com/profile.php?id=61579036809159  
\\
Các giải thưởng sẽ trao trong Đợt 2 bao gồm:
<table style="width: 100%; border-collapse: collapse; border: 1px solid black; text-align: center;">
  <thead>
    <tr>
      <th style="border: 1px solid black; padding: 8px;">Cơ cấu giải thưởng</th>
      <th style="border: 1px solid black; padding: 8px;">Nội dung giải thưởng (chi tiết nội dung và ký mã hiệu từng giải thưởng)</th>
      <th style="border: 1px solid black; padding: 8px;">Trị giá giải thưởng (VNĐ)</th>
      <th style="border: 1px solid black; padding: 8px;">Số giải</th>
      <th style="border: 1px solid black; padding: 8px;">Thành tiền (VNĐ)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid black; padding: 8px;">Giải thưởng xe máy điện</td>
      <td style="border: 1px solid black; padding: 8px;">Xe máy điện Vinfast Feliz 2025</td>
      <td style="border: 1px solid black; padding: 8px;">25,900,000</td>
      <td style="border: 1px solid black; padding: 8px;">1</td>
      <td style="border: 1px solid black; padding: 8px;">25,900,000</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 8px;">Giải thưởng máy giặt/sấy</td>
      <td style="border: 1px solid black; padding: 8px;">Máy Giặt/Sấy Samsung Inverter 9.5 Kg WD95T4046CE/SV</td>
      <td style="border: 1px solid black; padding: 8px;">8,590,000</td>
      <td style="border: 1px solid black; padding: 8px;">1</td>
      <td style="border: 1px solid black; padding: 8px;">8,590,000</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 8px;">Giải thưởng máy lọc nước</td>
      <td style="border: 1px solid black; padding: 8px;">Máy lọc nước nóng lạnh Kangaroo KG10A17</td>
      <td style="border: 1px solid black; padding: 8px;">5,499,000</td>
      <td style="border: 1px solid black; padding: 8px;">1</td>
      <td style="border: 1px solid black; padding: 8px;">5,499,000</td>
    </tr>
  </tbody>
</table>

- Dữ liệu đầu vào của hệ thống bốc thăm là danh sách các Mã dự thưởng hợp lệ được hệ thống ghi nhận trong từng đợt, đảm bảo:
  + Mỗi Mã dự thưởng chỉ xuất hiện 01 (một) lần trong danh sách bốc thăm;
  + Mã dự thưởng được lựa chọn ngẫu nhiên, khách quan, không có sự can thiệp của con người.
- Bằng chứng xác định trúng thưởng bao gồm:
  + Kết quả quay số hiển thị trực tiếp trên hệ thống bốc thăm;
  + Dữ liệu Mã dự thưởng trúng thưởng được hệ thống lưu trữ;
  + Thông báo kết quả trúng thưởng được công bố trên các kênh chính thức của chương trình và thông báo trực tiếp đến khách hàng trúng thưởng.

**8.5 Thông báo trúng thưởng:**
- Sau khi có kết quả bốc thăm, Khách hàng tham gia chương trình có thể nhận kết quả trúng thưởng thông qua Website hoặc Fanpage TopGiaKids.
- Trong vòng 03 ngày làm việc sau khi rút thăm, Công ty Cổ phần Thiết bị Mẹ và Bé TopGiaKids sẽ gọi điện cho khách hàng trúng giải (từ đầu số 0372087105) theo số điện thoại khách hàng đã cung cấp tại website để thông báo cho người trúng thưởng quy trình nộp hồ sơ trúng thưởng.  
\\
**8.6. Thời gian địa điểm, cách thức và thủ tục trao thưởng**
- Địa điểm, cách thức trao thưởng: 
  + Mọi trao đổi đối với khách hàng trúng thưởng từ công ty về việc thông báo trúng thưởng cho khách hàng, hướng dẫn cung cấp hồ sơ trúng thưởng, phản hồi hồ sơ trúng thưởng và thủ tục trao thưởng được quy định dưới đây sẽ liên hệ từ: SĐT: 0372087105; Email: topgiakids@gmail.com.
  + Trong vòng 15 ngày kể từ ngày khách hàng trúng thưởng, BTC sẽ liên hệ khách hàng theo số điện thoại khách hàng đã đăng ký trên Website để thông báo trúng thưởng và hướng dẫn thủ tục trao thưởng.
- Thủ tục trao thưởng: Khách hàng trúng thưởng phải cung cấp các tài liệu và thông tin nhận thưởng qua địa chỉ email: topgiakids@gmail.com trong vòng 03 ngày kể từ ngày BTC thông báo kết quả trúng thưởng qua điện thoại cho khách hàng:
  + Hình chụp CCCD/Hộ chiếu
  + Số điện thoại của khách hàng như đã đăng ký tại Website.
- Trong vòng 10 ngày kể từ khi nhận được email hồ sơ trúng thưởng, Ban Tổ chức sẽ kiểm tra tính đầy đủ và trùng khớp của thông tin so với dữ liệu khách hàng đã đăng ký tại Website.
  + Nếu thông tin hợp lệ, Ban Tổ chức sẽ liên hệ với khách hàng để thông báo thủ tục nhận giải.
  + Nếu hồ sơ trúng thưởng chưa đầy đủ hoặc không trùng khớp với dữ liệu hệ thống, Ban Tổ chức sẽ thông báo cho khách hàng qua điện thoại và email. Khách hàng cần bổ sung thông tin trong vòng 03 ngày làm việc kể từ khi nhận được thông báo. Sau khi thông tin được bổ sung đầy đủ và hợp lệ, Ban Tổ chức sẽ tiếp tục quy trình kiểm tra và liên hệ trong vòng 10 ngày kể từ thời điểm nhận được email hồ sơ trúng thưởng ban đầu.
Nếu khách hàng không cung cấp đầy đủ hồ sơ hợp lệ trong thời gian quy định, Ban tổ chức sẽ hủy tư cách thắng giải; và tiến hành chọn người thắng giải mới theo phương thức tại mục 8.4.
- Sau khi kiểm tra thông tin đầy đủ, hợp lệ, đơn vị tổ chức sẽ trao thưởng bằng cách gửi giải thưởng theo địa chỉ mà khách hàng cung cấp chậm nhất là ngày 20/02/2026. Giải thưởng xem như đã trao cho khách hàng sau khi có đơn vị giao phát xác nhận đã giao hàng.  
\\
**9. Đầu mối giải đáp thắc mắc cho khách hàng về các vấn đề liên quan đến chương trình khuyến mại (người liên hệ, điện thoại...).**
\\
Mọi thắc mắc liên quan đến chương trình khuyến mại này, khách hàng liên hệ theo hotline chương trình 0372087105 để được hướng dẫn, giải đáp.    
\\
**10. Trách nhiệm công bố thông tin:**
\\
Công ty Công ty Cổ phần Thiết bị Mẹ và Bé TopGiaKids thông báo chương trình khuyến mại,  thể lệ chương trình chính thức trên các sàn thương mại điện tử quy định tại mục 4 Thể lệ này.    
Công ty Công ty Cổ phần Thiết bị Mẹ và Bé TopGiaKids có trách nhiệm thông báo kết quả cho người trúng thưởng. Danh sách khách hàng trúng thưởng được công bố chính thức trên các sàn thương mại điện tử quy định tại mục 4 Thể lệ này.  
\\
**11. Các quy định khác:**
\\
Khách hàng trúng thưởng phải chịu thuế thu nhập không thường xuyên (nếu có) theo quy định của pháp luật và các chi phí đi lại, ăn ở và các chi phí khác liên quan đến việc nhận thưởng và chuyển quyền sở hữu, sử dụng tài sản (nếu có).    
Việc tổ chức chương trình khuyến mại phải đảm bảo tính công bằng, minh bạch và khách quan.  
Công ty Công ty Cổ phần Thiết bị Mẹ và Bé TopGiaKids được sử dụng tên và hình ảnh của khách hàng trúng thưởng cho mục đích quảng cáo thương mại nếu được sự chấp thuận của khách hàng trúng thưởng.  
Trong trường hợp xảy ra tranh chấp liên quan đến chương trình khuyến mại này, Công ty Công ty Cổ phần Thiết bị Mẹ và Bé TopGiaKids có trách nhiệm trực tiếp giải quyết. Nếu không thỏa thuận được, tranh chấp sẽ được xử lý theo quy định của pháp luật.  
Đối với những giải thường không có người trúng thưởng, Công ty Cổ phần Thiết bị Mẹ và Bé TopGiaKids phải có trách nhiệm trích nộp bằng tiền mặt 50% giá trị đã công bố của giải thưởng đó vào Ngân sách nhà nước theo quy định pháp luật.   
\\
ĐẠI DIỆN CỦA THƯƠNG NHÂN
<center>PHỤ LỤC 01</center>
<center>(Kèm theo Công văn Số: 1711 /2025/ĐKKM-TOPGIAKIDS)</center>
<table style="width: 100%; border-collapse: collapse; border: 1px solid black; text-align: center;">
  <thead>
    <tr>
      <th style="border: 1px solid black; padding: 8px;">STT</th>
      <th style="border: 1px solid black; padding: 8px;">Hàng hóa được khuyến mại</th>
      <th style="border: 1px solid black; padding: 8px;">Số lượng được khuyến mại (thùng)</th>
      <th style="border: 1px solid black; padding: 8px;">Số lượng sản phẩm có mã dự thưởng (thùng)</th>
      <th style="border: 1px solid black; padding: 8px;">Giá trị hàng được khuyến mại (VNĐ/thùng)</th>
      <th style="border: 1px solid black; padding: 8px;">Tổng giá trị hàng được khuyến mại (VNĐ)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid black; padding: 8px;">1</td>
      <td style="border: 1px solid black; padding: 8px;">Máy đun hâm tiệt trùng UVC m1-08</td>
      <td style="border: 1px solid black; padding: 8px;">6,600</td>
      <td style="border: 1px solid black; padding: 8px;">6,600</td>
      <td style="border: 1px solid black; padding: 8px;">1,799,000</td>
      <td style="border: 1px solid black; padding: 8px;">7,590,000,000</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 8px;">2</td>
      <td style="border: 1px solid black; padding: 8px;">Máy đun nước pha sữa tiệt trùng UVC 208</td>
      <td style="border: 1px solid black; padding: 8px;">6,600</td>
      <td style="border: 1px solid black; padding: 8px;">6,600</td>
      <td style="border: 1px solid black; padding: 8px;">1,799,000</td>
      <td style="border: 1px solid black; padding: 8px;">7,590,000,000</td>
    </tr>
	<tr>
      <td style="border: 1px solid black; padding: 8px;">3</td>
      <td style="border: 1px solid black; padding: 8px;">Máy đun hâm tiệt trùng UVC 8879</td>
      <td style="border: 1px solid black; padding: 8px;">3,600</td>
      <td style="border: 1px solid black; padding: 8px;">3,600</td>
      <td style="border: 1px solid black; padding: 8px;">1,999,000</td>
      <td style="border: 1px solid black; padding: 8px;">4,140,000,000</td>
    </tr>
	<tr>
      <td style="border: 1px solid black; padding: 8px;">4</td>
      <td style="border: 1px solid black; padding: 8px;">Máy đun hâm tiệt trùng UVC cao cấp m1-05</td>
      <td style="border: 1px solid black; padding: 8px;">1,400</td>
      <td style="border: 1px solid black; padding: 8px;">1,400</td>
      <td style="border: 1px solid black; padding: 8px;">3,999,000</td>
      <td style="border: 1px solid black; padding: 8px;">4,200,000,000</td>
    </tr>
	<tr>
      <td style="border: 1px solid black; padding: 8px;">5</td>
      <td style="border: 1px solid black; padding: 8px;">Máy hâm sữa di động cầm tay T1-01</td>
      <td style="border: 1px solid black; padding: 8px;">3,000</td>
      <td style="border: 1px solid black; padding: 8px;">3,000</td>
      <td style="border: 1px solid black; padding: 8px;">1,299,000</td>
      <td style="border: 1px solid black; padding: 8px;">2,457,000,000</td>
    </tr>
	<tr>
      <td style="border: 1px solid black; padding: 8px;">6</td>
      <td style="border: 1px solid black; padding: 8px;">Máy đun hâm pha sữa M2-03</td>
      <td style="border: 1px solid black; padding: 8px;">2,050</td>
      <td style="border: 1px solid black; padding: 8px;">2,050</td>
      <td style="border: 1px solid black; padding: 8px;">999,000</td>
      <td style="border: 1px solid black; padding: 8px;">1,345,450,000</td>
    </tr>
	<tr>
      <td style="border: 1px solid black; padding: 8px;">7</td>
      <td style="border: 1px solid black; padding: 8px;">Máy đun hâm nước pha sữa cầm tay M3-03</td>
      <td style="border: 1px solid black; padding: 8px;">1,300</td>
      <td style="border: 1px solid black; padding: 8px;">1,300</td>
      <td style="border: 1px solid black; padding: 8px;">1,599,000</td>
      <td style="border: 1px solid black; padding: 8px;">1,387,000,000</td>
    </tr>
	<tr>
      <td style="border: 1px solid black; padding: 8px;">8</td>
      <td style="border: 1px solid black; padding: 8px;">Máy hút sữa điện đôi 8166</td>
      <td style="border: 1px solid black; padding: 8px;">800</td>
      <td style="border: 1px solid black; padding: 8px;">800</td>
      <td style="border: 1px solid black; padding: 8px;">1,383,000</td>
      <td style="border: 1px solid black; padding: 8px;">793,500,000</td>
    </tr>
	<tr>
      <td style="border: 1px solid black; padding: 8px;">9</td>
      <td style="border: 1px solid black; padding: 8px;">Máy lắc giữ ấm sữa T202</td>
      <td style="border: 1px solid black; padding: 8px;">500</td>
      <td style="border: 1px solid black; padding: 8px;">500</td>
      <td style="border: 1px solid black; padding: 8px;">759,000</td>
      <td style="border: 1px solid black; padding: 8px;">370,300,000</td>
    </tr>
	<tr>
      <td style="border: 1px solid black; padding: 8px;">10</td>
      <td style="border: 1px solid black; padding: 8px;">Máy hút sữa rảnh tay T102</td>
      <td style="border: 1px solid black; padding: 8px;">300</td>
      <td style="border: 1px solid black; padding: 8px;">300</td>
      <td style="border: 1px solid black; padding: 8px;">749,000</td>
      <td style="border: 1px solid black; padding: 8px;">100,000,000</td>
    </tr>
	<tr>
      <td style="border: 1px solid black; padding: 8px;">11</td>
      <td style="border: 1px solid black; padding: 8px;">Bỉm TopGiaKids</td>
      <td style="border: 1px solid black; padding: 8px;">29,427</td>
      <td style="border: 1px solid black; padding: 8px;">29,427</td>
      <td style="border: 1px solid black; padding: 8px;">504,000</td>
      <td style="border: 1px solid black; padding: 8px;">14,830,919,999</td>
    </tr>
  </tbody>
</table>
`;

export default function RulesPage() {
    return (
        <div className="h-screen flex flex-col font-sans bg-[#8B0000] relative overflow-hidden">

            <div className="hidden md:block fixed inset-0 z-0 w-full h-full">
                <Image src="/assets/bg-simple.webp" alt="BG Desktop" fill className="object-cover object-top" priority />
            </div>
            <div className="md:hidden fixed top-[45px] left-0 right-0 bottom-0 z-0 w-full">
                <Image src="/assets/bg-simple-mobile.webp" alt="BG Mobile" fill className="object-cover object-top" priority />
            </div>

            <header className="md:hidden bg-[#b91c1c] text-white px-4 py-2 flex justify-between items-center shadow-lg z-50 relative border-b border-red-900/30 shrink-0 h-[45px]">
                <div className="flex items-center gap-2">
                    <Link href="/">
                      <Home className="w-5 h-5 text-white" />
                    </Link>
                    <span className="font-bold text-[10px] uppercase bg-black/20 px-2 py-1 rounded">THỂ LỆ CHƯƠNG TRÌNH</span>
                </div>
                <div className="flex items-center gap-2">
                    <button className="p-1 rounded"><MoreHorizontal size={20}/></button>
                    <button className="p-1 rounded"><X size={20}/></button>
                </div>
            </header>

            <div className="flex-1 flex flex-col items-center w-full min-h-0 pb-[80px] md:pb-[60px] pt-[10vh] md:pt-[12vh]">

                {/* 1. TITLE PAGE */}
                <div className="shrink-0 flex justify-center mb-4 md:mb-6 px-4 z-10">
                    <h1
                        className="shopee-extrabold text-center text-white uppercase font-black leading-tight tracking-wide
                            text-[20px] [-webkit-text-stroke:6px_#701318]
                            md:text-[42px] md:[-webkit-text-stroke:10px_#701318]
                            drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                        style={{paintOrder: 'stroke fill'}}
                    >
                        THỂ LỆ CHƯƠNG TRÌNH
                    </h1>
                </div>

                <div className="flex-1 w-full max-w-[1200px] px-4 overflow-hidden flex flex-col relative z-10 text-black">

                    <div className="bg-white w-full h-full rounded-3xl md:rounded-3xl shadow-2xl overflow-y-auto scrollbar-hide p-5 md:p-10 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">

                        <article className="shopee-regular prose prose-sm
                            prose-ul:list-disc prose-ul:pl-5
                            prose-li:my-1
                            md:prose-base prose-red max-w-none prose-headings:uppercase prose-headings:font-bold prose-a:text-blue-600 prose-table:text-sm">
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                rehypePlugins={[rehypeRaw]}
                                components={{
                                    ul: ({node, ...props}) => (
                                        <ul className="list-disc pl-6 my-4 space-y-2 text-black" {...props} />
                                    ),
                                    ol: ({node, ...props}) => (
                                        <ol className="list-decimal pl-6 my-4 space-y-2 text-black" {...props} />
                                    ),
                                    li: ({node, ...props}) => (
                                        <li className="leading-relaxed" {...props} />
                                    ),
                                    table: ({node, ...props}) => (
                                        <div className="overflow-x-auto my-4 border border-black shadow-sm">
                                            <table className="w-full text-left border-collapse min-w-[600px] border border-black" {...props} />
                                        </div>
                                    ),
                                    thead: ({node, ...props}) => (
                                        <thead className="bg-gray-100 text-black uppercase text-xs" {...props} />
                                    ),
                                    th: ({node, ...props}) => (
                                        <th className="px-4 py-3 font-bold border border-black" {...props} />
                                    ),
                                    td: ({node, ...props}) => {
                                        return <td className="px-4 py-3 border border-black text-[#1a1a1a]" {...props} />;
                                    }
                                }}
                            >
                                {RULES_CONTENT}
                            </ReactMarkdown>
                        </article>

                        <div className="h-10"></div>

                    </div>
                </div>

            </div>

            {/* NAVBAR */}
            <BottomNavbar hideDecor={true} />

        </div>
    );
}
