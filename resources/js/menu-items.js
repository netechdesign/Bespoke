export default {
    items: [
        {
            id: 'app',
            title: 'App',
            type: 'group',
            icon: 'icon-app',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    classes: 'nav-item',
                    url: '/dashboard',
                    icon: 'feather icon-home'
                },
                {
                    id: 'RoleUser',
                    title: 'Role & User',
                    type: 'collapse',
                    icon: 'feather icon-menu',
                    children: [
                        {
                            id: 'Role',
                            title: 'Role',
                            type: 'item',
                            url: '/role',
                           
                        },
                        {
                            id: 'v-fixed',
                            title: 'User',
                            type: 'item',
                            url: '/user',
                           
                        }
                    ]
                },
                {
                    id: 'data_import',
                    title: 'Data Import',
                    type: 'item',
                    classes: 'nav-item',
                    url: '/dataimport',
                    icon: 'feather icon-clipboard'
                }, 
                {  
                    id: 'list',
                    title: 'Uploaded Data',
                    type: 'item',
                    classes: 'nav-item',
                    url: '/list',
                    icon: 'feather icon-layers'
                },{  
                    id: 'SiteEngineer',
                    title: 'Area Manager',
                    type: 'item',
                    classes: 'nav-item',
                    url: '/siteengineer',
                    icon: 'feather icon-users'
                },
                {  
                    id: 'Engineer',
                    title: 'Engineer',
                    type: 'item',
                    classes: 'nav-item',
                    url: '/Engineer',
                    icon: 'feather icon-user'
                },
                
                {  
                    id: 'Report',
                    title: 'Report',
                    type: 'item',
                    classes: 'nav-item',
                    url: '/report',
                    icon: 'feather icon-file-text'
                },
                {
                    id: 'Installs',
                    title: 'Installs',
                    type: 'collapse',
                    icon: 'feather icon-menu',
                    children: [
                           {  
                            id: 'utilitainstallsday',
                            title: 'Utilita Day',
                            type: 'item',
                            classes: 'nav-item',
                            url: '/utilitainstalls/day/Completed'
                           },
                           {  
                            id: 'utilitainstallsweektodate',
                            title: 'Utilita Week to Date',
                            type: 'item',
                            classes: 'nav-item',
                            url: '/utilitainstalls/weektodate/Completed'
                           },
                           {  
                            id: 'utilitainstallsmonthtodate',
                            title: 'Utilita Month to Date',
                            type: 'item',
                            classes: 'nav-item',
                            url: '/utilitainstalls/monthtodate/Completed'
                           },
                           {  
                            id: 'utilitainstallsmonthprior',
                            title: 'Utilita Month Prior',
                            type: 'item',
                            classes: 'nav-item',
                            url: '/utilitainstalls/monthprior/Completed'
                           },
                           {  
                            id: 'utilitainstallsyeartodate',
                            title: 'Utilita Year to date',
                            type: 'item',
                            classes: 'nav-item',
                            url: '/utilitainstalls/yeartodate/Completed'
                           },
                           {  
                            id: 'utilitainstallsyearprior',
                            title: 'Utilita Year Prior',
                            type: 'item',
                            classes: 'nav-item',
                            url: '/utilitainstalls/yearprior/Completed'
                           }
                           //mds
                           , {  
                            id: 'mdsinstallsday',
                            title: 'Mds Day',
                            type: 'item',
                            classes: 'nav-item',
                            url: '/mdsinstalls/day/Completed'
                           },
                           {  
                            id: 'mdsinstallsweektodate',
                            title: 'Mds Week to Date',
                            type: 'item',
                            classes: 'nav-item',
                            url: '/mdsinstalls/weektodate/Completed'
                           },
                           {  
                            id: 'mdsinstallsmonthtodate',
                            title: 'Mds Month to Date',
                            type: 'item',
                            classes: 'nav-item',
                            url: '/mdsinstalls/monthtodate/Completed'
                           },
                           {  
                            id: 'mdsinstallsmonthprior',
                            title: 'Mds Month Prior',
                            type: 'item',
                            classes: 'nav-item',
                            url: '/mdsinstalls/monthprior/Completed'
                           },
                           {  
                            id: 'mdsinstallsyeartodate',
                            title: 'Mds Year to date',
                            type: 'item',
                            classes: 'nav-item',
                            url: '/mdsinstalls/yeartodate/Completed'
                           },
                           {  
                            id: 'mdsinstallsyearprior',
                            title: 'Mds Year Prior',
                            type: 'item',
                            classes: 'nav-item',
                            url: '/mdsinstalls/yearprior/Completed'
                           }
                           


                        
                    ]
                },
                {
                    id: 'Aborts',
                    title: 'Aborts',
                    type: 'collapse',
                    icon: 'feather icon-menu',
                    children: [
                           {  
                            id: 'utilitainstallsday',
                            title: 'Utilita Day',
                            type: 'item',
                            classes: 'nav-item',
                            url: '/utilitainstalls/day/Aborts'
                           },
                           {  
                            id: 'abortsutilitainstallsweektodate',
                            title: 'Utilita Week to Date',
                            type: 'item',
                            classes: 'nav-item',
                            url: '/utilitainstalls/weektodate/Aborts'
                           },
                           {  
                            id: 'abortsutilitainstallsmonthtodate',
                            title: 'Utilita Month to Date',
                            type: 'item',
                            classes: 'nav-item',
                            url: '/utilitainstalls/monthtodate/Aborts'
                           },
                           {  
                            id: 'abortsutilitainstallsmonthprior',
                            title: 'Utilita Month Prior',
                            type: 'item',
                            classes: 'nav-item',
                            url: '/utilitainstalls/monthprior/Aborts'
                           },
                           {  
                            id: 'abortsutilitainstallsyeartodate',
                            title: 'Utilita Year to date',
                            type: 'item',
                            classes: 'nav-item',
                            url: '/utilitainstalls/yeartodate/Aborts'
                           },
                           {  
                            id: 'abortsutilitainstallsyearprior',
                            title: 'Utilita Year Prior',
                            type: 'item',
                            classes: 'nav-item',
                            url: '/utilitainstalls/yearprior/Aborts'
                           }
                           //mds
                           , {  
                            id: 'mdsinstallsday',
                            title: 'Mds Day',
                            type: 'item',
                            classes: 'nav-item',
                            url: '/mdsinstalls/day/Aborts'
                           },
                           {  
                            id: 'abortsmdsinstallsweektodate',
                            title: 'Mds Week to Date',
                            type: 'item',
                            classes: 'nav-item',
                            url: '/mdsinstalls/weektodate/Aborts'
                           },
                           {  
                            id: 'abortsmdsinstallsmonthtodate',
                            title: 'Mds Month to Date',
                            type: 'item',
                            classes: 'nav-item',
                            url: '/mdsinstalls/monthtodate/Aborts'
                           },
                           {  
                            id: 'abortsmdsinstallsmonthprior',
                            title: 'Mds Month Prior',
                            type: 'item',
                            classes: 'nav-item',
                            url: '/mdsinstalls/monthprior/Aborts'
                           },
                           {  
                            id: 'abortsmdsinstallsyeartodate',
                            title: 'Mds Year to date',
                            type: 'item',
                            classes: 'nav-item',
                            url: '/mdsinstalls/yeartodate/Aborts'
                           },
                           {  
                            id: 'abortsmdsinstallsyearprior',
                            title: 'Mds Year Prior',
                            type: 'item',
                            classes: 'nav-item',
                            url: '/mdsinstalls/yearprior/Aborts'
                           }

                    ]
                },
                {
                    id: 'FuelMix',
                    title: 'Fuel Mix',
                    type: 'collapse',
                    icon: 'feather icon-menu',
                    children: [
                           {  
                            id: 'FuelMixweektodate',
                            title: 'Utilita Week',
                            type: 'item',
                            classes: 'nav-item',
                            url: '/utilitafuelmix/weektodate'
                           },
                           {  
                            id: 'utilitafuelmixmonthtodate',
                            title: 'Utilita Month',
                            type: 'item',
                            classes: 'nav-item',
                            url: '/utilitafuelmix/monthtodate'
                           },
                           {  
                            id: 'utilitafuelmixyeartodate',
                            title: 'Utilita Year',
                            type: 'item',
                            classes: 'nav-item',
                            url: '/utilitafuelmix/yeartodate'
                           },
                           //mds
                           {  
                            id: 'mdsFuelMixweektodate',
                            title: 'Mds Utilita Week',
                            type: 'item',
                            classes: 'nav-item',
                            url: '/mdsfuelmix/weektodate'
                           },
                           {  
                            id: 'mdsfuelmixmonthtodate',
                            title: 'Mds Month',
                            type: 'item',
                            classes: 'nav-item',
                            url: '/mdsfuelmix/monthtodate'
                           },
                           {  
                            id: 'mdsfuelmixyeartodate',
                            title: 'Mds Year',
                            type: 'item',
                            classes: 'nav-item',
                            url: '/mdsfuelmix/yeartodate'
                           }
                        
                    ]
                },
                {
                    id: 'ooh',
                    title: 'ooh',
                    type: 'collapse',
                    icon: 'feather icon-menu',
                    children: [
                           {  
                            id: 'oohtodate',
                            title: 'Utilita Week',
                            type: 'item',
                            classes: 'nav-item',
                            url: '/utilitaooh/weektodate'
                           },
                           {  
                            id: 'oohmonthtodate',
                            title: 'Utilita Month',
                            type: 'item',
                            classes: 'nav-item',
                            url: '/utilitaooh/monthtodate'
                           },
                           {  
                            id: 'oohyeartodate',
                            title: 'Utilita Year',
                            type: 'item',
                            classes: 'nav-item',
                            url: '/utilitaooh/yeartodate'
                           }
                        //mds
                        ,{  
                            id: 'mdsoohtodate',
                            title: 'Mds Week',
                            type: 'item',
                            classes: 'nav-item',
                            url: '/mdsooh/weektodate'
                           },
                           {  
                            id: 'mdsoohmonthtodate',
                            title: 'Mds Month',
                            type: 'item',
                            classes: 'nav-item',
                            url: '/mdsooh/monthtodate'
                           },
                           {  
                            id: 'mdsoohyeartodate',
                            title: 'Mds Year',
                            type: 'item',
                            classes: 'nav-item',
                            url: '/mdsooh/yeartodate'
                           }
                    ]
                },
                //sms
                {
                    id: 'sms',
                    title: 'SMS',
                    type: 'collapse',
                    icon: 'feather icon-menu',
                    children: [
                           {  
                            id: 'team',
                            title: 'Team',
                            type: 'item',
                            classes: 'nav-item',
                            url: '/team'
                           },{  
                            id: 'sms_groups',
                            title: 'Team Groups',
                            type: 'item',
                            classes: 'nav-item',
                            url: '/sms-groups'
                           },
                           {  
                            id: 'engineer_lookup',
                            title: 'Employee Lookup',
                            type: 'item',
                            classes: 'nav-item',
                            url: '/employee_lookup'
                           },
                           {  
                            id: 'job_lookup',
                            title: 'Job Lookup',
                            type: 'item',
                            classes: 'nav-item',
                            url: '/job_lookup'
                           },
                           {  
                            id: 'time_lookup',
                            title: 'Time Lookup',
                            type: 'item',
                            classes: 'nav-item',
                            url: '/time_lookup'
                           },
                           {  
                            id: 'bonus_period',
                            title: 'Bonus Period',
                            type: 'item',
                            classes: 'nav-item',
                            url: '/bonus_period/add'
                           },
                           {  
                            id: 'performance',
                            title: 'Performance',
                            type: 'item',
                            classes: 'nav-item',
                            url: '/performance'
                           },
                           {  
                            id: 'bonus_periods',
                            title: 'Bonus Periods',
                            type: 'item',
                            classes: 'nav-item',
                            url: '/bonus-periods'
                           },
                           {  
                            id: 'work-mix',
                            title: 'Work Mix',
                            type: 'item',
                            classes: 'nav-item',
                            url: '/work-mix'
                           },
                           
                           
                    ]
                },
                {
                    id: 'settarget',
                    title: 'Set Target',
                    type: 'item',
                    classes: 'nav-item',
                    url: '/settarget',
                    icon: 'feather icon-feather icon-target'
                },
                {
                    id: 'vehicle',
                    title: 'Vehicle',
                    type: 'item',
                    classes: 'nav-item',
                    url: '/vehicle',
                    icon: 'feather icon-feather icon-file-text'
                }
                ]
        }
       
      
    ] 
}