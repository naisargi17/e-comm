// <!-- <xml version="1.0" encoding="UTF-8">
//    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//      <url>
//        <loc>http://Indiankitchenmart/sitemap</loc>
//        <lastmod>2021-06-01</lastmod>
//      </url>
//    </urlset>
//    </xml>

//import {getAllProducts} from "@/lib/products"   all product link
export default async function sitemap(){
  const metadata = await getSiteMetadata();
//  const {products :allProducts} = await getAllProducts();

  // const products = allProducts.map((product)=>{
  //   return {
  //     url:`${url}$product.url`,
  //     lastModified:product.modified
  //   }
  // })
  return[
    {
      url:"http://next-wonfjdbvjcnsdks.dev",
      lastModified: newDate()
    }
  ]
}