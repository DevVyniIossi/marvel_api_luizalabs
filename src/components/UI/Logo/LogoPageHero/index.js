import { NewLogoPage } from 'images/logos/LogoPageHero';
import * as S from './styles';

const LogoNew = () => {
  return (
    <S.LogoWrapper data-logo data-testid="HP_LOGO">
      <NewLogoPage data-icon="icon-svg" />
    </S.LogoWrapper>
  );
};

export { LogoNew };
