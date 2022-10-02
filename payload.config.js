import { buildConfig } from 'payload/config';
import Catagory from './collections/Catagory';
import Users from './collections/Users';
import Site from './globals/Site';
import Media from './collections/Media';
import Logoupload from './collections/Logoupload';
import Posts from './collections/Posts';
import AdminLogo from './collections/UI/AdminLogo'
import Icon from './collections/UI/Icon';
export default buildConfig({
  serverURL: process.env.SITE_URI,

  admin: {
    user: Users.slug,
    components:{
      graphics: {
        Logo: AdminLogo,
        Icon:Icon,
      },
    }
  },
  collections: [
    Posts,
    Logoupload,
    Users,
    Media,
    Catagory,
    

  ],
  
  globals:[
    Site
  ],
  
  

});
