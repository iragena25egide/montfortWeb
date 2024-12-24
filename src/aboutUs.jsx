import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);
  return (
    <section className="container mx-auto py-16 px-4 md:px-8 mt-20">
      <div className="flex-row md:flex-row items-center md:items-start">
        {/* Image Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 font-sulphur">
        About The School.
      </h2>
        <div className="w-full md:w-full mb-8 md:mb-0">
          <img
            src="/image/house.jpg" // Replace with the correct path to the image
            alt="Montfort Secondary School"
            className="w-full h-[700px] rounded-lg shadow-lg"
          />
        </div>
        
        {/* Text Section */}
        <div className="w-full md:w-full md:pl-8 text-center md:text-left" data-aos="fade-down">
          <p className="text-1xl font-sulphur leading-relaxed text-gray-700 mb-4">
            <strong>Montfort Secondary School, Nyamata</strong>, is a prestigious institution in Rwanda 
            located in the Eastern Province, near the town of Nyamata in Bugesera District. Named after 
            the Montfort Brothers of St. Gabriel, the school is committed to providing values-based education 
            alongside academic excellence.As part of the Montfort Brothers of St. Gabriel, the school is rooted in 
            Christian values, particularly those of Catholic teachings. Religious education is a key part of the curriculum, 
            and the school emphasizes moral and spiritual growth alongside academic achievement.
          </p>
          <p className="text-1xl font-sulphur leading-relaxed text-gray-700 mb-4">
            Rooted in Catholic teachings, the school emphasizes moral, spiritual, and academic growth. It 
            offers both Ordinary and Advanced Level education with a reputation for strong performance in 
            sciences and humanities.The Montfort Brothers are known for their commitment to fostering good discipline
             and shaping students into responsible and ethical citizens. The school's focus on respect, integrity, 
             and community service helps students grow into well-rounded individuals.Montfort Secondary School places great
              importance on community service. Students are encouraged to participate in projects that benefit the local
               community, helping to foster a sense of responsibility and giving back to society.
          </p>
          <p className="text-1xl font-sulphur leading-relaxed text-gray-700">
            Beyond academics, students engage in extracurricular activities such as sports, arts, and 
            community service. Montfort nurtures leadership, discipline, and global citizenship, shaping 
            well-rounded individuals ready for the future.The school offers both Ordinary (O-Level) 
           Students are trained in subjects like Mathematics, Sciences, Humanities,
            and Languages, and they are encouraged to excel academically.The school has ample outdoor space
             for sports and recreational activities. The campus provides a conducive environment for learning 
             and development, with green spaces and facilities that cater to a wide variety of student interests.
          </p>
        </div>
      </div>
    </section>
    
  );
};

export default AboutUs;
