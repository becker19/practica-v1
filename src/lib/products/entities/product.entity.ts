import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ProductDocument = HydratedDocument<Product>;

@Schema({ collection: 'products', timestamps: true, versionKey: false })
export class Product {
    @Prop()
    codProduct: number;
    @Prop()
    name: string;
    @Prop()
    amount: number;

}

export const ProductSchema = SchemaFactory.createForClass(Product);
