document.addEventListener('DOMContentLoaded', () => {
    // التأكد من وجود # في الرابط
    if (window.location.hash) {
        try {
            const id = decodeURIComponent(window.location.hash.substring(1));
            const targetElement = document.getElementById(id);

            if (targetElement) {
                // ✨ --- الكود الجديد لتفعيل التبويب الصحيح --- ✨
                const parentTabContent = targetElement.closest('.tab-content');
                if (parentTabContent) {
                    const year = parentTabContent.dataset.year;
                    const correspondingTabButton = document.querySelector(`.tab-btn[data-year="${year}"]`);
                    
                    if (correspondingTabButton && !correspondingTabButton.classList.contains('active')) {
                        // إزالة 'active' من كل الأزرار والمحتويات
                        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
                        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

                        // تفعيل التبويب والمحتوى الصحيح
                        correspondingTabButton.classList.add('active');
                        parentTabContent.classList.add('active');
                    }
                }
                // --- نهاية الكود الجديد ---

                // تأخير بسيط لإعطاء فرصة للتبويب بالظهور ثم التظليل والانتقال
                setTimeout(() => {
                    targetElement.classList.add('highlighted-from-search');
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });

                    setTimeout(() => {
                        targetElement.classList.remove('highlighted-from-search');
                    }, 2500);
                }, 100); // تأخير 100 ميلي ثانية
            }
        } catch (e) {
            console.error("Highlight feature failed:", e);
        }
    }
});