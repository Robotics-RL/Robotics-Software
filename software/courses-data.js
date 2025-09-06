const coursesData = {
    // =================================================
    //                السنة الأولى
    // =================================================
    "math101": {
        title: "تفاضل وتكامل (1)",
        year: 1,
        code: "ع أ 101ر",
        creditHours: "3 ساعات",
        lineNumber: "821011",
        faculty: "كلية العلوم والآداب",
        department: "قسم الرياضيات",
        teachingMethod: "وجاهي",
        description: "يغطي هذا المساق المفاهيم الأساسية في التفاضل والتكامل، بما في ذلك النهايات، الاشتقاق، وتطبيقاته.",
        universityLink: "https://services.just.edu.jo/CourseQA/WS/CourseInfo.aspx?LineNo=821011",
        resources: {
            videos: [
                { title: "شرح د.عبداللطيف (رحِمه الله )", url: "https://www.youtube.com/embed/Une63tT4DoU?list=PLp1pnSnaaByKUhQGc2VxRQumYSUx2NTRD" },
                { title: "شرح الدكتورة رؤوفة الصعيدي", url: "https://www.youtube.com/embed/bz1e5YIjQQc" },
                { title: "شرح المهندس ليث العمري", url: "https://www.youtube.com/embed/W2lGgGh8LAs?list=PLEt2IkxYfcu6DGhsrfLww21oBoRkDHqht" }
            ],
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1u6XTO3bvC3WiCEoYVnm5v_-RdjXXblia?usp=sharing" }],
            whatsappLink: "https://chat.whatsapp.com/IjkEn9ZvH1KHyGZX7Se3XR"
        }
    },
    "ent119": {
        title: "الريادة والإبتكار",
        year: 1,
        code: "ع أ 119",
        creditHours: "2 ساعات",
        lineNumber: "821192",
        faculty: "كلية العلوم و الآداب",
        department: "قسم العلوم الأساسية الإنسانية و العلمية ",
        teachingMethod: "إلكتروني كامل عن بعد",
        description: "مساق يهدف إلى تعريف الطالب بمفاهيم ريادة الأعمال وكيفية تحويل الأفكار إلى مشاريع ناجحة.",
        universityLink: "https://services.just.edu.jo/CourseQA/WS/CourseInfo.aspx?LineNo=821192",
        resources: {
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1JBptRMBsZyD6FuXaLzZSUGcgaAqV3zE0?usp=sharing" }],
            whatsappLink: "https://chat.whatsapp.com/CViYi3SQHbvJzc6c46xAST"
        }
    },
    "lg101": {
        title: "اللغة الإنجليزية ومهارات التواصل",
        year: 1,
        code: "ل غ 101",
        creditHours: "3 ساعات",
        lineNumber: "2511010",
        faculty: "مركز اللغات",
        department: "مركز اللغات ",
        teachingMethod: "مدمج",
        description: "مساق يهدف إلى تطوير مهارات الطالب في اللغة الإنجليزية من خلال التركيز على القراءة الأكاديمية، الكتابة، والاستماع.",
        universityLink: "https://services.just.edu.jo/CourseQA/WS/CourseInfo.aspx?LineNo=2511010",
        resources: {
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/15xzRGjQ2CR-fZ2Q7jPY2_SlOrN3qs6O0?usp=sharing" }],
            whatsappLink: "https://chat.whatsapp.com/Cf2DnTqsDd8CJVMOl6rVj6"
        }
    },
    "cs101": {
        title: "مقدمة في البرمجة",
        year: 1,
        code: "ع أ 101ع ح",
        creditHours: "2 ساعات",
        lineNumber: "821013",
        faculty: "كلية تكنولوجيا الحاسوب والمعلومات",
        department: "قسم علوم الحاسوب",
        teachingMethod: "وجاهي",
        description: "مدخل إلى عالم البرمجة، حيث يتعلم الطالب أساسيات كتابة الأكواد وحل المشاكل المنطقية باستخدام لغة برمجة معتمدة.",
        universityLink: "https://services.just.edu.jo/CourseQA/WS/CourseInfo.aspx?LineNo=821013",
        resources: {
            videos: [
                { title: "شرح عادل نسيم", url: "https://www.youtube.com/embed/z1FdInL8sjg?list=PLCInYL3l2AajFAiw4s1U4QbGszcQ-rAb3" },
                { title: "شرح ضياء المعالي", url: "https://www.youtube.com/embed/vAsPmXKYcL8?list=PL9vv0h_aJCACfsbvyNAel7OdenlGnXbsc" },
                { title: "شرح الدكتور إياد الشريف", url: "https://www.youtube.com/embed/yx5amYkb9_w?list=PLy42_pl2XRL6TRF27PUYO9B6nLTs6JWLk" },
                { title: "شرح الدكتور عبداللطيف ربابعة ", url: "https://www.youtube.com/embed/V8Edmc639YM?list=PLy42_pl2XRL5BOwUSEruDaUEB20IKufjp" }
            ],
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1EeN-a-59-NsMD-tAyE22TTt-NLZ_ED3Z?usp=sharing" }],
            whatsappLink: "https://chat.whatsapp.com/EvG43TqlFgzJZofq7ne85X"
        }
    },
    "it103": {
        title: "مقدمة إلى تكنولوجيا المعلومات",
        year: 1,
        code: "ع أ 103هـ ب",
        creditHours: "3 ساعات",
        lineNumber: "821037",
        faculty: "كلية تكنولوجيا الحاسوب والمعلومات",
        department: "قسم هندسة البرمجيات",
        teachingMethod: "إلكتروني كامل عن بعد",
        description: "مقدمة شاملة لعالم تكنولوجيا المعلومات، ويشمل مكونات الحاسوب، والبرمجيات، والشبكات، وأمن المعلومات.",
        universityLink: "https://services.just.edu.jo/CourseQA/WS/CourseInfo.aspx?LineNo=821037",
        resources: {
            videos: [
                { title: "شرح الدكتور حمزة الكوفحي", url: "https://www.youtube.com/embed/DmsSTp9qXOE?list=PLcy9pLDPXtFO_VhGYO9v2N8BQrtKyLkDj" },
                { title: "شرح الدكتور محمد ردايدة", url: "https://www.youtube.com/embed/dw1rpnT4XJ0" }
            ],
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1YLvaIhMPgvH9qtucRaSnNcjkuj_2VBdQ?usp=sharing" }],
            whatsappLink: "https://chat.whatsapp.com/CJI8DEL3aVaFISGlhbMuVn"
        }
    },
    "ar102": {
        title: "اللغة العربية ومهارات التواصل",
        year: 1,
        code: "ع 102",
        creditHours: "3 ساعات",
        lineNumber: "801022",
        faculty: " كلية العلوم والآداب",
        department: " قسم العربي",
        teachingMethod: "مدمج",
        description: "يهدف المساق إلى تعزيز مهارات الطالب في اللغة العربية وتطبيقاتها.",
        universityLink: "https://services.just.edu.jo/CourseQA/WS/CourseInfo.aspx?LineNo=801022",
        resources: {
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1e-hDY4JqQ9iukoSxJd_lDAVxbNkQTazC?usp=sharing" }],
            whatsappLink: "https://chat.whatsapp.com/HaauqIhmjx7I1KqZPrLjr2"
        }
    },
    "lap101": {
        title: "مختبر البرمجة",
        year: 1,
        code: "ع أ 106ع ح",
        creditHours: "1 ساعة",
        lineNumber: "821061",
        faculty: "كلية تكنولوجيا الحاسوب والمعلومات",
        department: "قسم علوم الحاسوب",
        teachingMethod: "وجاهي",
        description: "هذا المساق هو الجانب العملي والتطبيقي لمادة \"مقدمة في البرمجة\". يركز على تعزيز المفاهيم النظرية من خلال حل مجموعة متنوعة من التمارين والمشاريع البرمجية الصغيرة.",
        universityLink: "https://services.just.edu.jo/CourseQA/WS/CourseInfo.aspx?LineNo=821061",
        resources: {
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1jgRSU3C0NZsByzm0yk184haxm_MXiHf0?usp=sharing" }]
        }
    },
    "oop112": {
        title: "مقدمة في البرمجة الكينونية",
        year: 1,
        code: "ع أ 112هـ ب",
        creditHours: "2 ساعات",
        lineNumber: "821125",
        faculty: "كلية تكنولوجيا الحاسوب والمعلومات",
        department: "قسم هندسة البرمجيات",
        teachingMethod: "وجاهي",
        description: "يتعلم الطالب مفاهيم البرمجة كائنية التوجه (OOP) مثل الأصناف، الكائنات، الوراثة، وتعدد الأشكال.",
        universityLink: "https://services.just.edu.jo/CourseQA/WS/CourseInfo.aspx?LineNo=821123",
        resources: {
            videos: [
                { title: "شرح الدكتورة غدير عبيدات", url: "https://www.youtube.com/embed/e5xlsGeWvV8" },
                { title: "شرح عادل نسيم", url: "https://www.youtube.com/embed/YMXUxKDziaA?list=PLCInYL3l2Aaiq1oLvi9TlWtArJyAuCVow" }
            ],
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1nDlz6oMm6q2s71f0ZIUCeQjbNP460ib9?usp=sharing" }],
            whatsappLink: "https://chat.whatsapp.com/HxiKZJggVNDDuoimvHhffU"
        }
    },
    "lap112": {
        title: "مختبر البرمجة الكينونية",
        year: 1,
        code: "ع أ 113هـ ب",
        creditHours: "1 ساعة",
        lineNumber: "821131",
        faculty: "كلية تكنولوجيا الحاسوب والمعلومات",
        department: "قسم هندسة البرمجيات",
        teachingMethod: "وجاهي",
        description: "هذا المختبر هو الجزء العملي المصاحب لمساق البرمجة الكينونية، ويركز على التطبيق الفعلي لمفاهيم البرمجة كائنية التوجه (OOP) من خلال سلسلة من التمارين والمشاريع.",
        universityLink: "https://services.just.edu.jo/CourseQA/WS/CourseInfo.aspx?LineNo=821131",
        resources: {
            videos: [{ title: "شرح الدكتورة غدير عبيدات", url: "https://www.youtube.com/embed/E0b9eCIJPIg?list=PLy42_pl2XRL76hOw8mR2zPL_AlaZ3hrOK" },
                { title: "شرح الطالب جميل مهنا", url: "https://www.youtube.com/embed/Rf0emIXayjs?list=PLcy9pLDPXtFMPtqHFJmo9luCk5nZoayWt" },
            ],
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1loEGjD-DiGXXKepVSSmga4UVrXpdS8US?usp=sharing" }]
        }
    },
    "mil100": {
        title: "العلوم العسكرية",
        year: 1,
        code: "ع ع 100",
        creditHours: "3 ساعات",
        lineNumber: "841000",
        faculty: "شعبة العلوم العسكرية",
        department: "العلوم العسكرية",
        teachingMethod: "مدمج",
        description: "متطلب إجباري يهدف إلى تعزيز الروح الوطنية والانتماء لدى الطلبة.",
        universityLink: "https://services.just.edu.jo/CourseQA/WS/CourseInfo.aspx?LineNo=841000",
        resources: {
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/18zMH8JKPCuGZIL2AKveFvCYTbPBWH5lj?usp=sharing" }],
            whatsappLink: "https://chat.whatsapp.com/GcMx8JBntVqKzEhK2fXNIR"
        }
    },
    "math241": {
        title: "الرياضيات المتقطعة",
        year: 1,
        code: "ع أ 241ر",
        creditHours: "3 ساعات",
        lineNumber: "822411",
        faculty: "كلية العلوم والآداب",
        department: "قسم الرياضيات",
        teachingMethod: "وجاهي",
        description: "يغطي المساق مواضيع أساسية في الرياضيات اللازمة لعلوم الحاسوب، مثل المنطق، المجموعات، والعلاقات.",
        universityLink: "https://services.just.edu.jo/CourseQA/WS/CourseInfo.aspx?LineNo=822411",
        resources: {
            videos: [
                { title: "شرح لُبنى جديتاوي", url: "https://www.youtube.com/embed/G4pC8DFFloE" },
                { title: "شرح الآء قطيشات", url: "https://www.youtube.com/embed/8wmeNVboN2U" },
                { title: "شرح الدكتورة هيام", url: "https://www.youtube.com/embed/Un1H9uDBYvE?list=PLy42_pl2XRL4B3400wurjykoSw4hpcT6B" },
                { title: "شرح صهيب حكيم", url: "https://www.youtube.com/embed/6G4HGXmUAJ0?list=PLd2pEan0ZG_Y59xY-E1xo9YB27zmYwmIx" }
            ],
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1qbKTrwBHfi3w0oX_zs_gjhQqGVF4xhL1?usp=sharing" }],
            whatsappLink: "https://chat.whatsapp.com/CTMg6Z3zqlyD6imJF4DPrY"
        }
    },
    "national110": {
        title: "التربية الوطنية والمسؤولية المجتمعية",
        year: 1,
        code: "ع أ 110",
        creditHours: "3 ساعات",
        lineNumber: "821104",
        faculty: "كلية العلوم و الآداب",
        department: "قسم العلوم الأساسية الإنسانية و العلمية ",
        teachingMethod: "إلكتروني كامل عن بعد",
        description: "متطلب إجباري يركز على تاريخ ومؤسسات الدولة الأردنية وتعزيز المواطنة.",
        universityLink: "https://services.just.edu.jo/CourseQA/WS/CourseInfo.aspx?LineNo=821104",
        resources: {
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1EeuvwcDJ4TFlLPmMfzwqxjq_dq7zaEdo?usp=sharing" }],
            whatsappLink: "https://chat.whatsapp.com/GZFXCwoMCWKIfXYpvLrRIL"
        }
    },
    "skills103": {
        title: "المهارات الحياتية",
        year: 1,
        code: "ل غ 103",
        creditHours: "2 ساعات",
        lineNumber: "2511030",
        faculty: "مركز اللغات ",
        department: "مركز اللغات",
        teachingMethod: "إلكتروني كامل عن بعد",
        description: "متطلب جامعة يهدف إلى تزويد الطلبة بالمهارات اللازمة للنجاح في الحياة الشخصية والمهنية.",
        universityLink: "https://services.just.edu.jo/CourseQA/WS/CourseInfo.aspx?LineNo=2511030",
        resources: {
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/16imYeKMbP0iJSvfRaenLu_BFREOg4FHN?usp=sharing" }],
            whatsappLink: "https://chat.whatsapp.com/KvOQOxBne0hAB5c8WmuVuB"
        }
    },
    "math102": {
        title: "تفاضل وتكامل (2)",
        year: 1,
        code: "ع أ 102ر",
        creditHours: "3 ساعات",
        lineNumber: "821023",
        faculty: "كلية العلوم والآداب",
        department: "قسم الرياضيات",
        teachingMethod: "وجاهي",
        description: "استكمال لمساق تفاضل وتكامل (1)، مع التركيز على التكامل، المتسلسلات، والتطبيقات المتقدمة.",
        universityLink: "https://services.just.edu.jo/CourseQA/WS/CourseInfo.aspx?LineNo=821023",
        resources: {
            videos: [
                { title: "شرح د. عبداللطيف (رحِمه الله)", url: "https://www.youtube.com/embed/HoIGhd4A5TQ?list=PLp1pnSnaaByLnY9nj1H-IkFUYdL-9YaQE" },
                { title: "شرح الدكتورة رؤوفة الصعيدي", url: "https://www.youtube.com/embed/lkQXH4OtPfc" },
                { title: "شرح المهندس ليث العمري", url: "https://www.youtube.com/embed/4gqhxMuAESs?list=PLEt2IkxYfcu5KFiE-8kMfGf9AqC1LxT6M" }
            ],
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1TRKsINhYe6M-uE11QE6VpuycKYIL9h77?usp=sharing" }],
            whatsappLink: "https://chat.whatsapp.com/G8kk6gmrN56BNCpkeO3aTv"
        }
    },

    // =================================================
    //                السنة الثانية
    // =================================================
    "cpe236": {
        title: "تصميم المنطق الرقمي",
        year: 2,
        code: "هك 236",
        creditHours: "3 ساعات",
        lineNumber: "1712360",
        faculty: "كلية تكنولوجيا الحاسوب والمعلومات",
        department: "قسم هندسة الحاسوب",
        teachingMethod: "وجاهي",
        description: "يركز على تصميم وتحليل الدوائر الرقمية، البوابات المنطقية، والأنظمة التوافقية والتتابعية.",
        universityLink: "https://services.just.edu.jo/CourseQA/WS/CourseInfo.aspx?LineNo=1712360",
        resources: {
            videos: [{ title: "شرح الدكتورة مي", url: "https://www.youtube.com/embed/PSs-zNjK83A?list=PLHInDvfjUFpoadKbUS09iiO4HxAjgwH-F" },
                         { title: " شرح الدكتور محمد حموري", url: "https://www.youtube.com/embed/Pr5fIqzvg0M?list=PLy42_pl2XRL5zomcjQRuiweCbq_TLg73n" },
                         ],
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1VNvkXQE02scof7E2az97xml6nNQ-Jyck?usp=sharing" }],
            whatsappLink: "https://chat.whatsapp.com/EW5r3SVkFmG8yTsuyBaQ8R"
        }
    },
    "db220": {
        title: "نمذجة البيانات",
        year: 2,
        code: "هـ ب 220",
        creditHours: "3 ساعات",
        lineNumber: "822214",
        faculty: "كلية تكنولوجيا الحاسوب والمعلومات",
        department: "قسم هندسة البرمجيات",
        teachingMethod: "وجاهي",
        description: "يتعلم الطالب كيفية تصميم وإدارة قواعد البيانات باستخدام لغة الاستعلامات البنيوية SQL.",
        universityLink: "https://services.just.edu.jo/CourseQA/WS/CourseInfo.aspx?LineNo=822214",
        resources: {
            videos: [{ title: "شرح الدكتورة فاطمة ", url: "https://www.youtube.com/embed/IzvWFXfUx8M" },
                { title: "شرح الدكتور محمد زيناتي", url: "https://www.youtube.com/embed/FAef59jWin0" },
            ],
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1attzo-OhHrWuvitxICjwYpb6SddFQ5IU?usp=sharing" }],
            whatsappLink: "https://chat.whatsapp.com/BG3ZnBR2ii19KR1LTxM94j?mode=ac_c"
        }
    },
    "db221": {
        title: "أساسيات قواعد البيانات",
        year: 2,
        code: "ع أ 221ن م",
        creditHours: "3 ساعات",
        lineNumber: "822214", 
        faculty: "كلية تكنولوجيا الحاسوب والمعلومات",
        department: "قسم نظم المعلومات الحاسوبية",
        teachingMethod: "وجاهي",
        description: "يتعلم الطالب كيفية تصميم وإدارة قواعد البيانات باستخدام لغة الاستعلامات البنيوية SQL.",
        universityLink: "https://services.just.edu.jo/CourseQA/WS/CourseInfo.aspx?LineNo=822214",
        resources: {


             files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/18SsTQ3WB_243m2WN2p1kt_28N9fKlqFH?usp=sharing" }]

        }
    },
    "java210": {
        title: "البرمجة بلغة جافا",
        year: 2,
        code: "هـ ب 210",
        creditHours: "3 ساعات",
        lineNumber: "1762100",
        faculty: "كلية تكنولوجيا الحاسوب والمعلومات",
        department: "قسم هندسة البرمجيات",
        teachingMethod: "وجاهي",
        description: "مساق متقدم في برمجة جافا، يتناول المفاهيم المتقدمة مثل الخيوط، الشبكات، وقواعد البيانات.",
        universityLink: "https://services.just.edu.jo/CourseQA/WS/CourseInfo.aspx?LineNo=1762100",
        resources: {
			videos: [{ title: " شرح الدكتور رائد شطناوي ", url: "https://www.youtube.com/embed/Boti1bQieg4?list=PLe4bhuZ4w9d3j6aGhLiZmHRw64uVQQpit" }, 
               { title: "شرح الدكتور زكريا الشرع", url: "https://www.youtube.com/embed/nHGpgP9dSFY" },
               { title: "شرح عادل نسيم ( OOP )", url: "https://www.youtube.com/embed/FaaM6uVbuJM" },
               { title: "شرح محمد السعد", url: "https://www.youtube.com/embed/WnMPk6_8qDo?list=PLfay0LLBd0wg3sCvbgQ8TuGMA_H7Vg9Rf" },
              ],
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1XUVCcHHK0LovmJVlC66UMyuOGIDEeEDp?usp=sharing" }]
		}
    },
    "ds211": {
        title: "تراكيب البيانات",
        year: 2,
        code: "ع أ 211ع ح",
        creditHours: "3 ساعات",
        lineNumber: "822112",
        faculty: "كلية تكنولوجيا الحاسوب والمعلومات",
        department: "قسم علوم الحاسوب",
        teachingMethod: "وجاهي",
        description: "يتناول المساق كيفية تنظيم وتخزين البيانات بكفاءة، مثل القوائم، الأشجار، والمكدسات.",
        universityLink: "https://services.just.edu.jo/CourseQA/WS/CourseInfo.aspx?LineNo=822112",
        resources: {
            videos: [{ title: "شرح د.غدير عبيدات", url: "https://www.youtube.com/embed/zL3BAmMMTNo?list=PLcy9pLDPXtFPIJQXKyLpHiuxC-hj47Mv5" },
                 { title: "شرح عادل نسيم", url: "https://www.youtube.com/embed/owCqVRbZlbg?list=PLCInYL3l2AajqOUW_2SwjWeMwf4vL4RSp" },
                { title: "شرح د.رشا عبيدات", url: "https://www.youtube.com/embed/R9R0RFC4jCk?list=PLy42_pl2XRL7IeunQnGETIkEP1-4OBp2R" },
                { title: "شرح د.وفاء قرقز", url: "https://www.youtube.com/embed/LJWDuf5cP9s?list=PLy42_pl2XRL60dcqYyotvYhnn8CB0nAc2" },
                { title: "شرح د.عمر الموسى", url: "https://www.youtube.com/embed/QiQsHx7C2BI?list=PLG9jOLDJEdrPPGqy0bSNBtKDcEGJPT1m5" },
                { title: "شرح د.رضوان", url: "https://www.youtube.com/embed/YCSSyNrsCYc" },
            ],
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1W8GoAQHNgvzZ4v4BccclUkqroyV8m_kn?usp=sharing" }],
            whatsappLink: "https://chat.whatsapp.com/DoVIttYF0Me2kSEX5KeGBj"
        }
    },
    "web201": {
        title: "مقدمة في صفحات الويب",
        year: 2,
        code: "ن م 201",
        creditHours: "2 ساعات",
        lineNumber: "1742010",
        faculty: "كلية تكنولوجيا الحاسوب والمعلومات",
        department: "قسم نظم المعلومات الحاسوبية",
        teachingMethod: "وجاهي",
        description: "مدخل إلى تصميم وتطوير صفحات الويب باستخدام HTML, CSS, وJavaScript.",
        universityLink: "https://services.just.edu.jo/CourseQA/WS/CourseInfo.aspx?LineNo=1742010",
        resources: {
			videos: [{ title: "شرح دكتور مصطفى ردايده", url: "https://www.youtube.com/embed/5f3vPEomaaM?list=PLy42_pl2XRL4Xqx1Yf0c0Tlb96B9hAoPX" },
                { title: "شرح للدكتور رضوان", url: "https://www.youtube.com/embed/IupM8XfvYp8" },
                 { title: "شرح دكتور هشام عبنده", url: "https://www.youtube.com/embed/Cpea84TBEk8?list=PLy42_pl2XRL4Dd7WhHWX6B3HYInKppZfP" }],
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1bhXTgIZIOcPkNWIyUV9v5LhYwfVdiF-0?usp=sharing" }]
		}
    },
    "comm203": {
        title: "مهارات الاتصال وأخلاقيات المهنة",
        year: 2,
        code: "ن م 203",
        creditHours: "3 ساعات",
        lineNumber: "1742031",
        faculty: "كلية تكنولوجيا الحاسوب والمعلومات",
        department: "قسم نظم المعلومات الحاسوبية",
        teachingMethod: "مدمج",
        description: "يركز على تطوير مهارات التواصل المهني وفهم أخلاقيات العمل في مجال تكنولوجيا المعلومات.",
        universityLink: "https://services.just.edu.jo/CourseQA/WS/CourseInfo.aspx?LineNo=1742031",
        resources: {
			videos: [{ title: "شرح الدكتورة روان الخصاونة", url: "https://www.youtube.com/embed/QddTZ5dhio4?list=PLJPpPM-Ltxf8XMMLMNuf5kM3PNLNiwaUh" },
                 { title: "شرح الدكتور منذر الزعبي ", url: "https://www.youtube.com/embed/_jItG_mnn_8?list=PLJPpPM-Ltxf9-x5QGMuk7MLyTQWE1fyq-" }],
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1bhXTgIZIOcPkNWIyUV9v5LhYwfVdiF-0?usp=sharing" }]
		}
    },
    "algo284": {
        title: "تحليل وتصميم الخوارزميات",
        year: 2,
        code: "ع ح 284",
        creditHours: "3 ساعات",
        lineNumber: "1732841",
        faculty: "كلية تكنولوجيا الحاسوب والمعلومات",
        department: "قسم علوم الحاسوب",
        teachingMethod: "وجاهي",
        description: "يركز على تصميم وتحليل كفاءة الخوارزميات المختلفة، وتقنيات مثل فرق تسد والبرمجة الديناميكية.",
        universityLink: "https://services.just.edu.jo/CourseQA/WS/CourseInfo.aspx?LineNo=1732841",
        resources: {
            videos: [{ title: "شرح الدكتورة قانتة ابي بكر", url: "https://www.youtube.com/embed/b8FHFTw4ymE?list=PLvuSzOj7RR-tqwyO1deeFQDBSNxhqhYjq" },
                 { title: "شرح الطالب جميل مهنا (Lab)", url: "https://www.youtube.com/embed/4kWxtWrVu8M" }],
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1BXoTZefvF8t-HKWfLFcnW_ykWUxzqArO?usp=sharing" }]
        }
    },
    "se230": {
        title: "أساسيات هندسة البرمجيات",
        year: 2,
        code: "هـ ب 230",
        creditHours: "3 ساعات",
        lineNumber: "1762300",
        faculty: "كلية تكنولوجيا الحاسوب والمعلومات",
        department: "قسم هندسة البرمجيات",
        teachingMethod: "وجاهي",
        description: "مقدمة لمبادئ هندسة البرمجيات، دورة حياة البرمجيات، ومنهجيات التطوير.",
        universityLink: "https://services.just.edu.jo/CourseQA/WS/CourseInfo.aspx?LineNo=1762300",
        resources: {
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1CDalUbQ0N7l_tSV9bs4v-Y1scAe3SR28?usp=sharing" }]
		}
    },
    "stat233": {
        title: "إحصاء واحتمالات لطلبة الحاسوب",
        year: 2,
        code: " 233ر",
        creditHours: "3 ساعات",
        lineNumber: "822331",
        faculty: "كلية العلوم والآداب",
        department: "قسم الرياضيات",
        teachingMethod: "مدمج",
        description: "يغطي مبادئ الإحصاء والاحتمالات وتطبيقاتها في مجال هندسة الحاسوب والبرمجيات.",
        universityLink: "https://services.just.edu.jo/CourseQA/WS/CourseInfo.aspx?LineNo=822331",
        resources: {
            videos: [{ title: "شرح الدكتورة رؤوفة", url: "https://www.youtube.com/embed/2ClkB9fBz8w?list=PLvuSzOj7RR-td0_mvIXV9B8D7wnTTMWpU" },
                { title: "شرح الطالب محمد عبيدات", url: "https://www.youtube.com/embed/mc6xmxfWxbc?list=PLXvlmrz7tf5vtWxOVbJTSjl0vT5wP-a1Z" },
                { title: "شرح الدكتورة حنان", url: "https://www.youtube.com/embed/qCeU-pSDeEY?list=PLVS43mVhT_-QwjsXX9pGLQ_aQrFLwi7Mq" },
            ],
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1zZLh2zQxCzX_JFKXNcm6ZgKTH-GjBCTI?usp=sharing" }],
            whatsappLink: "https://chat.whatsapp.com/BX8Gu1TryNnGnXomP7ncHg"
        }
    },

    // =================================================
    //                السنة الثالثة
    // =================================================
    "na221": {
        title: "تحليل عددي",
        year: 3,
        code: "ع أ 221ر",
        creditHours: "2 ساعات",
        lineNumber: "822212",
        faculty: "كلية العلوم والآداب",
        department: "قسم الرياضيات",
        teachingMethod: "إلكتروني كامل عن بعد",
        description: "يتعلم الطالب طرق حل المشاكل الرياضية التي يصعب حلها تحليلياً باستخدام الطرق العددية والحاسوب.",
        universityLink: "https://services.just.edu.jo/CourseQA/WS/CourseInfo.aspx?LineNo=822212",
        resources: {
            videos: [{ title: "شرح الدكتورة شذى", url: "https://www.youtube.com/embed/pFJfXOwEh10?list=PLcy9pLDPXtFPvHNXlNKKq1KyjHfW-YqrP" },
                { title: "شرح اكاديمية ميكانيك", url: "https://www.youtube.com/embed/3COHieELjDQ?list=PLLV20d95DZpLDC8BRjxiEe2x8V9H4i6VO" },
            ],
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1ii18KmuKhraa2cVL-NOLcBf1CmkTW0-p?usp=sharing" }],
            whatsappLink: "https://chat.whatsapp.com/F05e9hTuCfBIptE9i7D2KS?mode=ac_c"
        }
    },
    "se321": {
        title: "هندسة متطلبات البرمجيات",
        year: 3,
        code: "هـ ب 321",
        creditHours: "3 ساعات", 
        lineNumber: "1763210",
        faculty: "كلية تكنولوجيا الحاسوب والمعلومات",
        department: "قسم هندسة البرمجيات",
        teachingMethod: "مدمج",
        description: "يركز على جمع وتحليل وتوثيق متطلبات البرمجيات وكيفية إدارتها خلال دورة حياة المشروع.",
        universityLink: "https://services.just.edu.jo/CourseQA/WS/CourseInfo.aspx?LineNo=1763210",
        resources: {
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1qD2e-5eFEwCTEadj_babFYTzwLOYBXet?usp=sharing" }]
		}
    },
    "se301": {
        title: "تحليل وتصميم الأنظمة",
        year: 3,
        code: "هـ ب 301",
        creditHours: "3 ساعات",
        lineNumber: "1763011",
        faculty: "كلية تكنولوجيا الحاسوب والمعلومات",
        department: "قسم هندسة البرمجيات",
        teachingMethod: "وجاهي",
        description: "يتناول منهجيات تحليل وتصميم الأنظمة البرمجية باستخدام نمذجة UML والأساليب الحديثة.",
        universityLink: "https://services.just.edu.jo/CourseQA/WS/CourseInfo.aspx?LineNo=1763011",
        resources: {
			videos: [{ title: "شرح الدكتور زكريا الشرع", url: "https://www.youtube.com/embed/hv7XlYoVnFw" },
                { title: "شرح الدكتور محمد زيناتي", url: "https://www.youtube.com/embed/PTz9yKDZH-Y?list=PL8gkpIDjEtH1V6TiYbk1iMeuKZwcWm11O" },
                { title: "شرح الدكتورة فاطمة ابو حجيلة", url: "https://www.youtube.com/embed/oHI-W_VGGeY?list=PLOTibi_1ggy0Pqjk_f4T8liqE00ZbBEf9" }],
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1FkPkY2o_NC7dxPpzF-NJ3ZKz_USfGvTj?usp=sharing" }]
		}
    },
    "se323": {
        title: "توثيق البرمجيات",
        year: 3,
        code: "هـ ب 323",
        creditHours: "2 ساعات",
        lineNumber: "1763231",
        faculty: "كلية تكنولوجيا الحاسوب والمعلومات",
        department: "قسم هندسة البرمجيات",
        teachingMethod: "مدمج",
        description: "يركز على أهمية توثيق البرمجيات وأساليب إنشاء وثائق تقنية وفنية عالية الجودة.",
        universityLink: "https://services.just.edu.jo/CourseQA/WS/CourseInfo.aspx?LineNo=1763231",
        resources: {
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1P3fGXWU0fKLEXHi_LCDZsnFF7toDoN7G?usp=sharing" }]
		}
    },
    "se310": {
        title: "البرمجة المرئية",
        year: 3,
        code: "	هـ ب310",
        creditHours: "3 ساعات",
        lineNumber: "1763100",
        faculty: "كلية تكنولوجيا الحاسوب والمعلومات",
        department: "قسم هندسة البرمجيات",
        teachingMethod: "وجاهي",
        description: "مدخل إلى برمجة واجهات المستخدم الرسومية وتطبيقات سطح المكتب باستخدام أدوات البرمجة المرئية.",
        universityLink: "https://services.just.edu.jo/CourseQA/WS/CourseInfo.aspx?LineNo=1763100",
        resources: {
			videos: [{ title: "شرح الدكتور محمود حماد", url: "https://www.youtube.com/embed/kLK5yixOmn0" }],
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1bPwedjrwfi-QJply33JiGZipBHwXQ1lZ?usp=sharing" }]
		}
    },
    "web441": {
        title: "تراسل بيانات الأعمال",
        year: 3,
        code: "ن م441",
        creditHours: "3 ساعات",
        lineNumber: "1744410",
        faculty: "كلية تكنولوجيا الحاسوب والمعلومات",
        department: "قسم هندسة البرمجيات",
        teachingMethod: "وجاهي",
        description: "يتناول تقنيات وبروتوكولات تبادل البيانات بين أنظمة الأعمال المختلفة.",
        universityLink: "https://services.just.edu.jo/CourseQA/WS/CourseInfo.aspx?LineNo=1744410",
        resources: {
			videos: [{ title: "شرح الدكتور مروان بطيحة", url: "https://www.youtube.com/embed/MKPmONh6cGU" }],
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1b1grYWO0ZAF0NccGO4qIjcgW5pLR2arK?usp=sharing" }]
		}
    },
    "web341": {
        title: "تطوير تطبيقات الويب",
        year: 3,
        code: "ن م 341",
        creditHours: "2 ساعات",
        lineNumber: "1743410", 
        faculty: "كلية تكنولوجيا الحاسوب والمعلومات",
        department: "قسم نظم المعلومات الحاسوبية",
        teachingMethod: "وجاهي",
        description: "مساق يركز على بناء تطبيقات ويب تفاعلية باستخدام تقنيات متقدمة.",
        universityLink: "https://services.just.edu.jo/CourseQA/WS/CourseInfo.aspx?LineNo=1743410",
        resources: { files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/13NjvNHkWtIySAINCNFtDlH9KIQySBXhv?usp=sharing" }]}
    },
    "se324": {
        title: "معمارية وتصميم البرمجيات",
        year: 3,
        code: "هـ ب 324",
        creditHours: "3 ساعات",
        lineNumber: "1763240",
        faculty: "كلية تكنولوجيا الحاسوب والمعلومات",
        department: "قسم هندسة البرمجيات",
        teachingMethod: "وجاهي",
        description: "يتناول مفاهيم معمارية البرمجيات وأنماط التصميم وكيفية بناء أنظمة برمجية قابلة للتطوير والصيانة.",
        universityLink: "https://services.just.edu.jo/CourseQA/WS/CourseInfo.aspx?LineNo=1763240",
        resources: {
			videos: [{ title: "شرح الدكتور خلدون الزعبي", url: "https://www.youtube.com/embed/1wuTx4RMwKM?list=PL8gkpIDjEtH1hyr9SF16XlimiPt0cj_Kx" }],
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/13hQ4MjR2xtWpeULhB2IXpg4dJyOjh1cB?usp=sharing" }]
		}
    },
    "training390": {
        title: "التدريب الميداني",
        year: 3,
        code: "هـ ب 390",
        creditHours: "3 ساعات",
        lineNumber: "1763900",
        faculty: "كلية تكنولوجيا الحاسوب والمعلومات",
        department: "قسم هندسة البرمجيات",
        teachingMethod: "مدمج",
        description: "تدريب عملي في إحدى الشركات أو المؤسسات لتطبيق المهارات المكتسبة في بيئة عمل حقيقية.",
        universityLink: "https://services.just.edu.jo/CourseQA/WS/CourseInfo.aspx?LineNo=1763900",
        resources: {
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "" }]
        }
    },
    "se371": {
        title: "برمجة الخادم/المستفيد",
        year: 3,
        code: "	هـ ب371",
        creditHours: "3 ساعات",
        lineNumber: "1763710",
        faculty: "كلية تكنولوجيا الحاسوب والمعلومات",
        department: "قسم هندسة البرمجيات",
        teachingMethod: "وجاهي",
        description: "يركز على تطوير تطبيقات الخادم والعميل باستخدام تقنيات وتقنيات الويب الحديثة.",
        universityLink: "https://services.just.edu.jo/CourseQA/WS/CourseInfo.aspx?LineNo=1763710",
        resources: {
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/118TQBtD1U-HULQTwCsn1I_BlpYYsJmg6?usp=sharing" }]
		}
    },
    "se333": {
        title: "مختبر هندسة البرمجيات",
        year: 3,
        code: "هـ ب 333",
        creditHours: "1 ساعة",
        lineNumber: "1763330",
        faculty: "كلية تكنولوجيا الحاسوب والمعلومات",
        department: "قسم هندسة البرمجيات",
        teachingMethod: "وجاهي",
        description: "تطبيقات عملية لمفاهيم هندسة البرمجيات من خلال مشاريع وتجارب معملية.",
        universityLink: "https://services.just.edu.jo/CourseQA/WS/CourseInfo.aspx?LineNo=1763330",
        resources: {
			videos: [{ title: "شرح الدكتورة منار جرادات", url: "https://www.youtube.com/embed/G2Kk_DBnz8s?list=PL8gkpIDjEtH2Cthp5QrJgJYqbYKN4VwsG" }],
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/14dcpEqAIxQ9iypR8pQGeMFRDvM51lMoY?usp=sharing" }]
		}
    },
    "hci322": {
        title: "تفاعل الإنسان والحاسوب",
        year: 3,
        code: "	ع ح318",
        creditHours: "3 ساعات",
        lineNumber: "1733180",
        faculty: "كلية تكنولوجيا الحاسوب والمعلومات",
        department: "قسم علوم الحاسوب",
        teachingMethod: "وجاهي",
        description: "يدرس مبادئ تصميم واجهات المستخدم التي تركز على تجربة المستخدم وسهولة الاستخدام.",
        universityLink: "https://services.just.edu.jo/CourseQA/WS/CourseInfo.aspx?LineNo=1733180",
        resources: {
			videos: [{ title: "شرح مِس دُعاء طشطوش (Lab)", url: "https://www.youtube.com/embed/1Ka-EmxffaY?list=PLVS43mVhT_-RbkOkRW-iQa4yXI9NfSxbI" }],
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1H7iD3Jg4sHsplgjlDgXKktpPzKNIieeM?usp=sharing" }]
		}
    },
    "os375": {
        title: "مبادئ نظم التشغيل",
        year: 3,
        code: "ع ح 375",
        creditHours: "3 ساعات",
        lineNumber: "1733750",
        faculty: "كلية تكنولوجيا الحاسوب والمعلومات",
        department: "قسم علوم الحاسوب",
        teachingMethod: "وجاهي",
        description: "يدرس مكونات نظم التشغيل وإدارتها للموارد مثل الذاكرة، المعالج، والأجهزة الطرفية.",
        universityLink: "https://services.just.edu.jo/CourseQA/WS/CourseInfo.aspx?LineNo=1733750",
        resources: {
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1sY8oWBnKDwvfeYaus9LMMpXOzfnXFUE3?usp=sharing" }]
		}
    },

    // =================================================
    //                السنة الرابعة
    // =================================================
    "se431": {
        title: "أمن البرمجيات",
        year: 4,
        code: "هـ ب 431",
        creditHours: "3 ساعات",
        lineNumber: "1764310",
        faculty: "كلية تكنولوجيا الحاسوب والمعلومات",
        department: "قسم هندسة البرمجيات",
        teachingMethod: "مدمج",
        description: "يتناول مبادئ أمن البرمجيات، الثغرات الأمنية الشائعة، وتقنيات الحماية والاختبار الأمني.",
        universityLink: "https://services.just.edu.jo/CourseQA/WS/CourseInfo.aspx?LineNo=1764310",
        resources: {
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1Hucms5Nuc86YKkqfzixDH-5BB-bfsL_7?usp=sharing" }]
		}
    },
    "se448": {
        title: "إدارة المشاريع البرمجية",
        year: 4,
        code: "هـ ب 448",
        creditHours: "3 ساعات",
        lineNumber: "1764480",
        faculty: "كلية تكنولوجيا الحاسوب والمعلومات",
        department: "قسم هندسة البرمجيات",
        teachingMethod: "وجاهي",
        description: "يركز على منهجيات إدارة المشاريع البرمجية، التخطيط، الجدولة، وإدارة الموارد والمخاطر.",
        universityLink: "https://services.just.edu.jo/CourseQA/WS/CourseInfo.aspx?LineNo=1764480",
        resources: {
			videos: [{ title: "شرح الدكتور محمد ردايدة", url: "https://www.youtube.com/embed/gOuMdc9bZKU?list=PLhJWPvzg9NTbs9JwSEdg8ZcCCnk3v1Ksa" }],
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1bC0L7yJibqb1cW2x3rCUJbO_R_YeiUf0?usp=sharing" }]
		}
    },
    "se436": {
        title: "فحص وضمان جودة البرمجيات",
        year: 4,
        code: "هـ ب 436",
        creditHours: "3 ساعات",
        lineNumber: "1764360",
        faculty: "كلية تكنولوجيا الحاسوب والمعلومات",
        department: "قسم هندسة البرمجيات",
        teachingMethod: "وجاهي",
        description: "يتناول استراتيجيات وطرق اختبار البرمجيات وضمان جودتها وفق المعايير الدولية.",
        universityLink: "https://services.just.edu.jo/CourseQA/WS/CourseInfo.aspx?LineNo=1764360",
        resources: {
			videos: [{ title: "شرح الدكتور محمد زيناتي", url: "https://www.youtube.com/embed/vIa7JvMfl_U?list=PL8gkpIDjEtH2n-W3Talar6Rsb0RCW_Fvn" }],
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1IYoH53ecE1Q80vJ8-GYsjaL_OVh3KHxD?usp=sharing" }]
		}
    },
    "gp1": {
        title: "مشروع تخرج (1)",
        year: 4,
        code: "هـ ب 491",
        creditHours: "2 ساعات",
        lineNumber: "1764911",
        faculty: "كلية تكنولوجيا الحاسوب والمعلومات",
        department: "قسم هندسة البرمجيات",
        teachingMethod: "مدمج",
        description: "الجزء الأول من مشروع التخرج، حيث يقوم الطالب باختيار فكرة المشروع ووضع الخطة والبدء بالتصميم.",
        universityLink: "https://services.just.edu.jo/CourseQA/WS/CourseInfo.aspx?LineNo=1764911",
        resources: {}
    },
    "web332": {
        title: "هندسة تطبيقات الويب",
        year: 4,
        code: "هـ ب 332",
        creditHours: "3 ساعات",
        lineNumber: "1763320",
        faculty: "كلية تكنولوجيا الحاسوب والمعلومات",
        department: "قسم هندسة البرمجيات",
        teachingMethod: "مدمج",
        description: "يتناول تصميم وتطوير تطبيقات الويب باستخدام تقنيات وخوارزميات متقدمة.",
        universityLink: "https://services.just.edu.jo/CourseQA/WS/CourseInfo.aspx?LineNo=1763320",
        resources: {
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1qeEpvkkUjlE1_o-UajmQX1AkLmQ1YfWf?usp=sharing" }]
		}
    },
    "gp2": {
        title: "مشروع تخرج (2)",
        year: 4,
        code: "هـ ب 492",
        creditHours: "3 ساعات",
        lineNumber: "1764921",
        faculty: "كلية تكنولوجيا الحاسوب والمعلومات",
        department: "قسم هندسة البرمجيات",
        teachingMethod: "مدمج",
        description: "الجزء الثاني من مشروع التخرج، حيث يقوم الطالب بتنفيذ وتجربة المشروع وتقديم التقرير النهائي.",
        universityLink: "https://services.just.edu.jo/CourseQA/WS/CourseInfo.aspx?LineNo=1764921",
        resources: {}
    },
