# UK-Postcodes Node.js Wrapper

This is a API wrapper for uk-postcodes.com, a free lookup API for UK postcodes

## Installation

`npm install uk-postcodes`

## Getting Started

**Looking up a postcode**

```
UKPostcodes.Postcode("NW1 9HZ").getData(function (error, data) {
	// Result here
});
```

**Lookup nearest postcode for point**

```
UKPostcodes.nearestPostcode(latitude, longitude, function (error, data) {
	// Returns postcode object
})
```

**Looking up within X miles of postcode**

UKPostcodes#nearest("postcode", [radius], callback);

Radius defaults to 10 miles

```
// What are the nearest postcodes within a 12 mile radius of NW1 9HZ?

UKPostcodes.nearest("NW1 9HZ", 12, function (error, postcodes) {
	
})
```

**Looking up postcodes within X miles of point**

UKPostcodes#nearest(longitude, latitude, [radius], callback);

Radius defaults to 10 miles

```
// What are the nearest postcodes within a 12 mile radius of 52.9667,-1.1667?

UKPostcodes.nearest("52.9667", "-1.1667", 12, function (error, postcodes) {
	
})
```

## Todo

- Implement nearest postcodes within vicinity lookups for postcode and latlng
- Await outcome to [issue#11](https://github.com/theodi/uk-postcodes/issues/11) to implement reponse to inappropriate latlng lookups

## License

MIT


API
Get the data you want simply by constructing your URLs as follows:

Return data for a postcode
http://uk-postcodes.com/postcode/[postcode (no space)].['xml', 'csv', 'json'* or 'rdf']
Return data for the nearest postcode to a point
http://uk-postcodes.com/latlng/[latitude],[longitude].['xml', 'csv', 'json'* or 'rdf']
Return data for postcodes within x distance (miles) of a postcode or lat/lng
http://uk-postcodes.com/postcode/nearest?postcode=[postcode]&miles=[distance in miles]&format=[xml|csv|json]
http://uk-postcodes.com/postcode/nearest?lat=[latitude]&lng=[longitude]&miles=[distance in miles]&format=[xml|csv|json]
That's it! Be nice to the server and cache your requests!

* If using JSON, add '?callback=[some function call]' to the url to return JSONP