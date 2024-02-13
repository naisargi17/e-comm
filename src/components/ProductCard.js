'use client'
const ProductCard = () => {
    return (
        <div className="w-1/4 ml-5 mr-5 my-10 border-2 border-black-200 hover:cursor-pointer hover:scale-105">
        <img className='w-96' src='https://www.mydesignation.com/wp-content/uploads/2020/01/royal-blue-plain-tshirt-mydesignation-unisex-image.jpg'></img>
        <div className="flex flex-col justify-center items-center">
            <h1>Brand Name</h1>
            <p>Product Name</p>
            <p>Qunatity</p>
            
        </div>
        
        </div>
      );
}
 
export default ProductCard;
