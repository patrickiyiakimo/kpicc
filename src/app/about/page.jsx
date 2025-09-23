import React from "react";
import { FaUsers, FaHandsHelping, FaChild, FaPrayingHands, FaLightbulb } from "react-icons/fa";

const AboutPage = () => {
  return (
    <section id="about" className="bg-gray-50 py-24 px-6 md:px-16 lg:px-32 text-gray-800">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* Hero Intro */}
        <div className="text-center space-y-6">
          <h2 className="text-5xl font-extrabold text-purple-600">
            About Kingdom Prevailers International Christian Centre
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            KPICC is a Spirit-filled church committed to spreading the love of God, nurturing faith, 
            and impacting lives both locally and globally. Our mission is to empower believers to walk 
            in victory through faith, prayer, and service.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition duration-300">
            <div className="flex items-center mb-4 text-purple-600">
              <FaLightbulb className="w-8 h-8 mr-3"/>
              <h3 className="text-2xl font-bold">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To raise a generation of Christ-centered leaders who transform society by living out God's Word 
              with love, integrity, and excellence.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition duration-300">
            <div className="flex items-center mb-4 text-purple-600">
              <FaPrayingHands className="w-8 h-8 mr-3"/>
              <h3 className="text-2xl font-bold">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To build a dynamic community of believers equipped with the knowledge of God’s Word, committed 
              to prayer, worship, discipleship, and community outreach.
            </p>
          </div>
        </div>

        {/* Ministries */}
        <div className="space-y-8">
          <h3 className="text-4xl font-bold text-purple-600 text-center">Our Ministries</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300 text-center">
              <FaUsers className="w-12 h-12 mx-auto mb-4 text-purple-600"/>
              <h4 className="text-xl font-semibold mb-2">Youth Ministry</h4>
              <p className="text-gray-700 leading-relaxed">
                Empowering the next generation through fellowship, mentorship, and spiritual guidance.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300 text-center">
              <FaHandsHelping className="w-12 h-12 mx-auto mb-4 text-purple-600"/>
              <h4 className="text-xl font-semibold mb-2">Outreach & Service</h4>
              <p className="text-gray-700 leading-relaxed">
                Extending God’s love through humanitarian initiatives, charity, and evangelism.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300 text-center">
              <FaChild className="w-12 h-12 mx-auto mb-4 text-purple-600"/>
              <h4 className="text-xl font-semibold mb-2">Children’s Ministry</h4>
              <p className="text-gray-700 leading-relaxed">
                Introducing young hearts to Jesus through interactive learning and activities.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300 text-center">
              <FaUsers className="w-12 h-12 mx-auto mb-4 text-purple-600"/>
              <h4 className="text-xl font-semibold mb-2">Women’s Ministry</h4>
              <p className="text-gray-700 leading-relaxed">
                Creating platforms for women to grow in faith, leadership, and community impact.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300 text-center">
              <FaUsers className="w-12 h-12 mx-auto mb-4 text-purple-600"/>
              <h4 className="text-xl font-semibold mb-2">Men’s Ministry</h4>
              <p className="text-gray-700 leading-relaxed">
                Equipping men to be godly leaders in their homes, workplaces, and communities.
              </p>
            </div>
          </div>
        </div>

        {/* Community */}
        <div className="bg-purple-600 text-white rounded-xl p-10 shadow-xl text-center space-y-6">
          <h3 className="text-3xl font-bold">Community & Fellowship</h3>
          <p className="text-lg leading-relaxed">
            At KPICC, we believe in building strong communities. We host fellowship programs, prayer 
            meetings, workshops, and conferences to strengthen faith and foster meaningful relationships. 
            Everyone is welcomed—from first-time visitors to long-time members.
          </p>
        </div>

        {/* Invitation */}
        <div className="text-center space-y-4">
          <h3 className="text-4xl font-bold text-purple-600">Join Us</h3>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Whether you are seeking a place to grow spiritually, serve others, or connect with a vibrant 
            community of believers, KPICC welcomes you. Join us in worship, prayer, and ministry as we 
            pursue God’s purpose together and impact the world for His glory.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutPage;
