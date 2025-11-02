import { useState, useEffect } from "react";
import Name1 from "../assets/images/111769177.jpg";
import Name2 from "../assets/images/kuci.jpg";
import Name3 from "../assets/images/erna.jpg";
import {
  AboutContainer,
  Title,
  TeamGrid,
  TeamMember,
  MemberImage,
  MemberInfo,
  MemberName,
  MemberDesc,
  SocialIcons,
  SocialIcon
} 
from "./AboutUs.styled";
import { FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";

const teamData = [
  {
    name: "Anastasija Mijaljević",
    desc: "Full-Stack Developer",
    img: Name1,
    social: { instagram: "https://www.instagram.com/anastasija_mijaljevic/", facebook: "https://www.facebook.com/anastasija.mijaljevic/", github: "https://github.com/anastasijamijaljevic" }
  },
  {
    name: "Meris Kuči",
    desc: "Front-end Developer",
    img: Name2,
    social: { instagram: "https://www.instagram.com/meris.kuci/", facebook: "https://sr-rs.facebook.com/meris.kuci", github: "https://github.com/meriskuci" }
  },
  {
    name: "Erna Biševac",
    desc: "Front-end Developer",
    img: Name3,
    social: { instagram: "https://www.instagram.com/bisevacernaa", facebook: "", github: "https://github.com/bisevacerna" }
  }
];

const AboutUs = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    // simuliramo asinhrono učitavanje tima (npr. sa API-ja)
    const timer = setTimeout(() => {
      setTeam(teamData);
    }, 500); // delay 0.5s

    return () => clearTimeout(timer);
  }, []);

  return (
    <AboutContainer>
      
      <TeamGrid>
        {team.map((member, index) => (
          <TeamMember key={index}>
            <MemberImage src={member.img} alt={member.name} />
            <MemberInfo>
              <MemberName>{member.name}</MemberName>
              <MemberDesc>{member.desc}</MemberDesc>
              <SocialIcons>
                <SocialIcon href={member.social.instagram}><FaInstagram /></SocialIcon>
                <SocialIcon href={member.social.facebook}><FaFacebook /></SocialIcon>
                <SocialIcon href={member.social.github}><FaGithub /></SocialIcon>
              </SocialIcons>
            </MemberInfo>
          </TeamMember>
        ))}
      </TeamGrid>
    </AboutContainer>
  );
};

export default AboutUs;