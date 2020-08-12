export default {
    items: [
        {
            id: 'app',
            title: 'App',
            type: 'group',
            icon: 'icon-app',
            children: [
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
                    title: 'List',
                    type: 'item',
                    classes: 'nav-item',
                    url: '/list',
                    icon: 'feather icon-layers'
                },{  
                    id: 'SiteEngineer',
                    title: 'Site Engineer',
                    type: 'item',
                    classes: 'nav-item',
                    url: '/siteengineer',
                    icon: 'feather icon-layers'
                }
                ]
        }
        /*
        ,
        {
            id: 'navigation',
            title: 'Navigation',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'collapse',
                    icon: 'feather icon-home',
                    children: [
                        {
                            id: 'default',
                            title: 'Default',
                            type: 'item',
                            url: '/dashboard/default'
                        },
                        {
                            id: 'e-commerce',
                            title: 'Ecommerce',
                            type: 'item',
                            url: '/dashboard/e-commerce'
                        },
                        {
                            id: 'crm',
                            title: 'CRM',
                            type: 'item',
                            url: '/dashboard/crm'
                        },
                        {
                            id: 'analytics',
                            title: 'Analytics',
                            type: 'item',
                            url: '/dashboard/analytics'
                        },
                        {
                            id: 'crypto',
                            title: 'Crypto',
                            type: 'item',
                            url: '/dashboard/crypto',
                            badge: {
                                title: 'NEW',
                                type: 'label-danger'
                            }
                        },
                        {
                            id: 'project',
                            title: 'Project',
                            type: 'item',
                            url: '/dashboard/project'
                        }
                    ]
                },
                {
                    id: 'widget',
                    title: 'Widget',
                    type: 'collapse',
                    icon: 'feather icon-layers',
                    badge: {
                        title: '100+',
                        type: 'label-info'
                    },
                    children: [
                        {
                            id: 'wdgt-statistic',
                            title: 'Statistic',
                            type: 'item',
                            url: '/widget/wdgt-statistic'
                        },
                        {
                            id: 'wdgt-data',
                            title: 'Data',
                            type: 'item',
                            url: '/widget/wdgt-data'
                        },
                        {
                            id: 'wdgt-table',
                            title: 'Table',
                            type: 'item',
                            url: '/widget/wdgt-table'
                        },
                        {
                            id: 'wdgt-chart',
                            title: 'Chart',
                            type: 'item',
                            url: '/widget/wdgt-chart'
                        }
                    ]
                }
            ]
        }
      */
    ]
}