const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");
const { ref } = require("joi");

const listingSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    price:Number,
    location:String,
    image:{
        type:String,
        default:"https://images.unsplash.com/photos/man-in-orange-coat-overlooking-arid-mountainous-landscape-EPuHuWQEXJU",
        set : (v) => v === "" 
        ? "https://images.unsplash.com/photos/man-in-orange-coat-overlooking-arid-mountainous-landscape-EPuHuWQEXJU":v,
    },
    price:Number,
    location: String,
    country:String,
    reviews:[
        {
            type: Schema.Types.ObjectId,
            ref:"Review",
        },
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
});

listingSchema.post("findOneAndDelete", async(listing) => {
    if(listing){
        await Review.deleteMany({_id: { $in: listing.reviews } });
    }
    
});


const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;