import React from 'react';

import { Container, Main, LeftSide, RightSide } from './styles';

import ProfileData from '../../components/ProfileData'

const Profile: React.FC = () => {
  return (

    <Container>

      <Main>
        <LeftSide>
          <ProfileData
            username={"daviht7"}
            name={"Davi Holanda"}
            avatarUrl={"https://avatars2.githubusercontent.com/u/50812003?s=460&u=4ab63e0c274f7ecc052ac6f5108dad97eb90a99a&v=4"}
            followers={887}
            following={7}
            company={"Rocketseat"}
            location={"Fortaleza,Brasil"}
            email={"daviht7@gmail.com"}
            blog={undefined}
          />
        </LeftSide>
        <RightSide></RightSide>
      </Main>

    </Container>

  );
}

export default Profile;