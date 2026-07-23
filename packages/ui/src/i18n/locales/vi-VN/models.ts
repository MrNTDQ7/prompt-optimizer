const messages = {
  "modelManager": {
    "title": "Quản lý Model",
    "textModels": "Model văn bản",
    "imageModels": "Model ảnh",
    "functionModels": "Model chức năng",
    "modelList": "Danh sách model",
    "testConnection": "Kiểm tra kết nối",
    "editModel": "Sửa",
    "deleteModel": "Xóa",
    "displayName": "Tên hiển thị",
    "enabled": "Đã bật",
    "enabledStatus": "Trạng thái bật",
    "modelKey": "Model Key",
    "apiUrl": "API URL",
    "apiUrlHint": "Ví dụ: https://api.example.com/v1; phần lớn nhà cung cấp dùng endpoint kết thúc bằng /v1",
    "apiUrlHintAriaLabel": "Hiện trợ giúp về API URL",
    "defaultModel": "Model mặc định",
    "clickToFetchModels": "Nhấn mũi tên để lấy danh sách model",
    "apiKey": "API Key",
    "getApiKey": "Lấy API Key",
    "addModel": "Thêm",
    "addImageModel": "Thêm model ảnh",
    "provider": {
      "section": "Cấu hình nhà cung cấp",
      "label": "Nhà cung cấp",
      "placeholder": "Chọn nhà cung cấp",
      "more": "Thêm nữa",
      "openaiCompatibleCustomLabel": "Tương thích OpenAI (Tùy chỉnh)",
      "openaiHint": "Đây là API chính thức của OpenAI. Nếu bạn muốn dùng base URL tùy chỉnh, dịch vụ tương thích của bên thứ ba, hoặc model chạy cục bộ, hãy chọn \"Tương thích OpenAI (Tùy chỉnh)\" thay vì mục này.",
      "customApiHint": "Dùng cho các endpoint tùy chỉnh tương thích với OpenAI. Bạn có thể cấu hình base URL, dùng tên model riêng, và chọn kiểu request là Chat Completions hoặc Responses.",
      "dashscopeHint": "DashScope hỗ trợ cả API Chat Completions và API Responses theo chuẩn OpenAI. Bạn có thể đổi kiểu request ngay tại đây.",
      "xiaomiMimoHint": "Mặc định dùng endpoint Xiaomi MiMo Token Plan tại Trung Quốc: https://token-plan-cn.xiaomimimo.com/v1. Bạn có thể đổi sang endpoint Singapore https://token-plan-sgp.xiaomimimo.com/v1 hoặc Amsterdam https://token-plan-ams.xiaomimimo.com/v1 hiển thị trong phần Quản lý đăng ký. Cấu hình sẵn qua biến môi trường dùng VITE_MIMO_TOKEN_PLAN_*.",
      "minimaxHint": "Endpoint mặc định là API MiniMax toàn cầu, tương thích với OpenAI. Người dùng ở Trung Quốc đại lục nên đặt API URL là https://api.minimaxi.com/v1. Không dùng endpoint MiniMax định dạng Anthropic ở đây.",
      "chromeBuiltInHint": "Dùng model Gemini Nano chạy cục bộ trong Chrome mà không cần API key từ bên thứ ba. Chrome tự quản lý model và lần đầu sử dụng có thể cần bạn tải xuống. Chrome hiện hỗ trợ chính thức đầu ra tiếng Anh, tiếng Tây Ban Nha và tiếng Nhật; nhà cung cấp này mặc định dùng tiếng Anh để đảm bảo tương thích."
    },
    "chromeBuiltIn": {
      "downloadAction": "Tải / chuẩn bị model cục bộ",
      "recheckAction": "Kiểm tra lại",
      "preparing": "Đang chuẩn bị model cục bộ của Chrome...",
      "ready": "Model cục bộ của Chrome đã sẵn sàng",
      "prepareFailed": "Chuẩn bị model cục bộ của Chrome thất bại: {error}",
      "statusWithError": "{status} ({error})",
      "title": {
        "checking": "Đang kiểm tra AI tích hợp của Chrome",
        "available": "AI tích hợp của Chrome đã sẵn sàng",
        "downloadable": "Model cục bộ của Chrome cần được tải về",
        "downloading": "Chrome đang tải model cục bộ",
        "unavailable": "Môi trường này không được hỗ trợ",
        "api-missing": "Trình duyệt này không cung cấp Chrome Prompt API"
      },
      "status": {
        "checking": "Đang kiểm tra xem trình duyệt có cung cấp Prompt API và model cục bộ đã sẵn sàng chưa.",
        "available": "Sẵn sàng dùng mà không cần API URL hay API key. Phiên làm việc mặc định dùng tiếng Anh vì Chrome hiện hỗ trợ chính thức đầu ra tiếng Anh, tiếng Tây Ban Nha và tiếng Nhật.",
        "downloadable": "Chrome của bạn hỗ trợ tính năng này, nhưng model cục bộ chưa được tải về. Chrome chỉ được yêu cầu tải sau khi bạn nhấn nút bên dưới.",
        "downloading": "Chrome đang tải model. Việc này có thể mất một lúc; xong rồi bạn có thể kiểm thử hoặc lưu model này.",
        "unavailable": "Trình duyệt, thiết bị, hồ sơ người dùng hoặc chính sách quản trị có thể không hỗ trợ tính năng này. Bạn vẫn có thể cấu hình một nhà cung cấp model văn bản khác.",
        "api-missing": "Hãy mở bản web bằng phiên bản Chrome có hỗ trợ Prompt API. Các trình duyệt khác sẽ tự bỏ qua tính năng này mà không gây lỗi."
      }
    },
    "connection": {
      "accountId": "Account ID",
      "requestStyle": "Kiểu request",
      "requestStyleOptions": {
        "chatCompletions": "Chat Completions",
        "responses": "Responses"
      }
    },
    "customHeaders": {
      "label": "Request header tùy chỉnh",
      "namePlaceholder": "Tên header, ví dụ: x-auth-token",
      "valuePlaceholder": "Giá trị header",
      "add": "Thêm header",
      "validationError": "Request header tùy chỉnh không hợp lệ: {details}",
      "validation": {
        "invalid-name": "Tên header không hợp lệ",
        "forbidden-name": "Header này do ứng dụng hoặc trình duyệt quản lý và không thể ghi đè",
        "missing-value": "Giá trị header là bắt buộc",
        "invalid-value": "Giá trị header phải là văn bản, số hoặc boolean"
      }
    },
    "model": {
      "section": "Cấu hình model"
    },
    "advancedParameters": {
      "title": "Tham số nâng cao",
      "noParamsConfigured": "Chưa cấu hình tham số nâng cao nào",
      "customParam": "Tùy chỉnh",
      "advancedTag": "Nâng cao",
      "add": "Thêm tham số",
      "select": "Chọn một tham số",
      "selectTitle": "Thêm tham số nâng cao",
      "custom": "Tham số tùy chỉnh",
      "customKeyPlaceholder": "Nhập tên tham số",
      "customValuePlaceholder": "Nhập giá trị tham số",
      "stopSequencesPlaceholder": "Nhập các chuỗi dừng (cách nhau bằng dấu phẩy)",
      "unitLabel": "Đơn vị",
      "currentProvider": "Nhà cung cấp hiện tại",
      "customProvider": "Tùy chỉnh",
      "availableParams": "tham số khả dụng",
      "noAvailableParams": "không có tham số khả dụng",
      "validation": {
        "unknownParam": "Không tìm thấy định nghĩa của tham số",
        "customKeyRequired": "Tên tham số là bắt buộc",
        "customValueRequired": "Giá trị tham số là bắt buộc",
        "duplicateParam": "Tham số đã tồn tại",
        "dangerousParam": "Tham số này bị coi là nguy hiểm và không được phép dùng",
        "invalidNumber": "Phải là một số hợp lệ",
        "belowMin": "Giá trị không được nhỏ hơn {min}",
        "aboveMax": "Giá trị không được lớn hơn {max}",
        "mustBeInteger": "Phải là số nguyên"
      },
      "formatJson": "JSON",
      "formatString": "Chuỗi",
      "parsedAsObject": "Đã phân tích thành Object ✓",
      "invalidJson": "JSON không hợp lệ, sẽ được gửi dưới dạng chuỗi"
    },
    "modelKeyPlaceholder": "Nhập model key",
    "displayNamePlaceholder": "Nhập tên hiển thị",
    "apiUrlPlaceholder": "https://api.example.com/v1",
    "defaultModelPlaceholder": "Gõ hoặc chọn tên model",
    "apiKeyPlaceholder": "Nhập API key (tùy chọn)",
    "modelKeyRequired": "Model key là bắt buộc",
    "modelKeyReserved": "Model key \"{id}\" trùng với một model tích hợp sẵn. Vui lòng chọn key khác, hoặc chỉnh sửa cấu hình của model tích hợp sẵn đó.",
    "modelKeyAlreadyExists": "Model key \"{id}\" đã tồn tại. Vui lòng chọn key khác.",
    "modelIdGenerateFailed": "Tạo ID model duy nhất thất bại. Vui lòng thử lại.",
    "deleteConfirm": "Bạn có chắc muốn xóa model này? Hành động này không thể hoàn tác.",
    "testing": "Đang kiểm tra kết nối...",
    "testSuccess": "Kết nối tới {provider} thành công!",
    "testFailed": "Kết nối tới {provider} thất bại: {error}",
    "updateSuccess": "Cập nhật thành công",
    "updateFailed": "Cập nhật thất bại: {error}",
    "addSuccess": "Đã thêm model thành công",
    "addFailed": "Thêm model thất bại: {error}",
    "createSuccess": "Đã tạo model thành công",
    "createFailed": "Tạo model thất bại: {error}",
    "enableSuccess": "Đã bật model",
    "enableFailed": "Bật model thất bại: {error}",
    "disableSuccess": "Đã tắt model",
    "disableFailed": "Tắt model thất bại: {error}",
    "cloneModel": "Nhân bản",
    "cloneSuccess": "Đã nhân bản model",
    "cloneFailed": "Nhân bản model thất bại",
    "deleteSuccess": "Đã xóa model",
    "deleteFailed": "Xóa model thất bại: {error}",
    "toggleFailed": "Bật/tắt thất bại: {error}",
    "fetchModelsSuccess": "Đã lấy được 1 model | Đã lấy được {count} model",
    "loadingModels": "Đang tải danh sách model...",
    "noModelsAvailable": "Không có model khả dụng",
    "selectModel": "Chọn một model",
    "fetchModelsFailed": "Lấy danh sách model thất bại: {error}",
    "fetchModelsFallback": "Lấy danh sách model thất bại: {error} (đã quay về dùng {count} model mặc định)",
    "needApiKeyAndBaseUrl": "Vui lòng điền API key và base URL trước",
    "needBaseUrl": "Vui lòng điền API URL trước",
    "corsRestrictedTag": "Bị chặn CORS",
    "corsRestrictedConfirm": "{provider} bị giới hạn CORS trên trình duyệt, việc kiểm tra kết nối có thể thất bại ở phía web.\n\nĐiều này không có nghĩa là API Key của bạn sai, mà do chính sách bảo mật của trình duyệt đã chặn request.\nKhuyên dùng bản Desktop, hoặc đảm bảo nhà cung cấp này cho phép truy cập trực tiếp từ trình duyệt.\n\nTiếp tục kiểm tra?",
    "errors": {
      "crossOriginConnectionFailed": "Kết nối cross-origin thất bại. Vui lòng kiểm tra kết nối mạng",
      "connectionFailed": "Kết nối thất bại. Vui lòng kiểm tra địa chỉ API và kết nối mạng",
      "missingV1Suffix": "Định dạng URL API không đúng. Các API tương thích OpenAI cần có hậu tố \"/v1\"",
      "invalidResponseFormat": "Định dạng phản hồi của API không tương thích. Vui lòng kiểm tra xem dịch vụ API có dùng định dạng tương thích OpenAI không",
      "emptyModelList": "API trả về danh sách model rỗng. Dịch vụ này có thể không có model nào khả dụng",
      "apiError": "Lỗi API: {error}"
    },
    "capabilities": {
      "tools": "Gọi công cụ",
      "reasoning": "Suy luận",
      "vision": "Nhận diện ảnh"
    },
    "disabled": "Đã tắt",
    "testConnectionAriaLabel": "Kiểm tra kết nối tới {name}",
    "editModelAriaLabel": "Sửa model {name}",
    "enableModelAriaLabel": "Bật model {name}",
    "disableModelAriaLabel": "Tắt model {name}",
    "deleteModelAriaLabel": "Xóa model {name}",
    "displayNameAriaLabel": "Tên hiển thị của model",
    "apiUrlAriaLabel": "API URL của model",
    "defaultModelAriaLabel": "Tên model mặc định",
    "apiKeyAriaLabel": "API key",
    "cancelEditAriaLabel": "Hủy chỉnh sửa model",
    "saveEditAriaLabel": "Lưu thay đổi của model",
    "cancelAddAriaLabel": "Hủy thêm model",
    "confirmAddAriaLabel": "Xác nhận thêm model"
  },
  "functionModel": {
    "evaluationModel": "Model đánh giá",
    "evaluationModelHint": "Dùng cho đánh giá thông minh và trích xuất biến, mặc định lấy theo model tối ưu toàn cục",
    "imageRecognitionModel": "Model nhận diện ảnh",
    "imageRecognitionModelHint": "Dùng để trích xuất prompt JSON và giá trị mặc định của biến từ ảnh, và phải được cấu hình riêng",
    "noImageRecognitionModel": "Vui lòng cấu hình model nhận diện ảnh trong mục Model chức năng trước",
    "unsupportedImageRecognitionModel": "Model nhận diện ảnh hiện tại không hỗ trợ trích xuất từ ảnh: {provider}"
  },
  "model": {
    "select": {
      "placeholder": "Vui lòng chọn một model",
      "configure": "Cấu hình model",
      "noModels": "Không có model",
      "noAvailableModels": "Không có model khả dụng"
    },
    "quickSwitch": {
      "title": "Đổi model hiện tại",
      "placeholder": "Chọn một model",
      "modelTagTitle": "Nhấn để đổi model cho cấu hình này",
      "fetchFailed": "Lấy danh sách model trực tuyến thất bại: {error}. Bạn vẫn có thể chọn một model mặc định có sẵn.",
      "updateSuccess": "Đã chuyển sang {model}",
      "updateFailed": "Đổi model thất bại: {error}"
    },
    "manager": {
      "displayName": "ví dụ: Model tùy chỉnh",
      "apiUrl": "API URL",
      "defaultModel": "Tên model mặc định",
      "modelNamePlaceholder": "ví dụ: gpt-3.5-turbo"
    }
  },
  "params": {
    "temperature": {
      "label": "Temperature",
      "description": "Kiểm soát mức ngẫu nhiên: Giá trị thấp (ví dụ 0.2) cho đầu ra tập trung và ổn định hơn, giá trị cao (ví dụ 0.8) cho đầu ra ngẫu nhiên hơn."
    },
    "top_p": {
      "label": "Top P",
      "description": "Lấy mẫu theo nhân xác suất. Chỉ xét các token nằm trong phần xác suất cao nhất. Ví dụ 0.1 nghĩa là chỉ xét nhóm token chiếm 10% xác suất cao nhất."
    },
    "max_tokens": {
      "label": "Max Tokens",
      "description": "Số token tối đa được sinh ra trong phần trả lời."
    },
    "presence_penalty": {
      "label": "Presence Penalty",
      "description": "Số từ -2.0 đến 2.0. Giá trị dương phạt các token đã xuất hiện trong văn bản, làm tăng khả năng model nói về chủ đề mới."
    },
    "frequency_penalty": {
      "label": "Frequency Penalty",
      "description": "Số từ -2.0 đến 2.0. Giá trị dương phạt token dựa trên tần suất đã xuất hiện, làm giảm khả năng model lặp lại nguyên văn."
    },
    "timeout": {
      "label": "Timeout (ms)",
      "description_openai": "Thời gian chờ tối đa của request tính bằng mili giây cho kết nối tới OpenAI."
    },
    "maxOutputTokens": {
      "label": "Max Output Tokens",
      "description": "Số token tối đa model được phép trả về trong một lần phản hồi."
    },
    "top_k": {
      "label": "Top K",
      "description": "Giới hạn lựa chọn token tiếp theo trong K token có khả năng cao nhất. Giúp giảm việc sinh ra token vô nghĩa."
    },
    "candidateCount": {
      "label": "Candidate Count",
      "description": "Số phương án trả lời được sinh ra. Phải nằm trong khoảng từ 1 đến 8."
    },
    "stopSequences": {
      "label": "Stop Sequences",
      "description": "Các chuỗi tùy chỉnh khiến model dừng sinh nội dung khi gặp phải. Nhập nhiều chuỗi, cách nhau bằng dấu phẩy."
    },
    "thinkingBudget": {
      "label": "Thinking Budget",
      "description": "Số token tối đa dành cho quá trình suy luận của model (chỉ Gemini 2.5 trở lên). Phạm vi: 1-8192 token."
    },
    "includeThoughts": {
      "label": "Include Thoughts",
      "description": "Có đưa quá trình suy luận của model vào phản hồi hay không (chỉ Gemini 2.5 trở lên). Khi bật, bạn có thể xem các bước lập luận của model."
    },
    "reasoning_effort": {
      "label": "Reasoning Effort",
      "description": "Kiểm soát mức độ suy luận với các model hỗ trợ chế độ suy nghĩ."
    },
    "deepseek": {
      "thinking_type": {
        "label": "Chế độ suy nghĩ",
        "description": "Kiểm soát chế độ suy nghĩ của DeepSeek. Được gửi dưới dạng thinking.type trong request API.",
        "disabled": "Tắt",
        "enabled": "Bật"
      }
    },
    "tokens": {
      "unit": "token"
    },
    "size": {
      "label": "Kích thước ảnh",
      "description": "Độ phân giải/kích thước của ảnh được tạo, ví dụ 1024x1024"
    },
    "quality": {
      "label": "Chất lượng ảnh",
      "description": "Mức chất lượng của ảnh được tạo: auto (tự động), high (chất lượng cao), medium (trung bình), low (chất lượng thấp)"
    },
    "background": {
      "label": "Độ trong suốt của nền",
      "description": "Đặt nền ảnh: auto (tự động), transparent (trong suốt), opaque (đục)"
    },
    "imageSize": {
      "label": "Kích thước ảnh",
      "description": "Độ phân giải/kích thước của ảnh được tạo, ví dụ 1024x1024"
    },
    "steps": {
      "label": "Số bước",
      "description": "Số bước khuếch tán/suy luận; nhiều bước thường cho chất lượng tốt hơn nhưng mất nhiều thời gian hơn"
    },
    "guidance": {
      "label": "Guidance Scale",
      "description": "Mức độ bám sát prompt; giá trị càng cao thì ảnh càng bám theo prompt"
    },
    "cfg": {
      "label": "CFG Scale",
      "description": "Thang Classifier-Free Guidance để kiểm soát mức bám sát prompt (chỉ dành cho Qwen-Image)"
    },
    "negativePrompt": {
      "label": "Negative Prompt",
      "description": "Nội dung hoặc phong cách bạn không muốn xuất hiện trong ảnh"
    },
    "responseFormat": {
      "label": "Định dạng phản hồi",
      "description": "Định dạng ảnh được trả về (URL hoặc Base64)"
    },
    "outputFormat": {
      "label": "Định dạng đầu ra",
      "description": "Định dạng tệp của ảnh được tạo (như PNG, JPEG hoặc WebP)"
    },
    "watermark": {
      "label": "Hình mờ",
      "description": "Có thêm hình mờ vào ảnh được tạo hay không"
    },
    "sequentialGeneration": {
      "label": "Tạo ảnh tuần tự",
      "description": "Điều khiển chế độ tạo ảnh tuần tự (với các model được hỗ trợ)"
    },
    "tools": {
      "label": "Công cụ",
      "description": "Danh sách công cụ mở rộng dòng 5.0, mỗi dòng một tên công cụ"
    },
    "seed": {
      "label": "Seed",
      "description": "Hạt giống ngẫu nhiên để kiểm soát kết quả tạo; cùng một seed sẽ cho ra cùng một kết quả"
    },
    "enable_thinking": {
      "label": "Bật chế độ suy nghĩ",
      "description": "Bật chế độ suy nghĩ cho các tác vụ suy luận phức tạp (chỉ với model được hỗ trợ)"
    },
    "thinking_budget": {
      "label": "Thinking Budget",
      "description": "Số token tối đa cho quá trình suy nghĩ, giới hạn độ dài suy luận"
    },
    "enable_search": {
      "label": "Bật tìm kiếm",
      "description": "Bật tìm kiếm trên internet để lấy thông tin thời gian thực (chỉ với model được hỗ trợ)"
    },
    "max_completion_tokens": {
      "label": "Max Completion Tokens",
      "description": "Số token tối đa được sinh ra trong phần trả lời (khuyên dùng, thay cho max_tokens). Phạm vi: 1-1.000.000."
    },
    "logprobs": {
      "label": "Log Probabilities",
      "description": "Có trả về log xác suất của các token đầu ra trong phản hồi hay không. Khi bật, bạn có thể thấy mức độ chắc chắn của model với từng token."
    },
    "top_logprobs": {
      "label": "Số lượng Top Log Probabilities",
      "description": "Số token có khả năng cao nhất được trả về kèm log xác suất tại mỗi vị trí. Phạm vi: 0-20. Cần bật logprobs trước."
    },
    "n": {
      "label": "Số phương án trả lời",
      "description": "Số phương án trả lời được sinh ra cho mỗi đầu vào. Phạm vi: 1-128. Lưu ý: tạo nhiều kết quả sẽ tốn nhiều token hơn."
    }
  }
} as const;

export default messages;
