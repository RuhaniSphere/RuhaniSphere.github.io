 /* ===========================
 روحانی اسفیئر - اسکرپٹ جے ایس
 ============================*/

 // ========== انگریزی میں ڈیٹا ==========
 const rohaniServices = [
 { نام: "کالے جادو کا خاتمہ" , آئیکن: "🔱" , desc: "قرآنی آیات کے ذریعے کالے جادو کی رکاوٹوں کا مکمل خاتمہ" },
 { نام: "طلاق کی روک تھام" , آئیکن: "💍" , desc: "روحانی رہنمائی جس کا مقصد خاندانی تعلقات کی حفاظت اور اسے برقرار رکھنا ہے" },
 { نام: "جن اینڈ ایول اسپرٹ کیور" ، آئیکن: "🌙" ، تفصیل: "جنات کے نقصان دہ اثرات اور منفی توانائی کے سائے سے نجات" },
 { نام: "شادی کی راہ میں حائل رکاوٹیں ہٹانا" , آئیکن: "💒" , desc: "شادی کی ترتیب میں غیر متوقع رکاوٹوں یا منظم رکاوٹوں کو ختم کرنا" },
 { نام: "کاروباری رکاوٹ کا علاج" , آئیکن: "💼" , desc: "دائمی کاروباری ناکامیوں اور نقصانات کے پیچھے روحانی عناصر کا تدارک" },
 { نام: "بچوں کی برکت" , آئیکن: "🤲" , desc: "متمرکز روحانی دعائیں اور اولاد کے خواہشمند جوڑوں کے لیے علاج" },
 { نام: "رشتوں کی ہم آہنگی" , آئیکن: "🤝" , desc: "گہرے تنازعات کو حل کرنا اور خاندانی رشتہ داروں کے درمیان باہمی پیار پیدا کرنا" },
 { نام: "دائمی بیماریوں سے نجات" , آئیکن: "🌿" , desc: "نبیانہ علاج کے ذریعے جسمانی بیماریوں سے خالص مکمل صحت یابی کی تلاش" },
 { نام: "دل اور روح کی شفایابی" , آئیکن: "❤️‍🩹" , desc: "روحانی شفایابی اندرونی سکون اور دل سے متعلق پریشانیوں کے لیے ڈیزائن کیا گیا ہے" },
 { نام: "غیر وضاحتی بیماری کا علاج" , آئیکن: "🩺" , desc: "روحانی مجبوریوں کی وجہ سے مافیا جسمانی بیماریوں کا علاج" },
 { نام: "خاندانی اور بچوں کی اصلاح" , آئیکن: "👨‍👩‍👧" , desc: "نافرمان خاندان کے افراد کی مؤثر طریقے سے صالح راستے کی طرف رہنمائی کرنا" },
 { نام: "ازدواجی امن اور رہنمائی" , آئیکن: "🕊️" , desc: "زندگی میاں بیوی کے درمیان فطری باہمی مفاہمت اور محبت کی بحالی" },
 ];

 const quranCourses = [
 {
 نام: "قائدہ" ،
 آئیکن: "📗" ،
 desc: "قرآن پڑھنا شروع کرنے کے لیے ضروری گائیڈ - بنیادی حروف تہجی میں مہارت حاصل کرنا" ،
 سلگ: "قائدہ"
 }،
 {
 نام: "تجوید" ،
 آئیکن: "🎙️" ،
 desc: "انتہائی درست تلفظ اور خوبصورت صوتی تال کے اصول سیکھیں" ،
 سلگ: "تجوید"
 }،
 {
 نام: "حفز" ،
 آئیکن: "📖" ،
 desc: "قرآن پاک کو روزانہ کی آن لائن نگرانی کے حسب ضرورت نظام الاوقات کے ساتھ یاد رکھیں" ،
 سلگ: "Hifz"
 }،
 {
 نام: "ترجمہ" ،
 آئیکن: "🌍" ،
 desc: "مقدس آیات کا درست ترجمہ کرکے گہری لغوی بصیرت حاصل کریں" ،
 سلگ: "ترجمہ"
 }،
 {
 نام: "تفسیر" ،
 آئیکن: "💡" ،
 desc: "اسلامی نصوص کی جامع تفسیر اور گہری سیاق و سباق کی حکمت حاصل کریں" ،
 سلگ: "تفسیر"
 }،
 ];

 const WA_NUMBER = "923038853329" ; // واٹس ایپ نمبر (انٹل فارمیٹ)

 // عالمی سطح پر انتخاب کی تفصیلات کو ٹریک کریں۔
 let currentSelectionType = null ; // 'سروس'، 'کورس'، یا کالعدم
 let currentSelectionValue = "" ;

 // ========== آبادی ڈراپ ڈاؤن ==========
 فنکشن populateDropdowns () {
 const service منتخب کریں = دستاویز۔ getElementById ( "selectService" )؛
 const courseSelect = دستاویز ۔ getElementById ( "سلیکٹ کورس" )؛

 اگر ( خدمت منتخب کریں ) {
 سروس منتخب کریں innerHTML = `<option value="">-- ایک سروس کا انتخاب کریں --</option>` +
 rohaniServices نقشہ ( s => `<option value=" ${ s . name } "> ${ s . name } </option>` )۔ شمولیت ( "" )؛
 }
 اگر ( کورس سلیکٹ ) {
 کورس منتخب کریں innerHTML = `<option value="">-- ایک کورس منتخب کریں --</option>` +
 قرآنی کورسز نقشہ ( c => `<option value=" ${ c . name } "> ${ c . name } </option>` )۔ شمولیت ( "" )؛
 }
 }

 // ========== رینڈر کارڈ ==========
 فنکشن renderRohaniServices () {
 const grid = دستاویز ۔ getElementById ( "rohaniServicesGrid" )؛
 گرڈ innerHTML = rohaniServices . نقشہ ( s => `
 <div class="service-card animate-on-scroll">
 <div class="card-icon"> ${ s ۔ آئیکن } </div>
 <div class="card-name"> ${ s ۔ نام } </div>
 <div class="card-desc"> ${ s ۔ desc } </div>
 <a href="#contact" class="card-btn" onclick="openContactForService(' ${ s . name } ')"> 📲 ہم سے رابطہ کریں</a>
 </div>
 ` ) شمولیت ( "" )؛
 }

 فنکشن رینڈر کورسز () {
 const grid = دستاویز ۔ getElementById ( "coursesGrid" )؛
 گرڈ innerHTML = قرآنی کورسز ۔ نقشہ ( c => `
 <div class="course-card animate-on-scroll">
 <div class="card-icon"> ${ c . آئیکن } </div>
 <div class="card-name"> ${ c . نام } </div>
 <div class="card-desc"> ${ c . desc } </div>
 <a href="#contact" class="card-btn" onclick="openContactForCourse(' ${ c . name } ')"> 📲 ابھی رجسٹر کریں</a>
 </div>
 ` ) شمولیت ( "" )؛
 }

 // ========== رابطہ فارم منطق ==========
 فنکشن resetContactForm () {
 // دوہری ڈراپ ڈاؤن اختیارات دکھاتے ہوئے براہ راست نیویگیشن حالت پر واپس جائیں۔
 دستاویز getElementById ( "generalDropdownsGroup" )۔ انداز ڈسپلے = "بلاک" ؛
 دستاویز getElementById ( "آٹوفیل فیلڈ گروپ" )۔ انداز ڈسپلے = "کوئی نہیں" ؛
 دستاویز getElementById ( "messageFieldGroup" )۔ انداز ڈسپلے = "بلاک" ؛

 دستاویز getElementById ( "selectService" )۔ قدر = "" ؛
 دستاویز getElementById ( "سلیکٹ کورس" )۔ قدر = "" ؛
 دستاویز getElementById ( "autofillValue" )۔ قدر = "" ؛
 دستاویز getElementById ( "پیغام" )۔ قدر = "" ؛
 دستاویز getElementById ( "پیغام" )۔ placeholder = "اپنا سوال یا تشویش یہاں لکھیں..." ;

 currentSelectionType = null ;
 currentSelectionValue = "" ;
 }

 فنکشن openContactForCourse ( کورس کا نام ) {
 // کورس کارڈ سے انتخاب کرتے وقت عمل میں لایا جاتا ہے۔
 دستاویز getElementById ( "generalDropdownsGroup" )۔ انداز ڈسپلے = "کوئی نہیں" ؛
 دستاویز getElementById ( "آٹوفیل فیلڈ گروپ" )۔ انداز ڈسپلے = "بلاک" ؛
 دستاویز getElementById ( "آٹوفیل لیبل" )۔ textContent = "منتخب کورس" ؛
 دستاویز getElementById ( "autofillValue" )۔ قدر = کورس کا نام ؛
 دستاویز getElementById ( "messageFieldGroup" )۔ انداز ڈسپلے = "کوئی نہیں" ؛

 currentSelectionType = "کورس" ؛
 currentSelectionValue = کورس کا نام ؛
 }

 فنکشن openContactForService ( serviceName ) {
 // سروس کارڈ سے انتخاب کرتے وقت عمل میں لایا گیا۔
 دستاویز getElementById ( "generalDropdownsGroup" )۔ انداز ڈسپلے = "کوئی نہیں" ؛
 دستاویز getElementById ( "آٹوفیل فیلڈ گروپ" )۔ انداز ڈسپلے = "بلاک" ؛
 دستاویز getElementById ( "آٹوفیل لیبل" )۔ textContent = "منتخب سروس" ؛
 دستاویز getElementById ( "autofillValue" )۔ قدر = خدمت کا نام ؛
 دستاویز getElementById ( "messageFieldGroup" )۔ انداز ڈسپلے = "بلاک" ؛
 دستاویز getElementById ( "پیغام" )۔ placeholder = ` ${ serviceName } سے متعلق اپنی تفصیلات یا سوال یہاں لکھیں...` ;

 currentSelectionType = "سروس" ؛
 currentSelectionValue = serviceName ;
 }

 فنکشن ہینڈل جنرل سروس سلیکٹ () {
 const val = دستاویز ۔ getElementById ( "selectService" )۔ قدر
 اگر ( ویل ) {
 // متضاد کورس کے انتخاب کو خارج کریں۔
 دستاویز getElementById ( "سلیکٹ کورس" )۔ قدر = "" ؛
 دستاویز getElementById ( "messageFieldGroup" )۔ انداز ڈسپلے = "بلاک" ؛
 دستاویز getElementById ( "پیغام" )۔ placeholder = ` ${ val } سے متعلق اپنی تفصیلات یا سوال یہاں لکھیں...` ;
 currentSelectionType = "سروس" ؛
 currentSelectionValue = val ;
 } اور {
 currentSelectionType = null ;
 currentSelectionValue = "" ;
 دستاویز getElementById ( "پیغام" )۔ placeholder = "اپنا سوال یا تشویش یہاں لکھیں..." ;
 }
 }

 فنکشن ہینڈلGeneralCourseSelect () {
 const val = دستاویز ۔ getElementById ( "سلیکٹ کورس" )۔ قدر
 اگر ( ویل ) {
 // متضاد سروس انتخاب کو خارج کریں۔
 دستاویز getElementById ( "selectService" )۔ قدر = "" ؛
 دستاویز getElementById ( "messageFieldGroup" )۔ انداز ڈسپلے = "کوئی نہیں" ؛
 currentSelectionType = "کورس" ؛
 currentSelectionValue = val ;
 } اور {
 currentSelectionType = null ;
 currentSelectionValue = "" ;
 دستاویز getElementById ( "messageFieldGroup" )۔ انداز ڈسپلے = "بلاک" ؛
 دستاویز getElementById ( "پیغام" )۔ placeholder = "اپنا سوال یا تشویش یہاں لکھیں..." ;
 }
 }

 فنکشن sendWhatsApp () {
 const نام = دستاویز ۔ getElementById ( "پورا نام" )۔ قدر ٹرم ()؛
 const فون = دستاویز ۔ getElementById ( "waNumber" )۔ قدر ٹرم ()؛
 const ملک = دستاویز ۔ getElementById ( "ملک" )۔ قدر
 const پیغام = دستاویز ۔ getElementById ( "پیغام" )۔ قدر ٹرم ()؛

 اگر ( ! نام || ! فون || ! ملک ) {
 الرٹ ( "براہ کرم اپنا نام، واٹس ایپ نمبر، اور ملک بھریں۔" )
 واپسی
 }

 let text = `السلام علیکم، \n\n` ;
 متن += `*نام:* ${ name } \n ` ;
 متن += `*WhatsApp:* ${ فون } \n ` ;
 متن += `*ملک:* ${ ملک } \n ` ;

 اگر ( currentSelectionType === "کورس" ) {
 متن += `*کورس:* ${ currentSelectionValue } \n ` ;
 text += ` \n میں ${ currentSelectionValue } کورس کے لیے رجسٹر ہونے میں دلچسپی رکھتا ہوں۔ براہ کرم تفصیلات فراہم کریں۔ '' ;
 } اور اگر ( currentSelectionType === "service" ) {
 متن += `*سروس:* ${ currentSelectionValue } \n ` ;
 اگر ( پیغام ) {
 متن += ` \n *انکوائری / تفصیلات:* \n ${ پیغام } ` ;
 }
 } اور {
 اگر ( پیغام ) {
 متن += ` \n *پیغام / سوال:* \n ${ پیغام } ` ;
 }
 }

 متن += ` \n\n _(روحانی کرہ ویب سائٹ کے ذریعے بھیجا گیا)_` ;

 const encoded = encodeURICcomponent ( text );
 کھڑکی کھولیں ( ` https://wa.me/ ${ WA_NUMBER } ?text= ${ encoded } ` , "_blank" );
 }

 // ========== ہیرو سلائیڈر ==========
 فنکشن initHeroSlider () {
 const سلائیڈز = دستاویز ۔ querySelectorAll ( ". سلائیڈ" );
 const dotsContainer = دستاویز۔ getElementById ( "ہیرو ڈاٹس" )؛
 let current = 0 ;
 ٹائمر دو

 سلائیڈیں ہر ایک کے لیے (( _ , i ) => {
 const btn = دستاویز ۔ createElement ( "بٹن" )؛
 بی ٹی این className = "ہیرو ڈاٹ" + ( i === 0 ? " فعال" : "" );
 بی ٹی این setAttribute ( "aria-label" , `Slide ${ i + 1 } ` );
 بی ٹی این addEventListener ( "کلک" , () => goTo ( i ))؛
 ڈاٹس کنٹینر appendChild ( btn )؛
 });

 فنکشن goTo ( idx ) {
 سلائیڈیں [ موجودہ ]۔ کلاس لسٹ ہٹا دیں ( "فعال" )؛
 دستاویز querySelectorAll ( ".hero-dot" ) [ موجودہ ]۔ کلاس لسٹ ہٹا دیں ( "فعال" )؛
 موجودہ = idx ؛
 سلائیڈیں [ موجودہ ]۔ کلاس لسٹ شامل کریں ( "فعال" )؛
 دستاویز querySelectorAll ( ".hero-dot" ) [ موجودہ ]۔ کلاس لسٹ شامل کریں ( "فعال" )؛
 }

 فنکشن اگلا () { goTo ( موجودہ + 1 ) % سلائیڈز . لمبائی ) }

 ٹائمر = سیٹ انٹروال ( اگلا ، 4500 )؛

 دستاویز querySelector ( ".hero" )۔ addEventListener ( "mouseenter" , () => clearInterval ( ٹائمر ))؛
 دستاویز querySelector ( ".hero" )۔ addEventListener ( "mouseleave" , () => { timer = setInterval ( اگلا , 4500 ); });
 }

 // ========== NAVBAR ==========
 فنکشن initNavbar () {
 const navbar = دستاویز ۔ getElementById ( "navbar" )؛
 const hamburger = دستاویز ۔ getElementById ( "ہیمبرگر" )؛
 const navLinks = دستاویز۔ getElementById ( "navLinks" )؛

 کھڑکی addEventListener ( "اسکرول" , () => {
 navbar کلاس لسٹ ٹوگل ( "اسکرولڈ" , ونڈو . scrollY > 40 )؛
 });

 ہیمبرگر addEventListener ( "کلک" , () => {
 ہیمبرگر کلاس لسٹ ٹوگل ( "کھلا" )؛
 نیو لنکس کلاس لسٹ ٹوگل ( "کھلا" )؛
 });

 نیو لنکس querySelectorAll ( "a" )۔ ہر ایک کے لیے ( لنک => {
 لنک addEventListener ( "کلک" , () => {
 ہیمبرگر کلاس لسٹ ہٹا دیں ( "کھلا" )؛
 نیو لنکس کلاس لسٹ ہٹا دیں ( "کھلا" )؛
 });
 });
 }

 // ========== اسکرول اینیمیشنز ==========
 فنکشن initScrollAnimations () {
 const آبزرور = نیا انٹرسیکشن آبزرور (( اندراجات ) => {
 اندراجات ہر ایک کے لیے ( اندراج => {
 اگر ( اندراج . ایک دوسرے کو ملانا ہے ) {
 اندراج ہدف کلاس لسٹ شامل کریں ( "مرئی" )؛
 }
 });
 }، { حد : 0.1 })؛

 فنکشن مشاہدہ تمام () {
 دستاویز querySelectorAll ( ". animate-on-scroll" )۔ forEach ( el => مبصر . مشاہدہ ( el ))؛
 }

 مشاہدہ تمام ()
 سیٹ ٹائم آؤٹ ( مشاہدہ تمام ، 100 )؛
 }

 // اندرونی روابط کے لیے ہموار اسکرول
 فنکشن initSmoothScroll () {
 دستاویز querySelectorAll ( 'a[href^="#"]' )۔ ہر ایک کے لیے ( a => {
 ایک addEventListener ( "کلک" , e => {
 const id = a . getAttribute ( "href" )۔ ٹکڑا ( 1 )؛
 const ہدف = دستاویز ۔ getElementById ( id )؛
 اگر ( ہدف ) {
 e preventDefault ();
 // اگر صارف براہ راست رابطے کے لنکس استعمال کرتا ہے تو ابتدائی عام حالت پر دوبارہ ترتیب دیں۔
 اگر ( id === "رابطہ" ) {
 resetContactForm ()؛
 }

 const navH = دستاویز ۔ getElementById ( "navbar" )۔ آفسیٹ اونچائی
 const top = ہدف ۔ getBoundingClientRect ()۔ ٹاپ + ونڈو scrollY - navH - 12 ;
 کھڑکی scrollTo ({ top , برتاؤ : "smooth" })؛
 }
 });
 });
 }

 // اسکرول پر فعال نیوی لنک
 فنکشن initActiveNavHighlight () {
 const sections = [ "گھر" ، "روہانی خدمات" ، "کورسز" ، "کے بارے میں" ، "رابطہ" ]؛
 const لنکس = دستاویز ۔ querySelectorAll ( ".nav-link" );

 کھڑکی addEventListener ( "اسکرول" , () => {
 let current = "" ;
 حصے ہر ایک کے لیے ( id => {
 const el = دستاویز ۔ getElementById ( id )؛
 اگر ( ! el ) واپس
 const navH = دستاویز ۔ getElementById ( "navbar" )۔ آفسیٹ اونچائی
 اگر ( window . scrollY >= el . offsetTop - navH - 60 ) current = id ;
 });
 لنکس ہر ایک کے لیے ( لنک => {
 لنک انداز رنگ = "" ؛
 const href = لنک ۔ getAttribute ( "href" )۔ تبدیل کریں ( "#" ، "" )؛
 اگر ( href === موجودہ ) لنک ۔ انداز رنگ = "var(--سونا)" ؛
 });
 });
 }

 // ========== INIT ===========
 دستاویز addEventListener ( "DOMContentLoaded" , () => {
 populateDropdowns ();
 renderRohaniServices ();
 renderCourses ()؛
 initHeroSlider ()؛
 initNavbar ()؛
 initScrollAnimations ()؛
 initSmoothScroll ()؛
 initActiveNavHighlight ()؛
 resetContactForm ();
 });
