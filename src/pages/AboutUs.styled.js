import styled from "styled-components";

export const AboutContainer = styled.div`
  padding: 150px;
  background-color: #3d3c3a;
  text-align: center;
   min-height: 100vh; 
`;

export const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 40px;
  color: #363535ff;
`;

export const TeamGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
`;
export const TeamMember = styled.div`
  width: 300px;
  height: 400px;
  position: relative;
  cursor: pointer;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);

  &:hover div {
    opacity: 1;
    transform: translateY(0);
  }
`;
export const MemberImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;
  border-radius: 10px;

    ${TeamMember}:hover & {
    width: 150px;            
    height: 150px;
    border-radius: 50%;    
    box-shadow: 0px 8px 20px black;
    position: absolute;       
    top: 30%;                
    left: 50%;
    transform: translate(-50%, -30%);
  }
  }
`;

export const MemberInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  text-align: center;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;
 
`;

export const MemberName = styled.h3`
  font-size: 20px;
  margin-bottom: 5px;
  color: #333;
`;

export const MemberDesc = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`;

export const SocialIcon = styled.a`
  color: #333;
  font-size: 18px;
  transition: color 0.3s ease;
  &:hover {
    color: #0077ff;
  }
`;

