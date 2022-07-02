import { IconNamesEnum } from 'ngx-bootstrap-icons';
import { NavbarItem, navbarItems } from '../core/data/navbar.data';
import { ApplicationItem, applications } from './applications.data';
import { ImprovementItem, improvements } from './improvements.data';

export type SocialItem = {
  iconName: IconNamesEnum;
  link: string;
  iconSize: string;
};
export type SectionsData = {
  navbar: {
    logo: string;
    navbarItems: NavbarItem[];
  };
  home: {
    header: string;
    description: string;
  };
  categories: {
    majorImg: string;
    secImg: string;
    thirdImg: string;
  };
  improvements: {
    header: string;
    description: string;
    improvementItems: ImprovementItem[];
    majorImg: string;
    secImg: string;
    thirdImg: string;
  };
  applications: {
    header: string;
    description: string;
    applications: ApplicationItem[];
  };
  footer: {
    logo: string;
    socialMedia: SocialItem[];
  };
};
export const sectionData: SectionsData = {
  navbar: {
    logo: 'assets/zid/zid-logo 1.png',
    navbarItems: navbarItems,
  },
  home: {
    header: 'طور متجرك ووسع آفاق تجارتك مع سوق تطبيقات زد',
    description: `  طور تجارتك من خلال تطبيقات و حلول سزق تطبيقات زد التى تساعدك فى نمو ارباحك
عبر ادارة عمليات متجرك بشكل فعال و احترافى`,
  },
  categories: {
    majorImg: 'assets/zid/product03 1.png',
    secImg: 'assets/zid/Dot Pattern 2.png',
    thirdImg: 'assets/zid/Ellipse 250.png',
  },
  improvements: {
    header: `كل ما تحتاجه لنمو متجرك فى مكان واحد`,
    description: `
    مميزات سوق تطبيقات زد تساعدك في سهولة وسرعة الاستفادة من خدمات وحلول
    سوق التطبيقات لنمو متجرك ومضاعفة أرباحك `,
    improvementItems: improvements,
    majorImg: 'zidapp_1-min 1.png',
    secImg: 'assets/zid/Dot Pattern 2.png',
    thirdImg: 'assets/zid/Ellipse 250.png',
  },
  applications: {
    header: '',
    description: '',
    applications: applications,
  },
  footer: {
    logo: 'assets/zid/zid-logo 1.png',
    socialMedia: [
      {
        iconName: IconNamesEnum.Youtube,
        link: '',
        iconSize: '20',
      },
      {
        iconName: IconNamesEnum.Linkedin,
        link: '',
        iconSize: '20',
      },
      {
        iconName: IconNamesEnum.Instagram,
        link: '',
        iconSize: '20',
      },
      {
        iconName: IconNamesEnum.Twitter,
        link: '',
        iconSize: '20',
      },
    ],
  },
};
