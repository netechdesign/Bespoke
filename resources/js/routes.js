import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DataImport = React.lazy(() => import('./Back-office/Pages/Data_import'));

const SupplierList = React.lazy(() => import('./Back-Office/Pages/SupplierList'));
const MorrisonList = React.lazy(() => import('./Back-Office/Pages/MorrisonList'));
const UtilitaList = React.lazy(() => import('./Back-Office/Pages/UtilitaList'));

const routes = [
    { path: '/dataimport', exact: true, name: 'DataImport', component: DataImport },
    { path: '/list', exact: true, name: 'SupplierList', component: SupplierList },
    { path: '/list/morrison', exact: true, name: 'MorrisonList', component: MorrisonList },
    { path: '/list/morrison/:id', exact: true, name: 'MorrisonList', component: MorrisonList },
    { path: '/list/utilita', exact: true, name: 'UtilitaList', component: UtilitaList },
    { path: '/list/utilita/:id', exact: true, name: 'UtilitaList', component: UtilitaList },
    
  
];

export default routes;