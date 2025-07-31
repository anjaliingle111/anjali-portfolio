// App.js - Main Portfolio with Routing
import React, { useState, useEffect } from 'react';
import { Github, Mail, Linkedin, MapPin, Calendar, Award, TrendingUp, Database, BarChart3, Code, Users, Briefcase, GraduationCap, Phone, ArrowLeft, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [currentView, setCurrentView] = useState('home'); // 'home' or project id
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (currentView === 'home') {
      const handleScroll = () => {
        const sections = ['home', 'about', 'experience', 'projects', 'dashboards', 'skills', 'contact'];
        const current = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        if (current) setActiveSection(current);
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [currentView]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      id: 'fraud-detection',
      title: "Enterprise Fraud Detection Platform",
      description: "Built a production-ready fraud detection system analyzing 50+ risk factors with 79.86% AUC performance. Implemented real-time processing, GDPR compliance, and comprehensive ROI analysis for financial institutions.",
      tech: ["Python", "scikit-learn", "Flask", "PostgreSQL", "Docker"],
      image: "🛡️",
      github: "https://github.com/anjaliingle111/fraud-detection-platform",
      category: "Machine Learning"
    },
    {
      id: 'fake-news-bert',
      title: "Fake News Detection with BERT",
      description: "Advanced NLP system using BERT transformers and ensemble methods for fake news classification. Achieved 67.8% accuracy with comprehensive feature engineering including sentiment analysis and readability scores.",
      tech: ["Python", "BERT", "TensorFlow", "NLTK", "scikit-learn"],
      image: "🔍",
      github: "https://github.com/anjaliingle111/Fake-News-Classifier-NLP",
      category: "NLP/AI"
    },
    {
      id: 'carepath-d',
      title: "CarePath-D: Diabetes Readmission Predictor",
      description: "MLOps pipeline predicting hospital readmissions for diabetic patients. Features FastAPI deployment, automated CI/CD with GitHub Actions, and production monitoring with 85% accuracy on clinical data.",
      tech: ["Python", "FastAPI", "scikit-learn", "GitHub Actions", "CI/CD", "Render"],
      image: "🏥",
      github: "https://github.com/anjaliingle111/carepath-D",
      category: "Healthcare Analytics"
    },
    {
      id: 'hr-analytics',
      title: "Enterprise HR Analytics Platform",
      description: "Real-time data engineering platform processing 1,000+ employee records using Apache Kafka and PostgreSQL. Integrated with Power BI for executive dashboards managing $138M+ payroll operations.",
      tech: ["Apache Kafka", "PostgreSQL", "Power BI", "Apache Airflow", "Docker"],
      image: "👥",
      github: "https://github.com/anjaliingle111/enterprise-hr-analytics",
      category: "Data Engineering"
    },
    {
      id: 'manufacturing-quality',
      title: "Manufacturing Quality Pipeline",
      description: "Real-time quality prediction system for CMP manufacturing processes. Implemented Kafka streaming, ETL pipelines, ML models with CI/CD automation achieving 88.2% accuracy for production optimization.",
      tech: ["Apache Kafka", "PostgreSQL", "FastAPI", "scikit-learn", "Docker", "CI/CD"],
      image: "⚙️",
      github: "https://github.com/anjaliingle111/cmp-pad-quality-pipeline",
      category: "Manufacturing Analytics"
    },
    {
      id: 'ehr-mistral',
      title: "EHR System with Mistral AI",
      description: "Intelligent Electronic Health Record system leveraging Mistral AI for medical record processing and clinical decision support with advanced natural language processing capabilities.",
      tech: ["Python", "Mistral AI", "FastAPI", "PostgreSQL", "React"],
      image: "🩺",
      github: "https://github.com/anjaliingle111/EHR-system-using-mistral",
      category: "Healthcare AI"
    }
  ];

  const skills = [
    { category: "Programming", items: ["🐍 Python", "💾 SQL", "📈 R", "🟨 JavaScript"], icon: "💻" },
    { category: "Data Engineering", items: ["⚡ Apache Kafka", "🐘 PostgreSQL", "🐳 Docker", "🌀 Apache Airflow"], icon: "🔧" },
    { category: "Machine Learning", items: ["🔬 scikit-learn", "🧠 TensorFlow", "🤖 BERT", "🚀 MLOps"], icon: "🤖" },
    { category: "Analytics & BI", items: ["📊 Power BI", "🔷 Tableau", "❄️ Snowflake", "📊 Excel"], icon: "📊" },
    { category: "Cloud & DevOps", items: ["🔧 GitHub Actions", "♻️ CI/CD", "⚡ FastAPI", "☁️ AWS"], icon: "☁️" }
  ];

  const experience = [
    {
      company: "ENTEGRIS",
      position: "Data Engineering Intern",
      location: "Chicago, Illinois",
      duration: "May 2024 - Dec 2024 (8 months)",
      logo: "🔬",
      color: "from-blue-500 to-purple-600",
      achievements: [
        "Developed complex SQL queries for cross-system analysis and operational reporting",
        "Built scalable Power BI semantic models and dashboards for business stakeholders",
        "Maintained data governance frameworks and metadata repositories",
        "Delivered presentations to enhance BI tool adoption across departments"
      ]
    },
    {
      company: "NEXDIGM",
      position: "Data Analyst",
      location: "Pune, India",
      duration: "Jan 2022 - July 2023 (1.5 years)",
      logo: "📊",
      color: "from-green-400 to-emerald-500",
      achievements: [
        "Designed ETL processes and implemented Data Warehouse solutions using Snowflake",
        "Created operational and financial reports in Power BI and Tableau",
        "Performed advanced analytics using Python and R for statistical modeling",
        "Mapped data flows and ensured compliance across data lifecycles"
      ]
    },
    {
      company: "ITCCRAFT",
      position: "Data Analytics Intern",
      location: "Pune, India",
      duration: "Jan 2021 - Mar 2021 (3 months)",
      logo: "💼",
      color: "from-purple-500 to-pink-500",
      achievements: [
        "Executed SQL queries for data extraction from transactional databases",
        "Designed financial reports using advanced Excel techniques",
        "Conducted data profiling and validation for quality assurance",
        "Collaborated in Agile teams for evolving analytics requirements"
      ]
    }
  ];

  // Project Detail Components
  const ProjectDetail = ({ project }) => {
    const getProjectDetails = (projectId) => {
      switch (projectId) {
        case 'fraud-detection':
          return {
            overview: "A comprehensive fraud detection platform designed for financial institutions to identify and prevent fraudulent transactions in real-time. The system processes over 50 risk factors and provides actionable insights with GDPR compliance.",
            architecture: [
              "Data Ingestion Layer - Real-time transaction processing",
              "Feature Engineering - 50+ risk factor calculations",
              "ML Pipeline - Random Forest with 79.86% AUC",
              "API Gateway - RESTful endpoints for predictions",
              "Compliance Module - GDPR/CCPA data masking",
              "Dashboard - ROI analysis and monitoring"
            ],
            workflow: [
              "Transaction data ingested via API",
              "Real-time feature extraction and enrichment",
              "ML model scoring and risk assessment",
              "Business rules engine evaluation",
              "Decision output with explanation",
              "Audit trail and compliance logging"
            ],
            keyFeatures: [
              "Real-time fraud detection with sub-second response",
              "50+ fraud risk factors including behavioral analytics",
              "GDPR/CCPA compliant privacy masking",
              "Cost-benefit analysis with ROI calculations",
              "Production-ready REST APIs",
              "Comprehensive audit trails"
            ]
          };
        
        case 'fake-news-bert':
          return {
            overview: "Advanced NLP system combining BERT transformers with traditional ML approaches for fake news detection. Implements comprehensive feature engineering including sentiment analysis, readability scores, and ensemble methods.",
            architecture: [
              "Data Preprocessing - Text cleaning and normalization",
              "Feature Engineering - Linguistic and readability features",
              "BERT Model - Fine-tuned for news classification",
              "Traditional ML - Ensemble of RF, SVM, Naive Bayes",
              "Evaluation Module - Comprehensive metrics analysis",
              "Prediction API - Real-time classification endpoint"
            ],
            workflow: [
              "News article text input and preprocessing",
              "Feature extraction (sentiment, readability, NER)",
              "BERT tokenization and encoding",
              "Ensemble model prediction",
              "Confidence score calculation",
              "Classification result with explanations"
            ],
            keyFeatures: [
              "BERT transformer fine-tuning for news domain",
              "Ensemble methods combining multiple algorithms",
              "67.8% accuracy on real-world news data",
              "Comprehensive feature engineering pipeline",
              "SMOTE for handling class imbalance",
              "Explainability through feature importance"
            ]
          };
        
        case 'carepath-d':
          return {
            overview: "MLOps pipeline for predicting hospital readmissions among diabetic patients using clinical data. Features production deployment with automated CI/CD, monitoring, and FastAPI integration.",
            architecture: [
              "Data Pipeline - Clinical data processing and validation",
              "Feature Store - Engineered features from patient records",
              "ML Training - Random Forest with hyperparameter tuning",
              "Model Registry - Versioned model storage on Google Drive",
              "API Service - FastAPI with Swagger documentation",
              "CI/CD Pipeline - GitHub Actions for automated deployment"
            ],
            workflow: [
              "Clinical data ingestion and validation",
              "Feature engineering from patient demographics",
              "Model training with cross-validation",
              "Model deployment to Render platform",
              "API endpoint for real-time predictions",
              "Monitoring and performance tracking"
            ],
            keyFeatures: [
              "85% accuracy on clinical readmission data",
              "Production MLOps pipeline with CI/CD",
              "FastAPI with comprehensive documentation",
              "Automated model retraining workflows",
              "Real-time prediction API endpoints",
              "Healthcare-compliant data processing"
            ]
          };
        
        case 'hr-analytics':
          return {
            overview: "Enterprise-grade HR analytics platform processing real-time employee data for 1,000+ employees across 5 departments. Features Lambda architecture with streaming analytics and Power BI integration.",
            architecture: [
              "Data Sources - Employee, performance, engagement data",
              "Streaming Layer - Apache Kafka for real-time updates",
              "Processing Layer - ksqlDB for stream analytics",
              "Storage Layer - PostgreSQL with dimensional modeling",
              "Orchestration - Apache Airflow for workflow management",
              "Visualization - Power BI with REST API integration"
            ],
            workflow: [
              "Employee data changes captured via CDC",
              "Real-time streaming through Kafka topics",
              "Stream processing with ksqlDB transformations",
              "Data warehouse updates in PostgreSQL",
              "Airflow orchestrates batch processes",
              "Power BI dashboards refresh automatically"
            ],
            keyFeatures: [
              "Real-time processing of 1,000+ employee records",
              "Lambda architecture with batch + stream processing",
              "$138M+ payroll management capabilities",
              "7 REST API endpoints for Power BI integration",
              "Comprehensive employee analytics and KPIs",
              "Docker containerized microservices architecture"
            ]
          };
        
        case 'manufacturing-quality':
          return {
            overview: "Real-time manufacturing quality prediction system for CMP (Chemical Mechanical Planarization) processes. Integrates streaming sensor data with ML models for proactive quality control.",
            architecture: [
              "Data Ingestion - Kafka streaming from manufacturing sensors",
              "ETL Pipeline - Real-time data transformation and validation",
              "ML Pipeline - Random Forest for quality prediction",
              "API Layer - FastAPI for real-time predictions",
              "Web Dashboard - React-based quality monitoring",
              "CI/CD - Automated testing and deployment pipeline"
            ],
            workflow: [
              "Manufacturing sensor data streamed via Kafka",
              "Real-time ETL processing and feature engineering",
              "ML model inference for quality prediction",
              "API endpoint serves predictions to dashboard",
              "Quality alerts and monitoring system",
              "Continuous model performance tracking"
            ],
            keyFeatures: [
              "88.2% accuracy on real manufacturing data",
              "Real-time processing of 720+ production records",
              "End-to-end MLOps with CI/CD automation",
              "Interactive web dashboard for quality monitoring",
              "Proactive quality control and defect prevention",
              "Integration with existing manufacturing systems"
            ]
          };
        
        case 'ehr-mistral':
          return {
            overview: "Intelligent Electronic Health Record system leveraging Mistral AI for advanced medical record processing and clinical decision support with natural language understanding capabilities.",
            architecture: [
              "Frontend - React-based healthcare interface",
              "API Gateway - FastAPI with healthcare endpoints",
              "AI Engine - Mistral AI for medical text processing",
              "Database - PostgreSQL with healthcare data models",
              "Security Layer - HIPAA-compliant data protection",
              "Integration Layer - Healthcare system connectivity"
            ],
            workflow: [
              "Medical records input and validation",
              "Mistral AI processes clinical text",
              "NLP extraction of medical entities",
              "Clinical decision support recommendations",
              "Secure storage in healthcare database",
              "Integration with existing EHR systems"
            ],
            keyFeatures: [
              "Mistral AI powered medical text analysis",
              "Advanced NLP for clinical documentation",
              "HIPAA-compliant healthcare data processing",
              "Clinical decision support capabilities",
              "Integration-ready healthcare APIs",
              "Scalable architecture for healthcare providers"
            ]
          };
        
        default:
          return {
            overview: "Project details coming soon...",
            architecture: [],
            workflow: [],
            keyFeatures: []
          };
      }
    };

    const getStepIcon = (projectId, stepIndex) => {
      const iconMaps = {
        'fraud-detection': [
          { icon: 'https://i.postimg.cc/DzwKXvhp/Python-logo.png', tool: 'Python', name: 'Data Ingestion' },
          { icon: 'https://i.postimg.cc/gcR1rXRk/Postgresql-elephant-svg.png', tool: 'PostgreSQL', name: 'Feature Engineering' },
          { icon: 'https://i.postimg.cc/jSj86LWf/17349883.png', tool: 'scikit-learn', name: 'ML Pipeline' },
          { icon: 'https://i.postimg.cc/Y9BfP9Sb/fastapi-ggmxtn5w3qqwks1i5jnx2p.webp', tool: 'FastAPI', name: 'API Gateway' },
          { icon: 'https://i.postimg.cc/DzwKXvhp/Python-logo.png', tool: 'Python', name: 'Compliance Module' },
          { icon: 'https://i.postimg.cc/BZcNdxHD/Power-BI-Logo.png', tool: 'Power BI', name: 'Dashboard' }
        ],
        'fake-news-bert': [
          { icon: 'https://i.postimg.cc/DzwKXvhp/Python-logo.png', tool: 'Python', name: 'Text Preprocessing' },
          { icon: 'https://i.postimg.cc/DzwKXvhp/Python-logo.png', tool: 'NLTK', name: 'Feature Engineering' },
          { icon: 'https://i.postimg.cc/fLY5WdPG/tensorflow-icon-md.png', tool: 'BERT/TensorFlow', name: 'BERT Model' },
          { icon: 'https://i.postimg.cc/jSj86LWf/17349883.png', tool: 'scikit-learn', name: 'Ensemble Methods' },
          { icon: 'https://i.postimg.cc/DzwKXvhp/Python-logo.png', tool: 'Python', name: 'Evaluation' },
          { icon: 'https://i.postimg.cc/Y9BfP9Sb/fastapi-ggmxtn5w3qqwks1i5jnx2p.webp', tool: 'FastAPI', name: 'Prediction API' }
        ],
        'carepath-d': [
          { icon: 'https://i.postimg.cc/DzwKXvhp/Python-logo.png', tool: 'Python', name: 'Data Processing' },
          { icon: 'https://i.postimg.cc/DzwKXvhp/Python-logo.png', tool: 'Python', name: 'Feature Engineering' },
          { icon: 'https://i.postimg.cc/jSj86LWf/17349883.png', tool: 'scikit-learn', name: 'Model Training' },
          { icon: 'https://i.postimg.cc/Y9BfP9Sb/fastapi-ggmxtn5w3qqwks1i5jnx2p.webp', tool: 'FastAPI', name: 'API Deployment' },
          { icon: 'https://i.postimg.cc/hvymKPSF/gft-image-blog-find-your-best-ci-cd-tool-logo-githubaction.webp', tool: 'GitHub Actions', name: 'CI/CD Pipeline' },
          { icon: 'https://i.postimg.cc/Y9BfP9Sb/fastapi-ggmxtn5w3qqwks1i5jnx2p.webp', tool: 'Render', name: 'Production API' }
        ],
        'hr-analytics': [
          { icon: 'https://i.postimg.cc/gcR1rXRk/Postgresql-elephant-svg.png', tool: 'PostgreSQL', name: 'Data Sources' },
          { icon: 'https://i.postimg.cc/dtRMNktS/Apache-Kafka-logo-svg.png', tool: 'Apache Kafka', name: 'Real-time Streaming' },
          { icon: 'https://i.postimg.cc/dtRMNktS/Apache-Kafka-logo-svg.png', tool: 'ksqlDB', name: 'Stream Processing' },
          { icon: 'https://i.postimg.cc/gcR1rXRk/Postgresql-elephant-svg.png', tool: 'PostgreSQL', name: 'Data Warehouse' },
          { icon: 'https://i.postimg.cc/DzwKXvhp/Python-logo.png', tool: 'Apache Airflow', name: 'Orchestration' },
          { icon: 'https://i.postimg.cc/BZcNdxHD/Power-BI-Logo.png', tool: 'Power BI', name: 'Analytics Dashboard' }
        ],
        'manufacturing-quality': [
          { icon: 'https://i.postimg.cc/dtRMNktS/Apache-Kafka-logo-svg.png', tool: 'Apache Kafka', name: 'Sensor Data' },
          { icon: 'https://i.postimg.cc/DzwKXvhp/Python-logo.png', tool: 'Python', name: 'ETL Processing' },
          { icon: 'https://i.postimg.cc/jSj86LWf/17349883.png', tool: 'scikit-learn', name: 'ML Model' },
          { icon: 'https://i.postimg.cc/Y9BfP9Sb/fastapi-ggmxtn5w3qqwks1i5jnx2p.webp', tool: 'FastAPI', name: 'API Service' },
          { icon: 'https://i.postimg.cc/hvymKPSF/gft-image-blog-find-your-best-ci-cd-tool-logo-githubaction.webp', tool: 'GitHub Actions', name: 'CI/CD' },
          { icon: 'https://i.postimg.cc/DzwKXvhp/Python-logo.png', tool: 'React', name: 'Web Dashboard' }
        ],
        'ehr-mistral': [
          { icon: 'https://i.postimg.cc/DzwKXvhp/Python-logo.png', tool: 'Python', name: 'Medical Records' },
          { icon: 'https://i.postimg.cc/fLY5WdPG/tensorflow-icon-md.png', tool: 'Mistral AI', name: 'AI Processing' },
          { icon: 'https://i.postimg.cc/DzwKXvhp/Python-logo.png', tool: 'NLP', name: 'Entity Extraction' },
          { icon: 'https://i.postimg.cc/Y9BfP9Sb/fastapi-ggmxtn5w3qqwks1i5jnx2p.webp', tool: 'FastAPI', name: 'Clinical API' },
          { icon: 'https://i.postimg.cc/gcR1rXRk/Postgresql-elephant-svg.png', tool: 'PostgreSQL', name: 'Secure Storage' },
          { icon: 'https://i.postimg.cc/DzwKXvhp/Python-logo.png', tool: 'React', name: 'EHR Interface' }
        ]
      };
      return iconMaps[projectId]?.[stepIndex] || { icon: '⚡', tool: 'Tool', name: 'Processing' };
    };

    const details = getProjectDetails(project.id);

    return (
      <div className="min-h-screen" style={{
        background: 'linear-gradient(135deg, rgb(2, 0, 36) 0%, rgb(14, 19, 24) 50%, rgb(2, 0, 25) 100%)'
      }}>
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 transition-all duration-500" style={{
          backgroundColor: 'rgba(14, 19, 24, 0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex justify-between items-center py-4">
              <div className="text-2xl font-bold text-white">
                Anjali <span style={{ color: 'rgb(253, 191, 5)' }}>Ingle</span>
              </div>
              <button
                onClick={() => setCurrentView('home')}
                className="flex items-center gap-2 text-white hover:text-yellow-400 transition-all duration-300"
              >
                <ArrowLeft size={20} />
                Back to Portfolio
              </button>
            </div>
          </div>
        </nav>

        {/* Project Hero */}
        <section className="pt-24 pb-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="text-6xl mb-6">{project.image}</div>
              <div className="text-sm font-medium mb-2" style={{ color: 'rgb(253, 191, 5)' }}>
                {project.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {project.title}
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex justify-center gap-4 mt-8">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                  style={{
                    background: 'linear-gradient(45deg, rgb(253, 191, 5), rgb(125, 42, 232))',
                    color: 'rgb(0, 0, 0)'
                  }}
                >
                  <Github size={20} />
                  View Source Code
                </a>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 justify-center mb-16">
              {project.tech.map((tech) => (
                <span 
                  key={tech} 
                  className="px-4 py-2 rounded-full text-sm font-medium text-black"
                  style={{ backgroundColor: 'rgb(253, 191, 5)' }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="pb-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              
              {/* Overview */}
              <div className="p-8 rounded-xl" style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <h2 className="text-2xl font-bold text-white mb-6">📋 Project Overview</h2>
                <p className="text-gray-300 leading-relaxed">{details.overview}</p>
              </div>

              {/* Key Features */}
              <div className="p-8 rounded-xl" style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <h2 className="text-2xl font-bold text-white mb-6">⭐ Key Features</h2>
                <ul className="space-y-3">
                  {details.keyFeatures.map((feature, index) => (
                    <li key={index} className="text-gray-300 flex items-start gap-2">
                      <span style={{ color: 'rgb(253, 191, 5)' }} className="mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Architecture */}
              <div className="p-8 rounded-xl" style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <h2 className="text-2xl font-bold text-white mb-6">🏗️ System Architecture</h2>
                <div className="space-y-3">
                  {details.architecture.map((component, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg" style={{
                      background: 'rgba(253, 191, 5, 0.1)',
                      border: '1px solid rgba(253, 191, 5, 0.2)'
                    }}>
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold" style={{
                        background: 'rgb(253, 191, 5)',
                        color: 'rgb(0, 0, 0)'
                      }}>
                        {index + 1}
                      </div>
                      <span className="text-gray-300">{component}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Workflow */}
              <div className="md:col-span-2 p-8 rounded-xl" style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <h2 className="text-2xl font-bold text-white mb-6">🔄 Visual Workflow</h2>
                <div className="flex flex-wrap gap-4 justify-center items-center">
                  {details.workflow.map((step, index) => {
                    const stepData = getStepIcon(project.id, index);
                    return (
                      <React.Fragment key={index}>
                        <div className="flex flex-col items-center max-w-xs">
                          <div className="w-20 h-20 rounded-xl flex items-center justify-center mb-3 p-2" style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            border: '2px solid rgba(253, 191, 5, 0.3)'
                          }}>
                            {stepData.icon.startsWith('http') ? (
                              <img 
                                src={stepData.icon} 
                                alt={stepData.tool}
                                className="w-12 h-12 object-contain"
                              />
                            ) : (
                              <div className="text-2xl">{stepData.icon}</div>
                            )}
                          </div>
                          <div className="text-center">
                            <div className="text-yellow-400 font-medium text-sm mb-1">{stepData.tool}</div>
                            <div className="text-white font-medium text-sm mb-1">{stepData.name}</div>
                            <p className="text-gray-300 text-xs leading-tight">{step}</p>
                          </div>
                        </div>
                        {index < details.workflow.length - 1 && (
                          <div className="hidden md:block">
                            <div className="w-8 h-px" style={{ background: 'rgb(253, 191, 5)' }}></div>
                            <div className="text-center text-yellow-400 text-xl">→</div>
                          </div>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };

  // If viewing a project detail, show that instead of main portfolio
  const currentProject = projects.find(p => p.id === currentView);
  if (currentProject) {
    return <ProjectDetail project={currentProject} />;
  }

  // Main Portfolio View
  return (
    <div className="min-h-screen" style={{ 
      background: 'linear-gradient(135deg, rgb(2, 0, 36) 0%, rgb(14, 19, 24) 50%, rgb(2, 0, 25) 100%)'
    }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 transition-all duration-500" style={{
        backgroundColor: 'rgba(14, 19, 24, 0.95)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white">
              Anjali <span style={{ color: 'rgb(253, 191, 5)' }}>Ingle</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'projects', 'dashboards', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-white hover:text-yellow-400 transition-all duration-300 capitalize font-medium relative ${
                    activeSection === item ? 'text-yellow-400' : ''
                  }`}
                  style={{ 
                    color: activeSection === item ? 'rgb(253, 191, 5)' : 'rgb(255, 255, 255)'
                  }}
                >
                  {item}
                  {activeSection === item && (
                    <div 
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full transition-all duration-300"
                      style={{ backgroundColor: 'rgb(253, 191, 5)' }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="transition-all duration-1000 transform translate-y-0 opacity-100">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Hi, I'm{' '}
                <span 
                  className="bg-gradient-to-r bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(45deg, rgb(253, 191, 5), rgb(125, 42, 232))'
                  }}
                >
                  Anjali Ingle
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl mb-6" style={{ color: 'rgb(253, 191, 5)' }}>
                Masters Student in Data Analytics Engineering
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Masters student in Data Analytics Engineering at Northeastern University 
                with hands-on experience in data engineering, analytics, and ML systems. 
                I'm passionate about turning complex data into actionable business insights.
              </p>
              
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin size={18} style={{ color: 'rgb(253, 191, 5)' }} />
                  <span>Boston, MA, USA</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Calendar size={18} style={{ color: 'rgb(253, 191, 5)' }} />
                  <span>Open to opportunities</span>
                </div>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  style={{
                    background: 'linear-gradient(45deg, rgb(253, 191, 5), rgb(125, 42, 232))',
                    color: 'rgb(0, 0, 0)'
                  }}
                >
                  View My Work
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="border-2 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-white hover:bg-opacity-10"
                  style={{ borderColor: 'rgb(253, 191, 5)', color: 'rgb(253, 191, 5)' }}
                >
                  Get In Touch
                </button>
              </div>
            </div>
            
            <div className="flex justify-center transition-all duration-1000 delay-300 transform translate-y-0 opacity-100">
              <div className="relative">
                <div 
                  className="w-80 h-80 rounded-full flex items-center justify-center relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(253, 191, 5, 0.2), rgba(125, 42, 232, 0.2))',
                    backdropFilter: 'blur(10px)',
                    border: '3px solid rgba(253, 191, 5, 0.5)'
                  }}
                >
                  <img 
                    src="https://i.postimg.cc/Nf7ydSkR/picture.jpg"
                    alt="Anjali Ingle"
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div class="text-center">
                          <div style="background: linear-gradient(45deg, rgb(253, 191, 5), rgb(125, 42, 232))" class="w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-4">
                            <div class="text-4xl">👩‍💻</div>
                          </div>
                          <h3 class="text-xl font-bold text-white">Data Analytics</h3>
                          <p class="text-gray-300">Engineering Student</p>
                        </div>
                      `;
                    }}
                  />
                </div>
                <div 
                  className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(45deg, rgb(253, 191, 5), rgb(125, 42, 232))'
                  }}
                >
                  <div className="text-2xl">📊</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 transition-all duration-1000 transform translate-y-0 opacity-100">
            About <span style={{ color: 'rgb(253, 191, 5)' }}>Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="transition-all duration-1000 delay-200 transform translate-y-0 opacity-100">
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I'm a data enthusiast and Masters student in Data Analytics Engineering 
                at Northeastern University. I have hands-on experience in data engineering, analytics, 
                and building ML systems across various domains including healthcare, manufacturing, and fintech.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                My experience spans from internships at enterprise companies like Entegris to personal 
                projects involving real-time data pipelines, fraud detection systems, and predictive analytics. 
                I enjoy solving complex data challenges and building scalable solutions.
              </p>
            </div>
            
            <div className="transition-all duration-1000 delay-400 transform translate-y-0 opacity-100">
              <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
              <div className="space-y-6">
                <div 
                  className="flex items-start gap-4 p-6 rounded-xl transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl"
                    style={{ background: 'linear-gradient(45deg, rgb(125, 42, 232), rgb(0, 0, 238))' }}
                  >
                    🐾
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Masters in Data Analytics Engineering</h4>
                    <p className="font-medium" style={{ color: 'rgb(253, 191, 5)' }}>Northeastern University</p>
                    <p className="text-gray-300">Boston, MA • 2023-2025</p>
                    <p className="text-sm text-gray-400 mt-1">
                      Data Management, Machine Learning, Computational Visualization
                    </p>
                  </div>
                </div>
                
                <div 
                  className="flex items-start gap-4 p-6 rounded-xl transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl"
                    style={{ background: 'linear-gradient(45deg, rgb(253, 191, 5), rgb(125, 42, 232))' }}
                  >
                    🏛️
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Bachelor of Technology in Information Technology</h4>
                    <p className="font-medium" style={{ color: 'rgb(253, 191, 5)' }}>Savitribai Phule Pune University</p>
                    <p className="text-gray-300">Pune, India • 2018-2022</p>
                    <p className="text-sm text-gray-400 mt-1">
                      Data Structures, DBMS, AI, Business Intelligence
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 transition-all duration-1000 transform translate-y-0 opacity-100">
            Professional <span style={{ color: 'rgb(253, 191, 5)' }}>Experience</span>
          </h2>
          
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div 
                key={index}
                className="p-8 rounded-xl transition-all duration-1000 transform hover:scale-105 translate-y-0 opacity-100"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="flex items-start gap-6">
                  <div 
                    className={`w-16 h-16 rounded-lg flex items-center justify-center text-white font-bold text-2xl bg-gradient-to-r ${job.color}`}
                  >
                    {job.logo}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white">{job.position}</h3>
                        <p className="text-xl font-medium" style={{ color: 'rgb(253, 191, 5)' }}>{job.company}</p>
                        <p className="text-gray-300">{job.location}</p>
                      </div>
                      <div className="text-gray-400 font-medium">{job.duration}</div>
                    </div>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-300 flex items-start gap-2">
                          <span style={{ color: 'rgb(253, 191, 5)' }} className="mt-2">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 transition-all duration-1000 transform translate-y-0 opacity-100">
            Featured <span style={{ color: 'rgb(253, 191, 5)' }}>Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="rounded-xl overflow-hidden transition-all duration-1000 transform hover:scale-105 hover:shadow-2xl translate-y-0 opacity-100 cursor-pointer"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
                onClick={() => setCurrentView(project.id)}
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{project.image}</div>
                    <div>
                      <div className="text-sm font-medium" style={{ color: 'rgb(253, 191, 5)' }}>{project.category}</div>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 rounded-full text-sm font-medium text-black"
                        style={{ backgroundColor: 'rgb(253, 191, 5)' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-400 italic">Click to view details</div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform"
                      title="View Source Code"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboards Section */}
      <section id="dashboards" className="py-16 bg-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 transition-all duration-1000 transform translate-y-0 opacity-100">
            Analytics <span style={{ color: 'rgb(253, 191, 5)' }}>Dashboards</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Power BI Dashboard */}
            <div 
              className="rounded-xl overflow-hidden transition-all duration-300 hover:scale-105"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">📊</div>
                  <div>
                    <div className="text-sm font-medium" style={{ color: 'rgb(253, 191, 5)' }}>Power BI Dashboard</div>
                    <h3 className="text-2xl font-bold text-white">Enterprise HR Analytics</h3>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Comprehensive Power BI dashboard analyzing 1,000+ employee workforce across 5 departments. 
                  Features executive KPIs, performance analytics, and workforce insights managing $138M+ in total compensation.
                </p>
                
                {/* Dashboard Preview */}
                <div className="bg-gray-800 rounded-lg p-2 mb-4 overflow-hidden">
                  <img 
                    src="https://i.postimg.cc/jSNTbgXv/C278683-F-7-FF8-4-B18-B93-D-9-C0-EB34-C040-C.png"
                    alt="Power BI HR Analytics Dashboard - Overview"
                    className="w-full h-auto rounded"
                  />
                  <div className="text-center text-gray-400 text-sm mt-2">Executive Overview Dashboard</div>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-2 mb-6 overflow-hidden">
                  <img 
                    src="https://i.postimg.cc/7PcjZ1bR/8-B669535-A290-43-F7-AE1-A-E1-A5357-ACD0-F.png"
                    alt="Power BI HR Analytics Dashboard - Performance"
                    className="w-full h-auto rounded"
                  />
                  <div className="text-center text-gray-400 text-sm mt-2">Performance Analytics Dashboard</div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Power BI', 'DAX', 'Data Modeling', 'KPIs', 'Interactive Filters'].map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 rounded-full text-sm font-medium text-black"
                      style={{ backgroundColor: 'rgb(253, 191, 5)' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <button className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all hover:scale-105">
                    View Interactive Dashboard
                  </button>
                </div>
              </div>
            </div>

            {/* Tableau Dashboard Placeholder */}
            <div 
              className="rounded-xl overflow-hidden transition-all duration-300 hover:scale-105"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">📈</div>
                  <div>
                    <div className="text-sm font-medium" style={{ color: 'rgb(253, 191, 5)' }}>Tableau Dashboard</div>
                    <h3 className="text-2xl font-bold text-white">Financial Performance Analytics</h3>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Interactive Tableau dashboard focusing on financial performance metrics, revenue analysis, 
                  and business intelligence insights with advanced data visualization techniques.
                </p>
                
                {/* Dashboard Preview */}
                <div className="bg-gray-800 rounded-lg p-4 mb-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-3 bg-gradient-to-r from-orange-400 to-orange-600 rounded"></div>
                      <span className="text-gray-300 text-sm">Revenue Trends</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-3 bg-gradient-to-r from-teal-400 to-teal-600 rounded"></div>
                      <span className="text-gray-300 text-sm">Profit Margins</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-3 bg-gradient-to-r from-pink-400 to-pink-600 rounded"></div>
                      <span className="text-gray-300 text-sm">Market Share</span>
                    </div>
                  </div>
                  <div className="text-center text-gray-400 text-sm mt-4">Dashboard Preview</div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Tableau', 'Advanced Analytics', 'Data Visualization', 'Business Intelligence'].map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 rounded-full text-sm font-medium text-black"
                      style={{ backgroundColor: 'rgb(253, 191, 5)' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <button className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-all hover:scale-105">
                    Coming Soon
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 transition-all duration-1000 transform translate-y-0 opacity-100">
            Technical <span style={{ color: 'rgb(253, 191, 5)' }}>Skills</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl transition-all duration-1000 transform hover:scale-105 translate-y-0 opacity-100"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{skillGroup.icon}</span>
                  <h3 className="text-xl font-bold text-white">{skillGroup.category}</h3>
                </div>
                <div className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <div 
                      key={skill} 
                      className="px-4 py-2 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105"
                      style={{
                        background: 'rgba(253, 191, 5, 0.2)',
                        border: '1px solid rgba(253, 191, 5, 0.3)'
                      }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 transition-all duration-1000 transform translate-y-0 opacity-100">
            Let's <span style={{ color: 'rgb(253, 191, 5)' }}>Connect</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto transition-all duration-1000 delay-200 transform translate-y-0 opacity-100">
            I'm always interested in discussing data engineering opportunities, 
            ML projects, or potential collaborations. Let's build something amazing together!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12 transition-all duration-1000 delay-400 transform translate-y-0 opacity-100">
            <div 
              className="p-6 rounded-xl transition-all duration-300 hover:scale-105"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <Mail className="w-8 h-8 mx-auto mb-4" style={{ color: 'rgb(253, 191, 5)' }} />
              <h3 className="font-bold text-white mb-2">Email</h3>
              <p className="text-gray-300">ingle.a@northeastern.edu</p>
            </div>
            <div 
              className="p-6 rounded-xl transition-all duration-300 hover:scale-105"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <Phone className="w-8 h-8 mx-auto mb-4" style={{ color: 'rgb(125, 42, 232)' }} />
              <h3 className="font-bold text-white mb-2">Phone</h3>
              <p className="text-gray-300">(617) 372-0345</p>
            </div>
            <div 
              className="p-6 rounded-xl transition-all duration-300 hover:scale-105"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <MapPin className="w-8 h-8 mx-auto mb-4" style={{ color: 'rgb(0, 0, 238)' }} />
              <h3 className="font-bold text-white mb-2">Location</h3>
              <p className="text-gray-300">Boston, MA, USA</p>
            </div>
          </div>
          
          <div className="flex justify-center gap-6 transition-all duration-1000 delay-600 transform translate-y-0 opacity-100">
            <a
              href="mailto:ingle.a@northeastern.edu"
              className="px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              style={{
                background: 'linear-gradient(45deg, rgb(253, 191, 5), rgb(125, 42, 232))',
                color: 'rgb(0, 0, 0)'
              }}
            >
              <Mail size={20} />
              Send Email
            </a>
            <a
              href="https://www.linkedin.com/in/anjali-ingle-7749671a1"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-white hover:bg-opacity-10 inline-flex items-center gap-2"
              style={{ borderColor: 'rgb(253, 191, 5)', color: 'rgb(253, 191, 5)' }}
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="https://github.com/anjaliingle111"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-white hover:bg-opacity-10 inline-flex items-center gap-2"
              style={{ borderColor: 'rgba(255, 255, 255, 0.3)' }}
            >
              <Github size={20} />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2025 Anjali Ingle. Data Analytics Engineer specializing in enterprise solutions.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
