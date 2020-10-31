import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;


const Inprocess = React.lazy(() => import('./Back-office/Pages/Inprocess'));
/** Start Report */
const UtilitaInstalls = React.lazy(() => import('./Back-office/Pages/Reports/UtilitaInstalls'));
const Utilitafuelmix = React.lazy(() => import('./Back-office/Pages/Reports/Utilitafuelmix'));
const Utilitaooh = React.lazy(() => import('./Back-office/Pages/Reports/Utilitaooh'));
/** End Report */
const DashboardDefault = React.lazy(() => import('./Back-office/Pages/Dashboard'));
const DataImport = React.lazy(() => import('./Back-office/Pages/Data_import'));
const DailyPerformance_import = React.lazy(() => import('./Back-office/Pages/DailyPerformance_import'));
const SupplierList = React.lazy(() => import('./Back-Office/Pages/SupplierList'));
const MorrisonList = React.lazy(() => import('./Back-Office/Pages/MorrisonList'));
const UtilitaList = React.lazy(() => import('./Back-Office/Pages/UtilitaList'));
const UtilitaChart = React.lazy(() => import('./Back-Office/Pages/UtilitaChart'));
const UtilitaView = React.lazy(() => import('./Back-Office/Pages/UtilitaView'));
const SiteEngineer = React.lazy(() => import('./Back-Office/Pages/SiteEngineer'));
const Engineer = React.lazy(() => import('./Back-Office/Pages/Engineer'));
const RoleList = React.lazy(() => import("./Back-Office/Role"));
const RoleAdd = React.lazy(() => import("./Back-Office/Role/add"));
const RoleEdit = React.lazy(() => import("./Back-Office/Role/edit"));
const Settarget = React.lazy(() => import("./Back-Office/Pages/Settarget"));
const UserList = React.lazy(() => import("./Back-Office/User"));
const UserAdd = React.lazy(() => import("./Back-Office/User/add"));
const UserEdit = React.lazy(() => import("./Back-Office/User/edit"));
//For demo Examples
const FormsSelect = React.lazy(() => import('./Demo/Forms/FormsSelect'));
const DashboardEcommerce = React.lazy(() => import('./Demo/Dashboard/Ecommerce'));
const DashboardCrm = React.lazy(() => import('./Demo/Dashboard/Crm'));
const DashboardAnalytics = React.lazy(() => import('./Demo/Dashboard/Analytics'));
const DashboardCrypto = React.lazy(() => import('./Demo/Dashboard/Crypto'));
const DashboardProject = React.lazy(() => import('./Demo/Dashboard/Project'));

const routes = [
    { path: '/dataimport', exact: true, name: 'DataImport', component: DataImport },
    { path: '/dailyperformance/:sheet_id', exact: true, name: 'DataImport', component: DailyPerformance_import },
    { path: '/list', exact: true, name: 'SupplierList', component: SupplierList },
    { path: '/list/morrison', exact: true, name: 'MorrisonList', component: MorrisonList },
    { path: '/list/morrison/:id', exact: true, name: 'MorrisonList', component: MorrisonList },
    { path: '/list/utilita', exact: true, name: 'UtilitaList', component: UtilitaList },
    { path: '/list/utilita/:id', exact: true, name: 'UtilitaList', component: UtilitaList },
    { path: '/utilitachart', exact: true, name: 'UtilitaChart', component: UtilitaChart },
    { path: '/utilitaview', exact: true, name: 'UtilitaView', component: UtilitaView },
    { path: '/report', exact: true, name: 'UtilitaList', component: UtilitaList },
    { path: '/siteengineer', exact: true, name: 'SiteEngineer', component: SiteEngineer },
    { path: '/engineer', exact: true, name: 'Engineer', component: Engineer },
    { path:'/role', exact:true, name:'role',component:RoleList},
    { path:'/role/add', exact:true, name:'roleadd',component:RoleAdd},
    { path:'/role/edit/:id', exact:true, name:'roleedit',component:RoleEdit},
    { path:'/user', exact:true, name:'user',component:UserList},
    { path:'/user/add', exact:true, name:'useradd',component:UserAdd},
    { path:'/user/edit/:id', exact:true, name:'useredit',component:UserEdit},
    { path:'/utilitainstalls/:id/:status', exact:true, name:'useredit',component:UtilitaInstalls},
    { path:'/utilitafuelmix/:id', exact:true, name:'useredit',component:Utilitafuelmix},
    { path:'/utilitaooh/:id', exact:true, name:'Utilitaooh',component:Utilitaooh},
    { path:'/settarget', exact:true, name:'Settarget',component:Settarget},
    
    { path: '/Inprocess', exact: true, name: 'Default', component: Inprocess },
    // for demo Examples.
    { path: '/forms/form-select', exact: true, name: 'Forms Select', component: FormsSelect },
    { path: '/dashboard', exact: true, name: 'Default', component: DashboardDefault },
    { path: '/dashboard/e-commerce', exact: true, name: 'Ecommerce', component: DashboardEcommerce },
    { path: '/dashboard/crm', exact: true, name: 'CRM', component: DashboardCrm },
    { path: '/dashboard/analytics', exact: true, name: 'Analytics', component: DashboardAnalytics },
    { path: '/dashboard/crypto', exact: true, name: 'Crypto', component: DashboardCrypto },
    { path: '/dashboard/project', exact: true, name: 'Project', component: DashboardProject },
   
  ];

export default routes;