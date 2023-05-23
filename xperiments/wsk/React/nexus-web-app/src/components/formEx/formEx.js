import React, { useState } from 'react';
import {
    NexusFormField,
    NexusLabel,
    NexusInput,
    NexusRadio,
    NexusSelect,
    NexusIcon,
    NexusErrorMessage
} from '@nexus/react';

import accountCircle from '@nexus/core/dist/assets/icons/action/ic_account_circle_24px.svg';
import mailIcon from '@nexus/core/dist/assets/icons/communication/ic_email_24px.svg';
import mapIcon from '@nexus/core/dist/assets/icons/maps/ic_place_24px.svg';
import coffeeIcon from '@nexus/core/dist/assets/icons/maps/ic_local_cafe_24px.svg';

import DemoTemplate from '../demoTemplate/demoTemplate';
import i18n from 'i18n';
import './formEx.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const coffeeFormSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    origin: Yup.string().required('Required'),
    roast: Yup.string().required('Required')
});

// eslint-disable-next-line max-lines-per-function,complexity
const FormEx = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [origin, setOrigin] = useState('');
    const [roast, setRoast] = useState('');
    const [submitted, setSubmitted] = useState();
    const translationScope = 'formEx';

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            origin: '',
            roast: 'city'
        },
        validationSchema: coffeeFormSchema,
        onSubmit: (values) => {
            setName(values.name);
            setEmail(values.email);
            setOrigin(values.origin);
            setRoast(values.roast);
            setSubmitted(true);
        }
    });

    return (
        <DemoTemplate
            header={i18n.t('header', { scope: translationScope })}
            description={i18n.t('description', { scope: translationScope })}
        >
            <div className="form-example">
                <div className="nexus-row">
                    <h3 className="nexus-col-xs-4">
                        {i18n.t('formExHeader', { scope: translationScope })}
                    </h3>
                    <p className="nexus-col-xs-4">
                        {i18n.t('formExDescription', { scope: translationScope })}
                    </p>
                    <form onSubmit={formik.handleSubmit} className="nexus-col-xs-4 nexus-col-lg-6">
                        <div className="nexus-row">
                            <div className="nexus-col-xs-2">
                                <NexusFormField>
                                    <NexusLabel>
                                        {i18n.t('name', { scope: translationScope })}
                                    </NexusLabel>
                                    <NexusInput
                                        id="name"
                                        name="name"
                                        onInput={(event) => {
                                            formik.setFieldValue('name', event.target.value);
                                        }}
                                        value={formik.values.name}
                                        onBlur={formik.handleBlur}
                                    />
                                </NexusFormField>
                                {formik.errors.name && formik.touched.name ? (
                                    <NexusErrorMessage>{formik.errors.name}</NexusErrorMessage>
                                ) : null}
                            </div>
                            <div className="nexus-col-xs-2">
                                <NexusFormField>
                                    <NexusLabel>
                                        {i18n.t('email', { scope: translationScope })}
                                    </NexusLabel>
                                    <NexusInput
                                        id="email"
                                        name="email"
                                        type="email"
                                        onInput={(event) => {
                                            formik.setFieldValue('email', event.target.value);
                                        }}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                    />
                                </NexusFormField>
                                {formik.errors.email && formik.touched.email ? (
                                    <NexusErrorMessage>{formik.errors.email}</NexusErrorMessage>
                                ) : null}
                            </div>
                            <div className="nexus-col-xs-4">
                                <NexusFormField>
                                    <NexusLabel>
                                        {i18n.t('coffee.origin', { scope: translationScope })}
                                    </NexusLabel>
                                    <NexusSelect
                                        value={formik.values.origin}
                                        name="origin"
                                        id="origin"
                                        onInput={(event) => {
                                            formik.setFieldValue('origin', event.target.value);
                                        }}
                                        onBlur={formik.handleBlur}
                                    >
                                        <option value="brazil">
                                            {i18n.t('coffee.brazil', { scope: translationScope })}
                                        </option>
                                        <option value="colombia">
                                            {i18n.t('coffee.colombia', { scope: translationScope })}
                                        </option>
                                        <option value="indonesia">
                                            {i18n.t('coffee.indonesia', {
                                                scope: translationScope
                                            })}
                                        </option>
                                    </NexusSelect>
                                </NexusFormField>
                                {formik.errors.origin && formik.touched.origin ? (
                                    <NexusErrorMessage>{formik.errors.origin}</NexusErrorMessage>
                                ) : null}
                            </div>
                            <div className="nexus-col-xs-4">
                                <NexusLabel>
                                    {i18n.t('preference', { scope: translationScope })}
                                </NexusLabel>

                                <NexusRadio
                                    id="roast"
                                    name="roast"
                                    value="light"
                                    onInput={(event) => {
                                        formik.setFieldValue('roast', event.currentTarget.value);
                                    }}
                                    onBlur={formik.handleBlur}
                                >
                                    Light
                                </NexusRadio>
                                <NexusRadio
                                    id="roast"
                                    name="roast"
                                    checked="city"
                                    onInput={(event) => {
                                        formik.setFieldValue('roast', event.currentTarget.value);
                                    }}
                                    onBlur={formik.handleBlur}
                                >
                                    City
                                </NexusRadio>
                                <NexusRadio
                                    id="roast"
                                    name="roast"
                                    value="fullcity"
                                    onInput={(event) => {
                                        formik.setFieldValue('roast', event.currentTarget.value);
                                    }}
                                    onBlur={formik.handleBlur}
                                >
                                    Full City
                                </NexusRadio>
                                <NexusRadio
                                    id="roast"
                                    name="roast"
                                    value="dark"
                                    onInput={(event) => {
                                        formik.setFieldValue('roast', event.currentTarget.value);
                                    }}
                                    onBlur={formik.handleBlur}
                                >
                                    Dark
                                </NexusRadio>
                            </div>
                            <div className="nexus-col-xs-1">
                                <button
                                    className="form-submit-ex nexus-btn"
                                    variant="secondary"
                                    type="submit"
                                >
                                    {i18n.t('submit', { scope: translationScope })}
                                </button>
                            </div>
                        </div>
                    </form>
                    {submitted && (
                        <div className="nexus-col-xs-4 nexus-col-lg-6 data-card-wrapper">
                            <div className="data-card">
                                <div className="nexus-row">
                                    <div className="nexus-col-xs-4">
                                        <div className="nexus-row nexus-middle-xs nexus-start-xs nexus-center-xs">
                                            <NexusIcon
                                                className="form-ex-icon"
                                                src={accountCircle}
                                            />
                                            <h5 className="nexus-col-xs-1 form-data-ex">
                                                {i18n.t('name', { scope: translationScope })}
                                            </h5>
                                            <p className="nexus-col-xs-2 form-data-ex">{name}</p>
                                        </div>
                                        <hr />
                                    </div>
                                    <div className="nexus-col-xs-4">
                                        <div className="nexus-row nexus-middle-xs nexus-start-xs nexus-center-xs">
                                            <NexusIcon className="form-ex-icon" src={mailIcon} />
                                            <h5 className="nexus-col-xs-1 form-data-ex">
                                                {i18n.t('email', { scope: translationScope })}
                                            </h5>
                                            <p className="nexus-col-xs-2 form-data-ex">{email}</p>
                                        </div>
                                        <hr />
                                    </div>
                                    <div className="nexus-col-xs-4">
                                        <div className="nexus-row nexus-middle-xs nexus-start-xs nexus-center-xs">
                                            <NexusIcon className="form-ex-icon" src={mapIcon} />
                                            <h5 className="nexus-col-xs-1 form-data-ex">
                                                {i18n.t('coffee.origin', {
                                                    scope: translationScope
                                                })}
                                            </h5>
                                            <p className="nexus-col-xs-2 form-data-ex">{origin}</p>
                                        </div>
                                        <hr />
                                    </div>
                                    <div className="nexus-col-xs-4">
                                        <div className="nexus-row nexus-middle-xs nexus-start-xs nexus-center-xs">
                                            <NexusIcon className="form-ex-icon" src={coffeeIcon} />
                                            <h5 className="nexus-col-xs-1 form-data-ex">
                                                {i18n.t('roast', { scope: translationScope })}
                                            </h5>
                                            <p className="nexus-col-xs-2 form-data-ex">{roast}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </DemoTemplate>
    );
};

export default FormEx;
