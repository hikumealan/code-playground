import React from 'react';
import './accountSummary.scss';
import { selectCurrentIndividual } from '@nexus-ui-starter-kit/core/domain/individual';
import {
    getAccountsByIndividualId,
    selectAccounts
} from '@nexus-ui-starter-kit/core/domain/account';
import { useDispatch, useSelector } from 'react-redux';
import i18n from '../../i18n';

const AccountSummary = () => {
    const dispatch = useDispatch();
    const individual = useSelector(selectCurrentIndividual);
    const accounts = useSelector(selectAccounts);

    const handleFetchData = () => {
        if (individual) {
            // Test ID: '25474b48-6b4f-42bc-bc20-aa5c5a854404'
            dispatch(getAccountsByIndividualId({ id: individual.individualId }));
        }
    };

    const translationScope = 'account';

    return (
        <div className="account">
            <header className="account-header">
                <p>{i18n.t('summary', { scope: translationScope })}</p>
            </header>
            <div className="account-content">
                <p>{i18n.t('exampleDesc', { scope: translationScope })}</p>
                <div>
                    <button onClick={handleFetchData}>
                        {i18n.t('fetchData', { scope: translationScope })}
                    </button>
                </div>
                {accounts && (
                    <ul>
                        {accounts.map((item) => (
                            <li key={item.accountId}>
                                {`${item.accountDescription}: ${item.accountPurpose} - ${item.accountNumber}`}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default AccountSummary;
