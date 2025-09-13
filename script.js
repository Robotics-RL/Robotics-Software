document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('page-fade-in');

    const internalLinks = document.querySelectorAll('a[href]:not([href^="http"]):not([href^="#"])');

    internalLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // استثناء الروابط داخل وضع الإنجاز من تأثير الانتقال
            if (document.body.classList.contains('edit-mode') && event.target.closest('.course-card-link')) {
                return;
            }
            event.preventDefault();

            const destination = link.href;

            document.body.classList.add('page-fade-out');

            setTimeout(() => {
                window.location.href = destination;
            }, 400); 
        });
    });

    // --- ✨ تفعيل تأثير الكتابة للعنوان الرئيسي --- ✨
if (typeof Typed !== 'undefined') {
    const typedTextElement = document.getElementById('typed-text');
    if (typedTextElement) {
        const typed = new Typed('#typed-text', {
            // تعديل: دمج أول جملتين لتصبح الجمل أكثر منطقية
            strings: [
                'قسم هندسة البرمجيات و علم الروبوتات',
                'في جامعة العلوم والتكنولوجيا الأردنية'
            ],
            typeSpeed: 60,    // تعديل: سرعة كتابة متوازنة
            backSpeed: 30,    // تعديل: سرعة مسح جيدة
            backDelay: 2000,  // تعديل: زيادة مدة الانتظار قبل المسح
            loop: true,
            smartBackspace: true ,
            showCursor: true, 
            cursorChar: '|',
        });
    }

    }

    // --- ✨ كود لتمييز القسم عند النقر على زر "استكشف الأقسام" --- ✨
    const exploreBtn = document.querySelector('.cta-button');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', (e) => {
            const targetId = exploreBtn.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.classList.add('highlight-section');
                setTimeout(() => {
                    targetSection.classList.remove('highlight-section');
                }, 1500);
            }
        });
    }

    // ===================================================================
    // 1. الكود العام (يعمل على كل الصفحات)
    // ===================================================================
    const body = document.body;
    const isDesktop = window.matchMedia("(min-width: 769px)").matches;

    // --- نظام القائمة الجانبية (Sidebar) ---
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const closeSidebarBtn = document.getElementById('close-sidebar-btn');
    const overlay = document.getElementById('page-overlay');
    
    function openSidebar() { body.classList.add('sidebar-open'); overlay.classList.add('active'); }
    function closeSidebar() { body.classList.remove('sidebar-open'); overlay.classList.remove('active'); }

    if (hamburgerBtn) hamburgerBtn.addEventListener('click', openSidebar);
    if (closeSidebarBtn) closeSidebarBtn.addEventListener('click', closeSidebar);
    if (overlay) overlay.addEventListener('click', closeSidebar);

    // --- تأثيرات بصرية عامة ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    if (isDesktop) {
        window.addEventListener('mousemove', e => {
            document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
            document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
        });
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left, y = e.clientY - rect.top;
                const centerX = rect.width / 2, centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -10;
                const rotateY = ((x - centerX) / centerX) * 10;
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            });
        });
    }

    // --- نظام التبويبات والأكورديون لصفحة المواد ---
    const tabsSection = document.querySelector('.tabs-section');
    if (tabsSection) {
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                tabBtns.forEach(b => b.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));
                btn.classList.add('active');
                const year = btn.dataset.year;
                const contentToShow = document.querySelector(`.tab-content[data-year="${year}"]`);
                if (contentToShow) contentToShow.classList.add('active');
            });
        });
    }

    const accordionContainer = document.querySelector('.accordion-container');
    if (accordionContainer) {
        const activeAccordion = accordionContainer.querySelector('.accordion-item.active .accordion-content');
        if (activeAccordion) {
            activeAccordion.style.maxHeight = activeAccordion.scrollHeight + "px";
        }
        const accordionItems = accordionContainer.querySelectorAll('.accordion-item');
        accordionItems.forEach(item => {
            const header = item.querySelector('.accordion-header');
            if (header) {
                header.addEventListener('click', () => {
                    item.classList.toggle('active');
                    const content = item.querySelector('.accordion-content');
                    if (item.classList.contains('active')) {
                        if (content) content.style.maxHeight = content.scrollHeight + "px";
                    } else {
                        if (content) content.style.maxHeight = '0';
                    }
                });
            }
        });
    }

    // --- Global Notification Function ---
    function showNotification(message, type = 'info') {
        let notification = document.getElementById('global-notification');
        if (!notification) {
            notification = document.createElement('div');
            notification.id = 'global-notification';
            notification.style.cssText = `
                position: fixed; top: 20px; right: 20px; padding: 1rem 1.5rem;
                border-radius: 8px; color: white; z-index: 10000; max-width: 300px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15); transition: all 0.3s ease;
                transform: translateY(-100px); opacity: 0;
            `;
            document.body.appendChild(notification);
        }
        const bgColors = {
            success: 'linear-gradient(135deg, #28a745, #20c997)',
            error: 'linear-gradient(135deg, #dc3545, #fd7e14)',
            warning: 'linear-gradient(135deg, #ffc107, #fd7e14)',
            info: 'linear-gradient(135deg, #17a2b8, #6f42c1)'
        };
        notification.style.background = bgColors[type] || bgColors.info;
        notification.textContent = message;
        notification.style.transform = 'translateY(0)';
        notification.style.opacity = '1';
        setTimeout(() => {
            notification.style.transform = 'translateY(-100px)';
            notification.style.opacity = '0';
        }, 3000);
    }

    // ===================================================================
    // 2. كود الإنجاز والمعدل (النسخة النهائية والمحسّنة)
    // ===================================================================
    const editModeToggle = document.getElementById('edit-mode-toggle');
    
    if (localStorage.getItem('completionModeActive') === 'true') {
        body.classList.add('edit-mode');
    }

    if (editModeToggle || body.classList.contains('edit-mode')) {
        
        let localCoursesData = {};
        if (typeof coursesData !== 'undefined') {
            localCoursesData = coursesData;
        }

        const getStorageKey = () => {
            const path = window.location.pathname;
            if (path.includes('robotics')) return 'completedRoboticsCourses';
            if (path.includes('software')) return 'completedSoftwareCourses';
            return 'completedSharedCourses'; 
        };

        const COMPLETED_COURSES_KEY = getStorageKey();
        const cumulativeGpaTrackerEl = document.getElementById('cumulative-gpa-tracker');
        const gradePoints = { 'A+': 4.2, 'A': 4.0, 'A-': 3.75, 'B+': 3.5, 'B': 3.25, 'B-': 3.0, 'C+': 2.75, 'C': 2.5, 'C-': 2.25, 'D+': 2.0, 'D': 1.75, 'D-': 1.5, 'F': 0.5 };
        
        const getGradeEquivalent = (gpa) => {
            if (gpa >= 3.7) return "إمتياز";
            if (gpa >= 3.0) return "جيد جداً";
            if (gpa >= 2.5) return "جيد";
            if (gpa >= 2.0) return "مقبول";
            return "راسب";
        };

        const getCompletedCourses = () => JSON.parse(localStorage.getItem(COMPLETED_COURSES_KEY) || '[]');
        const saveCompletedCourses = (courses) => localStorage.setItem(COMPLETED_COURSES_KEY, JSON.stringify(courses));

        const calculateCurrentUniElectiveHours = () => {
            const completed = getCompletedCourses();
            let total = 0;
            completed.forEach(course => {
                if (localCoursesData[course.id]) {
                    const info = localCoursesData[course.id];
                    if (info.faculty === "متطلبات الجامعة" && info.department === "اختياري") {
                        total += parseInt(info.creditHours) || 0;
                    }
                }
            });
            return total;
        };
        
        const updateProgressAndGPA = () => {
            if (Object.keys(localCoursesData).length === 0) {
                if (typeof coursesData === 'undefined') {
                    console.error("CRITICAL ERROR: courses-data.js is not loaded. Check the file path in your HTML.");
                    return;
                }
                localCoursesData = coursesData;
            }

            const completedCourses = getCompletedCourses();
            let totalCompletedHours = 0;
            let totalGpaHours = 0; 
            let totalCompletedPoints = 0;
            let yearHours = { 1: 0, 2: 0, 3: 0, 4: 0 };
            let uniElectiveHours = 0;

            completedCourses.forEach(course => {
                if (localCoursesData[course.id]) {
                    const courseInfo = localCoursesData[course.id];
                    const hours = parseInt(courseInfo.creditHours) || 0;
                    totalCompletedHours += hours;
                    if (course.grade && gradePoints[course.grade]) {
                        totalGpaHours += hours;
                        totalCompletedPoints += hours * gradePoints[course.grade];
                    }
                    if (courseInfo.year && yearHours.hasOwnProperty(courseInfo.year)) {
    yearHours[courseInfo.year] += hours;
} 
else if (courseInfo.faculty === "متطلبات الجامعة" && courseInfo.department === "اختياري") {
    uniElectiveHours += hours;
}
                }
            });
            
            function updateCounter(elementId, completedValue) {
                const el = document.getElementById(elementId);
                if (el) {
                    const totalValueText = el.textContent.split('/')[1];
                    if (totalValueText) {
                        el.textContent = `${completedValue} / ${totalValueText.trim()}`;
                    }
                }
            }

            updateCounter('total-hours', totalCompletedHours);
            updateCounter('year-1-hours', yearHours[1]);
            updateCounter('year-2-hours', yearHours[2]);
            updateCounter('year-3-hours', yearHours[3]);
            updateCounter('year-4-hours', yearHours[4]);
            const uniElectiveEl = document.getElementById('uni-elective-hours') || document.getElementById('elective-hours');
            if(uniElectiveEl) {
                const totalValueText = uniElectiveEl.textContent.split('/')[1];
                if(totalValueText) uniElectiveEl.textContent = `${uniElectiveHours} / ${totalValueText.trim()}`;
            }

            if (cumulativeGpaTrackerEl) {
                if (totalGpaHours > 0) {
                    const gpa = totalCompletedPoints / totalGpaHours;
                    const equivalent = getGradeEquivalent(gpa);
                    cumulativeGpaTrackerEl.innerHTML = `${gpa.toFixed(2)} <small>(${equivalent})</small>`;
                } else {
                    cumulativeGpaTrackerEl.innerHTML = `0.00 <small>(لم تبدأ)</small>`;
                }
            }
            
            const headerProgressBar = document.getElementById('header-progress-bar');
            const headerProgressText = document.getElementById('header-progress-text');
            if (headerProgressBar && headerProgressText) {
                const totalPlanHours = 132;
                const percentage = totalPlanHours > 0 ? (totalCompletedHours / totalPlanHours) * 100 : 0;
                headerProgressBar.style.width = `${percentage}%`;
                headerProgressText.textContent = `${Math.round(percentage)}%`;
            }
        };
        
        const getGradeColorClass = (grade) => {
            if (!grade || grade === 'P') return 'grade-average';
            const g = grade.toUpperCase();
            if (['A+', 'A','A-','B+', ].includes(g)) return 'grade-excellent';
            if ([ 'B','B-','C+',].includes(g)) return 'grade-good';
            if ([  'C', 'C-','D+',].includes(g)) return 'grade-average';
            if ([ 'D', 'D-','F'].includes(g)) return 'grade-fail';
            return '';
        };

        const loadState = () => {
             const completedCourses = getCompletedCourses();
             const isEditMode = document.body.classList.contains('edit-mode');

             document.querySelectorAll('.grade-badge-on-card').forEach(badge => badge.remove());

             document.querySelectorAll('.course-card-link').forEach(link => {
                 const courseId = link.dataset.courseId;
                 const cardItem = link.querySelector('.course-card-item');
                 const completedCourse = completedCourses.find(c => c.id === courseId);
                 
                 link.classList.remove('completed');

                 if (completedCourse) {
                     link.classList.add('completed');
                     if (cardItem) {
                         const gradeBadge = document.createElement('span');
                         gradeBadge.className = 'grade-badge-on-card';
                         if (completedCourse.grade && completedCourse.grade !== 'P') {
                             gradeBadge.textContent = completedCourse.grade;
                         } else {
                             gradeBadge.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
                         }
                         
                         const colorClass = getGradeColorClass(completedCourse.grade);
                         if(colorClass) {
                            gradeBadge.classList.add(colorClass);
                         }

                         cardItem.appendChild(gradeBadge);
                     }
                 }

                 if (isEditMode) {
                     if (!link.hasAttribute('data-original-href')) {
                        link.setAttribute('data-original-href', link.getAttribute('href'));
                     }
                     link.setAttribute('href', '#');
                 } else {
                     const originalHref = link.getAttribute('data-original-href');
                     if (originalHref) {
                         link.setAttribute('href', originalHref);
                     }
                 }
             });
             updateProgressAndGPA();
        };

        const clearAllBtn = document.getElementById('clear-all-btn');
        const deleteModal = document.getElementById('delete-modal');
        if (clearAllBtn && deleteModal) {
             const cancelDeleteBtn = document.getElementById('cancel-delete-btn');
            const deleteOptionBtns = document.querySelectorAll('.delete-option-btn');

            clearAllBtn.addEventListener('click', () => deleteModal.classList.add('visible'));
            const closeDeleteModal = () => deleteModal.classList.remove('visible');
            if (cancelDeleteBtn) cancelDeleteBtn.addEventListener('click', closeDeleteModal);
            deleteModal.addEventListener('click', (e) => {
                if (e.target === deleteModal) closeDeleteModal();
            });

            deleteOptionBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const target = btn.dataset.deleteTarget;
                    if (confirm(`⚠️ هل أنت متأكد من حذف إنجاز "${btn.textContent.trim()}"؟`)) {
                        let completedCourses = getCompletedCourses();
                        let remainingCourses = [];
                        if (target === 'all') { /* No courses remain */ } 
                        else if (target === 'electives') {
                            remainingCourses = completedCourses.filter(c => {
                                const info = localCoursesData[c.id];
                                return info && !(info.faculty === "متطلبات الجامعة" && info.department === "اختياري");
                            });
                        } else {
                            const yearToDelete = parseInt(target.replace('year', ''));
                            remainingCourses = completedCourses.filter(c => {
                                const info = localCoursesData[c.id];
                                return info && info.year != yearToDelete;
                            });
                        }
                        saveCompletedCourses(remainingCourses);
                        loadState();
                        showNotification('تم حذف الإنجاز المحدد بنجاح', 'success');
                        closeDeleteModal();
                    }
                });
            });
        }

        if (editModeToggle) {
            editModeToggle.checked = localStorage.getItem('completionModeActive') === 'true';
            editModeToggle.addEventListener('change', () => {
                const isActive = editModeToggle.checked;
                body.classList.toggle('edit-mode', isActive);
                localStorage.setItem('completionModeActive', isActive);
                loadState(); 
            });
        }
        
        const gradeModal = document.getElementById('grade-modal');
        if (gradeModal) {
            const modalCourseTitle = document.getElementById('modal-course-title');
            const modalGradeSelector = document.getElementById('modal-grade-selector');
            const saveGradeBtn = document.getElementById('save-grade-btn');
            const cancelGradeBtn = document.getElementById('cancel-grade-btn');
            let currentCourseId = null;
            
            const modalActions = gradeModal.querySelector('.modal-actions');
            if (modalActions && !document.getElementById('save-no-grade-btn')) {
                const saveNoGradeBtn = document.createElement('button');
                saveNoGradeBtn.id = 'save-no-grade-btn';
                saveNoGradeBtn.className = 'gpa-btn secondary';
                saveNoGradeBtn.textContent = 'إنجاز بدون علامة';
                modalActions.appendChild(saveNoGradeBtn);
                saveNoGradeBtn.addEventListener('click', () => {
                    if (currentCourseId) saveCourse('P');
                });
            }

            if (modalGradeSelector) {
                modalGradeSelector.innerHTML = Object.keys(gradePoints).map(g => `<button type="button" class="selector-btn" data-value="${g}">${g}</button>`).join('');
                modalGradeSelector.addEventListener('click', (e) => {
                    if (e.target.classList.contains('selector-btn')) {
                        Array.from(modalGradeSelector.children).forEach(btn => btn.classList.remove('active'));
                        e.target.classList.add('active');
                    }
                });
            }

            function openGradeModal(link) {
                currentCourseId = link.dataset.courseId;
                if (modalCourseTitle) modalCourseTitle.textContent = link.querySelector('h4').textContent;
                const completedCourses = getCompletedCourses();
                const courseData = completedCourses.find(c => c.id === currentCourseId);
                if (modalGradeSelector) {
                    Array.from(modalGradeSelector.children).forEach(btn => btn.classList.remove('active'));
                    const gradeToSelect = (courseData && courseData.grade && courseData.grade !== 'P') ? courseData.grade : 'A+';
                    const gradeBtn = modalGradeSelector.querySelector(`[data-value="${gradeToSelect}"]`);
                    if(gradeBtn) gradeBtn.classList.add('active');
                }
                gradeModal.classList.add('visible');
            }

            function closeGradeModal() {
                gradeModal.classList.remove('visible');
                currentCourseId = null;
            }

            function saveCourse(gradeValue) {
                let completedCourses = getCompletedCourses();
                const courseIndex = completedCourses.findIndex(c => c.id === currentCourseId);
                if (courseIndex > -1) {
                    completedCourses[courseIndex].grade = gradeValue;
                } else {
                    completedCourses.push({ id: currentCourseId, grade: gradeValue });
                }
                saveCompletedCourses(completedCourses);
                closeGradeModal();
                loadState();
            }

            if (saveGradeBtn) {
                saveGradeBtn.addEventListener('click', () => {
                    const selectedGradeEl = modalGradeSelector.querySelector('.active');
                    if (!selectedGradeEl) {
                        alert('الرجاء اختيار علامة.');
                        return;
                    }
                    saveCourse(selectedGradeEl.dataset.value);
                });
            }
            
            if (cancelGradeBtn) cancelGradeBtn.addEventListener('click', closeGradeModal);

            document.body.addEventListener('click', (e) => {
                const link = e.target.closest('.course-card-link');
                if (link && body.classList.contains('edit-mode')) {
                    e.preventDefault();
                    e.stopPropagation(); // *** هذا هو الحل لمنع التعارض ***
                    if (link.classList.contains('completed')) {
                        if (confirm('هل تريد تعديل العلامة أم إزالة المادة من قائمة الإنجاز؟\nOK = تعديل\nCancel = إزالة')) {
                            openGradeModal(link);
                        } else {
                            let completedCourses = getCompletedCourses();
                            completedCourses = completedCourses.filter(c => c.id !== link.dataset.courseId);
                            saveCompletedCourses(completedCourses);
                            loadState();
                        }
                    } else {
                        const courseId = link.dataset.courseId;
                        if (localCoursesData && localCoursesData[courseId]) {
                            const courseInfo = localCoursesData[courseId];
                            if (courseInfo.faculty === "متطلبات الجامعة" && courseInfo.department === "اختياري") {
                                const currentElectiveHours = calculateCurrentUniElectiveHours();
                                const newCourseHours = parseInt(courseInfo.creditHours) || 0;
                                if (currentElectiveHours + newCourseHours > 9) {
                                    alert(`لا يمكنك إنجاز أكثر من 9 ساعات من مواد الجامعة الاختيارية. لقد أنجزت ${currentElectiveHours} ساعة حتى الآن.`);
                                    return; 
                                }
                            }
                        }
                        openGradeModal(link);
                    }
                }
            });
        }
        
        loadState();
    }
    
    // ===================================================================
    // 3. كود خاص بصفحة حساب المعدل (GPA)
    // ===================================================================
    const gpaCommandCenter = document.getElementById('gpa-command-center');
    if (gpaCommandCenter) {
        const coursesPanel = document.getElementById('courses-panel');
        const addCourseBtn = document.getElementById('add-course-btn');
        const calculateBtn = document.getElementById('calculate-gpa-btn');
        const resultDisplay = document.getElementById('result-display');
        const hologramContent = document.getElementById('hologram-content');
        const honorMessageEl = document.getElementById('honor-roll-message');
        const cumulativeToggle = document.getElementById('cumulative-toggle');
        const previousGpaSection = document.getElementById('previous-gpa-section');
        const prevGpaInput = document.getElementById('prev-gpa');
        const prevHoursInput = document.getElementById('prev-hours');
        const retakeToggle = document.getElementById('retake-toggle');
        const retakeCoursesSection = document.getElementById('retake-courses-section');
        const retakeCoursesPanel = document.getElementById('retake-courses-panel');
        const addRetakeCourseBtn = document.getElementById('add-retake-course-btn');
        const gpaGradePoints = { 'A+': 4.2, 'A': 4.0, 'A-': 3.75, 'B+': 3.5, 'B': 3.25, 'B-': 3.0, 'C+': 2.75, 'C': 2.5, 'C-': 2.25, 'D+': 2.0, 'D': 1.75, 'D-': 1.5, 'F': 0.5 };
        const gpaGradeScale = [
            { threshold: 4.20, symbol: 'A+', rank: 'إمتياز', colorClass: 'excellent' },
            { threshold: 4.00, symbol: 'A', rank: 'إمتياز', colorClass: 'excellent' },
            { threshold: 3.75, symbol: 'A-', rank: 'ممتاز', colorClass: 'very-good' },
            { threshold: 3.50, symbol: 'B+', rank: 'ممتاز', colorClass: 'very-good' },
            { threshold: 3.25, symbol: 'B', rank: 'جيد جداً', colorClass: 'good' },
            { threshold: 3.00, symbol: 'B-', rank: 'جيد جداً', colorClass: 'good' },
            { threshold: 2.75, symbol: 'C+', rank: 'جيد', colorClass: 'passable' },
            { threshold: 2.50, symbol: 'C', rank: 'جيد', colorClass: 'passable' },
            { threshold: 2.25, symbol: 'C-', rank: 'مقبول', colorClass: 'pass' },
            { threshold: 2.00, symbol: 'D+', rank: 'مقبول', colorClass: 'pass' },
            { threshold: 1.75, symbol: 'D', rank: 'إنذار', colorClass: 'warning' },
            { threshold: 1.50, symbol: 'D-', rank: 'إنذار', colorClass: 'warning' },
            { threshold: 0.50, symbol: 'F', rank: 'إنذار', colorClass: 'warning' }
        ];
        const getGpaDetails = (gpa) => {
            return gpaGradeScale.find(grade => gpa >= grade.threshold) || 
                   { symbol: 'F', rank: 'إنذار', colorClass: 'warning' };
        };
        const createCourseCard = (isRetake = false) => {
            const card = document.createElement('div');
            card.className = isRetake ? 'retake-course-card' : 'course-card';
            let cardHTML = `<div class="course-card-main"><div class="input-group"><label>عدد الساعات</label><div class="interactive-selector hours-selector">${[1, 2, 3, 4].map(h => `<button type="button" class="selector-btn" data-value="${h}">${h}</button>`).join('')}</div></div><div class="input-group"><label>${isRetake ? 'العلامة الجديدة' : 'العلامة النهائية'}</label><div class="interactive-selector ${isRetake ? 'new-grade-selector' : 'grade-selector'}">${Object.keys(gpaGradePoints).map(g => `<button type="button" class="selector-btn" data-value="${g}">${g}</button>`).join('')}</div></div>`;
            if (isRetake) { cardHTML += `<div class="input-group"><label>العلامة القديمة</label><div class="interactive-selector old-grade-selector">${Object.keys(gpaGradePoints).map(g => `<button type="button" class="selector-btn" data-value="${g}">${g}</button>`).join('')}</div></div>`; }
            cardHTML += `</div><div class="course-card-actions"><button type="button" class="remove-course-btn"><i class="bi bi-trash-fill"></i></button></div>`;
            card.innerHTML = cardHTML;
            const panel = isRetake ? retakeCoursesPanel : coursesPanel;
            if(panel) panel.appendChild(card);
            setupCardListeners(card, isRetake);
        };
        const setupCardListeners = (card, isRetake) => {
            card.querySelector('.hours-selector [data-value="3"]').classList.add('active');
            card.querySelector(`.${isRetake ? 'new-grade-selector' : 'grade-selector'} [data-value="A+"]`).classList.add('active');
            if (isRetake) { card.querySelector('.old-grade-selector [data-value="F"]').classList.add('active'); }
            card.querySelectorAll('.interactive-selector').forEach(selector => {
                selector.addEventListener('click', (e) => {
                    if (e.target.classList.contains('selector-btn')) {
                        Array.from(selector.children).forEach(btn => btn.classList.remove('active'));
                        e.target.classList.add('active');
                    }
                });
            });
            // ✨ --- التعديل الثاني: إضافة أنميشن للحذف --- ✨
            card.querySelector('.remove-course-btn').addEventListener('click', () => {
                card.classList.add('card-fade-out');
                setTimeout(() => {
                    card.remove();
                }, 300); 
            });
        };
        const calculateGPA = () => {
            if (cumulativeToggle && cumulativeToggle.checked) {
                const prevGpa = prevGpaInput.value.trim();
                const prevHours = prevHoursInput.value.trim();
                if ((prevGpa && !prevHours) || (!prevGpa && prevHours)) {
                    alert('للحساب التراكمي، يجب إدخال المعدل السابق وعدد الساعات معاً.');
                    return;
                }
            }
            let semesterPoints = 0, semesterHours = 0, cumulativeEffect = 0;
            document.querySelectorAll('#courses-panel .course-card').forEach(card => {
                const hours = parseFloat(card.querySelector('.hours-selector .active')?.dataset.value);
                const grade = card.querySelector('.grade-selector .active')?.dataset.value;
                if (hours && grade) { semesterPoints += hours * gpaGradePoints[grade]; semesterHours += hours; }
            });
            if(retakeCoursesPanel) {
                document.querySelectorAll('.retake-course-card').forEach(card => {
                    const hours = parseFloat(card.querySelector('.hours-selector .active')?.dataset.value);
                    const newGrade = card.querySelector('.new-grade-selector .active')?.dataset.value;
                    const oldGrade = card.querySelector('.old-grade-selector .active')?.dataset.value;
                    if (hours && newGrade && oldGrade) { cumulativeEffect += hours * (gpaGradePoints[newGrade] - gpaGradePoints[oldGrade]); }
                });
            }
            if (semesterHours === 0 && (!cumulativeToggle || !cumulativeToggle.checked) && cumulativeEffect === 0) {
                alert('الرجاء إضافة مواد لحساب المعدل.'); return;
            }
            if(resultDisplay) resultDisplay.style.display = 'block';
            if(honorMessageEl) honorMessageEl.style.display = 'none';
            let resultHTML = '';
            if (semesterHours > 0) {
                const semesterGpa = semesterPoints / semesterHours;
                const { rank, symbol, colorClass } = getGpaDetails(semesterGpa);
                resultHTML += `<div class="gpa-result-card ${colorClass}"><div class="result-numerical">${semesterGpa.toFixed(2)}</div><div class="result-details-group"><div class="result-title">المعدل الفصلي</div><div class="result-rank">${rank}</div><div class="result-symbol">الرمز: ${symbol}</div></div></div>`;
                if (semesterGpa >= 3.75 && semesterHours >= 12) {
                    if(honorMessageEl) {
                        honorMessageEl.innerHTML = '🎉 <strong>مبروك! أنت على لوحة الشرف.</strong>';       
                        honorMessageEl.style.display = 'block';
                    }
                }
            }
           if (cumulativeToggle && cumulativeToggle.checked && prevGpaInput.value.trim() && prevHoursInput.value.trim()) {
                const prevGpa = parseFloat(prevGpaInput.value);
                const prevHours = parseFloat(prevHoursInput.value);
                const prevPoints = prevGpa * prevHours;
                const totalPoints = prevPoints + semesterPoints + cumulativeEffect;
                const totalHours = prevHours + semesterHours;
                const cumulativeGpa = totalHours > 0 ? (totalPoints / totalHours) : 0;
                const { rank, symbol, colorClass } = getGpaDetails(cumulativeGpa);
                resultHTML += `<div class="gpa-result-card ${colorClass}"><div class="result-numerical">${cumulativeGpa.toFixed(2)}</div><div class="result-details-group"><div class="result-title">المعدل التراكمي</div><div class="result-rank">${rank}</div><div class="result-symbol">الرمز: ${symbol}</div></div></div>`;
            }
            if(hologramContent) hologramContent.innerHTML = resultHTML;
        };

        // ✨ --- التعديل الرابع: التحقق من مدخلات المعدل السابق --- ✨
        let lastValidGpa = '';
        if (prevGpaInput) {
            prevGpaInput.addEventListener('input', (e) => {
                const value = e.target.value;
                if (value.includes(',')) {
                    e.target.value = lastValidGpa;
                    showNotification('الرجاء استخدام النقطة (.) بدلاً من الفاصلة (,) للمعدل.', 'error');
                    return;
                }
                if (!/^[0-9]*\.?[0-9]*$/.test(value) || parseFloat(value) > 4.20) {
                    e.target.value = lastValidGpa;
                    if(value !== lastValidGpa) {
                        showNotification('المعدل يجب أن يكون رقماً بين 0 و 4.20', 'error');
                    }
                    return;
                }
                lastValidGpa = value;
            });
        }

        // ✨ --- التعديل الثالث: التحقق من مدخلات الساعات المقطوعة --- ✨
        let lastValidHours = '';
        if (prevHoursInput) {
            prevHoursInput.addEventListener('input', (e) => {
                const value = e.target.value;
                if (!/^[0-9]*$/.test(value)) {
                    e.target.value = lastValidHours;
                    return;
                }
                if (parseInt(value) > 260) {
                    e.target.value = lastValidHours;
                    showNotification('لا يمكن إدخال أكثر من 260 ساعة مقطوعة.', 'error');
                    return;
                }
                lastValidHours = value;
            });
        }
        
        if (addCourseBtn) addCourseBtn.addEventListener('click', () => createCourseCard(false));
        if(addRetakeCourseBtn) addRetakeCourseBtn.addEventListener('click', () => createCourseCard(true));
        if (calculateBtn) calculateBtn.addEventListener('click', calculateGPA);
        if(cumulativeToggle) cumulativeToggle.addEventListener('change', () => {
            if (previousGpaSection) previousGpaSection.classList.toggle('visible', cumulativeToggle.checked);
        });
        
        if(retakeToggle) {
            if (addRetakeCourseBtn) {
                addRetakeCourseBtn.style.display = retakeToggle.checked ? 'inline-flex' : 'none';
            }

            retakeToggle.addEventListener('change', () => {
                const isVisible = retakeToggle.checked;
                if (retakeCoursesSection) {
                    retakeCoursesSection.classList.toggle('visible', isVisible);
                }
                if (addRetakeCourseBtn) {
                    addRetakeCourseBtn.style.display = isVisible ? 'inline-flex' : 'none';
                }
                if (isVisible && retakeCoursesPanel && retakeCoursesPanel.children.length === 0) {
                    createCourseCard(true);
                }
                if (!isVisible && retakeCoursesPanel) {
                    retakeCoursesPanel.innerHTML = '';
                }
            });
        }

        // ✨ --- التعديل الأول: إضافة مادة واحدة فقط في البداية --- ✨
        if (coursesPanel && coursesPanel.children.length === 0) {
            createCourseCard(false);
        }
    }
    
    // --- Image Modal Logic (Tree) ---
    const showTreeBtn = document.getElementById('show-tree-btn');
    const treeModal = document.getElementById('image-modal-tree');
    if (showTreeBtn && treeModal) {
         showTreeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            treeModal.classList.add('visible');
            document.body.style.overflow = 'hidden';
        });
        const closeButtons = treeModal.querySelectorAll('.close-modal-btn');
        closeButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                treeModal.classList.remove('visible');
                document.body.style.overflow = '';
            });
        });
        treeModal.addEventListener('click', function(e) {
            if (e.target === treeModal) {
                treeModal.classList.remove('visible');
                document.body.style.overflow = '';
            }
        });
    }

    // --- Image Modal Logic (Grades) ---
    const showGradesBtn = document.getElementById('show-grades-btn');
    const gradesModal = document.getElementById('image-modal-grades');
    if (showGradesBtn && gradesModal) {
        function openGradesModal(e) {
            e.preventDefault();
            gradesModal.classList.add('visible');
            document.body.style.overflow = 'hidden';
        }
        function closeGradesModal() {
            gradesModal.classList.remove('visible');
            document.body.style.overflow = '';
        }
        showGradesBtn.addEventListener('click', openGradesModal);
        const closeButtons = gradesModal.querySelectorAll('.close-modal-btn');
        closeButtons.forEach(btn => btn.addEventListener('click', closeGradesModal));
        gradesModal.addEventListener('click', (e) => {
            if (e.target === gradesModal) closeGradesModal();
        });
    }

    // --- Page Refresh/Back-Forward Cache Fix ---
    window.addEventListener('pageshow', function(event) {
        if (event.persisted) {
            const isEditModeActive = localStorage.getItem('completionModeActive') === 'true';
            document.body.classList.toggle('edit-mode', isEditModeActive);
            
            const editToggle = document.getElementById('edit-mode-toggle');
            if (editToggle) {
                editToggle.checked = isEditModeActive;
            }
            
            if (typeof loadState === 'function') {
                loadState();
            }
        }
    });

    const storyCards = document.querySelectorAll('.about-page-main .story-card');
    storyCards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x-local', `${x}px`);
            card.style.setProperty('--mouse-y-local', `${y}px`);
        });
    });

    const developerCard = document.getElementById('developer-card');
    if (developerCard) {
        developerCard.addEventListener('mousemove', e => {
            const rect = developerCard.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / centerY * -10;
            const rotateY = (x - centerX) / centerX * 10;
            developerCard.style.transform = `perspective(1500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        developerCard.addEventListener('mouseleave', () => {
            developerCard.style.transform = 'perspective(1500px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    }

});
// =======================================================
// ====== كود تفعيل نافذة عرض المصادر (Modal) ======
// =======================================================
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('resources-modal');
    if (!modal) return; 

    const closeModalBtn = document.getElementById('close-modal-btn');
    const resourceBtns = document.querySelectorAll('.resource-btn');
    
    const modalTitle = document.getElementById('modal-title');
    const modalVideosList = document.getElementById('modal-videos');
    const modalArticlesList = document.getElementById('modal-articles');

    const openModal = (e) => {
        const btn = e.currentTarget;
        const title = btn.dataset.title;
        const videos = JSON.parse(btn.dataset.videos || '[]');
        const articles = JSON.parse(btn.dataset.articles || '[]');

        modalTitle.textContent = title;

        modalVideosList.innerHTML = ''; 
        if (videos.length > 0) {
            videos.forEach(video => {
                const li = document.createElement('li');
                li.innerHTML = `<a href="${video.url}" target="_blank" rel="noopener noreferrer">${video.title}</a>`;
                modalVideosList.appendChild(li);
            });
        } else {
             modalVideosList.innerHTML = '<li>لا توجد فيديوهات مقترحة حالياً.</li>';
        }

        modalArticlesList.innerHTML = ''; 
        if (articles.length > 0) {
            articles.forEach(article => {
                const li = document.createElement('li');
                li.innerHTML = `<a href="${article.url}" target="_blank" rel="noopener noreferrer">${article.title}</a>`;
                modalArticlesList.appendChild(li);
            });
        } else {
            modalArticlesList.innerHTML = '<li>لا توجد مقالات مقترحة حالياً.</li>';
        }

        modal.classList.add('visible');
    };

    const closeModal = () => {
        modal.classList.remove('visible');
    };

    resourceBtns.forEach(btn => btn.addEventListener('click', openModal));
    closeModalBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
});