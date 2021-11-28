import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx(' hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <h3> Collection of fast, minimalist, single-purpose apps</h3>
        <ul type="none" style={{"paddingLeft": 0}}>
          <li>Simple and lightweight</li>
          <li>Do one specific task perfectly</li>
          <li>For everyday problems and tasks</li>
        </ul>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/audio">
            Browse collection
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
