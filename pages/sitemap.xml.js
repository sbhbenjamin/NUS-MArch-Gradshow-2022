import { projects } from '../data/projects';
import { supervisors } from '../data/supervisors';

//pages/sitemap.xml.js
const PROJECTS_BASE_URL = 'https://www.nusmarchgradshow.com/2022/projects';
const THEMES_BASE_URL = 'https://www.nusmarchgradshow.com/2022/themes';

function generateSiteMap(projects, supervisors) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://www.nusmarchgradshow.com/2022</loc>
     </url>
     <url>
       <loc>https://www.nusmarchgradshow.com/2022/index</loc>
     </url>
     <url>
       <loc>https://www.nusmarchgradshow.com/2022/about</loc>
     </url>
     <url>
       <loc>https://www.nusmarchgradshow.com/2022/book</loc>
     </url>
     ${projects
       .map(({ id }) => {
         return `
       <url>
           <loc>${`${PROJECTS_BASE_URL}/${id}`}</loc>
       </url>
     `;
       })
       .join('')}
     ${supervisors
       .map(({ sid }) => {
         return `
       <url>
           <loc>${`${THEMES_BASE_URL}/${sid}`}</loc>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(projects, supervisors);
  console.log(sitemap);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
