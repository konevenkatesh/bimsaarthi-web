import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import EngagementModels from '@/components/services/EngagementModels';
import PlatformIntegration from '@/components/services/PlatformIntegration';
import ServiceSection from '@/components/services/ServiceSection';
import ServicesHero from '@/components/services/ServicesHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';

export default function ServicesPage() {
    
  const bimServices = [
    { 
      title: 'Architectural BIM Services', 
      bullets: ['Concept to detailed architectural BIM models', 'LOD 200–500 deliverables', 'IFC-compliant, platform-ready outputs'],
      image: '/images/services/arch.png'
    },
    { 
      title: 'Structural BIM Services', 
      bullets: ['Structural modeling and detailing', 'Reinforcement and fabrication-ready models', 'Analysis-ready data for execution'],
      image: '/images/services/struct.png'
    },
    { 
      title: 'MEP BIM Services', 
      bullets: ['HVAC, electrical, plumbing, and fire systems', 'Coordinated, clash-aware BIM models', 'Execution and operations-ready datasets'],
      image: '/images/services/mep.png'
    },
    { 
      title: 'Retrofitting & As-Built BIM', 
      bullets: ['Existing condition and as-built modeling', 'Scan-to-BIM (where applicable)', 'Retrofit planning and impact analysis'],
      image: '/images/services/retro.png'
    }
  ];

  const planningServices = [
    { 
      title: 'Scheduling & Planning', 
      bullets: ['CPM schedules (P6/MSP)', 'Lookahead planning setup', 'Schedule reliability optimization'],
      image: '/images/services/sched.png'
    },
    { 
      title: 'BOQ & Quantity Engineering', 
      bullets: ['BOQ preparation and structuring', 'BIM-linked quantity takeoff', 'Billing workflow alignment'],
      image: '/images/services/boq.png'
    },
    { 
      title: 'Cost Estimation & Control', 
      bullets: ['Project cost baselines and forecasts', 'Earned value frameworks', 'Platform-aligned commercial structures'],
      image: '/images/services/cost.png'
    }
  ];

  const digitalTwinServices = [
    { 
      title: 'Digital Twin Platform Setup', 
      bullets: ['BIM, schedule, and cost integration', 'Execution digital twin configuration', 'Progress and risk tracking setup'],
      image: '/images/services/dt.png'
    },
    { 
      title: 'Compliance & Data Intelligence', 
      bullets: ['Mapping of IS/NBC/Local regulations', 'Project-specific compliance rules', 'Audit-ready documentation systems'],
      image: '/images/services/complienace.png'
    }
  ];
  
  const visualizationServices = [
      { 
        title: 'Visual Walkthroughs', 
        bullets: ['High-quality 3D walkthroughs', 'Construction sequencing visualizations', 'Stakeholder presentation assets'],
        image: '/images/services/visual.png'
      },
      { 
        title: 'AR / VR Experiences', 
        bullets: ['Immersive design review environments', 'Safety and training simulations', 'Interactive demonstrations'],
        image: '/images/services/VR.png'
      },
      { 
        title: 'Landscape Design', 
        bullets: ['Landscape BIM models', 'Visualization for master planning', 'Integration with project models'],
        image: '/images/services/landscape.png'
      }
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Breadcrumb items={[{ label: "Services" }]} />
      
      <ServicesHero />
      
      <ServiceSection 
        index={0}
        title="BIM & Engineering Services" 
        description="Discipline-specific BIM services that form the foundation for digital execution. We produce platform-ready models that feed directly into your intelligence layer."
        services={bimServices}
        imageAlign="right"
      />

       <ServiceSection
        index={1} 
        title="Planning, Estimation & Commercial" 
        description="Supporting teams with structured schedules, quantities, and cost frameworks. We bridge the gap between model geometry and commercial reality."
        services={planningServices}
        imageAlign="left"
      />

      <ServiceSection 
        index={2}
        title="Digital Twin & Intelligence" 
        description="Configuring project-specific digital twins that connect all data sources. We turn static models into dynamic, living assets."
        services={digitalTwinServices}
        imageAlign="right"
      />
      
      <ServiceSection 
        index={3}
        title="Visualization, AR/VR & Experience" 
        description="Advanced visualization to support review, training, and communication. Communicate complex intent clearly to all stakeholders."
        services={visualizationServices}
        imageAlign="left"
      />

      <PlatformIntegration />
      
      <EngagementModels />
      
      <Footer />
    </main>
  );
}
