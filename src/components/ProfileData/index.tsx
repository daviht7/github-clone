import React from 'react';

import { Container,Flex,Avatar } from './styles';

interface Props {
  username: string;
  name: string;
  avatarUrl: string;
  followers: number;
  following: number;
  company?: string;
  location?: string;
  email?: string;
  blog?: string
}

const ProfileData: React.FC<Props> = (props) => {
  return (
    <Container>
      <Flex>
        <Avatar src={props.avatarUrl} alt={props.username} />

        <div>
          <h1>{props.name}</h1>
          <h2>{props.username}</h2>
        </div>

      </Flex>
    </Container>
  );
}

export default ProfileData;