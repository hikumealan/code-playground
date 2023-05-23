import React, { useEffect, useState, useRef } from 'react';

import {
    NexusFormField,
    NexusInput,
    NexusSelect,
    NexusErrorMessage,
    NexusLabel
} from '@nexus/react';

import i18n from 'i18n';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './signUp.scss';
import { useDispatch } from 'react-redux';
import { setSuccess } from '@nexus-ui-starter-kit/core/messaging';

const createAccountSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required')
});

const linkAccountSchema = Yup.object().shape({
    type: Yup.string().required('Required')
});

// eslint-disable-next-line max-lines-per-function, complexity
const SignUp = () => {
    const translationScope = 'signUp';
    const [create, setCreate] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [type, setType] = useState('');
    const isInitialMount = useRef(true);
    const dispatch = useDispatch();

    const formikCreate = useFormik({
        initialValues: {
            name: '',
            email: ''
        },
        validationSchema: createAccountSchema,
        onSubmit: (values) => {
            setName(values.name);
            setEmail(values.email);
            setCreate(false);
        }
    });

    const formikLink = useFormik({
        initialValues: {
            type: ''
        },
        validationSchema: linkAccountSchema,
        onSubmit: (values) => {
            setType(values.type);
        }
    });

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            dispatch(setSuccess(`Submitted ${name} ${email} ${type}`));
        }
    }, [dispatch, email, name, type]);

    return (
        <div className="page-wrapper">
            <div className="nexus-container signup-height-wrapper">
                <div className="nexus-row signup-height-wrapper">
                    <div className="nexus-col-xs-4">
                        <div className="nexus-row nexus-middle-xs-4">
                            <h3 className="nexus-col-lg-10 nexus-h3 signup-header">
                                {i18n.t('nexus', { scope: translationScope })}
                            </h3>
                            <a
                                href="/login"
                                className="nexus-col-xs-4 nexus-col-lg-1 signup-links nexus-link"
                            >
                                {i18n.t('login', { scope: translationScope })}
                            </a>
                            <a
                                href="/signup"
                                className="nexus-col-xs-4 nexus-col-lg-1 signup-links nexus-link"
                            >
                                {i18n.t('signup', { scope: translationScope })}
                            </a>
                        </div>
                    </div>

                    <div className="nexus-col-xs-4">
                        <div className="nexus-row nexus-middle-xs">
                            <div className="nexus-col-xs-4">
                                <div className="signup-content-wrapper">
                                    {create ? (
                                        <p className="form-type" variant="link" value="create">
                                            <span className="nexus-h6 signup-link-text">
                                                {i18n.t('create', { scope: translationScope })}
                                            </span>
                                        </p>
                                    ) : (
                                        <button
                                            className="nexus-btn-link form-type-link"
                                            onClick={() => setCreate(true)}
                                            value="link"
                                        >
                                            <span className="nexus-h6 signup-link-text">
                                                {i18n.t('create', { scope: translationScope })}
                                            </span>
                                        </button>
                                    )}

                                    {create ? (
                                        <>
                                            <form
                                                onSubmit={formikCreate.handleSubmit}
                                                className="nexus-row"
                                            >
                                                <div className="nexus-col-xs-4">
                                                    <div className="form-field-wrapper">
                                                        <NexusFormField>
                                                            <NexusLabel>
                                                                {i18n.t('name', {
                                                                    scope: translationScope
                                                                })}
                                                            </NexusLabel>
                                                            <NexusInput
                                                                id="name"
                                                                name="name"
                                                                type="text"
                                                                value={formikCreate.values.name}
                                                                onInput={(event) => {
                                                                    formikCreate.setFieldValue(
                                                                        'name',
                                                                        event.target.value
                                                                    );
                                                                }}
                                                                onBlur={formikCreate.handleBlur}
                                                            />
                                                        </NexusFormField>
                                                        {formikCreate.errors.name &&
                                                        formikCreate.touched.name ? (
                                                            <NexusErrorMessage>
                                                                {formikCreate.errors.name}
                                                            </NexusErrorMessage>
                                                        ) : null}
                                                    </div>
                                                </div>
                                                <div className="nexus-col-xs-4">
                                                    <div className="form-field-wrapper">
                                                        <NexusFormField>
                                                            <NexusLabel>
                                                                {i18n.t('email', {
                                                                    scope: translationScope
                                                                })}
                                                            </NexusLabel>
                                                            <NexusInput
                                                                type="email"
                                                                id="email"
                                                                name="email"
                                                                value={formikCreate.values.email}
                                                                onInput={(event) => {
                                                                    formikCreate.setFieldValue(
                                                                        'email',
                                                                        event.target.value
                                                                    );
                                                                }}
                                                                onBlur={formikCreate.handleBlur}
                                                            />
                                                        </NexusFormField>
                                                        {formikCreate.errors.email &&
                                                        formikCreate.touched.email ? (
                                                            <NexusErrorMessage>
                                                                {formikCreate.errors.email}
                                                            </NexusErrorMessage>
                                                        ) : null}
                                                    </div>
                                                </div>
                                                <div className="nexus-col-xs-4">
                                                    <button className="submit-button nexus-btn">
                                                        {i18n.t('createLow', {
                                                            scope: translationScope
                                                        })}
                                                    </button>
                                                </div>
                                            </form>
                                        </>
                                    ) : (
                                        <>
                                            <form
                                                onSubmit={formikLink.handleSubmit}
                                                className="nexus-row"
                                            >
                                                <div className="nexus-col-xs-4">
                                                    <p className="nexus-h3 add-account-text">
                                                        {i18n.t('addAccount', {
                                                            scope: translationScope
                                                        })}
                                                    </p>
                                                    <div className="form-field-wrapper">
                                                        <NexusFormField>
                                                            <NexusLabel>
                                                                {i18n.t('selectLabel', {
                                                                    scope: translationScope
                                                                })}
                                                            </NexusLabel>
                                                            <NexusSelect
                                                                id="type"
                                                                name="type"
                                                                value={formikLink.values.type}
                                                                onInput={(selectedValue) => {
                                                                    formikLink.setFieldValue(
                                                                        'type',
                                                                        selectedValue.target.value
                                                                    );
                                                                }}
                                                                onBlur={formikCreate.handleBlur}
                                                            >
                                                                <option
                                                                    id="foo"
                                                                    name="foo"
                                                                    value="foo"
                                                                >
                                                                    {i18n.t('selectOptions.0', {
                                                                        scope: translationScope
                                                                    })}
                                                                </option>
                                                                <option
                                                                    id="bar"
                                                                    name="bar"
                                                                    value="bar"
                                                                >
                                                                    {i18n.t('selectOptions.1', {
                                                                        scope: translationScope
                                                                    })}
                                                                </option>
                                                                <option
                                                                    id="baz"
                                                                    name="baz"
                                                                    value="baz"
                                                                >
                                                                    {i18n.t('selectOptions.2', {
                                                                        scope: translationScope
                                                                    })}
                                                                </option>
                                                            </NexusSelect>
                                                        </NexusFormField>
                                                        {formikLink.errors.type &&
                                                        formikLink.touched.type ? (
                                                            <NexusErrorMessage>
                                                                {formikLink.errors.type}
                                                            </NexusErrorMessage>
                                                        ) : null}
                                                    </div>
                                                </div>
                                                <div className="nexus-col-xs-4">
                                                    <button className="submit-button nexus-btn">
                                                        {i18n.t('linkLow', {
                                                            scope: translationScope
                                                        })}
                                                    </button>
                                                </div>
                                            </form>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    {create ? (
                        <div className="nexus-col-xs-4 footer-wrapper">
                            <div className="signup-terms-wrapper">
                                <p className="signup-terms">
                                    {i18n.t('footerText.0', {
                                        scope: translationScope
                                    })}
                                    <a href="#" className="terms-link">
                                        {i18n.t('footerText.1', {
                                            scope: translationScope
                                        })}
                                    </a>
                                    ,{' '}
                                    <a href="#" className="terms-link">
                                        {i18n.t('footerText.2', {
                                            scope: translationScope
                                        })}
                                    </a>
                                    ,{' '}
                                    {i18n.t('footerText.3', {
                                        scope: translationScope
                                    })}
                                    <a href="#" className="terms-link">
                                        {i18n.t('footerText.4', {
                                            scope: translationScope
                                        })}
                                    </a>
                                    .
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="nexus-col-xs-4 footer-wrapper">
                            <div className="signup-terms-wrapper">
                                <p className="signup-terms">
                                    <a className="signup-terms" href="#">
                                        {`${i18n.t('skip', {
                                            scope: translationScope
                                        })} `}
                                    </a>
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SignUp;
