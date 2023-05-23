import { images } from '@nexus-ui-starter-kit/core/assets';
const { demoApp1, demoApp2, demoApp3 } = images;
const demos = [
    {
        desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue turpis in nibh interdum egestas. Proin in felis sit amet.',
        header: 'Lorem ipsum retail',
        name: 'retail',
        url: '/'
    },
    {
        desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue turpis in nibh interdum egestas. Proin in felis sit amet.',
        header: 'Lorem ipsum business',
        name: 'business',
        url: '/'
    },
    {
        desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue turpis in nibh interdum egestas. Proin in felis sit amet.',
        header: 'Lorem ipsum construction',
        name: 'construction',
        url: '/'
    },
    {
        desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue turpis in nibh interdum egestas. Proin in felis sit amet.',
        header: 'Lorem ipsum food',
        name: 'food',
        url: '/'
    },
    {
        desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue turpis in nibh interdum egestas. Proin in felis sit amet.',
        header: 'Lorem ipsum education',
        name: 'education',
        url: '/'
    },
    {
        desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue turpis in nibh interdum egestas. Proin in felis sit amet.',
        header: 'Lorem ipsum vehicle',
        name: '',
        url: '/'
    }
];

const demosPage = [
    {
        alt: 'standard welcome demo',
        name: 'Standard UI',
        resource: demoApp1,
        url: '/demo-welcome'
    },
    {
        alt: 'login demo',
        name: 'Login',
        resource: demoApp2,
        url: '/demo-login'
    },
    {
        alt: 'notification demo',
        name: 'UI Notifications',
        resource: demoApp3,
        url: '/demo-notification'
    }
];

const data = {
    demos,
    demosPage
};

export default data;
