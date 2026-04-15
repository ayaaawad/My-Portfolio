const revealElements = document.querySelectorAll('.reveal');
const languageButtons = document.querySelectorAll('.lang-btn');
const translatableNodes = document.querySelectorAll('[data-i18n]');

const translations = {
  en: {
    'nav.education': 'Education',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'hero.role': 'Computer Engineer • Full Stack Developer',
    'hero.tagline':
      'Building practical technology from sensors to software, with real impact in healthcare, fintech, and smart systems.',
    'hero.ctaProjects': 'See My Projects',
    'hero.ctaContact': 'Get In Touch',
    'education.kicker': 'Academic Path',
    'education.title': 'Education',
    'education.degree': "Bachelor's Degree in Computer Engineering",
    'education.meta': 'Beirut Arab University • Class of 2026',
    'education.desc':
      'Graduated with a strong foundation in software engineering, hardware systems, databases, and computer networks. My study journey focused on turning engineering ideas into real, working products.',
    'skills.kicker': 'Technical Strengths',
    'skills.title': 'Skills',
    'skills.frontend.title': 'Frontend',
    'skills.frontend.1': 'HTML5, CSS3, JavaScript (ES6+)',
    'skills.frontend.2': 'Responsive UI and accessibility',
    'skills.frontend.3': 'Modern layout and UI animation',
    'skills.frontend.4': 'REST API integration',
    'skills.backend.title': 'Backend',
    'skills.backend.1': 'Node.js and Express foundations',
    'skills.backend.2': 'API design and endpoint structuring',
    'skills.backend.3': 'Authentication and validation basics',
    'skills.backend.4': 'Server-side business logic',
    'skills.databases.title': 'Databases',
    'skills.databases.1': 'MySQL relational modeling',
    'skills.databases.2': 'Entity relationships and normalization',
    'skills.databases.3': 'SQL querying and reporting',
    'skills.databases.4': 'Data integrity and constraints',
    'skills.networking.title': 'Networking',
    'skills.networking.1': 'Network support and troubleshooting',
    'skills.networking.2': 'IT operations and monitoring',
    'skills.networking.3': 'Infrastructure reliability practices',
    'skills.networking.4': 'System connectivity diagnostics',
    'skills.tools.title': 'Tools',
    'skills.tools.1': 'Git and GitHub workflow',
    'skills.tools.2': 'Postman and API testing',
    'skills.tools.3': 'VS Code and debugging toolkit',
    'skills.tools.4': 'Raspberry Pi and sensor integration',
    'projects.kicker': 'Featured Work',
    'projects.title': 'Projects',
    'projects.atm.title': 'Vein-Based ATM (Final Year Project)',
    'projects.atm.desc1':
      'A biometric ATM security system that combines hardware and software. The setup uses a Raspberry Pi connected to a camera with an NIR sensor to capture vein patterns, then verifies identity through a connected web application and database.',
    'projects.atm.desc2':
      'I worked on both implementation and testing, including system accuracy validation and full workflow integration.',
    'projects.bridge.title': 'Smart-Bridge (Smart Fridge Assistant)',
    'projects.bridge.desc1':
      'A smart kitchen assistant where users enter available ingredients and receive freshness alerts: yellow for near expiry and red for expired items.',
    'projects.bridge.desc2':
      'The system also recommends recipes based on ingredients currently in stock, helping users reduce waste and plan meals faster.',
    'projects.hospital.title': 'Hospital Management Database',
    'projects.hospital.desc1':
      'A MySQL relational database system designed for hospital operations, connecting patients, doctors, rooms, and surgeries in a structured model.',
    'projects.hospital.desc2':
      'The project demonstrates data integrity, relationship design, and practical healthcare data management workflows.',
    'experience.kicker': 'Professional Journey',
    'experience.title': 'Experience',
    'experience.it.title': 'IT and Network Department Experience',
    'experience.it.desc':
      'Hands-on technical experience in IT and networking tasks at UNRWA LFO, supporting operations and infrastructure reliability.',
    'experience.intern.title': 'Full Stack Development Internship',
    'experience.intern.meta': 'Digital Hub • UNRWA',
    'experience.intern.desc':
      'Completed a full stack development internship course focused on practical web development, real-world project execution, and modern development workflows.',
    'contact.kicker': "Let's Connect",
    'contact.title': 'Contact',
    'contact.desc':
      "I'm open to collaboration, full stack opportunities, and innovative engineering projects.",
    'contact.emailLabel': 'Email:',
    'contact.linkedinLabel': 'LinkedIn:',
    'contact.githubLabel': 'GitHub:',
    'footer.text': 'Engineer Aya • Computer Engineer & Full Stack Developer'
  },
  ar: {
    'nav.education': 'التعليم',
    'nav.skills': 'المهارات',
    'nav.projects': 'المشاريع',
    'nav.experience': 'الخبرة',
    'nav.contact': 'التواصل',
    'hero.role': 'مهندسة كمبيوتر • مطورة Full Stack',
    'hero.tagline':
      'أبني حلول تقنية عملية من الحساسات إلى البرمجيات، مع تأثير حقيقي في الصحة والتقنيات المالية والأنظمة الذكية.',
    'hero.ctaProjects': 'عرض مشاريعي',
    'hero.ctaContact': 'تواصل معي',
    'education.kicker': 'المسار الأكاديمي',
    'education.title': 'التعليم',
    'education.degree': 'بكالوريوس في هندسة الكمبيوتر',
    'education.meta': 'جامعة بيروت العربية • دفعة 2026',
    'education.desc':
      'تخرجت بأساس قوي في هندسة البرمجيات والأنظمة العتادية وقواعد البيانات وشبكات الحاسوب، مع تركيز على تحويل الأفكار الهندسية إلى تطبيقات عملية.',
    'skills.kicker': 'نقاط القوة التقنية',
    'skills.title': 'المهارات',
    'skills.frontend.title': 'الواجهة الأمامية',
    'skills.frontend.1': 'HTML5 و CSS3 و JavaScript (ES6+)',
    'skills.frontend.2': 'تصميم واجهات متجاوبة وإتاحة الاستخدام',
    'skills.frontend.3': 'تخطيطات حديثة وحركات واجهة جذابة',
    'skills.frontend.4': 'دمج واجهات REST API',
    'skills.backend.title': 'الواجهة الخلفية',
    'skills.backend.1': 'أساسيات Node.js و Express',
    'skills.backend.2': 'تصميم وبناء نقاط نهاية API',
    'skills.backend.3': 'أساسيات التحقق والتوثيق',
    'skills.backend.4': 'تطوير منطق الأعمال على الخادم',
    'skills.databases.title': 'قواعد البيانات',
    'skills.databases.1': 'تصميم قواعد بيانات MySQL العلائقية',
    'skills.databases.2': 'العلاقات بين الكيانات والتطبيع',
    'skills.databases.3': 'كتابة الاستعلامات والتقارير',
    'skills.databases.4': 'سلامة البيانات والقيود',
    'skills.networking.title': 'الشبكات',
    'skills.networking.1': 'دعم الشبكات وحل المشكلات',
    'skills.networking.2': 'عمليات تقنية المعلومات والمراقبة',
    'skills.networking.3': 'ممارسات موثوقية البنية التحتية',
    'skills.networking.4': 'تشخيص اتصال الأنظمة',
    'skills.tools.title': 'الأدوات',
    'skills.tools.1': 'سير عمل Git و GitHub',
    'skills.tools.2': 'Postman واختبار الـ API',
    'skills.tools.3': 'VS Code وأدوات تصحيح الأخطاء',
    'skills.tools.4': 'Raspberry Pi ودمج الحساسات',
    'projects.kicker': 'أبرز الأعمال',
    'projects.title': 'المشاريع',
    'projects.atm.title': 'صراف آلي ببصمة الأوردة (مشروع التخرج)',
    'projects.atm.desc1':
      'نظام أمان حيوي للصراف الآلي يجمع بين العتاد والبرمجيات، باستخدام Raspberry Pi موصول بكاميرا مع حساس NIR لالتقاط نمط الأوردة ثم التحقق عبر تطبيق ويب وقاعدة بيانات.',
    'projects.atm.desc2':
      'قمت بالتنفيذ والاختبار، بما في ذلك التحقق من دقة النظام وربط جميع مراحل العمل.',
    'projects.bridge.title': 'Smart-Bridge (مساعد الثلاجة الذكية)',
    'projects.bridge.desc1':
      'مساعد مطبخ ذكي يسمح للمستخدم بإدخال المكونات المتوفرة مع تنبيهات الصلاحية: أصفر لقرب الانتهاء وأحمر للمنتهي.',
    'projects.bridge.desc2':
      'يقترح النظام أيضا وصفات بناء على المكونات الحالية لتقليل الهدر وتسريع التخطيط للوجبات.',
    'projects.hospital.title': 'قاعدة بيانات إدارة المستشفى',
    'projects.hospital.desc1':
      'نظام MySQL علائقي لعمليات المستشفى يربط المرضى بالأطباء والغرف والعمليات الجراحية ضمن نموذج منظم.',
    'projects.hospital.desc2':
      'يعكس المشروع قدرة على تصميم العلاقات وضمان تكامل البيانات وإدارة سير العمل الصحي.',
    'experience.kicker': 'المسيرة المهنية',
    'experience.title': 'الخبرة',
    'experience.it.title': 'خبرة في قسم تقنية المعلومات والشبكات',
    'experience.it.desc':
      'خبرة عملية في مهام تقنية المعلومات والشبكات في UNRWA LFO لدعم التشغيل وموثوقية البنية التحتية.',
    'experience.intern.title': 'تدريب Full Stack Development',
    'experience.intern.meta': 'Digital Hub • UNRWA',
    'experience.intern.desc':
      'إكمال تدريب عملي في تطوير الويب المتكامل مع التركيز على تنفيذ المشاريع الواقعية وسير العمل الحديث.',
    'contact.kicker': 'لنبق على تواصل',
    'contact.title': 'التواصل',
    'contact.desc':
      'منفتحة على التعاون وفرص العمل في تطوير البرمجيات والمشاريع الهندسية المبتكرة.',
    'contact.emailLabel': 'البريد الإلكتروني:',
    'contact.linkedinLabel': 'لينكدإن:',
    'contact.githubLabel': 'جيت هاب:',
    'footer.text': 'المهندسة آية عوض • مهندسة كمبيوتر ومطورة Full Stack'
  }
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((element) => observer.observe(element));

function setLanguage(lang) {
  const selectedLanguage = translations[lang] ? lang : 'en';
  const dictionary = translations[selectedLanguage];

  document.documentElement.lang = selectedLanguage;
  document.documentElement.dir = selectedLanguage === 'ar' ? 'rtl' : 'ltr';
  document.body.classList.toggle('is-ar', selectedLanguage === 'ar');

  translatableNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionary[key]) {
      node.textContent = dictionary[key];
    }
  });

  languageButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.lang === selectedLanguage);
  });

  localStorage.setItem('aya-portfolio-language', selectedLanguage);
}

languageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    setLanguage(button.dataset.lang);
  });
});

const savedLanguage = localStorage.getItem('aya-portfolio-language');
setLanguage(savedLanguage || 'en');
