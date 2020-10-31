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
                        
                    ]
                },
                {
                    id: 'Vehicles',
                    title: 'Vehicles',
                    type: 'collapse',
                    icon: 'feather icon-menu',
                    children: [
                        {
                            id: 'Milestravelled',
                            title: 'Miles travelled',
                            type: 'collapse',
                            classes: 'nav-item',
                            children: [
                                   {  
                                    id: 'utilitmilestravelledsday',
                                    title: 'Utilita Day',
                                    type: 'item',
                                    classes: 'nav-item',
                                    url: '/Inprocess'
                                   }
                            ]
                        }
                    ]
                },
                {
                    id: 'settarget',
                    title: 'Set Target',
                    type: 'item',
                    classes: 'nav-item',
                    url: '/settarget',
                    icon: 'feather icon-feather icon-target'
                }
                ]
        }
       
      
    ] 
}