"elective3": {
        title: "قسم اختياري (1)",
        year: 4,
        code: "---",
        creditHours: "3 ساعات",
        lineNumber: "---",
        faculty: "متطلب قسم",
        department: "اختياري",
        teachingMethod: "---",
        description: "مادة اختيارية من متطلبات القسم.",
        universityLink: "#"
    },
      "elective4": {
        title: "قسم اختياري (2)",
        year: 4, 
        code: "---",
        creditHours: "3 ساعات",
        lineNumber: "---",
        faculty: "متطلب قسم",
        department: "اختياري",
        teachingMethod: "---",
        description: "مادة اختيارية من متطلبات القسم.",
        universityLink: "#"
    },
      "elective5": {
        title: "قسم اختياري (3)",
        year: 4, 
        code: "---",
        creditHours: "3 ساعات",
        lineNumber: "---",
        faculty: "متطلب قسم",
        department: "اختياري",
        teachingMethod: "---",
        description: "مادة اختيارية من متطلبات القسم.",
        universityLink: "#"
    },

    // =================================================
    //         مواد اختيارية - (لا يوجد لها سنة)
    // =================================================
    "elec_g1_1": {
        title: "الإسلام وقضايا معاصرة",
        code: "ع أ 115",
        creditHours: "3 ساعات",
        lineNumber: "821150",
        faculty: "متطلبات الجامعة",
        department: "اختياري",
        teachingMethod: "وجاهي",
        description: "مادة اختيارية من متطلبات الجامعة.",
        universityLink: "#",
        resources: {
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1GgmYaEkTf5-gcHKdNFEACZPrzm570Un1?usp=sharing" }],
            whatsappLink: "https://chat.whatsapp.com/DCsJ1QkW8Dp22bAMaVL44o"
        }
    },
    "elec_g1_2": {
        title: "القانون في حياتنا",
        code: "ع أ 136",
        creditHours: "3 ساعات",
        lineNumber: "821360",
        faculty: "متطلبات الجامعة",
        department: "اختياري",
        teachingMethod: "إلكتروني كامل عن بعد",
        description: "مادة اختيارية من متطلبات الجامعة.",
        universityLink: "#",
        resources: {
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1HUHbq1YY9gRwzVFvbZhz40ocbaCLEVu1?usp=sharing" }],
            whatsappLink: "https://chat.whatsapp.com/G8jCFVPq4UIHlO3i6bxmW6"
        }
    },
    "elec_g1_3": {
        title: "القضية الفلسطينية",
        code: "ع أ 103",
        creditHours: "3 ساعات",
        lineNumber: "821032",
        faculty: "متطلبات الجامعة",
        department: "اختياري",
        teachingMethod: "إلكتروني كامل عن بعد",
        description: "مادة اختيارية من متطلبات الجامعة.",
        universityLink: "#",
        resources: {
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1Dg1GgXjtc8sjOPRMA8IXJgixgaohkcgS?usp=sharing" }]
        }
    },
    "elec_g1_4": {
        title: "تاريخ العلوم عند العرب والمسلمين",
        code: "ع أ 231",
        creditHours: "3 ساعات",
        lineNumber: "822310",
        faculty: "متطلبات الجامعة",
        department: "اختياري",
        teachingMethod: "إلكتروني كامل عن بعد",
        description: "مادة اختيارية من متطلبات الجامعة.",
        universityLink: "#",
        resources: {
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1uzLFhtMCmAVsvWngiRsw5fKLy7Hh_4Wp?usp=sharing" }]
        }
    },
    "elec_g1_5": {
        title: "تذوق النص الأدبي",
        code: "ع 200",
        creditHours: "3 ساعات",
        lineNumber: "802000",
        faculty: "متطلبات الجامعة",
        department: "اختياري",
        teachingMethod: "إلكتروني كامل عن بعد",
        description: "مادة اختيارية من متطلبات الجامعة.",
        universityLink: "#",
        resources: {
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1h483N1h-aw6IOPrHCrukchpXhUg7sky5?usp=sharing" }],
            whatsappLink: "https://chat.whatsapp.com/CyQpCQPQKks9D3rSP56JWQ"
        }
    },
    "elec_g1_6": {
        title: "حضارة إسلامية",
        code: "ع أ 131",
        creditHours: "3 ساعات",
        lineNumber: "821311",
        faculty: "متطلبات الجامعة",
        department: "اختياري",
        teachingMethod: "إلكتروني كامل عن بعد",
        description: "مادة اختيارية من متطلبات الجامعة.",
        universityLink: "#",
        resources: {
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1xQke6eNqg6KX_3Um5jLCEFQL2ZxmVEx6?usp=sharing" }]
        }
    },
    "elec_g1_7": {
        title: "مبادئ في اللغة الألمانية",
        code: "ل غ 106",
        creditHours: "3 ساعات",
        lineNumber: "2511060",
        faculty: "متطلبات الجامعة",
        department: "اختياري",
        teachingMethod: "وجاهي",
        description: "مادة اختيارية من متطلبات الجامعة.",
        universityLink: "#",
        resources: {
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1AsGa7rBdixyAIoCnDGwW1WHIpWOFFW_r?usp=sharing" }]
        }
    },
    "elec_g1_8": {
        title: "مبادئ في علم الاجتماع",
        code: "ع أ 121",
        creditHours: "3 ساعات",
        lineNumber: "821211",
        faculty: "متطلبات الجامعة",
        department: "اختياري",
        teachingMethod: "مدمج",
        description: "مادة اختيارية من متطلبات الجامعة.",
        universityLink: "#",
        resources: {
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1KF0SLxpmXamS3gDYAvWf-0jl4LX2Ocba?usp=sharing" }]
        }
    },

    // =================================================
    //         متطلبات جامعة اختيارية - المجموعة الثانية
    // =================================================
    "elec_g2_1": {
        title: "الأرض مشاكل وحلول",
        code: "ع أ 207مط",
        creditHours: "3 ساعات",
        lineNumber: "822070",
        faculty: "متطلبات الجامعة",
        department: "اختياري",
        teachingMethod: "إلكتروني كامل عن بعد",
        description: "مادة اختيارية من متطلبات الجامعة.",
        universityLink: "#",
        resources: {
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1fqZrSJRhMZeR4E1b3YLmaV6tSpwRJi-W?usp=sharing" }]
        }
    },
    "elec_g2_2": {
        title: "الثقافة الرقمية",
        code: "ع أ 130",
        creditHours: "3 ساعات",
        lineNumber: "821300",
        faculty: "متطلبات الجامعة",
        department: "اختياري",
        teachingMethod: "إلكتروني كامل عن بعد",
        description: "مادة اختيارية من متطلبات الجامعة.",
        universityLink: "#",
        resources: {
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1LgS0bdqdWCkIuGa9X-5mNh2iph3lfMQm?usp=sharing" }],
            whatsappLink: "https://chat.whatsapp.com/FZX2828FkCWBhSMtzURoWq"
        }
    },
    "elec_g2_3": {
        title: "الموارد الطبيعية والبيئة",
        code: "ع أ 200مط",
        creditHours: "3 ساعات",
        lineNumber: "822002",
        faculty: "متطلبات الجامعة",
        department: "اختياري",
        teachingMethod: "إلكتروني كامل عن بعد",
        description: "مادة اختيارية من متطلبات الجامعة.",
        universityLink: "#",
        resources: {
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/18Mu24UPBjSaP5seuqMUtbmYXKsT2oVym?usp=sharing" }]
        }
    },
    "elec_g2_4": {
        title: "تربية النحل",
        code: "ع أ 201نب",
        creditHours: "3 ساعات",
        lineNumber: "822011",
        faculty: "متطلبات الجامعة",
        department: "اختياري",
        teachingMethod: "إلكتروني كامل عن بعد",
        description: "مادة اختيارية من متطلبات الجامعة.",
        universityLink: "#",
        resources: {
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1Vqlmkav-OjDwcSHZnz9ViFxBLyZjerpz?usp=sharing" }],
            whatsappLink: "https://chat.whatsapp.com/C4tuecmzbtr2VkiFgvTBW4"
        }
    },
    "elec_g2_5": {
        title: "حدائق منزلية",
        code: "ع أ 200نب",
        creditHours: "3 ساعات",
        lineNumber: "822001",
        faculty: "متطلبات الجامعة",
        department: "اختياري",
        teachingMethod: "إلكتروني كامل عن بعد",
        description: "مادة اختيارية من متطلبات الجامعة.",
        universityLink: "#",
        resources: {
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/16wgPFJ-YKsd36RWRPBIShIvBNnyPkL3P?usp=sharing" }]
        }
    },
    "elec_g2_6": {
        title: "حفظ الأغذية",
        code: "ع أ 177تغ",
        creditHours: "3 ساعات",
        lineNumber: "821770",
        faculty: "متطلبات الجامعة",
        department: "اختياري",
        teachingMethod: "إلكتروني كامل عن بعد",
        description: "مادة اختيارية من متطلبات الجامعة.",
        universityLink: "#",
        resources: {
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1QWkc4lw7lf937aPz1JUW6HgLnEfdLTdi?usp=sharing" }]
        }
    },
    "elec_g2_7": {
        title: "حيوانات المزرعة ومنتجاتها",
        code: "ع أ 200حي",
        creditHours: "3 ساعات",
        lineNumber: "822000",
        faculty: "متطلبات الجامعة",
        department: "اختياري",
        teachingMethod: "إلكتروني كامل عن بعد",
        description: "مادة اختيارية من متطلبات الجامعة.",
        universityLink: "#",
        resources: {
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/15ahkK8uFjeb9PSjMmT9tqviMEdiDlRHZ?usp=sharing" }]
        }
    },
    "elec_g2_8": {
        title: "مقدمة في الطاقة المتجددة",
        code: "ع أ 102مك",
        creditHours: "3 ساعات",
        lineNumber: "821028",
        faculty: "متطلبات الجامعة",
        department: "اختياري",
        teachingMethod: "إلكتروني كامل عن بعد",
        description: "مادة اختيارية من متطلبات الجامعة.",
        universityLink: "#",
        resources: {
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1iDlXHosGfB3qwvtfP-ayVYXUzNve5rGu?usp=sharing" }]
        }
    },
    
    // =================================================
    //         متطلبات جامعة اختيارية - المجموعة الثالثة
    // =================================================
    "elec_g3_1": {
        title: "الإعاقة والمجتمع",
        code: "ع أ 100تو",
        creditHours: "3 ساعات",
        lineNumber: "821002",
        faculty: "متطلبات الجامعة",
        department: "اختياري",
        teachingMethod: "إلكتروني كامل عن بعد",
        description: "مادة اختيارية من متطلبات الجامعة.",
        universityLink: "#",
        resources: {
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1UZfl3FabUf2UW-38XYrPbeU29lF2q9_G?usp=sharing" }]
        }
    },
    "elec_g3_2": {
        title: "العناية بالحيوانات المنزلية",
        code: "ع أ 212ط ب",
        creditHours: "3 ساعات",
        lineNumber: "822121",
        faculty: "متطلبات الجامعة",
        department: "اختياري",
        teachingMethod: "إلكتروني كامل عن بعد",
        description: "مادة اختيارية من متطلبات الجامعة.",
        universityLink: "#",
        resources: {
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1mNNKsuvqpASi5ibK83vqasiSFZlY-5Cl?usp=sharing" }]
        }
    },
    "elec_g3_3": {
        title: "تعزيز الصحة",
        code: "ع أ 100تض",
        creditHours: "3 ساعات",
        lineNumber: "821001",
        faculty: "متطلبات الجامعة",
        department: "اختياري",
        teachingMethod: "إلكتروني كامل عن بعد",
        description: "مادة اختيارية من متطلبات الجامعة.",
        universityLink: "#",
        resources: {
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1QSgSpjq0s6ARFlO1MbDNx1tStvjJVKy0?usp=sharing" }],
            whatsappLink: "https://chat.whatsapp.com/KIor0xnbgOb2PLe5kBzT9l"
        }
    },
    "elec_g3_4": {
        title: "سلوك ورعاية الحيوان",
        code: "ع أ 213ط ب",
        creditHours: "3 ساعات",
        lineNumber: "822133",
        faculty: "متطلبات الجامعة",
        department: "اختياري",
        teachingMethod: "إلكتروني كامل عن بعد",
        description: "مادة اختيارية من متطلبات الجامعة.",
        universityLink: "#",
        resources: {
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1l3gJoGYhmsqUNpck3WtQktjn2W29itbY?usp=sharing" }]
        }
    },
    "elec_g3_5": {
        title: "صحة الأسرة",
        code: "ع أ 109تض",
        creditHours: "3 ساعات",
        lineNumber: "821090",
        faculty: "متطلبات الجامعة",
        department: "اختياري",
        teachingMethod: "إلكتروني كامل عن بعد",
        description: "مادة اختيارية من متطلبات الجامعة.",
        universityLink: "#",
        resources: {
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1TaU8Ep80B-gxv3irtAFY7bOrsEskbGo7?usp=sharing" }],
            whatsappLink: "https://chat.whatsapp.com/E7jIleALfzt4EEwCJ5eLZv"
        }
    },
    "elec_g3_6": {
        title: "صحة الفم والأسنان",
        code: "ع أ 100س م",
        creditHours: "3 ساعات",
        lineNumber: "821004",
        faculty: "متطلبات الجامعة",
        department: "اختياري",
        teachingMethod: "إلكتروني كامل عن بعد",
        description: "مادة اختيارية من متطلبات الجامعة.",
        universityLink: "#",
        resources: {
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1a-NNdzk-IXrqg75bGMfEwrMi-GPrVYkt?usp=sharing" }]
        }
    },
    "elec_g3_7": {
        title: "صحة حيوان",
        code: "ع أ 211ط ب",
        creditHours: "3 ساعات",
        lineNumber: "822111",
        faculty: "متطلبات الجامعة",
        department: "اختياري",
        teachingMethod: "إلكتروني كامل عن بعد",
        description: "مادة اختيارية من متطلبات الجامعة.",
        universityLink: "#",
        resources: {
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1TJKiSQW7Lb_F_1Ts_1VnYdVOrdIl1aFV?usp=sharing" }]
        }
    },
    "elec_g3_8": {
        title: "مبادئ الجودة وسلامة المرضى",
        code: "N/A",
        creditHours: "3 ساعات",
        lineNumber: "N/A",
        faculty: "متطلبات الجامعة",
        department: "اختياري",
        teachingMethod: "N/A",
        description: "مادة اختيارية من متطلبات الجامعة.",
        universityLink: "#",
        resources: {
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1N5KCRvSnzq0nf48rgjpRQHD7oC4uuJvx?usp=sharing" }]
        }
    },
    "elec_g3_9": {
        title: "منتجات حيوانية وصحة عامة",
        code: "ع أ 214ط ب",
        creditHours: "3 ساعات",
        lineNumber: "822141",
        faculty: "متطلبات الجامعة",
        department: "اختياري",
        teachingMethod: "إلكتروني كامل عن بعد",
        description: "مادة اختيارية من متطلبات الجامعة.",
        universityLink: "#",
        resources: {
            files: [{ title: "📁 تصفح المكتبة الدراسية", url: "https://drive.google.com/drive/folders/1mb736QchJAcbLtj0CGkWd6a5PBFyuQUF?usp=sharing" }]
        }
    },

};