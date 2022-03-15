import Image from 'next/image';
import { ReactNode } from 'react';
import styles from './Layout.module.scss';
import githubIcon from '../public/icons8-github.svg';
import bilibiliIcon from '../public/icons8-bilibili.svg';
import searchIcon from '../public/icons8-search.svg';

interface ILayoutProps {
  children: ReactNode;
}

export function Layout(props: ILayoutProps) {
  const { ...rest } = props;
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.navs}>
          <nav className={styles.name}>SherLuoK</nav>
          <nav className={styles.selected}>博客</nav>
          <nav>工具</nav>
          <nav>项目</nav>
          <div className={styles.links}>
            <Image src={githubIcon} width="24" height="24" />
            <Image src={bilibiliIcon} width="24" height="24" />
            <Image src={searchIcon} width="20" height="20" />
          </div>
        </div>
      </header>
      <hr className={styles.border} />
      <main className={styles.main}>
        <section className={styles.section}>
          <div {...rest} />
        </section>
      </main>
    </div>
  );
}
