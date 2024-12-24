import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, easing: "ease-in-out", once: true });
  }, []);

  const experiences = [
    {
      id: 1,
      image: "/image/o6.jpg",
      text: "This is my second year at Montfort Secondary School Nyamata. The teachers are very reasonable and fair, and the staff is excellent.Joining the drama club and sports teams opened up new worlds for me. It helped me build confidence, learn teamwork, and find a balance between work and play.Participating in extracurricular activities is often an essential part of a student’s life, helping them develop social skills and find their passions.I'll never forget the excitement of the annual sports day. It was more than just about competing; it was about school spirit and seeing everyone come together as a community.School events like sports days, talent shows, or cultural nights create a sense of unity and foster school pride.",
    },
    {
      id: 1,
      image: "/image/o1.jpg",
      text: "I will never forget how my teachers went above and beyond to make sure I understood the lessons. They took time after school to help students struggling, and it made a huge difference.This reflects the appreciation students feel for teachers who show genuine care and commitment to their academic progress.Exams at Montfort were nerve-wracking, but I learned how to manage my time effectively. The stress was real, but the rewards of doing well were worth it.Exam pressure is a common student experience, and learning time management and coping mechanisms is an important part of personal growth.",
    },
    {
      id: 1,
      image: "/image/i.jpg",
      text: "At Montfort, I learned the true value of friendship. My friends became like family, supporting me through tough times and celebrating every success.Emphasizes how strong, lasting friendships formed in school can significantly impact personal growth and happiness.As a student in a Catholic school, I gained a deeper understanding of faith, community, and service. It helped me stay grounded and focused on the bigger picture beyond schoolwork.As a student in a Catholic school, I gained a deeper understanding of faith, community, and service. It helped me stay grounded and focused on the bigger picture beyond schoolwork.The integration of faith-based activities helps many students develop a stronger sense of spirituality and ethical values.",
    },
    {
      id: 1,
      image: "/image/iii.jpg",
      text: "There were many times I felt overwhelmed by the workload and expectations, but the challenges helped me grow stronger. Overcoming them taught me resilience and how to stay positive under pressure.Reflects how facing academic and personal challenges can contribute to building resilience and perseverance.Living in the school hostel wasn’t easy at first, but over time I learned independence. I had to take care of my own things, and that made me more responsible. Boarding life can be a big transition, teaching independence, time management, and self-sufficiency.",
    },
    
    {
      id: 2,
      image: "/image/st.jpg",
      text: "The school taught me that discipline is the foundation of success. Whether it was punctuality, following school rules, or staying focused on my studies, I’ve learned that discipline is key.This message speaks to how structure and discipline in a school environment help students develop responsibility and focus.At Montfort, I felt like I belonged. There was never a time when I felt like an outsider. The inclusive atmosphere made school life much more enjoyable.A sense of belonging is crucial to a student’s happiness and success. This message reflects the positive, welcoming atmosphere of the school.",
    },
    {
      id: 3,
      image: "/image/student1.jpg",
      text: "Serving as a prefect was one of the most challenging and rewarding experiences. I had to learn how to lead, be a role model, and also listen to my fellow students. It taught me leadership in ways I never expected. The experience of holding a position of responsibility within the school can teach leadership, time management, and problem-solving.At first, I found it hard to balance studying with hanging out with friends. But over time, I learned to manage both, and it made me feel more in control of my life. Balancing academics and social life is a common challenge for students, and developing time management skills is key to success.",
    },
    {
      id: 4,
      image: "/image/h.jpg",
      text: "Montfort has always felt like a second home. The teachers, staff, and even the students create an environment where you feel supported to achieve your best, whether in academics or personal growth.Many students appreciate a nurturing and supportive environment where they feel safe and encouraged to succeed.At first, I found it hard to balance studying with hanging out with friends. But over time, I learned to manage both, and it made me feel more in control of my life.Balancing academics and social life is a common challenge for students, and developing time management skills is key to success.",
    },
    {
      id: 5,
      image: "/image/com.jpg",
      text: "Montfort Secondary School Nyamata has shaped me not just academically but also morally. The teachers are incredibly supportive.I didn’t make the cut for the basketball team, and it was a tough blow. But that experience taught me that failure isn’t the end. I picked myself up, worked harder, and succeeded in other areas.Failure is often seen as a stepping stone toward success, and learning how to deal with it is a vital part of growing up.My senior mentor was an incredible influence on me. They showed me how to navigate the academic pressures of school while also focusing on my personal growth.",
    },
  ];

  return (
    <div
      className="experience-container px-4 py-8 md:py-12 bg-gray-100"
      data-aos="fade-up"
    >
      {/* Title */}
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-8 text-gray-800 font-sulphur">
        Student Experiences
      </h2>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1} // Default to 1 slide on small screens
        
  
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000 }}
        className="w-full"
      >
        {experiences.map((item) => (
          <SwiperSlide key={item.id}>
            {/* Experience Card */}
            <div className="slide flex flex-col md:flex-row items-center md:items-start bg-white shadow-md p-4 rounded-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={item.image}
                alt="Student"
                className="h-32 w-32 md:h-40 md:w-40 object-cover rounded-full shadow-lg mb-4 md:mb-0 md:mr-6"
              />
              {/* Text Content */}
              <div className="text text-center md:text-left w-full">
                <p className="text-gray-700 text-sm md:text-base leading-relaxed font-sulphur">
                  {item.text}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Experience;
