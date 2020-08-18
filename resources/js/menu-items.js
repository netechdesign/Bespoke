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
                    title: 'Engineer',
                    type: 'item',
                    classes: 'nav-item',
                    url: '/siteengineer',
                    icon: 'feather icon-user-plus'
                }
                ]
        }
       
      
    ]
}