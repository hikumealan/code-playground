import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    NexusCard,
    NexusAccordion,
    NexusAccordionTrigger,
    NexusAccordionContent,
    NexusCardBody,
    NexusIcon,
    NexusFooter,
    NexusFooterBottom,
    NexusCardFooter,
    NexusFooterContent,
    NexusFooterColumn,
    NexusFooterContentTitle,
    NexusFooterLogo
} from '@nexus/react';

import Logo from '@nexus/core/dist/assets/images/nexus-footer-logo.svg';

import './home.scss';
import i18n from 'i18n';
import { selectAuthEmail } from '@nexus-ui-starter-kit/core/auth';
import {
    getIndividualByEmail,
    selectCurrentIndividual
} from '@nexus-ui-starter-kit/core/domain/individual';
import { FormEx, Hero } from '../../components';
import bannerImage from '../../assets/images/banner-image.jpg';
import SingleColumn from '../../components/layout/single-column/singleColumn';

// eslint-disable-next-line max-lines-per-function
const Home = () => {
    const translationScope = 'home';

    const dispatch = useDispatch();
    const email = useSelector(selectAuthEmail);
    const individual = useSelector(selectCurrentIndividual);

    const [
        accordionOneOpen,
        setAccordionOneOpen
    ] = useState(true);

    const [
        accordionTwoOpen,
        setAccordionTwoOpen
    ] = useState(false);

    const [
        accordionThreeOpen,
        setAccordionThreeOpen
    ] = useState(false);

    const [
        accordionFourOpen,
        setAccordionFourOpen
    ] = useState(false);

    useEffect(() => {
        if (!individual && email) {
            dispatch(getIndividualByEmail({ email }));
        }
    }, [dispatch, email, individual]);

    return (
        <div>
            <Hero />
            <section className="nexus-theme-dark banner-container nexus-rhythm-10">
                <div className="nexus-container">
                    <div className="nexus-row">
                        <div className="nexus-col-xs-4 nexus-col-md-4">
                            <h2 className="nexus-h3 nexus-rhythm-2">
                                {i18n.t('bannerHeading', { scope: translationScope })}
                            </h2>
                            <p className="nexus-body nexus-rhythm-3">
                                {i18n.t('bannerBody', { scope: translationScope })}
                            </p>

                            <div className="nexus-row">
                                <h3 className="nexus-h4 nexus-col-xs-2 nexus-rhythm-1 list-heading">
                                    {i18n.t('bannerListHeading', { scope: translationScope })}
                                </h3>
                                <ul className="nexus-col-xs-2 nexus-rhythm-1 template-list">
                                    <li>
                                        <Link to="#" className="nexus-link">
                                            {i18n.t('bannerListItem1', { scope: translationScope })}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="nexus-link">
                                            {i18n.t('bannerListItem2', { scope: translationScope })}
                                        </Link>                                    </li>
                                    <li>
                                        <Link to="#" className="nexus-link">
                                            {i18n.t('bannerListItem3', { scope: translationScope })}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="nexus-col-xs-4 nexus-col-md-4 banner-wrap">
                            <img src={bannerImage} className="banner-image" alt="Create your case" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="nexus-rhythm-10 design-principles">
                <SingleColumn>
                    <div className="nexus-row">
                        <div className="nexus-col-xs-4 nexus-col-md-3 nexus-col-lg-5 nexus-col-xl-4 nexus-center-xs nexus-start-md nexus-rhythm-4">
                            <div className="nexus-col-xs-4 design-principles-heading">
                                <h2 className="design-principles-heading-text nexus-rhythm-2">
                                    {i18n.t('designPrinciples.heading', { scope: translationScope })}
                                </h2>
                            </div>
                            <button className="nexus-btn-primary nexus-btn-large">
                                {i18n.t('designPrinciples.button', { scope: translationScope })}
                            </button>
                        </div>
                        <div className="nexus-col-xs-4 nexus-col-md-5 nexus-col-lg-7 nexus-col-xl-8">
                            <ol className="design-principles-list">
                                <div className="design-principles-list-item"><li>&nbsp;&nbsp;{i18n.t('designPrinciples.listItem1', { scope: translationScope })}</li></div>
                                <div className="design-principles-list-item"><li>{i18n.t('designPrinciples.listItem2', { scope: translationScope })}</li></div>
                                <div className="design-principles-list-item"><li>{i18n.t('designPrinciples.listItem3', { scope: translationScope })}</li></div>
                                <div className="design-principles-list-item"><li>{i18n.t('designPrinciples.listItem4', { scope: translationScope })}</li></div>
                                <div className="design-principles-list-item"><li>{i18n.t('designPrinciples.listItem5', { scope: translationScope })}</li></div>
                            </ol>
                        </div>
                    </div>
                </SingleColumn>
            </section>
            <section className="nexus-rhythm-10 multi-column">
                <SingleColumn>
                    <div className="nexus-row">
                        <div className="nexus-col-xs-4 nexus-col-md-6 nexus-col-lg-8 nexus-rhythm-6">
                            <h2 className="multi-column-heading">{i18n.t('multiColumn.heading', { scope: translationScope })}</h2>
                            <h3 className="nexus-subtitle">{i18n.t('multiColumn.subheading', { scope: translationScope })}</h3>
                        </div>
                    </div>
                    <div className="nexus-row">
                        <div className="nexus-col-xs-4 nexus-col-md-4 nexus-col-lg-4 multi-column-item">
                            <p>{i18n.t('multiColumn.description1', { scope: translationScope })}</p>
                        </div>
                        <div className="nexus-col-xs-4 nexus-col-md-4 nexus-col-lg-4 multi-column-item">
                            <p>{i18n.t('multiColumn.description2', { scope: translationScope })}</p>
                        </div>
                        <div className="nexus-col-xs-4 nexus-col-md-4 nexus-col-lg-4 multi-column-item">
                            <p>{i18n.t('multiColumn.description3', { scope: translationScope })}</p>
                        </div>
                    </div>
                </SingleColumn>
            </section>
            <section className="custom-components">
                <SingleColumn>
                    <div className="nexus-row">
                        <div className="nexus-col-xs-4 nexus-col-md-4 nexus-col-lg-7 nexus-rhythm-7 custom-components-description">
                            <h2 className="nexus-h2 custom-components-heading">{i18n.t('customComponents.heading1', { scope: translationScope })}</h2>
                            <p className="nexus-h4 nexus-rhythm-14">{i18n.t('customComponents.content1', { scope: translationScope })}</p>

                            <h2 className="nexus-h2 custom-components-heading">{i18n.t('customComponents.heading2', { scope: translationScope })}</h2>
                            <p className="nexus-h4">{i18n.t('customComponents.content2', { scope: translationScope })}</p>
                        </div>

                        <div className="nexus-col-xs-4 nexus-col-md-4 nexus-col-lg-5">
                            <NexusCard>
                                <div className="nexus-theme-dark nexus-center-xs">
                                    <h2 className="nexus-h5 nexus-rhythm-1">{i18n.t('customComponents.cardHeading', { scope: translationScope })}</h2>
                                    <h3 className="nexus-rhythm-4 card-subheading">$123,000.00</h3>

                                    <dl className="custom-components-list">
                                        <div className="custom-components-list-item">
                                            <dt className="nexus-caption-copy">{i18n.t('customComponents.descriptionTitle1', { scope: translationScope })}</dt>
                                            <dd className="card-description">{i18n.t('customComponents.descriptionContent1', { scope: translationScope })}</dd>
                                        </div>
                                        <div className="custom-components-list-item">
                                            <dt className="nexus-caption-copy">{i18n.t('customComponents.descriptionTitle2', { scope: translationScope })}</dt>
                                            <dd className="card-description">{i18n.t('customComponents.descriptionContent2', { scope: translationScope })}</dd>

                                        </div>
                                        <div className="custom-components-list-item">
                                            <dt className="nexus-caption-copy">{i18n.t('customComponents.descriptionTitle3', { scope: translationScope })}</dt>
                                            <dd className="card-description">{i18n.t('customComponents.descriptionContent3', { scope: translationScope })}</dd>

                                        </div>
                                        <div className="custom-components-list-item">
                                            <dt className="nexus-caption-copy">{i18n.t('customComponents.descriptionTitle4', { scope: translationScope })}</dt>
                                            <dd className="card-description">{i18n.t('customComponents.descriptionContent4', { scope: translationScope })}</dd>
                                        </div>
                                    </dl>
                                </div>

                                <NexusCardBody>
                                    <NexusAccordion open={accordionOneOpen} onToggleEvent={() => setAccordionOneOpen(!accordionOneOpen)}>
                                        <NexusAccordionTrigger>
                                            <h1 className="nexus-body">{i18n.t('customComponents.accordionTrigger', { scope: translationScope })}</h1>
                                        </NexusAccordionTrigger>
                                        <NexusAccordionContent>
                                            {i18n.t('customComponents.accordionContent', { scope: translationScope })}
                                        </NexusAccordionContent>
                                    </NexusAccordion>
                                    <NexusAccordion open={accordionTwoOpen} onToggleEvent={() => setAccordionTwoOpen(!accordionTwoOpen)}>
                                        <NexusAccordionTrigger>
                                            <h1 className="nexus-body">{i18n.t('customComponents.accordionTrigger', { scope: translationScope })}</h1>
                                        </NexusAccordionTrigger>
                                        <NexusAccordionContent>
                                            {i18n.t('customComponents.accordionContent', { scope: translationScope })}
                                        </NexusAccordionContent>
                                    </NexusAccordion>
                                    <NexusAccordion open={accordionThreeOpen} onToggleEvent={() => setAccordionThreeOpen(!accordionThreeOpen)}>
                                        <NexusAccordionTrigger>
                                            <h1 className="nexus-body">{i18n.t('customComponents.accordionTrigger', { scope: translationScope })}</h1>
                                        </NexusAccordionTrigger>
                                        <NexusAccordionContent>
                                            {i18n.t('customComponents.accordionContent', { scope: translationScope })}
                                        </NexusAccordionContent>
                                    </NexusAccordion>
                                    <NexusAccordion open={accordionFourOpen} onToggleEvent={() => setAccordionFourOpen(!accordionFourOpen)}>
                                        <NexusAccordionTrigger>
                                            <h1 className="nexus-body">{i18n.t('customComponents.accordionTrigger', { scope: translationScope })}</h1>
                                        </NexusAccordionTrigger>
                                        <NexusAccordionContent>
                                            {i18n.t('customComponents.accordionContent', { scope: translationScope })}
                                        </NexusAccordionContent>
                                    </NexusAccordion>
                                </NexusCardBody>

                                <NexusCardFooter class="nexus-center-xs">
                                    <button className="nexus-btn-primary nexus-btn-large">{i18n.t('customComponents.cardButton1', { scope: translationScope })}</button>
                                    <button className="nexus-btn nexus-btn-large">{i18n.t('customComponents.cardButton2', { scope: translationScope })}</button>
                                </NexusCardFooter>

                            </NexusCard>
                        </div>
                    </div>
                </SingleColumn>
            </section>
            <section className="footer">
                <NexusFooter>
                    <NexusFooterLogo>
                        <a href="#">
                            <NexusIcon src={Logo} />
                            <span className="nexus-visually-hidden">{i18n.t('footer.home', { scope: translationScope })}</span>
                        </a>
                    </NexusFooterLogo>
                    <NexusFooterColumn>
                        <NexusFooterContentTitle>
                            <p>{i18n.t('footer.title', { scope: translationScope })}</p>
                        </NexusFooterContentTitle>
                        <NexusFooterContent>
                            <a href="">{i18n.t('footer.amsterdam', { scope: translationScope })}</a>
                        </NexusFooterContent>
                        <NexusFooterContent>
                            <a href="">{i18n.t('footer.dordrecht', { scope: translationScope })}</a>
                        </NexusFooterContent>
                    </NexusFooterColumn>
                    <NexusFooterColumn>
                        <NexusFooterContentTitle>
                            <p>{i18n.t('footer.title', { scope: translationScope })}</p>
                        </NexusFooterContentTitle>
                        <NexusFooterContent>
                            <a href="">{i18n.t('footer.amsterdam', { scope: translationScope })}</a>
                        </NexusFooterContent>
                        <NexusFooterContent>
                            <a href="">{i18n.t('footer.dordrecht', { scope: translationScope })}</a>
                        </NexusFooterContent>
                        <NexusFooterContent>
                            <a href="">{i18n.t('footer.eindhoven', { scope: translationScope })}</a>
                        </NexusFooterContent>
                    </NexusFooterColumn>
                    <NexusFooterBottom>
                        <p className="nexus-body">{i18n.t('footer.copyright', { scope: translationScope })}</p>
                    </NexusFooterBottom>
                </NexusFooter>
            </section>
        </div>
    );
};

export default Home;
