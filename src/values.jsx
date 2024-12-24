import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const MissionVision = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 mt-20" >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 font-sulphur">
          Our Mission & Vision
        </h2>
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-8 md:space-y-0 md:space-x-12">
          {/* Mission */}
          <div className="w-full md:w-1/2 p-6 bg-white shadow-lg rounded-lg" data-aos="fade-down">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4 font-sulphur">
              Mission
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg font-sulphur">
            Our mission at Montfort Secondary School Nyamata is to provide quality education that fosters holistic development, rooted in Catholic values. We are committed to nurturing the minds and hearts of our students through academic excellence, discipline, and character formation.To educate students in a Christ-centered environment with an emphasis on Catholic teachings and traditions.To provide a transformative education rooted in Catholic values, nurturing the intellectual, moral, and spiritual growth of every student, and empowering them to become responsible leaders and compassionate global citizens.At Montfort Secondary School, we are dedicated to fostering a nurturing and inclusive environment where each student is encouraged to reach their full potential—academically, morally, and spiritually. Our mission is to provide a high-quality education that integrates rigorous academics with the values of faith, love, and service. We aim to guide students not only in acquiring knowledge but also in developing character, leadership, and a strong sense of social responsibility.Rooted in the teachings of Jesus Christ and inspired by the charism of St. Louis de Montfort, our school is committed to promoting the dignity of each person and the importance of community. We seek to instill a sense of purpose and commitment in our students by encouraging them to use their talents and education to serve others, both locally and globally.

Our curriculum is designed to foster intellectual curiosity, critical thinking, and a love for lifelong learning. We strive to cultivate a balanced educational experience that challenges students to excel academically while nurturing their spiritual growth and character formation. Through a wide range of extracurricular activities, including sports, arts, and community outreach, we empower students to explore their interests, develop their talents, and grow into well-rounded individuals.
            </p>
          </div>

          {/* Vision */}
          <div className="w-full md:w-1/2 p-6 bg-white shadow-lg rounded-lg" data-aos="fade-down">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4 font-sulphur">
              Vision
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg font-sulphur">
            To Foster Holistic Education and Spiritual Growth, Empowering Future Leaders to Serve Humanity with Integrity, Compassion, and Excellence.At Montfort Secondary School, we envision a community where every student is empowered to reach their fullest potential through an education that nurtures both mind and spirit. As a Catholic institution rooted in the teachings of St. Montfort, we strive to create an environment where academic excellence is paired with deep moral and spiritual development.

Our vision is to provide a well-rounded education that fosters critical thinking, creativity, and innovation, while upholding values such as respect, responsibility, and empathy. We believe that every student, regardless of background or ability, deserves the opportunity to grow academically, socially, and spiritually in an atmosphere of support and encouragement.

By integrating faith with education, we aim to cultivate a strong sense of character, ethical values, and a commitment to service within our students. We prepare our graduates to be not only leaders in their fields but also compassionate individuals who contribute positively to society. They are equipped with the necessary skills to excel in the world while remaining rooted in Christian principles that guide them towards justice, peace, and solidarity.

Through dedication to both academic rigor and moral responsibility, Montfort Secondary School seeks to shape future leaders who will make a difference in their communities, guided by a spirit of integrity, humility, and service to others.At Montfort Secondary School, we envision a community where every student is empowered to reach their fullest potential through an education that nurtures both mind and spirit. As a Catholic institution rooted in the teachings of St. Montfort, we strive to create an environment where academic excellence is paired with deep moral and spiritual development.Our vision is to provide a well-rounded education that fosters critical thinking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
