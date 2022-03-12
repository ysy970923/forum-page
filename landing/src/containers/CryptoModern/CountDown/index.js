import React from 'react';
import Fade from 'react-reveal/Fade';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import Image from 'common/components/Image';
import Container from 'common/components/UI/Container';
import NormalClock from './timer';
const deadline = new Date(2022, 2, 6, 12);  // 2022-03-06
import SectionWrapper, { ContentWrapper } from './countdown.style';

const CountDownSection = () => {
  return (
    <SectionWrapper>
      <Container>
        <ContentWrapper>
          <Heading content="학회 모집 마감까지" />
          <Fade up>
            <div className="timerCount">
              <NormalClock countdown={deadline} divider="true" />
            </div>
          </Fade>
          {/* <Button className="primary" title="PRE-ORDER NOW" /> */}
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default CountDownSection;
