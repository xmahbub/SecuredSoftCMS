const Logoupload = {
    slug: 'logo',
    access: { 
        read: () => true,
    },
    upload: {
      staticURL: '/public/logo',
      staticDir: 'media',
      imageSizes: [
        
        {
          name: 'logo',
          width: 500,
          height: null,
          position: 'centre',
        },
      ],
      adminThumbnail: 'thumbnail',
      mimeTypes: ['image/*'],
    },
};
  
  
export default Logoupload