# تخمين الحيوان من صوته

مرحبًا بك في تطبيق "تخمين الحيوان من صوته"! في هذه اللعبة، ستستمع إلى صوت حيوان وتحاول معرفة أي حيوان يصدر هذا الصوت.

## الرحلات (User Journeys)

1. [بدء اللعبة](docs/journeys/start-game.md) - ابدأ لعبة جديدة واستمع إلى الأصوات.
2. [عرض النتيجة](docs/journeys/view-score.md) - عرض نتيجتك الحالية في اللعبة.
3. [التعرف على الحيوانات](docs/journeys/learn-about-animals.md) - تعرف على المزيد عن الحيوانات الموجودة في اللعبة.

## الخدمات الخارجية المستخدمة

- **ملفات صوت الحيوانات**: يتم استخدام ملفات صوتية مخزنة محليًا في مجلد `public/sounds`.
- **Umami Analytics**: لتتبع إحصاءات الموقع.
- **Sentry**: لتسجيل ومراقبة الأخطاء.

## المتغيرات البيئية

يرجى التأكد من ضبط المتغيرات البيئية التالية في ملف `.env`:

```
VITE_PUBLIC_APP_ID=your_app_id_here
VITE_PUBLIC_APP_ENV=production
VITE_PUBLIC_SENTRY_DSN=your_sentry_dsn_here
VITE_PUBLIC_UMAMI_WEBSITE_ID=your_umami_website_id_here
```

استبدل `your_app_id_here` وعناصر نائب أخرى بالمفاتيح الفعلية الخاصة بك.