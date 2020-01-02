import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>Clean</>,
    imageUrl: "img/keyboard.png",
    description: <>Download, install, plug in your keyboard. It's that easy.</>,
    callToAction: "Download VIA",
    callToActionUrl: "https://www.github.com/the-via/releases/releases/latest"
  },
  {
    title: <>Compatible</>,
    imageUrl: "img/overlap.png",
    description: (
      <>
        Compatible with over over 40 keyboards and easily added to other QMK
        keyboards.
      </>
    ),
    callToAction: "Check compatibility",
    callToActionUrl: "/"
  },
  {
    title: <>Comprehensive</>,
    imageUrl: "img/galaxy.png",
    description: (
      <>
        Configure, test and design in one place - VIA is the last application
        you'll need for your keyboard.
      </>
    ),
    callToAction: "Read the doco",
    callToActionUrl: "/docs/specification"
  }
];

function Feature({
  imageUrl,
  title,
  description,
  callToAction,
  callToActionUrl
}) {
  const imgUrl = useBaseUrl(imageUrl);
  console.log(callToAction, callToActionUrl);
  return (
    <div className={classnames("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
      <div className={styles.featureButton}>
        <Link
          className={classnames(
            "button button--outline button--secondary button--lg",
            styles.getStarted
          )}
          to={callToActionUrl}
        >
          {callToAction}
        </Link>
      </div>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Customization made trivial"
    >
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
