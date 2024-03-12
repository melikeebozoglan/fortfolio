//import adobexdicon from "../../assets/icons/adobexdicon.svg";
//import canvaicon from "../../assets/icons/canvaicon.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import cicon from "../../assets/icons/c-1.svg";
import cppicon from "../../assets/icons/c++.svg";
import pythonicon from "../../assets/icons/python-5.svg";
import djangoicon from "../../assets/icons/django.svg";
import giticon from "../../assets/icons/git-bash.svg";
import sqlicon from "../../assets/icons/sqlite.svg";
//import nextjsicon from "../../assets/icons/nextjsicon.svg";
//import nodejsicon from "../../assets/icons/nodejsicon.svg";
//import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
//import mongodbicon from "../../assets/icons/mongoicon.svg";
//import vuejsicon from "../../assets/icons/vueicon.svg";
//import expressicon from "../../assets/icons/expressicon.svg";
//import sassscssicon from "../../assets/icons/sassicon.svg";
//import trelloicon from "../../assets/icons/trelloicon.svg";
//import apiicon from "../../assets/icons/apiicon.svg";
//import axiosicon from "../../assets/icons/axiosicon.svg";
//import spotifyicon from "../../assets/icons/spotifyicon.svg";
//import netlifyicon from "../../assets/icons/netlifyicon.svg";
//import rendericon from "../../assets/icons/rendericon.svg";
//import jwticon from "../../assets/icons/jwticon.svg";
//import wordpressicon from "../../assets/icons/wordpressicon.svg";
//import shopifyicon from "../../assets/icons/shopifyicon.svg";
//import webflowicon from "../../assets/icons/webflowicon.svg";
//import tastyMockupp from "../../assets/img/tasty_mockup.webp";
import pr from "../../assets/img/3.png";
//import instorMockup from "../../assets/img/instor_mockup.webp";
//import silentmoonMockup from "../../assets/img/silentmoon_mockup.webp";
import profilepicture from "../img/me2.webp";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
//import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
//import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
//import Imprint from "../../components/Imprint";
//import Privacy from "../../components/Privacy";

