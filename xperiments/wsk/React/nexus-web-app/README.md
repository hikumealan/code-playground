# Introduction

This is the UI Starter Kit for Nexus. The project is used as a foundation for building out new feature/functionality that the Nexus Platform provides.

-   [Requirements](#Requirements)
-   [Installation](#installation)
-   [Running](#running)
-   [Authentication](#authentication)
    -   [Provider Types](#provider-types)
-   [Importing Core Packages](#importing-core-packages)
-   [Data Management and APIs](#data-management-and-apis)
    -   [API Requests](#api-requests)
    -   [API Request Headers](#api-request-headers)
-   [Error Handling](#error-handling)
    -   [Error Logging](#error-logging)
    -   [Custom Logging](#custom-logging)
-   [Using Core Domain Objects](#using-core-domain-objects)
    -   [Provided Domains](#provided-domains)
    -   [Domain Object Usage Example](#domain-object-usage-example)
    -   [Domain Object State Management](#domain-object-state-management)
        -   ['Individual' Actions exported from Core](#individual-actions-exported-from-core)
        -   ['Individual' Services exported from Core](#individual-services-exported-from-core)
        -   ['Account' Actions exported from Core](#account-actions-exported-from-core)
        -   ['Account' Services exported from Core](#account-services-exported-from-core)
-   [Known Issues](#known-issues)
-   [Nexus Design System](#nexus-design-system)

## Requirements

-   `node` >= 12.16.1
-   `npm` >= 6.14.8
-   `yarn` >= 1.22.5

---

## Installation

The following installation instructions will get you up and running quickly.

1. Create the directory to hold your application

    ```
    $ mkdir my-app
    ```

1. Navigate to that directory

    ```
    $ cd my-app
    ```

1. Create `.npmrc` file

    ```
    $ touch .npmrc
    ```

1. Copy the below example into your `.npmrc` file

    ```
    registry=https://registry.npmjs.org/
    @nexus:registry=https://fso-to.pkgs.visualstudio.com/7bc545d8-bf8c-477e-bb91-17a982c30c2e/_packaging/Nexus/npm/registry/
    @nexus-ui-starter-kit:registry=https://fso-to.pkgs.visualstudio.com/7bc545d8-bf8c-477e-bb91-17a982c30c2e/_packaging/Nexus/npm/registry/
    @ey-studio-phl:registry=https://npm.ey-intuitive.com

    always-auth=true
    save-exact=true

    ; begin auth token
    //fso-to.pkgs.visualstudio.com/7bc545d8-bf8c-477e-bb91-17a982c30c2e/_packaging/Nexus/npm/registry/:username=fso-to
    //fso-to.pkgs.visualstudio.com/7bc545d8-bf8c-477e-bb91-17a982c30c2e/_packaging/Nexus/npm/registry/:_password=[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]
    //fso-to.pkgs.visualstudio.com/7bc545d8-bf8c-477e-bb91-17a982c30c2e/_packaging/Nexus/npm/registry/:email=npm requires email to be set but doesn't use the value
    //fso-to.pkgs.visualstudio.com/7bc545d8-bf8c-477e-bb91-17a982c30c2e/_packaging/Nexus/npm/:username=fso-to
    //fso-to.pkgs.visualstudio.com/7bc545d8-bf8c-477e-bb91-17a982c30c2e/_packaging/Nexus/npm/:_password=[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]
    //fso-to.pkgs.visualstudio.com/7bc545d8-bf8c-477e-bb91-17a982c30c2e/_packaging/Nexus/npm/:email=npm requires email to be set but doesn't use the value
    ; end auth token
    ```

1. Follow the instructions at https://fso-to.visualstudio.com/Nexus%20for%20Banking/_packaging?_a=connect&feed=Nexus in order to update your auth token and properly connect to the feed.

1. Initialize the application

    ```
    npx --userconfig .npmrc @nexus-ui-starter-kit/init
    ```

---

## Running

### Run the application

```
$ yarn start
```

---

## Authentication

The Starter Kit provides various authentication providers out of the box to allow for flexibility across use cases. Each provider requires specific configuration that aligns with the reqistered web application and as necessary any additional integrations such as the Nexus APIs.

An Active Directory provider and configuration is included by default to allow for Single Sign On (SSO) to the EY AD instance. This assumes that the developer's access has also been properly configured within the Nexus Platform to leverage Nexus APIs.

The required configuration parameters for each authentication type are outlined within the .env.example file which was copied over as a .env file during the installation process described above. All providers with the exception of the default AD provider have their configuration commented out.

To properly configure a provider, work with the appropriate administrator(s) that have access to the application configuration within Azure and then update the .env settings to reflect the configuration.

### Provider Types

-   Active Directory (AD): Provides AD integration and, by default, SSO capability within the EY AD domain.
-   Active Directory Business to Customer (ADB2C): Provides integration with Azure's ADB2C identify provider and user authentication/management flows.
-   Token: Development-only token-based API endpoint.

---

## Importing Core Packages

By default core will be included as a dependency in the generated web app. Importing objects and functions within code is done through standard import statements with references to core in Javascript files such as:

```
import { get } from '@nexus-ui-starter-kit/core/utils';
```

Various packages (directories) have been exported and contain functions/objects that can be used within your code.

TODO: Define exported functions..

-   @nexus-ui-starter-kit/core/auth
-   @nexus-ui-starter-kit/core/components
-   @nexus-ui-starter-kit/core/containers
-   @nexus-ui-starter-kit/core/domain
-   @nexus-ui-starter-kit/core/i18n
-   @nexus-ui-starter-kit/core/messaging
-   @nexus-ui-starter-kit/core/navigation
-   @nexus-ui-starter-kit/core/store
-   @nexus-ui-starter-kit/core/utils

## Data Management and APIs

The core module provides an abstract framework for working with data through APIs and state. A set of utility functions has been provided to handle API requests, while a strategy for managing the data returned from the responses is provided. State is managed using Redux (https://redux.js.org/) and its action/reducer patterns.

### API Requests

Within the core/utils package, the following HTTP-based functions have been exported:

-   get
-   post
-   put
-   patch
-   remove

Based on the need, the appropriate API request can be made using the function specific to the API type. Responses are provided within the 'data' property and can be accessed accordingly. By default errors that occur when the request is made will handled by the messaging framework built into the core module by broadcasting through a global messaging banner. Developers can suppress the messaging if desired by passing a second argument to the API function:

```
import { get } from '@nexus-ui-starter-kit/core/utils';
...
// GET request for an individual with default error handling

const { data } = await get({
    url: `api/individuals/email/${email}`
});
...

// GET request for an individual, suppressing error handling by passing true as the 2nd argument

try {
    const { data } = await get({
        url: `api/individuals/email/${email}`
    }, true);
    ...
} catch (error) {
    // handle error
}
```

### API Request Headers

The starter kit uses the Axios library for HTTP request/responses (https://github.com/axios/axios) and allows for overrides to be provided for most configuration options when making one of the requests outlined in above. The configuration options are found here (https://github.com/axios/axios#request-config).

---

## Error Handling

Provided with the starter kit is a component ErrorBoundary that captures and optionally logs errors that are thrown when a component is rendered or through user interaction such as click events. The component works by providing a boundary within the component hierarchy in which it will trap rendering errors and display some default or custom content/messaging. While it's recommended that it be placed high enough in the component hierarchy (see the default home.js file for the provided example usage) to trap all errors, it can used anywhere to trap/handle more specific component errors and respond accordingly.

An additional feature provided by the component is the ability to log errors to a pre-configured logging endpoint/provider. Logging is enabled by setting the logErrors property of the component to 'true' in addition to setting up the proper .env key as noted in the [Error Logging](#error-logging) section below.

ErrorBoundary Component Example Usage:

```
import { ErrorBoundary } from '@nexus-ui-starter-kit/core/components';

<ErrorBoundary logErrors={false|true} errorHandler={<h1>Custom error handler</h1>} errorMessage="Custom error message">
    <child component>
</ErrorBoundary>
```

-   **logErrors:** Default false - Logs errors to the configured logging provider when true.
-   **errorHandler:** Optional but recommended custom component that renders content when an error occurs. Simple default messaging is provided.
-   **errorMessage:** Optional error message to display instead of the default the component provides. This message will display through the message alerts and the default errorHandler if a custom one isn't provided.

### Error Logging

A log handler has been included in the starter kit and the .env.example file but is disabled (commented out) by default. To enable, uncomment or add the following variable in the .env file:

```
REACT_APP_API_LOGGING_CONTEXT=/api/clientLog
```

When the above endpoint is provided, all client errors will be logged using the default log handler. A custom handler and associated endpoint can be created as outlined in the next section.

### Custom Logging

A custom log handler can be provided to override the default handler. This custom handler should properly structure the supplied data and call the configured logger API endpoint to log it. The handler is meant to be a function that can accept a logLevel, the data to log, and a logUri as arguments. The logData can be transformed if necessary to suit the needs of the consuming API. The API will then be called as part of the handler's implementation using the HTTP request methods provided as part of the starter kit.

**NOTE:** Either the REACT_APP_API_LOGGING_CONTEXT must be configured with the logging endpoint which is used by the logger by default OR an endpoint can be provided to the logger (see setLogUri below). Without one of these, logging will not work. There are checks performed in the logger to ensure a uri is provided. This uri is then passed to the log handler for calling the logging endpoint.

The following is the default handler implementation for reference:

```
const defaultLogHandler = (logLevel='error', logData={}, logUri) => {
    const {
        type, detail, ...rest
    } = logData;

    const data = {
        ...rest,
        type,
        [logLevel]: {
            detail
        }
    };

    post(
        {
            url: logUri,
            data
        },
        true
    );
};

```

To initialize a custom handler, it's recommened, but not required, that the logger instance be referenced at the root app level (app.js) to ensure it's initialized properly prior to being called.

```
// app.js
...
import { getLogger } from '@nexus-ui-starter-kit/core/utils';

getLogger().setLogHandler(() => {
    // custom log handler code goes here per instructions above.
});
...
```

While it's simplest to provide the proper endpoint value for REACT_APP_API_LOGGING_CONTEXT, the endpoint can be set at runtime by calling setLogUri on the logger:

```
// app.js
...
import { getLogger } from '@nexus-ui-starter-kit/core/utils';

getLogger().setLogUri('valid logging uri');
...
```

---

## Using Core Domain Objects

Domains represent objects and artifacts that provide management of specific types of functionality (individual, account, etc) within the core module from an API and state perspective.

Within domain-specific namespaces are various functions that provide support for making service-related (API) requests and to handle the responses and state management.

### Provided Domains

The following domain objects and management functions have been provided as a convencience to developers.

-   individual: An abstract person and their information such as profile, address, phone, etc. Individual CRUD management is provided within the core module and accessible within the app.

-   account: Think checking/savings/money market/etc. Individual CRUD management is provided within the core module and accessible within the app.

#### Domain Object Usage Example

Using an example of a functional component to get an individual by dispatching the get action and then selecting the value updated in the Redux state using the selector. The type of pattern would be used for other domain object types as well.

```
...
import { getIndividual, selectIndividual } from '@nexus-starter-kit'/core/domain/individual';

const IndividualComponent = () => {
    const dispatch = useDispatch();
    // Retrieve the individual from state with the selector
    const individual = useSelector(selectIndividual);

    useEffect(() => {
        if (!individual) {
            // If the individual isn't present, initial an action/API request
            dispatch(getIndividualByEmail('test.user@test.com'));
        }
    }, [dispatch, email, individual]);
    ...
};

```

#### Domain Object State Management

The domain objects that are exposed by the core module through Redux state all share a common structure that is managed by the result of the subsequent Actions (via Reducers). To keep things simple and concise, each of the domain types that follow adhere to the following Redux state structure:

```
// Abstract structure
domain (type of domain object)
   |
    - current (reference to fetch results by id - i.e. current individual
    - domain[] (reference to array of domain types by searches - i.e. individuals)
    - isLoading (boolean indicating if processing to retrieve results is occurring)
    - error (holds request errors when they occur)

// Example using individual domain
individual
    |
    - current: { individualId: '..', ... }
    - individuals: [{ individualId: '..', ... }, { individualId: '..', ... }, ...]
    - isLoading: false <default>|true
    - error: null <default>| 'String error message'
```

Selectors are provided with each domain object type to access the Redux state.

```
// Using individual as an example, other objects would follow the same pattern substituting their domain name/type in the function name.

// Select the root domain object
selectIndividual()
// Select current individual within the domain
selectCurrentIndividual()
// Select all individuals within the domain
selectIndividuals()
// Select current loading state
selectLoadingState()

```

##### 'Individual' Actions exported from Core

Actions are provided for developers to manage Individual data and subsequently the underlying Redux state. The Actions abstract the service calls and manage the responses by updating the 'individual' slice in the Redux state.

_See Nexus for Banking API docs for schema/object reference._

To use the individual APIs, import the actions and wrap calls in 'dispatch' per the example provide previously:

```
import {
    createIndividual,
    deleteIndividual,
    fetchIndividual,
    fetchIndividualByEmail,
    searchForIndividuals,
    updateIndividual
} from '@nexus-uii-starter-kit/core/domain/individual';

// Calls to the various functions that require data accept an object containing the necessary data as the 1st parameter.
// By default any failed call will dispatch an error to the global messaging handler which can be suppressed by passing false as the 2nd parameter (or 1st/only for functions that do not require data parameters).

// Create an individual
createIndividual({ ... individual schema ... }, <suppress messaging true|false default>)
// Delete an individual
deleteIndividual({ id: 'id' }, <suppress messaging true|false default>)
// Get an individual based on authenticated context/id
getIndividual(<suppress messaging true|false default>)
// Get an individual by email address
getIndividualByEmail({ email: 'test.user@test.com' }, <suppress messaging true|false default>)
// Search for individuals
searchForIndividuals({ ... individual search schema ... }, <suppress messaging true|false default>)
// Update an individual
updateIndividual({ ... individual schema ... }, <suppress messaging true|false default>)

```

##### 'Individual' Services exported from Core

The Actions outlined above for an Individual provide a way to manage Individual data and update the Redux state as a convenience for developers. If however, there is a need to call APIs directly exclusive of the Actions, they have been exported as well.

_See Nexus for Banking API docs for schema/object reference._

To use the individual Service APIs, import them in your code:

```
import {
    addIndividual,
    editIndividual,
    fetchIndividual,
    fetchIndividualByEmail,
    findIndividuals,
    removeIndividual
} from '@nexus-uii-starter-kit/core/domain/individual';

// By default any failed call will dispatch an error to the global messaging handler which can be suppressed by passing false as the 2nd parameter (or 1st/only for functions that do not required data parameters).

// Create an individual
addIndividual({ ... individual schema ... }, <suppress messaging true|false default>)
// Update an individual
editIndividual({ ... individual schema ... }, <suppress messaging true|false default>)
// Get an individual based on authenticated context/id
fetchIndividual(<suppress messaging true|false default>)
// Get an individual by email address
fetchIndividualByEmail('test.user@test.com', <suppress messaging true|false default>)
// Search for individuals using search criteria
findIndividuals({ ... individual search schema ... }, <suppress messaging true|false default>)
// Delete an individual
removeIndividual('id', <suppress messaging true|false default>)

```

---

##### 'Account' Actions exported from Core

Actions are provided for developers to manage Account data and subsequently the underlying Redux state. The Actions abstract the service calls and manage the responses by updating the 'account' slice in the Redux state.

_See Nexus for Banking API docs for schema/object reference._

To use the account APIs, import the actions and wrap calls in 'dispatch' per the example provide previously:

```
import {
    createAccount,
    deleteAccount,
    getAccountById,
    getAccounts,
    getAccountsByIndividualId,
    searchForAccounts,
    updateAccount,
} from '@nexus-ui-starter-kit/core/domain/account';

// Calls to the various functions that require data accept an object containing the necessary data as the 1st parameter.
// By default any failed call will dispatch an error to the global messaging handler which can be suppressed by passing false as the 2nd parameter (or 1st/only for functions that do not require data parameters).

// Create an account
createAccount({ ... account schema ... }, <suppress messaging true|false default>)
// Delete an account
deleteAccount({ id: 'id' }, <suppress messaging true|false default>)
// Get an account by account id
getAccountById({ id: 'id' }, <suppress messaging true|false default>)
// Get accounts by individual id
getAccountsByIndividualId({ individualId: 'id' }, <suppress messaging true|false default>)
// Get all accounts
getAccounts(<suppress messaging true|false default>)
// Search for accounts
searchForAccounts({ ... account search schema ... }, <suppress messaging true|false default>)
// Update an account
updateAccount({ ... account schema ... }, <suppress messaging true|false default>)

```

##### 'Account' Services exported from Core

The Actions outlined above for an Account provide a way to manage Account data and update the Redux state as a convenience for developers. If however, there is a need to call APIs directly exclusive of the Actions, they have been exported as well.

_See Nexus for Banking API docs for schema/object reference._

To use the account Service APIs, import them in your code:

```
import {
    addAccount,
    editAccount,
    fetchAccountById,
    fetchAccountsByIndividualId,
    fetchAccounts,
    findAccounts,
    removeAccount
} from '@nexus-ui-starter-kit/core/domain/account';

// By default any failed call will dispatch an error to the global messaging handler which can be suppressed by passing false as the 2nd parameter (or 1st/only for functions that do not required data parameters).

// Create an account
addAccount({ ... account schema ... }, <suppress messaging true|false default>)
// Update an account
editAccount({ ... account schema ... }, <suppress messaging true|false default>)
// Get an account by account id
fetchAccountById(<suppress messaging true|false default>)
// Get an account by individual id
fetchAccountsByIndividualId('test.user@test.com', <suppress messaging true|false default>)
// Get all accounts
fetchAccounts(<suppress messaging true|false default>)
// Search for accounts using search criteria
findAccounts({ ... account search schema ... }, <suppress messaging true|false default>)
// Delete an account
removeAccount({ id: 'id' }, <suppress messaging true|false default>)

```

---

## Known Issues

The following documents any known issues to the application or components used from the design system.

### Form Submission and Validation

This application utilizes [formik](https://formik.org/docs/overview) and [yup](https://github.com/jquense/yup) for form submission and validation on both the dashboard page and the signup page. There is a known submission issue that exist for the combination of formik, react, and the nexus design system. The validation itself is not known to break the submission process.

#### Issue

As per the [formik documentation](https://formik.org/docs/guides/validation) field-level validation will run by default after any `onChange` or `onBlur` event. However, the nexus form components - e.g.`<NexusInput>`, `<NexusSelect>`... do not. This prevents formik from receiving a value or any subsequent updated value within the field. The consequence will be failed validation and the inability to submit form data. The component library stencil, used to create the nexus components, has documentation on deficiencies between React and standard HTML custom elements - [Stencil Properties and Events](https://stenciljs.com/docs/react#properties-and-events).

#### Example

Take a look at the code for this `<FormExample>` component.

```

 <NexusFormField>
    <NexusLabel>
        {i18n.t('name', { scope: translationScope })}
    </NexusLabel>
    <NexusInput
        id="name"
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
        onBlur={formik.handleBlur}
    />
</NexusFormField>
```

Formik takes advantage of React's [form](https://reactjs.org/docs/forms.html) HTML element's onChange handler in order to update and store values to be submitted by the form. See formik's example [here](https://formik.org/docs/tutorial#visited-fields).

However, when we attempt to submit the form above we see a validation error and failure to submit the form. React states in regard to the onChange handler:

> "We intentionally do not use the existing browser behavior because onChange is a misnomer for its behavior and React relies on this event to handle user input in real time."

The underlying component generated by [stencil](https://stenciljs.com) seems to have incompatibility with this behavior.

#### Remediation & Suggestions

In order to remedy this issue we suggest using the formik validation tools to custom update the form values using the `onInput` handler. The following code is what we are currently using on the dashboard page:

```
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
```

For more information on formik's custom handlers please see the [documentation here](https://formik.org/docs/api/formik#setfieldvalue-field-string-value-any-shouldvalidate-boolean--void).

## Nexus Design System

The Nexus Design System is an integral part of the starter kit and is integrated into it through use of the core module. For reference, the Design System documentation including resources, typography, and component examples can be found within specific sections of the Playbook runtime located here:

https://apsdfsoom5wap06.azurewebsites.net/
