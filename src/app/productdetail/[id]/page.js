import React from 'react'
import  Product from '@/components/ProductCard'


async function generateStaticParams() {
  const response = await fetch("https://localhost:3000/products");
  const { products } = await response.json();

  return products.map(({ id }) => id);
}

async function generateMetadata({ params: { Id } }) {
  const response = await fetch(`https://localhost:3000/productdetail/${Id}`);
  const product = await response.json();

  return {
    title: product.title,
    description: product.body,
    // openGraph: {
    //   images: [
    //     {
    //       url: post.imageUrl
    //     }
    //   ]
    // }
  };
}
export default function product({params}) {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-lg font-bold'> Product Details
      </h1>
      <p> 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et ligula metus. Pellentesque at lobortis augue. Quisque at interdum eros, quis molestie est. Phasellus condimentum feugiat nunc, id hendrerit magna finibus sed. In hac habitasse platea dictumst. Proin metus libero, accumsan sit amet venenatis et, elementum id neque. Sed eu neque non dui tempus hendrerit. Sed pharetra, lorem at euismod finibus, mi lorem venenatis augue, in efficitur magna mauris id nibh. Cras sit amet metus vel tellus pellentesque finibus. Nullam laoreet et ligula et volutpat. Ut in feugiat augue, quis maximus sapien. Donec condimentum magna vitae mi blandit, elementum fermentum augue consequat. Nulla sodales odio eget sapien tincidunt posuere. In vulputate libero a pretium posuere.

Phasellus ante lectus, feugiat ac interdum ac, sollicitudin eget augue. Aliquam erat volutpat. Ut ac urna ornare, tempor purus sit amet, vulputate nunc. Suspendisse mauris nibh, rhoncus in ligula ut, egestas sodales odio. Sed vitae elementum enim. Donec non tristique dolor. Pellentesque sit amet enim tempor, porta lorem at, tempus nulla. Proin tempus velit sollicitudin, venenatis risus in, convallis quam. Curabitur vitae sodales diam.

Nulla imperdiet erat sed ultricies congue. Duis in tristique sapien, a consequat augue. Aliquam augue mi, maximus ut consequat eget, vulputate ut erat. Vestibulum et maximus nisi. Etiam lorem sapien, facilisis non dapibus quis, bibendum id risus. Nullam ac erat ac lacus euismod pulvinar. Suspendisse ligula nisi, imperdiet nec placerat ut, mollis nec ligula.

Donec sit amet eleifend nulla. Donec ultrices volutpat mi, a euismod velit imperdiet in. Curabitur in mattis velit. Donec porta ligula magna, vestibulum pellentesque eros euismod id. Curabitur et lacus massa. Aliquam erat volutpat. Curabitur condimentum, ipsum ac sollicitudin suscipit, velit elit accumsan sem, id tempor mauris tortor eget nulla. In sed ligula dignissim velit aliquam vehicula. Etiam aliquam molestie nisi nec suscipit. Vivamus viverra justo ut ex molestie, eget ornare ante convallis. Quisque feugiat gravida est, eu rhoncus enim placerat non. Integer id odio vestibulum, ultricies velit ut, dictum dolor. Nunc at mollis urna. Phasellus a ipsum dui.

In porta porttitor libero nec tincidunt. Suspendisse potenti. Mauris malesuada, elit eu sagittis pulvinar, turpis nisl vulputate metus, non placerat eros nibh id ipsum. Duis eget maximus neque, faucibus consequat mi. Aenean tincidunt sapien arcu, et hendrerit ipsum convallis vitae. Ut eget tellus sollicitudin, pulvinar mi nec, vehicula eros. Nullam vestibulum scelerisque nisl, id sollicitudin purus rutrum eget.
        </p></div>
  )
}
