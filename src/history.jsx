import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const History = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);
  return (
    <section className="container mx-auto py-16 px-4 md:px-8 mt-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 font-sulphur">
        Our History
      </h2>
      <div className="flex-col md:flex-row items-center md:items-start">
        {/* Image Section */}
        <div className="w-full md:w-full mb-8 md:mb-0">
          <img
            src="/image/background.jpg" // Replace with the correct image path
            alt="History of Montfort School"
            className="w-full h-[700px] rounded-lg shadow-lg"
          />
        </div>
        

        {/* Text Section */}
        <div className="w-full md:w-full md:pl-8 text-center md:text-left" data-aos="fade-up">
          <p className="text-lg leading-relaxed text-gray-700 mb-4 font-sulphur">
            <strong>Montfort Secondary School, Nyamata</strong>, was founded by 
            the Montfort Brothers of St. Gabriel, a Catholic congregation known 
            for its dedication to education and missionary work across the globe.
            Establishment and Mission: Montfort Secondary School was established to 
            provide quality education to young Rwandans,
             particularly focusing on both academic excellence and moral integrity. 
             The school operates under the auspices of the Montfort Brothers of St. 
             Gabriel, a religious congregation that is involved in education, particularly in African countries.
             Catholic Influence: Like many other Montfort schools worldwide, the institution is likely guided by Catholic values.
              The Brothers of St. Gabriel are known for their emphasis on character formation, spirituality, and community service,
               making Montfort School not only an academic hub but a place for spiritual growth and social development.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-4 font-sulphur">
            Established in the heart of Bugesera District, Eastern Province, 
            Rwanda, the school opened its doors with a mission to provide 
            academic excellence and moral education to young learners. From 
            its humble beginnings, it has grown into one of the country's most 
            prestigious schools.Strong Academic Performance: Over the years,
             Montfort Secondary School has built a reputation for strong academic performance.
             The school offers a range of subjects and has consistently achieved good results in national exams. 
             Students from Montfort are often seen participating in national and regional competitions, 
             particularly in science and arts.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-4 font-sulphur">
            Over the decades, Montfort Secondary School has faced and 
            overcome numerous challenges, including rebuilding efforts during 
            Rwanda’s post-genocide recovery period. These efforts were made 
            possible through the unwavering support of the Montfort Brothers 
            and the local community.
            Science and Technology: The school is particularly known for encouraging students to excel in science subjects. 
            With a growing emphasis on STEM (Science, Technology, Engineering, and Mathematics) education in Rwanda, 
            Montfort has positioned itself as a school that nurtures future innovators and professionals in the fields of technology and health.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 font-sulphur">
            Today, Montfort continues to uphold its legacy of academic 
            excellence and holistic education. It stands as a beacon of hope, 
            discipline, and opportunity for students across Rwanda and beyond, 
            preparing future leaders to shape a better world. thanks for interesting in Montfort Secondary School Nyamata.
          </p>
        </div>
      </div>
    </section>
  );
};

export default History;