export const headerIntroData = {
  title: {
    tr: "Merhaba, ben Melike",
    en: "Hi, I'm Melike",
  },
  subtitle: {
    tr: "Yazılım Mühendisi",
    en: "Software Engineer",
  },
  description: {
    tr: "Merhaba Melike! Hasan Kalyoncu Üniversitesi Yazılım Mühendisliği 3. sınıf öğrencisiyim. Üniversite eğitimim boyunca yazılım geliştirme, veri analizi ve problem çözme becerilerimi geliştirmeye yönelik çeşitli proje ve kurslarda çalıştım. Staj deneyimlerim ve projelerim sayesinde gerçek dünyadaki problemleri çözme fırsatı buldum. Teknofest Robotaxi gibi projelerde yer almak hem ekip çalışması becerilerimi geliştirdi hem de bana pratik bilgiler kazandırdı. Amacım yazılım dünyasında kendimi sürekli geliştirerek yaratıcı ve etkili çözümler üretmemi sağlamaktır.",
    en: "Hello Melike! I'm a 3rd-year Software Engineering student at Hasan Kalyoncu University. Throughout my university education, I have worked on various projects and courses to enhance my skills in software development, data analysis, and problem-solving. With internship experiences and projects, I've had the opportunity to solve real-world problems. Participating in projects like Teknofest Robotaxi has not only improved my teamwork skills but also provided me with practical knowledge. My goal is to continually enhance myself in the software world, enabling me to generate creative and effective solutions.",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        tr: "Bana ulasın",
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        tr: "Projelerim",
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "2022 Teknofest",
    description:
      "Robotaksi-Binek Otonom Araç Yarşması.",
    description_EN:
      "Robotaxi-Passenger Autonomous Vehicle",
    // technologies: [
    //   { name: "Html", icon: htmlicon },
    //   { name: "CSS", icon: cssicon },
    //   { name: "JavaScript", icon: javascripticon },
    //   { name: "REST Api", icon: apiicon },
    //   { name: "React", icon: reacticon },
    //   { name: "Figma", icon: figmaicon },
    //   { name: "Canva", icon: canvaicon },
    //   { name: "Netlify", icon: netlifyicon },
    //   { name: "Trello", icon: trelloicon },
    // ],
    image: pr,
    deploymenturl: "https://delightful-cheesecake-9b19f0.netlify.app/",
    githuburl: "https://github.com/AlpayC/Frontend_Abschlussprojekt_Tasty",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  // {
  //   title: "Silentmoon",
  //   description:
  //     "Eine Yoga und Meditations App, die wir als Team mit React, MongoDB, Express und Node.js gebaut haben. Meine Aufgabe als Gitmaster und Backend Entwickler bestand darin, das Backend mit Anbindung anhand einer Restful API zu programmieren und die Datenbank in MongoDB zu modellieren.",
  //   description_EN:
  //     "A yoga and meditation app that we built as a team with React, MongoDB, Express and Node.js. My task as a gitmaster and backend developer was to program the backend with connection using a restful API and to model the database in MongoDB.",
  //   technologies: [
  //     { name: "Html", icon: htmlicon },
  //     { name: "CSS", icon: cssicon },
  //     { name: "JavaScript", icon: javascripticon },
  //     { name: "Spotify Api", icon: spotifyicon },
  //     { name: "React", icon: reacticon },
  //     { name: "JWT & Bcrypt", icon: jwticon },
  //     { name: "Axios", icon: axiosicon },
  //     { name: "MongoDB", icon: mongodbicon },
  //     { name: "Express", icon: expressiconwhite },
  //     { name: "Node.js", icon: nodejsicon },
  //     { name: "Figma", icon: figmaicon },
  //     { name: "Render", icon: rendericon },
  //   ],
  //   image: silentmoonMockup,
  //   deploymenturl: "https://silentmoon-grpw.onrender.com/",
  //   githuburl:
  //     "https://github.com/AlpayC/Fullstack_Abschlussprojekt_SilentMoon",
  //   githubicon: FiGithub,
  //   deploymenticon: FiLink,
  //   colors: {
  //     main: "main-btn",
  //     second: "secondary-btn",
  //     icon: "white",
  //     projectcolor: "#FFD5BD",
  //   },
  // },
  // {
  //   title: "Furniture Organizer",
  //   description:
  //     "Eine Möbel-Organizer App, die wir als Duo-Team mit React, MongoDB, Express und Node.js programmiert haben. Als Gitmaster habe ich die Verknüpfung des Frontends mit dem Backend und die Datenbankmodellierung übernommen. Die App ist responsive und mobile-optimiert.",
  //   description_EN:
  //     "A furniture organizer app that we programmed as a duo team with React, MongoDB, Express and Node.js. As a gitmaster, I took over the connection of the frontend to the backend and the database modeling. The app is responsive and mobile-optimized.",
  //   technologies: [
  //     { name: "Html", icon: htmlicon },
  //     { name: "CSS", icon: cssicon },
  //     { name: "JavaScript", icon: javascripticon },
  //     { name: "React", icon: reacticon },
  //     { name: "JWT & Bcrypt", icon: jwticon },
  //     { name: "Axios", icon: axiosicon },
  //     { name: "MongoDB", icon: mongodbicon },
  //     { name: "Express", icon: expressiconwhite },
  //     { name: "Node.js", icon: nodejsicon },
  //     { name: "Figma", icon: figmaicon },
  //     { name: "Render", icon: rendericon },
  //     { name: "Trello", icon: trelloicon },
  //   ],
  //   image: instorMockup,
  //   deploymenturl: "https://mern-haushaltsbuch.onrender.com/",
  //   githuburl: "https://github.com/AlpayC/Furniture_MERN",
  //   githubicon: FiGithub,
  //   deploymenticon: FiLink,
  //   colors: {
  //     main: "main-btn",
  //     second: "secondary-btn",
  //     icon: "white",
  //     projectcolor: "#E3964A",
  //   },
  // },
] as const;

export const liveTickerData = {
  content: {
    tr: "Github'da Daha Fazla Proje",
    en: "More Projects on Github",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      { title: "Figma", hash: "#Figma", icon: figmaicon, color: "#F24E1E" },
      { title: "C", hash: "#C", icon: cicon, color: "#004482" },
      { title: "Python", hash: "#Python", icon: pythonicon, color: "#FFD141" },
      { title: "Django", hash: "#Django", icon: djangoicon, color: "#2BA977" },
      { title: "Git", hash: "#Git", icon: giticon, color: "#FF8080" },
      { title: "SQLitet", hash: "#SQLitet", icon: sqlicon, color: "#82CBEF" },
      { title: "C++", hash: "#C++", icon: cppicon, color: "#004482" },
    ],
  },
] as const;

// export const skillsDataDesign = [
//   {
//     skillsTitle: "Design",
//     skills: [
//       { title: "Figma", hash: "#Figma", icon: figmaicon, color: "#F24E1E" },
//       {
//         title: "Adobe XD",
//         hash: "#Adobe XD",
//         icon: adobexdicon,
//         color: "#FF61F6",
//       },
//       { title: "Canva", hash: "#Canva", icon: canvaicon, color: "#00C4CC" },
//     ],
//   },
// ] as const;

