

import Footer from './component/common/footer'
import Header from './component/common/header'
import HeroSection from './component/common/HeroSection'
import ProjectsSection from './component/main/ProjectsSection'
import SkillsSection from './component/main/SkillsSection'
import StayInTouch from './component/main/StayInTouch'

export default function page() {
  return (
    <div id="top"> {/* هذا الـ ID للرجوع لأعلى الصفحة عند الضغط على Home */}
      <Header/>
      <HeroSection/>
      {/* تأكد أن SkillsSection يحتوي داخله على id="SkillsSection" */}
      <SkillsSection/> 
      <ProjectsSection/>
      <Footer/>
    </div>
  )
}