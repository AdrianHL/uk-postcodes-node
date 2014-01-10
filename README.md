# UK-Postcodes Node.js Wrapper

This is a API wrapper for uk-postcodes.com, a free lookup API for UK postcodes

## Installation

`npm install uk-postcodes`

## Getting Started

**Looking up a postcode**

```
UKPostcodes.getPostcode(postcode, function (error, data) {
	console.log(data);
	// {
	//   "postcode": "SW1A 2AA",
	//   "geo": {
	//     "lat": 51.503539898875815,
	//     "lng": -0.12768084037293415,
	//     "easting": 530047,
	//     "northing": 179951,
	//     "geohash": "http://geohash.org/gcpuvpgjbgdq"
	//   },
	//   "administrative": {
	//     "council": {
	//       "title": "City of Westminster",
	//       "uri": "http://statistics.data.gov.uk/id/statistical-geography/E09000033",
	//       "code": "E09000033"
	//     },
	//     "ward": {
	//       "title": "St. James's",
	//       "uri": "http://statistics.data.gov.uk/id/statistical-geography/E05000644",
	//       "code": "E05000644"
	//     },
	//     "constituency": {
	//       "title": "Cities of London and Westminster",
	//       "uri": "http://statistics.data.gov.uk/id/statistical-geography/E14000639",
	//       "code": "E14000639"
	//     }
	//   }
	// }
});
```

**Lookup nearest postcode for point**

- latlng is a string indicating a geolocation within the UK, e.g. "52.22331,-0.215323"

```
UKPostcodes.nearestPostcode(latlng, function (error, data) {
	// Returns postcode object as above
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

## To be implemented

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
