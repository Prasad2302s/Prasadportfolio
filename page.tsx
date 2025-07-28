
'use client';

import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const [playingVideos, setPlayingVideos] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('adnHO5l45KA_CemeM');
  }, []);

  // Scroll effect for navbar and active section detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ['hero', 'about', 'graphics', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 2,
      title: 'Wake Up from Death',
      category: '3d-animation',
      description: 'Horror-themed 3D animation with environment design and post-production',
      image: 'https://static.readdy.ai/image/09345a4ab5030d1b917af6cf1aed5a1f/7be2054967cd70fc5bc30668f5eeb090.png',
      tags: ['3D Animation', 'Horror', 'Environment'],
      featured: true,
      videoUrl: 'https://www.youtube.com/embed/6nZNCpqwuFQ?si=q4-Ude05NyDfjBMi',
      details: {
        overview: 'A horror-themed short animation showcasing advanced 3D modeling, environment design, and post-production techniques.',
        technologies: ['Blender', 'Maya', 'Premiere Pro'],
        duration: '8 weeks',
        client: 'Personal Project',
        features: [
          '3D environment design and modeling',
          'Atmospheric lighting and rendering',
          'Sound editing and audio post-production',
          'Complete post-production workflow'
        ]
      }
    },
    {
      id: 6,
      title: 'Cupcake Ad',
      category: '3d-animation',
      description: 'A sweet and vibrant motion graphics ad that brings cupcakes to life with playful animations and mouth-watering visuals.',
      image: 'https://static.readdy.ai/image/09345a4ab5030d1b917af6cf1aed5a1f/565b44a0c4fc3b0092bad1d11820826d.png',
      tags: ['Motion Graphics', 'Branding', 'Video Editing'],
      videoUrl: 'https://youtube.com/embed/dkn5rveMoKo?si=wqBHi9QS8gJdYSg0',
      details: {
        overview: 'A comprehensive corporate training video series designed to enhance professional development and knowledge transfer.',
        technologies: ['Premiere Pro', 'After Effects', 'Audacity', 'Photoshop'],
        duration: '6 weeks',
        client: '3D Animation Environment Solutions',
        features: [
          'Structured professional presentation design',
          'Interactive training modules and segments',
          'Clear audio mixing and visual optimization',
          'Modular content structure for easy navigation'
        ]
      }
    },
    {
      id: 7,
      title: 'Veggies Ad',
      category: 'video-editing',
      description: 'Fresh from the farm to your bag — healthy, vibrant vegetables picked for purity and taste.',
      image: 'https://static.readdy.ai/image/09345a4ab5030d1b917af6cf1aed5a1f/5ca70df99e60b150c8e0620bc1d051ba.png',
      tags: ['Video Editing', 'Motion Graphics', 'Branding'],
      videoUrl: 'https://youtube.com/embed/0yw3jj98Dew?si=OJdQGPi-MWM6p693',
      details: {
        overview: 'An elegant fashion brand campaign video that combines high-end cinematography with sophisticated storytelling.',
        technologies: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Photoshop'],
        duration: '7 weeks',
        client: 'Luxury Motion Graphics Brand',
        features: [
          'Cinematic fashion cinematography and styling',
          'Professional color grading and visual enhancement',
          'Brand storytelling through compelling narrative',
          'Multi-platform content optimization'
        ]
      }
    }
  ];

  const additionalProjects = [
    {
      id: 3,
      title: 'Cricket Tournament',
      category: 'video-editing',
      description: 'Editing a Village level cricket tournament',
      image: 'https://static.readdy.ai/image/09345a4ab5030d1b917af6cf1aed5a1f/5db97102857b67b606c9bc5e56c4a497.png',
      tags: ['Video Editing'],
      videoUrl: 'https://www.youtube.com/embed/dEZscJ9pgtA?si=z8L13CDmndg90Vdd',
      details: {
        overview: 'Complete video editing for a village-level cricket tournament, capturing the excitement and community spirit.',
        technologies: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve'],
        duration: '3 weeks',
        client: 'Local Sports Committee',
        features: [
          'Multi-camera editing and synchronization',
          'Dynamic sports graphics and scoreboards',
          'Color grading and audio enhancement',
          'Highlight reels and promotional content'
        ]
      }
    },
    {
      id: 4,
      title: 'Sneaker Wicker',
      category: '3d-animation',
      description: 'Modern sneaker brand design with vibrant visual identity',
      image: 'https://static.readdy.ai/image/09345a4ab5030d1b917af6cf1aed5a1f/037f54928801591630ab85569dded14f.png',
      tags: ['Motion Graphics', 'Branding', 'Video Editing'],
      videoUrl: 'https://www.youtube.com/embed/_8HaF_Wx5qA8',
      details: {
        overview: 'Complete brand identity and motion graphics for a modern sneaker brand, including logo animation and promotional videos.',
        technologies: ['After Effects', 'Illustrator', 'Premiere Pro'],
        duration: '4 weeks',
        client: 'Sneaker Brand',
        features: [
          'Dynamic logo animation and branding',
          'Product showcase videos',
          'Social media content creation',
          'Brand guidelines and visual identity'
        ]
      }
    },
    {
      id: 1,
      title: 'Edu Play App',
      category: 'ui-design',
      description: 'Interactive educational app design with user-centric approach',
      image: 'https://static.readdy.ai/image/09345a4ab5030d1b917af6cf1aed5a1f/d3072a98ec58d5f9ccd0fc633c464eeb.png',
      tags: ['UI Design', 'Education'],
      featured: false,
      externalUrl: 'https://www.behance.net/gallery/229813291/EDUPLAY-CASE-STUDY',
      details: {
        overview: 'A comprehensive educational application designed to make learning interactive and engaging for students of all ages.',
        technologies: ['Figma', 'Adobe XD', 'Photoshop'],
        duration: '6 weeks',
        client: 'Educational Institute',
        features: [
          'Interactive learning modules with gamification',
          'Clean, intuitive user interface design',
          'User-centric approach with accessibility features',
          'Responsive design for multiple devices'
        ]
      }
    },
    {
      id: 9,
      title: 'Low Poly 3D',
      category: 'video-editing',
      description: 'Comprehensive training video series designed for corporate learning and professional development',
      image: 'https://static.readdy.ai/image/09345a4ab5030d1b917af6cf1aed5a1f/f1a11962b9f2600fbdd0fade69b1d2c3.png',
      tags: ['Video Editing', '3D Animation', 'Environment'],
      videoUrl: 'https://youtube.com/embed/kByX9_Un0GM?si=8RjbRpB8cIWpn8PW',
      details: {
        overview: 'A comprehensive corporate training video series designed to enhance professional development and knowledge transfer.',
        technologies: ['Premiere Pro', 'After Effects', 'Audacity', 'Photoshop'],
        duration: '6 weeks',
        client: '3D Animation Environment Solutions',
        features: [
          'Structured professional presentation design',
          'Interactive training modules and segments',
          'Clear audio mixing and visual optimization',
          'Modular content structure for easy navigation'
        ]
      }
    }
  ];

  const graphicsShowcase = [
    {
      id: 1,
      title: 'Cricket Graphics',
      image: 'https://static.readdy.ai/image/09345a4ab5030d1b917af6cf1aed5a1f/ae7e74c467906484e77d22ebc64e5032.png'
    },
    {
      id: 2,
      title: 'Cricket Graphics',
      image: 'https://static.readdy.ai/image/09345a4ab5030d1b917af6cf1aed5a1f/d38f7a9404bbee1f207af17f82bef62a.png'
    },
    {
      id: 3,
      title: 'Cricket Graphics',
      image: 'https://static.readdy.ai/image/09345a4ab5030d1b917af6cf1aed5a1f/95fb32fe7354372295c87cf2068dcbdd.png'
    },
    {
      id: 4,
      title: 'Cricket Graphics',
      image: 'https://static.readdy.ai/image/09345a4ab5030d1b917af6cf1aed5a1f/56d5b5c783a30af8dc4285f2708ca1b6.png'
    },
    {
      id: 5,
      title: 'Cricket Graphics',
      image: 'https://static.readdy.ai/image/09345a4ab5030d1b917af6cf1aed5a1f/f899c67cae9986158dfc6e34e12dcc39.png'
    },
    {
      id: 6,
      title: 'Ad',
      image: 'https://static.readdy.ai/image/09345a4ab5030d1b917af6cf1aed5a1f/157ae58cabda02117b92a9fad6c203c2.png'
    },
    {
      id: 7,
      title: 'Social Media Graphics',
      image: 'https://static.readdy.ai/image/09345a4ab5030d1b917af6cf1aed5a1f/83125540e9c383f0ec0e92b55f7ad6fb.png'
    },
    {
      id: 8,
      title: 'Wedding Invite',
      image: 'https://static.readdy.ai/image/09345a4ab5030d1b917af6cf1aed5a1f/c7f6801d7a3a2a9d53359cc7f5f80106.png'
    },
    {
      id: 9,
      title: 'Wedding Invite',
      image: 'https://static.readdy.ai/image/09345a4ab5030d1b917af6cf1aed5a1f/f6487e0b6df37d275b94d8fef4a06830.png'
    },
    {
      id: 10,
      title: 'Illustration Graphics',
      image: 'https://static.readdy.ai/image/09345a4ab5030d1b917af6cf1aed5a1f/7f311ebc3620c2f14ad15af8f0af4bc8.png'
    }
  ];

  const openProjectModal = (project) => {
    if (project.externalUrl) {
      window.open(project.externalUrl, '_blank');
    } else {
      setSelectedProject(project);
    }
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  const toggleVideoPlay = (projectId) => {
    setPlayingVideos((prev) => ({ ...prev, [projectId]: !prev[projectId] }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Validate form data
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitStatus('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    if (formData.message.length > 500) {
      setSubmitStatus('Message must be 500 characters or less.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'psawant2302@gmail.com'
      };

      await emailjs.send(
        'service_p54r00m',
        'template_tpeyqo8',
        templateParams,
        'adnHO5l45KA_CemeM'
      );

      setSubmitStatus('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('Failed to send message. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMobileMenu();
  };

  const getNavLinkClass = (section) => {
    return activeSection === section
      ? "text-orange-600 hover:text-orange-700 transition-colors cursor-pointer font-medium"
      : "text-gray-700 hover:text-orange-600 transition-colors cursor-pointer font-medium";
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-md shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button onClick={() => scrollToSection('hero')} className="text-2xl font-extrabold text-orange-600 cursor-pointer hover:text-orange-700 transition-colors">
              Prasad.S
            </button>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('hero')} className={getNavLinkClass('hero')}>
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className={getNavLinkClass('about')}>
                About
              </button>
              <button onClick={() => scrollToSection('graphics')} className={getNavLinkClass('graphics')}>
                Graphics
              </button>
              <button onClick={() => scrollToSection('portfolio')} className={getNavLinkClass('portfolio')}>
                Portfolio
              </button>
              <button onClick={() => scrollToSection('contact')} className={getNavLinkClass('contact')}>
                Contact
              </button>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMobileMenu} className="w-6 h-6 flex items-center justify-center">
                <i className={`text-xl text-gray-700 transition-transform duration-300 ${isMobileMenuOpen ? 'ri-close-line rotate-90' : 'ri-menu-line'}`}></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
          onClick={closeMobileMenu}
        ></div>
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-16 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6">
          <div className="space-y-4">
            <button
              onClick={() => scrollToSection('hero')}
              className={`w-full text-left py-3 px-4 rounded-lg transition-all duration-300 flex items-center space-x-3 ${activeSection === 'hero' ? 'bg-orange-100 text-orange-600' : 'hover:bg-gray-100 text-gray-700'
                }`}
            >
              <i className="ri-home-4-line text-xl"></i>
              <span className="font-medium">Home</span>
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`w-full text-left py-3 px-4 rounded-lg transition-all duration-300 flex items-center space-x-3 ${activeSection === 'about' ? 'bg-orange-100 text-orange-600' : 'hover:bg-gray-100 text-gray-700'
                }`}
            >
              <i className="ri-user-line text-xl"></i>
              <span className="font-medium">About</span>
            </button>
            <button
              onClick={() => scrollToSection('graphics')}
              className={`w-full text-left py-3 px-4 rounded-lg transition-all duration-300 flex items-center space-x-3 ${activeSection === 'graphics' ? 'bg-orange-100 text-orange-600' : 'hover:bg-gray-100 text-gray-700'
                }`}
            >
              <i className="ri-image-line text-xl"></i>
              <span className="font-medium">Graphics</span>
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className={`w-full text-left py-3 px-4 rounded-lg transition-all duration-300 flex items-center space-x-3 ${activeSection === 'portfolio' ? 'bg-orange-100 text-orange-600' : 'hover:bg-gray-100 text-gray-700'
                }`}
            >
              <i className="ri-briefcase-line text-xl"></i>
              <span className="font-medium">Portfolio</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`w-full text-left py-3 px-4 rounded-lg transition-all duration-300 flex items-center space-x-3 ${activeSection === 'contact' ? 'bg-orange-100 text-orange-600' : 'hover:bg-gray-100 text-gray-700'
                }`}
            >
              <i className="ri-mail-line text-xl"></i>
              <span className="font-medium">Contact</span>
            </button>
          </div>

          {/* Mobile Menu Social Links */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-4">Follow Me</p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/the_cinemastic"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 cursor-pointer"
              >
                <i className="ri-instagram-line"></i>
              </a>
              <a
                href="https://linkedin.com/in/prasad-sawant-942a98251"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 cursor-pointer"
              >
                <i className="ri-linkedin-fill"></i>
              </a>
              <a
                href="mailto:psawant2302@gmail.com"
                className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 cursor-pointer"
              >
                <i className="ri-mail-line"></i>
              </a>
            </div>
          </div>

          {/* Mobile Menu Contact Info */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-4">Get in Touch</p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <i className="ri-mail-line text-orange-600"></i>
                <span className="text-sm text-gray-700">psawant2302@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-phone-line text-orange-600"></i>
                <span className="text-sm text-gray-700">+91 7775953038</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-map-pin-line text-orange-600"></i>
                <span className="text-sm text-gray-700">Satara, Maharashtra</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-blue-50 to-purple-50"></div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-orange-300 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-32 right-32 w-24 h-24 bg-blue-300 rounded-full blur-lg animate-pulse delay-500"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-purple-300 rounded-full blur-lg animate-pulse delay-1000"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-20 animate-bounce"></div>
          <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-bounce delay-1000"></div>
          <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-gradient-to-r from-green-400 to-teal-400 rounded-full opacity-20 animate-bounce delay-500"></div>
          <div className="absolute bottom-1/3 left-1/4 w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-20 animate-bounce delay-1500"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-6">
                {/* Status Badge */}
                <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="w-3 h-3 bg-white rounded-full mr-3 animate-pulse"></div>
                  Available for Projects
                </div>

                {/* Main Title */}
                <div className="space-y-4">
                  <h1 className="text-6xl lg:text-7xl font-bold text-gray-800 leading-tight">
                    <span className="inline-block transform hover:scale-105 transition-transform duration-300">Prasad S Sawant</span>
                  </h1>

                  <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-orange-600 via-red-500 to-purple-600 bg-clip-text text-transparent">
                    Designer | Editor
                  </div>

                </div>

                {/* Description */}
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  I bring <span className="text-orange-600 font-semibold">creative visions</span> to life through
                  <span className="text-blue-600 font-semibold"> video editing</span>,
                  <span className="text-purple-600 font-semibold"> UI design</span>, and
                  <span className="text-green-600 font-semibold"> 3D animation</span>.
                </p>

                {/* Tagline */}
                <p className="text-2xl font-bold text-orange-600 text-center lg:text-left">
                  Let's create something extraordinary together.
                </p>

                {/* Stats */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-8 py-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">15+</div>
                    <div className="text-sm text-gray-600">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">3+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button onClick={() => scrollToSection('portfolio')} className="group relative inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap transform hover:scale-105">
                  <span className="relative z-10">View My Work</span>
                  <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
                </button>
                <button onClick={() => scrollToSection('contact')} className="group relative inline-flex items-center justify-center bg-white hover:bg-orange-50 text-orange-600 border-2 border-orange-500 px-8 py-4 rounded-full font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <span className="relative z-10">Get In Touch</span>
                  <i className="ri-message-2-line ml-2 group-hover:scale-110 transition-transform"></i>
                </button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-6 pt-4">
                <a
                  href="https://instagram.com/the_cinemastic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
                >
                  <i className="ri-instagram-line text-xl"></i>
                </a>
                <a
                  href="https://linkedin.com/in/prasad-sawant-942a98251"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
                >
                  <i className="ri-linkedin-fill text-xl"></i>
                </a>
                <a
                  href="mailto:psawant2302@gmail.com"
                  className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
                >
                  <i className="ri-mail-line text-xl"></i>
                </a>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-400 to-purple-400 rounded-full blur-2xl opacity-30 animate-pulse scale-110"></div>

                {/* Rotating Ring */}
                <div className="absolute inset-0 border-4 border-gradient-to-r from-orange-400 to-purple-400 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>

                {/* Profile Image */}
                <img
                  src="https://static.readdy.ai/image/09345a4ab5030d1b917af6cf1aed5a1f/809c825b46d1d234b9ca9751817bf751.jfif"
                  alt="Prasad S Sawant"
                  className="relative z-10 w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover object-top shadow-2xl border-8 border-white transform hover:scale-105"
                />

                {/* Floating Skills */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce z-20 border-2 border-orange-100">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg" alt="Premiere Pro" className="w-10 h-10" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce delay-500 z-20 border-2 border-blue-100">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" alt="Photoshop" className="w-10 h-10" />
                </div>
                <div className="absolute top-1/2 -right-8 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce delay-1000 z-20 border-2 border-purple-100">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma" className="w-10 h-10" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About <span className="text-orange-600">Me</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm a passionate creative professional with expertise in video editing, UI design, and 3D animation. With years of experience in bringing digital visions to life, I specialize in creating compelling visual experiences that engage and inspire audiences.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Profile Images */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-blue-200 rounded-2xl blur-xl opacity-30"></div>
                  <img
                    src="https://static.readdy.ai/image/09345a4ab5030d1b917af6cf1aed5a1f/15ccf519c9766e5bdaaf6bfe52569fc2.jfif"
                    alt="Creative Workspace"
                    className="relative z-10 w-full h-[400px] object-cover object-top rounded-2xl shadow-2xl border-4 border-white transform hover:scale-105 transition-transform duration-300"
                  />

                </div>

                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-pink-200 rounded-2xl blur-xl opacity-30"></div>
                  <img
                    src="https://readdy.ai/api/search-image?query=Professional%20creative%20designer%20working%20on%20digital%20projects%2C%20modern%20workspace%20with%20multiple%20monitors%2C%20video%20editing%20timeline%2C%20UI%20design%20mockups%2C%203D%20animation%20software%2C%20colorful%20ambient%20lighting%2C%20clean%20minimalist%20setup%2C%20technology%20and%20creativity%20combined%2C%20inspirational%20workspace%20environment%2C%20high-quality%20professional%20photography%20style&width=400&height=254&seq=about-workspace-2&orientation=landscape"
                    alt="Digital Creative Process"
                    className="relative z-10 w-full h-[254px] object-cover object-top rounded-2xl shadow-2xl border-4 border-white transform hover:scale-105 transition-transform duration-300"
                  />

                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  My approach combines technical excellence with creative storytelling, ensuring every project not only looks stunning but also effectively communicates your message and achieves your goals.
                </p>

                <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 border border-orange-100">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">What I Do</h3>
                  <p className="text-gray-600 mb-6">
                    I specialize in creating comprehensive digital experiences that combine aesthetics with functionality, bringing your creative visions to life through multiple disciplines.
                  </p>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                    <i className="ri-film-line text-white text-xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Video Editing</h3>
                  <p className="text-gray-600 text-sm">Professional video editing with cinematic storytelling and seamless post-production workflows.</p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                    <i className="ri-palette-line text-white text-xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">UI Design</h3>
                  <p className="text-gray-600 text-sm">User-centric interface design that combines aesthetics with functionality and usability.</p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                    <div className="text-white font-bold text-xs" style={{ fontFamily: 'Pacifico, serif' }}>3D</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">3D Animation</h3>
                  <p className="text-gray-600 text-sm">Dynamic 3D animations and motion graphics that bring concepts to life with stunning visual impact.</p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                    <i className="ri-brush-line text-white text-xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Motion Graphics</h3>
                  <p className="text-gray-600 text-sm">Engaging motion graphics and visual effects that enhance storytelling and brand communication.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Skills & Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mastering the tools and techniques that bring creative visions to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-film-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Video Editing</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">DaVinci Resolve</span>
                  <span className="text-orange-600 font-semibold">70%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Adobe Premiere Pro</span>
                  <span className="text-orange-600 font-semibold">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-pencil-ruler-2-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">UI Design</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Figma</span>
                  <span className="text-blue-600 font-semibold">92%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Adobe XD</span>
                  <span className="text-blue-600 font-semibold">88%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '88%' }}></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Sketch</span>
                  <span className="text-blue-600 font-semibold">60%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-slideshow-3-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">3D Animation</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Blender</span>
                  <span className="text-green-600 font-semibold">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">After Effects</span>
                  <span className="text-green-600 font-semibold">93%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '93%' }}></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Maya</span>
                  <span className="text-green-600 font-semibold">75%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-image-edit-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Graphics</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Photoshop</span>
                  <span className="text-purple-600 font-semibold">95%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Illustrator</span>
                  <span className="text-purple-600 font-semibold">88%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '88%' }}></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Canva</span>
                  <span className="text-purple-600 font-semibold">95%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">My Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore my creative work spanning video editing, UI design, and 3D animation
            </p>
          </div>

          {/* Main Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group transform hover:scale-105 border border-gray-100 cursor-pointer">
                <div className="relative overflow-hidden">
                  {project.videoUrl ? (
                    <div className="relative w-full h-48">
                      {playingVideos[project.id] ? (
                        <iframe
                          src={`${project.videoUrl}&autoplay=1&mute=1`}
                          title={project.title}
                          className="w-full h-full"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        ></iframe>
                      ) : (
                        <div onClick={() => toggleVideoPlay(project.id)}>
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 transform hover:scale-110">
                              <i className="ri-play-fill text-2xl text-gray-800 ml-1"></i>
                            </div>
                          </div>
                        </div>
                      )
                      }
                    </div>
                  ) : (
                    <div onClick={() => openProjectModal(project)}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover object-top group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  )}
                </div>

                <div className="p-6" onClick={() => project.videoUrl ? toggleVideoPlay(project.id) : openProjectModal(project)}>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Show More Card */}
            {!showMoreProjects && (
              <div className="bg-gradient-to-br from-orange-100 to-blue-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer transform hover:scale-105 border border-orange-200">
                <div
                  className="h-full p-8 flex flex-col items-center justify-center text-center"
                  onClick={() => setShowMoreProjects(true)}
                >
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-arrow-down-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    View More Projects
                  </h3>
                  <p className="text-gray-600">
                    Discover more of my creative work
                  </p>
                </div>
              </div>
            )}

            {/* Additional Projects */}
            {showMoreProjects && additionalProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group animate-fadeIn transform hover:scale-105 border border-gray-100 cursor-pointer">
                <div className="relative overflow-hidden">
                  {project.videoUrl ? (
                    <div className="relative w-full h-48">
                      {playingVideos[project.id] ? (
                        <iframe
                          src={`${project.videoUrl}&autoplay=1&mute=1`}
                          title={project.title}
                          className="w-full h-full"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        ></iframe>
                      ) : (
                        <div onClick={() => toggleVideoPlay(project.id)}>
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 transform hover:scale-110">
                              <i className="ri-play-fill text-2xl text-gray-800 ml-1"></i>
                            </div>
                          </div>
                        </div>
                      )
                      }
                    </div>
                  ) : (
                    <div onClick={() => openProjectModal(project)}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover object-top group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  )}
                </div>

                <div className="p-6" onClick={() => project.videoUrl ? toggleVideoPlay(project.id) : openProjectModal(project)}>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Show Less Card */}
            {showMoreProjects && (
              <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer animate-fadeIn transform hover:scale-105 border border-blue-200">
                <div
                  className="h-full p-8 flex flex-col items-center justify-center text-center"
                  onClick={() => setShowMoreProjects(false)}
                >
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6 rotate-180 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-arrow-down-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Show Less
                  </h3>
                  <p className="text-gray-600">
                    Hide additional projects
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Graphics Showcase Section */}
      <section id="graphics" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Graphics Showcase</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore my creative graphic design work featuring brand identities, motion graphics, and visual elements
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {graphicsShowcase.map((graphic) => (
              <div key={graphic.id} className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={graphic.image}
                    alt={graphic.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-semibold text-sm">
                    {graphic.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://instagram.com/the_cinemastic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap transform hover:scale-105"
              >
                <i className="ri-instagram-line mr-2"></i>
                Follow for More Content
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap transform hover:scale-105"
              >
                <i className="ri-brush-line mr-2"></i>
                Request Custom Graphics
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-mail-line text-white text-2xl"></i>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Let's Create Something <span className="text-orange-600">Amazing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it and discuss how we can bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl p-8 border border-orange-100">
              <h3 className="text-3xl font-bold text-gray-800 mb-8">Send a Message</h3>

              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm transition-all duration-300"
                    placeholder="Project inquiry, collaboration, etc."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm resize-none transition-all duration-300"
                    placeholder="Tell me about your project or inquiry..."
                  />
                  <div className="text-right text-sm text-gray-500 mt-1">
                    {formData.message.length}/500
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || formData.message.length > 500}
                  className="w-full bg-orange-600 text-white py-3 px-6 rounded-full font-medium hover:bg-orange-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer transform hover:scale-105"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus && (
                  <div className={`mt-4 p-4 rounded-lg ${submitStatus.includes('successfully') ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                    <p className={`text-sm ${submitStatus.includes('successfully') ? 'text-green-800' : 'text-red-800'}`}>{submitStatus}</p>
                  </div>
                )}
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-8">Get in Touch</h3>
                <p className="text-gray-600 text-lg mb-8">
                  I'm always excited to discuss new projects and creative opportunities. Whether you need video editing, UI design, or 3D animation, let's connect and create something extraordinary together.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                    <i className="ri-mail-line text-orange-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">psawant2302@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                    <i className="ri-phone-line text-orange-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-600">+91 7775953038</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                    <i className="ri-map-pin-line text-orange-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Location</h4>
                    <p className="text-gray-600">Satara, Maharashtra, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/the_cinemastic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 cursor-pointer"
                  >
                    <i className="ri-instagram-line text-xl"></i>
                  </a>
                  <a
                    href="https://linkedin.com/in/prasad-sawant-942a98251"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 cursor-pointer"
                  >
                    <i className="ri-linkedin-fill text-xl"></i>
                  </a>
                  <a
                    href="mailto:psawant2302@gmail.com"
                    className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 cursor-pointer"
                  >
                    <i className="ri-mail-line text-xl"></i>
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-100 to-blue-100 rounded-2xl p-8 mt-8 border border-orange-200">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Response Time</h4>
                <p className="text-gray-600">
                  I typically respond to inquiries within 24-48 hours. For urgent projects, feel free to call directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Let's collaborate and create something amazing together. Whether it's a video project, UI design, or 3D animation, I'm here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => scrollToSection('portfolio')} className="inline-block bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 cursor-pointer whitespace-nowrap transform hover:scale-105">
              View Portfolio
            </button>
            <a href="mailto:psawant2302@gmail.com" className="inline-block border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300 cursor-pointer whitespace-nowrap transform hover:scale-105">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-4 font-sans">
                Prasad.S
              </div>
              <p className="text-gray-400 mb-4">
                Designer × Editor bringing ideas to life through creative digital experiences.
              </p>
              <div className="flex space-x-4">
                <a href="https://linkedin.com/in/prasad-sawant-942a98251" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white hover:bg-orange-700 transition-all duration-300 cursor-pointer transform hover:scale-110">
                  <i className="ri-linkedin-fill text-white"></i>
                </a>
                <a href="https://instagram.com/the_cinemastic" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white hover:bg-orange-700 transition-all duration-300 cursor-pointer transform hover:scale-110">
                  <i className="ri-instagram-line text-white"></i>
                </a>
                <a href="mailto:psawant2302@gmail.com" className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white hover:bg-orange-700 transition-all duration-300 cursor-pointer transform hover:scale-110">
                  <i className="ri-mail-line text-white"></i>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('hero')} className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Home
                </button>
                <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                  About
                </button>
                <button onClick={() => scrollToSection('portfolio')} className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Portfolio
                </button>
                <button onClick={() => scrollToSection('contact')} className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Contact
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <div className="space-y-2 text-gray-400">
                <p>Video Editing</p>
                <p>UI Design</p>
                <p>3D Animation</p>
                <p>Motion Graphics</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Prasad S Sawant. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="relative">
              <button
                onClick={closeProjectModal}
                className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors cursor-pointer z-10"
              >
                <i className="ri-close-line text-xl text-gray-600"></i>
              </button>

              {selectedProject.videoUrl ? (
                <div className="w-full h-64 md:h-80 rounded-t-2xl overflow-hidden">
                  <iframe
                    src={`${selectedProject.videoUrl}&autoplay=1&mute=1`}
                    title={selectedProject.title}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover object-top rounded-t-2xl"
                />
              )}

              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-4">{selectedProject.title}</h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Project Overview</h3>
                    <p className="text-gray-600 mb-6">{selectedProject.details.overview}</p>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedProject.details.features.map((feature, index) => (
                        <li key={index} className="text-gray-600 flex items-start">
                          <span className="text-orange-500 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-lg p-6 mb-6 border border-orange-100">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Project Details</h3>
                      <div className="space-y-3">
                        <div>
                          <span className="font-semibold text-gray-700">Duration:</span>
                          <span className="text-gray-600 ml-2">{selectedProject.details.duration}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-700">Client:</span>
                          <span className="text-gray-600 ml-2">{selectedProject.details.client}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-700">Technologies:</span>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {selectedProject.details.technologies.map((tech, index) => (
                              <span key={index} className="px-2 py-1 bg-white border border-gray-200 rounded text-sm text-gray-600">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <button onClick={() => scrollToSection('contact')} className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-full font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap transform hover:scale-105">
                        Hire Me
                      </button>
                      <button
                        onClick={closeProjectModal}
                        className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-6 rounded-full font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap transform hover:scale-105"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
