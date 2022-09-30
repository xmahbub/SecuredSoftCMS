import { buildConfig } from 'payload/config';
import Catagory from './collections/Catagory';
import FormSubmissions from './collections/FormSubmissions';
import Posts from './collections/Posts';
import Users from './collections/Users';
import Site from './globals/Site';
import Media from './collections/Media';
import Logoupload from './collections/Logoupload';
export default buildConfig({
  serverURL: process.env.SITE_URI,

  admin: {
    user: Users.slug,
  },
  collections: [
    Logoupload,
    Users,
    Media,
    Catagory,
    Posts,
    FormSubmissions

  ],
  
  globals:[
    Site
  ],
  
  

});
