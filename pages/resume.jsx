import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Priyanka | Resume</title>
        <meta
          name='description'
          content='I am a front-end web developer specializing in building exceptional digital experiences.'
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Priyanka Deora</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/clint-briley-50056920a/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/fireclint'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Proven Leadership <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          A results-driven Frontend Developer with hands-on experience in building modern, responsive web applications
using React.js, Next.js, and TypeScript. Strong knowledge of JavaScript frameworks and keen on creating
user-friendly interfaces. Looking for a challenging role to utilize my skills in web development and analytics.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>Bootstrap
            <span className='px-2'>|</span>Redux
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> TypeScript
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            D'arteweb
            </span>
            <span className='px-2'>|</span>Udaipur, Rajasthan
          </p>
          <p className='py-1 italic'>Front End Web Developer (Oct.2024 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Working on Buktec, a pre-accounting application aimed at simplifying financial automated data entry and
organization.
            </li>
            <li>
              Developed and optimized responsive user interfaces using React.js to ensure a smooth user experience.
            </li>
          </ul>
        </div>
        
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Hoicko Technologies Pvt. Ltd.
            </span>
            <span className='px-2'>|</span>Udaipur, Rajasthan
          </p>
          <p className='py-1 italic'>Front End Web Developer (Sep.2023 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript libraries/frameworks.
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>
            <li>
            Enhancing website performance through optimization techniques, ensuring fast load times and smooth user experiences.
            </li>
            <li>
            A passionate problem-solver with a keen eye for detail and a dedication to crafting seamless digital experiences that resonate with users.
            </li>
            <li>
            Creating adaptable layouts and interfaces that work flawlessly across various devices and screen sizes.
            </li>
          </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              ARCGATE
            </span>
            <span className='px-2'>|</span>Udaipur, Rajasthan
          </p>
          <p className='py-1 italic'>Senior Research Analyst (Dec.2021 - Aug.2023)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Examine and validate the accuracy of the data to ensure that it produces meaningful information.
            </li>
            <li>
            Gathering and synthesizing large volumes of data from diverse sources, employing statistical techniques and software tools to derive valuable insights.
            </li>
            <li>
            Utilizing a blend of quantitative metrics and qualitative assessments to provide a holistic view of research findings, enabling informed decision-making.
            </li>
            <li>
            Applying critical thinking and problem-solving skills to address complex research challenges, ensuring accurate and reliable data analysis.
            </li>
            <li>
              Over exceeded the targets by 20%.
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Other Professional Experience
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>NGO & SONS</span>
            <span className='px-2'>|</span>Australia, Freelancing
          </p>
          <p className='py-1 italic'>Mathematics tutor</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Provided high quality of mathematical solutions for the students.
            </li>
            <li>
              Customized tutoring and instructional approaches to meet the needs to diverse client populations. Propelled learning mastering and academic success for dozens of students, boosting their CGPA and test scores to new bests.
            </li>
            <li>
             Dedicated and results-driven Mathematics Tutor with a passion for fostering a deep understanding of mathematical concepts among students
            </li>
            <li>
            Creating tailored lesson plans to meet the unique learning styles and abilities of students, ensuring comprehensive comprehension of mathematical principles.
            </li>
            <li>
            Conducting regular assessments and progress evaluations to track student development, addressing areas of improvement proactively.
            </li>
          </ul>
        </div>

      </div>
    </>
  );
};

export default resume;
