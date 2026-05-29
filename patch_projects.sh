#!/bin/bash
FILE="src/pages/ProjectDetail.jsx"

# Add import
sed -i '' "s|import { BreadcrumbSchema|import SystemDesign from '../components/projects/SystemDesign';\nimport { BreadcrumbSchema|g" $FILE

# Update component definitions to accept projectInfo
sed -i '' 's/const AuraDetail = () => (/const AuraDetail = ({ projectInfo }) => (/g' $FILE
sed -i '' 's/const GlowCartDetail = () => (/const GlowCartDetail = ({ projectInfo }) => (/g' $FILE
sed -i '' 's/const HashKartDetail = () => (/const HashKartDetail = ({ projectInfo }) => (/g' $FILE
sed -i '' 's/const TruckMitrDetail = () => (/const TruckMitrDetail = ({ projectInfo }) => (/g' $FILE
sed -i '' 's/const TMConnactDetail = () => (/const TMConnactDetail = ({ projectInfo }) => (/g' $FILE
sed -i '' 's/const HRMSDetail = () => (/const HRMSDetail = ({ projectInfo }) => (/g' $FILE

# Update CTAs and inject SystemDesign
sed -i '' 's|<NextProjectCTA label="GlowCart: Cosmetics Store" to="/work/glowcart" />|<SystemDesign overview={projectInfo.systemDesignOverview} mermaidCode={projectInfo.mermaidFlow} imageSrc={projectInfo.architectureImage} />\n    <NextProjectCTA label="GlowCart: Cosmetics Store" to="/projects/glowcart" />|g' $FILE
sed -i '' 's|<NextProjectCTA label="HashKart: Flutter E-Commerce" to="/work/hashkart" />|<SystemDesign overview={projectInfo.systemDesignOverview} mermaidCode={projectInfo.mermaidFlow} imageSrc={projectInfo.architectureImage} />\n    <NextProjectCTA label="HashKart: Flutter E-Commerce" to="/projects/hashkart" />|g' $FILE
sed -i '' 's|<NextProjectCTA label="TruckMitr Logistics Suite" to="/work/truckmitr" />|<SystemDesign overview={projectInfo.systemDesignOverview} mermaidCode={projectInfo.mermaidFlow} imageSrc={projectInfo.architectureImage} />\n    <NextProjectCTA label="TruckMitr Logistics Suite" to="/projects/truckmitr" />|g' $FILE
sed -i '' 's|<NextProjectCTA label="TMConnact: Logistics Sync" to="/work/TMConnact" />|<SystemDesign overview={projectInfo.systemDesignOverview} mermaidCode={projectInfo.mermaidFlow} imageSrc={projectInfo.architectureImage} />\n    <NextProjectCTA label="TMConnact: Logistics Sync" to="/projects/TMConnact" />|g' $FILE
sed -i '' 's|<NextProjectCTA label="HRMS & CRM: Enterprise Suite" to="/work/hrms-crm" />|<SystemDesign overview={projectInfo.systemDesignOverview} mermaidCode={projectInfo.mermaidFlow} imageSrc={projectInfo.architectureImage} />\n    <NextProjectCTA label="HRMS & CRM: Enterprise Suite" to="/projects/hrms-crm" />|g' $FILE
sed -i '' 's|<NextProjectCTA label="AURA: Experiential Concierge" to="/work/aura" />|<SystemDesign overview={projectInfo.systemDesignOverview} mermaidCode={projectInfo.mermaidFlow} imageSrc={projectInfo.architectureImage} />\n    <NextProjectCTA label="AURA: Experiential Concierge" to="/projects/aura" />|g' $FILE

# Update the render blocks to pass the prop
sed -i '' "s|{projectId === 'aura'      && <AuraDetail />}|{projectId === 'aura'      \&\& <AuraDetail projectInfo={projectInfo} />}|g" $FILE
sed -i '' "s|{projectId === 'glowcart'  && <GlowCartDetail />}|{projectId === 'glowcart'  \&\& <GlowCartDetail projectInfo={projectInfo} />}|g" $FILE
sed -i '' "s|{projectId === 'hashkart'  && <HashKartDetail />}|{projectId === 'hashkart'  \&\& <HashKartDetail projectInfo={projectInfo} />}|g" $FILE
sed -i '' "s|{projectId === 'truckmitr' && <TruckMitrDetail />}|{projectId === 'truckmitr' \&\& <TruckMitrDetail projectInfo={projectInfo} />}|g" $FILE
sed -i '' "s|{projectId === 'TMConnact' && <TMConnactDetail />}|{projectId === 'TMConnact' \&\& <TMConnactDetail projectInfo={projectInfo} />}|g" $FILE
sed -i '' "s|{projectId === 'hrms-crm'  && <HRMSDetail />}|{projectId === 'hrms-crm'  \&\& <HRMSDetail projectInfo={projectInfo} />}|g" $FILE

