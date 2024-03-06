import { NextResponse } from "next/server";
import Product from "@/models/productModel";
import { connect } from "@/dbConfig/dbConfig";
import ApiFeatures from "@/helper/apifeature"
import { parse } from "url";
connect();

export async function GET(req) {
    try {
        const { query } = parse(req.url, true);

        // console.log(req.query);
        // const {reqbody} = req.json();
        // console.log(reqbody)
        const products = await Product.find();
        // console.log(query);
        const name ={ name: query.name};
        console.log(name)
        const apiFeature = new ApiFeatures(products, name).search().filter();
        
        // const filteredProducts = await apiFeature.query.exec();
        return NextResponse.json({
            success: true,
            products: apiFeature
        });

    } catch (error) {
        return NextResponse.json({ error: error.stack }, { status: 500 })
    }
}
