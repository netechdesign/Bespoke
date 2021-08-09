import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;


const Inprocess = React.lazy(() => import('./Back-office/Pages/Inprocess'));
/**vehicle api */
const VehicleReport = React.lazy(()=>import('./Back-office/MatrixtelematicsApi/VehicleReport'));

/** Start Report */
const UtilitaInstalls = React.lazy(() => import('./Back-office/Pages/Reports/UtilitaInstalls'));
const Utilitafuelmix = React.lazy(() => import('./Back-office/Pages/Reports/Utilitafuelmix'));
const Utilitaooh = React.lazy(() => import('./Back-office/Pages/Reports/Utilitaooh'));
const Mdsooh = React.lazy(() => import('./Back-office/Pages/Reports/Mdsooh'));

const MdsInstalls = React.lazy(() => import('./Back-office/Pages/Reports/MdsInstalls'));

const Mdsfuelmix = React.lazy(() => import('./Back-office/Pages/Reports/Mdsfuelmix'));
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
//Team
const TeamAdd = React.lazy(() => import("./Back-Office/Team/add"));
const TeamList = React.lazy(() => import("./Back-Office/Team"));
const Engineer_lookup = React.lazy(() => import("./Back-Office/Engineer_lookup"));
const Engineer_lookup_add = React.lazy(() => import("./Back-Office/Engineer_lookup/add"));
const Employee_lookup_edit = React.lazy(() => import("./Back-Office/Engineer_lookup/edit"));
//Job look_up
const Job_lookup = React.lazy(() => import("./Back-Office/Job_lookup"));
const Job_lookup_add = React.lazy(() => import("./Back-Office/Job_lookup/add"));
 const Job_lookup_edit = React.lazy(() => import("./Back-Office/Job_lookup/edit"));
 const Time_lookup = React.lazy(() => import('./Back-Office/Pages/Time_lookup'));
 //Bonus_period_lookup
 const Bonus_period_add = React.lazy(() => import("./Back-Office/Bonus_period_lookup/add"));
 //report
 const Performance = React.lazy(() => import('./Back-Office/Sms_report/Performance'));
 const Workmix = React.lazy(() => import('./Back-Office/Sms_report/Workmix'));
 const Bonus_periods = React.lazy(() => import('./Back-Office/Sms_report/Bonus_periods'));
 const Sms_groups = React.lazy(() => import('./Back-Office/Sms_groups/add'));
 const Sms_groups_list = React.lazy(() => import('./Back-Office/Sms_groups')); 
 const Sms_groups_edit = React.lazy(() => import('./Back-Office/Sms_groups/edit')); 
 

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
    { path:'/mdsinstalls/:id/:status', exact:true, name:'useredit',component:MdsInstalls},
    { path:'/utilitafuelmix/:id', exact:true, name:'useredit',component:Utilitafuelmix},
    { path:'/mdsfuelmix/:id', exact:true, name:'useredit',component:Mdsfuelmix},
    { path:'/utilitaooh/:id', exact:true, name:'Utilitaooh',component:Utilitaooh},
    { path:'/mdsooh/:id', exact:true, name:'Mdsooh',component:Mdsooh},
    { path:'/settarget', exact:true, name:'Settarget',component:Settarget},
    { path: '/Inprocess', exact: true, name: 'Default', component: Inprocess },
    { path: '/vehicle', exact: true, name: 'VehicleReport', component: VehicleReport },
    
    // for demo Examples.
    { path: '/forms/form-select', exact: true, name: 'Forms Select', component: FormsSelect },
    { path: '/dashboard', exact: true, name: 'Default', component: DashboardDefault },
    { path: '/dashboard/e-commerce', exact: true, name: 'Ecommerce', component: DashboardEcommerce },
    { path: '/dashboard/crm', exact: true, name: 'CRM', component: DashboardCrm },
    { path: '/dashboard/analytics', exact: true, name: 'Analytics', component: DashboardAnalytics },
    { path: '/dashboard/crypto', exact: true, name: 'Crypto', component: DashboardCrypto },
    { path: '/dashboard/project', exact: true, name: 'Project', component: DashboardProject },
    { path:'/team/add', exact:true, name:'teamadd',component:TeamAdd},
    {path:'/team',exact:true,name:'teamlist',component:TeamList},
    {path:'/employee_lookup',exact:true,name:'teamlist',component:Engineer_lookup},
    {path:'/employee_lookup/add',exact:true,name:'teamlist',component:Engineer_lookup_add},
    { path:'/employee_lookup/edit/:id', exact:true, name:'employee_lookup',component:Employee_lookup_edit},
    //Job_lookup_add
    {path:'/job_lookup',exact:true,name:'job_lookup',component:Job_lookup},
    {path:'/job_lookup/add',exact:true,name:'job_lookup',component:Job_lookup_add},
    { path:'/job_lookup/edit/:id', exact:true, name:'job_lookup',component:Job_lookup_edit},
    { path: '/time_lookup', exact: true, name: 'Engineer', component: Time_lookup},
    {path:'/bonus_period/add',exact:true,name:'job_lookup',component:Bonus_period_add},
    { path: '/performance', exact: true, name: 'Engineer', component: Performance},
    { path: '/bonus-periods', exact: true, name: 'Engineer', component: Bonus_periods},
    { path: '/work-mix', exact: true, name: 'Engineer', component: Workmix},
    { path: '/sms-groups/add', exact: true, name: 'Engineer', component: Sms_groups},
    { path: '/sms-groups', exact: true, name: 'Sms_groups_list', component: Sms_groups_list},
    { path:'/sms-groups/edit/:id', exact:true, name:'job_lookup',component:Sms_groups_edit},
    
  ];

export default routes;