
const Site = {
    slug:"Site",
    access: { 
        read: () => true,
    },

    fields:[
        {
            name: 'name',
            label: 'Site Name',
            type: 'text',
            
        },
        {
            name: 'copyright',
            label: 'Site Copyright',
            type: 'text',
            
        },
        {
            name: 'contact',
            label: 'Contact Number',
            type: 'text',
        },
        {
          name: 'logo',
          label: 'Logo Upload',
          type: 'upload',
          relationTo: 'logo',
          required: false,
          admin: {
            description: 'Maximum upload file size: 12MB. Recommended file size for images is <500KB.',
          },
        },
        
    ],
    
    
  
    
}

export default Site;