const Listing = require("../models/listing.js");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const MAPTILER_API_KEY = process.env.MAP_API_KEY;

module.exports.index = async (req, res) =>{
    const allListings = await Listing.find({});
    res.render("./listings/index.ejs", {allListings});
};

module.exports.renderNewForm = async (req, res) =>{
    res.render("listings/new.ejs");
};

module.exports.showListings = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate: { path: "author" }
        })
        .populate("owner");
    if (!listing) {
        req.flash("error", "Listing does not exist");
        return res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing, coordinates: listing.coordinates || [0, 0] });
};


module.exports.createListing = async (req, res) => {
    let url = req.file.path;
    let filename = req.file.filename;

    const { location } = req.body.listing;  // Assuming the user provides a location field

    try {
        // Geocoding to get coordinates from the location
        const geocodeUrl = `https://api.maptiler.com/geocoding/${encodeURIComponent(location)}.json?key=${MAPTILER_API_KEY}`;
        const response = await fetch(geocodeUrl);
        const data = await response.json();

        let coordinates = [0, 0];   // Default value in case no coordinates are found
        if (data.features && data.features.length > 0) {
            coordinates = data.features[0].geometry.coordinates;    // [lng, lat]
        }

        // Create the new listing
        const newListing = new Listing(req.body.listing);
        newListing.owner = req.user._id;
        newListing.image = { url, filename };
        newListing.location = location;
        newListing.coordinates = coordinates; // Save the coordinates for map display

        await newListing.save();

        req.flash("success", "Successfully made a new listing with location!");
        res.redirect("/listings");
    } catch (err) {
        console.error("Error during geocoding or saving listing:", err);
        req.flash("error", "Failed to create listing. Please try again.");
        res.redirect("/listings");
    }
};

module.exports.renderEditForm = async (req, res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error", "Listing does not exist");
        res.redirect("/listings");
    }
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/h_200,w_200");
    res.render("./listings/edit.ejs", {listing, originalImageUrl});
};

module.exports.updateListing = async (req, res) =>{
    let {id} = req.params;
    let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing});
    if(typeof req.file !== 'undefined'){
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image  = {url, filename};
        await listing.save();
    };
    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing =  async (req, res) =>{
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
};
