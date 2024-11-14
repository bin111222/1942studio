(()=>{var e={};e.id=361,e.ids=[361],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},7620:(e,i,t)=>{"use strict";t.r(i),t.d(i,{GlobalError:()=>a.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>d,routeModule:()=>m,tree:()=>c}),t(8431),t(1961),t(5866);var s=t(3191),n=t(8716),o=t(7922),a=t.n(o),r=t(5231),l={};for(let e in r)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>r[e]);t.d(i,l);let c=["",{children:["portfolio",{children:["[project]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,8431)),"/Users/varilshah/Desktop/Apps/1942studio/src/app/portfolio/[project]/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,1961)),"/Users/varilshah/Desktop/Apps/1942studio/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,5866,23)),"next/dist/client/components/not-found-error"]}],d=["/Users/varilshah/Desktop/Apps/1942studio/src/app/portfolio/[project]/page.tsx"],p="/portfolio/[project]/page",u={require:t,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/portfolio/[project]/page",pathname:"/portfolio/[project]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},8949:(e,i,t)=>{Promise.resolve().then(t.bind(t,2514))},2514:(e,i,t)=>{"use strict";t.r(i),t.d(i,{default:()=>c});var s=t(326);t(7577);var n=t(912),o=t(5047),a=t(434),r=t(6226),l=t(7088);function c(){let e=(0,o.useParams)().project,i=l.q.find(i=>i.link.replace("/portfolio/","")===e);return i?(0,s.jsxs)("div",{className:"min-h-screen bg-gradient-to-b from-white to-gray-50",children:[(0,s.jsxs)(n.E.div,{initial:{opacity:0},animate:{opacity:1},className:"relative h-[60vh] min-h-[400px] w-full",children:[(0,s.jsxs)("div",{className:"absolute inset-0",children:[s.jsx(r.default,{src:i.image,alt:i.title,fill:!0,className:"object-cover",priority:!0}),s.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent to-white/90"})]}),s.jsx("div",{className:"absolute bottom-0 left-0 right-0 p-8",children:s.jsx("div",{className:"container mx-auto max-w-5xl",children:(0,s.jsxs)(n.E.div,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.2},children:[s.jsx("span",{className:`inline-block px-4 py-2 rounded-full text-white text-sm font-medium bg-gradient-to-r ${i.gradient}`,children:i.category}),s.jsx("h1",{className:"text-4xl md:text-5xl font-bold mt-4 mb-4",children:i.title}),s.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:i.tags.map(e=>s.jsx("span",{className:"px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800",children:e},e))})]})})})]}),(0,s.jsxs)("div",{className:"container mx-auto max-w-5xl px-4 py-16",children:[s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:(0,s.jsxs)("div",{className:"md:col-span-2 space-y-8",children:[(0,s.jsxs)(n.E.section,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.3},className:"prose prose-lg max-w-none",children:[s.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Overview"}),s.jsx("p",{children:i.fullDescription||i.description})]}),i.challenges&&(0,s.jsxs)(n.E.section,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.4},className:"prose prose-lg max-w-none",children:[s.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Challenges"}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:i.challenges.map((e,i)=>s.jsx("div",{className:"bg-white p-4 rounded-lg shadow-sm",children:s.jsx("p",{children:"string"==typeof e?e:e.description})},i))})]}),i.solutions&&(0,s.jsxs)(n.E.section,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.5},className:"prose prose-lg max-w-none",children:[s.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Our Solution"}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:i.solutions.map((e,i)=>(0,s.jsxs)("div",{className:"bg-white p-4 rounded-lg shadow-sm",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2 mb-2",children:[s.jsx("span",{children:e.icon}),s.jsx("h3",{className:"font-bold",children:e.title})]}),s.jsx("p",{children:e.description})]},i))})]}),i.results&&(0,s.jsxs)(n.E.section,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.6},className:"prose prose-lg max-w-none",children:[s.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Results"}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:i.results.map((e,i)=>(0,s.jsxs)("div",{className:"bg-white p-4 rounded-lg shadow-sm text-center",children:[s.jsx("div",{className:"text-2xl font-bold text-blue-600",children:e.metric}),s.jsx("p",{children:e.description})]},i))})]})]})}),s.jsx(n.E.div,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.7},className:"mt-16 pt-8 border-t",children:(0,s.jsxs)(a.default,{href:"/portfolio",className:"inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors",children:[s.jsx("svg",{className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),"Back to Portfolio"]})})]})]}):s.jsx("div",{className:"min-h-screen flex items-center justify-center",children:s.jsx("h1",{className:"text-2xl font-bold",children:"Project not found"})})}},7088:(e,i,t)=>{"use strict";t.d(i,{q:()=>s});let s=[{id:"thesculptique",title:"The Sculptique",category:"Aesthetic Healthcare",description:"Developing an AI-powered website for a world-class aesthetic surgeon",fullDescription:"The Sculptique is a modern, high-end aesthetic plastic surgery brand aiming to establish a unique online presence that goes beyond conventional medical websites. The goal is to reflect the brand’s sophistication, innovation, and customer-centered approach.",image:"/images/portfolio/thesculptique.png",tags:["AI Integration","Web Development","AI Chatbot"],link:"/portfolio/thesculptique.png",gradient:"from-blue-600 to-purple-600",comingSoon:!1,challenges:["Create a distinctive digital identity to craft a visually compelling website that resonates with an audience seeking premium aesthetic services","Ensure user-friendly navigation to provide an intuitive and seamless user experience, emphasizing easy access to information on services, qualifications, and patient testimonials","Showcase brand trust and authority by highlighting credentials, experience, and professional achievements to foster trust and credibility","Incorporate advanced technology with innovative features like AI-powered chatbots to enhance customer service and engagement"],solutions:[{title:"AI-Powered Website",description:"Implemented real-time accurate medical grade information for all services",icon:"\uD83E\uDD16"},{title:"Advanced SEO Techniques",description:"Going above and beyond to ensure the website is found by search engines",icon:"\uD83D\uDD12"},{title:"Interactive UI",description:"Developed an intuitive interface for easy navigation and information access",icon:"\uD83D\uDCBB"},{title:"AI-Powered Chatbot",description:"Developed an intuitive AI chatbot for patient engagement and information access",icon:"\uD83D\uDCF2"}],results:[{metric:"30%",description:"Increase in online consultations"},{metric:"75%",description:"Reduction in administrative work"},{metric:"90%",description:"Patient satisfaction rate"}],gallery:[{url:"/images/projects/sculptique/1.webp",title:"Homepage Design",description:"Modern and clean web design focusing on user experience"},{url:"/images/projects/sculptique/2.webp",title:"AI Consultation Interface",description:"Interactive consultation system with real-time responses"},{url:"/images/projects/sculptique/3.webp",title:"Advanced SEO Articles",description:"Advanced SEO articles to ensure the website is found by search engines"}],process:[{phase:"Discovery",description:"Extensive research on the business niche and topics that resonate with the target audience",duration:"1 week"},{phase:"Design",description:"UI/UX design with focus on ease to use and intuitive navigation",duration:"2 weeks"},{phase:"Development",description:"Agile development with continuous integration",duration:"2 weeks"},{phase:"Testing",description:"Rigorous security and compliance testing",duration:"2 weeks"},{phase:"Deployment",description:"Phased rollout with monitoring",duration:"1 week"}]},{id:"aimedical",title:"HKS Clinic",category:"Bone Healthcare",description:"A comprehensive digital platform for one of Mumbai's premier orthopedic clinics.",fullDescription:"HKS Clinic's digital transformation project focuses on streamlining patient experiences and information access.",image:"/images/portfolio/hks-clinic.png",gradient:"from-blue-600 to-purple-600",tags:["Web Development","Pre-consultation tests","Ease of access"],link:"/portfolio/hks-clinic",challenges:["Develop a unique digital identity to create a visually captivating website that appeals to an audience looking for high-end aesthetic services","Provide user-friendly navigation that ensures a smooth and intuitive experience, allowing easy access to service details, qualifications, and client testimonials","Establish brand trust and authority by showcasing credentials, expertise, and professional accomplishments to build credibility","Leverage advanced technology with innovative elements such as AI-driven chatbots to elevate customer service and engagement"],solutions:[{title:"Digital Infrastructure",description:"Building a modern, integrated digital platform for clinic management.",icon:"\uD83C\uDFE5"},{title:"Patient Portal",description:"Developing an intuitive patient portal for appointment booking and treatment tracking.",icon:"\uD83D\uDC65"}],gallery:[{url:"/images/projects/hks-clinic/1.webp",title:"Homepage Design",description:"Modern and clean homepage design focusing on user experience"},{url:"/images/projects/hks-clinic/2.webp",title:"AI Consultation Interface",description:"Interactive consultation system with real-time responses"},{url:"/images/projects/hks-clinic/3.webp",title:"Patient Dashboard",description:"Comprehensive dashboard for tracking treatment progress"}],process:[{phase:"Discovery",description:"Extensive research on the business niche and topics that resonate with the target audience",duration:"1 week"},{phase:"Design",description:"UI/UX design with focus on ease to use and intuitive navigation",duration:"2 weeks"},{phase:"Development",description:"Agile development with continuous integration",duration:"2 weeks"},{phase:"Testing",description:"Rigorous security and compliance testing",duration:"2 weeks"},{phase:"Deployment",description:"Phased rollout with monitoring",duration:"1 week"}],comingSoon:!1},{id:"industrialai",title:"Industrial AI Platform",category:"Skincare Tech",description:"Stunning skincare product visuals powered by AI",fullDescription:"Facile Skin is pioneering the future of personalized skincare through advanced AI technology and expert dermatological knowledge.",image:"/images/portfolio/facile-skin.png",gradient:"from-pink-500 to-rose-500",tags:["AI","Skincare","E-commerce","Personalization"],link:"/portfolio/facile-skin",challenges:["AI-powered skin analysis integration","Personalized product recommendations","Secure user data handling","Real-time skin tracking system"],solutions:[{title:"AI Skin Analysis",description:"Advanced skin analysis system using computer vision and deep learning.",icon:"\uD83D\uDD0D"},{title:"Recommendation Engine",description:"Smart product recommendation system based on individual skin profiles.",icon:"\uD83C\uDFAF"}],process:[{phase:"Research",duration:"3 weeks",description:"Skincare technology research and AI model development",deliverables:["AI Model Architecture","Platform Design"]},{phase:"Development",duration:"10 weeks",description:"Platform development and AI integration",deliverables:["Core Platform","AI Integration","E-commerce System"]}],gallery:[{url:"/images/projects/facile-skin/1.webp",title:"Homepage Design",description:"Modern and clean homepage design focusing on user experience"},{url:"/images/projects/facile-skin/2.webp",title:"AI Consultation Interface",description:"Interactive consultation system with real-time responses"},{url:"/images/projects/facile-skin/3.webp",title:"Patient Dashboard",description:"Comprehensive dashboard for tracking treatment progress"}],comingSoon:!0},{id:"dr-chirag",title:"Dr. Chirag Shah",category:"Medical Portfolio",description:"A state-of-the-art digital presence for a leading dermatologist, showcasing expertise and facilitating patient engagement.",fullDescription:"Creating a professional digital platform that reflects Dr. Chirag Shah's expertise while providing valuable resources for patients.",image:"/images/portfolio/dr-chirag.png",tags:["Web Development","Medical Portfolio","Patient Education","Consultation"],link:"/portfolio/dr-chirag",gradient:"from-indigo-500 to-purple-500",challenges:["Professional brand representation","Educational content management","Patient engagement features","Treatment showcase platform"],solutions:[{title:"Professional Portfolio",description:"Creating an elegant, professional digital presence that showcases expertise.",icon:"\uD83D\uDC68‍⚕️"},{title:"Patient Resources",description:"Developing comprehensive educational resources and engagement tools.",icon:"\uD83D\uDCDA"}],process:[{phase:"Design",duration:"2 weeks",description:"Professional portfolio design and content strategy",deliverables:["Brand Guidelines","Website Design","Content Structure"]},{phase:"Development",duration:"6 weeks",description:"Website development with focus on user experience",deliverables:["Portfolio Website","Resource Center","Contact System"]}],gallery:[{url:"/images/projects/dr-chirag/1.webp",title:"Portfolio Homepage",description:"Professional portfolio showcasing expertise"}],comingSoon:!0}]},8431:(e,i,t)=>{"use strict";t.r(i),t.d(i,{default:()=>s});let s=(0,t(8570).createProxy)(String.raw`/Users/varilshah/Desktop/Apps/1942studio/src/app/portfolio/[project]/page.tsx#default`)}};var i=require("../../../webpack-runtime.js");i.C(e);var t=e=>i(i.s=e),s=i.X(0,[81,27],()=>t(7620));module.exports=s})();