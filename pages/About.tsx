import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Leaf, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const About: React.FC = () => {
  const milestones = [
    { year: '2005', title: 'Founded', description: 'Madan Mahal Paper Mills established with a vision for sustainable manufacturing' },
    { year: '2010', title: 'Growth Phase', description: 'Expanded production capacity and introduced eco-friendly product lines' },
    { year: '2015', title: 'Innovation', description: 'Pioneered recycled paper technology in central India' },
    { year: '2020', title: 'Sustainability', description: 'Achieved 100% renewable energy for manufacturing operations' },
  ];

  const values = [
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Committed to reducing carbon footprint and using 100% recycled materials in our products.'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Every product undergoes rigorous quality testing to meet international standards.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Supporting local communities through fair employment and sustainable business practices.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Continuously investing in technology to improve product quality and environmental impact.'
    },
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      description: 'Leading the company with 25+ years of experience in paper manufacturing.'
    },
    {
      name: 'Priya Sharma',
      role: 'Production Manager',
      description: 'Overseeing operations and ensuring highest quality standards across all products.'
    },
    {
      name: 'Amit Patel',
      role: 'Sustainability Officer',
      description: 'Driving environmental initiatives and implementing eco-friendly manufacturing practices.'
    },
    {
      name: 'Neha Gupta',
      role: 'Sales Director',
      description: 'Building partnerships and expanding market reach across India and globally.'
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-paper-50 to-white overflow-hidden pt-24 pb-32">
        <div className="absolute inset-0 z-0 opacity-5 bg-[radial-gradient(#4d8960_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block py-2 px-4 rounded-full bg-paper-100 text-paper-700 text-sm font-bold mb-6 border border-paper-200">
              Our Story
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              About <span className="text-paper-600">Madan Mahal</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              For nearly two decades, we've been crafting premium paper products while respecting our planet. 
              Our mission is simple: deliver quality notebooks and registers that inspire creativity without compromising our environment.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                Madan Mahal was born from a passion for sustainable business and exceptional quality. What started as a small family operation has grown into a trusted name in paper manufacturing across India.
              </p>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                We believe that business responsibility goes beyond profit margins. Every notebook we produce, every register we bind is crafted with care for both our customers and our environment.
              </p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Our state-of-the-art facilities use 100% recycled water management systems and renewable energy sources, ensuring that quality products don't come at the cost of our planet.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-paper-600 hover:bg-paper-700 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-xl"
              >
                Connect With Us
                <ArrowRight size={20} />
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-square bg-gradient-to-br from-paper-100 to-paper-50 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-paper-600 mb-2">20+</div>
                  <p className="text-gray-700 font-semibold">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-20 bg-paper-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Milestones</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key moments that shaped our journey towards sustainable excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="p-6 bg-white rounded-2xl border border-paper-100 hover:shadow-lg transition-all">
                <div className="text-4xl font-bold text-paper-600 mb-3">{milestone.year}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision we make
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="p-8 bg-gradient-to-br from-paper-50 to-white rounded-2xl border border-paper-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <div className="w-12 h-12 bg-paper-200 rounded-xl flex items-center justify-center text-paper-700 mb-4">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-paper-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to excellence and sustainability
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-paper-100">
                <div className="aspect-square bg-gradient-to-br from-paper-100 to-paper-50 flex items-center justify-center">
                  <Users size={64} className="text-paper-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-paper-700 font-semibold mb-3 text-sm">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-paper-50 to-white rounded-2xl border border-paper-100">
              <div className="text-5xl font-bold text-paper-600 mb-2">500K+</div>
              <p className="text-gray-700 font-semibold">Products Sold</p>
              <p className="text-gray-600 text-sm mt-2">Trusted by customers worldwide</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-paper-50 to-white rounded-2xl border border-paper-100">
              <div className="text-5xl font-bold text-paper-600 mb-2">50+</div>
              <p className="text-gray-700 font-semibold">Wholesale Partners</p>
              <p className="text-gray-600 text-sm mt-2">Growing network across India</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-paper-50 to-white rounded-2xl border border-paper-100">
              <div className="text-5xl font-bold text-paper-600 mb-2">100%</div>
              <p className="text-gray-700 font-semibold">Recycled Materials</p>
              <p className="text-gray-600 text-sm mt-2">Committed to sustainability</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-paper-50 to-white rounded-2xl border border-paper-100">
              <div className="text-5xl font-bold text-paper-600 mb-2">0</div>
              <p className="text-gray-700 font-semibold">Carbon Footprint</p>
              <p className="text-gray-600 text-sm mt-2">100% renewable energy usage</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-paper-600 to-paper-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl mb-10 text-paper-100 max-w-2xl mx-auto">
            Whether you're a retailer, wholesaler, or just looking for premium paper products, we'd love to work with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-paper-700 font-bold rounded-full hover:bg-paper-50 transition-all shadow-lg hover:shadow-xl"
            >
              Explore Products
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:bg-opacity-10 transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
