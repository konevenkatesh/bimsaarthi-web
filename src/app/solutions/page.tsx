import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import RoleSolution from '@/components/solutions/RoleSolution';
import SolutionsCTA from '@/components/solutions/SolutionsCTA';
import SolutionsHero from '@/components/solutions/SolutionsHero';

export default function SolutionsPage() {
    
  const roles = [
      {
          id: "project-managers",
          role: "Project Managers",
          headline: "Predict Delays. Control Execution. Deliver with Confidence.",
          problem: "Project Managers are responsible for aligning plans with on-site reality. However, delays often emerge from disconnected schedules, unresolved constraints, and late visibility into execution issues.",
          howItHelps: "BIMSaarthi connects site execution data, lookahead plans, and commitments into a single intelligence layer. The platform identifies risks before they escalate, highlights reasons for non-completion, and provides early warnings instead of post-event reports.",
          improvements: [
              "Higher schedule reliability",
              "Fewer surprises during execution",
              "Proactive control instead of reactive firefighting"
          ],
          finalOutcome: "Projects stay on track through continuous visibility and predictive insights.",
          useCases: [
              {
                  title: "Schedule Delay Prevention",
                  desc: "BIMSaarthi flags a high delay risk three weeks in advance by identifying unresolved constraints in upcoming 'on track' activities.",
                  outcome: "Early corrective action prevents downstream schedule slippage."
              },
              {
                  title: "Execution Reliability Improvement",
                  desc: "Reasons for non-completion are captured daily and analyzed across trades to highlight recurring constraint patterns.",
                  outcome: "Improved PPC and more reliable weekly plans."
              }
          ]
      },
      {
          id: "bim-managers",
          role: "BIM Managers",
          headline: "Transform BIM from Visualization into Execution Intelligence.",
          problem: "BIM Managers often struggle to extend BIM beyond coordination and clash detection. Models remain disconnected from schedules, costs, and on-site progress.",
          howItHelps: "BIMSaarthi links BIM objects directly with tasks, quantities, and execution evidence. This transforms BIM into an operational system that supports planning, progress validation, and decision-making across the project lifecycle.",
          improvements: [
              "Stronger BIM-to-execution integration",
              "Reduced model rework and misalignment",
              "Higher adoption of BIM on site"
          ],
          finalOutcome: "BIM becomes a living, decision-support system, not a static model.",
          useCases: [
              {
                  title: "BIM-to-Execution Linking",
                  desc: "Structural elements in the BIM model are linked directly to schedule activities and quantities. Site progress evidence validates model status.",
                  outcome: "BIM reflects actual execution status, not just design intent."
              },
              {
                  title: "Model Change Impact Awareness",
                  desc: "A design update triggers automatic identification of affected tasks and quantities.",
                  outcome: "Reduced rework and faster coordination decisions."
              }
          ]
      },
      {
          id: "commercial-teams",
          role: "Commercial & Cost Managers",
          headline: "Link Progress to Cost. Control Variations. Protect Margins.",
          problem: "Cost overruns often result from delayed visibility into progress, unstructured BOQs, and weak linkage between execution and billing.",
          howItHelps: "BIMSaarthi connects BOQs, quantities, progress evidence, and forecasts into one system. This allows commercial teams to track earned value accurately, manage variations, and forecast risks early.",
          improvements: [
              "Better cost predictability",
              "Faster and more accurate billing",
              "Reduced disputes and commercial leakage"
          ],
          finalOutcome: "Financial control is driven by verified progress and transparent data.",
          useCases: [
              {
                  title: "Progress-Based Billing",
                  desc: "Measured quantities are validated using site evidence and BIM references, aligning billing directly with verified progress.",
                  outcome: "Faster RA bills and fewer billing disputes."
              },
              {
                  title: "Cost Overrun Early Warning",
                  desc: "Planned vs actual productivity trends indicate cost pressure before variation claims arise.",
                  outcome: "Commercial risks are addressed early, protecting margins."
              }
          ]
      },
      {
          id: "site-teams",
          role: "Site & Field Teams",
          headline: "Simplify Daily Execution. Capture Reality Once. Use It Everywhere.",
          problem: "Site teams deal with fragmented tools, repetitive reporting, and manual coordination. Valuable site data is often lost or underutilized.",
          howItHelps: "BIMSaarthi provides structured workflows for daily reports, inspections, safety observations, and issue tracking. Captured data automatically feeds planning, cost, and intelligence modules.",
          improvements: [
              "Reduced reporting effort",
              "Clear accountability and follow-up",
              "Better coordination with planning and commercial teams"
          ],
          finalOutcome: "Site teams focus on execution, not administration.",
          useCases: [
              {
                  title: "Single-Entry Daily Reporting",
                  desc: "Daily site data is entered once and reused across planning, billing, and reporting.",
                  outcome: "Reduced reporting effort and improved data accuracy."
              },
              {
                  title: "Safety Observation Tracking",
                  desc: "Safety observations are logged with photos and location references.",
                  outcome: "Faster closure of safety issues and improved site compliance."
              }
          ]
      },
      {
          id: "owners-pmos",
          role: "Owners, PMOs & Leadership",
          headline: "Portfolio Visibility. Risk Awareness. Governance Assurance.",
          problem: "Owners and PMOs require reliable visibility across multiple projects without relying on lagging reports or subjective updates.",
          howItHelps: "BIMSaarthi aggregates project data into portfolio-level dashboards, highlights risk trends, and ensures governance through audit trails and compliance monitoring.",
          improvements: [
              "Early identification of portfolio risks",
              "Consistent reporting across projects",
              "Stronger governance and oversight"
          ],
          finalOutcome: "Leadership decisions are based on facts, not assumptions.",
          useCases: [
              {
                  title: "Portfolio Risk Visibility",
                  desc: "Multiple projects show similar schedule risk patterns despite different contractors.",
                  outcome: "Early leadership intervention prevents systemic delays."
              },
              {
                  title: "Standardized Reporting",
                  desc: "All projects follow the same data structure and reporting logic.",
                  outcome: "Consistent decision-making across the portfolio."
              }
          ]
      },
      {
          id: "government",
          role: "Government & Regulatory Agencies",
          headline: "Ensure Compliance. Improve Transparency. Reduce Project Risk.",
          problem: "Public-sector projects face strict regulatory requirements, audit scrutiny, and accountability challenges.",
          howItHelps: "BIMSaarthi embeds compliance checks, documentation workflows, and traceability across the project lifecycle — from planning approvals to handover and operations.",
          improvements: [
              "Continuous compliance monitoring",
              "Transparent audit trails",
              "Reduced approval delays and disputes"
          ],
          finalOutcome: "Projects meet regulatory requirements with confidence and accountability.",
          useCases: [
              {
                  title: "Continuous Compliance Tracking",
                  desc: "Design and execution data are checked continuously against applicable codes.",
                  outcome: "Reduced approval delays and stronger audit readiness."
              },
              {
                  title: "Transparent Documentation",
                  desc: "Every approval, change, and inspection is logged with traceability.",
                  outcome: "Clear accountability and simplified audits."
              }
          ]
      },
      {
          id: "academia",
          role: "Academia & Research",
          headline: "Advance Construction Knowledge Through Real-World Intelligence.",
          problem: "Researchers require access to structured, explainable data and systems that go beyond black-box analytics.",
          howItHelps: "BIMSaarthi provides an ontology-driven, explainable intelligence platform suitable for research, experimentation, and academic collaboration.",
          improvements: [
              "Access to structured construction knowledge",
              "Real-world validation of research ideas",
              "Collaboration between academia and industry"
          ],
          finalOutcome: "Research translates into practical, deployable construction intelligence.",
          useCases: [
              {
                  title: "Knowledge Graph-Based Research",
                  desc: "Construction process data is structured semantically for analysis and experimentation.",
                  outcome: "Research insights are grounded in real project data."
              },
              {
                  title: "Explainable AI Experiments",
                  desc: "Prediction results are traceable back to data relationships and causes.",
                  outcome: "Research outputs remain transparent and defensible."
              }
          ]
      }
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Breadcrumb items={[{ label: "Solutions" }]} />
      
      <SolutionsHero />
      
      <div>
        {roles.map((props, i) => (
            <RoleSolution 
                key={i} 
                index={i}
                {...props}
            />
        ))}
      </div>

      <SolutionsCTA />
      
      <Footer />
    </main>
  );
}
