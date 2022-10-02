
const Products = {
    slug: "Products",
    fields: [
        {
            name: "name",
            type: "text",
            required: true,
            label: "Product Name",
            
        },
        {
            name: "price",
            type: "array",
            required: true,
            maxRows: 1,
            fields:[
                {
                   name: 'regular',
                   type: 'number',
                   required: true,
                },
                {
                  name: 'sale',
                  type: 'number',
                  required: true,
                },
                {
                    name: 'unit',
                    type: 'text',
                }
            ]
            
        },
        {
            name: 'categories',
            label: 'Categories',
            type: 'relationship',
            relationTo: 'catagory',
            hasMany: true,
            admin: {
              position: 'sidebar',
            },
        },
        {
            name: 'images', 
            type: 'array', 
            label: 'Product Images',
            minRows: 2,
            maxRows: 10,
            labels: {
              singular: 'product image',
              plural: 'Slides',
            },
            fields: [ 
              {
                name: 'image',
                type: 'upload',
                relationTo: 'media',
                required: true,
              },
              {
                name: 'caption',
                type: 'text',
              }
            ]
        },
        {
            name: 'description',
            type: 'richText',
            label: 'Product Description',


        },
        {
          name: 'hide', // required
          type: 'checkbox', // required
          label: 'Hide the product',
          defaultValue: false,
          admin: {
            position: 'sidebar',
          },
        },
        {
          name: 'available', // required
          type: 'number', // required
          label: 'Available Quantity',
          required: true,
          admin: {
            position: 'sidebar',
          },
        }

       
    ],
    admin: {
        useAsTitle: 'name',
    },


}

export default Products;