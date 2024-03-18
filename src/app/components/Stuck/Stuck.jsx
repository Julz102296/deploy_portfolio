"use client"

import React, { useRef } from 'react'
import Magnetic from "../../common/Magnetic/index";
import { motion, useScroll, useTransform } from 'framer-motion'

const Stack = () => {

  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["10%", "100%"]);
  const yBg = useTransform(scrollYProgress, [1, 0], ["-150%", "100%"]);

  return ( 

      <section ref={container} className="overflow-hidden mb-10">
        <motion.div
            style={{ x: yText }}
            className="text-5xl font-extrabold sm:text-5xl text-slate-700 text-opacity-50 p-2"
        >
            Tech Stack
            
        </motion.div>
        <motion.div
        style={{ x: yBg }}
        className="mx-auto max-w-5xl px-4 my-10 sm:px-6 lg:px-8">

          <ul className="mt-12 flex justify-center gap-6 md:gap-8">
            <Magnetic>

            <li>
                <svg width="85" height="80" viewBox="0 0 102 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100.878 0.193853L0.877869 0.396606L1.08062 100.396L101.08 100.194L100.878 0.193853Z" fill="#F7DF1E"/>
                  <path d="M68.2107 78.3856C70.2317 81.6704 72.8572 84.0825 77.4921 84.0732C81.3858 84.0653 83.8691 82.1142 83.8637 79.4253C83.8571 76.2031 81.2993 75.067 77.0098 73.2011L74.6585 72.1979C67.8717 69.3228 63.3596 65.7129 63.3441 58.0621C63.3298 51.0145 68.6888 45.6385 77.0808 45.6215C83.0554 45.6094 87.3549 47.6801 90.4611 53.1182L83.1532 57.8315C81.5363 54.9458 79.7959 53.8113 77.0975 53.8167C74.3451 53.8223 72.6042 55.5719 72.6088 57.8528C72.6145 60.6719 74.3629 61.8096 78.3981 63.5475L80.7494 64.549C88.7404 67.9567 93.2554 71.438 93.2714 79.2856C93.2885 87.7459 86.6519 92.3943 77.7265 92.4124C68.9995 92.4301 63.353 88.2828 60.5832 82.8376L68.2107 78.3856ZM35.0172 79.2672C36.4987 81.8832 37.8461 84.0948 41.0746 84.0883C44.1619 84.082 46.1071 82.8701 46.0976 78.1733L46.0328 46.221L55.4296 46.2019L55.4946 78.2812C55.5144 88.0114 49.8186 92.4515 41.4916 92.4684C33.9678 92.4836 29.6028 88.5988 27.3774 83.9136L35.0172 79.2672Z" fill="black"/>
                </svg>
            </li>

            </Magnetic>

            <Magnetic>
            <li>
                <svg width="75" height="80" viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50.4668 59.5335C55.3358 59.5236 59.275 55.5684 59.2651 50.6994C59.2552 45.8303 55.3001 41.8912 50.431 41.901C45.562 41.9109 41.6228 45.8661 41.6327 50.7351C41.6426 55.6042 45.5977 59.5433 50.4668 59.5335Z" fill="#61DAFB"/>
                  <path d="M50.4855 68.7797C76.6122 68.7268 97.7756 60.597 97.7554 50.6213C97.7352 40.6457 76.5389 32.6018 50.4122 32.6548C24.2856 32.7077 3.12211 40.8375 3.14234 50.8132C3.16256 60.7888 24.3588 68.8327 50.4855 68.7797Z" stroke="#61DAFB" strokeWidth="5"/>
                  <path d="M34.8245 59.7802C47.9337 82.3801 65.5561 96.6433 74.1851 91.6379C82.8142 86.6326 79.1823 64.2541 66.0731 41.6543C52.9638 19.0544 35.3415 4.79121 26.7125 9.79654C18.0834 14.8019 21.7153 37.1803 34.8245 59.7802Z" stroke="#61DAFB" strokeWidth="5"/>
                  <path d="M34.788 41.7177C21.7705 64.3705 18.2294 86.7635 26.8787 91.7338C35.5279 96.7041 53.0923 82.3696 66.1097 59.7168C79.1272 37.0639 82.6683 14.6709 74.019 9.70062C65.3698 4.73032 47.8054 19.0649 34.788 41.7177Z" stroke="#61DAFB" strokeWidth="5"/>
                </svg>
            </li>
            </Magnetic>
            <Magnetic>
            <li>
                <svg width="90" height="82" viewBox="0 0 127 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M26.8639 0.567234C19.7029 0.581753 14.4169 6.86023 14.6679 13.6569C14.9089 20.1867 14.6302 28.645 12.515 35.5465C10.3923 42.4674 6.79012 46.8577 0.891697 47.4322L0.904575 53.7838C6.80528 54.3356 10.4253 58.7091 12.5758 65.6223C14.7191 72.5152 15.0319 80.9722 14.8174 87.503C14.5939 94.2997 19.9054 100.558 27.0676 100.543L100.444 100.394C107.605 100.38 112.89 94.1013 112.639 87.3046C112.398 80.7748 112.676 72.3166 114.792 65.4151C116.914 58.4932 120.508 54.1034 126.406 53.5293L126.393 47.1778C120.493 46.626 116.882 42.2525 114.731 35.3393C112.587 28.4473 112.274 19.9893 112.489 13.4586C112.712 6.66191 107.402 0.403939 100.241 0.418458L26.8629 0.567236L26.8639 0.567234ZM86.0076 61.9893C86.0266 71.3487 79.0568 77.0391 67.4712 77.0626L47.7492 77.1026C47.1851 77.1038 46.6436 76.8807 46.2439 76.4826C45.8441 76.0845 45.6189 75.5439 45.6178 74.9798L45.5186 26.0554C45.5174 25.4912 45.7405 24.9497 46.1386 24.55C46.5367 24.1503 47.0773 23.9251 47.6414 23.9239L67.2511 23.8842C76.9115 23.8646 83.2622 29.0846 83.2785 37.1186C83.2899 42.7576 79.035 47.8145 73.6032 48.71L73.6038 49.0041C81.0022 49.8005 85.9932 54.9134 86.0076 61.9893ZM65.2266 30.6313L53.9814 30.6541L54.0136 46.5379L63.4848 46.5187C70.8066 46.5039 74.8377 43.5474 74.8271 38.2775C74.8163 33.3389 71.3399 30.6189 65.2266 30.6313ZM54.0264 52.8402L54.0619 70.3445L65.7208 70.3209C73.3441 70.3055 77.3757 67.2384 77.3641 61.4898C77.3524 55.7413 73.1953 52.8004 65.1951 52.8166L54.0264 52.8393L54.0264 52.8402Z" fill="#7952B3"/>
                </svg>
            </li>
            </Magnetic>
            <Magnetic>
            <li>
                <svg width="71" height="82" viewBox="0 0 87 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M86.2138 0.84626L78.6091 88.0332L43.6512 97.801L8.75032 88.1885L0.800415 1.01944L86.2138 0.84626Z" fill="#264DE4"/>
                  <path d="M71.9362 82.4959L78.4349 7.99067L43.5216 8.06146L43.6885 90.389L71.9362 82.4959Z" fill="#2965F1"/>
                  <path d="M18.7002 40.4476L19.6802 51.1384L43.6088 51.0899L43.5871 40.3972L18.7002 40.4476Z" fill="#EBEBEB"/>
                  <path d="M43.5432 18.7545L43.5062 18.7546L16.7306 18.8089L17.7243 29.4999L43.5649 29.4475L43.5432 18.7545Z" fill="#EBEBEB"/>
                  <path d="M43.666 79.2927L43.6434 68.1676L43.5966 68.1802L31.6813 64.9887L30.9028 56.4622L25.1161 56.4739L20.1688 56.484L21.7009 73.2703L43.6168 79.3064L43.666 79.2927Z" fill="#EBEBEB"/>
                  <path d="M56.739 51.0633L55.5259 64.9336L43.6066 68.1767L43.6291 79.3013L65.5377 73.1814L65.6949 71.3746L68.1505 43.2187L68.4056 40.3468L70.2921 18.7003L43.5063 18.7546L43.528 29.4476L58.5953 29.417L57.6446 40.3686L43.5502 40.3972L43.5719 51.09L56.739 51.0633Z" fill="white"/>
                </svg>
            </li>
            </Magnetic>
            <Magnetic>
            <li>
                  <svg width="71" height="82" viewBox="0 0 71 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.59198 73.1095L0 0.778961L70.8592 0.635291L64.5605 72.9529L35.5339 81.0586" fill="#E44D26"/>
                  <path d="M35.5801 74.9062L35.4417 6.64462L64.4064 6.5859L59.0042 68.3157" fill="#F16529"/>
                  <path d="M13.194 15.5374L35.4596 15.4923L35.4775 24.3594L22.9385 24.3849L23.7772 33.4652L35.4959 33.4415L35.5139 42.2891L15.6702 42.3293L13.194 15.5374ZM16.0698 46.7816L24.9761 46.7636L25.6154 53.8522L35.5427 56.4883L35.5614 65.7461L17.3481 60.7049" fill="#EBEBEB"/>
                  <path d="M57.6471 15.4473L35.4205 15.4923L35.4385 24.3595L56.8447 24.3161L57.6471 15.4473ZM56.0624 33.3997L35.4569 33.4415L35.4749 42.3087L46.4124 42.2865L45.4006 53.812L35.5037 56.4884L35.5223 65.7071L53.6762 60.6312" fill="white"/>
                </svg>
            </li>
            </Magnetic>
            <Magnetic>
            <li>
                <svg width="80" height="80" viewBox="0 0 102 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0.206177L101.695 -1.36848e-05L101.897 99.9997L0.202754 100.206L0 0.206177Z" fill="url(#paint0_linear_19_1174)"/>
                <path d="M8.10388 8.14197L93.6237 7.96857L93.7942 92.064L8.27439 92.2374L8.10388 8.14197Z" fill="url(#paint1_linear_19_1174)"/>
                <path d="M24.6328 28.3407C24.6328 28.3407 31.0622 28.1585 36.3551 28.1478C41.7036 28.137 45.5197 29.3875 48.0845 31.5935C50.5358 33.678 52.1932 37.2367 52.2015 41.2916C52.2097 45.3465 50.9642 48.667 48.6923 51.0045C45.7394 54.021 42.2949 55.8101 36.4117 56.0684C34.7864 56.1399 33.2821 56.1592 33.2821 56.1592L33.3088 69.3402L24.7156 69.3576L24.6328 28.3407V28.3407ZM33.2669 48.8565C34.2007 48.9454 34.7857 48.9005 36.1693 48.8811C40.7787 48.8165 43.6174 46.0077 43.6088 41.7687C43.6011 37.9606 41.2494 34.8386 36.824 34.6855C35.0601 34.6247 33.2382 34.6928 33.2382 34.6928L33.2669 48.8565V48.8565Z" fill="url(#paint2_linear_19_1174)"/>
                <path d="M55.519 60.1124C57.253 61.1716 61.343 62.7548 64.1288 62.7492C66.9748 62.7434 68.1481 61.738 68.1449 60.1743C68.1417 58.6085 67.2103 56.9656 63.6801 55.7836C57.4252 53.6678 55.0062 51.1249 55.0617 47.5587C55.05 41.7991 59.8677 37.4707 67.3558 37.4555C70.8832 37.4483 73.7035 38.5958 75.5603 39.5304L75.5744 46.4429C74.2101 45.6938 70.2776 44.0231 67.6789 44.0284C65.3878 44.033 64.091 44.9746 64.0942 46.538C64.0971 47.978 65.2752 48.7268 68.9908 50.0346C74.7491 52.0256 77.1689 54.9617 77.2391 59.4684C77.2506 65.165 72.8686 69.7037 64.1406 69.4465C61.1452 69.3583 57.8245 68.181 55.5321 66.9354L55.519 60.1124V60.1124Z" fill="url(#paint3_linear_19_1174)"/>
                <defs>
                <linearGradient id="paint0_linear_19_1174" x1="24.7029" y1="-5.06629" x2="63.8529" y2="77.2277" gradientUnits="userSpaceOnUse">
                <stop stopColor="#A0CBFF"/>
                <stop offset="0.394" stopColor="#A0CBFE"/>
                <stop offset="0.583" stopColor="#8EC2FC"/>
                <stop offset="0.784" stopColor="#83BCFB"/>
                <stop offset="1" stopColor="#7FBAFB"/>
                </linearGradient>
                <linearGradient id="paint1_linear_19_1174" x1="38.5693" y1="9.26529" x2="60.7516" y2="82.4415" gradientUnits="userSpaceOnUse">
                <stop stopColor="#090058"/>
                <stop offset="1" stopColor="#070033"/>
                </linearGradient>
                <linearGradient id="paint2_linear_19_1174" x1="12.5872" y1="-0.658646" x2="51.7368" y2="81.6344" gradientUnits="userSpaceOnUse">
                <stop stopColor="#A0CBFF"/>
                <stop offset="0.394" stopColor="#A0CBFE"/>
                <stop offset="0.583" stopColor="#8EC2FC"/>
                <stop offset="0.784" stopColor="#83BCFB"/>
                <stop offset="1" stopColor="#7FBAFB"/>
                </linearGradient>
                <linearGradient id="paint3_linear_19_1174" x1="34.7701" y1="-11.4592" x2="74.075" y2="71.1599" gradientUnits="userSpaceOnUse">
                <stop stopColor="#A0CBFF"/>
                <stop offset="0.394" stopColor="#A0CBFE"/>
                <stop offset="0.583" stopColor="#8EC2FC"/>
                <stop offset="0.784" stopColor="#83BCFB"/>
                <stop offset="1" stopColor="#7FBAFB"/>
                </linearGradient>
                </defs>
                </svg>
            </li>
            </Magnetic>
            <Magnetic>
            <li>
                <svg width="80" height="80" viewBox="0 0 103 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0.207061L102.124 -9.05791e-08L102.327 99.9964L0.202747 100.203L0 0.207061Z" fill="url(#paint0_linear_19_1174)"/>
                <path d="M37.3576 51.0381L46.4096 51.0197L41.8481 33.476L37.3576 51.0381ZM7.74207 8.02136L7.91316 92.4071L94.7141 92.2312L94.543 7.84537L7.74207 8.02136ZM51.4166 70.2554L48.0815 58.8547L35.8277 58.8795L32.5389 70.2937L24.1489 70.3107L35.8794 29.9556L35.8705 25.5399L47.1308 25.517L60.6896 70.2366L51.4166 70.2554ZM73.7167 70.2102L64.6645 70.2285L64.5955 36.1901L73.6477 36.1718L73.7167 70.2102ZM69.1681 32.0962C66.5768 32.1015 64.4717 30.0298 64.4665 27.4692C64.4613 24.9085 66.5576 22.8282 69.1493 22.823C71.7409 22.8177 73.8454 24.8894 73.8506 27.4502C73.8558 30.0108 71.7595 32.091 69.1681 32.0962Z" fill="url(#paint1_linear_19_1174)"/>
                <defs>
                <linearGradient id="paint0_linear_19_1174" x1="101.591" y1="-0.531023" x2="1.70916" y2="99.7568" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFAA2A"/>
                <stop offset="1" stopColor="#FFC06C"/>
                </linearGradient>
                <linearGradient id="paint1_linear_19_1174" x1="51.1422" y1="7.79166" x2="51.3127" y2="91.8932" gradientUnits="userSpaceOnUse">
                <stop stopColor="#251200"/>
                <stop offset="1"/>
                </linearGradient>
                </defs>
                </svg>
            </li>
            </Magnetic>
            <Magnetic>
            <li>
                <svg width="80" height="80" viewBox="0 0 32 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32 16.0002H16V-5.72205e-06L32 16.0002Z" fill="#0162FF"/>
                <path d="M32 31.9998H16L0 15.9996L32 16.0003V31.9998Z" fill="#01A3FF"/>
                <path d="M32 48H0V31.9998H16L32 48Z" fill="#67DBFF"/>
                </svg>
            </li>
            </Magnetic>
            <Magnetic>
            <li>
              <svg width="80" height="80" viewBox="0 0 38 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M24.9527 18.4808L19.6852 23.2463L14.7972 13.6609L17.3267 8.14831C17.967 7.04312 19.0114 7.0412 19.6517 8.14831L24.9533 18.4808H24.9527Z" fill="#FFA000"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M19.6852 23.2463L0.000610352 41.0503L14.7972 13.6609L19.6852 23.2463Z" fill="#F57F17"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M30.7141 11.1966C31.6553 10.3171 32.6281 10.6171 32.8757 11.863L38 40.8118L21.0146 50.7087C20.4206 51.0278 18.8461 51.166 18.8461 51.166C18.8461 51.166 17.4097 50.999 16.8619 50.7035L0 41.0491L30.7141 11.1966Z" fill="#FFCA28"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M14.7972 13.6609L0.000640869 41.0503L6.59111 1.01953C6.83367 -0.227653 7.56391 -0.347255 8.21561 0.752826L14.7972 13.6609Z" fill="#FFA000"/>
              </svg>
            </li>
            </Magnetic>
            <Magnetic>
            <li>
              <svg width="90" height="90" viewBox="0 0 55 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40.8541 0.0867588L40.8251 0.0292811C40.8111 0.0151828 40.7972 0 40.7681 0L40.7101 0.0151828C40.6822 0.0433794 40.6672 0.0585622 40.6672 0.0867588L39.4445 22.4391L39.6314 22.4109L40.8111 0.666958L42.2218 3.00511H42.2068C43.2716 6.1718 43.7185 9.5413 43.5455 13.1147L43.6315 13.2448L45.0283 15.7435L45.1142 15.8302C47.2577 17.7335 49.6612 19.0121 52.3236 19.665L52.9715 20.7256L53.0575 20.7549L53.0714 20.7256L40.8251 0.507539L40.8541 0.0856743V0.0867588ZM53.8343 21.7005C54.4392 21.6279 54.827 21.4967 55 21.308L24.2048 25.0993H24.1908C24.2048 26.392 24.7806 27.4082 25.9034 28.1348C26.2053 28.3528 26.5223 28.5122 26.8092 28.6141C27.0831 28.2942 27.3851 28.0621 27.745 27.8442H27.759C30.9833 25.8693 35.7753 25.5635 42.1058 26.9147L42.1778 26.9288C42.8687 27.0742 43.5595 27.2488 44.2074 27.4516C44.3943 27.4808 44.5523 27.4234 44.6823 27.3062C44.9122 27.1327 45.2002 27.0015 45.5891 26.9147V26.8996C46.6109 25.07 47.9915 23.7188 49.7192 22.8327C50.9129 22.2374 52.2946 21.8459 53.8343 21.7005ZM39.0415 22.2666L40.4512 0.450061C38.4076 8.41018 35.1274 15.8465 30.6234 22.746L39.0415 22.2666ZM31.1123 4.69148L31.0553 4.6622L30.9973 4.67738L30.9683 4.75004L29.8025 23.632L29.9755 23.6179L31.1413 4.75004L31.1123 4.69148ZM29.4716 23.2253L30.7093 4.80752L24.1908 23.7914L29.4716 23.2253ZM40.4233 7.97422C41.9339 11.0975 42.4808 15.8172 42.0779 22.1354L47.9636 21.4099L40.4233 7.97422ZM37.6845 4.63509C37.8102 4.71317 37.85 4.8791 37.7737 5.00707C37.7364 5.06805 37.6768 5.11171 37.6078 5.12857C37.5388 5.14542 37.466 5.13411 37.4052 5.09708C37.1086 4.9138 36.8089 4.84548 36.507 4.89428C36.1922 4.94634 35.8634 5.12419 35.5206 5.4311C35.4132 5.52654 35.251 5.52003 35.1521 5.41809C34.862 5.11877 34.5719 4.94525 34.284 4.89428C34.0035 4.84656 33.7113 4.91489 33.4083 5.09816C33.2815 5.17408 33.1171 5.13287 33.0409 5.0049C32.9656 4.87693 33.0065 4.711 33.1333 4.634C33.5501 4.38132 33.9638 4.29022 34.3742 4.3618C34.7116 4.42036 35.0382 4.58846 35.3552 4.86825C35.7119 4.58846 36.0686 4.41928 36.4232 4.3618C36.8551 4.29131 37.2763 4.3824 37.6845 4.63509ZM36.0847 2.19391C36.2115 2.27091 36.2534 2.43684 36.1771 2.56481C36.1405 2.62617 36.0813 2.67042 36.0124 2.68789C35.9436 2.70536 35.8707 2.69464 35.8097 2.65807C35.5131 2.47805 35.223 2.42274 34.9383 2.49215C34.6342 2.56589 34.3226 2.77953 33.9992 3.13199C33.8993 3.24044 33.7296 3.24803 33.6221 3.14609L33.606 3.12982C33.289 2.77953 32.9785 2.56589 32.6745 2.49215C32.3876 2.42274 32.0943 2.47696 31.7967 2.65807C31.6699 2.73399 31.5055 2.69278 31.4292 2.56481C31.3529 2.43684 31.3948 2.27091 31.5216 2.19391C31.9439 1.93797 32.3704 1.86314 32.8002 1.96726C33.1429 2.05076 33.4781 2.24922 33.8059 2.56372C34.1368 2.24922 34.472 2.05076 34.8126 1.96726C35.2402 1.86206 35.6625 1.93797 36.0847 2.19391ZM29.6618 29.2182C29.6998 29.2017 29.7427 29.2008 29.7814 29.2155C29.8201 29.2301 29.8517 29.2594 29.8696 29.297C29.8875 29.3347 29.8903 29.3778 29.8774 29.4175C29.8645 29.4572 29.8369 29.4903 29.8004 29.5099C28.9752 29.9079 28.2596 30.1422 27.6537 30.2159C27.0198 30.294 26.4987 30.1986 26.0904 29.9372L26.0775 29.9285C25.7369 29.7008 25.2996 29.614 24.7678 29.6672C24.2112 29.7236 23.5526 29.9329 22.7919 30.2951C22.7113 30.333 22.6157 30.2983 22.577 30.2181C22.5394 30.1368 22.5738 30.0402 22.6544 30.0023C23.4473 29.6238 24.1414 29.4047 24.7366 29.3451C25.3447 29.2833 25.8508 29.3885 26.2548 29.6585L26.2623 29.6628C26.6072 29.883 27.0574 29.9621 27.6161 29.8938C28.1887 29.8233 28.8699 29.5999 29.6618 29.2182ZM33.5942 29.3266C33.6791 29.3548 33.7242 29.4459 33.6963 29.5316C33.6683 29.6162 33.5781 29.6617 33.4943 29.6346C33.346 29.5847 33.1891 29.5414 33.028 29.5077C32.8765 29.4763 32.7175 29.4524 32.5531 29.4394L32.5498 29.4383C32.2178 29.4123 31.8515 29.4644 31.4486 29.5934C31.037 29.7246 30.5869 29.9383 30.1001 30.23L30.0969 30.2322C29.5855 30.5456 29.0225 30.7625 28.4047 30.884C27.7901 31.0043 27.1197 31.0304 26.3923 30.9631C26.3511 30.9579 26.3134 30.9367 26.2874 30.904C26.2613 30.8713 26.2489 30.8297 26.2526 30.7879C26.2564 30.7462 26.2761 30.7075 26.3075 30.6801C26.339 30.6527 26.3798 30.6387 26.4213 30.641C27.1175 30.705 27.7579 30.6801 28.3445 30.5651C28.9247 30.4513 29.4523 30.2485 29.9304 29.9546L29.9368 29.9513C30.4429 29.6476 30.9146 29.4242 31.3519 29.2843C31.7956 29.1423 32.2028 29.0848 32.5746 29.1152H32.5789C32.7518 29.1293 32.9237 29.1553 33.0914 29.19C33.2654 29.2269 33.4341 29.2724 33.5942 29.3266ZM42.455 27.8398C42.542 27.8582 42.5979 27.9439 42.5807 28.0318C42.5624 28.1185 42.4776 28.176 42.3905 28.1576C38.9814 27.4494 36.0482 27.1783 33.5942 27.3453C31.1563 27.5123 29.1933 28.1131 27.7063 29.1488C27.6343 29.1998 27.5333 29.1813 27.4839 29.1076C27.4334 29.0338 27.4517 28.933 27.5247 28.882C29.0601 27.8127 31.0757 27.1924 33.5727 27.0221C36.0546 26.8518 39.0158 27.1251 42.455 27.8398ZM46.7968 28.5295C46.8806 28.5621 46.9225 28.6553 46.8902 28.7399C46.8591 28.8234 46.7656 28.8657 46.6829 28.8332C46.3858 28.7187 46.0723 28.6535 45.7546 28.6402H45.7492C45.4161 28.613 45.0476 28.6651 44.6447 28.7942C44.2332 28.9265 43.783 29.139 43.2963 29.4318C42.7838 29.7387 42.2197 29.9524 41.6008 30.0739C40.9852 30.1953 40.3158 30.2246 39.5895 30.1649C39.5014 30.1584 39.4348 30.0804 39.4423 29.9903C39.4487 29.9014 39.5261 29.8342 39.6153 29.8418C40.3137 29.8982 40.954 29.87 41.5407 29.755C42.1219 29.6411 42.6527 29.4405 43.133 29.152C43.639 28.8484 44.1107 28.6261 44.548 28.4851C44.9928 28.343 45.4011 28.2855 45.7739 28.3159C45.9501 28.3246 46.1231 28.3463 46.2907 28.381C46.468 28.4178 46.6377 28.4688 46.7968 28.5295Z" fill="#CCCCCC"/>
              <path d="M0.796152 25.1676H2.70326C3.27593 25.1676 3.69711 25.3325 3.96572 25.6611C4.23432 25.9908 4.32135 26.4495 4.2268 27.0384C4.18812 27.2802 4.11936 27.5015 4.02051 27.7032C3.92059 27.9049 3.78951 28.0892 3.6262 28.2563C3.4328 28.4569 3.21576 28.6011 2.97509 28.6879C2.73442 28.7746 2.42713 28.818 2.05323 28.818H1.20336L0.991698 30.1378H0L0.796152 25.1676ZM1.66214 25.9539L1.32799 28.0394H1.93182C2.33151 28.0394 2.62805 27.9569 2.82038 27.791C3.01377 27.6262 3.14055 27.3518 3.2018 26.9679C3.26197 26.597 3.22758 26.3356 3.09865 26.1827C2.9708 26.0298 2.7183 25.9539 2.34118 25.9539H1.66214ZM5.34098 23.8467H6.32516L6.1135 25.1676H6.99023C7.54141 25.1676 7.92284 25.2728 8.13557 25.4832C8.34939 25.6947 8.41815 26.0341 8.34294 26.5026L7.97226 28.818H6.97304L7.32545 26.6143C7.36628 26.3649 7.34694 26.1936 7.26744 26.1036C7.18793 26.0135 7.02354 25.968 6.77212 25.968H5.98564L5.53008 28.818H4.54483L5.34098 23.8467ZM9.41522 25.1676H11.3223C11.8961 25.1676 12.3172 25.3325 12.5848 25.6611C12.8534 25.9908 12.9415 26.4495 12.8469 27.0384C12.8083 27.2802 12.7395 27.5015 12.6396 27.7032C12.5407 27.9049 12.4086 28.0892 12.2463 28.2563C12.0519 28.4569 11.8348 28.6011 11.5942 28.6879C11.3546 28.7746 11.0473 28.818 10.6723 28.818H9.82243L9.61184 30.1378H8.61907L9.41522 25.1676ZM10.2812 25.9539L9.94813 28.0394H10.5509C10.9506 28.0394 11.2471 27.9569 11.4405 27.791C11.6328 27.6262 11.7607 27.3518 11.8219 26.9679C11.881 26.597 11.8467 26.3356 11.7188 26.1827C11.5899 26.0298 11.3384 25.9539 10.9613 25.9539H10.2812Z" fill="#6C78AF"/>
              <path d="M14.5231 22.7904H16.4312L17.2693 27.4125L19.5879 22.7904H21.4886L20.5237 28.8137H19.2505L20.1069 24.1222L17.7689 28.8137H16.3893L15.5105 24.0734L14.8819 28.8137H13.5593L14.5231 22.7904ZM23.7782 27.8387H24.7409L25.2931 24.3911H26.4911L25.8013 28.6955C25.7079 29.28 25.4983 29.7138 25.1728 29.9958C24.8483 30.2766 24.396 30.4176 23.819 30.4176H21.4714L21.6154 29.5218H23.7567C23.9866 29.5218 24.1725 29.4676 24.3133 29.3592C24.4529 29.2507 24.54 29.0935 24.5733 28.8885L24.5851 28.8137H23.5257C22.8477 28.8137 22.3847 28.6835 22.1386 28.4222C21.8915 28.1619 21.8174 27.727 21.9151 27.1175L22.3513 24.3911H23.5354L23.1131 27.0275C23.0594 27.3605 23.0755 27.5795 23.1615 27.6836C23.2474 27.7877 23.4526 27.8387 23.7782 27.8387ZM29.7155 22.7904H31.094L32.7658 28.8137H31.3196L30.9812 27.38H28.2962L27.515 28.8137H26.1366L29.7155 22.7904ZM30.1635 23.9866L28.8882 26.3053H30.7287L30.1635 23.9866ZM37.2795 28.8137H34.9791C34.2839 28.8137 33.7736 28.6141 33.448 28.215C33.1225 27.8159 33.0161 27.2607 33.1311 26.5471C33.1773 26.2543 33.2611 25.9864 33.3814 25.7413C33.5018 25.4973 33.6608 25.2739 33.8585 25.0711C34.0938 24.8282 34.3581 24.6536 34.6514 24.5484C34.9436 24.4432 35.3165 24.3911 35.7677 24.3911H36.7949L37.0506 22.7904H38.2443L37.2795 28.8137ZM36.2383 27.8658L36.6423 25.3433H35.9182C35.4325 25.3433 35.0726 25.4431 34.8362 25.6405C34.602 25.8389 34.4473 26.1686 34.3731 26.6306C34.3011 27.0796 34.3441 27.3973 34.4999 27.5849C34.6568 27.7715 34.963 27.8658 35.4175 27.8658H36.2383ZM39.0286 24.3911H43.6272C44.2933 24.3911 44.7532 24.518 45.0067 24.7718C45.2603 25.0256 45.3409 25.4377 45.2496 26.0092L44.8005 28.8137H43.5949L44.0193 26.161C44.0709 25.8357 44.0559 25.6209 43.971 25.5168C43.8872 25.4127 43.6884 25.3607 43.3747 25.3607H42.7032L42.1509 28.8137H40.9261L41.4794 25.3607H40.0794L39.5272 28.8137H38.3206L39.0286 24.3911ZM47.9163 23.8879H46.6603L46.8365 22.7904H48.0914L47.9163 23.8879ZM47.1277 28.8137H45.8717L46.5797 24.3911H47.8357L47.1277 28.8137ZM48.8715 24.3911H51.1245C51.8047 24.3911 52.271 24.5159 52.5224 24.7653C52.7738 25.0158 52.8533 25.4301 52.7609 26.0092L52.3118 28.8137H51.1138L51.5403 26.1523C51.593 25.8216 51.5747 25.6068 51.4855 25.5082C51.3964 25.4106 51.1933 25.3607 50.8764 25.3607H49.9137L49.3603 28.8137H48.1634L48.8715 24.3911Z" fill="#F89C0E"/>
              </svg>
            </li>
            </Magnetic>

          </ul>
        </motion.div >
      </section>



   );
}
 
export default Stack;