import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoosePaginate from 'mongoose-paginate-v2';
import { Default } from "src/common/entities/default.entity";
export type UserDocument = User & Document;

@Schema({ timestamps: true, collection: 'user' })
export class User extends Default {

    @Prop({ required: true })
    name: string;    

    @Prop({ required: true, unique: true })
    email: string;

}

export const UserSchema = SchemaFactory.createForClass(User);
UserSchema.plugin(mongoosePaginate);