// export const skillsDataCMS = [
//   {
//     skillsTitle: "CMS",
//     skills: [
//       {
//         title: "WordPress",
//         hash: "#WordPress",
//         icon: wordpressicon,
//         color: "#21759B",
//       },
//       {
//         title: "Shopify",
//         hash: "#Shopify",
//         icon: shopifyicon,
//         color: "#7AB55C",
//       },
//       {
//         title: "Webflow",
//         hash: "#Webflow",
//         icon: webflowicon,
//         color: "#4353FF",
//       },
//     ],
//   },
// ] as const;

export const navLinks = [
  { tr: "Anasayfa", en: "Home", hash: "#home", icon: GoHome },
  { tr: "Yetenekler", en: "Skills", hash: "#skills", icon: GoStack },
  { tr: "Projeler", en: "Projects", hash: "#projects", icon: GoProject },
  { tr: "Hakkımda", en: "About me", hash: "#about-me", icon: GoPerson },
  { tr: "Bana Ulaşın", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  // { tr: "Impressum", en: "Imprint", hash: "#imprint", data: <Imprint /> },
  // { tr: "Datenschutz", en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:m.sultanbozoglan@gmail.com",
  text: "m.sultanbozoglan@gmail.com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/melikebozoglann/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/melikeebozoglan",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:m.sultanbozoglan@gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    tr: '"Es ist überhaupt nicht wichtig, es beim ersten Mal richtig zu machen. Es ist entscheidend, es beim letzten Mal richtig zu machen."',
    en: `"It's not at all important to get it right the first time. It's vitally important to get it right the last time."`,
    author: "Andrew Hunt",
  },
  {
    tr: '"MELİKE SULTAN BOZOĞLAN"',
    en: `"MELİKE SULTAN BOZOĞLAN"`,
  },
] as const;

export const aboutMeData = {
  title: "Hakkımda",
  title_EN: "About me",
  description: "Hakkımda birkaç kod parçacığı",
  description_EN: "A few code snippets about me",
  paragraphs_TR: [
    {
      title: "Eğitim",
      description:
        "Hasan Kalyoncu Üniversitesi \n Yazılım Mühendisliği \n 2020-2025",
      icon: hardwareicon,
    },
    {
      title: "Deneyimler",
      description:
        "Apas Bilişim Mühendislik \n Stajyer \n 07.2023-01.2024",
      icon: caricon,
    },
    {
      title: "Gönüllü Çalışmalar",
      description:
        "Hasan Kalyoncu Üniversitesi Google Developer Student Clubs 2023-2024 dönemi sosyal medya yöneticisi",
      icon: travelicon,
    },
  ],
  paragraphs_EN: [
    {
      title: "Education",
      description:
        "Hasan Kalyoncu University \n Software Engineering \n 2020-2025",
      icon: hardwareicon,
    },
    {
      title: "jobs Experience",
      description:
        "Apas Bilişim Mühendislik \n Intern \n 07.2023-01.2024",
      icon: caricon,
    },
    {
      title: "Volunteer Work",
      description:
        "Hasan Kalyoncu Üniversity Google Developer Student Clubs 2023-2024 social media manager",
      icon: travelicon,
    },
  ],
};

export const contactData = {
  title: {
    tr: "Bağlantı",
    en: "Contact",
  },
  description: {
    tr: "Bana bir mesaj yaz, sana geri döneceğim.",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        tr: "İsmizin",
        en: "Your Name",
      },
      type: "text",
      validation: {
        tr: "Lütfen isminizi giriniz",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        tr: "E-Mailiniz",
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        tr: "Lütfen e-postanızı girin",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        tr: "Konu",
        en: "Your Subject",
      },
      type: "text",
      validation: {
        tr: "Lütfen konunuzu giriniz",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      tr: "Mesajın",
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      tr: "Lütfen mesajınızı doldurun",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      tr: "Gönder",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      tr: "Melike'nin benimle iletişime geçmek için kişisel verilerimi (isim ve e-posta adresi) kullanabileceğini kabul ediyorum.",
      en: "I agree that Melike may use my personal data (name and e-mail address) to contact me.",
    },
    // description: {
    //   // tr: "Durch Übermittlung dieser Anfrage bestätigen Sie, dass Sie die Datenschutzerklärung gelesen haben",
    //   // en: "By submitting this request, you acknowledge that you have read the Private Policy",
    // },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    tr: "🦄 Canlı demo kısa süre içinde açılacak. Sunucular başlatılıyor...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    tr: "🦄 E-postan için teşekkürler. En kısa sürede size geri döneceğim",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    tr: "🦄 Maalesef e-postanızın gönderilmesi işe yaramadı. Lütfen daha sonra tekrar deneyiniz",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    tr: "Lütfen isminizi giriniz",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    tr: "TR",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
