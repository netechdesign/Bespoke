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
                }
                ]
        }
       
      
    ]
}