document.addEventListener('DOMContentLoaded', () => {

    // --- عناصر نافذة البحث الرئيسية ---
    const openSearchBtn = document.getElementById('open-search-modal-btn');
    const searchOverlay = document.getElementById('search-modal-overlay');
    const modalSearchInput = document.getElementById('modal-search-input');

    // --- عناصر نافذة الاختيار للمواد والأقسام المشتركة ---
    const choiceModalOverlay = document.getElementById('choice-modal-overlay');
    const choiceModalTitle = document.getElementById('choice-modal-title');
    const choiceModalOptions = document.getElementById('choice-modal-options');
    const choiceModalCancel = document.getElementById('choice-modal-cancel');

    function openSearchModal() { searchOverlay.classList.add('visible'); setTimeout(() => modalSearchInput.focus(), 100); }
    function closeSearchModal() { searchOverlay.classList.remove('visible'); modalSearchInput.value = ''; renderResults([]); }
    if (openSearchBtn) openSearchBtn.addEventListener('click', openSearchModal);
    if (searchOverlay) searchOverlay.addEventListener('click', (e) => { if (e.target === searchOverlay) closeSearchModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && searchOverlay.classList.contains('visible')) closeSearchModal(); });

    function showChoiceModal(item) {
        choiceModalTitle.textContent = item.message || `"${item.name}" مشترك. لأي تخصص تريد عرضه؟`;
        choiceModalOptions.innerHTML = '';
        item.options.forEach(option => {
            const button = document.createElement('a');
            button.href = option.url;
            button.className = 'gpa-btn';
            button.textContent = option.text;
            button.addEventListener('click', () => { hideChoiceModal(); closeSearchModal(); });
            choiceModalOptions.appendChild(button);
        });
        choiceModalOverlay.classList.add('visible');
    }
    function hideChoiceModal() { choiceModalOverlay.classList.remove('visible'); }
    if (choiceModalCancel) choiceModalCancel.addEventListener('click', hideChoiceModal);
    if (choiceModalOverlay) choiceModalOverlay.addEventListener('click', (e) => { if (e.target === choiceModalOverlay) hideChoiceModal(); });

    // ===================================================================
    // ✨✨ قاعدة البيانات النهائية (مع التصحيح لدكاترة الميكانيك) ✨✨
    // ===================================================================

    const departmentsConfig = {
        'هندسة البرمجيات': { type: 'choice', softwareUrl: 'software/teachers-software.html', roboticsUrl: 'robotics/teachers-software.html' },
        'علوم الحاسوب': { type: 'choice', softwareUrl: 'software/teachers-cs.html', roboticsUrl: 'robotics/teachers-cs.html' },
        'نظم المعلومات الحاسوبية': { type: 'choice', softwareUrl: 'software/teachers-cis.html', roboticsUrl: 'robotics/teachers-cis.html' },
        'هندسة الحاسوب': { type: 'choice', softwareUrl: 'software/teachers-computer.html', roboticsUrl: 'robotics/teachers-computer.html' },
        'الرياضيات': { type: 'choice', softwareUrl: 'software/teachers-math.html', roboticsUrl: 'robotics/teachers-math.html' },
        'هندسة الميكانيك': { type: 'direct', url: 'robotics/teachers-mechanical.html' },
        'الفيزياء': { type: 'direct', url: 'robotics/teachers-physics.html' },
        'الذكاء الاصطناعي': { type: 'direct', url: 'robotics/teachers-cs.html' }
    };

    const doctorsData = [
        { name: 'الدكتور حمزة الكوفحي', department: 'هندسة البرمجيات', id: 'hoalkofahi' },
        { name: 'الدكتور لؤي علاونة', department: 'هندسة البرمجيات', id: 'lmalawneh' },
        { name: 'الدكتور خلدون الزعبي', department: 'هندسة البرمجيات', id: 'ktalzoubi' },
        { name: 'الدكتور أحمد شطناوي', department: 'هندسة البرمجيات', id: 'ahmedshatnawi' },
        { name: 'الدكتور عمر مقدادي', department: 'هندسة البرمجيات', id: 'ommeqdadi' },
        { name: 'الدكتور نذير خصاونة', department: 'هندسة البرمجيات', id: 'natheer' },
        { name: 'الدكتور محمد ملكاوي', department: 'هندسة البرمجيات', id: 'mimalkawi' },
        { name: 'الدكتور زياد الشريف', department: 'هندسة البرمجيات', id: 'zasharif' },
        { name: 'الدكتور قتيبة الذبيان', department: 'هندسة البرمجيات', id: 'qaalthebyan' },
        { name: 'الدكتور قصي ياسين', department: 'هندسة البرمجيات', id: 'qmyaseen' },
        { name: 'الدكتور زكريا الشرع', department: 'هندسة البرمجيات', id: 'zmalshara' },
        { name: 'الدكتور محمود حماد', department: 'هندسة البرمجيات', id: 'm-hammad' },
        { name: 'الدكتور رائد شطناوي', department: 'هندسة البرمجيات', id: 'raedamin' },
        { name: 'الدكتور محمد الزيناتي', department: 'هندسة البرمجيات', id: 'mhzinati' },
        { name: 'الدكتورة اسمهان ابو الحسن', department: 'هندسة البرمجيات', id: 'amabuhassan' },
        { name: 'الدكتور محمد الردايدة', department: 'هندسة البرمجيات', id: 'maradaideh' },
        { name: 'الدكتور احمد الزعبي', department: 'علوم الحاسوب', id: 'agalzubi' },
        { name: 'الدكتورة ملك عبدالغني', department: 'علوم الحاسوب', id: 'mabdullah' },
        { name: 'الدكتور عمر الموسى', department: 'علوم الحاسوب', id: 'osalmousa' },
        { name: 'الدكتورة دانا الرشيدات', department: 'علوم الحاسوب', id: 'dmelrushaidat' },
        { name: 'الدكتور عبدالرحمن المدور', department: 'علوم الحاسوب', id: 'aaalmodawar' },
        { name: 'الدكتور طارق العمري', department: 'علوم الحاسوب', id: 'talomari' },
        { name: 'الدكتورة رشا عبيدات', department: 'علوم الحاسوب', id: 'rmobeidat' },
        { name: 'الدكتور اسماعيل الحميدي', department: 'علوم الحاسوب', id: 'hmeidi' },
        { name: 'الدكتورة غدير عبيدات', department: 'علوم الحاسوب', id: 'gnobiedat' },
        { name: 'الدكتور فراس البلص', department: 'علوم الحاسوب', id: 'faalbalas' },
        { name: 'الدكتورة عاليه المضاعين', department: 'علوم الحاسوب', id: 'asmadain' },
        { name: 'الدكتورة فرح الشنيك', department: 'علوم الحاسوب', id: 'fmalshanik' },
        { name: 'الدكتورة قانته بني بكر', department: 'علوم الحاسوب', id: 'qmbanibaker' },
        { name: 'الدكتور عمر الزعبي', department: 'علوم الحاسوب', id: 'oaalzoubi' },
        { name: 'الدكتور محمد الصمادي', department: 'علوم الحاسوب', id: 'maalsmadi9' },
        { name: 'الدكتور منير بني ياسين', department: 'علوم الحاسوب', id: 'masadeh' },
        { name: 'الدكتورة نور زغل', department: 'علوم الحاسوب', id: 'noorzaghal' },
        { name: 'الدكتور محمد الرفاعي', department: 'علوم الحاسوب', id: 'mnalrefai' },
        { name: 'الدكتور محمد الطويق', department: 'علوم الحاسوب', id: 'towaiq' },
        { name: 'الدكتور محمد السميرات', department: 'علوم الحاسوب', id: 'masmirat' },
        { name: 'الدكتور ياسر خمايسه', department: 'علوم الحاسوب', id: 'yaser' },
        { name: 'الدكتور محمد الصالح', department: 'علوم الحاسوب', id: 'misaleh' },
        { name: 'الدكتور محمود الشبول', department: 'علوم الحاسوب', id: 'maalshbool' },
        { name: 'الدكتور وائل مارديني', department: 'علوم الحاسوب', id: 'mardini' },
        { name: 'الدكتورة وفاء قرقز', department: 'علوم الحاسوب', id: 'waalqarqaz' },
        { name: 'الدكتور ياسر جراروه', department: 'علوم الحاسوب', id: 'yijararweh' },
        { name: 'الدكتور يحيى طشطوش', department: 'علوم الحاسوب', id: 'yahya-t' },
        { name: 'الدكتور معاذ الجراح', department: 'هندسة الحاسوب', id: 'mjarrah' },
        { name: 'الدكتور علي الشطناوي', department: 'هندسة الحاسوب', id: 'ali' },
        { name: 'الدكتور حسام سليمان', department: 'هندسة الحاسوب', id: 'hasuleiman' },
        { name: 'الدكتور خلدون مهيدات', department: 'هندسة الحاسوب', id: 'mhaidat' },
        { name: 'الدكتور عناد الجراح', department: 'هندسة الحاسوب', id: 'inad' },
        { name: 'الدكتور محمد فريوان', department: 'هندسة الحاسوب', id: 'mafraiwan' },
        { name: 'الدكتور تيسير الدوس', department: 'هندسة الحاسوب', id: 'eldos' },
        { name: 'الدكتور رامي النعامنة', department: 'هندسة الحاسوب', id: 'ramir11' },
        { name: 'الدكتور محمد شبول', department: 'هندسة الحاسوب', id: 'maalshboul3' },
        { name: 'الدكتور فادي غانم', department: 'هندسة الحاسوب', id: 'faghanim' },
        { name: 'الدكتور أنس بصول', department: 'هندسة الحاسوب', id: 'aabsoul1' },
        { name: 'الدكتورة شذى الحسن', department: 'هندسة الحاسوب', id: 'shatha-h' },
        { name: 'الدكتور مازن الوادي', department: 'هندسة الحاسوب', id: 'mgalwadi' },
        { name: 'الدكتور محمد الحموري', department: 'هندسة الحاسوب', id: 'hammori' },
        { name: 'الدكتور عبدالرؤوف رجوب', department: 'هندسة الحاسوب', id: 'abdoul' },
        { name: 'الدكتور مهند قويدر', department: 'هندسة الحاسوب', id: 'mqquwaider' },
        { name: 'الدكتور اسامة الخليل', department: 'هندسة الحاسوب', id: 'oda' },
        { name: 'الدكتور لؤي طوالبه', department: 'هندسة الحاسوب', id: 'tawalbeh' },
        { name: 'الدكتور صالح عبدالحفيظ', department: 'هندسة الحاسوب', id: 'sabdel' },
        { name: 'الدكتور عمر الجراح', department: 'هندسة الحاسوب', id: 'aljarrah' },
        { name: 'الدكتور عبدالله بطاينة', department: 'هندسة الحاسوب', id: 'abb' },
        { name: 'الدكتور قصي ابو عين', department: 'نظم المعلومات الحاسوبية', id: 'qabuein' },
        { name: 'الدكتور عامر بدارنة', department: 'نظم المعلومات الحاسوبية', id: 'amerb' },
        { name: 'الدكتور خالد الخطيب', department: 'نظم المعلومات الحاسوبية', id: 'khatib' },
        { name: 'الدكتورة أمل الزعبي', department: 'نظم المعلومات الحاسوبية', id: 'aazoubi9' },
        { name: 'الدكتور شادي الجوارنة', department: 'نظم المعلومات الحاسوبية', id: 'saaljawarneh' },
        { name: 'الدكتور هشام عبندة', department: 'نظم المعلومات الحاسوبية', id: 'heshama' },
        { name: 'الدكتور إياد الشريف', department: 'نظم المعلومات الحاسوبية', id: 'eyadsd' },
        { name: 'الدكتور أحمد مصطفى', department: 'نظم المعلومات الحاسوبية', id: 'ammustafa' },
        { name: 'الدكتور علاء الهويدي', department: 'نظم المعلومات الحاسوبية', id: 'azalhowaide' },
        { name: 'الدكتورة روان خصاونة', department: 'نظم المعلومات الحاسوبية', id: 'rtkhasawneh' },
        { name: 'الدكتور قيس مرجي', department: 'نظم المعلومات الحاسوبية', id: 'mqais' },
        { name: 'الدكتور جواد دامر', department: 'نظم المعلومات الحاسوبية', id: 'jmdamir' },
        { name: 'الدكتور رامي الغرايبة', department: 'نظم المعلومات الحاسوبية', id: 'rami' },
        { name: 'الدكتور مصطفى ردايدة', department: 'نظم المعلومات الحاسوبية', id: 'myradaideh' },
        { name: 'الدكتورة سوزان البدور', department: 'نظم المعلومات الحاسوبية', id: 'bsuzan' },
        { name: 'الدكتور مصطفى العلي', department: 'نظم المعلومات الحاسوبية', id: 'mzali' },
        { name: 'الدكتور حسن نجادات', department: 'نظم المعلومات الحاسوبية', id: 'najadat' },
        { name: 'الدكتورة رحاب دويري', department: 'نظم المعلومات الحاسوبية', id: 'rehab' },
        { name: 'الدكتور احمد العياد', department: 'نظم المعلومات الحاسوبية', id: 'aiaiad' },
        { name: 'الدكتور محمد الشطناوي', department: 'نظم المعلومات الحاسوبية', id: 'mshatnawi' },
        { name: 'الدكتور عامر درويش', department: 'الرياضيات', id: 'ahdarweesh' },
        { name: 'الدكتور عبدالله ربابعه', department: 'الرياضيات', id: 'rababah' },
        { name: 'الدكتور عبد الرزاق مقدادي', department: 'الرياضيات', id: 'aamugdadi' },
        { name: 'الدكتور عبدالمجيد نصير', department: 'الرياضيات', id: 'nusayr' },
        { name: 'الدكتور ابراهيم الايوب', department: 'الرياضيات', id: 'iayyoub' },
        { name: 'الدكتور كامل الخالد', department: 'الرياضيات', id: 'kamel' },
        { name: 'الدكتور خلدون الزعبي', department: 'الرياضيات', id: 'kfzoubi' },
        { name: 'الدكتور خالد بطاينه', department: 'الرياضيات', id: 'khaledb' },
        { name: 'الدكتور محمود الرفاعي', department: 'الرياضيات', id: 'alrefaei' },
        { name: 'الدكتور محمود الصمادي', department: 'الرياضيات', id: 'smadi' },
        { name: 'الدكتور محمود الرواشده', department: 'الرياضيات', id: 'msalrawashdeh' },
        { name: 'الدكتور مالك بطاينه', department: 'الرياضيات', id: 'msbataineh' },
        { name: 'الدكتور مروان القرعان', department: 'الرياضيات', id: 'marwan04' },
        { name: 'الدكتور محمد الدولات', department: 'الرياضيات', id: 'mmaldolat' },
        { name: 'الدكتور محمد شخاتره', department: 'الرياضيات', id: 'mkshakhatreh6' },
        { name: 'الدكتور محمد علي', department: 'الرياضيات', id: 'myali' },
        { name: 'الدكتور قتيبه خطاطبه', department: 'الرياضيات', id: 'qutaibeh' },
        { name: 'الدكتور صالح عبدالله', department: 'الرياضيات', id: 'sabdulah' },
        { name: 'الدكتور سامر القور', department: 'الرياضيات', id: 'algore' },
        { name: 'الدكتورة امينه نصير', department: 'الرياضيات', id: 'anuseir' },
        { name: 'الدكتورة حنان حموري', department: 'الرياضيات', id: 'hmhammouri' },
        { name: 'الدكتور عماد جرادات', department: 'الرياضيات', id: 'iajaradat' },
        { name: 'الدكتور سلطي سماره', department: 'الرياضيات', id: 'samarah' },
        { name: 'الدكتور احمد زيتون', department: 'الرياضيات', id: 'amzytoon' },
        { name: 'الدكتور عصام الدرابسه', department: 'الرياضيات', id: 'imeldarabsah' },
        { name: 'الدكتورة صفاء الشياب', department: 'الرياضيات', id: 'smalsheyab6' },
        { name: 'الدكتورة هيام البطاينة', department: 'الرياضيات', id: 'hiym' },
        { name: 'الدكتورة رؤوفه الصعيدي', department: 'الرياضيات', id: 'raofe' },
        { name: 'الدكتورة شذى الغويري', department: 'الرياضيات', id: 'soalghueiri' },
        { name: 'الدكتورة انعام نصيرات', department: 'الرياضيات', id: 'imnuseir' },
        { name: 'الدكتور عصام ابو ارواق', department: 'الرياضيات', id: 'imabuirwaq' },
        { name: 'الدكتور فداء الزعبي', department: 'الفيزياء', id: 'fedda' },
        { name: 'الدكتور عبدالله عبيدات', department: 'الفيزياء', id: 'aobeidat' },
        { name: 'الدكتور احمد العمري', department: 'الفيزياء', id: 'sema' },
        { name: 'الدكتور احمد السعد', department: 'الفيزياء', id: 'alsaad11' },
        { name: 'الدكتور برهان الدين البس', department: 'الفيزياء', id: 'baalbiss' },
        { name: 'الدكتور حسن الخطيب', department: 'الفيزياء', id: 'hkhateeb' },
        { name: 'الدكتور خالد العديلات', department: 'الفيزياء', id: 'kmaledealat' },
        { name: 'الدكتور معن غرايبه', department: 'الفيزياء', id: 'magh' },
        { name: 'الدكتور محمدعلي العمري', department: 'الفيزياء', id: 'alakmoh' },
        { name: 'الدكتور محمد خير قصير', department: 'الفيزياء', id: 'qaseer' },
        { name: 'الدكتور محمد القاضي', department: 'الفيزياء', id: 'malqadi' },
        { name: 'الدكتور عدنان جرادات', department: 'الفيزياء', id: 'jaradat' },
        { name: 'الدكتور عدنان الشريعه', department: 'الفيزياء', id: 'shariah' },
        { name: 'الدكتور خالد الجراح', department: 'الفيزياء', id: 'kjarrah' },
        { name: 'الدكتور عماد المحمود', department: 'الفيزياء', id: 'eaalmahmoud' },
        { name: 'الدكتور محمد عمري', department: 'هندسة الميكانيك', id: 'engomari' },
        { name: 'الدكتور عدنان خضير', department: 'هندسة الميكانيك', id: 'akhdair' },
        { name: 'الدكتور برهان طشطوش', department: 'هندسة الميكانيك', id: 'bourhan' },
        { name: 'الدكتور غسان طشطوش', department: 'هندسة الميكانيك', id: 'gtash' },
        { name: 'الدكتور حازم الزبده', department: 'هندسة الميكانيك', id: 'hazem' },
        { name: 'الدكتور خالد بطاينه', department: 'هندسة الميكانيك', id: 'k.bataineh' },
        { name: 'الدكتور محمد الوديان', department: 'هندسة الميكانيك', id: 'widyan' },
        { name: 'الدكتور محمد خير ابو قديس', department: 'هندسة الميكانيك', id: 'qudais' },
        { name: 'الدكتور محمد الفندي', department: 'هندسة الميكانيك', id: 'mohamed_alfandi' },
        { name: 'الدكتور محمد النمر', department: 'هندسة الميكانيك', id: 'malnimr' },
        { name: 'الدكتور محمد علقم', department: 'هندسة الميكانيك', id: 'alkam' },
        { name: 'الدكتورة نسرين عبدالعال', department: 'هندسة الميكانيك', id: 'nrabdelal' },
        { name: 'الدكتور اسامه حداد', department: 'هندسة الميكانيك', id: 'haddad' },
        { name: 'الدكتور سعود خشان', department: 'هندسة الميكانيك', id: 'sakhashan' },
        { name: 'الدكتور سامر السعيد', department: 'هندسة الميكانيك', id: 'masoud' },
        { name: 'الدكتور سهيل كيوان', department: 'هندسة الميكانيك', id: 'kiwan' },
        { name: 'الدكتور طارق درابسه', department: 'هندسة الميكانيك', id: 'darabseh' },
        { name: 'الدكتورة وفاء بطاينه', department: 'هندسة الميكانيك', id: 'batayw' },
        { name: 'الدكتور زياد القضاه', department: 'هندسة الميكانيك', id: 'kodah' },
        { name: 'الدكتور احمد الشرمان', department: 'هندسة الميكانيك', id: 'amalshorman6' },
        { name: 'الدكتور احمد بطاينه', department: 'هندسة الميكانيك', id: 'ambataineh2' },
        { name: 'الدكتور بسام الشاعر', department: 'هندسة الميكانيك', id: 'bjalshaer' },
        { name: 'الدكتور خالد حتامله', department: 'هندسة الميكانيك', id: 'kshh' },
        { name: 'الدكتور خليل الخصاونه', department: 'هندسة الميكانيك', id: 'krkhasawneh' },
        { name: 'الدكتورة ملك ناجي', department: 'هندسة الميكانيك', id: 'malak' },
        { name: 'الدكتور محمد جرادات', department: 'هندسة الميكانيك', id: 'ajaradat' },
        { name: 'الدكتور قيس خصاونه', department: 'هندسة الميكانيك', id: 'qakhasawneh' },
        { name: 'الدكتور يحيى مقابله', department: 'هندسة الميكانيك', id: 'yfmakableh' },
        { name: 'الدكتور يحيى الصمادي', department: 'هندسة الميكانيك', id: 'ymsmadi' },
        { name: 'الدكتور احمد دواهده', department: 'هندسة الميكانيك', id: 'aidawahdeh' },
        { name: 'الدكتور غانم شطناوي', department: 'هندسة الميكانيك', id: 'gmshatnawi' },
        { name: 'الدكتور جمال الفران', department: 'هندسة الميكانيك', id: 'jfarran' },
        { name: 'الدكتورة ميساء خليل', department: 'هندسة الميكانيك', id: 'mfkhaleel' },
        { name: 'الدكتور محمد الاحمد', department: 'هندسة الميكانيك', id: 'melahmad' },
        { name: 'الدكتورة نسرين الزعاتره', department: 'هندسة الميكانيك', id: 'nkalzztreh' }
    ];
    
    const otherSearchableData = [
        { name: 'الهيئة التدريسية (برمجيات)', type: 'صفحة رئيسية', url: 'software/teachers.html', icon: 'bi-people-fill' }, { name: 'الهيئة التدريسية (روبوتات)', type: 'صفحة رئيسية', url: 'robotics/teachers.html', icon: 'bi-people-fill' }, { name: 'المواد الدراسية (برمجيات)', type: 'صفحة رئيسية', url: 'software/courses.html', icon: 'bi-journal-bookmark-fill' }, { name: 'المواد الدراسية (روبوتات)', type: 'صفحة رئيسية', url: 'robotics/courses.html', icon: 'bi-journal-bookmark-fill' },
        { name: 'قسم هندسة الحاسوب', type: 'choice', options: [{ text: '💻 ضمن تخصص البرمجيات', url: 'software/teachers-computer.html' }, { text: '🤖 ضمن تخصص الروبوتات', url: 'robotics/teachers-computer.html' }] }, { name: 'قسم الرياضيات', type: 'choice', options: [{ text: '💻 ضمن تخصص البرمجيات', url: 'software/teachers-math.html' }, { text: '🤖 ضمن تخصص الروبوتات', url: 'robotics/teachers-math.html' }] }, { name: 'قسم هندسة البرمجيات', type: 'choice', options: [{ text: '💻 ضمن تخصص البرمجيات', url: 'software/teachers-software.html' }, { text: '🤖 ضمن تخصص الروبوتات', url: 'robotics/teachers-software.html' }] }, { name: 'قسم علوم الحاسوب', type: 'choice', options: [{ text: '💻 ضمن تخصص البرمجيات', url: 'software/teachers-cs.html' }, { text: '🤖 ضمن تخصص الروبوتات', url: 'robotics/teachers-cs.html' }] }, { name: 'قسم نظم المعلومات الحاسوبية', type: 'choice', options: [{ text: '💻 ضمن تخصص البرمجيات', url: 'software/teachers-cis.html' }, { text: '🤖 ضمن تخصص الروبوتات', url: 'robotics/teachers-cis.html' }] }, { name: 'قسم هندسة الميكانيك', type: 'قسم - روبوتات', url: 'robotics/teachers-mechanical.html', icon: 'bi-building' }, { name: 'قسم الفيزياء', type: 'قسم - روبوتات', url: 'robotics/teachers-physics.html', icon: 'bi-building' }, { name: 'قسم الذكاء الاصطناعي', type: 'قسم - روبوتات', url: 'robotics/teachers-cs.html', icon: 'bi-building' },
        { name: 'تفاضل وتكامل (1)', code: 'math101', type: 'choice', options: [{ text: '💻 هندسة البرمجيات', url: 'software/courses.html#math101' }, { text: '🤖 علم الروبوتات', url: 'robotics/courses.html#math101' }] }, { name: 'البرمجة بلغة جافا', code: 'java210', type: 'مادة برمجيات', url: 'software/courses.html#java210' }, { name: 'برمجة الذكاء الاصطناعي', code: 'ai244', type: 'مادة روبوتات', url: 'robotics/courses.html#ai244' }
    ];

    const searchableData = [...otherSearchableData, ...doctorsData];
    
    const resultsContainer = document.getElementById('modal-search-results');
    
    function performSearch() {
        const query = modalSearchInput.value.trim().toLowerCase();
        if (!query) {
            resultsContainer.innerHTML = `<div class="result-item no-results">ابحث عن مادة، دكتور، قسم أو صفحة...</div>`;
            return;
        }
        const finalQuery = query.startsWith('قسم') ? query : `قسم ${query}`;
        const results = searchableData.filter(item => {
            const nameMatch = item.name.toLowerCase().includes(query);
            const codeMatch = item.code && item.code.toLowerCase().includes(query);
            const departmentMatch = !item.code && (item.name.toLowerCase().includes(query) || item.name.toLowerCase().includes(finalQuery));
            return nameMatch || codeMatch || departmentMatch;
        });
        renderResults(results);
    }

    function renderResults(results) {
        resultsContainer.innerHTML = '';
        if (results.length === 0) {
            resultsContainer.innerHTML = `<div class="result-item no-results">لا توجد نتائج مطابقة لبحثك</div>`;
        } else {
            results.forEach(item => {
                let displayItem = { ...item };
                if (item.department) {
                    const deptConfig = departmentsConfig[item.department];
                    if (deptConfig && deptConfig.type === 'choice') {
                        displayItem = {
                            name: item.name,
                            type: 'choice',
                            message: `الدكتور ${item.name} يتبع لقسم مشترك. اختر السياق:`,
                            options: [
                                { text: `💻 عرض ضمن تخصص البرمجيات`, url: `${deptConfig.softwareUrl}#${item.id}` },
                                { text: `🤖 عرض ضمن تخصص الروبوتات`, url: `${deptConfig.roboticsUrl}#${item.id}` }
                            ]
                        };
                    } else if (deptConfig && deptConfig.type === 'direct') {
                        displayItem.url = `${deptConfig.url}#${item.id}`;
                        displayItem.type = `هيئة تدريس - ${item.department}`;
                    }
                }
                createResultElement(displayItem);
            });
        }
    }

    function createResultElement(item) {
        const resultElement = document.createElement('div');
        resultElement.className = 'result-item';
        let iconClass = item.icon || 'bi-person-fill';
        let itemTypeLabel = item.type;

        if (item.type === 'choice') {
            iconClass = item.code ? 'bi-front' : (item.options ? 'bi-person-circle' : 'bi-building');
            itemTypeLabel = item.code ? ' مادة مشتركة للتخصصيّن' : ' دكتور مشترك للتخصصيّن';
            resultElement.classList.add('choice-item');
            resultElement.style.cursor = 'pointer';
            resultElement.addEventListener('click', () => showChoiceModal(item));
        }
        
        if (item.type.includes('مادة')) iconClass = 'bi-book-half';
        if (item.icon) iconClass = item.icon;

        resultElement.innerHTML = `
            <i class="bi ${iconClass}"></i>
            <div class="result-text">
                <span class="result-name">${item.name}</span>
                <span class="result-type">${item.code ? `رمز المادة: ${item.code}` : itemTypeLabel}</span>
            </div>
            ${item.type === 'choice' ? '<i class="bi bi-chevron-left"></i>' : ''}
        `;

        if (item.type !== 'choice') {
            const link = document.createElement('a');
            link.href = item.url;
            link.addEventListener('click', closeSearchModal);
            link.appendChild(resultElement);
            resultsContainer.appendChild(link);
        } else {
            resultsContainer.appendChild(resultElement);
        }
    }

    if (modalSearchInput) modalSearchInput.addEventListener('input', performSearch);
    renderResults([]);
});