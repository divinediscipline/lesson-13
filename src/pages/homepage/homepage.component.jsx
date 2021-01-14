import React from 'react';

import Directory from '../../components/directory/directory.component';

// import './homepage.styles.scss'; no longer using due to styled components
import { HomePageContainer } from './hompage.styles';

const HomePage = () => (
  <HomePageContainer>
     <Directory />
  </HomePageContainer>
);

export default HomePage;
