// ======================================================
// ✨ الكود الجديد (التحديث التلقائي) ✨
// ======================================================

if (window.performance.navigation.type === 2) {
    window.location.reload();
} else if (!sessionStorage.getItem('reloaded')) {
    sessionStorage.setItem('reloaded', 'true');
    window.location.reload();
} else {
    sessionStorage.removeItem('reloaded');
}

document.addEventListener('DOMContentLoaded', () => {

    // ===================================================================
    // ✨ متغيرات مشتركة متاحة لكل الصفحات ✨
    // ===================================================================
    const gradePoints = { 'A+': 4.2, 'A': 4.0, 'A-': 3.75, 'B+': 3.5, 'B': 3.25, 'B-': 3.0, 'C+': 2.75, 'C': 2.5, 'C-': 2.25, 'D+': 2.0, 'D': 1.75, 'D-': 1.5, 'F': 0.5 };
    const gpaGradeScale = [
        { threshold: 4.20, symbol: 'A+', rank: 'إمتياز', colorClass: 'excellent' },
        { threshold: 4.00, symbol: 'A', rank: 'إمتياز', colorClass: 'excellent' },
        { threshold: 3.75, symbol: 'A-', rank: 'ممتاز', colorClass: 'very-good' },
        { threshold: 3.50, symbol: 'B+', rank: 'ممتاز', colorClass: 'good' },
        { threshold: 3.25, symbol: 'B', rank: 'جيد جداً', colorClass: 'good' },
        { threshold: 3.00, symbol: 'B-', rank: 'جيد جداً', colorClass: 'good' },
        { threshold: 2.75, symbol: 'C+', rank: 'جيد', colorClass: 'passable' },
        { threshold: 2.50, symbol: 'C', rank: 'جيد', colorClass: 'passable' },
        { threshold: 2.25, symbol: 'C-', rank: 'مقبول', colorClass: 'passable' },
        { threshold: 2.00, symbol: 'D+', rank: 'مقبول', colorClass: 'pass' },
        { threshold: 1.75, symbol: 'D', rank: 'إنذار', colorClass: 'pass' },
        { threshold: 1.50, symbol: 'D-', rank: 'إنذار', colorClass: 'pass' },
        { threshold: 0.50, symbol: 'F', rank: 'راسب', colorClass: 'warning' },
    ];


    const getGpaDetails = (gpa) => gpaGradeScale.find(grade => gpa >= grade.threshold) || { symbol: 'F', rank: 'راسب', colorClass: 'fail' };
    const getGradeColorClass = (grade) => {
        if (!grade || grade === 'P') return 'grade-average';
        const g = grade.toUpperCase();
        if (['A+', 'A', 'A-'].includes(g)) return 'grade-excellent';
        if (['B+', 'B', 'B-'].includes(g)) return 'grade-good';
        if (['C+', 'C', 'C-'].includes(g)) return 'grade-average';
        if (['D+', 'D', 'D-', 'F'].includes(g)) return 'grade-fail';
        return '';
    };

    // ===================================================================
    // 1. الكود العام (يعمل على كل الصفحات)
    // ===================================================================
    function setupDynamicPageElements() {
        const courseLinks = document.querySelectorAll('.course-card-link');
        courseLinks.forEach(link => {
            const courseId = link.dataset.courseId;
            if (courseId && !link.id) {
                link.id = courseId;
            }
        });

        const teacherLinks = document.querySelectorAll('.teacher-link');
        teacherLinks.forEach(link => {
            try {
                const url = new URL(link.href);
                const emailSlug = url.searchParams.get('email');
                if (emailSlug && !link.id) {
                    link.id = emailSlug;
                }
            } catch (e) { }
        });
    }

    function applyHighlightFromUrl() {
        if (window.location.hash) {
            try {
                const id = decodeURIComponent(window.location.hash.substring(1));
                const targetElement = document.getElementById(id);
                if (targetElement) {
                    const parentTabContent = targetElement.closest('.tab-content');
                    if (parentTabContent) {
                        const year = parentTabContent.dataset.year;
                        const correspondingTabButton = document.querySelector(`.tab-btn[data-year="${year}"]`);
                        if (correspondingTabButton && !correspondingTabButton.classList.contains('active')) {
                            document.querySelectorAll('.tab-btn.active').forEach(btn => btn.classList.remove('active'));
                            document.querySelectorAll('.tab-content.active').forEach(content => content.classList.remove('active'));
                            correspondingTabButton.classList.add('active');
                            parentTabContent.classList.add('active');
                        }
                    }
                    setTimeout(() => {
                        targetElement.classList.add('highlighted-from-search');
                        targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        setTimeout(() => {
                            targetElement.classList.remove('highlighted-from-search');
                        }, 2500);
                    }, 150);
                }
            } catch (e) {
                console.error("Highlight feature failed:", e);
            }
        }
    }

    setupDynamicPageElements();
    applyHighlightFromUrl();
    const internalLinks = document.querySelectorAll('a[href]:not([href^="http"]):not([href^="#"])');
    internalLinks.forEach(link => {
        link.addEventListener('click', (event) => {
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

    if (typeof Typed !== 'undefined') {
        const typedTextElement = document.getElementById('typed-text');
        if (typedTextElement) {
            const typed = new Typed('#typed-text', {
                strings: ['قسم هندسة البرمجيات و علم الروبوتات', 'في جامعة العلوم والتكنولوجيا الأردنية'],
                typeSpeed: 60,
                backSpeed: 30,
                backDelay: 2000,
                loop: true,
                smartBackspace: true,
                showCursor: true, 
                cursorChar: '|',
            });
        }
    }

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

    const body = document.body;
    const isDesktop = window.matchMedia("(min-width: 769px)").matches;
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const closeSidebarBtn = document.getElementById('close-sidebar-btn');
    const overlay = document.getElementById('page-overlay');
    function openSidebar() { body.classList.add('sidebar-open'); overlay.classList.add('active'); }
    function closeSidebar() { body.classList.remove('sidebar-open'); overlay.classList.remove('active'); }
    if (hamburgerBtn) hamburgerBtn.addEventListener('click', openSidebar);
    if (closeSidebarBtn) closeSidebarBtn.addEventListener('click', closeSidebar);
    if (overlay) overlay.addEventListener('click', closeSidebar);

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
        if (activeAccordion) { activeAccordion.style.maxHeight = activeAccordion.scrollHeight + "px"; }
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
    if (editModeToggle) {
        editModeToggle.checked = localStorage.getItem('completionModeActive') === 'true';
        document.body.classList.toggle('edit-mode', editModeToggle.checked);
    }
    
    if (document.body.classList.contains('edit-mode') || editModeToggle) {
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
                const info = localCoursesData[course.id];
                if (info && info.faculty === "متطلبات الجامعة" && info.department === "اختياري") {
                    total += parseInt(info.creditHours) || 0;
                }
            });
            return total;
        };
        
        const updateProgressAndGPA = () => {
            if (Object.keys(localCoursesData).length === 0) { return; }

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
                    } else if (courseInfo.faculty === "متطلبات الجامعة" && courseInfo.department === "اختياري") {
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
        
        const loadState = () => {
            
             const completedCourses = getCompletedCourses();
             const isEditMode = document.body.classList.contains('edit-mode');
             
             document.querySelectorAll('.grade-badge-on-card').forEach(badge => badge.remove());
             
             document.querySelectorAll('.course-card-link').forEach(link => {
                 const courseId = link.dataset.courseId;
                 const cardItem = link.querySelector('.course-card-item');
                 const completedCourse = completedCourses.find(c => c.id === courseId);
                 
                 link.classList.remove('completed');
                 link.classList.remove('grade-excellent', 'grade-good', 'grade-average', 'grade-fail');
                 
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

                 if (completedCourse && cardItem) {
                     link.classList.add('completed');
                     
                     const gradeBadge = document.createElement('span');
gradeBadge.className = 'grade-badge';
                     
                     const gradeValue = completedCourse.grade;
                     if (gradeValue && gradeValue !== 'P') {
                         gradeBadge.textContent = gradeValue;
                     } else {
                         gradeBadge.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
                     }
                     
                     const colorClass = getGradeColorClass(gradeValue);
                     if(colorClass) {
                        gradeBadge.classList.add(colorClass);
                        link.classList.add(colorClass);
                     }
                     
                     cardItem.appendChild(gradeBadge);
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
                    e.stopPropagation();
                    if (link.classList.contains('completed')) {
                        if (confirm('هل تريد تعديل العلامة أم إزالة العلامة المتوقعة ؟\nOK = تعديل\nCancel = إزالة')) {
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
    if (gpaCommandCenter && !document.querySelector('body[data-page="my-courses"]')) {
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
        
        const createCourseCard = (isRetake = false) => {
            const card = document.createElement('div');
            card.className = isRetake ? 'retake-course-card' : 'course-card';
            let cardHTML = `<div class="course-card-main"><div class="input-group"><label>عدد الساعات</label><div class="interactive-selector hours-selector">${[1, 2, 3, 4].map(h => `<button type="button" class="selector-btn" data-value="${h}">${h}</button>`).join('')}</div></div><div class="input-group"><label>${isRetake ? 'العلامة الجديدة' : 'العلامة النهائية'}</label><div class="interactive-selector ${isRetake ? 'new-grade-selector' : 'grade-selector'}">${Object.keys(gradePoints).map(g => `<button type="button" class="selector-btn" data-value="${g}">${g}</button>`).join('')}</div></div>`;
            if (isRetake) { cardHTML += `<div class="input-group"><label>العلامة القديمة</label><div class="interactive-selector old-grade-selector">${Object.keys(gradePoints).map(g => `<button type="button" class="selector-btn" data-value="${g}">${g}</button>`).join('')}</div></div>`; }
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
                if (hours && grade) { semesterPoints += hours * gradePoints[grade]; semesterHours += hours; }
            });
            if(retakeCoursesPanel) {
                document.querySelectorAll('.retake-course-card').forEach(card => {
                    const hours = parseFloat(card.querySelector('.hours-selector .active')?.dataset.value);
                    const newGrade = card.querySelector('.new-grade-selector .active')?.dataset.value;
                    const oldGrade = card.querySelector('.old-grade-selector .active')?.dataset.value;
                    if (hours && newGrade && oldGrade) { cumulativeEffect += hours * (gradePoints[newGrade] - gradePoints[oldGrade]); }
                });
            }
            if (semesterHours === 0 && (!cumulativeToggle || !cumulativeToggle.checked) && cumulativeEffect === 0) {
                alert('الرجاء إضافة مواد لحساب المعدل.'); return;
            }
            if(resultDisplay) resultDisplay.classList.add('visible');
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

        let lastValidGpa = '';
        if (prevGpaInput) {
            prevGpaInput.addEventListener('input', (e) => {
                const value = e.target.value;
                if (value.includes(',')) { e.target.value = lastValidGpa; showNotification('الرجاء استخدام النقطة (.) بدلاً من الفاصلة (,) للمعدل.', 'error'); return; }
                if (!/^[0-9]*\.?[0-9]*$/.test(value) || parseFloat(value) > 4.20) {
                    e.target.value = lastValidGpa;
                    if(value !== lastValidGpa) { showNotification('المعدل يجب أن يكون رقماً بين 0 و 4.20', 'error'); }
                    return;
                }
                lastValidGpa = value;
            });
        }
        let lastValidHours = '';
        if (prevHoursInput) {
            prevHoursInput.addEventListener('input', (e) => {
                const value = e.target.value;
                if (!/^[0-9]*$/.test(value)) { e.target.value = lastValidHours; return; }
                if (parseInt(value) > 260) { e.target.value = lastValidHours; showNotification('لا يمكن إدخال أكثر من 260 ساعة مقطوعة.', 'error'); return; }
                lastValidHours = value;
            });
        }
        if (addCourseBtn) addCourseBtn.addEventListener('click', () => createCourseCard(false));
        if(addRetakeCourseBtn) addRetakeCourseBtn.addEventListener('click', () => createCourseCard(true));
        if (calculateBtn) calculateBtn.addEventListener('click', calculateGPA);
        if(cumulativeToggle) cumulativeToggle.addEventListener('change', () => { if (previousGpaSection) previousGpaSection.classList.toggle('visible', cumulativeToggle.checked); });
        if(retakeToggle) {
            if (addRetakeCourseBtn) { addRetakeCourseBtn.style.display = retakeToggle.checked ? 'inline-flex' : 'none'; }
            retakeToggle.addEventListener('change', () => {
                const isVisible = retakeToggle.checked;
                if (retakeCoursesSection) { retakeCoursesSection.classList.toggle('visible', isVisible); }
                if (addRetakeCourseBtn) { addRetakeCourseBtn.style.display = isVisible ? 'inline-flex' : 'none'; }
                if (isVisible && retakeCoursesPanel && retakeCoursesPanel.children.length === 0) { createCourseCard(true); }
                if (!isVisible && retakeCoursesPanel) { retakeCoursesPanel.innerHTML = ''; }
            });
        }
        if (coursesPanel && coursesPanel.children.length === 0) { createCourseCard(false); }
    }
    // ===================================================================
    // 5. كود عرض الخطة الشجرية لـ 2024 و 2025 (كود موحد لكلا التخصصين)
    // ===================================================================
    
    // وظيفة عامة للتحكم بفتح وغلق نوافذ الخطة الشجرية
    const setupTreeModal = (buttonId, modalId) => {
        const showTreeBtn = document.getElementById(buttonId);
        const treeModal = document.getElementById(modalId);
        
        if (showTreeBtn && treeModal) {
            // وظيفة الفتح
            showTreeBtn.addEventListener('click', function(e) { 
                e.preventDefault(); 
                treeModal.classList.add('visible'); 
                document.body.style.overflow = 'hidden'; 
            });
            
            // وظيفة الإغلاق عبر زر الـ X
            const closeButtons = treeModal.querySelectorAll('.close-modal-btn');
            closeButtons.forEach(btn => {
                btn.addEventListener('click', function() { 
                    treeModal.classList.remove('visible'); 
                    document.body.style.overflow = ''; 
                });
            });
            
            // وظيفة الإغلاق بالنقر خارج النافذة
            treeModal.addEventListener('click', function(e) {
                if (e.target === treeModal) { 
                    treeModal.classList.remove('visible'); 
                    document.body.style.overflow = ''; 
                }
            });
        }
    };

    // تطبيق الوظيفة على جميع المعرفات المحتملة لكلا التخصصين
    setupTreeModal('show-tree-btn-2025', 'image-modal-tree-2025');
    setupTreeModal('show-tree-btn-2024', 'image-modal-tree-2024');
    
    // لإضافة دعم للزر القديم في حال كان موجوداً في أي صفحة أخرى:
    setupTreeModal('show-tree-btn', 'image-modal-tree');

    const showGradesBtn = document.getElementById('show-grades-btn');
    const gradesModal = document.getElementById('image-modal-grades');
    if (showGradesBtn && gradesModal) {
        function openGradesModal(e) { e.preventDefault(); gradesModal.classList.add('visible'); document.body.style.overflow = 'hidden'; }
        function closeGradesModal() { gradesModal.classList.remove('visible'); document.body.style.overflow = ''; }
        showGradesBtn.addEventListener('click', openGradesModal);
        const closeButtons = gradesModal.querySelectorAll('.close-modal-btn');
        closeButtons.forEach(btn => btn.addEventListener('click', closeGradesModal));
        gradesModal.addEventListener('click', (e) => { if (e.target === gradesModal) closeGradesModal(); });
    }

    window.addEventListener('pageshow', function(event) {
        if (event.persisted) {
            const isEditModeActive = localStorage.getItem('completionModeActive') === 'true';
            document.body.classList.toggle('edit-mode', isEditModeActive);
            const editToggle = document.getElementById('edit-mode-toggle');
            if (editToggle) { editToggle.checked = isEditModeActive; }
            if (typeof loadState === 'function') { loadState(); }
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

    const modal = document.getElementById('resources-modal');
    if (modal) {
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
            } else { modalVideosList.innerHTML = '<li>لا توجد فيديوهات مقترحة حالياً.</li>'; }
            modalArticlesList.innerHTML = ''; 
            if (articles.length > 0) {
                articles.forEach(article => {
                    const li = document.createElement('li');
                    li.innerHTML = `<a href="${article.url}" target="_blank" rel="noopener noreferrer">${article.title}</a>`;
                    modalArticlesList.appendChild(li);
                });
            } else { modalArticlesList.innerHTML = '<li>لا توجد مقالات مقترحة حالياً.</li>'; }
            modal.classList.add('visible');
        };
        const closeModal = () => { modal.classList.remove('visible'); };
        resourceBtns.forEach(btn => btn.addEventListener('click', openModal));
        closeModalBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) { closeModal(); }
        });
    }

    // ===================================================================
    // 4. كود خاص بصفحة "موادي هذا الفصل" (My Courses)
    // ===================================================================
    const myCoursesPage = document.querySelector('body[data-page="my-courses"]');
    if (myCoursesPage) {
        const searchInput = document.getElementById('my-courses-search-input');
        const searchResultsList = document.getElementById('search-results-list');
        const selectedCoursesContainer = document.getElementById('selected-courses-container');
        const gradeInputToggle = document.getElementById('grade-input-toggle');
        const cumulativeToggle = document.getElementById('cumulative-toggle');
        const previousGpaSection = document.getElementById('previous-gpa-section');
        const prevGpaInput = document.getElementById('prev-gpa');
        const prevHoursInput = document.getElementById('prev-hours');
        const gpaResultSection = document.getElementById('gpa-result-section');
        const hologramContent = document.getElementById('hologram-content');
        
        let allCourses = [];
        let selectedCourses = [];

        if (typeof coursesData !== 'undefined') {
            for (const key in coursesData) {
                if (coursesData.hasOwnProperty(key)) {
                    allCourses.push({ id: key, ...coursesData[key] });
                }
            }
        }
        
        const loadSelectedCourses = () => {
            const storedCourses = JSON.parse(localStorage.getItem('myCourses') || '[]');
            selectedCourses = storedCourses;
            renderSelectedCourses();
        };

        const saveSelectedCourses = () => {
            localStorage.setItem('myCourses', JSON.stringify(selectedCourses));
        };
        
        const renderSelectedCourses = () => {
            selectedCoursesContainer.innerHTML = '';
            selectedCourses.forEach(course => {
                const courseInfo = allCourses.find(c => c.id === course.id);
                 if (courseInfo) { // Fix: Added check for courseInfo to prevent crashes
                    const cardLink = document.createElement('a');
                    cardLink.className = 'course-card-link';

                    if (gradeInputToggle.checked) {
                        cardLink.href = '#';
                        cardLink.setAttribute('data-course-id', course.id);
                        cardLink.classList.add('grade-mode');
                        if (course.grade) {
                            cardLink.classList.add('completed');
                            cardLink.classList.add(getGradeColorClass(course.grade));
                        }
                    } else {
                        cardLink.href = `course-details.html?course=${course.id}`;
                    }

                    const categoryClass = getCourseCategoryClass(courseInfo.code);

                    const cardItem = document.createElement('div');
                    cardItem.className = 'course-card-item';
                    cardItem.innerHTML = `
                        <div class="course-category ${categoryClass}"></div>
                        <div class="course-card-content">
                            <h4>${courseInfo.title}</h4>
                            <p>${courseInfo.code}</p>
                        </div>
                        <span class="course-hours">${courseInfo.creditHours}</span>
                    `;

                    const removeButton = document.createElement('button');
                    removeButton.innerHTML = '<i class="bi bi-x-circle-fill"></i>';
                    removeButton.className = 'remove-course-btn';
                    removeButton.addEventListener('click', (e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        if (confirm(`هل أنت متأكد من حذف مادة ${courseInfo.title}؟`)) {
                            selectedCourses = selectedCourses.filter(c => c.id !== course.id);
                            saveSelectedCourses();
                            renderSelectedCourses();
                            calculateExpectedGPA();
                        }
                    });
                    cardItem.appendChild(removeButton);

                    if (gradeInputToggle.checked && course.grade) {
                        const gradeBadge = document.createElement('span');
                        gradeBadge.className = `grade-badge-on-card ${getGradeColorClass(course.grade)}`;
                        gradeBadge.textContent = course.grade;
                        cardItem.appendChild(gradeBadge);
                    }
                    
                    cardLink.appendChild(cardItem);
                    selectedCoursesContainer.appendChild(cardLink);
                }
            });
            calculateExpectedGPA();
        };

        const getCourseCategoryClass = (code) => {
            if (code.includes('ذ.ص') || code.includes('ع ر')) return 'ai';
            if (code.includes('ر') && !code.includes('ع أ') || code.includes('ع أ 101ر')) return 'math';
            if (code.includes('ع أ') && code.includes('ر')) return 'math';
            if (code.includes('ف')) return 'physics';
            if (code.includes('هك') || code.includes('مك 320')) return 'electronics';
            if (code.includes('مك')) return 'mechanics';
            if (code.includes('ع ح') || code.includes('هـ ب') || code.includes('ن م')) return 'programming';
            return 'general';
        };

        const calculateExpectedGPA = () => {
            const isCumulativeEnabled = cumulativeToggle.checked;
            const prevGpa = isCumulativeEnabled ? parseFloat(prevGpaInput.value) || 0 : 0;
            const prevHours = isCumulativeEnabled ? parseInt(prevHoursInput.value) || 0 : 0;

            let semesterPoints = 0;
            let semesterHours = 0;

            selectedCourses.forEach(course => {
                if (course.grade && course.grade !== 'P') {
                    const courseInfo = allCourses.find(c => c.id === course.id);
                    if(courseInfo) { // Fix: Added check for courseInfo
                        const hours = parseInt(courseInfo.creditHours); 
                        const points = gradePoints[course.grade];
                        semesterPoints += hours * points;
                        semesterHours += hours;
                    }
                }
            });
            
            if (gradeInputToggle.checked) {
                let resultHTML = '';
                let isHonorRoll = false;

                if (semesterHours > 0) {
                    const semesterGPA = semesterPoints / semesterHours;
                    const semesterDetails = getGpaDetails(semesterGPA);
                    isHonorRoll = semesterGPA >= 3.75 && semesterHours >= 12;

                    resultHTML += `<div class="gpa-result-card ${semesterDetails.colorClass}">
                        <div class="result-numerical">${semesterGPA.toFixed(2)} (${semesterDetails.symbol})</div>
                        <div class="result-details-group">
                            <div class="result-title">المعدل الفصلي</div>
                            <div class="result-rank">${semesterDetails.rank}</div>
                            <div class="result-symbol">عدد الساعات: ${semesterHours}</div>
                        </div>
                    </div>`;
                } else {
                    resultHTML += `<div class="gpa-result-card passable">
                        <div class="result-numerical">0.00 (F)</div>
                        <div class="result-details-group">
                            <div class="result-title">المعدل الفصلي</div>
                            <div class="result-rank">لم تبدأ بعد</div>
                            <div class="result-symbol">عدد الساعات: 0</div>
                        </div>
                    </div>`;
                }

                if (isCumulativeEnabled) {
                    const totalPoints = (prevGpa * prevHours) + semesterPoints;
                    const totalHours = prevHours + semesterHours;
                    const cumulativeGpa = totalHours > 0 ? totalPoints / totalHours : 0;
                    const cumulativeDetails = getGpaDetails(cumulativeGpa);

                    resultHTML += `<div class="gpa-result-card ${cumulativeDetails.colorClass}">
                        <div class="result-numerical">${cumulativeGpa.toFixed(2)} (${cumulativeDetails.symbol})</div>
                        <div class="result-details-group">
                            <div class="result-title">المعدل التراكمي</div>
                            <div class="result-rank">${cumulativeDetails.rank}</div>
                            <div class="result-symbol">عدد الساعات: ${totalHours}</div>
                        </div>
                    </div>`;
                }
                
                if (resultHTML !== '') {
                    hologramContent.innerHTML = resultHTML;
                    gpaResultSection.classList.add('visible'); // Fix: changed from style.display = 'block'
                    if (isHonorRoll) {
                        document.getElementById('honor-roll-message').classList.add('visible');
                        document.getElementById('honor-roll-message').innerHTML = '🎉 <strong>مبروك! أنت على قائمة الشرف.</strong>';
                    }
                } else {
                    gpaResultSection.classList.remove('visible'); // Fix: changed from style.display = 'none'
                    hologramContent.innerHTML = '';
                    document.getElementById('honor-roll-message').classList.remove('visible');
                }
            } else {
                gpaResultSection.classList.remove('visible'); // Fix: changed from style.display = 'none'
                hologramContent.innerHTML = '';
                document.getElementById('honor-roll-message').classList.remove('visible');
            }
        };

        const saveCumulativeData = () => {
            const data = {
                gpa: prevGpaInput.value,
                hours: prevHoursInput.value
            };
            localStorage.setItem('myCoursesCumulativeData', JSON.stringify(data));
        };

        const loadCumulativeData = () => {
            const storedData = JSON.parse(localStorage.getItem('myCoursesCumulativeData') || '{}');
            if (storedData.gpa) {
                prevGpaInput.value = storedData.gpa;
            }
            if (storedData.hours) {
                prevHoursInput.value = storedData.hours;
            }
            if (previousGpaSection) {
                 previousGpaSection.style.maxHeight = cumulativeToggle.checked ? '200px' : '0';
                 previousGpaSection.style.opacity = cumulativeToggle.checked ? '1' : '0';
            }
        };

        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.trim();
            if (searchTerm.length > 0) {
                const results = allCourses.filter(course => 
                    course.title.includes(searchTerm) || course.code.includes(searchTerm)
                );
                searchResultsList.innerHTML = '';
                if (results.length > 0) {
                    results.forEach(course => {
                        const courseEl = document.createElement('div');
                        courseEl.className = 'result-item';
                        courseEl.innerHTML = `
                            <div class="result-text" style="text-align: right;">
                                <div class="result-name">${course.title}</div>
                                <div class="result-type">${course.code} - ${course.creditHours}</div>
                            </div>
                        `;
                        courseEl.addEventListener('click', () => {
                            if (!selectedCourses.find(c => c.id === course.id)) {
                                selectedCourses.push({ id: course.id });
                                saveSelectedCourses();
                                renderSelectedCourses();
                                searchInput.value = '';
                                searchResultsList.style.display = 'none';
                            } else {
                                alert('المادة مضافة بالفعل!');
                            }
                        });
                        searchResultsList.appendChild(courseEl);
                    });
                    searchResultsList.style.display = 'block';
                } else {
                    searchResultsList.innerHTML = '<div class="result-item no-results">لا توجد نتائج مطابقة</div>';
                    searchResultsList.style.display = 'block';
                }
            } else {
                searchResultsList.style.display = 'none';
            }
        });
        
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !searchResultsList.contains(e.target)) {
                searchResultsList.style.display = 'none';
            }
        });

        gradeInputToggle.addEventListener('change', () => {
            renderSelectedCourses();
        });

        cumulativeToggle.addEventListener('change', () => {
            if (previousGpaSection) {
                previousGpaSection.style.maxHeight = cumulativeToggle.checked ? '200px' : '0';
                previousGpaSection.style.opacity = cumulativeToggle.checked ? '1' : '0';
            }
            saveCumulativeData();
            calculateExpectedGPA();
        });

        if (prevGpaInput) {
            let lastValidGpa = '';
            prevGpaInput.addEventListener('input', (e) => {
                const value = e.target.value;
                if (value.includes(',')) { e.target.value = lastValidGpa; showNotification('الرجاء استخدام النقطة (.) بدلاً من الفاصلة (,) للمعدل.', 'error'); return; }
                if (!/^[0-9]*\.?[0-9]*$/.test(value) || parseFloat(value) > 4.20) {
                    e.target.value = lastValidGpa;
                    if(value !== lastValidGpa) { showNotification('المعدل يجب أن يكون رقماً بين 0 و 4.20', 'error'); }
                    return;
                }
                lastValidGpa = value;
                saveCumulativeData();
                calculateExpectedGPA();
            });
        }
        if (prevHoursInput) {
            let lastValidHours = '';
            prevHoursInput.addEventListener('input', (e) => {
                const value = e.target.value;
                if (!/^[0-9]*$/.test(value)) { e.target.value = lastValidHours; return; }
                if (parseInt(value) > 260) { e.target.value = lastValidHours; showNotification('لا يمكن إدخال أكثر من 260 ساعة مقطوعة.', 'error'); return; }
                lastValidHours = value;
                saveCumulativeData();
                calculateExpectedGPA();
            });
        }
        
        const gradeModal = document.getElementById('grade-modal');
        const modalCourseTitle = document.getElementById('modal-course-title');
        const modalGradeSelector = document.getElementById('modal-grade-selector');
        const saveGradeBtn = document.getElementById('save-grade-btn');
        const cancelGradeBtn = document.getElementById('cancel-grade-btn');
        let currentCourseId = null;

        if (modalGradeSelector) {
            modalGradeSelector.innerHTML = Object.keys(gradePoints).map(g => `<button type="button" class="selector-btn" data-value="${g}">${g}</button>`).join('');
            modalGradeSelector.addEventListener('click', (e) => {
                if (e.target.classList.contains('selector-btn')) {
                    Array.from(modalGradeSelector.children).forEach(btn => btn.classList.remove('active'));
                    e.target.classList.add('active');
                }
            });
        }

        function openGradeModalForMyCourses(link) {
            currentCourseId = link.dataset.courseId;
            const courseInfo = allCourses.find(c => c.id === currentCourseId);
            const selectedCourse = selectedCourses.find(c => c.id === currentCourseId);
            if (!courseInfo) { return; } // Add a safety check here to prevent crashes
            if (modalCourseTitle) modalCourseTitle.textContent = courseInfo.title;
            
            Array.from(modalGradeSelector.children).forEach(btn => btn.classList.remove('active'));
            if (selectedCourse && selectedCourse.grade) {
                const gradeBtn = modalGradeSelector.querySelector(`[data-value="${selectedCourse.grade}"]`);
                if (gradeBtn) gradeBtn.classList.add('active');
            } else {
                modalGradeSelector.querySelector('[data-value="A+"]').classList.add('active');
            }
            gradeModal.classList.add('visible');
        }

      document.body.addEventListener('click', (e) => {
    const link = e.target.closest('.course-card-link');
    if (link && gradeInputToggle.checked) {
        e.preventDefault();
        e.stopPropagation();

        const courseId = link.dataset.courseId;
        const selectedCourse = selectedCourses.find(c => c.id === courseId);

        if (selectedCourse && selectedCourse.grade) {
            if (confirm('هل تريد تعديل العلامة أم إزالة العلامة ؟\nOK = تعديل\nCancel = إزالة')) {
                openGradeModalForMyCourses(link);
            } else {
                selectedCourses = selectedCourses.map(c => c.id === courseId ? { id: courseId } : c);
                saveSelectedCourses();
                renderSelectedCourses();
            }
        } else {
            openGradeModalForMyCourses(link);
        }
    }
});
        saveGradeBtn.addEventListener('click', () => {
            const selectedGradeEl = modalGradeSelector.querySelector('.selector-btn.active');
            if (selectedGradeEl) {
                const grade = selectedGradeEl.dataset.value;
                const courseToUpdate = selectedCourses.find(c => c.id === currentCourseId);
                if (courseToUpdate) {
                    courseToUpdate.grade = grade;
                    saveSelectedCourses();
                    renderSelectedCourses();
                    gradeModal.classList.remove('visible');
                }
            }
        });

        cancelGradeBtn.addEventListener('click', () => {
            gradeModal.classList.remove('visible');
        });
        
        loadSelectedCourses();
        loadCumulativeData();
    }

});


