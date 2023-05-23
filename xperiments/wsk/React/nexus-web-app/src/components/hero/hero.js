/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
import React, { useState } from 'react';
import './hero.scss';
import i18n from '../../i18n';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import {
    NexusFormField,
    NexusInput,
    NexusSelect,
    NexusErrorMessage,
    NexusLabel
} from '@nexus/react';

const translationScope = 'home.hero';

const formSchema = Yup.object().shape({
    first: Yup.string().required('Required'),
    last: Yup.string().required('Required'),
    password: Yup.string().required('Required').min(10, i18n.t('passwordShort', { scope: translationScope })).matches(/[a-zA-Z]/u, i18n.t('passwordCharacters', { scope: translationScope })),
    retypepassword: Yup.string()
        .oneOf([Yup.ref('password')], i18n.t('passwordMatch', { scope: translationScope }))
        .required(i18n.t('passwordRequired', { scope: translationScope }))
});


const Hero = () => {
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [password, setPassword] = useState();
    const [retypepassword, setRetypepassword] = useState();

    const formikCreate = useFormik({
        initialValues: {
            first: '',
            last: '',
            password: '',
            retypepassword: ''
        },
        validationSchema: formSchema,
        onSubmit: (values) => {
            setFirst(values.first);
            setLast(values.last);
            setPassword(values.password);
            setRetypepassword(values.retypepassword);
            alert(i18n.t('global.thankYou'));
        }
    });

    const handleClick = () => {
        alert(i18n.t('global.learnMore'));
    };

    return (
        <section className="hero nexus-theme-dark">
            <div className="nexus-container">
                <div className="nexus-row nexus-start-xs nexus-middle-xs nexus-around-xs nexus-between-lg">
                    <div className="nexus-center-xs nexus-start-md nexus-col-xs-4 nexus-col-md-4 nexus-col-lg-6">
                        <h1 className="nexus-h5 nexus-rhythm-1">
                            {i18n.t('title', { scope: translationScope })}
                        </h1>
                        <h2 className="hero-text">
                            {i18n.t('body', { scope: translationScope })}
                        </h2>
                        <button
                            className="nexus-btn"
                            onClick={handleClick}
                        >
                            {i18n.t('global.learnMore')}
                        </button>
                    </div>

                    <div className="nexus-col-xs-4 nexus-col-md-4 nexus-col-lg-6">
                        <form
                            onSubmit={formikCreate.handleSubmit}
                            className="nexus-theme-dark hero-form"
                        >
                            <NexusFormField className="hero-form-field">
                                <NexusLabel>
                                    {i18n.t('firstName', { scope: translationScope })}
                                </NexusLabel>
                                <NexusInput
                                    id="first"
                                    name="first"
                                    type="text"
                                    placeholder={i18n.t('value', { scope: translationScope })}
                                    value={formikCreate.values.first}
                                    onInput={(event) => {
                                        formikCreate.setFieldValue(
                                            'first',
                                            event.target.value
                                        );
                                    }}
                                    onBlur={formikCreate.handleBlur}
                                />
                                {formikCreate.errors.first &&
                                    formikCreate.touched.first ? (
                                        <NexusErrorMessage>
                                            {formikCreate.errors.first}
                                        </NexusErrorMessage>
                                    ) : null}
                            </NexusFormField>

                            <NexusFormField className="hero-form-field">
                                <NexusLabel>
                                    {i18n.t('userName', { scope: translationScope })}
                                </NexusLabel>
                                <NexusInput
                                    id="last"
                                    name="last"
                                    type="text"
                                    placeholder={i18n.t('value', { scope: translationScope })}
                                    value={formikCreate.values.last}
                                    onInput={(event) => {
                                        formikCreate.setFieldValue(
                                            'last',
                                            event.target.value
                                        );
                                    }}
                                    onBlur={formikCreate.handleBlur}
                                />
                                {formikCreate.errors.last &&
                                    formikCreate.touched.last ? (
                                        <NexusErrorMessage>
                                            {formikCreate.errors.last}
                                        </NexusErrorMessage>
                                    ) : null}
                            </NexusFormField>


                            <NexusFormField className="hero-form-field">
                                <NexusLabel>
                                    {i18n.t('password', { scope: translationScope })}
                                </NexusLabel>
                                <NexusInput
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder={i18n.t('value', { scope: translationScope })}
                                    value={formikCreate.values.password}
                                    onInput={(event) => {
                                        formikCreate.setFieldValue(
                                            'password',
                                            event.target.value
                                        );
                                    }}
                                    onBlur={formikCreate.handleBlur}
                                />
                                {formikCreate.errors.password &&
                                    formikCreate.touched.password ? (
                                        <NexusErrorMessage>
                                            {formikCreate.errors.password}
                                        </NexusErrorMessage>
                                    ) : null}
                            </NexusFormField>

                            <NexusFormField className="hero-form-field">
                                <NexusLabel>
                                    {i18n.t('retypePassword', { scope: translationScope })}
                                </NexusLabel>
                                <NexusInput
                                    id="retypepassword"
                                    name="retypepassword"
                                    type="password"
                                    placeholder={i18n.t('value', { scope: translationScope })}
                                    value={formikCreate.values.retypepassword}
                                    onInput={(event) => {
                                        formikCreate.setFieldValue(
                                            'retypepassword',
                                            event.target.value
                                        );
                                    }}
                                    onBlur={formikCreate.handleBlur}
                                />
                                {formikCreate.errors.retypepassword &&
                                    formikCreate.touched.retypepassword ? (
                                        <NexusErrorMessage>
                                            {formikCreate.errors.retypepassword}
                                        </NexusErrorMessage>
                                    ) : null}
                            </NexusFormField>

                            <div className="nexus-row">
                                <div className="nexus-col-xs-4 nexus-center-xs">
                                    <button className="nexus-btn-primary hero-form-submit-button"> {i18n.t('signUp', { scope: translationScope })}</button>
                                </div>
                                <div className="nexus-col-xs-4 nexus-center-xs">
                                    <p className="hero-form-existing-account-text">{i18n.t('existingAccount', { scope: translationScope })} <a className="nexus-link" href="#">{i18n.t('logIn', { scope: translationScope })}</a></p>
                                </div>
                                <div className="nexus-col-xs-4 nexus-center-xs">
                                    <a className="nexus-link hero-form-forgot-link" href="#">{i18n.t('forgotPassword', { scope: translationScope })}</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Hero;
