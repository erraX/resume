import { useI18nContext } from './I18nContext';
import Header from './components/Header';
import SkillsPanel from './components/SkillsPanel';
import CareerPanel from './components/CareerPanel';
import OpenSourcePanel from './components/OpenSourcePanel';
import SharePanel from './components/SharePanel';
import EduationPanel from './components/EduationPanel';

export default function Resume() {
  const { t } = useI18nContext();
  return (
    <>
      <Header
        name={t('infomation.name')}
        title={t('infomation.title')}
        mobile="17717375633"
        experience={t('experience')}
        email="niminjiecide@outlook.com"
        github={'github.com/errax'}
      />
      <div className="border-b my-5 border-gray-800 border-opacity-25"></div>
      <CareerPanel
        careers={[
          {
            company: t('company.alibaba.name'),
            rank: t('company.alibaba.rank'),
            begin: '2021.05',
            end: '2021.10',
            desc: t('company.alibaba.desc'),
            projects: [
              {
                name: t('company.alibaba.project.teambition.name'),
                desc: t('company.alibaba.project.teambition.desc'),
                items: [
                  t('company.alibaba.project.teambition.duty.1'),
                  t('company.alibaba.project.teambition.duty.2'),
                  t('company.alibaba.project.teambition.duty.3'),
                  t('company.alibaba.project.teambition.duty.4'),
                ],
              },
              {
                name: t('company.alibaba.project.aliyundrive.name'),
                desc: t('company.alibaba.project.aliyundrive.desc'),
                items: [
                  t('company.alibaba.project.aliyundrive.duty.1'),
                  t('company.alibaba.project.aliyundrive.duty.2'),
                ],
              },
            ],
          },
          {
            company: t('company.tencent.name'),
            rank: t('company.tencent.rank'),
            begin: '2018.07',
            end: '2021.05',
            desc: t('company.tencent.desc'),
            projects: [
              {
                name: t('company.tencent.project.inquiry.name'),
                desc: t('company.tencent.project.inquiry.desc'),
                items: [
                  t('company.tencent.project.inquiry.duty.1'),
                  t('company.tencent.project.inquiry.duty.2'),
                  t('company.tencent.project.inquiry.duty.3'),
                  t('company.tencent.project.inquiry.duty.4'),
                  t('company.tencent.project.inquiry.duty.5'),
                  t('company.tencent.project.inquiry.duty.6'),
                ],
              },
              {
                name: t('company.tencent.threeone.name'),
                desc: t('company.tencent.threeone.desc'),
                items: [
                  t('company.tencent.threeone.duty.1'),
                  t('company.tencent.threeone.duty.2'),
                  t('company.tencent.threeone.duty.3'),
                  t('company.tencent.threeone.duty.4'),
                ],
              },
            ],
          },
          {
            company: t('company.baidu.name'),
            rank: t('company.baidu.rank'),
            begin: '2015.07',
            end: '2018.07',
            desc: t('company.baidu.desc'),
            projects: [
              {
                name: t('company.baidu.project.dsp.name'),
                desc: t('company.baidu.project.dsp.desc'),
                items: [
                  t('company.baidu.project.dsp.duty.1'),
                  t('company.baidu.project.dsp.duty.2'),
                  t('company.baidu.project.dsp.duty.3'),
                ],
              },
              {
                name: t('company.baidu.project.landing.name'),
                desc: t('company.baidu.project.landing.desc'),
                items: [
                  t('company.baidu.project.landing.duty.1'),
                  t('company.baidu.project.landing.duty.2'),
                  t('company.baidu.project.landing.duty.3'),
                ],
              },
              {
                name: t('company.baidu.project.nichang.name'),
                desc: t('company.baidu.project.nichang.desc'),
                items: [
                  t('company.baidu.project.nichang.duty.1'),
                  t('company.baidu.project.nichang.duty.2'),
                  t('company.baidu.project.nichang.duty.3'),
                ],
              },
            ],
          },
        ]}
      />
      <div className="border-b my-5 border-gray-800 border-opacity-25"></div>
      <OpenSourcePanel
        repos={[
          {
            name: 'form-after-all',
            link: 'http://github.com/errax/form-after-all',
            desc: t('opensource.desc.1'),
          },
          {
            name: 'nuxt-enum-module',
            link: 'http://github.com/errax/nuxt-enum-module',
            desc: t('opensource.desc.2'),
          },
          {
            name: 'inversion.js',
            link: 'http://github.com/errax/inversion.js',
            desc: t('opensource.desc.3'),
          },
          {
            name: 'html-string-replace-webpack-plugin',
            link: 'http://github.com/errax/html-string-replace-webpack-plugin',
            desc: t('opensource.desc.4'),
          },
        ]}
      />
      <div className="border-b my-5 border-gray-800 border-opacity-25"></div>
      <SharePanel
        shares={[
          {
            name: t('share.1'),
            link: '/slides/bi-module.pdf',
          },
          {
            name: t('share.2'),
            link: '/slides/vite.pdf',
          },
          {
            name: t('share.3'),
            link: '/slides/form.pdf',
          },
        ]}
      />
      <div className="border-b my-5 border-gray-800 border-opacity-25"></div>
      <SkillsPanel
        items={[
          t('skills.1'),
          t('skills.2'),
          t('skills.3'),
          t('skills.4'),
          t('skills.5'),
          t('skills.6'),
          t('skills.7'),
          t('skills.8'),
          t('skills.9'),
          t('skills.10'),
        ]}
      />
      <div className="border-b my-5 border-gray-800 border-opacity-25"></div>
      <EduationPanel
        educations={[
          {
            school: t('university.name.1'),
            start: '2013',
            end: '2016',
            major: t('university.major.1'),
            degree: t('university.degree.1'),
          },
          {
            school: t('university.name.2'),
            start: '2009',
            end: '2013',
            major: t('university.major.2'),
            degree: t('university.degree.2'),
          },
        ]}
      />
    </>
  );
}
