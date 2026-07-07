(() => {
  "use strict";

  /* ---------- ngôn ngữ (i18n) ---------- */

  const LANGUAGE_KEY = "sotuchi.language";
  let activeLanguage = localStorage.getItem(LANGUAGE_KEY) || "vi";

  // [vi, en] — chỉ đổi ký hiệu hiển thị. Khóa nào không có trong bảng thì t() trả
  // nguyên văn (dùng cho nhãn do người dùng tự gõ: danh mục/lọ tự tạo, ghi chú...).
  const T = {
    // Trang chủ / thẻ sức khỏe tài chính
    "nav.home.aria": ["Trang chủ", "Home"],
    "nav.stats.aria": ["Thống kê", "Statistics"],
    "nav.goals.aria": ["Mục tiêu", "Goals"],
    "hometab.situation": ["Tình hình", "Overview"],
    "hometab.formula": ["Công thức", "Formula"],
    "upgradeBtn.aria": ["Nâng cấp tài khoản", "Upgrade account"],
    "health.label": ["Sức khỏe tài chính", "Financial health"],
    "health.badge": ["🏆 Kỷ lục mới", "🏆 New record"],
    "health.current": ["Hiện tại", "Current"],
    "health.record": ["Kỷ lục", "Record"],
    "health.back.text": [
      "Thanh Sức khỏe Tài chính giúp biểu thị tình trạng tài chính hiện tại so với tổng số tiền kỷ lục của bạn",
      "The financial health bar shows your current finances compared to your all-time record balance",
    ],
    "health.back.tagline": ["\"Liên tục tiến lên\"", "\"Keep moving forward\""],
    "dash.totalAssets": ["Tổng tài sản", "Total assets"],
    "dash.today": ["Hôm nay", "Today"],
    "dash.new": ["Mới", "New"],

    // Công thức
    "formula.trigger.name": ["Chọn công thức", "Choose a formula"],
    "formula.trigger.desc": ["Nhấn để xem các công thức chia tiền", "Tap to see money-splitting formulas"],
    "formula.custom.editTitle": ["Chỉnh sửa", "Edit"],
    "formula.customRatio": ["Tự đặt tỉ lệ", "Set your own ratio"],
    "formula.bucketPanelTitle": ["Chia tiền theo công thức", "Split money by formula"],
    "formula.bucketEmpty": [
      "Chọn một công thức bên trên để bắt đầu chia tiền quan sát chi tiêu.",
      "Choose a formula above to start splitting money to track spending.",
    ],
    "formula.bucketNote": [
      "Bảng này chỉ mang tính quan sát, giúp bạn ước lượng chi tiêu theo công thức đã chọn.",
      "This table is for observation only, to help you estimate spending by the chosen formula.",
    ],
    "formula.splittingBy": ["Đang chia theo", "Splitting by"],
    "formula.month": ["Tháng", "Month"],

    // Tên công thức
    "formula.name.jars6": ["6 Chiếc Lọ", "6 Jars"],
    "formula.name.plan503020": ["50/30/20", "50/30/20"],
    "formula.name.babylon": ["Babylon", "Babylon"],
    "formula.name.custom": ["Tự quyết", "Custom"],

    // Nhãn các lọ (theo công thức, để tránh trùng ý nghĩa nhưng khác chữ giữa các công thức)
    "bucket.jars6.nec": ["Thiết yếu", "Essentials"],
    "bucket.jars6.ffa": ["Tự do tài chính", "Financial freedom"],
    "bucket.jars6.ltss": ["Tiết kiệm dài hạn", "Long-term savings"],
    "bucket.jars6.edu": ["Giáo dục", "Education"],
    "bucket.jars6.play": ["Hưởng thụ", "Enjoyment"],
    "bucket.jars6.give": ["Cho đi", "Giving"],
    "bucket.plan503020.need": ["Thiết yếu", "Essentials"],
    "bucket.plan503020.want": ["Hưởng thụ", "Enjoyment"],
    "bucket.plan503020.save": ["Tiết kiệm & đầu tư", "Savings & investing"],
    "bucket.babylon.spend": ["Chi tiêu", "Spending"],
    "bucket.babylon.save": ["Tiết kiệm", "Savings"],
    "formula.plan503020.pillDesc.save": ["Tiết kiệm", "Savings"],

    // Mô tả mặt sau của lọ (theo ý nghĩa, dùng chung cho các công thức)
    "bucket.desc.essentials": ["Chi phí bắt buộc: ăn ở, hóa đơn, đi lại hàng ngày.", "Required costs: rent, bills, daily transport."],
    "bucket.desc.freedom": ["Đầu tư và tích lũy để tiến tới tự do tài chính.", "Invest and accumulate toward financial freedom."],
    "bucket.desc.savings": ["Dành riêng cho những mục tiêu dài hạn của bạn.", "Reserved for your long-term goals."],
    "bucket.desc.education": ["Đầu tư cho kiến thức và kỹ năng của chính bạn.", "Invest in your own knowledge and skills."],
    "bucket.desc.enjoy": ["Tận hưởng cuộc sống, không cần cảm thấy có lỗi.", "Enjoy life, guilt-free."],
    "bucket.desc.giving": ["Chia sẻ, giúp đỡ người khác hoặc cộng đồng.", "Share and help others or your community."],
    "bucket.desc.default": ["Một phần trong kế hoạch chia tiền của bạn.", "Part of your money-splitting plan."],

    // Danh mục chi tiêu
    "cat.an-uong": ["Ăn uống", "Food & drink"],
    "cat.di-chuyen": ["Di chuyển", "Transport"],
    "cat.nha-o": ["Nhà ở", "Housing"],
    "cat.hoa-don": ["Hóa đơn", "Bills"],
    "cat.mua-sam": ["Mua sắm", "Shopping"],
    "cat.giai-tri": ["Giải trí", "Entertainment"],
    "cat.suc-khoe": ["Sức khỏe", "Health"],
    "cat.giao-duc": ["Giáo dục", "Education"],
    "cat.khac-chi": ["Khác", "Other"],
    // Danh mục thu nhập
    "cat.luong": ["Lương", "Salary"],
    "cat.thuong": ["Thưởng", "Bonus"],
    "cat.dau-tu": ["Đầu tư", "Investment"],
    "cat.khac-thu": ["Khác", "Other"],

    // Lịch sử giao dịch
    "tx.history": ["Lịch sử giao dịch", "Transaction history"],
    "tx.filter.all": ["Tất cả", "All"],
    "tx.filter.income": ["Thu", "Income"],
    "tx.filter.expense": ["Chi", "Expense"],
    "tx.empty": ["Chưa có giao dịch nào", "No transactions yet"],
    "tx.modalTitle.add": ["Thêm giao dịch", "Add transaction"],
    "tx.modalTitle.edit": ["Sửa giao dịch", "Edit transaction"],
    "tx.date": ["Ngày", "Date"],
    "tx.notePlaceholder": ["Ghi chú...", "Note..."],
    "tx.backspace.aria": ["Xóa 1 số", "Delete one digit"],
    "tx.delete": ["Xóa", "Delete"],
    "tx.save": ["Lưu", "Save"],
    "tx.typeToggle.aria": ["Đổi khoản thu / khoản chi", "Switch income / expense"],

    // Thống kê
    "stats.prevMonth.aria": ["Tháng trước", "Previous month"],
    "stats.nextMonth.aria": ["Tháng sau", "Next month"],
    "stats.income": ["Thu", "Income"],
    "stats.expense": ["Chi", "Expense"],
    "stats.balance": ["Dư", "Balance"],
    "stats.noData": ["Chưa có dữ liệu", "No data yet"],
    "stats.donut.expense": ["chi", "expense"],
    "stats.donut.income": ["thu", "income"],

    // Cài đặt
    "settings.title": ["Cài đặt", "Settings"],
    "settings.freePlan": ["Gói Miễn phí", "Free Plan"],
    "settings.usedEntries": ["Đã dùng", "Used"],
    "settings.entriesUnit": ["lượt nhập", "entries"],
    "settings.theme": ["Tông màu chủ đạo", "Primary theme color"],
    "settings.language": ["Ngôn ngữ", "Language"],
    "settings.lang.vi": ["Tiếng Việt", "Vietnamese"],
    "settings.lang.en": ["English", "English"],
    "settings.currency": ["Đơn vị tiền tệ", "Currency unit"],
    "settings.currency.desc": [
      "Chỉ đổi ký hiệu hiển thị, không quy đổi theo tỷ giá thật",
      "Only changes the displayed symbol, not a real exchange-rate conversion",
    ],
    "settings.sound": ["Âm bàn phím", "Keypad sound"],
    "settings.sound.desc": ["Tiếng gõ khi nhập số tiền", "Tap sound when entering an amount"],
    "settings.noteOnAdd": ["Ghi chú khi thêm nhanh", "Note field on quick add"],
    "settings.noteOnAdd.desc": ["Hiện ô ghi chú ngay trên bàn phím", "Show a note field above the keypad"],
    "settings.quickNote": ["Ghi chú nhanh", "Quick notes"],
    "settings.quickNote.desc": [
      "Chạm 1 nút là ghi ngay khoản chi với số tiền & mục đã đặt sẵn",
      "One tap logs an expense with a preset amount & category",
    ],
    "settings.manageQuickNotes": ["Quản lý ghi chú nhanh", "Manage quick notes"],
    "settings.manageQuickNotes.desc": ["Thêm/xóa các ghi chú thường dùng", "Add/remove frequently used notes"],
    "settings.incomeCats": ["Mục thu nhập", "Income categories"],
    "settings.incomeCats.desc": ["Thêm danh mục thu nhập của riêng bạn", "Add your own income categories"],
    "settings.initialBalance": ["Tổng tiền hiện có", "Total current balance"],
    "settings.initialBalance.desc": [
      "Nhập đúng số tiền bạn đang có — hệ thống sẽ chia lại ngay vào các lọ theo công thức đang chọn",
      "Enter the exact amount you currently have — it'll be re-split into buckets right away",
    ],
    "settings.startDate": ["Ngày bắt đầu", "Start date"],
    "settings.startDate.desc": [
      "Ngày bạn bắt đầu dùng memoney (tự động ghi nhận, không thể chỉnh sửa)",
      "The date you started using memoney (auto-recorded, cannot be edited)",
    ],
    "settings.yourData": ["Dữ liệu của bạn", "Your data"],
    "settings.yourData.desc": [
      "Lưu cục bộ trên máy này, không cần tài khoản, không cần mạng 🔒",
      "Stored locally on this device — no account, no internet needed 🔒",
    ],
    "settings.backup": ["Sao lưu & khôi phục", "Backup & restore"],
    "settings.backup.desc": [
      "Xuất ra 1 file rồi tự lưu vào Google Drive/iCloud của bạn. Khi đổi máy hoặc lỡ mất dữ liệu, chỉ cần nhập lại file này.",
      "Export a file and save it to your Google Drive/iCloud. If you switch devices or lose data, just import this file again.",
    ],
    "settings.export": ["Xuất dữ liệu", "Export data"],
    "settings.import": ["Nhập dữ liệu", "Import data"],
    "settings.clearData": ["Xóa toàn bộ dữ liệu", "Delete all data"],
    "settings.shareApp": ["Chia sẻ ứng dụng", "Share app"],
    "settings.appHub": ["Trung tâm ứng dụng của chúng tôi", "Our app hub"],

    // Mục tiêu
    "goals.empty": ["Chưa có mục tiêu nào", "No goals yet"],
    "goals.progress": ["Tiến độ theo thời gian", "Progress over time"],
    "goals.cancel": ["Từ bỏ mục tiêu", "Abandon goal"],
    "goals.add": ["+ Đặt mục tiêu mới", "+ Set a new goal"],
    "goals.formTitle": ["Đặt mục tiêu mới", "Set a new goal"],
    "goals.warning": [
      "⚠️ Mục tiêu chỉ mang tính chất quan sát, không giúp bạn kiếm được nhiều tiền hơn.",
      "⚠️ Goals are for tracking only — they won't help you earn more money.",
    ],
    "goals.name": ["Tên mục tiêu", "Goal name"],
    "goals.name.placeholder": ["Vd: Mua xe máy", "E.g.: Buy a motorbike"],
    "goals.stages": ["Số giai đoạn", "Number of stages"],
    "goals.pledge": ["Lời cam kết", "Pledge"],
    "goals.pledge.placeholder": [
      "Viết lời cam kết của bạn... (không thể sửa sau khi lưu)",
      "Write your pledge... (cannot be edited after saving)",
    ],
    "goals.lockNote": [
      "🔒 Sau khi chốt, toàn bộ thông tin (tên, các giai đoạn, lời cam kết) sẽ không thể sửa — chỉ có thể từ bỏ mục tiêu.",
      "🔒 Once confirmed, everything (name, stages, pledge) can't be edited — you can only abandon the goal.",
    ],
    "goals.cancelBtn": ["Hủy", "Cancel"],
    "goals.confirm": ["Chốt mục tiêu", "Confirm goal"],
    "goals.stage": ["Giai đoạn", "Stage"],
    "goals.today": ["Hôm nay", "Today"],
    "goals.daysPassed": ["Đã qua {n} ngày", "{n} days passed"],
    "goals.daysLeft": ["Còn {n} ngày", "{n} days left"],
    "goals.amountPlaceholder": ["Số tiền", "Amount"],
    "goals.confirmCancel": [
      "Bạn có chắc muốn từ bỏ mục tiêu này? Không thể hoàn tác.",
      "Are you sure you want to abandon this goal? This cannot be undone.",
    ],

    // Nâng cấp / Premium
    "upgrade.close.aria": ["Đóng", "Close"],
    "upgrade.limitNotice": [
      "⚠️ Bạn đã dùng hết 50 lượt nhập miễn phí. Nâng cấp để tiếp tục ghi chép giao dịch.",
      "⚠️ You've used all 50 free entries. Upgrade to keep logging transactions.",
    ],
    "upgrade.vipText": ["Không giới hạn số lần nhập thu chi", "Unlimited income/expense entries"],
    "upgrade.bestValue": ["Tiết kiệm nhất", "Best value"],
    "upgrade.qr.alt": ["Mã QR chuyển khoản", "Bank transfer QR code"],
    "upgrade.saveQr": ["Lưu ảnh QR", "Save QR image"],
    "upgrade.bank": ["Ngân hàng", "Bank"],
    "upgrade.accountNumber": ["Số tài khoản", "Account number"],
    "upgrade.accountHolder": ["Chủ tài khoản", "Account holder"],
    "upgrade.transferContent": ["Nội dung CK", "Transfer memo"],
    "upgrade.payHint": [
      "Quét mã hoặc chuyển khoản đúng nội dung ở trên. Không cần làm gì thêm — hệ thống tự kiểm tra và kích hoạt Premium.",
      "Scan the code or transfer with the exact memo above. No need to do anything else — the system auto-checks and activates Premium.",
    ],
    "upgrade.back": ["Quay lại", "Go back"],
    "upgrade.activeBadge": ["✓ Đang dùng Premium", "✓ Premium active"],
    "upgrade.renewsOn": [" — gia hạn", " — renews"],
    "upgrade.lifetime": [" — dùng trọn đời", " — lifetime access"],
    "premium.name": ["Premium — {plan}", "Premium — {plan}"],
    "premium.unlocked": ["Đã mở khóa toàn bộ tính năng", "All features unlocked"],
    "premium.usedOf": ["Đã dùng {used}/{limit} lượt nhập", "Used {used}/{limit} entries"],
    "premium.plan.monthly": ["Gói Tháng", "Monthly Plan"],
    "premium.plan.monthly.unit": ["/tháng", "/month"],
    "premium.plan.lifetime": ["Mua đứt", "Lifetime"],
    "premium.plan.lifetime.unit": ["trọn đời", "lifetime"],
    "pay.status.pending": [
      "Sau khi chuyển khoản, hệ thống sẽ tự kiểm tra và kích hoạt Premium — thường mất khoảng 10 phút, bạn không cần làm gì thêm.",
      "After transferring, the system will auto-check and activate Premium — usually about 10 minutes, no further action needed.",
    ],
    "pay.status.waiting": [
      "Đang chờ xác nhận tự động sau khi bạn chuyển khoản — thường mất khoảng 10 phút, cần có mạng.",
      "Waiting for automatic confirmation after your transfer — usually about 10 minutes, requires internet.",
    ],
    "pay.status.notConfigured": [
      "Chưa cấu hình kiểm tra tự động (PAYMENT_CHECK_URL trống) — liên hệ hỗ trợ để được kích hoạt thủ công.",
      "Automatic checking isn't configured — contact support for manual activation.",
    ],
    "pay.status.waitingMinutes": [
      "Đang chờ xác nhận tự động… (đã chờ {mins} phút — hãy giữ app mở hoặc quay lại sau)",
      "Waiting for automatic confirmation… (waited {mins} min — keep the app open or check back later)",
    ],
    "pay.status.retry": ["Không kết nối được để kiểm tra, sẽ tự thử lại…", "Couldn't connect to check, will retry automatically…"],
    "pay.confirmedAlert": [
      "Đã xác nhận thanh toán! Cảm ơn bạn đã ủng hộ meomoney — Premium đã được kích hoạt.",
      "Payment confirmed! Thank you for supporting meomoney — Premium is now active.",
    ],

    // Sao lưu / khôi phục / chia sẻ
    "backup.invalidFile": [
      "File không hợp lệ. Vui lòng chọn đúng file đã xuất từ meomoney.",
      "Invalid file. Please choose a file exported from meomoney.",
    ],
    "backup.confirmImport": [
      "Việc này sẽ THAY THẾ toàn bộ dữ liệu hiện tại trên máy này bằng dữ liệu trong file đã chọn. Bạn có chắc chắn?",
      "This will REPLACE all current data on this device with the data in the selected file. Are you sure?",
    ],
    "backup.restored": ["Khôi phục dữ liệu thành công!", "Data restored successfully!"],
    "backup.confirmClear": ["Xóa toàn bộ giao dịch đã lưu? Không thể hoàn tác.", "Delete all saved transactions? This cannot be undone."],
    "share.linkCopied": ["Đã sao chép đường dẫn ứng dụng!", "App link copied!"],
    "share.hubComingSoon": ["Trung tâm ứng dụng sắp ra mắt!", "App hub coming soon!"],
    "share.text": [
      "memoney — quản lý tài chính đơn giản, riêng tư, không cần tài khoản.",
      "memoney — simple, private finance tracking, no account needed.",
    ],

    // Danh mục / ghi chú nhanh (quản lý)
    "catManager.expenseTitle": ["Mục chi tiêu", "Expense categories"],
    "catManager.incomeTitle": ["Mục thu nhập", "Income categories"],
    "catManager.namePlaceholder": ["Tên mục mới", "New category name"],
    "catManager.add": ["Thêm", "Add"],
    "catManager.done": ["Xong", "Done"],
    "catManager.delete.aria": ["Xóa mục", "Delete item"],
    "quickNote.manager.title": ["Ghi chú nhanh", "Quick notes"],
    "quickNote.manager.sub": [
      "Chạm 1 lần trong màn hình thêm nhanh là ghi ngay khoản chi với số tiền & mục đã đặt sẵn.",
      "One tap on the quick-add screen logs an expense with a preset amount & category.",
    ],
    "quickNote.name.placeholder": ["Tên, vd: Gửi xe", "Name, e.g.: Parking"],
    "quickNote.amount.placeholder": ["Số tiền, vd: 5.000", "Amount, e.g.: 5,000"],
    "quickNote.add": ["Thêm ghi chú nhanh", "Add quick note"],
    "quickNote.delete.aria": ["Xóa", "Delete"],
    "quickNote.other": ["Khác", "Other"],
    "quickNote.default.parking": ["Gửi xe", "Parking"],
    "quickNote.default.breakfast": ["Ăn sáng", "Breakfast"],
    "quickNote.default.lunch": ["Ăn trưa", "Lunch"],
    "quickNote.default.coffee": ["Cà phê", "Coffee"],

    // Công thức tự đặt
    "customFormula.title": ["Tự đặt công thức", "Set custom formula"],
    "customFormula.sub": ["Thêm các mục và tỉ lệ %, tổng phải đúng 100%.", "Add items and % ratios — the total must equal 100%."],
    "customFormula.addItem": ["+ Thêm mục", "+ Add item"],
    "customFormula.total": ["Tổng:", "Total:"],
    "customFormula.cancel": ["Hủy", "Cancel"],
    "customFormula.save": ["Lưu", "Save"],
    "customFormula.namePlaceholder": ["Tên mục", "Item name"],
    "customFormula.delete.aria": ["Xóa mục", "Delete item"],

    // Cuộn lên đầu trang
    "scrollTop.aria": ["Cuộn lên đầu trang", "Scroll to top"],

    // Onboarding
    "onboarding.welcome.title": ["MeoMoney xin chào!", "Hello from MeoMoney!"],
    "onboarding.welcome.desc": [
      "Mình là chú mèo quản lý tiền của bạn. Để mình dẫn bạn đi một vòng làm quen nhé!",
      "I'm the cat who'll manage your money. Let me show you around!",
    ],
    "onboarding.welcome.next": ["Tiếp theo", "Next"],
    "onboarding.setup.title": ["Thiết lập ban đầu", "Initial setup"],
    "onboarding.setup.balanceDesc": [
      "Nhập đúng số dư bạn đang có — mình sẽ tính từ đây nhé",
      "Enter the exact balance you currently have — I'll calculate from here",
    ],
    "onboarding.setup.start": ["Bắt đầu khám phá", "Start exploring"],
    "onboarding.done.title": ["Xong rồi!", "All done!"],
    "onboarding.done.desc": [
      "Bạn đã sẵn sàng quản lý chi tiêu cùng MeoMoney. Chúc bạn luôn rủng rỉnh nhé!",
      "You're all set to manage your spending with MeoMoney. Wishing you a fat wallet!",
    ],
    "onboarding.done.cta": ["Bắt đầu dùng app", "Start using the app"],

    // Trình hướng dẫn (tour)
    "tour.health.title": ["Sức khỏe tài chính", "Financial health"],
    "tour.health.desc": [
      "Đây là tình trạng sức khỏe tài chính của bạn. Hãy ấn vào để xem giải thích ở mặt sau!",
      "This is your financial health status. Tap it to see the explanation on the back!",
    ],
    "tour.healthBack.title": ["Đây rồi!", "There it is!"],
    "tour.healthBack.desc": [
      "Đây là mặt sau của thẻ. Bạn có thể lật qua lật lại bất cứ lúc nào để xem cả 2 mặt nhé.",
      "This is the back of the card. You can flip it back and forth anytime to see both sides.",
    ],
    "tour.continue": ["Tiếp tục", "Continue"],
    "tour.formulaTab.title": ["Công thức chia tiền", "Money-splitting formula"],
    "tour.formulaTab.desc": [
      "Chạm vào 'Công thức' để chuyển sang chế độ phân bổ tiền theo phương pháp bạn thích.",
      "Tap 'Formula' to switch to money allocation using your preferred method.",
    ],
    "tour.formulaTrigger.title": ["Chọn công thức", "Choose a formula"],
    "tour.formulaTrigger.desc": [
      "Chạm vào đây để chọn công thức chia tiền phù hợp với bạn — 6 lọ, 50/30/20, Babylon,...",
      "Tap here to choose the money-splitting formula that suits you — 6 Jars, 50/30/20, Babylon,...",
    ],
    "tour.addBtn.title": ["Thêm giao dịch", "Add transaction"],
    "tour.addBtn.desc": [
      "Đây là nút chân mèo — chạm vào để bắt đầu ghi lại một khoản thu/chi nhé!",
      "This is the cat-paw button — tap it to start recording an income/expense entry!",
    ],
    "tour.typeToggle.title": ["Đổi Thu / Chi", "Switch Income / Expense"],
    "tour.typeToggle.desc": [
      "Chạm vào đây để chuyển đổi giữa khoản Thu (+) và khoản Chi (−).",
      "Tap here to switch between Income (+) and Expense (−).",
    ],
    "tour.save.title": ["Lưu lại", "Save"],
    "tour.save.desc": [
      "Nhập một số tiền bất kỳ trên bàn phím, sau đó chạm 'Lưu' để hoàn tất nhé!",
      "Enter any amount on the keypad, then tap 'Save' to finish!",
    ],

    // Đơn vị tiền tệ (khóa là chính chữ tiếng Việt gốc, ngoại lệ so với các mục khác)
    VNĐ: ["VNĐ", "VND"],
  };

  function t(key) {
    const row = T[key];
    if (!row) return key;
    return row[activeLanguage === "en" ? 1 : 0];
  }

  function tFormat(key, vars) {
    let s = t(key);
    Object.entries(vars).forEach(([k, v]) => {
      s = s.replace(`{${k}}`, v);
    });
    return s;
  }

  function applyStaticI18n() {
    document.documentElement.lang = activeLanguage;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
      el.setAttribute("placeholder", t(el.dataset.i18nPh));
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      el.setAttribute("aria-label", t(el.dataset.i18nAria));
    });
    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
      el.setAttribute("title", t(el.dataset.i18nTitle));
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      el.setAttribute("alt", t(el.dataset.i18nAlt));
    });
  }

  const STORAGE_KEY = "sotuchi.transactions.v1";

  const CATEGORIES = {
    expense: [
      { id: "an-uong", label: "cat.an-uong", icon: "🍜", color: "#f97316" },
      { id: "di-chuyen", label: "cat.di-chuyen", icon: "🚗", color: "#0ea5e9" },
      { id: "nha-o", label: "cat.nha-o", icon: "🏠", color: "#8b5cf6" },
      { id: "hoa-don", label: "cat.hoa-don", icon: "🧾", color: "#ef4444" },
      { id: "mua-sam", label: "cat.mua-sam", icon: "🛍️", color: "#ec4899" },
      { id: "giai-tri", label: "cat.giai-tri", icon: "🎮", color: "#14b8a6" },
      { id: "suc-khoe", label: "cat.suc-khoe", icon: "💊", color: "#22c55e" },
      { id: "giao-duc", label: "cat.giao-duc", icon: "📚", color: "#6366f1" },
      { id: "khac-chi", label: "cat.khac-chi", icon: "📦", color: "#64748b" },
    ],
    income: [
      { id: "luong", label: "cat.luong", icon: "💼", color: "#16a34a" },
      { id: "thuong", label: "cat.thuong", icon: "🎁", color: "#0ea5e9" },
      { id: "dau-tu", label: "cat.dau-tu", icon: "📈", color: "#8b5cf6" },
      { id: "khac-thu", label: "cat.khac-thu", icon: "💵", color: "#64748b" },
    ],
  };

  const CUSTOM_CATEGORIES_KEY = "sotuchi.customCategories";
  let customCategories = loadJSON(CUSTOM_CATEGORIES_KEY, { expense: [], income: [] });

  function saveCustomCategories() {
    localStorage.setItem(CUSTOM_CATEGORIES_KEY, JSON.stringify(customCategories));
  }

  function getCategories(type) {
    return [...CATEGORIES[type], ...customCategories[type]];
  }

  function findCategory(type, id) {
    const list = getCategories(type);
    return list.find((c) => c.id === id) || list[list.length - 1];
  }

  const FORMULAS = {
    jars6: {
      name: "formula.name.jars6",
      buckets: [
        { key: "nec", label: "bucket.jars6.nec", pct: 55 },
        { key: "ffa", label: "bucket.jars6.ffa", pct: 10 },
        { key: "ltss", label: "bucket.jars6.ltss", pct: 10 },
        { key: "edu", label: "bucket.jars6.edu", pct: 10 },
        { key: "play", label: "bucket.jars6.play", pct: 10 },
        { key: "give", label: "bucket.jars6.give", pct: 5 },
      ],
    },
    plan503020: {
      name: "formula.name.plan503020",
      buckets: [
        { key: "need", label: "bucket.plan503020.need", pct: 50 },
        { key: "want", label: "bucket.plan503020.want", pct: 30 },
        { key: "save", label: "bucket.plan503020.save", pct: 20 },
      ],
    },
    babylon: {
      name: "formula.name.babylon",
      buckets: [
        { key: "spend", label: "bucket.babylon.spend", pct: 90 },
        { key: "save", label: "bucket.babylon.save", pct: 10 },
      ],
    },
    custom: { name: "formula.name.custom", buckets: [] },
  };

  function getFormulaDef(id) {
    if (id === "custom") return { name: "formula.name.custom", buckets: customBuckets };
    return FORMULAS[id];
  }

  /* ---------- storage ---------- */

  function loadTransactions() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      console.error("Không đọc được dữ liệu đã lưu", e);
      return [];
    }
  }

  function saveTransactions(list) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }

  const ACTIVE_FORMULA_KEY = "sotuchi.activeFormula";
  const MONTHLY_BASELINE_KEY = "sotuchi.monthlyBaselineSplit";
  const CUSTOM_BUCKETS_KEY = "sotuchi.customBuckets";

  function loadJSON(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  function saveActiveFormula() {
    if (activeFormula) localStorage.setItem(ACTIVE_FORMULA_KEY, activeFormula);
    else localStorage.removeItem(ACTIVE_FORMULA_KEY);
  }

  function saveMonthlyBaselineSplit() {
    localStorage.setItem(MONTHLY_BASELINE_KEY, JSON.stringify(monthlyBaselineSplit));
  }

  function saveCustomBuckets() {
    localStorage.setItem(CUSTOM_BUCKETS_KEY, JSON.stringify(customBuckets));
  }

  function toMonthString(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
  }

  function toDateString(date) {
    return `${toMonthString(date)}-${String(date.getDate()).padStart(2, "0")}`;
  }

  function currentRealMonth() {
    return toMonthString(new Date());
  }

  // Ghi nhận khoản chỉnh "tổng tiền hiện có" như một khoản góp thêm vào các lọ
  // của tháng hiện tại, để công thức chia tiền tự cập nhật ngay cả khi người
  // dùng không nhập một giao dịch thu nhập cụ thể.
  function addMonthlyBaselineSplit(amount) {
    if (!amount) return;
    const key = currentRealMonth();
    monthlyBaselineSplit[key] = (monthlyBaselineSplit[key] || 0) + amount;
    saveMonthlyBaselineSplit();
  }

  let transactions = loadTransactions();
  let currentMonth = toMonthString(new Date()); // YYYY-MM
  let activeFilter = "all";
  let donutType = "expense";
  let trendPoints = [];

  const INITIAL_BALANCE_KEY = "sotuchi.initialBalance";
  let initialBalance = Number(localStorage.getItem(INITIAL_BALANCE_KEY)) || 0;

  const ONBOARDING_KEY = "sotuchi.onboarded";

  let activeFormula = localStorage.getItem(ACTIVE_FORMULA_KEY);
  const needsDefaultFormula = !activeFormula;
  if (needsDefaultFormula) activeFormula = "jars6";
  let monthlyBaselineSplit = loadJSON(MONTHLY_BASELINE_KEY, {});
  let customBuckets = loadJSON(CUSTOM_BUCKETS_KEY, []);

  const PREMIUM_KEY = "sotuchi.premium";
  const FREE_LIMIT = 50;
  const PREMIUM_PLANS = {
    monthly: { name: "premium.plan.monthly", price: 19000, unitLabel: "premium.plan.monthly.unit", durationDays: 30 },
    lifetime: { name: "premium.plan.lifetime", price: 199000, unitLabel: "premium.plan.lifetime.unit", durationDays: null },
  };
  let premiumInfo = loadJSON(PREMIUM_KEY, null);

  // Thông tin nhận thanh toán qua VietQR. Việc xác nhận đã chuyển khoản được
  // tự động kiểm tra qua PAYMENT_CHECK_URL (1 Google Apps Script đọc email
  // báo giao dịch của Cake rồi đối chiếu mã máy — xem payment-verify.gs.txt).
  const BANK_INFO = { bin: "546034", accountNo: "0919248086" }; // Cake by VPBank

  const PAYMENT_CHECK_URL = "https://script.google.com/macros/s/AKfycbz-WI8JWiOQ-mWwUxngXU6KN8J4MyT005BtV7cka8SytHHM-mFNAtwc_PDQs08WLaBk/exec";

  const DEVICE_ID_KEY = "sotuchi.deviceId";
  function getDeviceId() {
    let id = localStorage.getItem(DEVICE_ID_KEY);
    if (!id) {
      id = Math.random().toString(36).slice(2, 8).toUpperCase();
      localStorage.setItem(DEVICE_ID_KEY, id);
    }
    return id;
  }

  function buildPaymentQrUrl(plan) {
    const content = `MEO ${getDeviceId()}`;
    const params = new URLSearchParams({ amount: String(plan.price), addInfo: content, accountName: "LA VAN DUNG" });
    return `https://img.vietqr.io/image/${BANK_INFO.bin}-${BANK_INFO.accountNo}-qr_only.png?${params.toString()}`;
  }

  function isPremium() {
    if (!premiumInfo) return false;
    const plan = PREMIUM_PLANS[premiumInfo.plan];
    if (plan && plan.durationDays && Date.now() > premiumInfo.purchasedAt + plan.durationDays * 86400000) {
      premiumInfo = null;
      savePremiumInfo();
      return false;
    }
    return true;
  }

  function isLimitReached() {
    return !isPremium() && transactions.length >= FREE_LIMIT;
  }

  function savePremiumInfo() {
    if (premiumInfo) localStorage.setItem(PREMIUM_KEY, JSON.stringify(premiumInfo));
    else localStorage.removeItem(PREMIUM_KEY);
  }

  /* ---------- helpers ---------- */

  function uid() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  }

  const CURRENCY_KEY = "sotuchi.currency";
  const CURRENCIES = {
    vnd: { symbol: "₫", label: "VNĐ", locale: "vi-VN" },
    usd: { symbol: "$", label: "USD", locale: "en-US" },
    eur: { symbol: "€", label: "EUR", locale: "de-DE" },
    gbp: { symbol: "£", label: "GBP", locale: "en-GB" },
    jpy: { symbol: "¥", label: "JPY", locale: "ja-JP" },
  };
  let activeCurrency = localStorage.getItem(CURRENCY_KEY) || "vnd";

  function formatCurrency(n) {
    const cur = CURRENCIES[activeCurrency] || CURRENCIES.vnd;
    return Math.round(n).toLocaleString(cur.locale) + " " + cur.symbol;
  }

  function formatDate(iso) {
    const [y, m, d] = iso.split("-");
    return `${d}/${m}/${y}`;
  }

  function txInCurrentMonth(tx) {
    return tx.date.slice(0, 7) === currentMonth;
  }

  /* ---------- financial health ---------- */

  function computeFinance() {
    const sorted = [...transactions].sort((a, b) =>
      a.date < b.date ? -1 : a.date > b.date ? 1 : a.createdAt - b.createdAt
    );
    let running = initialBalance;
    let record = initialBalance;
    for (const tx of sorted) {
      running += tx.type === "income" ? tx.amount : -tx.amount;
      if (running > record) record = running;
    }
    const current = running;

    const today = toDateString(new Date());
    const todayNet = transactions
      .filter((t) => t.date === today)
      .reduce((s, t) => s + (t.type === "income" ? t.amount : -t.amount), 0);
    const yesterdayBalance = current - todayNet;
    const growthPct = yesterdayBalance > 0 ? (todayNet / yesterdayBalance) * 100 : null;
    const healthPct = record > 0 ? Math.max(0, Math.min(100, (current / record) * 100)) : current > 0 ? 100 : 0;

    return { current, record, todayNet, growthPct, healthPct };
  }

  function healthZone(pct) {
    if (pct < 20) return "red";
    if (pct < 70) return "yellow";
    return "green";
  }

  /* ---------- DOM refs ---------- */

  const monthInput = document.getElementById("monthInput");
  const monthLabelTextEl = document.getElementById("monthLabelText");
  const prevMonthBtn = document.getElementById("prevMonth");
  const nextMonthBtn = document.getElementById("nextMonth");

  const totalIncomeEl = document.getElementById("totalIncome");
  const totalExpenseEl = document.getElementById("totalExpense");
  const totalBalanceEl = document.getElementById("totalBalance");

  const transactionListEl = document.getElementById("transactionList");
  const listEmptyEl = document.getElementById("listEmpty");
  const filterChipsEl = document.getElementById("filterChips");

  const chartCanvas = document.getElementById("categoryChart");
  const chartEmptyEl = document.getElementById("chartEmpty");
  const chartLegendEl = document.getElementById("chartLegend");
  const donutSwitchEl = document.getElementById("donutSwitch");

  const trendCanvas = document.getElementById("trendChart");
  const trendEmptyEl = document.getElementById("trendEmpty");
  const trendTooltipEl = document.getElementById("trendTooltip");
  const trendHeadValueEl = document.getElementById("trendHeadValue");
  const trendHeadSubEl = document.getElementById("trendHeadSub");

  const addBtn = document.getElementById("addBtn");
  const modalOverlay = document.getElementById("modalOverlay");
  const modalTitle = document.getElementById("modalTitle");
  const txForm = document.getElementById("txForm");
  const txIdInput = document.getElementById("txId");
  const txAmountInput = document.getElementById("txAmount");
  const txCategoryInput = document.getElementById("txCategory");
  const txDateInput = document.getElementById("txDate");
  const txNoteInput = document.getElementById("txNote");
  const dateFieldEl = document.getElementById("dateField");
  const noteFieldEl = document.getElementById("noteField");
  const deleteBtn = document.getElementById("deleteTx");

  const typeToggleBtn = document.getElementById("typeToggle");
  const catStripEl = document.getElementById("catStrip");
  const amountDisplayEl = document.getElementById("amountDisplay");
  const amountSignEl = document.getElementById("amountSign");
  const amountValueEl = document.getElementById("amountValue");
  const currencyOptionsEl = document.getElementById("currencyOptions");
  const languageOptionsEl = document.getElementById("languageOptions");
  const keypadEl = txForm.querySelector(".keypad");
  const backKeyBtn = txForm.querySelector('.key[data-key="back"]');

  const navHomeBtn = document.getElementById("navHome");
  const navStatsBtn = document.getElementById("navStats");
  const navSettingsBtn = document.getElementById("navSettings");
  const navGoalsBtn = document.getElementById("navGoals");
  const homeView = document.getElementById("homeView");
  const statsView = document.getElementById("statsView");
  const settingsView = document.getElementById("settingsView");
  const goalsView = document.getElementById("goalsView");
  const goalEmptyEl = document.getElementById("goalEmpty");
  const goalActiveEl = document.getElementById("goalActive");
  const goalNameHeroEl = document.getElementById("goalNameHero");
  const goalProgressFillEl = document.getElementById("goalProgressFill");
  const goalProgressPctEl = document.getElementById("goalProgressPct");
  const goalTimelineEl = document.getElementById("goalTimeline");
  const goalTimelineFillEl = document.getElementById("goalTimelineFill");
  const goalTimelineTodayEl = document.getElementById("goalTimelineToday");
  const goalTimelineDotsEl = document.getElementById("goalTimelineDots");
  const goalPledgeDisplayEl = document.getElementById("goalPledgeDisplay");
  const goalCancelBtn = document.getElementById("goalCancelBtn");
  const addGoalBtn = document.getElementById("addGoalBtn");
  const goalFormOverlay = document.getElementById("goalFormOverlay");
  const goalNameInput = document.getElementById("goalNameInput");
  const goalStagesInput = document.getElementById("goalStagesInput");
  const goalStageRowsEl = document.getElementById("goalStageRows");
  const goalPledgeInput = document.getElementById("goalPledgeInput");
  const goalFormSaveBtn = document.getElementById("goalFormSave");
  const goalFormCancelBtn = document.getElementById("goalFormCancel");
  const soundToggle = document.getElementById("soundToggle");
  const noteToggle = document.getElementById("noteToggle");
  const clearDataBtn = document.getElementById("clearDataBtn");
  const exportDataBtn = document.getElementById("exportDataBtn");
  const importDataBtn = document.getElementById("importDataBtn");
  const importDataFile = document.getElementById("importDataFile");
  const themeSwatchesEl = document.getElementById("themeSwatches");
  const startDateDisplayEl = document.getElementById("startDateDisplay");
  const initialBalanceDisplay = document.getElementById("initialBalanceDisplay");
  const balanceOverlay = document.getElementById("balanceOverlay");
  const balanceKeypadEl = document.getElementById("balanceKeypad");
  const balanceSheetValueEl = document.getElementById("balanceSheetValue");
  const balanceSheetCancelBtn = document.getElementById("balanceSheetCancel");
  const balanceSheetSaveBtn = document.getElementById("balanceSheetSave");
  const shareAppBtn = document.getElementById("shareAppBtn");
  const appHubBtn = document.getElementById("appHubBtn");
  const openIncomeCatBtn = document.getElementById("openIncomeCatBtn");
  const categoryManagerOverlay = document.getElementById("categoryManagerOverlay");
  const categoryManagerTitleEl = document.getElementById("categoryManagerTitle");
  const categoryManagerListEl = document.getElementById("categoryManagerList");
  const categoryManagerCloseBtn = document.getElementById("categoryManagerClose");
  const newCatIconInput = document.getElementById("newCatIcon");
  const newCatLabelInput = document.getElementById("newCatLabel");
  const newCatSaveBtn = document.getElementById("newCatSave");

  const quickNoteToggle = document.getElementById("quickNoteToggle");
  const quickNoteStripEl = document.getElementById("quickNoteStrip");
  const openQuickNotesBtn = document.getElementById("openQuickNotesBtn");
  const quickNoteManagerOverlay = document.getElementById("quickNoteManagerOverlay");
  const quickNoteManagerListEl = document.getElementById("quickNoteManagerList");
  const quickNoteManagerCloseBtn = document.getElementById("quickNoteManagerClose");
  const newQuickNoteInput = document.getElementById("newQuickNoteInput");
  const newQuickNoteAmountInput = document.getElementById("newQuickNoteAmount");
  const newQuickNoteBucketSelect = document.getElementById("newQuickNoteBucket");
  const newQuickNoteSaveBtn = document.getElementById("newQuickNoteSave");

  const homeTabsEl = document.getElementById("homeTabs");
  const homeTabButtons = document.querySelectorAll(".home-tab");
  const situationTabEl = document.getElementById("situationTab");
  const formulaTabEl = document.getElementById("formulaTab");
  const upgradeBtn = document.getElementById("upgradeBtn");
  const upgradeOverlay = document.getElementById("upgradeOverlay");
  const upgradeClose = document.getElementById("upgradeClose");
  const upgradeLimitNotice = document.getElementById("upgradeLimitNotice");
  const upgradePlansViewEl = document.getElementById("upgradePlansView");
  const upgradePlansEl = document.getElementById("upgradePlans");
  const upgradeActiveViewEl = document.getElementById("upgradeActiveView");
  const upgradeActiveDescEl = document.getElementById("upgradeActiveDesc");
  const premiumStatusRow = document.getElementById("premiumStatusRow");
  const upgradePayViewEl = document.getElementById("upgradePayView");
  const payPlanNameEl = document.getElementById("payPlanName");
  const payPlanPriceEl = document.getElementById("payPlanPrice");
  const payQrImgEl = document.getElementById("payQrImg");
  const payContentEl = document.getElementById("payContent");
  const payBackBtn = document.getElementById("payBackBtn");
  const payStatusMsgEl = document.getElementById("payStatusMsg");
  const premiumStatusTitleEl = document.getElementById("premiumStatusTitle");
  const premiumStatusDescEl = document.getElementById("premiumStatusDesc");

  const healthCardEl = document.getElementById("healthCard");
  const healthCardInnerEl = document.getElementById("healthCardInner");
  const healthBadge = document.getElementById("healthBadge");
  const healthPctEl = document.getElementById("healthPct");
  const healthBarFillEl = document.getElementById("healthBarFill");
  const healthCurrentEl = document.getElementById("healthCurrent");
  const healthRecordEl = document.getElementById("healthRecord");
  const totalAssetsEls = document.querySelectorAll(".js-total-assets");
  const todayChangeEls = document.querySelectorAll(".js-today-change");
  const todayGrowthEls = document.querySelectorAll(".js-today-growth");

  const formulaSelectEl = document.getElementById("formulaSelect");
  const formulaTriggerBtn = document.getElementById("formulaTrigger");
  const formulaTriggerIconEl = document.getElementById("formulaTriggerIcon");
  const formulaTriggerNameEl = document.getElementById("formulaTriggerName");
  const formulaTriggerDescEl = document.getElementById("formulaTriggerDesc");
  const formulaPickerEl = document.getElementById("formulaPicker");
  const customFormulaDescEl = document.getElementById("customFormulaDesc");
  const customFormulaEditBtn = document.getElementById("customFormulaEdit");
  const bucketListEl = document.getElementById("bucketList");
  const bucketEmptyEl = document.getElementById("bucketEmpty");
  const bucketPanelTitleEl = document.getElementById("bucketPanelTitle");

  const customFormulaOverlay = document.getElementById("customFormulaOverlay");
  const customFormulaRowsEl = document.getElementById("customFormulaRows");
  const addCustomRowBtn = document.getElementById("addCustomRow");
  const customFormulaTotalEl = document.getElementById("customFormulaTotal");
  const customFormulaSaveBtn = document.getElementById("customFormulaSave");
  const customFormulaCancelBtn = document.getElementById("customFormulaCancel");

  const scrollTopBtn = document.getElementById("scrollTopBtn");

  const onboardingWelcomeEl = document.getElementById("onboardingWelcome");
  const onboardingWelcomeNextBtn = document.getElementById("onboardingWelcomeNext");
  const onboardingSetupEl = document.getElementById("onboardingSetup");
  const onboardingAmountValueEl = document.getElementById("onboardingAmountValue");
  const onboardingKeypadEl = document.getElementById("onboardingKeypad");
  const onboardingCurrencyOptionsEl = document.getElementById("onboardingCurrencyOptions");
  const onboardingStartBtn = document.getElementById("onboardingStartBtn");
  const onboardingDoneEl = document.getElementById("onboardingDone");
  const onboardingDoneBtn = document.getElementById("onboardingDoneBtn");

  let modalType = "expense";

  /* ---------- bottom nav / views ---------- */

  function showView(view) {
    homeView.hidden = view !== "home";
    statsView.hidden = view !== "stats";
    settingsView.hidden = view !== "settings";
    goalsView.hidden = view !== "goals";
    navHomeBtn.classList.toggle("active", view === "home");
    navStatsBtn.classList.toggle("active", view === "stats");
    navSettingsBtn.classList.toggle("active", view === "settings");
    navGoalsBtn.classList.toggle("active", view === "goals");
    homeTabsEl.hidden = view !== "home";
    if (view === "stats") {
      renderChart();
      renderTrendChart();
    }
    if (view === "goals") renderGoals();
  }

  navHomeBtn.addEventListener("click", () => showView("home"));
  navStatsBtn.addEventListener("click", () => showView("stats"));
  navSettingsBtn.addEventListener("click", () => showView("settings"));
  navGoalsBtn.addEventListener("click", () => showView("goals"));

  /* ---------- lật thẻ sức khỏe tài chính ---------- */

  healthCardEl.addEventListener("click", () => {
    healthCardInnerEl.classList.toggle("flipped");
  });

  /* ---------- bấm thẻ tổng tài sản / hôm nay -> mở Thống kê ---------- */

  document.querySelectorAll(".js-nav-stats").forEach((card) => {
    card.addEventListener("click", () => showView("stats"));
  });

  /* ---------- lật thẻ từng lọ chi tiêu ---------- */

  bucketListEl.addEventListener("click", (e) => {
    const item = e.target.closest(".bucket-item");
    if (!item) return;
    item.classList.toggle("flipped");
  });

  /* ---------- home tabs (Tình hình / Công thức) ---------- */

  function showHomeTab(tab) {
    situationTabEl.hidden = tab !== "situation";
    formulaTabEl.hidden = tab !== "formula";
    homeTabButtons.forEach((btn) => btn.classList.toggle("active", btn.dataset.hometab === tab));
  }

  homeTabButtons.forEach((btn) => {
    btn.addEventListener("click", () => showHomeTab(btn.dataset.hometab));
  });

  /* ---------- upgrade sheet ---------- */

  function renderUpgradePlans() {
    upgradePlansEl.innerHTML = Object.entries(PREMIUM_PLANS)
      .map(
        ([id, p]) => `
        <button type="button" class="upgrade-plan${id === "lifetime" ? " featured" : ""}" data-plan="${id}">
          ${id === "lifetime" ? `<span class="upgrade-plan-badge">${t("upgrade.bestValue")}</span>` : ""}
          <span class="upgrade-plan-name">${t(p.name)}</span>
          <span class="upgrade-plan-price">${formatCurrency(p.price)}<span class="upgrade-plan-unit">${t(p.unitLabel)}</span></span>
        </button>`
      )
      .join("");
  }
  renderUpgradePlans();

  function renderUpgradeView() {
    const limitHit = isLimitReached();
    upgradeLimitNotice.hidden = !limitHit;
    if (isPremium()) {
      upgradePayViewEl.hidden = true;
      upgradePlansViewEl.hidden = true;
      upgradeActiveViewEl.hidden = false;
      const plan = PREMIUM_PLANS[premiumInfo.plan];
      let desc = t(plan.name);
      if (plan.durationDays) {
        const renew = new Date(premiumInfo.purchasedAt + plan.durationDays * 86400000);
        desc += `${t("upgrade.renewsOn")} ${String(renew.getDate()).padStart(2, "0")}/${String(renew.getMonth() + 1).padStart(2, "0")}/${renew.getFullYear()}`;
      } else {
        desc += t("upgrade.lifetime");
      }
      upgradeActiveDescEl.textContent = desc;
    } else if (premiumPending) {
      upgradeActiveViewEl.hidden = true;
      showPendingPayView();
    } else {
      upgradePayViewEl.hidden = true;
      upgradeActiveViewEl.hidden = true;
      upgradePlansViewEl.hidden = false;
    }
  }

  /* ---------- thanh toán qua VietQR + tự động kiểm tra đã chuyển khoản ---------- */

  const PREMIUM_PENDING_KEY = "sotuchi.premiumPending";
  let premiumPending = loadJSON(PREMIUM_PENDING_KEY, null);
  let pollTimer = null;

  function savePremiumPending() {
    if (premiumPending) localStorage.setItem(PREMIUM_PENDING_KEY, JSON.stringify(premiumPending));
    else localStorage.removeItem(PREMIUM_PENDING_KEY);
  }

  function openPayView(planId) {
    upgradePlansViewEl.hidden = true;
    upgradeActiveViewEl.hidden = true;
    upgradePayViewEl.hidden = false;
    fillPayView(planId);
    premiumPending = { planId, deviceId: getDeviceId(), since: Date.now() };
    savePremiumPending();
    setPayStatus(t("pay.status.pending"), true);
    startPolling();
  }

  function fillPayView(planId) {
    const plan = PREMIUM_PLANS[planId];
    payPlanNameEl.textContent = t(plan.name);
    payPlanPriceEl.textContent = `${formatCurrency(plan.price)}${plan.durationDays ? " " + t(plan.unitLabel) : ""}`;
    payContentEl.textContent = `MEO ${getDeviceId()}`;
    payQrImgEl.src = buildPaymentQrUrl(plan);
  }

  function showPendingPayView() {
    upgradePlansViewEl.hidden = true;
    upgradePayViewEl.hidden = false;
    fillPayView(premiumPending.planId);
    setPayStatus(t("pay.status.waiting"), true);
    startPolling();
  }

  function setPayStatus(text, waiting) {
    payStatusMsgEl.textContent = text;
    payStatusMsgEl.hidden = false;
    payStatusMsgEl.classList.toggle("is-waiting", !!waiting);
  }

  payBackBtn.addEventListener("click", () => {
    upgradePayViewEl.hidden = true;
    upgradePlansViewEl.hidden = false;
  });

  // Tải ảnh QR về máy; nếu fetch bị chặn CORS thì mở ảnh ở tab mới để lưu tay
  const payQrSaveBtn = document.getElementById("payQrSaveBtn");
  payQrSaveBtn.addEventListener("click", async () => {
    try {
      const res = await fetch(payQrImgEl.src);
      if (!res.ok) throw new Error("fetch failed");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `meomoney-qr-${getDeviceId()}.png`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 5000);
    } catch (_) {
      window.open(payQrImgEl.src, "_blank");
    }
  });

  function startPolling() {
    stopPolling();
    checkPendingPayment();
    pollTimer = setInterval(checkPendingPayment, 20000);
  }

  function stopPolling() {
    if (pollTimer) clearInterval(pollTimer);
    pollTimer = null;
  }

  async function checkPendingPayment() {
    if (!premiumPending) return stopPolling();

    if (Date.now() - premiumPending.since > 24 * 60 * 60 * 1000) {
      premiumPending = null;
      savePremiumPending();
      stopPolling();
      return;
    }

    if (!PAYMENT_CHECK_URL) {
      setPayStatus(t("pay.status.notConfigured"), true);
      return;
    }

    try {
      const res = await fetch(`${PAYMENT_CHECK_URL}?deviceId=${encodeURIComponent(premiumPending.deviceId)}`);
      const data = await res.json();
      if (data && data.paid) {
        const planId = data.plan && PREMIUM_PLANS[data.plan] ? data.plan : premiumPending.planId;
        premiumInfo = { plan: planId, purchasedAt: Date.now() };
        savePremiumInfo();
        premiumPending = null;
        savePremiumPending();
        stopPolling();
        renderUpgradeView();
        renderPremiumStatus();
        alert(t("pay.confirmedAlert"));
      } else {
        const mins = Math.max(1, Math.round((Date.now() - premiumPending.since) / 60000));
        setPayStatus(tFormat("pay.status.waitingMinutes", { mins }), true);
      }
    } catch (e) {
      setPayStatus(t("pay.status.retry"), true);
    }
  }

  if (premiumPending && !isPremium()) startPolling();

  function renderPremiumStatus() {
    upgradeBtn.hidden = isPremium();
    if (isPremium()) {
      const plan = PREMIUM_PLANS[premiumInfo.plan];
      premiumStatusTitleEl.textContent = tFormat("premium.name", { plan: t(plan.name) });
      premiumStatusDescEl.textContent = t("premium.unlocked");
    } else {
      premiumStatusTitleEl.textContent = t("settings.freePlan");
      premiumStatusDescEl.textContent = tFormat("premium.usedOf", { used: Math.min(transactions.length, FREE_LIMIT), limit: FREE_LIMIT });
    }
  }

  function openUpgrade() {
    renderUpgradeView();
    upgradeOverlay.hidden = false;
  }
  function closeUpgrade() {
    upgradeOverlay.hidden = true;
  }
  upgradeBtn.addEventListener("click", openUpgrade);
  upgradeClose.addEventListener("click", closeUpgrade);
  premiumStatusRow.addEventListener("click", openUpgrade);
  upgradeOverlay.addEventListener("click", (e) => {
    if (e.target === upgradeOverlay) closeUpgrade();
  });

  upgradePlansEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".upgrade-plan");
    if (!btn) return;
    openPayView(btn.dataset.plan);
  });

  renderPremiumStatus();

  /* ---------- công thức chia tiền ---------- */

  // Các "lọ" được tính lại trực tiếp từ giao dịch của THÁNG HIỆN TẠI mỗi lần
  // hiển thị (không lưu số dư riêng) — nhờ vậy lọ luôn tự chia ngay khi có
  // thu nhập mới hoặc khi công thức đổi, không cần thao tác gì thêm, và mỗi
  // tháng mới các lọ sẽ tự "làm đầy lại" từ đầu theo thu nhập của tháng đó.
  function computeBuckets(formulaId) {
    const def = getFormulaDef(formulaId);
    const buckets = {};
    def.buckets.forEach((b) => {
      buckets[b.key] = { balance: 0, allocated: 0 };
    });
    if (!def.buckets.length) return buckets;

    const month = currentRealMonth();
    const baseline = monthlyBaselineSplit[month] || 0;
    if (baseline) {
      def.buckets.forEach((b) => {
        const add = baseline * (b.pct / 100);
        buckets[b.key].balance += add;
        buckets[b.key].allocated += add;
      });
    }

    transactions
      .filter((t) => t.date.slice(0, 7) === month)
      .forEach((t) => {
        if (t.type === "income") {
          def.buckets.forEach((b) => {
            const add = t.amount * (b.pct / 100);
            buckets[b.key].balance += add;
            buckets[b.key].allocated += add;
          });
        } else if (buckets[t.category]) {
          buckets[t.category].balance -= t.amount;
        }
      });

    return buckets;
  }

  function switchFormula(newId) {
    activeFormula = newId;
    saveActiveFormula();
    renderFormulaTab();
    if (modalType === "expense") renderCatStrip("expense", txCategoryInput.value);
    renderQuickNoteStrip();
  }

  function renderFormulaTab() {
    customFormulaDescEl.textContent = customBuckets.length
      ? customBuckets.map((b) => `${t(b.label)} ${b.pct}%`).join(" · ")
      : t("formula.customRatio");

    formulaPickerEl.querySelectorAll(".formula-pill").forEach((pill) => {
      pill.classList.toggle("active", pill.dataset.formula === activeFormula);
    });
    updateFormulaTrigger();

    if (!activeFormula) {
      bucketListEl.innerHTML = "";
      bucketEmptyEl.hidden = false;
      bucketPanelTitleEl.hidden = true;
      return;
    }
    bucketEmptyEl.hidden = true;
    bucketPanelTitleEl.hidden = false;
    const def = getFormulaDef(activeFormula);
    bucketPanelTitleEl.textContent = `${t("formula.splittingBy")} ${t(def.name)} · ${t("formula.month")} ${Number(currentRealMonth().slice(5))}`;
    const buckets = computeBuckets(activeFormula);
    bucketListEl.innerHTML = def.buckets
      .map((b, i) => {
        const bucket = buckets[b.key] || { balance: 0, allocated: 0 };
        const negative = bucket.balance < 0;
        const pct = bucket.allocated > 0 ? Math.max(0, Math.min(100, (bucket.balance / bucket.allocated) * 100)) : 0;
        const color = BUCKET_COLORS[i % BUCKET_COLORS.length];
        const meta = bucketMeta(b.label, b.key);
        return `
          <div class="bucket-item" style="--bucket-color:${color}">
            <div class="bucket-item-inner">
              <div class="bucket-item-face bucket-item-front">
                <div class="bucket-item-icon">${meta.icon}</div>
                <div class="bucket-item-body">
                  <div class="bucket-item-top">
                    <span class="bucket-item-name">${t(b.label)} · ${b.pct}%</span>
                    <span class="bucket-item-amount${negative ? " negative" : ""}">${formatCurrency(bucket.balance)}</span>
                  </div>
                  <div class="bucket-item-track">
                    <div class="bucket-item-fill${negative ? " negative" : ""}" style="width:${negative ? 100 : pct}%"></div>
                  </div>
                </div>
              </div>
              <div class="bucket-item-face bucket-item-back">
                <span class="bucket-item-back-icon">${meta.icon}</span>
                <p class="bucket-item-back-text">${meta.desc}</p>
              </div>
            </div>
          </div>
        `;
      })
      .join("");
  }

  const BUCKET_COLORS = ["#16a34a", "#0ea5e9", "#f59e0b", "#a855f7", "#ec4899", "#14b8a6", "#f97316", "#6366f1"];

  // Các lọ có sẵn (6 lọ / 50-30-20 / Babylon) được nhận diện qua "key" cố định
  // (không đổi theo ngôn ngữ). Lọ tự tạo (custom) không có key thuộc nhóm này nên
  // sẽ rơi xuống phần đoán theo từ khóa tiếng Việt trong nhãn người dùng tự gõ.
  const BUCKET_META_BY_KEY = {
    nec: { icon: "🏠", descKey: "bucket.desc.essentials" },
    need: { icon: "🏠", descKey: "bucket.desc.essentials" },
    spend: { icon: "🏠", descKey: "bucket.desc.essentials" },
    ffa: { icon: "📈", descKey: "bucket.desc.freedom" },
    ltss: { icon: "🏦", descKey: "bucket.desc.savings" },
    save: { icon: "🏦", descKey: "bucket.desc.savings" },
    edu: { icon: "📚", descKey: "bucket.desc.education" },
    play: { icon: "🎉", descKey: "bucket.desc.enjoy" },
    want: { icon: "🎉", descKey: "bucket.desc.enjoy" },
    give: { icon: "🤝", descKey: "bucket.desc.giving" },
  };

  function bucketMeta(label, key) {
    if (key && BUCKET_META_BY_KEY[key]) {
      const m = BUCKET_META_BY_KEY[key];
      return { icon: m.icon, desc: t(m.descKey) };
    }
    const l = label.toLowerCase();
    if (l.includes("thiết yếu") || l.includes("chi tiêu"))
      return { icon: "🏠", desc: "Chi phí bắt buộc: ăn ở, hóa đơn, đi lại hàng ngày." };
    if (l.includes("tự do tài chính") || l.includes("đầu tư"))
      return { icon: "📈", desc: "Đầu tư và tích lũy để tiến tới tự do tài chính." };
    if (l.includes("tiết kiệm"))
      return { icon: "🏦", desc: "Dành riêng cho những mục tiêu dài hạn của bạn." };
    if (l.includes("giáo dục"))
      return { icon: "📚", desc: "Đầu tư cho kiến thức và kỹ năng của chính bạn." };
    if (l.includes("hưởng thụ"))
      return { icon: "🎉", desc: "Tận hưởng cuộc sống, không cần cảm thấy có lỗi." };
    if (l.includes("cho đi"))
      return { icon: "🤝", desc: "Chia sẻ, giúp đỡ người khác hoặc cộng đồng." };
    return { icon: "💳", desc: t("bucket.desc.default") };
  }

  // Khoản chi giờ dùng "lọ" của công thức làm danh mục — hàm này tra icon/nhãn/màu
  // theo đúng công thức đã áp dụng lúc tạo giao dịch (tx.formulaId), để nếu người
  // dùng đổi công thức sau đó, các giao dịch cũ vẫn hiển thị đúng lọ ban đầu.
  function expenseDisplayInfo(tx) {
    if (tx.formulaId) {
      const def = getFormulaDef(tx.formulaId);
      const key = tx.formulaBucket || tx.category;
      const idx = def ? def.buckets.findIndex((b) => b.key === key) : -1;
      if (idx !== -1) {
        const b = def.buckets[idx];
        return { id: b.key, label: b.label, icon: bucketMeta(b.label, b.key).icon, color: BUCKET_COLORS[idx % BUCKET_COLORS.length] };
      }
    }
    return findCategory("expense", tx.category);
  }

  function updateFormulaTrigger() {
    if (!activeFormula) {
      formulaTriggerIconEl.textContent = "🧮";
      formulaTriggerNameEl.textContent = t("formula.trigger.name");
      formulaTriggerDescEl.textContent = t("formula.trigger.desc");
      return;
    }
    const pill = formulaPickerEl.querySelector(`.formula-pill[data-formula="${activeFormula}"]`);
    if (!pill) return;
    formulaTriggerIconEl.textContent = pill.querySelector(".formula-pill-icon").textContent;
    formulaTriggerNameEl.textContent = pill.querySelector(".formula-pill-name").textContent;
    formulaTriggerDescEl.textContent = pill.querySelector(".formula-pill-desc").textContent;
  }

  function toggleFormulaDropdown(force) {
    const open = typeof force === "boolean" ? force : !formulaPickerEl.classList.contains("open");
    formulaPickerEl.classList.toggle("open", open);
    formulaTriggerBtn.classList.toggle("open", open);
  }

  formulaTriggerBtn.addEventListener("click", () => toggleFormulaDropdown());

  document.addEventListener("click", (e) => {
    if (!formulaSelectEl.contains(e.target)) toggleFormulaDropdown(false);
  });

  formulaPickerEl.addEventListener("click", (e) => {
    const editBtn = e.target.closest("#customFormulaEdit");
    const card = e.target.closest(".formula-pill");
    if (!card) return;
    const id = card.dataset.formula;
    if (id === "custom" && (editBtn || customBuckets.length === 0)) {
      openCustomFormulaSetup();
      toggleFormulaDropdown(false);
      return;
    }
    switchFormula(id);
    toggleFormulaDropdown(false);
  });

  /* ---------- thiết lập công thức "Tự quyết" ---------- */

  function openCustomFormulaSetup() {
    renderCustomFormulaRows(customBuckets.length ? customBuckets : [{ key: uid(), label: "", pct: 0 }]);
    customFormulaOverlay.hidden = false;
  }

  function closeCustomFormulaSetup() {
    customFormulaOverlay.hidden = true;
  }

  function renderCustomFormulaRows(rows) {
    customFormulaRowsEl.innerHTML = "";
    rows.forEach((row) => addCustomFormulaRow(row));
    updateCustomFormulaTotal();
  }

  function addCustomFormulaRow(row) {
    const rowEl = document.createElement("div");
    rowEl.className = "custom-formula-row";
    rowEl.dataset.key = row.key || uid();
    rowEl.innerHTML = `
      <input type="text" class="cf-label" placeholder="${t("customFormula.namePlaceholder")}" value="${escapeHtml(row.label || "")}">
      <input type="number" class="cf-pct" min="0" max="100" value="${row.pct || ""}">
      <button type="button" class="custom-formula-row-remove" aria-label="${t("customFormula.delete.aria")}">✕</button>
    `;
    customFormulaRowsEl.appendChild(rowEl);
  }

  function updateCustomFormulaTotal() {
    const rows = [...customFormulaRowsEl.querySelectorAll(".custom-formula-row")];
    const total = rows.reduce((s, r) => s + (Number(r.querySelector(".cf-pct").value) || 0), 0);
    customFormulaTotalEl.textContent = total;
    const namesFilled = rows.length > 0 && rows.every((r) => r.querySelector(".cf-label").value.trim());
    customFormulaSaveBtn.disabled = !(total === 100 && namesFilled);
  }

  customFormulaRowsEl.addEventListener("input", updateCustomFormulaTotal);
  customFormulaRowsEl.addEventListener("click", (e) => {
    const removeBtn = e.target.closest(".custom-formula-row-remove");
    if (!removeBtn) return;
    removeBtn.closest(".custom-formula-row").remove();
    updateCustomFormulaTotal();
  });

  addCustomRowBtn.addEventListener("click", () => {
    addCustomFormulaRow({ key: uid(), label: "", pct: 0 });
    updateCustomFormulaTotal();
  });

  customFormulaCancelBtn.addEventListener("click", closeCustomFormulaSetup);
  customFormulaOverlay.addEventListener("click", (e) => {
    if (e.target === customFormulaOverlay) closeCustomFormulaSetup();
  });

  customFormulaSaveBtn.addEventListener("click", () => {
    const rows = [...customFormulaRowsEl.querySelectorAll(".custom-formula-row")];
    customBuckets = rows.map((r) => ({
      key: r.dataset.key,
      label: r.querySelector(".cf-label").value.trim(),
      pct: Number(r.querySelector(".cf-pct").value) || 0,
    }));
    saveCustomBuckets();
    closeCustomFormulaSetup();
    switchFormula("custom");
  });

  /* ---------- settings ---------- */

  const SOUND_KEY = "sotuchi.soundEnabled";
  let soundEnabled = localStorage.getItem(SOUND_KEY) !== "off";
  soundToggle.checked = soundEnabled;
  soundToggle.addEventListener("change", () => {
    soundEnabled = soundToggle.checked;
    localStorage.setItem(SOUND_KEY, soundEnabled ? "on" : "off");
  });

  const NOTE_KEY = "sotuchi.showNoteOnAdd";
  let showNoteOnAdd = localStorage.getItem(NOTE_KEY) === "on";
  noteToggle.checked = showNoteOnAdd;
  noteToggle.addEventListener("change", () => {
    showNoteOnAdd = noteToggle.checked;
    localStorage.setItem(NOTE_KEY, showNoteOnAdd ? "on" : "off");
  });

  /* ---------- ghi chú nhanh (chạm 1 nút là ghi luôn khoản chi định sẵn) ---------- */

  const QUICK_NOTE_ENABLED_KEY = "sotuchi.quickNotesEnabled";
  const QUICK_NOTES_KEY = "sotuchi.quickNotes";
  let quickNotesEnabled = localStorage.getItem(QUICK_NOTE_ENABLED_KEY) === "on";
  let quickNotes = loadJSON(QUICK_NOTES_KEY, null);
  if (!Array.isArray(quickNotes) || (quickNotes.length && typeof quickNotes[0] === "string")) {
    // chưa có dữ liệu, hoặc dữ liệu kiểu cũ (chuỗi thuần, chưa gắn số tiền/mục) -> khởi tạo bộ mặc định mới
    quickNotes = [
      { label: "quickNote.default.parking", amount: 5000, category: "nec" },
      { label: "quickNote.default.breakfast", amount: 20000, category: "nec" },
      { label: "quickNote.default.lunch", amount: 35000, category: "nec" },
      { label: "quickNote.default.coffee", amount: 25000, category: "play" },
    ];
  }

  quickNoteToggle.checked = quickNotesEnabled;
  quickNoteToggle.addEventListener("change", () => {
    quickNotesEnabled = quickNoteToggle.checked;
    localStorage.setItem(QUICK_NOTE_ENABLED_KEY, quickNotesEnabled ? "on" : "off");
    updateQuickNoteStripVisibility();
  });

  function saveQuickNotes() {
    localStorage.setItem(QUICK_NOTES_KEY, JSON.stringify(quickNotes));
  }

  // tra icon/nhãn của "lọ" mà 1 ghi chú nhanh trỏ tới, theo công thức đang áp dụng hiện tại
  function quickNoteBucketInfo(qn) {
    const def = getFormulaDef(activeFormula);
    const b = def && def.buckets.find((bb) => bb.key === qn.category);
    if (b) return { icon: bucketMeta(b.label, b.key).icon, label: b.label };
    return { icon: "🏷️", label: "quickNote.other" };
  }

  function renderQuickNoteStrip() {
    quickNoteStripEl.innerHTML = quickNotes
      .map((qn, i) => {
        const info = quickNoteBucketInfo(qn);
        return `<button type="button" class="quick-note-chip" data-index="${i}">
          <span class="quick-note-chip-icon">${info.icon}</span>
          <span class="quick-note-chip-text">${escapeHtml(t(qn.label))}</span>
          <span class="quick-note-chip-amount">${formatCurrency(qn.amount)}</span>
        </button>`;
      })
      .join("");
  }

  function updateQuickNoteStripVisibility() {
    const isNew = !txIdInput.value;
    quickNoteStripEl.hidden = !(quickNotesEnabled && isNew && modalType === "expense" && quickNotes.length > 0);
  }

  quickNoteStripEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".quick-note-chip");
    if (!btn) return;
    const qn = quickNotes[Number(btn.dataset.index)];
    if (!qn) return;
    setModalType("expense", qn.category);
    amountBuffer = String(qn.amount);
    txCategoryInput.value = qn.category;
    commitTransaction(t(qn.label));
  });

  renderQuickNoteStrip();

  /* ---------- quản lý ghi chú nhanh ---------- */

  function renderQuickNoteBucketOptions() {
    const def = getFormulaDef(activeFormula);
    newQuickNoteBucketSelect.innerHTML = def.buckets
      .map((b) => `<option value="${b.key}">${bucketMeta(b.label, b.key).icon} ${escapeHtml(t(b.label))}</option>`)
      .join("");
  }

  function openQuickNoteManager() {
    newQuickNoteInput.value = "";
    newQuickNoteAmountInput.value = "";
    renderQuickNoteBucketOptions();
    renderQuickNoteManagerList();
    quickNoteManagerOverlay.hidden = false;
  }

  function closeQuickNoteManager() {
    quickNoteManagerOverlay.hidden = true;
  }

  function renderQuickNoteManagerList() {
    quickNoteManagerListEl.innerHTML = quickNotes
      .map((qn, i) => {
        const info = quickNoteBucketInfo(qn);
        return `
        <div class="cat-manager-row" data-index="${i}">
          <span class="cat-manager-icon">${info.icon}</span>
          <span class="cat-manager-label">${escapeHtml(t(qn.label))} · ${formatCurrency(qn.amount)} · ${escapeHtml(t(info.label))}</span>
          <button type="button" class="cat-manager-remove" aria-label="${t("quickNote.delete.aria")}">✕</button>
        </div>`;
      })
      .join("");
  }

  openQuickNotesBtn.addEventListener("click", openQuickNoteManager);
  quickNoteManagerCloseBtn.addEventListener("click", closeQuickNoteManager);
  quickNoteManagerOverlay.addEventListener("click", (e) => {
    if (e.target === quickNoteManagerOverlay) closeQuickNoteManager();
  });

  quickNoteManagerListEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".cat-manager-remove");
    if (!btn) return;
    const index = Number(btn.closest(".cat-manager-row").dataset.index);
    quickNotes.splice(index, 1);
    saveQuickNotes();
    renderQuickNoteManagerList();
    renderQuickNoteStrip();
    updateQuickNoteStripVisibility();
  });

  newQuickNoteAmountInput.addEventListener("input", () => {
    const digits = newQuickNoteAmountInput.value.replace(/\D/g, "");
    newQuickNoteAmountInput.value = digits ? Number(digits).toLocaleString("vi-VN") : "";
  });

  newQuickNoteSaveBtn.addEventListener("click", () => {
    const label = newQuickNoteInput.value.trim();
    const amount = Number(newQuickNoteAmountInput.value.replace(/\D/g, "")) || 0;
    const category = newQuickNoteBucketSelect.value;
    if (!label || amount <= 0 || !category) return;
    quickNotes.push({ label, amount, category });
    saveQuickNotes();
    newQuickNoteInput.value = "";
    newQuickNoteAmountInput.value = "";
    renderQuickNoteManagerList();
    renderQuickNoteStrip();
    updateQuickNoteStripVisibility();
  });

  clearDataBtn.addEventListener("click", () => {
    if (!confirm(t("backup.confirmClear"))) return;
    transactions = [];
    saveTransactions(transactions);
    initialBalance = 0;
    localStorage.removeItem(INITIAL_BALANCE_KEY);
    monthlyBaselineSplit = {};
    saveMonthlyBaselineSplit();
    goal = null;
    saveGoal();
    localStorage.removeItem(ONBOARDING_KEY);
    renderAll();
    showView("home");
  });

  /* ---------- sao lưu / khôi phục dữ liệu (xuất-nhập file, tự lưu vào Drive/iCloud) ---------- */

  function collectBackupData() {
    const data = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith("sotuchi.")) data[key] = localStorage.getItem(key);
    }
    return data;
  }

  exportDataBtn.addEventListener("click", () => {
    const payload = { app: "meomoney", exportedAt: new Date().toISOString(), data: collectBackupData() };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `meomoney-backup-${toDateString(new Date())}.json`;
    a.click();
    URL.revokeObjectURL(url);
  });

  importDataBtn.addEventListener("click", () => importDataFile.click());

  importDataFile.addEventListener("change", () => {
    const file = importDataFile.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      importDataFile.value = "";
      let data;
      try {
        const parsed = JSON.parse(reader.result);
        data = parsed && typeof parsed.data === "object" ? parsed.data : parsed;
        if (!data || typeof data !== "object") throw new Error("invalid");
      } catch (e) {
        alert(t("backup.invalidFile"));
        return;
      }
      if (!confirm(t("backup.confirmImport"))) return;
      for (let i = localStorage.length - 1; i >= 0; i--) {
        const key = localStorage.key(i);
        if (key && key.startsWith("sotuchi.")) localStorage.removeItem(key);
      }
      Object.entries(data).forEach(([key, value]) => {
        if (key.startsWith("sotuchi.")) localStorage.setItem(key, value);
      });
      alert(t("backup.restored"));
      window.location.reload();
    };
    reader.readAsText(file);
  });

  /* ---------- tông màu chủ đạo ---------- */

  const THEME_KEY = "sotuchi.theme";
  const THEMES = [
    { id: "green", primary: "#16a34a", dark: "#128040", light: "#22c55e" },
    { id: "blue", primary: "#2563eb", dark: "#1d4ed8", light: "#3b82f6" },
    { id: "purple", primary: "#7c3aed", dark: "#6d28d9", light: "#8b5cf6" },
    { id: "pink", primary: "#db2777", dark: "#be185d", light: "#ec4899" },
    { id: "orange", primary: "#f15a29", dark: "#c8451d", light: "#ff7f4d" },
    { id: "teal", primary: "#0d9488", dark: "#0f766e", light: "#14b8a6" },
  ];
  let activeTheme = localStorage.getItem(THEME_KEY) || "orange";

  function applyTheme(id) {
    const theme = THEMES.find((t) => t.id === id) || THEMES[0];
    document.documentElement.style.setProperty("--primary", theme.primary);
    document.documentElement.style.setProperty("--primary-dark", theme.dark);
    document.documentElement.style.setProperty("--primary-light", theme.light);
    document.querySelector('meta[name="theme-color"]').setAttribute("content", theme.primary);
    activeTheme = id;
    localStorage.setItem(THEME_KEY, id);
    renderThemeSwatches();
  }

  function renderThemeSwatches() {
    themeSwatchesEl.innerHTML = THEMES.map(
      (t) => `<button type="button" class="theme-swatch${t.id === activeTheme ? " active" : ""}" data-theme="${t.id}" style="background:${t.primary}" aria-label="${t.id}"></button>`
    ).join("");
  }

  themeSwatchesEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".theme-swatch");
    if (!btn) return;
    applyTheme(btn.dataset.theme);
  });

  applyTheme(activeTheme);

  /* ---------- đơn vị tiền tệ (chỉ đổi ký hiệu hiển thị) ---------- */

  function applyCurrencySymbol() {
    const cur = CURRENCIES[activeCurrency] || CURRENCIES.vnd;
    document.querySelectorAll(".amount-currency").forEach((el) => { el.textContent = cur.symbol; });
    syncInitialBalanceDisplay();
  }

  function renderCurrencyOptions() {
    currencyOptionsEl.innerHTML = Object.entries(CURRENCIES)
      .map(([id, c]) => `<button type="button" class="pill-option${id === activeCurrency ? " active" : ""}" data-currency="${id}">${c.symbol} ${t(c.label)}</button>`)
      .join("");
  }

  currencyOptionsEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".pill-option");
    if (!btn) return;
    activeCurrency = btn.dataset.currency;
    localStorage.setItem(CURRENCY_KEY, activeCurrency);
    renderCurrencyOptions();
    applyCurrencySymbol();
    renderAll();
  });

  renderCurrencyOptions();
  applyCurrencySymbol();

  /* ---------- ngôn ngữ ---------- */

  function renderLanguageOptions() {
    document.querySelectorAll(".js-lang-options").forEach((el) => {
      el.querySelectorAll("[data-lang]").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.lang === activeLanguage);
      });
    });
  }

  function setLanguage(lang) {
    if (lang === activeLanguage) return;
    activeLanguage = lang;
    localStorage.setItem(LANGUAGE_KEY, lang);
    applyStaticI18n();
    renderLanguageOptions();
    renderCurrencyOptions();
    renderOnboardingCurrencyOptions();
    updateMonthLabel();
    renderAll();
  }

  document.querySelectorAll(".js-lang-options").forEach((el) => {
    el.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-lang]");
      if (!btn || btn.disabled) return;
      setLanguage(btn.dataset.lang);
    });
  });
  applyStaticI18n();
  renderLanguageOptions();

  /* ---------- tổng tiền hiện có (đặt lại tổng tài sản, tự chia theo công thức) ---------- */

  function syncInitialBalanceDisplay() {
    const { current } = computeFinance();
    const cur = CURRENCIES[activeCurrency] || CURRENCIES.vnd;
    initialBalanceDisplay.textContent = `${(current || 0).toLocaleString("vi-VN")} ${cur.symbol}`;
  }

  // Ô này mở bàn phím riêng của app (bàn phím hệ điều hành không bật được trên một số máy/PWA)
  let balanceBuffer = "";

  function renderBalanceSheetAmount() {
    balanceSheetValueEl.textContent = Number(balanceBuffer || "0").toLocaleString("vi-VN");
  }

  initialBalanceDisplay.addEventListener("click", () => {
    const { current } = computeFinance();
    balanceBuffer = current > 0 ? String(current) : "";
    renderBalanceSheetAmount();
    balanceOverlay.hidden = false;
  });

  balanceKeypadEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".key");
    if (!btn) return;
    playKeyClick();
    const key = btn.dataset.key;
    if (key === "back") {
      balanceBuffer = balanceBuffer.slice(0, -1);
    } else if (key === "000") {
      if (balanceBuffer) balanceBuffer = (balanceBuffer + "000").slice(0, MAX_AMOUNT_DIGITS);
    } else {
      if (balanceBuffer.length >= MAX_AMOUNT_DIGITS) return;
      balanceBuffer = (balanceBuffer === "0" ? "" : balanceBuffer) + key;
    }
    renderBalanceSheetAmount();
  });

  balanceSheetCancelBtn.addEventListener("click", () => {
    balanceOverlay.hidden = true;
  });
  balanceOverlay.addEventListener("click", (e) => {
    if (e.target === balanceOverlay) balanceOverlay.hidden = true;
  });

  balanceSheetSaveBtn.addEventListener("click", () => {
    const entered = Number(balanceBuffer || "0");
    const { current: before } = computeFinance();
    const netSoFar = transactions.reduce((s, t) => s + (t.type === "income" ? t.amount : -t.amount), 0);
    initialBalance = entered - netSoFar; // để tổng tài sản hiện tại = đúng số vừa nhập
    localStorage.setItem(INITIAL_BALANCE_KEY, String(initialBalance));
    if (activeFormula) addMonthlyBaselineSplit(entered - before); // tự chia phần chênh lệch vào các lọ của tháng này
    balanceOverlay.hidden = true;
    renderAll();
  });

  /* ---------- ngày bắt đầu (tự động ghi nhận lần đầu mở app, không thể sửa) ---------- */

  const START_DATE_KEY = "sotuchi.startDate";
  if (!localStorage.getItem(START_DATE_KEY)) {
    localStorage.setItem(START_DATE_KEY, toDateString(new Date()));
  }
  startDateDisplayEl.textContent = formatDate(localStorage.getItem(START_DATE_KEY));

  /* ---------- chia sẻ ứng dụng ---------- */

  shareAppBtn.addEventListener("click", async () => {
    const shareData = {
      title: "memoney",
      text: t("share.text"),
      url: window.location.href,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (e) {
        /* người dùng hủy chia sẻ */
      }
      return;
    }
    try {
      await navigator.clipboard.writeText(shareData.url);
      alert(t("share.linkCopied"));
    } catch (e) {
      alert(shareData.url);
    }
  });

  /* ---------- trung tâm ứng dụng ---------- */

  const APP_HUB_URL = "#"; // chưa có link thật — cập nhật khi có

  appHubBtn.addEventListener("click", () => {
    if (!APP_HUB_URL || APP_HUB_URL === "#") {
      alert(t("share.hubComingSoon"));
      return;
    }
    window.open(APP_HUB_URL, "_blank", "noopener");
  });

  /* ---------- quản lý danh mục (chi tiêu / thu nhập) ---------- */

  let categoryManagerType = "expense";

  function openCategoryManager(type) {
    categoryManagerType = type;
    categoryManagerTitleEl.textContent = type === "expense" ? t("catManager.expenseTitle") : t("catManager.incomeTitle");
    newCatIconInput.value = "";
    newCatLabelInput.value = "";
    renderCategoryManagerList();
    categoryManagerOverlay.hidden = false;
  }

  function closeCategoryManager() {
    categoryManagerOverlay.hidden = true;
  }

  function renderCategoryManagerList() {
    const cats = getCategories(categoryManagerType);
    const customIds = new Set(customCategories[categoryManagerType].map((c) => c.id));
    categoryManagerListEl.innerHTML = cats
      .map(
        (c) => `
        <div class="cat-manager-row" data-id="${c.id}">
          <span class="cat-manager-icon">${c.icon}</span>
          <span class="cat-manager-label">${escapeHtml(t(c.label))}</span>
          ${customIds.has(c.id) ? `<button type="button" class="cat-manager-remove" aria-label="${t("catManager.delete.aria")}">✕</button>` : ""}
        </div>`
      )
      .join("");
  }

  openIncomeCatBtn.addEventListener("click", () => openCategoryManager("income"));
  categoryManagerCloseBtn.addEventListener("click", closeCategoryManager);
  categoryManagerOverlay.addEventListener("click", (e) => {
    if (e.target === categoryManagerOverlay) closeCategoryManager();
  });

  categoryManagerListEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".cat-manager-remove");
    if (!btn) return;
    const id = btn.closest(".cat-manager-row").dataset.id;
    customCategories[categoryManagerType] = customCategories[categoryManagerType].filter((c) => c.id !== id);
    saveCustomCategories();
    renderCategoryManagerList();
  });

  newCatSaveBtn.addEventListener("click", () => {
    const label = newCatLabelInput.value.trim();
    if (!label) return;
    const icon = newCatIconInput.value.trim() || "🏷️";
    const color = BUCKET_COLORS[getCategories(categoryManagerType).length % BUCKET_COLORS.length];
    customCategories[categoryManagerType].push({ id: uid(), label, icon, color });
    saveCustomCategories();
    newCatIconInput.value = "";
    newCatLabelInput.value = "";
    renderCategoryManagerList();
  });

  /* ---------- keypad click sound ---------- */

  let audioCtx = null;
  function getAudioCtx() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === "suspended") audioCtx.resume();
    return audioCtx;
  }

  function playKeyClick() {
    if (!soundEnabled) return;
    const ctx = getAudioCtx();
    const now = ctx.currentTime;

    const bufferSize = Math.floor(ctx.sampleRate * 0.03);
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufferSize, 2);
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const bandpass = ctx.createBiquadFilter();
    bandpass.type = "bandpass";
    bandpass.frequency.value = 2800;
    bandpass.Q.value = 1.1;

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.3, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.045);

    noise.connect(bandpass).connect(noiseGain).connect(ctx.destination);
    noise.start(now);
    noise.stop(now + 0.05);

    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(180, now);
    osc.frequency.exponentialRampToValueAtTime(60, now + 0.035);
    const oscGain = ctx.createGain();
    oscGain.gain.setValueAtTime(0.22, now);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.045);
    osc.connect(oscGain).connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.05);
  }

  /* ---------- month picker ---------- */

  function updateMonthLabel() {
    const [y, m] = currentMonth.split("-");
    monthLabelTextEl.textContent = `${t("formula.month")} ${Number(m)} · ${y}`;
  }

  monthInput.value = currentMonth;
  updateMonthLabel();

  monthInput.addEventListener("change", () => {
    if (monthInput.value) {
      currentMonth = monthInput.value;
      updateMonthLabel();
      renderAll();
    }
  });

  function shiftMonth(delta) {
    const [y, m] = currentMonth.split("-").map(Number);
    const d = new Date(y, m - 1 + delta, 1);
    currentMonth = toMonthString(d);
    monthInput.value = currentMonth;
    updateMonthLabel();
    renderAll();
  }

  prevMonthBtn.addEventListener("click", () => shiftMonth(-1));
  nextMonthBtn.addEventListener("click", () => shiftMonth(1));

  /* ---------- filter chips ---------- */

  filterChipsEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    activeFilter = btn.dataset.filter;
    [...filterChipsEl.children].forEach((c) => c.classList.toggle("active", c === btn));
    renderList();
  });

  /* ---------- home dashboard ---------- */

  function renderHome() {
    const { current, record, todayNet, growthPct, healthPct } = computeFinance();
    const zone = healthZone(healthPct);

    healthPctEl.textContent = `${Math.round(healthPct)}%`;
    healthPctEl.className = `health-pct zone-${zone}`;
    healthBarFillEl.style.width = `${healthPct}%`;
    healthBarFillEl.className = `health-bar-fill zone-${zone}`;
    healthCurrentEl.textContent = formatCurrency(current);
    healthRecordEl.textContent = formatCurrency(record);
    healthBadge.hidden = !(record > 0 && current >= record);

    totalAssetsEls.forEach((el) => {
      el.textContent = formatCurrency(current);
      el.style.color = current < 0 ? "var(--expense)" : "var(--text)";
    });

    todayChangeEls.forEach((el) => {
      el.textContent = `${todayNet >= 0 ? "+" : "−"} ${formatCurrency(Math.abs(todayNet))}`;
      el.style.color = todayNet >= 0 ? "var(--income)" : "var(--expense)";
    });

    todayGrowthEls.forEach((el) => {
      if (growthPct === null) {
        if (todayNet !== 0) {
          el.hidden = false;
          el.textContent = t("dash.new");
          el.className = "dash-growth js-today-growth new";
        } else {
          el.hidden = true;
        }
      } else {
        el.hidden = false;
        el.textContent = `${growthPct >= 0 ? "+" : "−"}${Math.abs(growthPct).toFixed(1)}%`;
        el.className = `dash-growth js-today-growth ${growthPct >= 0 ? "up" : "down"}`;
      }
    });
  }

  /* ---------- summary ---------- */

  function renderSummary() {
    const monthTx = transactions.filter(txInCurrentMonth);
    const income = monthTx.filter((t) => t.type === "income").reduce((s, t) => s + t.amount, 0);
    const expense = monthTx.filter((t) => t.type === "expense").reduce((s, t) => s + t.amount, 0);
    totalIncomeEl.textContent = formatCurrency(income);
    totalExpenseEl.textContent = formatCurrency(expense);
    totalBalanceEl.textContent = formatCurrency(income - expense);
    totalBalanceEl.style.color = income - expense < 0 ? "var(--expense)" : "var(--balance)";
  }

  /* ---------- transaction list ---------- */

  function renderList() {
    const monthTx = transactions
      .filter(txInCurrentMonth)
      .filter((t) => activeFilter === "all" || t.type === activeFilter)
      .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : b.createdAt - a.createdAt));

    transactionListEl.innerHTML = "";

    if (monthTx.length === 0) {
      listEmptyEl.hidden = false;
      return;
    }
    listEmptyEl.hidden = true;

    let lastDate = null;
    for (const tx of monthTx) {
      if (tx.date !== lastDate) {
        lastDate = tx.date;
        const divider = document.createElement("li");
        divider.className = "day-divider";
        divider.textContent = formatDate(tx.date);
        transactionListEl.appendChild(divider);
      }

      const cat = tx.type === "expense" ? expenseDisplayInfo(tx) : findCategory("income", tx.category);
      const li = document.createElement("li");
      li.className = `tx-item ${tx.type}`;
      li.dataset.id = tx.id;
      li.innerHTML = `
        <div class="tx-icon" style="background:${cat.color}22">${cat.icon}</div>
        <div class="tx-main">
          <div class="tx-category">${t(cat.label)}</div>
          ${tx.note ? `<div class="tx-note">${escapeHtml(tx.note)}</div>` : ""}
        </div>
        <div class="tx-side">
          <div class="tx-amount">${tx.type === "income" ? "+" : "−"} ${formatCurrency(tx.amount)}</div>
        </div>
      `;
      li.addEventListener("click", () => openModal(tx));
      transactionListEl.appendChild(li);
    }
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  /* ---------- donut switch (Chi / Thu) ---------- */

  donutSwitchEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".donut-switch-btn");
    if (!btn || btn.classList.contains("active")) return;
    donutType = btn.dataset.donut;
    [...donutSwitchEl.querySelectorAll(".donut-switch-btn")].forEach((b) => b.classList.toggle("active", b === btn));
    donutSwitchEl.classList.toggle("income-active", donutType === "income");
    renderChart();
  });

  /* ---------- chart (donut: chi tiêu hoặc thu nhập theo danh mục) ---------- */

  function renderChart() {
    const monthTx = transactions.filter((t) => txInCurrentMonth(t) && t.type === donutType);
    const totals = {};
    for (const t of monthTx) {
      const info = donutType === "expense" ? expenseDisplayInfo(t) : findCategory("income", t.category);
      const key = donutType === "expense" ? `${t.formulaId || ""}:${info.id}` : info.id;
      if (!totals[key]) totals[key] = { cat: info, value: 0 };
      totals[key].value += t.amount;
    }
    const entries = Object.values(totals).sort((a, b) => b.value - a.value);

    const total = entries.reduce((s, e) => s + e.value, 0);

    const ctx = chartCanvas.getContext("2d");
    const size = chartCanvas.parentElement.clientWidth;
    if (size <= 0) return; // canvas ẩn (ví dụ trang Thống kê chưa mở) — bỏ qua, tránh vẽ với kích thước âm
    const dpr = window.devicePixelRatio || 1;
    chartCanvas.width = size * dpr;
    chartCanvas.height = size * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, size, size);

    chartLegendEl.innerHTML = "";

    if (total === 0) {
      chartEmptyEl.hidden = false;
      return;
    }
    chartEmptyEl.hidden = true;

    const cx = size / 2;
    const cy = size / 2;
    const outerR = size / 2 - 4;
    const innerR = outerR * 0.62;

    let startAngle = -Math.PI / 2;
    for (const e of entries) {
      const slice = (e.value / total) * Math.PI * 2;
      const endAngle = startAngle + slice;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, outerR, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = e.cat.color;
      ctx.fill();
      startAngle = endAngle;
    }

    // punch inner hole for donut effect
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(cx, cy, innerR, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";

    ctx.fillStyle = "#1a2138";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "700 15px 'Segoe UI', sans-serif";
    ctx.fillText(formatCurrency(total), cx, cy - 8);
    ctx.font = "600 11px 'Segoe UI', sans-serif";
    ctx.fillStyle = "#6b7280";
    ctx.fillText(t(donutType === "expense" ? "stats.donut.expense" : "stats.donut.income"), cx, cy + 12);

    for (const e of entries) {
      const pct = ((e.value / total) * 100).toFixed(1);
      const li = document.createElement("li");
      li.innerHTML = `
        <span class="legend-dot" style="background:${e.cat.color}"></span>
        <span class="legend-name">${e.cat.icon} ${t(e.cat.label)}</span>
        <span class="legend-value">${formatCurrency(e.value)}</span>
        <span class="legend-pct">${pct}%</span>
      `;
      chartLegendEl.appendChild(li);
    }
  }

  /* ---------- trend (biểu đồ núi biến động số dư trong tháng) ---------- */

  function computeMonthTrend() {
    const [y, m] = currentMonth.split("-").map(Number);
    const daysInMonth = new Date(y, m, 0).getDate();
    const before =
      initialBalance +
      transactions
        .filter((t) => t.date.slice(0, 7) < currentMonth)
        .reduce((s, t) => s + (t.type === "income" ? t.amount : -t.amount), 0);
    const byDay = {};
    transactions
      .filter((t) => t.date.slice(0, 7) === currentMonth)
      .forEach((t) => {
        const day = Number(t.date.slice(8, 10));
        byDay[day] = (byDay[day] || 0) + (t.type === "income" ? t.amount : -t.amount);
      });
    let running = before;
    const points = [];
    for (let d = 1; d <= daysInMonth; d++) {
      running += byDay[d] || 0;
      points.push({ day: d, balance: running });
    }
    return points;
  }

  function trendColorVar(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }

  function renderTrendChart(highlightIndex) {
    trendPoints = computeMonthTrend();

    trendHeadValueEl.textContent = formatCurrency(trendPoints[trendPoints.length - 1].balance);
    const startBalance = trendPoints[0].balance;
    const endBalance = trendPoints[trendPoints.length - 1].balance;
    if (startBalance !== 0) {
      const pct = ((endBalance - startBalance) / Math.abs(startBalance)) * 100;
      trendHeadSubEl.hidden = false;
      trendHeadSubEl.textContent = `${pct >= 0 ? "+" : "−"}${Math.abs(pct).toFixed(1)}%`;
      trendHeadSubEl.className = `trend-head-sub ${pct >= 0 ? "up" : "down"}`;
    } else {
      trendHeadSubEl.hidden = true;
    }

    const wrap = trendCanvas.parentElement;
    const width = wrap.clientWidth;
    const height = wrap.clientHeight;
    if (width <= 0 || height <= 0) return;
    const dpr = window.devicePixelRatio || 1;
    trendCanvas.width = width * dpr;
    trendCanvas.height = height * dpr;
    const ctx = trendCanvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, width, height);

    if (transactions.length === 0) {
      trendEmptyEl.hidden = false;
      trendTooltipEl.hidden = true;
      return;
    }
    trendEmptyEl.hidden = true;

    const values = trendPoints.map((p) => p.balance);
    let min = Math.min(...values);
    let max = Math.max(...values);
    if (min === max) {
      min -= 1;
      max += 1;
    }
    const pad = (max - min) * 0.18;
    min -= pad;
    max += pad;

    const padX = 4;
    const padTop = 10;
    const padBottom = 8;
    const plotW = width - padX * 2;
    const plotH = height - padTop - padBottom;

    const xAt = (i) => padX + (i / (trendPoints.length - 1)) * plotW;
    const yAt = (v) => padTop + (1 - (v - min) / (max - min)) * plotH;
    const pts = trendPoints.map((p, i) => ({ x: xAt(i), y: yAt(p.balance) }));

    const trendColor = endBalance >= startBalance ? trendColorVar("--income") : trendColorVar("--expense");

    ctx.beginPath();
    ctx.moveTo(pts[0].x, pts[0].y);
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i];
      const p1 = pts[i + 1];
      const midX = (p0.x + p1.x) / 2;
      ctx.bezierCurveTo(midX, p0.y, midX, p1.y, p1.x, p1.y);
    }
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.strokeStyle = trendColor;
    ctx.lineWidth = 2.5;
    ctx.stroke();

    ctx.lineTo(pts[pts.length - 1].x, height - padBottom);
    ctx.lineTo(pts[0].x, height - padBottom);
    ctx.closePath();
    const grad = ctx.createLinearGradient(0, padTop, 0, height - padBottom);
    grad.addColorStop(0, `${trendColor}4d`);
    grad.addColorStop(1, `${trendColor}00`);
    ctx.fillStyle = grad;
    ctx.fill();

    if (highlightIndex != null) {
      const p = pts[highlightIndex];
      ctx.beginPath();
      ctx.moveTo(p.x, padTop);
      ctx.lineTo(p.x, height - padBottom);
      ctx.strokeStyle = "rgba(107, 124, 115, 0.35)";
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.beginPath();
      ctx.arc(p.x, p.y, 4.5, 0, Math.PI * 2);
      ctx.fillStyle = trendColor;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(p.x, p.y, 4.5, 0, Math.PI * 2);
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 2;
      ctx.stroke();

      const point = trendPoints[highlightIndex];
      trendTooltipEl.hidden = false;
      trendTooltipEl.textContent = `${point.day}/${Number(currentMonth.split("-")[1])} · ${formatCurrency(point.balance)}`;
      let left = p.x;
      const tooltipHalfWidth = trendTooltipEl.offsetWidth / 2 || 40;
      left = Math.max(tooltipHalfWidth, Math.min(width - tooltipHalfWidth, left));
      trendTooltipEl.style.left = `${left}px`;
      trendTooltipEl.style.top = `${Math.max(0, p.y - 10)}px`;
    } else {
      trendTooltipEl.hidden = true;
    }
  }

  function trendIndexFromClientX(clientX) {
    const rect = trendCanvas.getBoundingClientRect();
    const padX = 4;
    const plotW = rect.width - padX * 2;
    const t = (clientX - rect.left - padX) / plotW;
    const idx = Math.round(t * (trendPoints.length - 1));
    return Math.max(0, Math.min(trendPoints.length - 1, idx));
  }

  trendCanvas.addEventListener("pointermove", (e) => {
    if (trendPoints.length < 2) return;
    renderTrendChart(trendIndexFromClientX(e.clientX));
  });
  trendCanvas.addEventListener("pointerdown", (e) => {
    if (trendPoints.length < 2) return;
    renderTrendChart(trendIndexFromClientX(e.clientX));
  });
  ["pointerup", "pointerleave"].forEach((evt) => {
    trendCanvas.addEventListener(evt, () => renderTrendChart(null));
  });

  /* ---------- category strip ---------- */

  function catChipHtml(id, icon, label, active) {
    const text = t(label);
    return `<button type="button" class="cat-chip${active ? " active" : ""}" data-id="${id}" title="${escapeHtml(text)}">
      <span class="cat-chip-icon">${icon}</span>
      <span class="cat-chip-label">${escapeHtml(text)}</span>
    </button>`;
  }

  function renderCatStrip(type, selectedId) {
    if (type === "expense") {
      const buckets = getFormulaDef(activeFormula).buckets;
      const sel = selectedId && buckets.some((b) => b.key === selectedId) ? selectedId : buckets[0] ? buckets[0].key : "";
      catStripEl.innerHTML = buckets
        .map((b) => catChipHtml(b.key, bucketMeta(b.label, b.key).icon, b.label, b.key === sel))
        .join("");
      txCategoryInput.value = sel;
      return;
    }
    const cats = getCategories(type);
    const sel = selectedId && cats.some((c) => c.id === selectedId) ? selectedId : cats[0].id;
    catStripEl.innerHTML = cats.map((c) => catChipHtml(c.id, c.icon, c.label, c.id === sel)).join("");
    txCategoryInput.value = sel;
  }

  catStripEl.addEventListener("click", (e) => {
    if (catStripEl.dataset.dragged === "1") return;
    const btn = e.target.closest(".cat-chip");
    if (!btn) return;
    txCategoryInput.value = btn.dataset.id;
    [...catStripEl.children].forEach((c) => c.classList.toggle("active", c === btn));
  });

  // let mouse wheel scroll the strip horizontally (desktop, no touch swipe)
  catStripEl.addEventListener(
    "wheel",
    (e) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      catStripEl.scrollLeft += e.deltaY;
      e.preventDefault();
    },
    { passive: false }
  );

  // click-and-drag to scroll (desktop / mouse)
  let dragStartX = 0;
  let dragStartScroll = 0;
  let isDragging = false;
  catStripEl.addEventListener("pointerdown", (e) => {
    isDragging = true;
    catStripEl.dataset.dragged = "0";
    dragStartX = e.clientX;
    dragStartScroll = catStripEl.scrollLeft;
  });
  catStripEl.addEventListener("pointermove", (e) => {
    if (!isDragging) return;
    const delta = e.clientX - dragStartX;
    if (Math.abs(delta) > 4) catStripEl.dataset.dragged = "1";
    catStripEl.scrollLeft = dragStartScroll - delta;
  });
  ["pointerup", "pointerleave"].forEach((evt) => {
    catStripEl.addEventListener(evt, () => {
      isDragging = false;
    });
  });

  /* ---------- type (income / expense) ---------- */

  function setModalType(type, categoryId) {
    modalType = type;
    typeToggleBtn.textContent = type === "income" ? "+" : "−";
    typeToggleBtn.classList.toggle("income", type === "income");
    typeToggleBtn.classList.toggle("expense", type === "expense");
    amountDisplayEl.classList.toggle("income", type === "income");
    amountDisplayEl.classList.toggle("expense", type === "expense");
    amountSignEl.textContent = type === "income" ? "+" : "−";
    renderCatStrip(type, categoryId);
    updateQuickNoteStripVisibility();
  }

  typeToggleBtn.addEventListener("click", () => {
    setModalType(modalType === "expense" ? "income" : "expense");
  });

  /* ---------- modal ---------- */

  function openModal(tx) {
    if (!tx && isLimitReached()) {
      openUpgrade();
      return;
    }
    txForm.reset();
    if (tx) {
      modalTitle.textContent = t("tx.modalTitle.edit");
      txIdInput.value = tx.id;
      setModalType(tx.type, tx.category);
      setAmount(tx.amount);
      txDateInput.value = tx.date;
      txNoteInput.value = tx.note || "";
      dateFieldEl.hidden = false;
      noteFieldEl.hidden = false;
      deleteBtn.hidden = false;
    } else {
      modalTitle.textContent = t("tx.modalTitle.add");
      txIdInput.value = "";
      setModalType("expense");
      setAmount("");
      txNoteInput.value = "";
      dateFieldEl.hidden = true;
      noteFieldEl.hidden = !showNoteOnAdd;
      deleteBtn.hidden = true;
    }
    updateQuickNoteStripVisibility();
    modalOverlay.hidden = false;
  }

  function closeModal() {
    modalOverlay.hidden = true;
  }

  addBtn.addEventListener("click", () => openModal(null));
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modalOverlay.hidden) closeModal();
    if (e.key === "Escape" && !upgradeOverlay.hidden) closeUpgrade();
    if (e.key === "Escape" && !customFormulaOverlay.hidden) closeCustomFormulaSetup();
    if (e.key === "Escape" && !categoryManagerOverlay.hidden) closeCategoryManager();
    if (e.key === "Escape" && !quickNoteManagerOverlay.hidden) closeQuickNoteManager();
    if (e.key === "Escape" && !goalFormOverlay.hidden) closeGoalForm();
  });

  /* ---------- smart amount keypad ---------- */

  const MAX_AMOUNT_DIGITS = 12;
  let amountBuffer = "";

  function renderAmount() {
    const n = Number(amountBuffer || "0");
    amountValueEl.textContent = n.toLocaleString("vi-VN");
    txAmountInput.value = amountBuffer;
  }

  function setAmount(value) {
    amountBuffer = String(value).replace(/\D/g, "").slice(0, MAX_AMOUNT_DIGITS);
    renderAmount();
  }

  function pulseAmount() {
    amountDisplayEl.classList.remove("pulse");
    void amountDisplayEl.offsetWidth;
    amountDisplayEl.classList.add("pulse");
  }

  keypadEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".key");
    if (!btn) return;
    playKeyClick();
    const key = btn.dataset.key;
    if (key === "back") {
      amountBuffer = amountBuffer.slice(0, -1);
    } else if (key === "000") {
      if (amountBuffer) amountBuffer = (amountBuffer + "000").slice(0, MAX_AMOUNT_DIGITS);
    } else {
      if (amountBuffer.length >= MAX_AMOUNT_DIGITS) return;
      amountBuffer = (amountBuffer === "0" ? "" : amountBuffer) + key;
    }
    renderAmount();
  });

  let backspaceHoldTimer = null;
  backKeyBtn.addEventListener("pointerdown", () => {
    backspaceHoldTimer = setTimeout(() => setAmount(""), 500);
  });
  ["pointerup", "pointerleave"].forEach((evt) => {
    backKeyBtn.addEventListener(evt, () => clearTimeout(backspaceHoldTimer));
  });

  function commitTransaction(noteOverride) {
    const amount = Number(amountBuffer || "0");
    if (!amount || amount <= 0) {
      pulseAmount();
      return false;
    }
    const id = txIdInput.value;
    const date = id ? txDateInput.value : toDateString(new Date());
    const data = {
      id: id || uid(),
      type: modalType,
      amount,
      category: txCategoryInput.value,
      date,
      note: noteOverride != null ? noteOverride : txNoteInput.value.trim(),
      createdAt: id ? transactions.find((t) => t.id === id).createdAt : Date.now(),
    };

    if (modalType === "expense" && activeFormula) {
      // gắn công thức hiện hành để lọ chi tiêu này hiển thị đúng ngay cả khi sau đó đổi công thức khác
      data.formulaId = activeFormula;
    }

    if (id) {
      transactions = transactions.map((t) => (t.id === id ? data : t));
    } else {
      transactions.push(data);
    }
    saveTransactions(transactions);
    closeModal();
    currentMonth = data.date.slice(0, 7);
    monthInput.value = currentMonth;
    renderAll();
    document.dispatchEvent(new CustomEvent("tx:saved"));
    return true;
  }

  txForm.addEventListener("submit", (e) => {
    e.preventDefault();
    commitTransaction();
  });

  deleteBtn.addEventListener("click", () => {
    const id = txIdInput.value;
    if (!id) return;
    transactions = transactions.filter((t) => t.id !== id);
    saveTransactions(transactions);
    closeModal();
    renderAll();
  });

  /* ---------- dấu chân mèo mỗi khi chạm vào bất kỳ đâu trong app ---------- */

  const PAW_SVG =
    '<svg viewBox="0 0 24 24" fill="currentColor"><ellipse cx="12" cy="16.5" rx="6.5" ry="5"/><ellipse cx="4.6" cy="9.6" rx="2.3" ry="3" transform="rotate(-18 4.6 9.6)"/><ellipse cx="9.4" cy="5.5" rx="2.5" ry="3.2" transform="rotate(-8 9.4 5.5)"/><ellipse cx="14.6" cy="5.5" rx="2.5" ry="3.2" transform="rotate(8 14.6 5.5)"/><ellipse cx="19.4" cy="9.6" rx="2.3" ry="3" transform="rotate(18 19.4 9.6)"/></svg>';

  function spawnPawTap(x, y) {
    const paw = document.createElement("div");
    paw.className = "paw-tap";
    paw.style.left = `${x}px`;
    paw.style.top = `${y}px`;
    paw.style.setProperty("--paw-rot", `${Math.round(Math.random() * 50 - 25)}deg`);
    paw.innerHTML = PAW_SVG;
    paw.addEventListener("animationend", () => paw.remove());
    document.body.appendChild(paw);
  }

  document.addEventListener("click", (e) => spawnPawTap(e.clientX, e.clientY));

  /* ---------- cuộn lên đầu trang ---------- */

  window.addEventListener(
    "scroll",
    () => {
      scrollTopBtn.classList.toggle("visible", window.scrollY > 300);
    },
    { passive: true }
  );
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------- mục tiêu (goals) — 1 mục tiêu duy nhất, timeline dọc theo ngày ---------- */

  const GOAL_KEY = "sotuchi.goal";
  let goal = loadJSON(GOAL_KEY, null);
  let goalStageDrafts = [];

  function saveGoal() {
    if (goal) localStorage.setItem(GOAL_KEY, JSON.stringify(goal));
    else localStorage.removeItem(GOAL_KEY);
  }

  function renderGoalStageRows() {
    const n = Math.min(10, Math.max(1, Number(goalStagesInput.value) || 1));
    while (goalStageDrafts.length < n) goalStageDrafts.push({ amount: 0, date: "" });
    goalStageDrafts.length = n;

    goalStageRowsEl.innerHTML = goalStageDrafts
      .map(
        (s, i) => `
        <div class="goal-stage-row" data-index="${i}">
          <div class="goal-stage-row-label">${t("goals.stage")} ${i + 1}</div>
          <div class="goal-stage-row-fields">
            <input type="text" inputmode="numeric" class="goal-stage-amount" placeholder="${t("goals.amountPlaceholder")}" value="${s.amount ? Number(s.amount).toLocaleString("vi-VN") : ""}">
            <input type="date" class="goal-stage-date" value="${s.date || ""}">
          </div>
        </div>`
      )
      .join("");
  }

  goalStageRowsEl.addEventListener("input", (e) => {
    const row = e.target.closest(".goal-stage-row");
    if (!row) return;
    const i = Number(row.dataset.index);
    if (e.target.classList.contains("goal-stage-amount")) {
      const digits = e.target.value.replace(/\D/g, "");
      e.target.value = digits ? Number(digits).toLocaleString("vi-VN") : "";
      goalStageDrafts[i].amount = Number(digits) || 0;
    } else if (e.target.classList.contains("goal-stage-date")) {
      goalStageDrafts[i].date = e.target.value;
    }
    updateGoalFormValidity();
  });

  function openGoalForm() {
    goalNameInput.value = "";
    goalStagesInput.value = 4;
    goalPledgeInput.value = "";
    goalStageDrafts = [];
    renderGoalStageRows();
    updateGoalFormValidity();
    goalFormOverlay.hidden = false;
  }

  function closeGoalForm() {
    goalFormOverlay.hidden = true;
  }

  function updateGoalFormValidity() {
    const name = goalNameInput.value.trim();
    const pledge = goalPledgeInput.value.trim();
    const todayStr = toDateString(new Date());

    let stagesValid = goalStageDrafts.length > 0;
    let prevDate = todayStr;
    for (const s of goalStageDrafts) {
      if (!s.amount || s.amount <= 0 || !s.date || s.date <= prevDate) {
        stagesValid = false;
        break;
      }
      prevDate = s.date;
    }

    goalFormSaveBtn.disabled = !(name && stagesValid && pledge);
  }

  goalNameInput.addEventListener("input", updateGoalFormValidity);
  goalPledgeInput.addEventListener("input", updateGoalFormValidity);
  goalStagesInput.addEventListener("input", () => {
    renderGoalStageRows();
    updateGoalFormValidity();
  });

  addGoalBtn.addEventListener("click", openGoalForm);
  goalFormCancelBtn.addEventListener("click", closeGoalForm);
  goalFormOverlay.addEventListener("click", (e) => {
    if (e.target === goalFormOverlay) closeGoalForm();
  });

  goalFormSaveBtn.addEventListener("click", () => {
    if (goalFormSaveBtn.disabled) return;
    goal = {
      name: goalNameInput.value.trim(),
      pledge: goalPledgeInput.value.trim(),
      createdAt: toDateString(new Date()),
      stages: goalStageDrafts.map((s) => ({ amount: s.amount, date: s.date })),
    };
    saveGoal();
    closeGoalForm();
    renderGoals();
  });

  function renderGoals() {
    if (!goal) {
      goalEmptyEl.hidden = false;
      goalActiveEl.hidden = true;
      addGoalBtn.hidden = false;
      return;
    }
    goalEmptyEl.hidden = true;
    goalActiveEl.hidden = false;
    addGoalBtn.hidden = true;

    goalNameHeroEl.textContent = goal.name;
    goalPledgeDisplayEl.textContent = `"${goal.pledge}"`;

    const start = new Date(`${goal.createdAt}T00:00:00`);
    const finalStage = goal.stages[goal.stages.length - 1];
    const finalDate = new Date(`${finalStage.date}T00:00:00`);
    const totalMs = Math.max(1, finalDate - start);
    const now = Date.now();
    const elapsedMs = Math.max(0, Math.min(totalMs, now - start.getTime()));
    const progressPct = Math.max(0, Math.min(100, (elapsedMs / totalMs) * 100));

    goalProgressFillEl.style.width = `${progressPct}%`;
    goalProgressPctEl.textContent = `${Math.round(progressPct)}%`;

    goalTimelineFillEl.style.height = `${progressPct}%`;
    goalTimelineTodayEl.style.top = `${progressPct}%`;

    // chiều cao dãn theo số giai đoạn, tránh dư khoảng trống khi ít giai đoạn
    goalTimelineEl.style.height = `${Math.max(220, Math.min(560, goal.stages.length * 110 + 60))}px`;

    goalTimelineDotsEl.innerHTML = goal.stages
      .map((s, i) => {
        const stageDate = new Date(`${s.date}T00:00:00`);
        const pct = Math.max(0, Math.min(100, ((stageDate - start) / totalMs) * 100));
        const reached = now >= stageDate.getTime();
        const daysLeft = Math.ceil((stageDate.getTime() - now) / 86400000);
        const daysText = reached
          ? tFormat("goals.daysPassed", { n: Math.abs(daysLeft) })
          : daysLeft === 0
          ? t("goals.today")
          : tFormat("goals.daysLeft", { n: daysLeft });
        // chừa 36px ở 2 đầu để thẻ giai đoạn (cao hơn 1 điểm) không tràn ra ngoài, đè lên nút bên dưới
        const rowTop = `calc(36px + (${pct} / 100) * (100% - 72px))`;
        return `
        <div class="goal-dot-row${reached ? " reached" : ""}" style="top:${rowTop}">
          <span class="goal-dot"></span>
          <span class="goal-dot-label">
            <span class="goal-dot-stage">${t("goals.stage")} ${i + 1}</span>
            <span class="goal-dot-amount">${formatCurrency(s.amount)}</span>
            <span class="goal-dot-date">${formatDate(s.date)} · ${daysText}</span>
          </span>
        </div>`;
      })
      .join("");
  }

  goalCancelBtn.addEventListener("click", () => {
    if (!confirm(t("goals.confirmCancel"))) return;
    goal = null;
    saveGoal();
    renderGoals();
  });

  /* ---------- render all ---------- */

  function renderAll() {
    renderHome();
    renderSummary();
    renderList();
    renderChart();
    renderTrendChart();
    renderFormulaTab();
    renderGoals();
    renderPremiumStatus();
    syncInitialBalanceDisplay();
  }

  window.addEventListener("resize", () => {
    renderChart();
    renderTrendChart();
  });

  if (needsDefaultFormula) saveActiveFormula();

  /* ---------- onboarding lần đầu mở app ---------- */

  function renderOnboardingCurrencyOptions() {
    onboardingCurrencyOptionsEl.innerHTML = Object.entries(CURRENCIES)
      .map(([id, c]) => `<button type="button" class="pill-option${id === activeCurrency ? " active" : ""}" data-currency="${id}">${c.symbol} ${t(c.label)}</button>`)
      .join("");
  }

  onboardingCurrencyOptionsEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".pill-option");
    if (!btn) return;
    activeCurrency = btn.dataset.currency;
    localStorage.setItem(CURRENCY_KEY, activeCurrency);
    renderOnboardingCurrencyOptions();
    renderCurrencyOptions();
    applyCurrencySymbol();
  });

  let onboardingBalanceBuffer = "";

  function renderOnboardingAmount() {
    const n = Number(onboardingBalanceBuffer || "0");
    onboardingAmountValueEl.textContent = n.toLocaleString("vi-VN");
  }

  onboardingKeypadEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".key");
    if (!btn) return;
    playKeyClick();
    const key = btn.dataset.key;
    if (key === "back") {
      onboardingBalanceBuffer = onboardingBalanceBuffer.slice(0, -1);
    } else if (key === "000") {
      if (onboardingBalanceBuffer) onboardingBalanceBuffer = (onboardingBalanceBuffer + "000").slice(0, MAX_AMOUNT_DIGITS);
    } else {
      if (onboardingBalanceBuffer.length >= MAX_AMOUNT_DIGITS) return;
      onboardingBalanceBuffer = (onboardingBalanceBuffer === "0" ? "" : onboardingBalanceBuffer) + key;
    }
    renderOnboardingAmount();
  });

  onboardingWelcomeNextBtn.addEventListener("click", () => {
    onboardingWelcomeEl.hidden = true;
    renderOnboardingCurrencyOptions();
    onboardingSetupEl.hidden = false;
  });

  onboardingStartBtn.addEventListener("click", () => {
    const entered = Number(onboardingBalanceBuffer || "0");
    initialBalance = entered;
    localStorage.setItem(INITIAL_BALANCE_KEY, String(initialBalance));
    if (entered) addMonthlyBaselineSplit(entered);
    renderAll();
    onboardingSetupEl.hidden = true;
    startTour();
  });

  onboardingDoneBtn.addEventListener("click", () => {
    onboardingDoneEl.hidden = true;
  });

  /* ---------- trình hướng dẫn (spotlight tour) ---------- */

  let tourMatEls = [];
  let tourTooltipEl = null;
  let tourResizeHandler = null;

  function teardownTourUI() {
    tourMatEls.forEach((el) => el.remove());
    tourMatEls = [];
    if (tourTooltipEl) { tourTooltipEl.remove(); tourTooltipEl = null; }
    if (tourResizeHandler) { window.removeEventListener("resize", tourResizeHandler); tourResizeHandler = null; }
  }

  function positionTourUI(target) {
    const r = target.getBoundingClientRect();
    const pad = 6;
    const rect = {
      top: r.top - pad,
      left: r.left - pad,
      right: r.right + pad,
      bottom: r.bottom + pad,
      width: r.width + pad * 2,
      height: r.height + pad * 2,
    };
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const [matTop, matBottom, matLeft, matRight] = tourMatEls;
    matTop.style.cssText = `top:0; left:0; width:${vw}px; height:${Math.max(0, rect.top)}px;`;
    matBottom.style.cssText = `top:${rect.bottom}px; left:0; width:${vw}px; height:${Math.max(0, vh - rect.bottom)}px;`;
    matLeft.style.cssText = `top:${rect.top}px; left:0; width:${Math.max(0, rect.left)}px; height:${rect.height}px;`;
    matRight.style.cssText = `top:${rect.top}px; left:${rect.right}px; width:${Math.max(0, vw - rect.right)}px; height:${rect.height}px;`;

    const tooltipWidth = Math.min(300, vw - 32);
    tourTooltipEl.style.width = `${tooltipWidth}px`;
    const spaceBelow = vh - rect.bottom;
    const spaceAbove = rect.top;
    let top;
    if (spaceBelow >= 170 || spaceBelow >= spaceAbove) {
      top = Math.min(rect.bottom + 16, vh - 16 - tourTooltipEl.offsetHeight);
    } else {
      top = Math.max(16, rect.top - 16 - tourTooltipEl.offsetHeight);
    }
    let left = r.left + r.width / 2 - tooltipWidth / 2;
    left = Math.max(16, Math.min(left, vw - tooltipWidth - 16));
    tourTooltipEl.style.top = `${Math.max(16, top)}px`;
    tourTooltipEl.style.left = `${left}px`;
  }

  function showTourStep(target, title, desc, opts = {}) {
    teardownTourUI();
    for (let i = 0; i < 4; i++) {
      const d = document.createElement("div");
      d.className = "tour-mat";
      document.body.appendChild(d);
      tourMatEls.push(d);
    }
    tourTooltipEl = document.createElement("div");
    tourTooltipEl.className = "tour-tooltip";
    tourTooltipEl.innerHTML = `
      <div class="tour-tooltip-title">${title}</div>
      <div class="tour-tooltip-desc">${desc}</div>
      ${opts.buttonLabel ? `<button type="button" class="btn btn-primary tour-tooltip-btn">${opts.buttonLabel}</button>` : ""}
    `;
    document.body.appendChild(tourTooltipEl);

    positionTourUI(target);
    tourResizeHandler = () => positionTourUI(target);
    window.addEventListener("resize", tourResizeHandler);

    const advance = () => {
      teardownTourUI();
      opts.onAdvance();
    };

    if (opts.buttonLabel) {
      tourTooltipEl.querySelector(".tour-tooltip-btn").addEventListener("click", advance);
    } else if (opts.eventTarget) {
      opts.eventTarget.addEventListener(opts.eventName || "click", advance, { once: true });
    } else {
      target.addEventListener("click", advance, { once: true });
    }
  }

  function startTour() {
    const formulaTabBtn = document.querySelector('[data-hometab="formula"]');
    const steps = [
      () =>
        showTourStep(healthCardEl, t("tour.health.title"), t("tour.health.desc"), {
          onAdvance: () => setTimeout(steps[1], 500),
        }),
      () =>
        showTourStep(healthCardEl, t("tour.healthBack.title"), t("tour.healthBack.desc"), {
          buttonLabel: t("tour.continue"),
          onAdvance: () => steps[2](),
        }),
      () =>
        showTourStep(formulaTabBtn, t("tour.formulaTab.title"), t("tour.formulaTab.desc"), {
          onAdvance: () => setTimeout(steps[3], 400),
        }),
      () =>
        showTourStep(formulaTriggerBtn, t("tour.formulaTrigger.title"), t("tour.formulaTrigger.desc"), {
          onAdvance: () => setTimeout(steps[4], 400),
        }),
      () =>
        showTourStep(addBtn, t("tour.addBtn.title"), t("tour.addBtn.desc"), {
          onAdvance: () => setTimeout(steps[5], 500),
        }),
      () =>
        showTourStep(typeToggleBtn, t("tour.typeToggle.title"), t("tour.typeToggle.desc"), {
          onAdvance: () => setTimeout(steps[6], 350),
        }),
      () =>
        showTourStep(txForm, t("tour.save.title"), t("tour.save.desc"), {
          eventTarget: document,
          eventName: "tx:saved",
          onAdvance: () => finishOnboarding(),
        }),
    ];
    steps[0]();
  }

  function finishOnboarding() {
    localStorage.setItem(ONBOARDING_KEY, "1");
    onboardingDoneEl.hidden = false;
  }

  renderAll();
  showView("home");
  if (!localStorage.getItem(ONBOARDING_KEY)) {
    onboardingWelcomeEl.hidden = false;
  } else {
    openModal(null);
  }
})();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js");
  });
}
