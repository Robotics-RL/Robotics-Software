document.addEventListener('DOMContentLoaded', () => {
 const splashScreen = document.getElementById('splash-screen');
    const pageContainer = document.querySelector('.page-container');

    if (splashScreen && pageContainer) {
        gsap.set(pageContainer, { autoAlpha: 0 }); 

        const splashType = splashScreen.dataset.splashType;
        const tl = gsap.timeline({
            onComplete: () => {
                if (splashScreen) splashScreen.remove();
            }
        });

        if (splashType === 'main') {
            // الأنيميشن الرئيسي (أيقونتين)
            tl.fromTo("#robot-icon", { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" })
              .fromTo("#code-icon", { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.8")
              .to(".splash-title", { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.2");

        } else if (splashType === 'robotics') {
            // أنيميشن الروبوتات (أيقونة واحدة)
            tl.fromTo("#robot-icon", { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.0, ease: "elastic.out(1, 0.75)" })
              .to(".splash-title", { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.5");
        }
        
        // الخطوات المشتركة لكلا الصفحتين
        tl.to(".splash-progress", { width: "100%", duration: 1.5, ease: "power1.inOut" })
          .to(splashScreen, { opacity: 0, duration: 0.5, ease: "power1.in" })
          .to(pageContainer, { autoAlpha: 1, duration: 0.5 }, "-=0.3");
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

    // --- Accordion Logic for courses.html ---
    const accordionContainer = document.querySelector('.accordion-container');
    if (accordionContainer) {
        const accordionItems = accordionContainer.querySelectorAll('.accordion-item');
        accordionItems.forEach(item => {
            const header = item.querySelector('.accordion-header');
            header.addEventListener('click', () => {
                const content = item.querySelector('.accordion-content');
                const isActive = item.classList.contains('active');
                
                accordionItems.forEach(openItem => {
                    if (openItem !== item) {
                        openItem.classList.remove('active');
                        openItem.querySelector('.accordion-content').style.maxHeight = '0';
                    }
                });

                if (!isActive) {
                    item.classList.add('active');
                    content.style.maxHeight = content.scrollHeight + "px";
                } else {
                    item.classList.remove('active');
                    content.style.maxHeight = '0';
                }
            });
        });
    }
    
    // --- Persistent Completion Mode Logic ---
    if (localStorage.getItem('completionModeActive') === 'true') {
        body.classList.add('edit-mode');
    }

    // ===================================================================
    // 2. كود الإنجاز والمعدل (يعمل في صفحة المواد وصفحات الاختياري)
    // ===================================================================
    const editModeToggle = document.getElementById('edit-mode-toggle');
    const gradeModal = document.getElementById('grade-modal');

    if (editModeToggle || body.classList.contains('edit-mode')) {
        
        // ✨ الكود هنا كما هو من ملفك الأصلي
        const getStorageKey = () => {
            const path = window.location.pathname.toLowerCase();
            if (path.includes('/robotics/')) {
                return 'completedRoboticsCourses';
            } else if (path.includes('/software/')) {
                return 'completedSoftwareCourses';
            }
            return 'completedCoursesData';
        };
        const COMPLETED_COURSES_KEY = getStorageKey();
        
        // ✨ تم تعديل أسماء العناصر لتتوافق مع HTML الجديد
        const totalHoursEl = document.getElementById('total-hours');
        const uniElectiveHoursEl = document.getElementById('uni-elective-hours');
        const deptElectiveHoursEl = document.getElementById('dept-elective-hours');
        const year1HoursEl = document.getElementById('year-1-hours');
        const year2HoursEl = document.getElementById('year-2-hours');
        const year3HoursEl = document.getElementById('year-3-hours');
        const year4HoursEl = document.getElementById('year-4-hours');
        const cumulativeGpaTrackerEl = document.getElementById('cumulative-gpa-tracker');

        const gradePoints = { 'A+': 4.2, 'A': 4.0, 'A-': 3.75, 'B+': 3.5, 'B': 3.25, 'B-': 3.0, 'C+': 2.75, 'C': 2.5, 'C-': 2.25, 'D+': 2.0, 'D': 1.75, 'D-': 1.5, 'F': 0.5 };
        
        const getGradeEquivalent = (gpa) => {
            if (gpa >= 4.00) return "إمتياز";
            if (gpa >= 3.50) return "ممتاز";
            if (gpa >= 3.00) return "جيد جداً";
            if (gpa >= 2.50) return "جيد";
            if (gpa >= 2.00) return "مقبول";
            return "راسب";
        };

        const getCompletedCourses = () => JSON.parse(localStorage.getItem(COMPLETED_COURSES_KEY) || '[]');
        const saveCompletedCourses = (courses) => localStorage.setItem(COMPLETED_COURSES_KEY, JSON.stringify(courses));

        // ✨ دالة جديدة لحساب ساعات الجامعة الاختياري
        const calculateCompletedUniElectiveHours = () => {
            let total = 0;
            const completed = getCompletedCourses();
            completed.forEach(course => {
                if (typeof coursesData !== 'undefined' && coursesData[course.id]) {
                    const info = coursesData[course.id];
                    if (info && info.faculty === "متطلبات الجامعة" && info.department === "اختياري") {
                        total += parseInt(info.creditHours) || 0;
                    }
                }
            });
            return total;
        };

        // ✨ دالة جديدة لحساب ساعات القسم الاختياري
        const calculateCompletedDeptElectiveHours = () => {
            let total = 0;
            const completed = getCompletedCourses();
            completed.forEach(course => {
                if (typeof coursesData !== 'undefined' && coursesData[course.id]) {
                    const info = coursesData[course.id];
                    if (info && info.faculty === "قسم هندسة البرمجيات" && info.department === "اختياري") {
                        total += parseInt(info.creditHours) || 0;
                    }
                }
            });
            return total;
        };

        // ✨ تعديل دالة تحديث البيانات بالكامل
        const updateProgressAndGPA = () => {
            const completedCourses = getCompletedCourses();
            let totalCompletedHours = 0;
            let totalGpaHours = 0; 
            let totalCompletedPoints = 0;
            let yearHours = { 1: 0, 2: 0, 3: 0, 4: 0 };

            completedCourses.forEach(course => {
                if (typeof coursesData !== 'undefined' && coursesData[course.id]) {
                    const courseInfo = coursesData[course.id];
                    const hours = parseInt(courseInfo.creditHours) || 0;
                    totalCompletedHours += hours;

                    if (course.grade && gradePoints[course.grade]) {
                        totalGpaHours += hours;
                        totalCompletedPoints += hours * gradePoints[course.grade];
                    }
                    
                    if (courseInfo.year && yearHours.hasOwnProperty(courseInfo.year)) {
                         yearHours[courseInfo.year] += hours;
                    }
                }
            });
            
            const totalUniElectiveHours = calculateCompletedUniElectiveHours();
            const totalDeptElectiveHours = calculateCompletedDeptElectiveHours();

if (totalHoursEl) totalHoursEl.textContent = `${totalCompletedHours} / 132`;
            if (uniElectiveHoursEl) uniElectiveHoursEl.textContent = `${totalUniElectiveHours} / 9`;
            
            if (deptElectiveHoursEl) deptElectiveHoursEl.style.display = 'none'; 

            if (year1HoursEl) year1HoursEl.textContent = `${yearHours[1]} / 34`;
            if (year2HoursEl) year2HoursEl.textContent = `${yearHours[2]} / 29`;
            if (year3HoursEl) year3HoursEl.textContent = `${yearHours[3]} / 34`;
            
     // الكود الصحيح: يعرض ساعات السنة الرابعة المحسوبة مرة واحدة فقط
if (year4HoursEl) year4HoursEl.textContent = `${yearHours[4]} / 26`;
            if (cumulativeGpaTrackerEl) {
                if (totalGpaHours > 0) {
                    const gpa = totalCompletedPoints / totalGpaHours;
                    const equivalent = getGradeEquivalent(gpa);
                    cumulativeGpaTrackerEl.innerHTML = `${gpa.toFixed(2)} <small>(${equivalent})</small>`;
                } else {
                    cumulativeGpaTrackerEl.innerHTML = `0.00 <small>(لم تبدأ)</small>`;
                }
            }
        };
        
        const getGradeColorClass = (grade) => {
            if (!grade || grade === 'P') return '';
            const g = grade.toUpperCase();
            if (['A+', 'A', 'A-', 'B+'].includes(g)) return 'grade-excellent';
            if (['B', 'B-', 'C+', 'C'].includes(g)) return 'grade-good';
            if (['C-', 'D+'].includes(g)) return 'grade-average';
            if (['D', 'D-', 'F'].includes(g)) return 'grade-fail';
            return '';
        };

        const displayGradeOnCard = (link, grade) => {
            const existingBadge = link.querySelector('.grade-badge');
            if (existingBadge) existingBadge.remove();
            
            if (grade) {
                const gradeBadge = document.createElement('div');
                gradeBadge.className = 'grade-badge';
                
                const colorClass = getGradeColorClass(grade);
                if(colorClass) gradeBadge.classList.add(colorClass);

                gradeBadge.textContent = grade === 'P' ? 'ناجح' : grade;
                
                link.querySelector('.course-card-item').appendChild(gradeBadge);
            }
        };

        const loadState = () => {
             const completedCourses = getCompletedCourses();
             document.querySelectorAll('.course-card-link').forEach(link => {
                 const courseId = link.dataset.courseId;
                 const completedCourse = completedCourses.find(c => c.id === courseId);
                 
                 link.classList.remove('completed', 'grade-excellent', 'grade-good', 'grade-average', 'grade-fail');
                 
                 if (completedCourse) {
                     link.classList.add('completed');
                     displayGradeOnCard(link, completedCourse.grade); 
                     
                     const colorClass = getGradeColorClass(completedCourse.grade);
                     if (colorClass) {
                         link.classList.add(colorClass);
                     }
                 } else {
                     displayGradeOnCard(link, null);
                 }
             });
             updateProgressAndGPA();
        };

        const clearAllBtn = document.getElementById('clear-all-btn');
        if (clearAllBtn) {
            clearAllBtn.addEventListener('click', () => {
                if (confirm('⚠️ هل أنت متأكد من أنك تريد مسح كل المواد المنجزة؟ لا يمكن التراجع عن هذا الإجراء.')) {
                    localStorage.removeItem(COMPLETED_COURSES_KEY);
                    loadState();
                    showNotification('تم مسح جميع المواد المنجزة بنجاح', 'success');
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

        if (editModeToggle) {
            editModeToggle.checked = (localStorage.getItem('completionModeActive') === 'true');
            editModeToggle.addEventListener('change', () => {
                const isActive = editModeToggle.checked;
                body.classList.toggle('edit-mode', isActive);
                localStorage.setItem('completionModeActive', isActive);
            });
        }
        
        if (gradeModal) {
            const modalCourseTitle = document.getElementById('modal-course-title');
            const modalGradeSelector = document.getElementById('modal-grade-selector');
            const saveGradeBtn = document.getElementById('save-grade-btn');
            const cancelGradeBtn = document.getElementById('cancel-grade-btn');
            let currentCourseId = null;
            
            const modalActions = document.querySelector('.modal-actions');
            if (!document.getElementById('save-no-grade-btn')) {
                const saveNoGradeBtn = document.createElement('button');
                saveNoGradeBtn.id = 'save-no-grade-btn';
                saveNoGradeBtn.className = 'gpa-btn secondary';
                saveNoGradeBtn.textContent = 'إنجاز بدون علامة';
                modalActions.appendChild(saveNoGradeBtn);

                saveNoGradeBtn.addEventListener('click', () => {
                    if (currentCourseId) saveCourse('P');
                });
            }

            modalGradeSelector.innerHTML = Object.keys(gradePoints).map(g => `<button type="button" class="selector-btn" data-value="${g}">${g}</button>`).join('');

            modalGradeSelector.addEventListener('click', (e) => {
                if (e.target.classList.contains('selector-btn')) {
                    Array.from(modalGradeSelector.children).forEach(btn => btn.classList.remove('active'));
                    e.target.classList.add('active');
                }
            });

            function openGradeModal(link) {
                currentCourseId = link.dataset.courseId;
                modalCourseTitle.textContent = link.querySelector('h4').textContent;
                
                const completedCourses = getCompletedCourses();
                const courseData = completedCourses.find(c => c.id === currentCourseId);
                Array.from(modalGradeSelector.children).forEach(btn => btn.classList.remove('active'));
                
                const gradeToSelect = (courseData && courseData.grade && courseData.grade !== 'P') ? courseData.grade : 'A+';
                const gradeBtn = modalGradeSelector.querySelector(`[data-value="${gradeToSelect}"]`);
                if(gradeBtn) gradeBtn.classList.add('active');

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

            saveGradeBtn.addEventListener('click', () => {
                const selectedGradeEl = modalGradeSelector.querySelector('.active');
                if (!selectedGradeEl) {
                    alert('الرجاء اختيار علامة.');
                    return;
                }
                saveCourse(selectedGradeEl.dataset.value);
            });
            
            cancelGradeBtn.addEventListener('click', closeGradeModal);

            // ✨ تعديل منطق النقر على المواد لإضافة قيود الساعات الاختيارية
            document.body.addEventListener('click', (e) => {
                const link = e.target.closest('.course-card-link');
                if (link && body.classList.contains('edit-mode')) {
                    e.preventDefault();
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
                        const currentCourseId = link.dataset.courseId;
                        if (typeof coursesData !== 'undefined' && coursesData[currentCourseId]) {
                            const courseInfo = coursesData[currentCourseId];
                            const currentCourseHours = parseInt(courseInfo.creditHours) || 0;

                            if (courseInfo.faculty === "متطلبات الجامعة" && courseInfo.department === "اختياري") {
                                const existingUniElectiveHours = calculateCompletedUniElectiveHours();
                                if (existingUniElectiveHours + currentCourseHours > 9) {
                                    alert("لا يمكنك إنجاز أكثر من 9 ساعات من مواد الجامعة الاختيارية.");
                                    return;
                                }
                            }
                            
                            if (courseInfo.faculty === "قسم هندسة البرمجيات" && courseInfo.department === "اختياري") {
                                const existingDeptElectiveHours = calculateCompletedDeptElectiveHours();
                                if (existingDeptElectiveHours + currentCourseHours > 9) {
                                    alert("لا يمكنك إنجاز أكثر من 9 ساعات من مواد القسم الاختيارية.");
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

        const gradePoints = { 'A+': 4.2, 'A': 4.0, 'A-': 3.75, 'B+': 3.5, 'B': 3.25, 'B-': 3.0, 'C+': 2.75, 'C': 2.5, 'C-': 2.25, 'D+': 2.0, 'D': 1.75, 'D-': 1.5, 'F': 0.5 };

        const getGpaInfo = (gpa) => {
            let symbol, colorClass;
            if (gpa >= 4.2) { symbol = 'A+'; colorClass = 'grade-excellent'; }
            else if (gpa >= 4.0) { symbol = 'A'; colorClass = 'grade-excellent'; }
            else if (gpa >= 3.75) { symbol = 'A-'; colorClass = 'grade-excellent'; }
            else if (gpa >= 3.5) { symbol = 'B+'; colorClass = 'grade-good'; }
            else if (gpa >= 3.25) { symbol = 'B'; colorClass = 'grade-good'; }
            else if (gpa >= 3.0) { symbol = 'B-'; colorClass = 'grade-good'; }
            else if (gpa >= 2.75) { symbol = 'C+'; colorClass = 'grade-average'; }
            else if (gpa >= 2.5) { symbol = 'C'; colorClass = 'grade-average'; }
            else if (gpa >= 2.25) { symbol = 'C-'; colorClass = 'grade-average'; }
            else if (gpa >= 2.0) { symbol = 'D+'; colorClass = 'grade-fail'; }
            else if (gpa >= 1.75) { symbol = 'D'; colorClass = 'grade-fail'; }
            else if (gpa >= 1.5) { symbol = 'D-'; colorClass = 'grade-fail'; }
            else { symbol = 'F'; colorClass = 'grade-fail'; }
            return { symbol, colorClass };
        };

        const createCourseCard = (isRetake = false) => {
            const card = document.createElement('div');
            card.className = isRetake ? 'retake-course-card' : 'course-card';
            let cardHTML = `<div class="course-card-main"><div class="input-group"><label>عدد الساعات</label><div class="interactive-selector hours-selector">${[1, 2, 3, 4].map(h => `<button type="button" class="selector-btn" data-value="${h}">${h}</button>`).join('')}</div></div><div class="input-group"><label>${isRetake ? 'العلامة الجديدة' : 'العلامة النهائية'}</label><div class="interactive-selector ${isRetake ? 'new-grade-selector' : 'grade-selector'}">${Object.keys(gradePoints).map(g => `<button type="button" class="selector-btn" data-value="${g}">${g}</button>`).join('')}</div></div>`;
            if (isRetake) { cardHTML += `<div class="input-group"><label>العلامة القديمة</label><div class="interactive-selector old-grade-selector">${Object.keys(gradePoints).map(g => `<button type="button" class="selector-btn" data-value="${g}">${g}</button>`).join('')}</div></div>`; }
            cardHTML += `</div><div class="course-card-actions"><button type="button" class="remove-course-btn"><i class="bi bi-trash-fill"></i></button></div>`;
            card.innerHTML = cardHTML;
            const panel = isRetake ? retakeCoursesPanel : coursesPanel;
            panel.appendChild(card);
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
            card.querySelector('.remove-course-btn').addEventListener('click', () => card.remove());
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

            if(resultDisplay) resultDisplay.style.display = 'block';
            if(honorMessageEl) honorMessageEl.style.display = 'none';
            
            let resultHTML = '';
           if (semesterHours > 0) {
                const semesterGpa = semesterPoints / semesterHours;
                const { symbol: semesterSymbol, colorClass: semesterColorClass } = getGpaInfo(semesterGpa);
                resultHTML += `<div class="gpa-grid"><h3>المعدل الفصلي</h3><div><div class="gpa-value">${semesterGpa.toFixed(2)}</div><div class="gpa-grade ${semesterColorClass}">${semesterSymbol}</div></div></div>`;
               
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
                const { symbol: cumulativeSymbol, colorClass: cumulativeColorClass } = getGpaInfo(cumulativeGpa);
                resultHTML += `<div class="gpa-grid"><h3>المعدل التراكمي</h3><div><div class="gpa-value">${cumulativeGpa.toFixed(2)}</div><div class="gpa-grade ${cumulativeColorClass}">${cumulativeSymbol}</div></div></div>`;
            }
            
            if(hologramContent) hologramContent.innerHTML = resultHTML;
        };

        prevGpaInput.addEventListener('input', (e) => { /* ... (Input validation) ... */ });
        prevHoursInput.addEventListener('input', (e) => { /* ... (Input validation) ... */ });
        
        addCourseBtn.addEventListener('click', () => createCourseCard(false));
        if(addRetakeCourseBtn) addRetakeCourseBtn.addEventListener('click', () => createCourseCard(true));
        calculateBtn.addEventListener('click', calculateGPA);
        if(cumulativeToggle) cumulativeToggle.addEventListener('change', () => previousGpaSection.classList.toggle('visible', cumulativeToggle.checked));
        
        if(retakeToggle) {
            retakeToggle.addEventListener('change', () => {
                const isVisible = retakeToggle.checked;
                retakeCoursesSection.classList.toggle('visible', isVisible);
                addRetakeCourseBtn.style.display = isVisible ? 'inline-flex' : 'none';
                if (isVisible && retakeCoursesPanel.children.length === 0) {
                    createCourseCard(true);
                }
                if (!isVisible) {
                    retakeCoursesPanel.innerHTML = '';
                }
            });
        }

        if(addRetakeCourseBtn) addRetakeCourseBtn.style.display = 'none';
        createCourseCard(false); createCourseCard(false); createCourseCard(false);
    }
    
    // --- Teacher Search Functionality ---
    const teacherSearchInput = document.getElementById('teacher-search-input');
    if (teacherSearchInput) { /* ... (Search logic) ... */ }

    // --- Image Modal Logic ---
    const showTreeBtn = document.getElementById('show-tree-btn');
    const treeModal = document.getElementById('image-modal-tree');
    if (showTreeBtn && treeModal) { /* ... (Modal logic) ... */ }

    const showGradesBtn = document.getElementById('show-grades-btn');
    const gradesModal = document.getElementById('image-modal-grades');
    if (showGradesBtn && gradesModal) { /* ... (Modal logic) ... */ }
});
// بديل للخطة الشجرية في حال لم يعمل الكود السابق
document.addEventListener('DOMContentLoaded', function() {
    const treeButton = document.getElementById('show-tree-btn');
    const treeModal = document.getElementById('image-modal-tree');
    
    if (treeButton && treeModal) {
        console.log('تم العثور على عناصر الخطة الشجرية');
        
        treeButton.addEventListener('click', function() {
            console.log('تم النقر على زر الخطة الشجرية');
            treeModal.classList.add('visible');
            document.body.style.overflow = 'hidden';
        });
        
        // إضافة مستمعي الأحداث للإغلاق
        const closeButtons = treeModal.querySelectorAll('.close-modal-btn, .gpa-btn');
        closeButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                treeModal.classList.remove('visible');
                document.body.style.overflow = '';
            });
        });
        
        // إغلاق عند النقر خارج المحتوى
        treeModal.addEventListener('click', function(e) {
            if (e.target === treeModal) {
                treeModal.classList.remove('visible');
                document.body.style.overflow = '';
            }
        });
    } else {
        console.error('لم يتم العثور على عناصر الخطة الشجرية');
        if (!treeButton) console.error('زر العرض غير موجود');
        if (!treeModal) console.error('مودال الخطة غير موجود');
    }
});