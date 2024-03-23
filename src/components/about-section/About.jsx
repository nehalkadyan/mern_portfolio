import React from 'react'

const About = () => {
  return (
    <section id="about" className='w-full'>
     <div className='mt-16 flex-col md:flex-row flex w-[86%] md:w-[70%] mx-auto items-center '>
        <div className='md:w-1/2'>
          <img className='md:w-[60%]' src = "https://previews.123rf.com/images/djvstock/djvstock1508/djvstock150806855/44096519-web-developer-design-vector-illustration-eps-10.jpg" al = "coder" />
        </div>

        <div className='mt-10 md:mt-0 flex flex-col gap-6 md:w-1/2'>
           <h1 className='text-blue-900 text-lg font-bold'>ABOUT ME</h1>
           <h1 className='text-lg font-bold'>A dedicated Front-end Developer based in New Delhi, India 📍</h1>
           <p className='text-lg'>As a Full Stack Developer, I possess an impressive arsenal of skills in HTML, CSS, tailwind CSS, JavaScript, React.js, Node.js, Express.js, MongoDB and SQL. I have also worked with technologies like Typescript, Next.js, React Native, etc</p>
           <p className='text-lg'>My expertise extends beyond code – I'm dedicated to helping businesses and individuals enhance their online presence and achieve growth. By combining technical prowess with a deep understanding of user experience, I specialize in creating visually appealing and high-performance websites that engage and convert.</p>
        </div>
     </div>
    </section>
  )
}

export default About;