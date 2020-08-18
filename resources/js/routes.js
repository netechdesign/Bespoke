import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() => import('./Demo/Dashboard/Default'));
const DashboardEcommerce = React.lazy(() => import('./Demo/Dashboard/Ecommerce'));
const DashboardCrm = React.lazy(() => import('./Demo/Dashboard/Crm'));
const DashboardAnalytics = React.lazy(() => import('./Demo/Dashboard/Analytics'));
const DashboardCrypto = React.lazy(() => import('./Demo/Dashboard/Crypto'));
const DashboardProject = React.lazy(() => import('./Demo/Dashboard/Project'));


const DataImport = React.lazy(() => import('./Back-office/Pages/Data_import'));
const SupplierList = React.lazy(() => import('./Back-Office/Pages/SupplierList'));
const MorrisonList = React.lazy(() => import('./Back-Office/Pages/MorrisonList'));
const UtilitaList = React.lazy(() => import('./Back-Office/Pages/UtilitaList'));
const UtilitaChart = React.lazy(() => import('./Back-Office/Pages/UtilitaChart'));
const UtilitaView = React.lazy(() => import('./Back-Office/Pages/UtilitaView'));

const SiteEngineer = React.lazy(() => import('./Back-Office/Pages/SiteEngineer'));

const FormsSelect = React.lazy(() => import('./Demo/Forms/FormsSelect'));
const routes = [
    { path: '/dataimport', exact: true, name: 'DataImport', component: DataImport },
    { path: '/list', exact: true, name: 'SupplierList', component: SupplierList },
    { path: '/list/morrison', exact: true, name: 'MorrisonList', component: MorrisonList },
    { path: '/list/morrison/:id', exact: true, name: 'MorrisonList', component: MorrisonList },
    { path: '/list/utilita', exact: true, name: 'UtilitaList', component: UtilitaList },
    { path: '/list/utilita/:id', exact: true, name: 'UtilitaList', component: UtilitaList },
    { path: '/utilitachart', exact: true, name: 'UtilitaChart', component: UtilitaChart },
    { path: '/utilitaview', exact: true, name: 'UtilitaView', component: UtilitaView },
    { path: '/report', exact: true, name: 'UtilitaList', component: UtilitaList },

    { path: '/siteengineer', exact: true, name: 'SiteEngineer', component: SiteEngineer },
   
    { path: '/forms/form-select', exact: true, name: 'Forms Select', component: FormsSelect },

    { path: '/dashboard/default', exact: true, name: 'Default', component: DashboardDefault },
    { path: '/dashboard/e-commerce', exact: true, name: 'Ecommerce', component: DashboardEcommerce },
    { path: '/dashboard/crm', exact: true, name: 'CRM', component: DashboardCrm },
    { path: '/dashboard/analytics', exact: true, name: 'Analytics', component: DashboardAnalytics },
    { path: '/dashboard/crypto', exact: true, name: 'Crypto', component: DashboardCrypto },
    { path: '/dashboard/project', exact: true, name: 'Project', component: DashboardProject },
   
  ];

export default routes;