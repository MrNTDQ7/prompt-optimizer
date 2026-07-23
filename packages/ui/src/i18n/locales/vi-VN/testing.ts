const messages = {
  "history": {
    "title": "Lịch sử",
    "iterationNote": "Ghi chú lặp tối ưu",
    "optimizedPrompt": "Prompt đã tối ưu",
    "searchPlaceholder": "Tìm trong lịch sử...",
    "confirmClear": "Bạn có chắc muốn xóa toàn bộ lịch sử? Hành động này không thể hoàn tác.",
    "confirmDeleteChain": "Bạn có chắc muốn xóa bản ghi lịch sử này? Hành động này không thể hoàn tác.",
    "cleared": "Đã xóa lịch sử",
    "chainDeleted": "Đã xóa bản ghi lịch sử",
    "useThisVersion": "Dùng phiên bản này",
    "noHistory": "Không có bản ghi lịch sử"
  },
  "test": {
    "title": "Kiểm thử",
    "areaTitle": "Khu vực kiểm thử",
    "content": "Nội dung kiểm thử",
    "placeholder": "Nhập nội dung để kiểm thử...",
    "modes": {
      "simple": "Chế độ đơn giản",
      "conversation": "Chế độ hội thoại"
    },
    "simpleMode": {
      "label": "Nội dung kiểm thử",
      "placeholder": "Nhập nội dung để kiểm thử...",
      "help": ""
    },
    "image": {
      "attach": "Đính kèm ảnh kiểm thử",
      "replace": "Thay ảnh kiểm thử",
      "remove": "Gỡ ảnh kiểm thử",
      "previewAlt": "Ảnh kiểm thử đã đính kèm",
      "unsupportedFormat": "Chỉ hỗ trợ ảnh PNG hoặc JPEG",
      "tooLarge": "Ảnh không được vượt quá 5 MiB",
      "readFailed": "Không đọc được ảnh đã chọn",
      "visionHint": "Model đã chọn phải hỗ trợ đầu vào là ảnh",
      "evaluationLabel": "Ảnh kiểm thử"
    },
    "model": "Model kiểm thử",
    "startTest": "Kiểm thử",
    "startCompare": "Kiểm thử",
    "testing": "Đang kiểm thử...",
    "toggleCompare": {
      "enable": "Bật so sánh",
      "disable": "Tắt so sánh"
    },
    "compareMode": "Chế độ so sánh",
    "layout": {
      "columns": "Số cột",
      "workspace": "Không gian tối ưu",
      "previous": "Bản trước",
      "original": "Bản gốc",
      "previousHelp": {
        "dynamic": "",
        "currentBase": "Không gian tối ưu có chỉnh sửa chưa lưu, nên mục này dùng phiên bản đã lưu hiện tại.",
        "earlierSaved": "Không gian tối ưu đã được lưu, nên mục này dùng phiên bản ngay trước đó.",
        "originalFallback": "Chưa có phiên bản nào trước đó, nên mục này dùng prompt gốc.",
        "sameAsWorkspace": "Hiện đang trùng với không gian tối ưu, nên so sánh sẽ được coi như một lần chạy lại."
      },
      "latest": "Mới nhất",
      "runAll": "Chạy tất cả",
      "runThisColumn": "Chạy cột này",
      "stale": "Cấu hình đã đổi"
    },
    "originalResult": "Kết quả A",
    "optimizedResult": "Kết quả B",
    "compareResultA": "Kết quả A",
    "compareResultB": "Kết quả B",
    "testResult": "Kết quả kiểm thử",
    "userPromptTest": "Kiểm thử User Prompt",
    "advanced": {
      "startTest": "Kiểm thử",
      "result": "Kết quả kiểm thử",
      "messageCount": "{count} tin nhắn",
      "missingVariables": "{count} biến bị thiếu"
    },
    "error": {
      "failed": "Kiểm thử thất bại",
      "noModel": "Vui lòng chọn model kiểm thử trước",
      "noTestContent": "Vui lòng nhập nội dung kiểm thử",
      "noWorkspacePrompt": "Không gian tối ưu đang trống. Vui lòng nhập hoặc tạo prompt trong không gian tối ưu trước",
      "noOriginalPrompt": "Vui lòng nhập prompt gốc trước",
      "noOptimizedPrompt": "Vui lòng tạo prompt đã tối ưu trước",
      "missingVariables": "Biến bị thiếu hoặc để trống: {vars}",
      "forbiddenTemplateSyntax": "Không hỗ trợ cú pháp Mustache chưa escape (ví dụ ba dấu ngoặc nhọn hoặc thẻ có dấu &). Vui lòng dùng placeholder biến thông thường.",
      "originalTestFailed": "Kiểm thử prompt gốc thất bại",
      "optimizedTestFailed": "Kiểm thử prompt đã tối ưu thất bại",
      "saveToGlobalFailed": "Lưu biến {name} vào toàn cục thất bại"
    },
    "enableMarkdown": "Bật hiển thị Markdown",
    "disableMarkdown": "Tắt hiển thị Markdown",
    "thinking": "Quá trình suy luận",
    "variables": {
      "detected": "Đã phát hiện biến",
      "manageVariables": "Quản lý biến",
      "viewPreview": "Xem trước",
      "title": "Biến",
      "formTitle": "Biến tạm",
      "variablesCount": "biến",
      "clearAll": "Xóa tất cả",
      "inputPlaceholder": "Nhập giá trị biến",
      "overridesGlobal": "Ghi đè biến toàn cục",
      "noVariables": "Không phát hiện biến nào",
      "previewTitle": "Kết quả xem trước",
      "firstRound": "Vòng 1 (Biến tích hợp sẵn)",
      "secondRound": "Vòng 2 (Biến tùy chỉnh)",
      "builtinVars": "Biến tích hợp sẵn",
      "customVars": "Biến tùy chỉnh",
      "finalPreview": "Xem trước cuối cùng",
      "missingVars": "Biến bị thiếu",
      "saveToGlobal": "Lưu vào biến toàn cục",
      "savedToGlobal": "Đã lưu vào biến toàn cục",
      "emptyValueWarning": "Giá trị trống, không thể lưu",
      "tempCount": "{count} biến tạm",
      "addVariable": "Thêm biến",
      "nameRequired": "Tên biến là bắt buộc",
      "addSuccess": "Đã thêm biến thành công",
      "clearAllConfirm": "Xóa tất cả biến tạm ({count})?",
      "renameSuccess": "Đã đổi tên biến từ {oldName} thành {newName}",
      "renameNotSupported": "Không hỗ trợ đổi tên biến ở màn hình này",
      "deleteSuccess": "Đã xóa biến {name}",
      "clearSuccess": "Đã xóa tất cả biến tạm",
      "delete": "Xóa biến này",
      "fullscreenEdit": "Sửa giá trị ở chế độ toàn màn hình"
    },
    "variableValueGeneration": {
      "generateButton": "Tự động điền giá trị biến",
      "generating": "Đang tạo thông minh...",
      "dialogTitle": "Xem trước giá trị biến đã tạo",
      "variableName": "Tên biến",
      "generatedValue": "Giá trị đã tạo",
      "valuePlaceholder": "Nhập giá trị biến",
      "reason": "Lý do tạo",
      "confidence": "Độ tin cậy",
      "selected": "Đã chọn",
      "batchApply": "Áp dụng hàng loạt ({count})",
      "noVariablesToGenerate": "Không có biến nào cần giá trị",
      "generateFailed": "Tạo giá trị biến thất bại",
      "applySuccess": "Đã áp dụng thành công {count} giá trị biến",
      "noPrompt": "Vui lòng nhập hoặc tạo prompt đã tối ưu trước",
      "noMissingVariables": "Tất cả biến đã được điền",
      "serviceNotReady": "Dịch vụ tạo giá trị biến chưa sẵn sàng",
      "noValues": "Không tạo được giá trị biến nào"
    },
    "invalidVariables": "Dữ liệu biến không hợp lệ",
    "getVariablesFailed": "Lấy danh sách biến thất bại"
  },
  "evaluation": {
    "button": "Đánh giá",
    "evaluate": "Đánh giá",
    "reEvaluate": "Đánh giá lại",
    "compareEvaluate": "So sánh",
    "loading": "Đang đánh giá...",
    "analyzing": "Đang phân tích...",
    "overallScore": "Tổng thể",
    "dimensions": "Điểm theo tiêu chí",
    "issues": "Vấn đề",
    "improvements": "Cải thiện",
    "applyToIterate": "Lặp tối ưu",
    "rewriteFromEvaluation": "Viết lại",
    "rewriteSkipped": "Kết quả đánh giá khuyên giữ nguyên prompt hiện tại, nên đã bỏ qua việc viết lại.",
    "applySuccess": "Đang áp dụng cải thiện...",
    "noResult": "Chưa có kết quả đánh giá. Nhấn nút đánh giá để bắt đầu.",
    "viewDetails": "Xem chi tiết",
    "feedbackAnalyze": "Trọng tâm",
    "feedbackTitle": "Trọng tâm",
    "optional": "Tùy chọn",
    "feedbackPlaceholder": "Mô tả điều cần tập trung. Phần phân tích sẽ ưu tiên ghi chú của bạn.",
    "feedbackHint": "Esc để hủy · Ctrl/⌘+Enter để gửi",
    "feedbackSubmit": "Gửi & phân tích",
    "focus": "Trọng tâm",
    "focusTitle": "Trọng tâm",
    "focusPlaceholder": "Tùy chọn: việc đánh giá nên tập trung vào điều gì? (ví dụ: cấu trúc đầu ra, ràng buộc còn thiếu, độ dài ví dụ)",
    "focusHint": "Để trống để chạy đánh giá thông minh mặc định.",
    "stale": {
      "default": "Kết quả này dựa trên nội dung cũ. Hãy chạy lại đánh giá nếu cần.",
      "promptOnly": "Prompt đã thay đổi. Hãy chạy lại phân tích nếu cần.",
      "promptIterate": "Prompt hoặc yêu cầu lặp tối ưu đã thay đổi. Hãy chạy lại phân tích nếu cần.",
      "result": "Cấu hình kiểm thử hoặc không gian tối ưu đã thay đổi. Hãy chạy lại đánh giá nếu cần.",
      "compare": "Cấu hình kiểm thử hoặc không gian tối ưu đã thay đổi. Hãy chạy lại so sánh nếu cần."
    },
    "title": {
      "default": "Kết quả đánh giá",
      "result": "Đánh giá kết quả",
      "compare": "Đánh giá so sánh",
      "promptOnly": "Phân tích chất lượng prompt",
      "promptIterate": "Phân tích lặp tối ưu"
    },
    "type": {
      "result": "Đánh giá kết quả này",
      "compare": "Đánh giá so sánh"
    },
    "compareConfig": {
      "button": "Cài đặt so sánh",
      "dialogTitle": "Cài đặt so sánh",
      "helper": "Xác nhận vai trò của từng cột kiểm thử. Nếu gợi ý của hệ thống đã hợp lý, bạn có thể xác nhận luôn.",
      "helperSummary": "Chọn mục tiêu tối ưu trước. Phiên bản trước sẽ tự động bám theo không gian tối ưu hiện tại.",
      "summaryTitle": "Kế hoạch so sánh này",
      "currentTargetLabel": "Mục tiêu tối ưu hiện tại",
      "currentTargetMissing": "Chưa chọn",
      "summaryUnassigned": "Chưa gán",
      "summaryUnused": "Không dùng trong vòng này",
      "summaryNeedTarget": "Bắt buộc phải có mục tiêu tối ưu",
      "summaryAssigned": "Sẵn sàng",
      "summaryRequired": "Bắt buộc",
      "summaryOptional": "Tùy chọn",
      "summaryStructured": "So sánh thông minh sẽ đánh giá xem mục tiêu tối ưu có tiến bộ không, có học được gì từ bản tham chiếu không, và kết luận có ổn định không.",
      "summaryGeneric": "Cấu hình này phù hợp hơn với so sánh tiêu chuẩn và sẽ không vào chế độ so sánh thông minh theo từng cặp.",
      "summaryPairs": "Các nhóm so sánh chính: {pairs}",
      "summaryHints": {
        "target": "Chọn cột mà bạn thực sự đang muốn cải thiện trong vòng này.",
        "baseline": "Thường là phiên bản ngay trước không gian tối ưu hiện tại, dùng để kiểm chứng tiến bộ thật sự.",
        "reference": "Thường là cột mạnh hơn hoặc ổn định hơn, đóng vai trò bản tham chiếu để học theo.",
        "replica": "Dùng để kiểm tra xem kết luận có ổn định không. Nếu bản trước trùng với không gian tối ưu, nó có thể xuất hiện ở đây.",
        "referenceBaseline": "Chỉ dùng khi bạn cũng muốn kiểm tra xem thay đổi ở phía bản tham chiếu có đứng vững không."
      },
      "assignedHints": {
        "baselineDynamic": "Được xác định tự động từ không gian tối ưu hiện tại.",
        "replicaFromPrevious": "Nội dung trùng với không gian tối ưu hiện tại, nên được coi là một lần chạy lại."
      },
      "requireTarget": "Phát hiện nhiều lần kiểm thử trên không gian tối ưu. Vui lòng chọn cột nào là mục tiêu tối ưu.",
      "targetRequired": "Vui lòng chọn mục tiêu tối ưu trước.",
      "targetNeededShort": "Chọn mục tiêu tối ưu",
      "reviewNeededShort": "Vui lòng xác nhận lại",
      "autoDetected": "Gợi ý hệ thống",
      "manualAssigned": "Thủ công",
      "selectRolePlaceholder": "Chọn vai trò",
      "restoreSuggested": "Khôi phục gợi ý",
      "suggestedRoleTag": "Gợi ý hệ thống: {role}",
      "unassignedTag": "Chưa rõ",
      "unresolvedHint": "Cột này chưa được gán rõ vai trò, nên sẽ không vào luồng so sánh thông minh chính.",
      "unresolvedFallbackSummary": "Các cột {entries} chưa được gán rõ vai trò, nên lần chạy này sẽ quay về so sánh tiêu chuẩn.",
      "expiredManualTag": "Cần xác nhận lại",
      "expiredManualSummary": "{count} thiết lập thủ công cũ không còn hợp lệ, nên hệ thống đã quay về dùng gợi ý hiện tại.",
      "workspaceChangedTag": "Cần xác nhận lại",
      "workspaceChangedSummary": "{count} thiết lập vai trò của không gian tối ưu cần xem lại vì prompt trong không gian tối ưu đã thay đổi.",
      "keepAuto": "Giữ gợi ý hệ thống",
      "keepAutoWithRole": "Giữ gợi ý hệ thống (hiện tại: {role})",
      "useInferred": "Dùng gợi ý hệ thống",
      "clearManual": "Bỏ các thiết lập thủ công",
      "slotSectionTitle": "Thiết lập từng cột",
      "slotSectionSummary": "Hệ thống đã điền sẵn gợi ý cho từng cột. Chỉ đổi khi thấy chưa đúng.",
      "currentRoleLabel": "Vai trò hiện tại",
      "rolePickerLabel": "Vai trò cho cột này",
      "suggestedRoleLabel": "Gợi ý hệ thống",
      "workspaceChangedInline": "Prompt trong không gian tối ưu phía sau cột này đã thay đổi. Vui lòng xác nhận lại vai trò.",
      "planStructuredSummaryDynamic": "Lần chạy này sẽ xoay quanh mục tiêu tối ưu hiện tại và tập trung xem {focuses}.",
      "planGenericSummary": "Các cột kiểm thử hiện tại chưa tạo được cấu hình so sánh thông minh ổn định, nên lần chạy này sẽ quay về so sánh tiêu chuẩn.",
      "structuredFocusJoiner": ", ",
      "structuredFocusFinalJoiner": ", và ",
      "structuredFocus": {
        "targetBaseline": "có tiến bộ hơn phiên bản trước không",
        "targetReference": "còn khoảng cách so với bản tham chiếu không",
        "referenceBaseline": "thay đổi tương tự có đứng vững ở phía bản tham chiếu không",
        "targetReplica": "kết luận hiện tại có ổn định không"
      },
      "previewModeLabel": "Chế độ so sánh",
      "previewPairsLabel": "Các nhóm so sánh theo cặp",
      "previewReasonsLabel": "Ghi chú hệ thống",
      "previewModeStructured": "So sánh thông minh",
      "previewModeGeneric": "So sánh tiêu chuẩn",
      "genericFallbackSummary": "Cấu hình này sẽ dùng so sánh tiêu chuẩn thay vì so sánh thông minh theo từng cặp.",
      "confirmDisabled": "Hãy xử lý các xung đột trước khi xác nhận",
      "noVersionLabel": "Chưa chọn phiên bản",
      "noModel": "Chưa chọn model",
      "blockingSummary": "Thiết lập vai trò hiện tại đang có xung đột. Vui lòng sửa trước khi xác nhận.",
      "advancedSectionTitle": "Chi tiết nâng cao",
      "advancedSectionSummary": "Phần này giải thích hệ thống sẽ so sánh các cột như thế nào và vì sao.",
      "showAdvancedRoles": "Hiện vai trò nâng cao",
      "hideAdvancedRoles": "Ẩn vai trò nâng cao",
      "showAdvancedDetails": "Xem chi tiết nâng cao",
      "hideAdvancedDetails": "Ẩn chi tiết nâng cao",
      "advancedConflictTitle": "Vấn đề cần xử lý",
      "pairValues": {
        "targetBaseline": "Mục tiêu tối ưu vs Phiên bản trước",
        "targetReference": "Mục tiêu tối ưu vs Bản tham chiếu",
        "referenceBaseline": "Bản tham chiếu vs Phiên bản trước của nó",
        "targetReplica": "Mục tiêu tối ưu vs Lần chạy lại"
      },
      "reasonValues": {
        "duplicateTarget": "Có nhiều mục tiêu tối ưu, nên hệ thống không xác định được cột nào bạn thực sự đang tối ưu.",
        "duplicateBaseline": "Có nhiều phiên bản trước, nên hệ thống không xác định được nên dùng bản nào làm mốc.",
        "duplicateReference": "Có nhiều bản tham chiếu, nên hệ thống không xác định được nên học theo cột nào.",
        "duplicateReferenceBaseline": "Có nhiều phiên bản trước của bản tham chiếu, nên hệ thống không xác định được bản nào thuộc phía tham chiếu.",
        "hasAuxiliarySnapshot": "Một số lần kiểm thử đã chọn không tạo thành cặp so sánh có ý nghĩa, nên lần chạy này quay về so sánh tiêu chuẩn.",
        "missingTarget": "Không có mục tiêu tối ưu khả dụng, nên không thể bắt đầu so sánh thông minh.",
        "missingStructuredCompanion": "Mục tiêu tối ưu đang thiếu một thành phần đi kèm quan trọng (phiên bản trước, bản tham chiếu hoặc lần chạy lại), nên chưa thể chấm điểm theo cặp.",
        "referenceBaselineWithoutReference": "Có phiên bản trước của bản tham chiếu nhưng không có bản tham chiếu tương ứng, nên bằng chứng đó sẽ không tham gia so sánh thông minh."
      },
      "roleValues": {
        "target": "Mục tiêu tối ưu",
        "baseline": "Phiên bản trước",
        "reference": "Bản tham chiếu",
        "referenceBaseline": "Phiên bản trước của bản tham chiếu",
        "replica": "Lần chạy lại",
        "auxiliary": "Kiểm thử khác"
      },
      "suggestionReasons": {
        "default": "Hệ thống suy ra gợi ý này từ các phiên bản, model và quan hệ giữa các prompt hiện tại.",
        "target": {
          "uniqueWorkspace": "Đây là cột không gian tối ưu duy nhất, nên được gợi ý làm mục tiêu tối ưu.",
          "workspace": "Đây là cột không gian tối ưu hiện tại, nên được gợi ý làm mục tiêu tối ưu."
        },
        "baseline": {
          "dynamicPrevious": "Đây là phiên bản trước của không gian tối ưu hiện tại, nên được gợi ý làm mốc so sánh.",
          "sameModelDifferentPrompt": "Dùng cùng model với mục tiêu tối ưu nhưng khác prompt, nên được gợi ý làm phiên bản trước."
        },
        "reference": {
          "samePromptDifferentModel": "Đây là kết quả không gian tối ưu từ một model khác, nên được gợi ý làm bản tham chiếu.",
          "differentModel": "Dùng model khác với mục tiêu tối ưu, nên được gợi ý làm bản tham chiếu."
        },
        "referenceBaseline": {
          "sameModelDifferentPrompt": "Dùng cùng model với bản tham chiếu nhưng khác prompt, nên được gợi ý làm phiên bản trước của bản tham chiếu."
        },
        "replica": {
          "previousMatchesWorkspace": "Nội dung trùng với không gian tối ưu hiện tại, nên được gợi ý làm lần chạy lại.",
          "samePromptAsTarget": "Dùng cùng prompt với mục tiêu tối ưu, nên được gợi ý làm lần chạy lại."
        },
        "auxiliary": {
          "default": "Cột này sẽ không vào so sánh thông minh theo cặp, nên vẫn là một lần kiểm thử khác."
        }
      }
    },
    "compareShared": {
      "status": {
        "needTarget": "Vui lòng chọn mục tiêu tối ưu trước.",
        "needReview": "Cài đặt đã thay đổi. Vui lòng xác nhận lại."
      },
      "roleValues": {
        "target": "Mục tiêu tối ưu",
        "baseline": "Phiên bản trước",
        "reference": "Bản tham chiếu",
        "referenceBaseline": "Phiên bản trước của bản tham chiếu",
        "replica": "Lần chạy lại",
        "auxiliary": "Kiểm thử khác"
      },
      "roleDescriptions": {
        "target": "Đây là cột bạn đang chủ động tối ưu và muốn cải thiện trong vòng này.",
        "baseline": "Đây là phiên bản ngay trước không gian tối ưu hiện tại, dùng để xác định lần viết lại mới nhất có thực sự tiến bộ không.",
        "reference": "Đây là kết quả tham chiếu đáng học theo, thường đến từ một model mạnh hơn hoặc ổn định hơn.",
        "referenceBaseline": "Đây là phiên bản trước ở phía bản tham chiếu. Nó chỉ xuất hiện trong chi tiết nâng cao và giúp đánh giá xem thay đổi tương tự có đứng vững ở phía tham chiếu không.",
        "replica": "Đây là lần chạy lại dùng để kiểm tra kết luận có ổn định không. Nếu bản trước trùng với không gian tối ưu, nó cũng có thể xuất hiện ở đây.",
        "auxiliary": "Lần kiểm thử này vẫn có thể xuất hiện trong so sánh tiêu chuẩn, nhưng sẽ không trở thành cặp so sánh thông minh cốt lõi."
      },
      "roleSource": {
        "manual": "Bạn đã tự xác nhận vai trò này.",
        "auto": "Vai trò này do hệ thống tự gợi ý."
      },
      "unresolved": {
        "label": "Chưa rõ",
        "description": "Cột này chưa được gán rõ vào một vai trò so sánh cốt lõi.",
        "source": "Hệ thống hiện chưa phân loại được nó là mục tiêu tối ưu, phiên bản trước, bản tham chiếu hay lần chạy lại."
      },
      "review": {
        "workspaceChanged": "Prompt trong không gian tối ưu liên quan đã thay đổi, nên cần xem lại vai trò này.",
        "staleManual": "Vai trò thủ công cũ không còn khớp với cấu hình so sánh hiện tại."
      },
      "roleAction": "Nhấn vào thẻ này để cập nhật vai trò so sánh.",
      "assignment": {
        "unassigned": "Chưa gán vai trò nào.",
        "manual": "Bạn đã chọn: {role}",
        "auto": "Gợi ý hệ thống: {role}"
      },
      "modeValues": {
        "structured": "So sánh thông minh",
        "generic": "So sánh tiêu chuẩn"
      },
      "recommendationValues": {
        "continue": "Tiếp tục lặp tối ưu",
        "stop": "Tạm dừng",
        "review": "Cần xem lại"
      }
    },
    "compareHelp": {
      "title": "Hướng dẫn đánh giá so sánh",
      "tooltip": "Đánh giá so sánh là gì?"
    },
    "compareUnavailable": {
      "missingWorkspace": "Đánh giá so sánh cần ít nhất một kết quả kiểm thử từ không gian tối ưu, vì hệ thống phải đưa ra hướng dẫn cho prompt hiện tại trong không gian tối ưu. Hãy chạy cột không gian tối ưu trước, rồi so sánh lại."
    },
    "compareSummary": {
      "decision": {
        "title": "Gợi ý lặp tối ưu"
      },
      "reusableImprovements": "Cải thiện có thể tái dùng",
      "rewriteButton": "Viết lại từ đánh giá này",
      "rewriteSkipHint": "Hướng dẫn hiện tại khuyên giữ nguyên prompt, trừ khi bạn đã xác nhận vẫn còn dư địa cải thiện rõ ràng và tái dùng được.",
      "rewriteMinorHint": "Ở đây nên chỉnh sửa nhỏ thay vì viết lại lớn một lần nữa.",
      "compactSignals": {
        "targetVsBaseline": "Bản trước",
        "targetVsReferenceGap": "Khoảng cách tham chiếu",
        "improvementHeadroom": "Dư địa",
        "overfitRisk": "Quá khớp"
      },
      "reasonTitles": {
        "progress": "Bản trước",
        "reference": "Bản tham chiếu",
        "stability": "Độ ổn định"
      },
      "reasonBodies": {
        "progress": {
          "improved": "Mục tiêu tối ưu đang tốt hơn phiên bản trước, nhưng vẫn nên xác nhận phần tiến bộ nào thực sự tái dùng được.",
          "flat": "Mục tiêu tối ưu gần ngang phiên bản trước, nên bạn cần kết hợp bằng chứng từ bản tham chiếu và độ ổn định trước khi quyết định bước tiếp theo.",
          "regressed": "Mục tiêu tối ưu bị thụt lùi so với phiên bản trước, nên hãy kiểm tra xem điều gì đã kém đi trước tiên."
        },
        "reference": {
          "none": "Mục tiêu tối ưu đã gần bằng bản tham chiếu, nên viết lại thêm có thể không mang lại nhiều lợi ích.",
          "minor": "Vẫn còn vài điểm về cấu trúc mà mục tiêu tối ưu có thể học từ bản tham chiếu.",
          "major": "Vẫn còn khoảng cách rõ ràng so với bản tham chiếu, nên vòng tiếp theo nên tập trung học chiến lược mạnh hơn từ phía tham chiếu."
        },
        "stability": {
          "high": "Mức cải thiện hiện tại có thể chứa rủi ro khớp quá sát mẫu, nên cần lọc bỏ các quy tắc gây quá khớp trước khi viết lại tiếp.",
          "medium": "Vẫn còn một chút rủi ro quá khớp, nên vòng sau nên giữ lại một cách thận trọng hơn chỉ những quy tắc tái dùng được.",
          "low": "Kết quả đã gần hội tụ, nên hãy xác nhận vẫn còn dư địa cải thiện thật sự trước khi thêm quy tắc mới.",
          "default": "Bạn vẫn cần thêm bằng chứng trên cùng đầu vào để xác nhận kết luận này có ổn định không."
        }
      },
      "advanced": {
        "show": "Xem chi tiết nâng cao",
        "hide": "Ẩn chi tiết nâng cao",
        "title": "Chi tiết so sánh",
        "mode": "Chế độ so sánh",
        "roles": "Các cột được so sánh",
        "stopSignals": "Tín hiệu rủi ro và hội tụ",
        "insights": "Phát hiện chính",
        "focusSummaries": "Phát hiện theo trọng tâm",
        "pairHighlights": "Điểm nổi bật theo cặp",
        "evidence": "Bằng chứng gốc nổi bật",
        "learnableSignals": "Tín hiệu học được",
        "overfit": "Rủi ro quá khớp",
        "conflicts": "Cần xem lại thủ công",
        "judgements": "So sánh theo từng cặp"
      }
    },
    "compareMetadata": {
      "title": "Dữ liệu so sánh nâng cao",
      "insights": "Phát hiện chính",
      "decision": {
        "title": "Quyết định so sánh",
        "keyEvidence": "Bằng chứng chính",
        "nextActions": "Hành động tiếp theo",
        "headlines": {
          "continue": "Mục tiêu tối ưu đang đi đúng hướng, nhưng vẫn còn dư địa cải thiện có thể hành động.",
          "stop": "Kết quả hiện tại đã gần hội tụ; viết lại tự động thêm nhiều khả năng không giúp được bao nhiêu.",
          "review": "Kết quả so sánh hiện tại cần được xem lại thủ công trước khi chấp nhận viết lại tiếp.",
          "regressed": "Mục tiêu tối ưu có vẻ đã thụt lùi so với phiên bản trước; đừng chấp nhận bản viết lại này ngay."
        },
        "actions": {
          "inspectRegression": "Kiểm tra xem phiên bản mới đã bỏ đi hoặc làm yếu điều gì trước khi viết lại tiếp.",
          "reviewBeforeRewrite": "Xem lại các bằng chứng mâu thuẫn trước, rồi quyết định viết lại hay giữ phiên bản hiện tại.",
          "reviewPromptValidity": "Kiểm tra xem thay đổi trong prompt có thực sự áp dụng được rộng không, vì bằng chứng phía tham chiếu hiện chưa ủng hộ điều đó.",
          "learnFromReference": "Học theo cấu trúc mạnh hơn ở phía tham chiếu trước khi viết lại lần sau.",
          "filterOverfit": "Lọc bỏ các quy tắc chỉ đúng với mẫu cụ thể và chỉ giữ lại hướng dẫn tái dùng được.",
          "continueTargetedRewrite": "Nếu tiếp tục viết lại, chỉ tập trung vào khoảng cách rõ tín hiệu nhất thay vì sửa dàn trải.",
          "acceptCurrent": "Coi không gian tối ưu hiện tại là đã gần hội tụ và tránh thêm quy tắc mới trừ khi có bằng chứng mới.",
          "verifyStability": "Kiểm tra lại độ ổn định bằng một đầu vào chung khác nếu kết luận hiện tại còn ở ranh giới."
        }
      },
      "focusSummaries": "Phát hiện theo trọng tâm",
      "mode": "Chế độ so sánh",
      "roles": "Các cột được so sánh",
      "judgements": "So sánh theo từng cặp",
      "pairHighlights": "Điểm nổi bật theo cặp",
      "progressSummary": "So với phiên bản trước",
      "referenceGapSummary": "So với bản tham chiếu",
      "promptChangeSummary": "Tính hợp lệ của thay đổi prompt",
      "stabilitySummary": "Độ ổn định",
      "stopSignals": "Tín hiệu rủi ro và hội tụ",
      "evidence": "Bằng chứng",
      "evidenceHighlights": "Bằng chứng nổi bật",
      "learnableSignals": "Tín hiệu học được",
      "overfitWarnings": "Cảnh báo quá khớp",
      "conflictSignals": "Cần xem lại thủ công",
      "targetVsBaseline": "Mục tiêu tối ưu vs Phiên bản trước",
      "targetVsReferenceGap": "Khoảng cách giữa mục tiêu tối ưu và bản tham chiếu",
      "improvementHeadroom": "Dư địa cải thiện",
      "overfitRisk": "Rủi ro quá khớp",
      "stopRecommendation": "Khuyến nghị",
      "stopReasons": "Tín hiệu lập luận",
      "modeValues": {
        "structured": "So sánh thông minh",
        "generic": "So sánh tiêu chuẩn"
      },
      "roleValues": {
        "target": "Mục tiêu tối ưu",
        "baseline": "Phiên bản trước",
        "reference": "Bản tham chiếu",
        "referenceBaseline": "Phiên bản trước của bản tham chiếu",
        "replica": "Lần chạy lại",
        "auxiliary": "Kiểm thử khác"
      },
      "verdictValues": {
        "left-better": "Bên trái tốt hơn",
        "right-better": "Bên phải tốt hơn",
        "mixed": "Lẫn lộn",
        "similar": "Tương đương"
      },
      "confidenceValues": {
        "low": "Độ tin cậy thấp",
        "medium": "Độ tin cậy trung bình",
        "high": "Độ tin cậy cao"
      },
      "conflictSignalValues": {
        "improvementNotSupportedOnReference": "Mục tiêu tối ưu tốt hơn phiên bản trước, nhưng thay đổi prompt tương tự không được ủng hộ ở phía bản tham chiếu.",
        "improvementUnstableAcrossReplicas": "Mục tiêu tối ưu có tiến bộ, nhưng bằng chứng kiểm tra độ ổn định cho thấy mức tiến bộ này có thể không bền.",
        "regressionOutweighsCosmeticGains": "Việc thụt lùi so với phiên bản trước nên được coi nặng hơn những cải thiện mang tính hình thức ở chỗ khác.",
        "sampleOverfitRiskVisible": "Phần tiến bộ tái dùng được và phần chỉ khớp với mẫu đang cùng tồn tại, nên kết luận an toàn hơn là giữ cảnh báo rủi ro quá khớp."
      },
      "signalValues": {
        "targetVsBaseline": {
          "improved": "Có tiến bộ",
          "flat": "Gần như không đổi",
          "regressed": "Thụt lùi"
        },
        "targetVsReferenceGap": {
          "none": "Khoảng cách rất nhỏ",
          "minor": "Còn một chút khoảng cách",
          "major": "Khoảng cách rõ ràng"
        },
        "improvementHeadroom": {
          "none": "Gần như không còn",
          "low": "Thấp",
          "medium": "Trung bình",
          "high": "Cao"
        },
        "overfitRisk": {
          "low": "Thấp",
          "medium": "Trung bình",
          "high": "Cao"
        },
        "stopRecommendation": {
          "continue": "Tiếp tục lặp tối ưu",
          "stop": "Tạm dừng",
          "review": "Cần xem lại"
        }
      }
    },
    "level": {
      "excellent": "Xuất sắc",
      "good": "Tốt",
      "acceptable": "Chấp nhận được",
      "poor": "Kém",
      "veryPoor": "Rất kém"
    },
    "dimension": {
      "goalAchievement": "Mức đạt mục tiêu",
      "outputQuality": "Chất lượng đầu ra",
      "formatCompliance": "Tuân thủ định dạng",
      "relevance": "Mức liên quan"
    },
    "optimizedBetter": "Bản đã tối ưu tốt hơn",
    "originalBetter": "Bản gốc tốt hơn",
    "syntheticInput": {
      "noExplicitText": "Không có đầu vào kiểm thử bổ sung; kết quả được tạo trực tiếp từ prompt hiện tại.",
      "noExplicitVariables": "Không có biến đầu vào bổ sung."
    },
    "error": {
      "title": "Đánh giá thất bại",
      "serviceNotReady": "Dịch vụ đánh giá chưa sẵn sàng, vui lòng thử lại sau",
      "failed": "Đánh giá thất bại: {error}",
      "noOptimizedPrompt": "Không có prompt để tối ưu"
    },
    "designContext": {
      "basic": "Ngữ cảnh thiết kế",
      "advanced": "Ngữ cảnh thiết kế"
    },
    "variableExtraction": {
      "extractButton": "Tự động trích xuất biến",
      "extracting": "Đang trích xuất...",
      "dialogTitle": "Kết quả trích xuất tự động",
      "variableName": "Tên biến",
      "variableValue": "Giá trị biến",
      "reason": "Lý do",
      "category": "Phân loại",
      "selected": "Đã chọn",
      "batchCreate": "Tạo hàng loạt",
      "noVariables": "Không tìm thấy biến nào có thể trích xuất",
      "extractFailed": "Trích xuất tự động thất bại",
      "createSuccess": "Đã tạo thành công {count} biến",
      "summary": "Tóm tắt",
      "workspaceNotReady": "Không truy cập được trạng thái không gian tối ưu",
      "noPromptContent": "Vui lòng nhập nội dung prompt trước",
      "noEvaluationModel": "Vui lòng chọn model đánh giá trước",
      "serviceNotReady": "Dịch vụ trích xuất biến chưa sẵn sàng",
      "invalidVariableNames": "Tên biến không hợp lệ (không được bắt đầu bằng số hoặc # / ^ ! > &; không dấu cách/ngoặc nhọn; tối đa {max} ký tự): {names}"
    },
    "diagnose": {
      "title": "Phân tích chẩn đoán",
      "confidence": "Độ tin cậy",
      "findings": "Phát hiện",
      "patchPlan": "Kế hoạch vá lỗi",
      "noFindings": "Không tìm thấy vấn đề nào",
      "noPatchPlan": "Không có kế hoạch vá lỗi",
      "applyFix": "Áp dụng bản sửa",
      "replaceNow": "Thay ngay",
      "invariantsWarning": "Bị ràng buộc bởi bất biến",
      "changeBudgetWarning": "Bị ràng buộc bởi hạn mức thay đổi",
      "status": {
        "ok": "Chẩn đoán OK",
        "degraded": "Suy giảm một phần",
        "failed": "Chẩn đoán thất bại"
      },
      "severity": {
        "critical": "Nghiêm trọng",
        "major": "Lớn",
        "minor": "Nhỏ",
        "suggestion": "Gợi ý",
        "unknown": "Không xác định"
      },
      "anchorType": {
        "text": "Văn bản",
        "section": "Phần",
        "pattern": "Mẫu khớp"
      },
      "operation": {
        "insert": "Chèn",
        "replace": "Thay thế",
        "delete": "Xóa"
      },
      "anchorPosition": {
        "before": "Trước",
        "after": "Sau",
        "replace": "Thay thế"
      },
      "invariantsRisks": "Rủi ro với bất biến"
    }
  }
} as const;

export default messages;
