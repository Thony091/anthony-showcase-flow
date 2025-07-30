import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Linkedin, Code2, Briefcase, GraduationCap, Award, Globe, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import HorizontalScroll from "./HorizontalScroll";

const Portfolio = () => {
  const [activeProjectCategory, setActiveProjectCategory] = useState("todos");

  const projects = [
    {
      category: "stech",
      title: "Aplicaciones Móviles Flutter",
      company: "Informática Stech Limitada",
      period: "Octubre 2023 - Enero 2025",
      role: "Analista Programador",
      description: "Desarrollo y mantenimiento de aplicaciones móviles robustas",
      technologies: ["Flutter", "Firebase", "Google Maps", "Provider", "Riverpod", "NodeJS", "Python"],
      achievements: [
        "Implementación de arquitectura limpia",
        "Integración con servicios Firebase",
        "Funcionalidades avanzadas (Bluetooth, Geolocalización, Cámara)",
        "Migración de Provider a Riverpod",
        "Testing unitario y de widgets"
      ]
    },
    {
      category: "freelance",
      title: "AR Detailing Mobile App",
      company: "AR Detailing",
      period: "Febrero - Julio 2024",
      role: "Desarrollador Mobile Flutter",
      description: "Aplicación móvil empresarial para gestión de servicios",
      technologies: ["Flutter", "Firebase", "Isar", "Sqflite", "Java", "Spring Boot", "NodeJS"],
      achievements: [
        "Diseño de arquitectura en capas",
        "Gestión de requerimientos de software",
        "Implementación de bases de datos locales",
        "Microservicios con Java y NodeJS"
      ]
    },
    {
      category: "academicos",
      title: "Proyectos Full Stack",
      company: "Proyectos Académicos",
      period: "Marzo - Septiembre 2023",
      role: "Full Stack Web Developer",
      description: "Desarrollo de soluciones web completas con tecnologías modernas",
      technologies: ["Angular", "Java", "Spring Framework", "JUnit", "PostgreSQL"],
      achievements: [
        "Implementación de funcionalidades complejas",
        "Solución de problemas técnicos",
        "Desarrollo de APIs RESTful",
        "Testing unitario con JUnit"
      ]
    }
  ];

  const skills = {
    backend: ["Java", "Spring Framework", "Spring Boot", "Python", "Django", "Flask", "Node.js"],
    frontend: ["JavaScript", "TypeScript", "Angular", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "Dart", "Flutter"],
    databases: ["SQL Server", "MySQL", "Oracle", "PostgreSQL", "MongoDB", "Firestore"],
    devops: ["Git", "GitHub", "GitHub Actions", "Docker", "Terraform", "Kubernetes"],
    tools: ["Scrum", "Jira", "Slack", "Microsoft Office"]
  };

  const filteredProjects = activeProjectCategory === "todos" 
    ? projects 
    : projects.filter(project => project.category === activeProjectCategory);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about-section');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 text-center space-y-6 px-4">
          <div className="animate-float">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Anthony Flores Ramos
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mt-4">
              Desarrollador de Software
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Santiago, Chile
            </div>
          </div>
          
          <Button variant="default" size="lg" className="animate-glow" onClick={scrollToAbout}>
            <ChevronDown className="w-4 h-4 mr-2" />
            Explorar Portfolio
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about-section" className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">Sobre mí</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Desarrollador de software con destacada capacidad de desenvolverme en equipos de trabajo. 
              Mi enfoque se basa en la <span className="text-accent font-semibold">motivación constante</span> por 
              aprender y crecer, siendo empático y colaborativo para potenciar el crecimiento de mis compañeros.
            </p>
          </div>
          
          <Card className="bg-gradient-card border-border/50 shadow-glow">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-primary">Contacto</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-4 h-4 text-accent" />
                  <span>(56) 986 78 3078</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-4 h-4 text-accent" />
                  <span>anthony.g91@icloud.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Linkedin className="w-4 h-4 text-accent" />
                  <span>linkedin.com/in/thony-flores</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          <Briefcase className="inline-block w-8 h-8 mr-2" />
          Experiencia Profesional
        </h2>
        
        <div className="flex justify-center mb-12 overflow-x-auto">
          <div className="flex gap-4 px-4 min-w-max">
            <Button
              variant={activeProjectCategory === "todos" ? "default" : "secondary"}
              onClick={() => setActiveProjectCategory("todos")}
              className="whitespace-nowrap"
            >
              Todos los Proyectos
            </Button>
            <Button
              variant={activeProjectCategory === "stech" ? "default" : "secondary"}
              onClick={() => setActiveProjectCategory("stech")}
              className="whitespace-nowrap"
            >
              Stech Limitada
            </Button>
            <Button
              variant={activeProjectCategory === "freelance" ? "default" : "secondary"}
              onClick={() => setActiveProjectCategory("freelance")}
              className="whitespace-nowrap"
            >
              AR Detailing
            </Button>
            <Button
              variant={activeProjectCategory === "academicos" ? "default" : "secondary"}
              onClick={() => setActiveProjectCategory("academicos")}
              className="whitespace-nowrap"
            >
              Proyectos Académicos
            </Button>
          </div>
        </div>

        <HorizontalScroll>
          <div className="flex gap-8 pb-4" style={{ width: 'max-content' }}>
            {filteredProjects.map((project, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300 min-w-[600px] max-w-[700px]">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">{project.title}</h3>
                      <p className="text-accent font-semibold mb-1">{project.company}</p>
                      <p className="text-muted-foreground mb-1">{project.role}</p>
                      <p className="text-sm text-muted-foreground mb-4">{project.period}</p>
                      <p className="text-lg mb-6">{project.description}</p>
                    </div>
                    
                    <div className="space-y-2">
                      {project.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-primary mb-4">Tecnologías</h4>
                      <div className="overflow-x-auto">
                        <div className="flex gap-2 pb-2 min-w-max">
                          {project.technologies.map((tech, i) => (
                            <Badge key={i} variant="secondary" className="bg-secondary/50 whitespace-nowrap">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </HorizontalScroll>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          <Code2 className="inline-block w-8 h-8 mr-2" />
          Habilidades Técnicas
        </h2>
        
        <HorizontalScroll>
          <div className="flex gap-6 pb-4 min-w-max">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="bg-gradient-card border-border/50 min-w-[300px]">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-4 capitalize">
                    {category === 'devops' ? 'DevOps' : category === 'frontend' ? 'Frontend' : category === 'backend' ? 'Backend' : category === 'databases' ? 'Bases de Datos' : 'Herramientas'}
                  </h3>
                  <div className="overflow-x-auto">
                    <div className="flex gap-2 pb-2 min-w-max">
                      {skillList.map((skill, i) => (
                        <Badge key={i} variant="outline" className="border-accent/50 text-accent whitespace-nowrap">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </HorizontalScroll>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          <GraduationCap className="inline-block w-8 h-8 mr-2" />
          Educación
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gradient-card border-border/50">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-primary mb-2">Ingeniería en Informática</h3>
              <p className="text-accent font-semibold">Duoc UC</p>
              <p className="text-muted-foreground">2022 - 2025 (Cursando)</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-border/50">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-primary mb-2">Analista Programador Computacional</h3>
              <p className="text-accent font-semibold">Duoc UC</p>
              <p className="text-muted-foreground">2022 - 2024 (Graduado)</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Languages & Certifications */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-primary">
              <Globe className="inline-block w-6 h-6 mr-2" />
              Idiomas
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg">Español</span>
                <Badge variant="default">Nativo</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg">Inglés</span>
                <Badge variant="secondary">Básico/Intermedio</Badge>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6 text-primary">
              <Award className="inline-block w-6 h-6 mr-2" />
              Certificaciones
            </h2>
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-primary">Desarrollador Fullstack Java Trainee</h3>
                <p className="text-accent font-semibold">FUDESCO</p>
                <p className="text-muted-foreground text-sm">2023</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 text-center border-t border-border/50">
        <p className="text-muted-foreground">
          © 2025 Anthony Flores Ramos. Desarrollador de Software apasionado por la tecnología.
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;