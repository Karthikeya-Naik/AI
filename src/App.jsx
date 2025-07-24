import { useState, useEffect } from 'react';
import { Brain, Home, HeartPulse, Car, BookOpen, Music, Briefcase, TrendingUp, ChevronDown, Menu, X } from 'lucide-react';
import karthik from './assets/Tran2.png';
// Main App Component
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(section.id);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="font-sans antialiased text-gray-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-white bg-opacity-95 shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Brain className="h-8 w-8 text-purple-600" />
              </div>
              <div className="hidden md:block ml-4">
                <div className="flex space-x-4">
                  <NavLink id="hero" active={activeSection === 'hero'} onClick={() => scrollToSection('hero')}>Home</NavLink>
                  <NavLink id="smart-homes" active={activeSection === 'smart-homes'} onClick={() => scrollToSection('smart-homes')}>Smart Homes</NavLink>
                  <NavLink id="healthcare" active={activeSection === 'healthcare'} onClick={() => scrollToSection('healthcare')}>Healthcare</NavLink>
                  <NavLink id="transportation" active={activeSection === 'transportation'} onClick={() => scrollToSection('transportation')}>Transportation</NavLink>
                  <NavLink id="education" active={activeSection === 'education'} onClick={() => scrollToSection('education')}>Education</NavLink>
                  <NavLink id="entertainment" active={activeSection === 'entertainment'} onClick={() => scrollToSection('entertainment')}>Entertainment</NavLink>
                  <NavLink id="workplace" active={activeSection === 'workplace'} onClick={() => scrollToSection('workplace')}>Workplace</NavLink>
                  <NavLink id="future" active={activeSection === 'future'} onClick={() => scrollToSection('future')}>Future</NavLink>
                </div>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
              <MobileNavLink onClick={() => scrollToSection('hero')}>Home</MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection('smart-homes')}>Smart Homes</MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection('healthcare')}>Healthcare</MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection('transportation')}>Transportation</MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection('education')}>Education</MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection('entertainment')}>Entertainment</MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection('workplace')}>Workplace</MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection('future')}>Future</MobileNavLink>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-indigo-900 opacity-60 z-1"></div>
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center transform rotate-180 scale-100"
          style={{ 
            backgroundImage: `url('src/assets/hero.png')`,
            backgroundBlendMode: 'multiply'
          }}
        ></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-100 tracking-tight">
            How AI is Changing Your Daily Life in 2025
          </h1>
          <p className="mt-6 text-xl text-gray-100 max-w-3xl mx-auto">
            Explore the transformative impact of artificial intelligence on everyday experiences, from your morning routine to how you work, play, and connect.
          </p>
          <div className="mt-10">
            <button 
              onClick={() => scrollToSection('smart-homes')}
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out"
            >
              Explore the Impact
            </button>
          </div>
          <div className="mt-16 animate-bounce">
            <ChevronDown className="h-8 w-8 text-white mx-auto" />
          </div>
        </div>
      </section>

      {/* Smart Homes Section */}
      <section id="smart-homes" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            icon={<Home className="h-12 w-12 text-purple-600" />}
            title="Smart Homes" 
            subtitle="AI-Powered Living Spaces"
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Connected Home Experience</h3>
              <p className="text-lg text-gray-700 mb-6">
                In 2025, AI has revolutionized our homes, turning them into responsive, 
                intuitive environments that anticipate our needs and optimize our daily routines.
              </p>
              <div className="space-y-4">
                <FeatureItem title="Adaptive Climate Control">
                  Smart thermostats now learn your preferences while monitoring weather patterns, 
                  occupancy, and individual comfort levels of each family member.
                </FeatureItem>
                <FeatureItem title="Intelligent Security">
                  AI-powered security systems distinguish between family members, expected visitors, 
                  and potential threats, reducing false alarms by 87%.
                </FeatureItem>
                <FeatureItem title="Energy Optimization">
                  Homes now consume 42% less energy through AI-managed appliances that predict usage 
                  patterns and optimize for renewable energy availability.
                </FeatureItem>
              </div>
            </div>
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-xl">
              <img src="src/assets/smart.png" alt="Smart home interface" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Section */}
      <section id="healthcare" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            icon={<HeartPulse className="h-12 w-12 text-purple-600" />}
            title="Healthcare Revolution" 
            subtitle="AI in Personal and Public Health"
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-7 space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Personalized Healthcare Delivery</h3>
              <p className="text-lg text-gray-700">
                AI-powered diagnostic tools now detect conditions months earlier than traditional methods, 
                with personalized treatment plans tailored to individual genetic profiles.
              </p>
              
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
                <h4 className="font-bold text-gray-900 mb-2">2025 Healthcare Milestones</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold mr-2">93%</span>
                    <span>Accuracy in early-stage cancer detection using AI image analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold mr-2">68%</span>
                    <span>Reduction in misdiagnosis rates for rare diseases</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold mr-2">30M+</span>
                    <span>People using AI health assistants for daily wellness monitoring</span>
                  </li>
                </ul>
              </div>
              
              <p className="text-lg text-gray-700">
                Mental health support has been revolutionized with AI companions providing 24/7 
                cognitive behavioral therapy and mood analysis, reducing emergency interventions by 32%.
              </p>
            </div>
            
            <div className="md:col-span-5">
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                  <img src="src/assets/health1.png" alt="AI diagnostic tool" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                  <img src="src/assets/health2.png" alt="Remote patient monitoring" className="w-full h-full object-cover" />
                </div>
                <div className="col-span-2 aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <img src="src/assets/health3.png" alt="AI in medical research" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation Section */}
      <section id="transportation" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            icon={<Car className="h-12 w-12 text-purple-600" />}
            title="Transportation & Mobility" 
            subtitle="The New Era of Movement"
          />
          
          <div className="mt-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="p-8 border-b md:border-b-0 md:border-r border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Autonomous Vehicles</h3>
                  <p className="text-gray-700 mb-4">
                    Level 4 autonomous vehicles now operate in 65% of major urban centers, 
                    reducing traffic accidents by 82% and commute times by about 47%.
                  </p>
                  <div className="h-40 bg-gray-100 rounded-lg overflow-hidden">
                    <img src="src/assets/Tran1.png" alt="Self-driving car" className="w-full h-full object-cover" />
                  </div>
                </div>
                
                <div className="p-8 border-b md:border-b-0 md:border-r border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Traffic Management</h3>
                  <p className="text-gray-700 mb-4">
                    AI-powered traffic systems now predict congestion 30 minutes before it occurs, 
                    dynamically rerouting vehicles and adjusting signal patterns.
                  </p>
                  <div className="h-40 bg-gray-100 rounded-lg overflow-hidden">
                    <img src={karthik} alt="Traffic management system" className="w-full h-full object-cover" />
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Delivery Revolution</h3>
                  <p className="text-gray-700 mb-4">
                    Autonomous drones and robots handle 58% of last-mile deliveries, 
                    cutting delivery emissions by 71% and costs by 43%, redefining urban logistics for a greener future.
                  </p>
                  <div className="h-40 bg-gray-100 rounded-lg overflow-hidden">
                    <img src="src/assets/Tran3.png" alt="Delivery drone" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-purple-800 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">2025 Reality Check</h3>
              <p>
                The average commuter now saves 230 hours annually through AI-optimized transportation, 
                while carbon emissions from urban traffic have decreased by 27% since 2023.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            icon={<BookOpen className="h-12 w-12 text-purple-600" />}
            title="Education & Learning" 
            subtitle="Personalized Knowledge Acquisition"
          />
          
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="relative h-80 rounded-xl overflow-hidden shadow-lg mb-6">
                <img src="src/assets/Edu.png" alt="AI tutoring session" className="w-full h-full object-cover" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Adaptive Learning Platforms</h3>
              <p className="text-lg text-gray-700">
                AI-driven educational platforms now create truly personalized learning paths that adapt in real-time 
                to each student's progress, learning style, and emotional state.
              </p>
              
              <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-purple-600">94%</p>
                  <p className="text-sm text-gray-600">Student engagement increase</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-purple-600">3.2x</p>
                  <p className="text-sm text-gray-600">Faster concept mastery</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Transformative Learning Tools</h3>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-3">AI Tutors & Mentors</h4>
                <p className="text-gray-700">
                  Sophisticated AI tutors now provide personalized instruction across all subjects, 
                  adapting their teaching style to match each student's optimal learning approach.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-3">Knowledge Visualization</h4>
                <p className="text-gray-700">
                  Complex topics are transformed into interactive visual experiences, 
                  allowing students to literally "walk through" mathematical equations or historical events.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-3">Real-time Feedback Systems</h4>
                <p className="text-gray-700">
                  Students receive immediate, constructive feedback on assignments and projects, 
                  with AI-generated improvement suggestions personalized to their abilities.
                </p>
              </div>
              
              <div className="p-4 bg-purple-100 rounded-lg">
                <p className="italic text-purple-800">
                  "The global education gap has narrowed by 37% since 2023, largely due to AI-powered 
                  learning tools reaching previously underserved communities."
                </p>
                <p className="text-right mt-2 text-purple-600 font-medium">— Global Education Report 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Entertainment Section */}
      <section id="entertainment" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            icon={<Music className="h-12 w-12 text-purple-600" />}
            title="Entertainment & Creativity" 
            subtitle="AI-Enhanced Experiences"
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="h-48 bg-gray-100 rounded-lg overflow-hidden mb-4">
                <img src="src/assets/enter1.png" alt="Music composition AI" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Personalized Media</h3>
              <p className="text-gray-700">
                Streaming services now generate custom content based on your preferences, 
                with AI creating movie sequels featuring your favorite characters or music that 
                evolves with your changing taste.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="h-48 bg-gray-100 rounded-lg overflow-hidden mb-4">
                <img src="src/assets/enter2.png" alt="Interactive storytelling" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Interactive Storytelling</h3>
              <p className="text-gray-700">
                AI-driven narratives create branching storylines that adapt to your choices, 
                with virtual characters that remember past interactions and develop unique 
                relationships with each player.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="h-48 bg-gray-100 rounded-lg overflow-hidden mb-4">
                <img src="src/assets/enter3.png" alt="AI art collaboration" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Creative Collaboration</h3>
              <p className="text-gray-700">
                Artists now partner with AI to explore new creative territories, 
                with 65% of bestselling novels, hit songs, and award-winning designs 
                involving some form of human-AI collaboration.
              </p>
            </div>
          </div>
          
          <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Evolution of Entertainment</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  The boundary between creator and audience has blurred, as AI tools enable anyone 
                  to transform their ideas into polished creative works without technical expertise.
                </p>
                <p className="text-lg text-gray-700">
                  Virtual performances featuring AI-recreated historical artists performing alongside 
                  contemporary stars have become the fastest-growing entertainment category, with 
                  178 million monthly active users.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="h-2 bg-purple-600 rounded-full" style={{ width: '85%' }}></div>
                  <span className="ml-2 text-gray-600">85% using AI-recommended content</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 bg-purple-600 rounded-full" style={{ width: '73%' }}></div>
                  <span className="ml-2 text-gray-600">73% created content with AI assistance</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 bg-purple-600 rounded-full" style={{ width: '62%' }}></div>
                  <span className="ml-2 text-gray-600">62% experienced AI-generated storytelling</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 bg-purple-600 rounded-full" style={{ width: '58%' }}></div>
                  <span className="ml-2 text-gray-600">58% participated in AI-enhanced virtual worlds</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workplace Section */}
      <section id="workplace" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            icon={<Briefcase className="h-12 w-12 text-purple-600" />}
            title="Workplace Productivity" 
            subtitle="The AI-Augmented Professional"
          />
          
          <div className="mt-12">
            <div className="bg-gray-50 p-8 rounded-xl mb-8">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">The Collaborative Workforce</h3>
                  <p className="text-lg text-gray-700">
                    In 2025, AI has transformed from a tool into a teammate, with professionals across 
                    industries working alongside AI assistants that handle routine tasks while providing 
                    data-driven insights for complex decisions.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                    <img src="src/assets/workplace.png" alt="AI workplace collaboration" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-3">Meeting Intelligence</h4>
                <p className="text-gray-700">
                  AI meeting assistants now transcribe, summarize, and extract action items in real-time, 
                  while suggesting relevant information from past meetings.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-3">Decision Support</h4>
                <p className="text-gray-700">
                  Executives now use AI systems that analyze millions of data points to model different 
                  scenarios and predict outcomes of potential decisions.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-3">Automated Documentation</h4>
                <p className="text-gray-700">
                  Technical and legal documents now draft themselves based on conversations and 
                  reference materials, reducing documentation time by 76%.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-3">Skill Enhancement</h4>
                <p className="text-gray-700">
                  Professionals use AI coaches that provide personalized guidance and feedback to 
                  accelerate skill development across technical and soft skills.
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-purple-800 text-white rounded-lg">
              <h3 className="text-xl font-bold mb-3">Productivity Revolution</h3>
              <p className="text-lg">
                Organizations using AI-augmented workflows report a 37% increase in productivity and a 
                42% improvement in employee satisfaction, with workers spending 68% more time on creative 
                and strategic tasks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Section */}
      <section id="future" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            icon={<TrendingUp className="h-12 w-12 text-purple-600" />}
            title="The Future Ahead" 
            subtitle="What's Next for AI and Humanity"
          />
          
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Emerging Horizons</h3>
              <p className="text-lg text-gray-700 mb-6">
                As we look beyond 2025, the continued evolution of AI promises even deeper integration 
                into the fabric of daily life, with several transformative developments on the horizon:
              </p>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-2">Multimodal Intelligence</h4>
                  <p className="text-gray-700">
                    AI systems are rapidly developing the ability to understand and operate across 
                    multiple types of information simultaneously—processing visual, auditory, textual, 
                    and environmental data as a unified whole.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-2">Ambient Computing</h4>
                  <p className="text-gray-700">
                    The next phase will see AI recede into the background of our environments, 
                    constantly present but invisible—anticipating needs and taking action without 
                    explicit commands.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-2">Collaborative Intelligence</h4>
                  <p className="text-gray-700">
                    Future AI systems will work together in specialized teams, much like human 
                    organizations, with different AI agents handling different aspects of complex tasks.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-800 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Expert Voices</h3>
              
              <div className="space-y-8">
                <div>
                  <p className="italic mb-3">
                    "The next frontier isn't just about smarter AI, but more harmonious integration with human 
                    cognition—systems that enhance our thinking rather than replacing it."
                  </p>
                  <p className="font-medium">Dr. Amara Chen, Cognitive Computing</p>
                </div>
                
                <div>
                  <p className="italic mb-3">
                    "By 2030, we'll see AI systems that can truly understand context and nuance at human 
                    levels, allowing for collaborations that feel genuinely intuitive."
                  </p>
                  <p className="font-medium">Marcus Lee, AI Ethics Institute</p>
                </div>
                
                <div>
                  <p className="italic mb-3">
                    "The most profound shift will be emotional intelligence in AI—systems that truly understand 
                    human feelings and can respond with genuine empathy."
                  </p>
                  <p className="font-medium">Dr. Sofia Patel, Affective Computing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 text-purple-400 mr-2" />
                <span className="text-xl font-bold">AI in Everyday Life</span>
              </div>
              <p className="text-gray-400">
                Exploring the transformative impact of artificial intelligence on how we live, work, and play in 2025.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('hero')} className="text-gray-400 hover:text-white transition">Home</button></li>
                <li><button onClick={() => scrollToSection('smart-homes')} className="text-gray-400 hover:text-white transition">Smart Homes</button></li>
                <li><button onClick={() => scrollToSection('healthcare')} className="text-gray-400 hover:text-white transition">Healthcare</button></li>
                <li><button onClick={() => scrollToSection('education')} className="text-gray-400 hover:text-white transition">Education</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">AI Research</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Technology News</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">AI Ethics Guidelines</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Future Trends</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <p className="text-gray-400 mb-4">
                Stay updated with the latest in AI developments and how they're shaping our everyday lives.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 AI in Everyday Life. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Component for section headers
function SectionHeader({ icon, title, subtitle }) {
  return (
    <div className="text-center mb-12">
      <div className="inline-flex justify-center items-center mb-4">
        {icon}
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
      <p className="mt-2 text-xl text-gray-600">{subtitle}</p>
    </div>
  );
}

// Component for feature items
function FeatureItem({ title, children }) {
  return (
    <div>
      <h4 className="font-bold text-gray-900">{title}</h4>
      <p className="text-gray-700">{children}</p>
    </div>
  );
}

// Navigation link component
function NavLink({ id, active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        active 
          ? 'bg-purple-100 text-purple-700' 
          : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
      }`}
    >
      {children}
    </button>
  );
}

// Mobile navigation link component
function MobileNavLink({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
    >
      {children}
    </button>
  );
}