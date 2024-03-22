import FooterC from "@/components/footer/Footer";
import NavbarC from "@/components/navbar/Navbar";

export const metadata ={
  title:"About"
  
}

const Page = () => {
    return (
      <div>
        <div>
          <NavbarC/>
        </div>
     
        <div className="flex flex-col justify-center items-center py-4">
          
        <h1 className="text-4xl">Indian Kitchen Market</h1>
        <h2 className="text-3xl py-6">The Story of Having over Million Satisfied Customers</h2>
        <p className="text-gray-800 w-[90vw]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam enim sapien, semper nec mi in, rhoncus fermentum elit. Sed ullamcorper ipsum non ipsum dignissim, ut dictum massa vestibulum. Mauris nec scelerisque velit. Nam erat odio, venenatis et scelerisque eget, ornare vel purus. Sed vulputate vitae orci a dictum. Curabitur in elit feugiat, feugiat turpis at, hendrerit metus. Sed condimentum fermentum pulvinar. Vestibulum quis sodales nibh, eget blandit sem.

Aliquam scelerisque risus enim, vel iaculis risus vestibulum in. Nam bibendum fringilla scelerisque. Fusce sagittis elit ante, nec finibus ligula maximus sit amet. Proin eros dui, ullamcorper sit amet neque eu, sodales mattis magna. Sed felis enim, tincidunt a neque quis, efficitur rhoncus tellus. Maecenas finibus et ante sit amet laoreet. Proin rhoncus neque nec augue faucibus rhoncus.

Pellentesque felis velit, egestas et metus id, luctus imperdiet augue. Vivamus at lacus vitae augue efficitur auctor quis quis justo. Praesent sed libero at odio scelerisque ullamcorper id eget massa. Maecenas sit amet nibh quis odio iaculis consectetur volutpat id neque. Vestibulum mi dui, ultricies imperdiet finibus in, sagittis sed nisi. Etiam id massa fermentum quam porta iaculis et a lacus. Pellentesque gravida gravida vehicula. Nam vulputate nec sem at vehicula.

Proin porttitor nulla eget metus tempus, sed aliquet tellus pellentesque. Mauris vitae nunc non justo tempor facilisis. Aenean a dui quis metus cursus auctor vitae nec odio. Donec aliquet venenatis mauris, a posuere tortor blandit at. Fusce a turpis et lectus interdum gravida non ut nisi. Cras non nibh nec orci rhoncus lacinia. Sed suscipit dictum lacus, vitae hendrerit dolor imperdiet ut. Etiam eu posuere dolor, ac ultrices tortor. Fusce tristique cursus diam.

Etiam varius suscipit orci, id bibendum metus ultricies quis. Vestibulum lectus urna, accumsan eu porta ac, faucibus at ipsum. Sed egestas dignissim magna, quis tempus diam imperdiet pulvinar. Quisque vitae elementum tellus, ut scelerisque nisi. Vestibulum in pellentesque leo, dapibus mattis ipsum. In viverra et tortor pharetra dapibus. Sed pellentesque tortor dapibus, mollis quam id, dapibus ligula. Proin nec tincidunt ex, sed hendrerit elit. Donec a volutpat arcu, nec suscipit ipsum. Mauris ac augue leo. Quisque nec arcu neque. Donec volutpat sapien id commodo mollis. Cras eget accumsan lorem.</p>
        <div className="md:w-[98vw]">
          <FooterC/>
        </div>
        </div>
        </div>
      );
}
 
export default Page;
