// Language translation system
(function() {
  // Translation dictionary
  const translations = {
    en: {
      // Navigation
      'Home': 'Home',
      'History': 'History',
      'Notify': 'Notify',
      'Account': 'Account',

      // Settings
      'Settings': 'Settings',
      'Appearance': 'Appearance',
      'Dark Mode': 'Dark Mode',
      'Switch between light and dark theme': 'Switch between light and dark theme',
      'Language': 'Language',
      'Choose your preferred language': 'Choose your preferred language',
      'English': 'English',
      'Thai': 'Thai',

      // Home
      'Welcome back,': 'Welcome back,',
      'Saleng Man': 'Saleng Man',
      'Green World': 'Green World',
      'Turn your trash into treasure and save the planet.': 'Turn your trash into treasure and save the planet.',
      'Services': 'Services',
      'Sell Old Items': 'Sell Old Items',
      'Dispose Trash': 'Dispose Trash',

      // Account
      'Username': 'Username',
      'Address': 'Address',
      'Phone': 'Phone',
      'My Selling History': 'My Selling History',
      'Help & Support': 'Help & Support',
      'Sign Out': 'Sign Out',

      // Contact
      'Contact Us': 'Contact Us',
      'Topic or question': 'Topic or question',
      'Please summarize what you\'d like help with': 'Please summarize what you\'d like help with',
      'Any other details that might help': 'Any other details that might help',
      'Full name': 'Full name',
      'Email': 'Email',
      'Attach photos (optional)': 'Attach photos (optional)',
      'Choose Files': 'Choose Files',
      'no files selected': 'no files selected',
      'Send Message': 'Send Message',

      // Notifications
      'Notification': 'Notification',
      'Today': 'Today',
      'Yesterday': 'Yesterday',
      'Buyer Arrived': 'Buyer Arrived',
      'Pickup Delayed': 'Pickup Delayed',
      'Sale Completed': 'Sale Completed',
      'Price Update': 'Price Update',
      'Special Bonus': 'Special Bonus',

      // Orders
      'Order Details': 'Order Details',
      'Waiting': 'Waiting',
      'Pending': 'Pending',
      'Completed': 'Completed',
      'Location & Details': 'Location & Details',
      'Pickup Location': 'Pickup Location',
      'View Buyers': 'View Buyers',
      'View Drivers': 'View Drivers',
      'Cancel': 'Cancel',
      'Confirm': 'Confirm',
      'Confirm Sale': 'Confirm Sale',
      'Post': 'Post',
      'Close': 'Close',

      // Categories
      'Type of Second Hand': 'Type of Second Hand',
      'Type of Trash': 'Type of Trash',
      'Search or add category...': 'Search or add category...',
      'Add Other Category': 'Add Other Category',
      'Add New Category': 'Add New Category',
      'Enter category name': 'Enter category name',
      'Add': 'Add',
      'Often used': 'Often used',
      'Confirm Selection': 'Confirm Selection',
      'Bottle': 'Bottle',
      'Plastic': 'Plastic',
      'Scrap Metal': 'Scrap Metal',
      'Paper': 'Paper',
      'Glass': 'Glass',
      'Cardboard': 'Cardboard',
      'Electronics': 'Electronics',

      // Address
      'Select Location': 'Select Location',
      'Where should we pick up your items?': 'Where should we pick up your items?',
      'Add New Address': 'Add New Address',
      'Label': 'Label',
      'City & Postal Code': 'City & Postal Code',
      'Phone Number': 'Phone Number',
      'Default': 'Default',

      // Post
      'Post Item': 'Post Item',
      'Post Second Hand': 'Post Second Hand',
      'Post Trash': 'Post Trash',

      // Track
      'Track Driver': 'Track Driver',
      'See real-time location': 'See real-time location',

      // Rating
      'Rate this Driver': 'Rate this Driver',
      'How was your experience?': 'How was your experience?',
      'Select a rating': 'Select a rating',
      'Submit': 'Submit',
      'Poor': 'Poor',
      'Fair': 'Fair',
      'Good': 'Good',
      'Very Good': 'Very Good',
      'Excellent': 'Excellent',
    },
    th: {
      // Navigation
      'Home': 'หน้าแรก',
      'History': 'ประวัติ',
      'Notify': 'แจ้งเตือน',
      'Account': 'บัญชี',

      // Settings
      'Settings': 'ตั้งค่า',
      'Appearance': 'การแสดงผล',
      'Dark Mode': 'โหมดมืด',
      'Switch between light and dark theme': 'สลับระหว่างธีมสว่างและมืด',
      'Language': 'ภาษา',
      'Choose your preferred language': 'เลือกภาษาที่คุณต้องการ',
      'English': 'อังกฤษ',
      'Thai': 'ไทย',

      // Home
      'Welcome back,': 'ยินดีต้อนรับ,',
      'Saleng Man': 'สะเหล่งแมน',
      'Green World': 'โลกสีเขียว',
      'Turn your trash into treasure and save the planet.': 'เปลี่ยนขยะของคุณให้เป็นสมบัติและช่วยรักษาโลก',
      'Services': 'บริการ',
      'Sell Old Items': 'ขายของเก่า',
      'Dispose Trash': 'ทิ้งขยะ',

      // Account
      'Username': 'ชื่อผู้ใช้',
      'Address': 'ที่อยู่',
      'Phone': 'โทรศัพท์',
      'My Selling History': 'ประวัติการขาย',
      'Help & Support': 'ช่วยเหลือและสนับสนุน',
      'Sign Out': 'ออกจากระบบ',

      // Contact
      'Contact Us': 'ติดต่อเรา',
      'Topic or question': 'หัวข้อหรือคำถาม',
      'Please summarize what you\'d like help with': 'กรุณาสรุปสิ่งที่คุณต้องการความช่วยเหลือ',
      'Any other details that might help': 'รายละเอียดอื่นๆ ที่อาจช่วยได้',
      'Full name': 'ชื่อ-นามสกุล',
      'Email': 'อีเมล',
      'Attach photos (optional)': 'แนบรูปภาพ (ไม่บังคับ)',
      'Choose Files': 'เลือกไฟล์',
      'no files selected': 'ไม่ได้เลือกไฟล์',
      'Send Message': 'ส่งข้อความ',

      // Notifications
      'Notification': 'การแจ้งเตือน',
      'Today': 'วันนี้',
      'Yesterday': 'เมื่อวาน',
      'Buyer Arrived': 'ผู้ซื้อมาถึงแล้ว',
      'Pickup Delayed': 'การรับล่าช้า',
      'Sale Completed': 'ขายสำเร็จ',
      'Price Update': 'อัปเดตราคา',
      'Special Bonus': 'โบนัสพิเศษ',

      // Orders
      'Order Details': 'รายละเอียดคำสั่ง',
      'Waiting': 'รอดำเนินการ',
      'Pending': 'รอการยืนยัน',
      'Completed': 'เสร็จสิ้น',
      'Location & Details': 'ตำแหน่งและรายละเอียด',
      'Pickup Location': 'สถานที่รับ',
      'View Buyers': 'ดูผู้ซื้อ',
      'View Drivers': 'ดูคนขับ',
      'Cancel': 'ยกเลิก',
      'Confirm': 'ยืนยัน',
      'Confirm Sale': 'ยืนยันการขาย',
      'Post': 'โพสต์',
      'Close': 'ปิด',

      // Categories
      'Type of Second Hand': 'ประเภทของมือสอง',
      'Type of Trash': 'ประเภทของขยะ',
      'Search or add category...': 'ค้นหาหรือเพิ่มหมวดหมู่...',
      'Add Other Category': 'เพิ่มหมวดหมู่อื่น',
      'Add New Category': 'เพิ่มหมวดหมู่ใหม่',
      'Enter category name': 'กรอกชื่อหมวดหมู่',
      'Add': 'เพิ่ม',
      'Often used': 'ใช้บ่อย',
      'Confirm Selection': 'ยืนยันการเลือก',
      'Bottle': 'ขวด',
      'Plastic': 'พลาสติก',
      'Scrap Metal': 'เศษโลหะ',
      'Paper': 'กระดาษ',
      'Glass': 'แก้ว',
      'Cardboard': 'กระดาษแข็ง',
      'Electronics': 'อิเล็กทรอนิกส์',

      // Address
      'Select Location': 'เลือกตำแหน่ง',
      'Where should we pick up your items?': 'เราควรไปรับสินค้าที่ไหน?',
      'Add New Address': 'เพิ่มที่อยู่ใหม่',
      'Label': 'ป้ายชื่อ',
      'City & Postal Code': 'เมืองและรหัสไปรษณีย์',
      'Phone Number': 'หมายเลขโทรศัพท์',
      'Default': 'ค่าเริ่มต้น',

      // Post
      'Post Item': 'โพสต์สินค้า',
      'Post Second Hand': 'โพสต์ของมือสอง',
      'Post Trash': 'โพสต์ขยะ',

      // Track
      'Track Driver': 'ติดตามคนขับ',
      'See real-time location': 'ดูตำแหน่งแบบเรียลไทม์',

      // Rating
      'Rate this Driver': 'ให้คะแนนคนขับ',
      'How was your experience?': 'ประสบการณ์ของคุณเป็นอย่างไร?',
      'Select a rating': 'เลือกคะแนน',
      'Submit': 'ส่ง',
      'Poor': 'แย่',
      'Fair': 'พอใช้',
      'Good': 'ดี',
      'Very Good': 'ดีมาก',
      'Excellent': 'ยอดเยี่ยม',
    }
  };

  // Get current language from localStorage
  function getCurrentLanguage() {
    return localStorage.getItem('language') || 'en';
  }

  // Set language
  function setLanguage(lang) {
    localStorage.setItem('language', lang);
    applyTranslations();
  }

  // Translate a single text
  function translate(text) {
    const lang = getCurrentLanguage();
    return translations[lang][text] || text;
  }

  // Apply translations to the page
  function applyTranslations() {
    const lang = getCurrentLanguage();
    const dict = translations[lang];

    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(el => {
      const key = el.getAttribute('data-translate');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Update all elements with data-translate-placeholder attribute
    document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
      const key = el.getAttribute('data-translate-placeholder');
      if (dict[key]) {
        el.placeholder = dict[key];
      }
    });

    // Auto-translate common text nodes
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );

    let node;
    while (node = walker.nextNode()) {
      const text = node.textContent.trim();
      if (text && dict[text]) {
        node.textContent = node.textContent.replace(text, dict[text]);
      }
    }
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyTranslations);
  } else {
    applyTranslations();
  }

  // Expose functions globally
  window.LanguageSystem = {
    getCurrentLanguage,
    setLanguage,
    translate,
    applyTranslations
  };
})();
