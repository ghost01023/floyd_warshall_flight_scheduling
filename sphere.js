const POINTS = [
    { "name": "San Francisco", "lat": 37.7749, "lng": -122.4194, "size": 0.05, "color": "red" },
    { "name": "Los Angeles", "lat": 34.0522, "lng": -118.2437, "size": 0.05, "color": "blue" },
    { "name": "New York", "lat": 40.7128, "lng": -74.0060, "size": 0.05, "color": "green" },
    { "name": "London", "lat": 51.5074, "lng": -0.1278, "size": 0.05, "color": "yellow" },
    { "name": "Tokyo", "lat": 35.6895, "lng": 139.6917, "size": 0.05, "color": "purple" },
    { "name": "Paris", "lat": 48.8566, "lng": 2.3522, "size": 0.05, "color": "pink" },
    { "name": "Berlin", "lat": 52.52, "lng": 13.405, "size": 0.05, "color": "orange" },
    { "name": "Sydney", "lat": -33.8688, "lng": 151.2093, "size": 0.05, "color": "cyan" },
    { "name": "Moscow", "lat": 55.7558, "lng": 37.6173, "size": 0.05, "color": "brown" },
    { "name": "Rio de Janeiro", "lat": -22.9068, "lng": -43.1729, "size": 0.05, "color": "magenta" },
    { "name": "Rome", "lat": 41.9028, "lng": 12.4964, "size": 0.05, "color": "gold" },
    { "name": "Beijing", "lat": 39.9042, "lng": 116.4074, "size": 0.05, "color": "silver" },
    { "name": "Cairo", "lat": 30.0444, "lng": 31.2357, "size": 0.05, "color": "lime" },
    { "name": "Mumbai", "lat": 19.076, "lng": 72.8777, "size": 0.05, "color": "olive" },
    { "name": "Buenos Aires", "lat": -34.6037, "lng": -58.3816, "size": 0.05, "color": "teal" },
    { "name": "Mexico City", "lat": 19.4326, "lng": -99.1332, "size": 0.05, "color": "navy" },
    { "name": "Seoul", "lat": 37.5665, "lng": 126.978, "size": 0.05, "color": "aqua" },
    { "name": "Jakarta", "lat": -6.2088, "lng": 106.8456, "size": 0.05, "color": "maroon" },
    { "name": "Bangkok", "lat": 13.7563, "lng": 100.5018, "size": 0.05, "color": "coral" },
    { "name": "Istanbul", "lat": 41.0082, "lng": 28.9784, "size": 0.05, "color": "azure" },
    { "name": "Dubai", "lat": 25.2048, "lng": 55.2708, "size": 0.05, "color": "lavender" },
    { "name": "Toronto", "lat": 43.65107, "lng": -79.347015, "size": 0.05, "color": "plum" },
    { "name": "Chicago", "lat": 41.8781, "lng": -87.6298, "size": 0.05, "color": "orchid" },
    { "name": "Singapore", "lat": 1.3521, "lng": 103.8198, "size": 0.05, "color": "crimson" },
    { "name": "Hong Kong", "lat": 22.3193, "lng": 114.1694, "size": 0.05, "color": "chartreuse" },
    { "name": "Madrid", "lat": 40.4168, "lng": -3.7038, "size": 0.05, "color": "wheat" },
    { "name": "Lisbon", "lat": 38.7223, "lng": -9.1393, "size": 0.05, "color": "chocolate" },
    { "name": "Athens", "lat": 37.9838, "lng": 23.7275, "size": 0.05, "color": "khaki" },
    { "name": "Vienna", "lat": 48.2082, "lng": 16.3738, "size": 0.05, "color": "peru" },
    { "name": "Helsinki", "lat": 60.1695, "lng": 24.9354, "size": 0.05, "color": "sienna" },
    { "name": "Oslo", "lat": 59.9139, "lng": 10.7522, "size": 0.05, "color": "orchid" },
    { "name": "Stockholm", "lat": 59.3293, "lng": 18.0686, "size": 0.05, "color": "slateblue" },
    { "name": "Reykjavik", "lat": 64.1355, "lng": -21.8954, "size": 0.05, "color": "hotpink" },
    { "name": "Dublin", "lat": 53.3498, "lng": -6.2603, "size": 0.05, "color": "turquoise" },
    { "name": "Warsaw", "lat": 52.2297, "lng": 21.0122, "size": 0.05, "color": "violet" },
    { "name": "Prague", "lat": 50.0755, "lng": 14.4378, "size": 0.05, "color": "salmon" },
    { "name": "Budapest", "lat": 47.4979, "lng": 19.0402, "size": 0.05, "color": "gold" },
    { "name": "Brussels", "lat": 50.8503, "lng": 4.3517, "size": 0.05, "color": "rosybrown" },
    { "name": "Amsterdam", "lat": 52.3676, "lng": 4.9041, "size": 0.05, "color": "yellowgreen" },
    { "name": "Copenhagen", "lat": 55.6761, "lng": 12.5683, "size": 0.05, "color": "mediumorchid" },
    { "name": "Zurich", "lat": 47.3769, "lng": 8.5417, "size": 0.05, "color": "midnightblue" },
    { "name": "Johannesburg", "lat": -26.2041, "lng": 28.0473, "size": 0.05, "color": "saddlebrown" },
    { "name": "Cape Town", "lat": -33.9249, "lng": 18.4241, "size": 0.05, "color": "seagreen" },
    { "name": "Nairobi", "lat": -1.286389, "lng": 36.817223, "size": 0.05, "color": "goldenrod" },
    { "name": "Lagos", "lat": 6.5244, "lng": 3.3792, "size": 0.05, "color": "indigo" },
    { "name": "Kampala", "lat": 0.347596, "lng": 32.58252, "size": 0.05, "color": "fuchsia" },
    { "name": "Algiers", "lat": 36.7538, "lng": 3.0588, "size": 0.05, "color": "coral" },
    { "name": "Casablanca", "lat": 33.5731, "lng": -7.5898, "size": 0.05, "color": "tan" },
    { "name": "Doha", "lat": 25.276987, "lng": 51.520008, "size": 0.05, "color": "lightcoral" },
    { "name": "Riyadh", "lat": 24.7136, "lng": 46.6753, "size": 0.05, "color": "deepskyblue" },
    { "name": "Kuwait City", "lat": 29.3759, "lng": 47.9774, "size": 0.05, "color": "gold" },
    { "name": "Abu Dhabi", "lat": 24.4539, "lng": 54.3773, "size": 0.05, "color": "mediumvioletred" },
    { "name": "Manila", "lat": 14.5995, "lng": 120.9842, "size": 0.05, "color": "firebrick" },
    { "name": "Hanoi", "lat": 21.0285, "lng": 105.8542, "size": 0.05, "color": "yellowgreen" },
    { "name": "Ho Chi Minh City", "lat": 10.8231, "lng": 106.6297, "size": 0.05, "color": "mediumseagreen" },
    { "name": "Taipei", "lat": 25.033, "lng": 121.5654, "size": 0.05, "color": "thistle" },
    { "name": "Kuala Lumpur", "lat": 3.139, "lng": 101.6869, "size": 0.05, "color": "limegreen" },
    { "name": "Dhaka", "lat": 23.8103, "lng": 90.4125, "size": 0.05, "color": "palevioletred" },
    { "name": "Karachi", "lat": 24.8607, "lng": 67.0011, "size": 0.05, "color": "mediumturquoise" },
    { "name": "Lahore", "lat": 31.5497, "lng": 74.3436, "size": 0.05, "color": "powderblue" },
    { "name": "Delhi", "lat": 28.6139, "lng": 77.209, "size": 0.05, "color": "crimson" },
    { "name": "Chennai", "lat": 13.0827, "lng": 80.2707, "size": 0.05, "color": "lightgreen" },
    { "name": "Bangalore", "lat": 12.9716, "lng": 77.5946, "size": 0.05, "color": "peachpuff" },
    { "name": "Hyderabad", "lat": 17.385, "lng": 78.4867, "size": 0.05, "color": "mistyrose" },
    { "name": "Colombo", "lat": 6.9271, "lng": 79.8612, "size": 0.05, "color": "ivory" },
    { "name": "Kathmandu", "lat": 27.7172, "lng": 85.324, "size": 0.05, "color": "beige" },
    { "name": "Thimphu", "lat": 27.4712, "lng": 89.6339, "size": 0.05, "color": "blanchedalmond" },
    { "name": "Male", "lat": 4.1755, "lng": 73.5093, "size": 0.05, "color": "cornsilk" },
    { "name": "Islamabad", "lat": 33.6844, "lng": 73.0479, "size": 0.05, "color": "burlywood" },
    { "name": "Tashkent", "lat": 41.2995, "lng": 69.2401, "size": 0.05, "color": "chartreuse" },
    { "name": "Astana", "lat": 51.1694, "lng": 71.4491, "size": 0.05, "color": "darkorange" },
    { "name": "Bishkek", "lat": 42.8746, "lng": 74.5698, "size": 0.05, "color": "darkred" },
    { "name": "Ashgabat", "lat": 37.9601, "lng": 58.3261, "size": 0.05, "color": "darkgreen" },
    { "name": "Dushanbe", "lat": 38.5598, "lng": 68.787, "size": 0.05, "color": "darkblue" },
    { "name": "Kabul", "lat": 34.5553, "lng": 69.2075, "size": 0.05, "color": "darkcyan" },
    { "name": "Tehran", "lat": 35.6892, "lng": 51.389, "size": 0.05, "color": "darkgoldenrod" },
    { "name": "Baghdad", "lat": 33.3152, "lng": 44.3661, "size": 0.05, "color": "darkkhaki" },
    { "name": "Damascus", "lat": 33.5138, "lng": 36.2765, "size": 0.05, "color": "darkmagenta" },
    { "name": "Beirut", "lat": 33.8938, "lng": 35.5018, "size": 0.05, "color": "darkolivegreen" },
    { "name": "Amman", "lat": 31.9454, "lng": 35.9284, "size": 0.05, "color": "darkorchid" },
    { "name": "Jerusalem", "lat": 31.7683, "lng": 35.2137, "size": 0.05, "color": "darkred" },
    { "name": "Istanbul", "lat": 41.0082, "lng": 28.9784, "size": 0.05, "color": "darksalmon" },
    { "name": "Athens", "lat": 37.9838, "lng": 23.7275, "size": 0.05, "color": "darkseagreen" },
    { "name": "Belgrade", "lat": 44.7866, "lng": 20.4489, "size": 0.05, "color": "darkslateblue" },
    { "name": "Sofia", "lat": 42.6977, "lng": 23.3219, "size": 0.05, "color": "darkslategray" },
    { "name": "Bucharest", "lat": 44.4268, "lng": 26.1025, "size": 0.05, "color": "darkturquoise" },
    { "name": "Zagreb", "lat": 45.815, "lng": 15.9819, "size": 0.05, "color": "darkviolet" },
    { "name": "Sarajevo", "lat": 43.8563, "lng": 18.4131, "size": 0.05, "color": "deeppink" },
    { "name": "Skopje", "lat": 41.9973, "lng": 21.427, "size": 0.05, "color": "deepskyblue" },
    { "name": "Tirana", "lat": 41.3275, "lng": 19.8187, "size": 0.05, "color": "dimgray" },
    { "name": "Podgorica", "lat": 42.4416, "lng": 19.2636, "size": 0.05, "color": "dodgerblue" },
    { "name": "Pristina", "lat": 42.6629, "lng": 21.1655, "size": 0.05, "color": "firebrick" },
    { "name": "Yerevan", "lat": 40.1792, "lng": 44.4991, "size": 0.05, "color": "forestgreen" },
    { "name": "Baku", "lat": 40.4093, "lng": 49.8671, "size": 0.05, "color": "gainsboro" },

]

let ARCS = [
    {
        name: null,
        startLat: null,
        startLng: null,
        endLat: null,
        endLng: null,
        color: "white",
        dashLength: 0.05,
        dashGap: 0.01,
        dashAnimateTime: 10000
    }
]

const PLACES = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "scalerank": 2,
                "natscale": 200,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Abidjan",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Abidjan",
                "adm0cap": 1,
                "capalt": null,
                "capin": "De facto, admin",
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Ivory Coast",
                "sov_a3": "CIV",
                "adm0name": "Ivory Coast",
                "adm0_a3": "CIV",
                "adm1name": "Lagunes",
                "iso_a2": "CI",
                "note": null,
                "latitude": 5.31999696749,
                "longitude": -4.04004825989,
                "changed": 5,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 3802000,
                "pop_min": 3190395,
                "pop_other": 3181637,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 2293538,
                "meganame": "Abidjan",
                "ls_name": "Abidjan",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 4
            },
            "bbox": [
                -4.041994,
                5.321943,
                -4.041994,
                5.321943
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -4.041994,
                    5.321943
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Abu Dhabi",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Abu Dhabi",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "United Arab Emirates",
                "sov_a3": "ARE",
                "adm0name": "United Arab Emirates",
                "adm0_a3": "ARE",
                "adm1name": "Abu Dhabi",
                "iso_a2": "AE",
                "note": null,
                "latitude": 24.4666835724,
                "longitude": 54.3665933826,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 603492,
                "pop_min": 560230,
                "pop_other": 560230,
                "rank_max": 11,
                "rank_min": 11,
                "geonameid": 292968,
                "meganame": null,
                "ls_name": "Abu Dhabi",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                54.366593,
                24.466684,
                54.366593,
                24.466684
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    54.366593,
                    24.466684
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 2,
                "featurecla": "Admin-0 capital",
                "name": "Abuja",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Abuja",
                "adm0cap": 1,
                "capalt": null,
                "capin": "Official and ad",
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Nigeria",
                "sov_a3": "NGA",
                "adm0name": "Nigeria",
                "adm0_a3": "NGA",
                "adm1name": "Federal Capital Territory",
                "iso_a2": "NG",
                "note": null,
                "latitude": 9.08333314914,
                "longitude": 7.53332800155,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 1576000,
                "pop_min": 162135,
                "pop_other": 0,
                "rank_max": 12,
                "rank_min": 9,
                "geonameid": 2322794,
                "meganame": "Abuja",
                "ls_name": "Abuja",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 4
            },
            "bbox": [
                7.531382,
                9.085279,
                7.531382,
                9.085279
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    7.531382,
                    9.085279
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 2,
                "natscale": 200,
                "labelrank": 6,
                "featurecla": "Admin-0 capital",
                "name": "Accra",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Accra",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Ghana",
                "sov_a3": "GHA",
                "adm0name": "Ghana",
                "adm0_a3": "GHA",
                "adm1name": "Greater Accra",
                "iso_a2": "GH",
                "note": null,
                "latitude": 5.55003460583,
                "longitude": -0.21671574035,
                "changed": 5,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 2121000,
                "pop_min": 1963264,
                "pop_other": 2334371,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 2306104,
                "meganame": "Accra",
                "ls_name": "Accra",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 4
            },
            "bbox": [
                -0.218662,
                5.55198,
                -0.218662,
                5.55198
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -0.218662,
                    5.55198
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 1,
                "natscale": 300,
                "labelrank": 3,
                "featurecla": "Admin-0 capital",
                "name": "Addis Ababa",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Addis Ababa",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Ethiopia",
                "sov_a3": "ETH",
                "adm0name": "Ethiopia",
                "adm0_a3": "ETH",
                "adm1name": "Addis Ababa",
                "iso_a2": "ET",
                "note": null,
                "latitude": 9.03331036268,
                "longitude": 38.700004434,
                "changed": 5,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 3100000,
                "pop_min": 2757729,
                "pop_other": 3013653,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 344979,
                "meganame": "Addis Ababa",
                "ls_name": "Addis Ababa",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 3
            },
            "bbox": [
                38.698059,
                9.035256,
                38.698059,
                9.035256
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    38.698059,
                    9.035256
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 2,
                "natscale": 200,
                "labelrank": 5,
                "featurecla": "Admin-0 capital",
                "name": "Algiers",
                "namepar": null,
                "namealt": "El Djazacr",
                "diffascii": 0,
                "nameascii": "Algiers",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Algeria",
                "sov_a3": "DZA",
                "adm0name": "Algeria",
                "adm0_a3": "DZA",
                "adm1name": "Alger",
                "iso_a2": "DZ",
                "note": null,
                "latitude": 36.763064798,
                "longitude": 3.05055252952,
                "changed": 5,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 3354000,
                "pop_min": 1977663,
                "pop_other": 3332619,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 2507480,
                "meganame": "El Djazasr",
                "ls_name": "Algiers",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 4
            },
            "bbox": [
                3.048607,
                36.765011,
                3.048607,
                36.765011
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3.048607,
                    36.765011
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Amman",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Amman",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Jordan",
                "sov_a3": "JOR",
                "adm0name": "Jordan",
                "adm0_a3": "JOR",
                "adm1name": "Amman",
                "iso_a2": "JO",
                "note": null,
                "latitude": 31.9500252472,
                "longitude": 35.9332999255,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 1060000,
                "pop_min": 1060000,
                "pop_other": 2633729,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 250441,
                "meganame": "Amman",
                "ls_name": "Amman",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                35.931354,
                31.951971,
                35.931354,
                31.951971
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    35.931354,
                    31.951971
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 1,
                "natscale": 300,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Amsterdam",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Amsterdam",
                "adm0cap": 1,
                "capalt": null,
                "capin": "De facto capita",
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "Kingdom of the Netherlands",
                "sov_a3": "NLD",
                "adm0name": "Netherlands",
                "adm0_a3": "NLD",
                "adm1name": "Noord-Holland",
                "iso_a2": "NL",
                "note": null,
                "latitude": 52.3499686881,
                "longitude": 4.91664017601,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 1031000,
                "pop_min": 741636,
                "pop_other": 962488,
                "rank_max": 12,
                "rank_min": 11,
                "geonameid": 2759794,
                "meganame": "Amsterdam",
                "ls_name": "Amsterdam",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 3.7
            },
            "bbox": [
                4.914694,
                52.351915,
                4.914694,
                52.351915
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.914694,
                    52.351915
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 6,
                "natscale": 30,
                "labelrank": 0,
                "featurecla": "Admin-0 capital",
                "name": "Andorra",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Andorra",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Andorra",
                "sov_a3": "AND",
                "adm0name": "Andorra",
                "adm0_a3": "AND",
                "adm1name": null,
                "iso_a2": "AD",
                "note": null,
                "latitude": 42.5000014435,
                "longitude": 1.51648596051,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 53998,
                "pop_min": 22256,
                "pop_other": 53371,
                "rank_max": 8,
                "rank_min": 7,
                "geonameid": 3130067,
                "meganame": null,
                "ls_name": "Andorra",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 6
            },
            "bbox": [
                1.516486,
                42.500001,
                1.516486,
                42.500001
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    1.516486,
                    42.500001
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 2,
                "natscale": 200,
                "labelrank": 5,
                "featurecla": "Admin-0 capital",
                "name": "Ankara",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Ankara",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Turkey",
                "sov_a3": "TUR",
                "adm0name": "Turkey",
                "adm0_a3": "TUR",
                "adm1name": "Ankara",
                "iso_a2": "TR",
                "note": null,
                "latitude": 39.9272385855,
                "longitude": 32.864391641,
                "changed": 5,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 3716000,
                "pop_min": 3307379,
                "pop_other": 3267576,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 323786,
                "meganame": "Ankara",
                "ls_name": "Ankara",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 4
            },
            "bbox": [
                32.862446,
                39.929184,
                32.862446,
                39.929184
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    32.862446,
                    39.929184
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 6,
                "featurecla": "Admin-0 capital",
                "name": "Antananarivo",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Antananarivo",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Madagascar",
                "sov_a3": "MDG",
                "adm0name": "Madagascar",
                "adm0_a3": "MDG",
                "adm1name": "Antananarivo",
                "iso_a2": "MG",
                "note": null,
                "latitude": -18.9166373506,
                "longitude": 47.5166239001,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 1697000,
                "pop_min": 1391433,
                "pop_other": 1844658,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 1070940,
                "meganame": "Antananarivo",
                "ls_name": "Antananarivo",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                47.514678,
                -18.914691,
                47.514678,
                -18.914691
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    47.514678,
                    -18.914691
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 0,
                "featurecla": "Admin-0 capital",
                "name": "Apia",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Apia",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Samoa",
                "sov_a3": "WSM",
                "adm0name": "Samoa",
                "adm0_a3": "WSM",
                "adm1name": null,
                "iso_a2": "WS",
                "note": null,
                "latitude": -13.8415450424,
                "longitude": -171.738641609,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Location adjusted.",
                "pop_max": 61916,
                "pop_min": 37708,
                "pop_other": 0,
                "rank_max": 8,
                "rank_min": 7,
                "geonameid": 3689793,
                "meganame": null,
                "ls_name": "Apia",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 5
            },
            "bbox": [
                -171.738642,
                -13.841545,
                -171.738642,
                -13.841545
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -171.738642,
                    -13.841545
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Ashgabat",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Ashgabat",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Turkmenistan",
                "sov_a3": "TKM",
                "adm0name": "Turkmenistan",
                "adm0_a3": "TKM",
                "adm1name": "Ahal",
                "iso_a2": "TM",
                "note": null,
                "latitude": 37.9499949331,
                "longitude": 58.3832991118,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 727700,
                "pop_min": 577982,
                "pop_other": 556048,
                "rank_max": 11,
                "rank_min": 11,
                "geonameid": 162183,
                "meganame": null,
                "ls_name": "Ashgabat",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                58.383299,
                37.949995,
                58.383299,
                37.949995
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    58.383299,
                    37.949995
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Asmara",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Asmara",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Eritrea",
                "sov_a3": "ERI",
                "adm0name": "Eritrea",
                "adm0_a3": "ERI",
                "adm1name": "Anseba",
                "iso_a2": "ER",
                "note": null,
                "latitude": 15.3333392527,
                "longitude": 38.9333235258,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 620802,
                "pop_min": 563930,
                "pop_other": 587094,
                "rank_max": 11,
                "rank_min": 11,
                "geonameid": 343300,
                "meganame": null,
                "ls_name": "Asmara",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                38.933324,
                15.333339,
                38.933324,
                15.333339
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    38.933324,
                    15.333339
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 6,
                "featurecla": "Admin-0 capital",
                "name": "Astana",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Astana",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Kazakhstan",
                "sov_a3": "KAZ",
                "adm0name": "Kazakhstan",
                "adm0_a3": "KAZ",
                "adm1name": "Aqmola",
                "iso_a2": "KZ",
                "note": null,
                "latitude": 51.1811253043,
                "longitude": 71.4277742095,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 345604,
                "pop_min": 325021,
                "pop_other": 317445,
                "rank_max": 10,
                "rank_min": 10,
                "geonameid": 1526273,
                "meganame": null,
                "ls_name": "Astana",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 4
            },
            "bbox": [
                71.427774,
                51.181125,
                71.427774,
                51.181125
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    71.427774,
                    51.181125
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 7,
                "featurecla": "Admin-0 capital",
                "name": "Asunción",
                "namepar": null,
                "namealt": "Asuncion",
                "diffascii": 1,
                "nameascii": "Asuncion",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Paraguay",
                "sov_a3": "PRY",
                "adm0name": "Paraguay",
                "adm0_a3": "PRY",
                "adm1name": "Asunción",
                "iso_a2": "PY",
                "note": null,
                "latitude": -25.2964029757,
                "longitude": -57.6415051693,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 1870000,
                "pop_min": 11693,
                "pop_other": 636771,
                "rank_max": 12,
                "rank_min": 6,
                "geonameid": 1730025,
                "meganame": "Asuncian",
                "ls_name": "Asuncion",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 4
            },
            "bbox": [
                -57.643451,
                -25.294457,
                -57.643451,
                -25.294457
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -57.643451,
                    -25.294457
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 1,
                "natscale": 300,
                "labelrank": 6,
                "featurecla": "Admin-0 capital",
                "name": "Athens",
                "namepar": "Athenai",
                "namealt": "Athinai",
                "diffascii": 0,
                "nameascii": "Athens",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "Greece",
                "sov_a3": "GRC",
                "adm0name": "Greece",
                "adm0_a3": "GRC",
                "adm1name": "Attiki",
                "iso_a2": "GR",
                "note": null,
                "latitude": 37.9833262319,
                "longitude": 23.7333210843,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 3242000,
                "pop_min": 729137,
                "pop_other": 112572,
                "rank_max": 12,
                "rank_min": 11,
                "geonameid": 264371,
                "meganame": "Athnnai",
                "ls_name": "Athens2",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 3.7
            },
            "bbox": [
                23.731375,
                37.985272,
                23.731375,
                37.985272
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    23.731375,
                    37.985272
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 1,
                "natscale": 300,
                "labelrank": 1,
                "featurecla": "Admin-1 capital",
                "name": "Atlanta",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Atlanta",
                "adm0cap": 0,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "United States",
                "sov_a3": "USA",
                "adm0name": "United States of America",
                "adm0_a3": "USA",
                "adm1name": "Georgia",
                "iso_a2": "US",
                "note": null,
                "latitude": 33.830013854,
                "longitude": -84.3999493833,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 4506000,
                "pop_min": 422908,
                "pop_other": 2874096,
                "rank_max": 12,
                "rank_min": 10,
                "geonameid": 4180439,
                "meganame": "Atlanta",
                "ls_name": "Atlanta",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 3
            },
            "bbox": [
                -84.401895,
                33.83196,
                -84.401895,
                33.83196
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -84.401895,
                    33.83196
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 1,
                "natscale": 300,
                "labelrank": 8,
                "featurecla": "Admin-1 capital",
                "name": "Auckland",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Auckland",
                "adm0cap": 0,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "New Zealand",
                "sov_a3": "NZL",
                "adm0name": "New Zealand",
                "adm0_a3": "NZL",
                "adm1name": "Auckland",
                "iso_a2": "NZ",
                "note": "Auckland metropolitan area",
                "latitude": -36.84805489493,
                "longitude": 174.76302698708,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 1377200,
                "pop_min": 395982,
                "pop_other": 0,
                "rank_max": 12,
                "rank_min": 10,
                "geonameid": 2193733,
                "meganame": "Auckland",
                "ls_name": "Auckland",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 3
            },
            "bbox": [
                174.763027,
                -36.848055,
                174.763027,
                -36.848055
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    174.763027,
                    -36.848055
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 1,
                "natscale": 300,
                "labelrank": 5,
                "featurecla": "Admin-0 capital",
                "name": "Baghdad",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Baghdad",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Iraq",
                "sov_a3": "IRQ",
                "adm0name": "Iraq",
                "adm0_a3": "IRQ",
                "adm1name": "Baghdad",
                "iso_a2": "IQ",
                "note": null,
                "latitude": 33.3386484975,
                "longitude": 44.3938687732,
                "changed": 5,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 5054000,
                "pop_min": 5054000,
                "pop_other": 4959534,
                "rank_max": 13,
                "rank_min": 13,
                "geonameid": 98182,
                "meganame": "Baghdad",
                "ls_name": "Baghdad",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 3.7
            },
            "bbox": [
                44.391923,
                33.340594,
                44.391923,
                33.340594
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    44.391923,
                    33.340594
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 4,
                "natscale": 50,
                "labelrank": 5,
                "featurecla": "Admin-0 capital alt",
                "name": "Baguio City",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Baguio City",
                "adm0cap": 0,
                "capalt": 1,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Philippines",
                "sov_a3": "PHL",
                "adm0name": "Philippines",
                "adm0_a3": "PHL",
                "adm1name": "Benguet",
                "iso_a2": "PH",
                "note": null,
                "latitude": 16.4299906606,
                "longitude": 120.569942585,
                "changed": 40,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 447824,
                "pop_min": 272714,
                "pop_other": 164877,
                "rank_max": 10,
                "rank_min": 10,
                "geonameid": 1728930,
                "meganame": null,
                "ls_name": "Baguio City",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5.6
            },
            "bbox": [
                120.569943,
                16.429991,
                120.569943,
                16.429991
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    120.569943,
                    16.429991
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Baku",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Baku",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Azerbaijan",
                "sov_a3": "AZE",
                "adm0name": "Azerbaijan",
                "adm0_a3": "AZE",
                "adm1name": "Baki",
                "iso_a2": "AZ",
                "note": null,
                "latitude": 40.3952720327,
                "longitude": 49.8622171619,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 2122300,
                "pop_min": 1892000,
                "pop_other": 1518801,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 587084,
                "meganame": "Baku",
                "ls_name": "Baku",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                49.860271,
                40.397218,
                49.860271,
                40.397218
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    49.860271,
                    40.397218
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 6,
                "featurecla": "Admin-0 capital",
                "name": "Bamako",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Bamako",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Mali",
                "sov_a3": "MLI",
                "adm0name": "Mali",
                "adm0_a3": "MLI",
                "adm1name": "Bamako",
                "iso_a2": "ML",
                "note": null,
                "latitude": 12.6500146677,
                "longitude": -8.00003910464,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 1494000,
                "pop_min": 1297281,
                "pop_other": 1301407,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 2460596,
                "meganame": "Bamako",
                "ls_name": "Bamako",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 4
            },
            "bbox": [
                -8.001985,
                12.651961,
                -8.001985,
                12.651961
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -8.001985,
                    12.651961
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Bandar Seri Begawan",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Bandar Seri Begawan",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Brunei",
                "sov_a3": "BRN",
                "adm0name": "Brunei",
                "adm0_a3": "BRN",
                "adm1name": "Brunei and Muara",
                "iso_a2": "BN",
                "note": null,
                "latitude": 4.88333111462,
                "longitude": 114.933284057,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 296500,
                "pop_min": 140000,
                "pop_other": 222513,
                "rank_max": 10,
                "rank_min": 9,
                "geonameid": 1820906,
                "meganame": null,
                "ls_name": "Bandar Seri Begawan",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                114.933284,
                4.883331,
                114.933284,
                4.883331
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.933284,
                    4.883331
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 1,
                "natscale": 300,
                "labelrank": 1,
                "featurecla": "Admin-1 capital",
                "name": "Bangalore",
                "namepar": null,
                "namealt": "Bengaluru",
                "diffascii": 0,
                "nameascii": "Bangalore",
                "adm0cap": 0,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "India",
                "sov_a3": "IND",
                "adm0name": "India",
                "adm0_a3": "IND",
                "adm1name": "Karnataka",
                "iso_a2": "IN",
                "note": null,
                "latitude": 12.9699951365,
                "longitude": 77.5600097238,
                "changed": 3,
                "namediff": 1,
                "diffnote": "Name changed. Changed scale rank.",
                "pop_max": 6787000,
                "pop_min": 5104047,
                "pop_other": 8102712,
                "rank_max": 13,
                "rank_min": 13,
                "geonameid": 1277333,
                "meganame": "Bangalore",
                "ls_name": "Bangalore",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 3.7
            },
            "bbox": [
                77.558064,
                12.971941,
                77.558064,
                12.971941
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    77.558064,
                    12.971941
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 1,
                "natscale": 300,
                "labelrank": 5,
                "featurecla": "Admin-0 capital",
                "name": "Bangkok",
                "namepar": null,
                "namealt": "Krung Thep",
                "diffascii": 0,
                "nameascii": "Bangkok",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "Thailand",
                "sov_a3": "THA",
                "adm0name": "Thailand",
                "adm0_a3": "THA",
                "adm1name": "Bangkok Metropolis",
                "iso_a2": "TH",
                "note": null,
                "latitude": 13.7499992055,
                "longitude": 100.516644652,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 6704000,
                "pop_min": 5104476,
                "pop_other": 5082758,
                "rank_max": 13,
                "rank_min": 13,
                "geonameid": 1609350,
                "meganame": "Krung Thep",
                "ls_name": "Bangkok",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 3
            },
            "bbox": [
                100.514699,
                13.751945,
                100.514699,
                13.751945
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    100.514699,
                    13.751945
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 7,
                "featurecla": "Admin-0 capital",
                "name": "Bangui",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Bangui",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Central African Republic",
                "sov_a3": "CAF",
                "adm0name": "Central African Republic",
                "adm0_a3": "CAF",
                "adm1name": "Bangui",
                "iso_a2": "CF",
                "note": null,
                "latitude": 4.36664430635,
                "longitude": 18.5582881253,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 831925,
                "pop_min": 622771,
                "pop_other": 782274,
                "rank_max": 11,
                "rank_min": 11,
                "geonameid": 2389853,
                "meganame": null,
                "ls_name": "Bangui",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                18.558288,
                4.366644,
                18.558288,
                4.366644
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    18.558288,
                    4.366644
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 4,
                "natscale": 50,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Banjul",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Banjul",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Gambia, The",
                "sov_a3": "GMB",
                "adm0name": "The Gambia",
                "adm0_a3": "GMB",
                "adm1name": "Banjul",
                "iso_a2": "GM",
                "note": null,
                "latitude": 13.4538764603,
                "longitude": -16.5917014892,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Location adjusted. Changed scale rank.",
                "pop_max": 43094,
                "pop_min": 34589,
                "pop_other": 581300,
                "rank_max": 7,
                "rank_min": 7,
                "geonameid": 2413876,
                "meganame": null,
                "ls_name": "Banjul",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5.6
            },
            "bbox": [
                -16.591701,
                13.453876,
                -16.591701,
                13.453876
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -16.591701,
                    13.453876
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 4,
                "natscale": 50,
                "labelrank": 0,
                "featurecla": "Admin-0 capital",
                "name": "Basseterre",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Basseterre",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Saint Kitts and Nevis",
                "sov_a3": "KNA",
                "adm0name": "Saint Kitts and Nevis",
                "adm0_a3": "KNA",
                "adm1name": null,
                "iso_a2": "KN",
                "note": null,
                "latitude": 17.3020304555,
                "longitude": -62.7170093197,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 21887,
                "pop_min": 15500,
                "pop_other": 21887,
                "rank_max": 7,
                "rank_min": 6,
                "geonameid": 3575551,
                "meganame": null,
                "ls_name": "Basseterre",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 5.6
            },
            "bbox": [
                -62.717009,
                17.30203,
                -62.717009,
                17.30203
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -62.717009,
                    17.30203
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 0,
                "natscale": 600,
                "labelrank": 1,
                "featurecla": "Admin-0 capital",
                "name": "Beijing",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Beijing",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "China",
                "sov_a3": "CHN",
                "adm0name": "China",
                "adm0_a3": "CHN",
                "adm1name": "Beijing",
                "iso_a2": "CN",
                "note": null,
                "latitude": 39.9288922313,
                "longitude": 116.388285684,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 11106000,
                "pop_min": 7480601,
                "pop_other": 9033231,
                "rank_max": 14,
                "rank_min": 13,
                "geonameid": 1816670,
                "meganame": "Beijing",
                "ls_name": "Beijing",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 1.7
            },
            "bbox": [
                116.38634,
                39.930838,
                116.38634,
                39.930838
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    116.38634,
                    39.930838
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Beirut",
                "namepar": null,
                "namealt": "Bayrut",
                "diffascii": 0,
                "nameascii": "Beirut",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Lebanon",
                "sov_a3": "LBN",
                "adm0name": "Lebanon",
                "adm0_a3": "LBN",
                "adm1name": "Beirut",
                "iso_a2": "LB",
                "note": null,
                "latitude": 33.871975117,
                "longitude": 35.50970821,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 1846000,
                "pop_min": 1712125,
                "pop_other": 1661980,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 276781,
                "meganame": "Bayrut",
                "ls_name": "Beirut",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 5
            },
            "bbox": [
                35.507762,
                33.873921,
                35.507762,
                33.873921
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    35.507762,
                    33.873921
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Belgrade",
                "namepar": "Beograd",
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Belgrade",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Republic of Serbia",
                "sov_a3": "SRB",
                "adm0name": "Serbia",
                "adm0_a3": "SRB",
                "adm1name": "Grad Beograd",
                "iso_a2": "RS",
                "note": null,
                "latitude": 44.8186454458,
                "longitude": 20.4679906806,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 1099000,
                "pop_min": 1099000,
                "pop_other": 1271541,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 792680,
                "meganame": "Beograd",
                "ls_name": "Belgrade",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                20.466045,
                44.820591,
                20.466045,
                44.820591
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.466045,
                    44.820591
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Belmopan",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Belmopan",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Belize",
                "sov_a3": "BLZ",
                "adm0name": "Belize",
                "adm0_a3": "BLZ",
                "adm1name": "Cayo",
                "iso_a2": "BZ",
                "note": null,
                "latitude": 17.2520335072,
                "longitude": -88.7670729998,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 15220,
                "pop_min": 13381,
                "pop_other": 15220,
                "rank_max": 6,
                "rank_min": 6,
                "geonameid": 3582672,
                "meganame": null,
                "ls_name": "Belmopan",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                -88.767073,
                17.252034,
                -88.767073,
                17.252034
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -88.767073,
                    17.252034
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 1,
                "natscale": 300,
                "labelrank": 3,
                "featurecla": "Admin-0 capital",
                "name": "Berlin",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Berlin",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "Germany",
                "sov_a3": "DEU",
                "adm0name": "Germany",
                "adm0_a3": "DEU",
                "adm1name": "Berlin",
                "iso_a2": "DE",
                "note": null,
                "latitude": 52.5218186636,
                "longitude": 13.4015486233,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 3406000,
                "pop_min": 3094014,
                "pop_other": 3013258,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 2950159,
                "meganame": "Berlin",
                "ls_name": "Berlin",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 2.7
            },
            "bbox": [
                13.399603,
                52.523765,
                13.399603,
                52.523765
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    13.399603,
                    52.523765
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 4,
                "natscale": 50,
                "labelrank": 7,
                "featurecla": "Admin-0 capital",
                "name": "Bern",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Bern",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Switzerland",
                "sov_a3": "CHE",
                "adm0name": "Switzerland",
                "adm0_a3": "CHE",
                "adm1name": "Bern",
                "iso_a2": "CH",
                "note": null,
                "latitude": 46.9166827587,
                "longitude": 7.46697546248,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 275329,
                "pop_min": 121631,
                "pop_other": 267814,
                "rank_max": 10,
                "rank_min": 9,
                "geonameid": 2661552,
                "meganame": null,
                "ls_name": "Bern",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5.6
            },
            "bbox": [
                7.466975,
                46.916683,
                7.466975,
                46.916683
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    7.466975,
                    46.916683
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 6,
                "natscale": 30,
                "labelrank": 0,
                "featurecla": "Admin-0 capital alt",
                "name": "Bir Lehlou",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Bir Lehlou",
                "adm0cap": 0,
                "capalt": 1,
                "capin": "Claimed as inte",
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Western Sahara",
                "sov_a3": "SAH",
                "adm0name": "Western Sahara",
                "adm0_a3": "SAH",
                "adm1name": null,
                "iso_a2": "EH",
                "note": null,
                "latitude": 26.119166686,
                "longitude": -9.65252221825,
                "changed": 4,
                "namediff": 1,
                "diffnote": "Added place.",
                "pop_max": 500,
                "pop_min": 200,
                "pop_other": 0,
                "rank_max": 2,
                "rank_min": 1,
                "geonameid": -1,
                "meganame": null,
                "ls_name": null,
                "ls_match": 2,
                "checkme": 0,
                "min_zoom": 6
            },
            "bbox": [
                -9.652522,
                26.119167,
                -9.652522,
                26.119167
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -9.652522,
                    26.119167
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Bishkek",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Bishkek",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Kyrgyzstan",
                "sov_a3": "KGZ",
                "adm0name": "Kyrgyzstan",
                "adm0_a3": "KGZ",
                "adm1name": "Bishkek",
                "iso_a2": "KG",
                "note": null,
                "latitude": 42.8730794465,
                "longitude": 74.5852042225,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 837000,
                "pop_min": 804212,
                "pop_other": 781714,
                "rank_max": 11,
                "rank_min": 11,
                "geonameid": 1528675,
                "meganame": "Bishkek",
                "ls_name": "Bishkek",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 5
            },
            "bbox": [
                74.583258,
                42.875025,
                74.583258,
                42.875025
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    74.583258,
                    42.875025
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Bissau",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Bissau",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Guinea Bissau",
                "sov_a3": "GNB",
                "adm0name": "Guinea Bissau",
                "adm0_a3": "GNB",
                "adm1name": "Bissau",
                "iso_a2": "GW",
                "note": null,
                "latitude": 11.865023823,
                "longitude": -15.5983608413,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 403339,
                "pop_min": 388028,
                "pop_other": 403339,
                "rank_max": 10,
                "rank_min": 10,
                "geonameid": 2374775,
                "meganame": null,
                "ls_name": "Bissau",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                -15.598361,
                11.865024,
                -15.598361,
                11.865024
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -15.598361,
                    11.865024
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 3,
                "featurecla": "Admin-0 capital",
                "name": "Bloemfontein",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Bloemfontein",
                "adm0cap": 1,
                "capalt": null,
                "capin": "Judicial capita",
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "South Africa",
                "sov_a3": "ZAF",
                "adm0name": "South Africa",
                "adm0_a3": "ZAF",
                "adm1name": "Orange Free State",
                "iso_a2": "ZA",
                "note": null,
                "latitude": -29.1199938774,
                "longitude": 26.2299128812,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 463064,
                "pop_min": 456669,
                "pop_other": 456513,
                "rank_max": 10,
                "rank_min": 10,
                "geonameid": 1018725,
                "meganame": null,
                "ls_name": "Bloemfontein",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                26.229913,
                -29.119994,
                26.229913,
                -29.119994
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    26.229913,
                    -29.119994
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 0,
                "natscale": 600,
                "labelrank": 5,
                "featurecla": "Admin-0 capital",
                "name": "Bogota",
                "namepar": null,
                "namealt": "Bogota",
                "diffascii": 0,
                "nameascii": "Bogota",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "Colombia",
                "sov_a3": "COL",
                "adm0name": "Colombia",
                "adm0_a3": "COL",
                "adm1name": "Bogota",
                "iso_a2": "CO",
                "note": null,
                "latitude": 4.59642356253,
                "longitude": -74.0833439552,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 7772000,
                "pop_min": 6333661,
                "pop_other": 5754084,
                "rank_max": 13,
                "rank_min": 13,
                "geonameid": 3688689,
                "meganame": "Bogota",
                "ls_name": "Bogota",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 2.1
            },
            "bbox": [
                -74.08529,
                4.598369,
                -74.08529,
                4.598369
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -74.08529,
                    4.598369
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 2,
                "natscale": 200,
                "labelrank": 1,
                "featurecla": "Admin-0 capital",
                "name": "Brasília",
                "namepar": null,
                "namealt": "Brasilia",
                "diffascii": 0,
                "nameascii": "Brasilia",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Brazil",
                "sov_a3": "BRA",
                "adm0name": "Brazil",
                "adm0_a3": "BRA",
                "adm1name": "Distrito Federal",
                "iso_a2": "BR",
                "note": null,
                "latitude": -15.7833402315,
                "longitude": -47.9160522884,
                "changed": 5,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 3716996,
                "pop_min": 2562963,
                "pop_other": 1772679,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 3469058,
                "meganame": "Brasglia",
                "ls_name": "Brasilia",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 3.7
            },
            "bbox": [
                -47.917998,
                -15.781394,
                -47.917998,
                -15.781394
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -47.917998,
                    -15.781394
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 4,
                "natscale": 50,
                "labelrank": 7,
                "featurecla": "Admin-0 capital",
                "name": "Bratislava",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Bratislava",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Slovakia",
                "sov_a3": "SVK",
                "adm0name": "Slovakia",
                "adm0_a3": "SVK",
                "adm1name": "Bratislavský",
                "iso_a2": "SK",
                "note": null,
                "latitude": 48.15001833,
                "longitude": 17.1169807522,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 423737,
                "pop_min": 373687,
                "pop_other": 361489,
                "rank_max": 10,
                "rank_min": 10,
                "geonameid": 3060972,
                "meganame": null,
                "ls_name": "Bratislava",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5.1
            },
            "bbox": [
                17.116981,
                48.150018,
                17.116981,
                48.150018
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    17.116981,
                    48.150018
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 7,
                "featurecla": "Admin-0 capital",
                "name": "Brazzaville",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Brazzaville",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Congo (Brazzaville)",
                "sov_a3": "COG",
                "adm0name": "Congo (Brazzaville)",
                "adm0_a3": "COG",
                "adm1name": "Pool",
                "iso_a2": "CG",
                "note": null,
                "latitude": -4.25918577181,
                "longitude": 15.2846894925,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 1355000,
                "pop_min": 1163890,
                "pop_other": 1174778,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 2260535,
                "meganame": "Brazzaville",
                "ls_name": "Brazzaville",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                15.282744,
                -4.25724,
                15.282744,
                -4.25724
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    15.282744,
                    -4.25724
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 4,
                "natscale": 50,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Bridgetown",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Bridgetown",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Barbados",
                "sov_a3": "BRB",
                "adm0name": "Barbados",
                "adm0_a3": "BRB",
                "adm1name": "Saint Michael",
                "iso_a2": "BB",
                "note": null,
                "latitude": 13.1020025828,
                "longitude": -59.6165267351,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 191152,
                "pop_min": 96578,
                "pop_other": 191814,
                "rank_max": 9,
                "rank_min": 8,
                "geonameid": 2075807,
                "meganame": null,
                "ls_name": "Bridgetown",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 5.6
            },
            "bbox": [
                -59.616527,
                13.102003,
                -59.616527,
                13.102003
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -59.616527,
                    13.102003
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 2,
                "natscale": 200,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Brussels",
                "namepar": null,
                "namealt": "Bruxelles-Brussel",
                "diffascii": 0,
                "nameascii": "Brussels",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "Belgium",
                "sov_a3": "BEL",
                "adm0name": "Belgium",
                "adm0_a3": "BEL",
                "adm1name": "Brussels",
                "iso_a2": "BE",
                "note": null,
                "latitude": 50.8333170767,
                "longitude": 4.3333166083,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 1743000,
                "pop_min": 1019022,
                "pop_other": 1490164,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 2800866,
                "meganame": "Bruxelles-Brussel",
                "ls_name": "Brussels",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 4.7
            },
            "bbox": [
                4.331371,
                50.835263,
                4.331371,
                50.835263
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.331371,
                    50.835263
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 2,
                "natscale": 200,
                "labelrank": 6,
                "featurecla": "Admin-0 capital",
                "name": "Bucharest",
                "namepar": "Bucuresti",
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Bucharest",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "Romania",
                "sov_a3": "ROU",
                "adm0name": "Romania",
                "adm0_a3": "ROU",
                "adm1name": "Bucharest",
                "iso_a2": "RO",
                "note": null,
                "latitude": 44.4333718049,
                "longitude": 26.099946654,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 1942000,
                "pop_min": 1742194,
                "pop_other": 1636574,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 683506,
                "meganame": "Bucuresti",
                "ls_name": "Bucharest",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 4
            },
            "bbox": [
                26.098001,
                44.435318,
                26.098001,
                44.435318
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    26.098001,
                    44.435318
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 2,
                "natscale": 200,
                "labelrank": 6,
                "featurecla": "Admin-0 capital",
                "name": "Budapest",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Budapest",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "Hungary",
                "sov_a3": "HUN",
                "adm0name": "Hungary",
                "adm0_a3": "HUN",
                "adm1name": "Budapest",
                "iso_a2": "HU",
                "note": null,
                "latitude": 47.5000063264,
                "longitude": 19.0833206774,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 1679000,
                "pop_min": 1679000,
                "pop_other": 1718895,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 3054643,
                "meganame": "Budapest",
                "ls_name": "Budapest",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 4.7
            },
            "bbox": [
                19.081375,
                47.501952,
                19.081375,
                47.501952
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    19.081375,
                    47.501952
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 1,
                "natscale": 300,
                "labelrank": 3,
                "featurecla": "Admin-0 capital",
                "name": "Buenos Aires",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Buenos Aires",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "Argentina",
                "sov_a3": "ARG",
                "adm0name": "Argentina",
                "adm0_a3": "ARG",
                "adm1name": "Ciudad de Buenos Aires",
                "iso_a2": "AR",
                "note": null,
                "latitude": -34.6025016085,
                "longitude": -58.3975313737,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 12795000,
                "pop_min": 10929146,
                "pop_other": 10271457,
                "rank_max": 14,
                "rank_min": 14,
                "geonameid": 3435910,
                "meganame": "Buenos Aires",
                "ls_name": "Buenos Aires",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 2.1
            },
            "bbox": [
                -58.399477,
                -34.600556,
                -58.399477,
                -34.600556
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -58.399477,
                    -34.600556
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 4,
                "natscale": 50,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Bujumbura",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Bujumbura",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Burundi",
                "sov_a3": "BDI",
                "adm0name": "Burundi",
                "adm0_a3": "BDI",
                "adm1name": "Bujumbura Mairie",
                "iso_a2": "BI",
                "note": null,
                "latitude": -3.37608722037,
                "longitude": 29.3600060615,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 331700,
                "pop_min": 331700,
                "pop_other": 1208361,
                "rank_max": 10,
                "rank_min": 10,
                "geonameid": 425378,
                "meganame": null,
                "ls_name": "Bujumbura",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5.6
            },
            "bbox": [
                29.360006,
                -3.376087,
                29.360006,
                -3.376087
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    29.360006,
                    -3.376087
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 0,
                "natscale": 600,
                "labelrank": 3,
                "featurecla": "Admin-0 capital",
                "name": "Cairo",
                "namepar": null,
                "namealt": "Al-Qahirah",
                "diffascii": 0,
                "nameascii": "Cairo",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "Egypt",
                "sov_a3": "EGY",
                "adm0name": "Egypt",
                "adm0_a3": "EGY",
                "adm1name": "Al Qahirah",
                "iso_a2": "EG",
                "note": null,
                "latitude": 30.0499603465,
                "longitude": 31.2499682197,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 11893000,
                "pop_min": 7734614,
                "pop_other": 13720557,
                "rank_max": 14,
                "rank_min": 13,
                "geonameid": 360630,
                "meganame": "Al-Qahirah",
                "ls_name": "Cairo",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 1.7
            },
            "bbox": [
                31.248022,
                30.051906,
                31.248022,
                30.051906
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    31.248022,
                    30.051906
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 3,
                "featurecla": "Admin-0 capital",
                "name": "Canberra",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Canberra",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Australia",
                "sov_a3": "AUS",
                "adm0name": "Australia",
                "adm0_a3": "AUS",
                "adm1name": "Australian Capital Territory",
                "iso_a2": "AU",
                "note": null,
                "latitude": -35.2830285454,
                "longitude": 149.129026244,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Location adjusted.",
                "pop_max": 327700,
                "pop_min": 234032,
                "pop_other": 0,
                "rank_max": 10,
                "rank_min": 10,
                "geonameid": 2172517,
                "meganame": null,
                "ls_name": "Canberra",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 4
            },
            "bbox": [
                149.129026,
                -35.283029,
                149.129026,
                -35.283029
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.129026,
                    -35.283029
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 0,
                "natscale": 600,
                "labelrank": 3,
                "featurecla": "Admin-0 capital",
                "name": "Cape Town",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Cape Town",
                "adm0cap": 1,
                "capalt": 1,
                "capin": "Legislative cap",
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "South Africa",
                "sov_a3": "ZAF",
                "adm0name": "South Africa",
                "adm0_a3": "ZAF",
                "adm1name": "Western Cape",
                "iso_a2": "ZA",
                "note": null,
                "latitude": -33.9200109672,
                "longitude": 18.4349881578,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 3215000,
                "pop_min": 2432858,
                "pop_other": 2401318,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 3369157,
                "meganame": "Cape Town",
                "ls_name": "Cape Town",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 1.7
            },
            "bbox": [
                18.433042,
                -33.918065,
                18.433042,
                -33.918065
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    18.433042,
                    -33.918065
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 1,
                "natscale": 300,
                "labelrank": 6,
                "featurecla": "Admin-0 capital",
                "name": "Caracas",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Caracas",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "Venezuela",
                "sov_a3": "VEN",
                "adm0name": "Venezuela",
                "adm0_a3": "VEN",
                "adm1name": "Distrito Capital",
                "iso_a2": "VE",
                "note": null,
                "latitude": 10.5009985544,
                "longitude": -66.9170371924,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 2985000,
                "pop_min": 1815679,
                "pop_other": 2764555,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 3646738,
                "meganame": "Caracas",
                "ls_name": "Caracas",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 3
            },
            "bbox": [
                -66.918983,
                10.502944,
                -66.918983,
                10.502944
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -66.918983,
                    10.502944
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 1,
                "natscale": 300,
                "labelrank": 5,
                "featurecla": "Admin-1 capital",
                "name": "Casablanca",
                "namepar": null,
                "namealt": "Dar-el-Beida",
                "diffascii": 0,
                "nameascii": "Casablanca",
                "adm0cap": 0,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "Morocco",
                "sov_a3": "MAR",
                "adm0name": "Morocco",
                "adm0_a3": "MAR",
                "adm1name": "Grand Casablanca",
                "iso_a2": "MA",
                "note": null,
                "latitude": 33.5999762156,
                "longitude": -7.61636743309,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 3181000,
                "pop_min": 3144909,
                "pop_other": 3718797,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 2553604,
                "meganame": "Dar-el-Beida",
                "ls_name": "Casablanca",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 3.7
            },
            "bbox": [
                -7.618313,
                33.601922,
                -7.618313,
                33.601922
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -7.618313,
                    33.601922
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 4,
                "natscale": 50,
                "labelrank": 0,
                "featurecla": "Admin-0 capital",
                "name": "Castries",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Castries",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Saint Lucia",
                "sov_a3": "LCA",
                "adm0name": "Saint Lucia",
                "adm0_a3": "LCA",
                "adm1name": null,
                "iso_a2": "LC",
                "note": null,
                "latitude": 14.0019734893,
                "longitude": -61.0000081804,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 37963,
                "pop_min": 10634,
                "pop_other": 0,
                "rank_max": 7,
                "rank_min": 6,
                "geonameid": 3028258,
                "meganame": null,
                "ls_name": "Castries",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 5.6
            },
            "bbox": [
                -61.000008,
                14.001973,
                -61.000008,
                14.001973
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -61.000008,
                    14.001973
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 1,
                "natscale": 300,
                "labelrank": 1,
                "featurecla": "Admin-1 capital",
                "name": "Chengdu",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Chengdu",
                "adm0cap": 0,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "China",
                "sov_a3": "CHN",
                "adm0name": "China",
                "adm0_a3": "CHN",
                "adm1name": "Sichuan",
                "iso_a2": "CN",
                "note": null,
                "latitude": 30.6700000193,
                "longitude": 104.07001949,
                "changed": 5,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 4123000,
                "pop_min": 3950437,
                "pop_other": 11622929,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 1815286,
                "meganame": "Chengdu",
                "ls_name": "Chengdu",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 3
            },
            "bbox": [
                104.068074,
                30.671946,
                104.068074,
                30.671946
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    104.068074,
                    30.671946
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 1,
                "natscale": 300,
                "labelrank": 1,
                "featurecla": "Populated place",
                "name": "Chicago",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Chicago",
                "adm0cap": 0,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "United States",
                "sov_a3": "USA",
                "adm0name": "United States of America",
                "adm0_a3": "USA",
                "adm1name": "Illinois",
                "iso_a2": "US",
                "note": null,
                "latitude": 41.8299906607,
                "longitude": -87.7500549741,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 8990000,
                "pop_min": 2841952,
                "pop_other": 3635101,
                "rank_max": 13,
                "rank_min": 12,
                "geonameid": 4887398,
                "meganame": "Chicago",
                "ls_name": "Chicago",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 3
            },
            "bbox": [
                -87.752001,
                41.831937,
                -87.752001,
                41.831937
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -87.752001,
                    41.831937
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Chișinău",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Chisinau",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Moldova",
                "sov_a3": "MDA",
                "adm0name": "Moldova",
                "adm0_a3": "MDA",
                "adm1name": "Chisinau",
                "iso_a2": "MD",
                "note": null,
                "latitude": 47.0050236197,
                "longitude": 28.8577111397,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 688134,
                "pop_min": 635994,
                "pop_other": 664472,
                "rank_max": 11,
                "rank_min": 11,
                "geonameid": 618426,
                "meganame": null,
                "ls_name": "Chisinau",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 5
            },
            "bbox": [
                28.857711,
                47.005024,
                28.857711,
                47.005024
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    28.857711,
                    47.005024
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 6,
                "featurecla": "Admin-0 capital",
                "name": "Colombo",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Colombo",
                "adm0cap": 1,
                "capalt": null,
                "capin": "De facto, admin",
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Sri Lanka",
                "sov_a3": "LKA",
                "adm0name": "Sri Lanka",
                "adm0_a3": "LKA",
                "adm1name": "Colombo",
                "iso_a2": "LK",
                "note": null,
                "latitude": 6.93196575818,
                "longitude": 79.8577506093,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 217000,
                "pop_min": 217000,
                "pop_other": 2490974,
                "rank_max": 10,
                "rank_min": 10,
                "geonameid": 3465927,
                "meganame": null,
                "ls_name": "Colombo",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 5
            },
            "bbox": [
                79.857751,
                6.931966,
                79.857751,
                6.931966
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    79.857751,
                    6.931966
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Conakry",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Conakry",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Guinea",
                "sov_a3": "GIN",
                "adm0name": "Guinea",
                "adm0_a3": "GIN",
                "adm1name": "Conakry",
                "iso_a2": "GN",
                "note": null,
                "latitude": 9.53152284641,
                "longitude": -13.6802350275,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 1494000,
                "pop_min": 1494000,
                "pop_other": 1498020,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 2422465,
                "meganame": "Conakry",
                "ls_name": "Conakry",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 5
            },
            "bbox": [
                -13.682181,
                9.533469,
                -13.682181,
                9.533469
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -13.682181,
                    9.533469
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Cotonou",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Cotonou",
                "adm0cap": 1,
                "capalt": null,
                "capin": "De facto, admin",
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Benin",
                "sov_a3": "BEN",
                "adm0name": "Benin",
                "adm0_a3": "BEN",
                "adm1name": "Ouémé",
                "iso_a2": "BJ",
                "note": null,
                "latitude": 6.40000856417,
                "longitude": 2.51999059918,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 762000,
                "pop_min": 690584,
                "pop_other": 1060640,
                "rank_max": 11,
                "rank_min": 11,
                "geonameid": 2394819,
                "meganame": "Cotonou",
                "ls_name": "Cotonou",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                2.518045,
                6.401954,
                2.518045,
                6.401954
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    2.518045,
                    6.401954
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 1,
                "natscale": 300,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Dakar",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Dakar",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Senegal",
                "sov_a3": "SEN",
                "adm0name": "Senegal",
                "adm0_a3": "SEN",
                "adm1name": "Dakar",
                "iso_a2": "SN",
                "note": null,
                "latitude": 14.715831725,
                "longitude": -17.4731301284,
                "changed": 5,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 2604000,
                "pop_min": 2476400,
                "pop_other": 2470140,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 2253354,
                "meganame": "Dakar",
                "ls_name": "Dakar",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 3
            },
            "bbox": [
                -17.475076,
                14.717778,
                -17.475076,
                14.717778
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -17.475076,
                    14.717778
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 2,
                "natscale": 200,
                "labelrank": 6,
                "featurecla": "Admin-0 capital",
                "name": "Damascus",
                "namepar": null,
                "namealt": "Dimashq",
                "diffascii": 0,
                "nameascii": "Damascus",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Syria",
                "sov_a3": "SYR",
                "adm0name": "Syria",
                "adm0_a3": "SYR",
                "adm1name": "Damascus",
                "iso_a2": "SY",
                "note": null,
                "latitude": 33.5000339956,
                "longitude": 36.299995889,
                "changed": 5,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 2466000,
                "pop_min": 2466000,
                "pop_other": 3344577,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 170654,
                "meganame": "Dimashq",
                "ls_name": "Damascus",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 4.7
            },
            "bbox": [
                36.29805,
                33.50198,
                36.29805,
                33.50198
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    36.29805,
                    33.50198
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 2,
                "natscale": 200,
                "labelrank": 5,
                "featurecla": "Admin-0 capital",
                "name": "Dar es Salaam",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Dar es Salaam",
                "adm0cap": 1,
                "capalt": null,
                "capin": "De facto capita",
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "United Republic of Tanzania",
                "sov_a3": "TZA",
                "adm0name": "Tanzania",
                "adm0_a3": "TZA",
                "adm1name": "Dar-Es-Salaam",
                "iso_a2": "TZ",
                "note": null,
                "latitude": -6.80001259474,
                "longitude": 39.2683418363,
                "changed": 5,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 2930000,
                "pop_min": 2698652,
                "pop_other": 2757835,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 160263,
                "meganame": "Dar es Salaam",
                "ls_name": "Dar es Salaam",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 4
            },
            "bbox": [
                39.266396,
                -6.798067,
                39.266396,
                -6.798067
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    39.266396,
                    -6.798067
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 1,
                "natscale": 300,
                "labelrank": 1,
                "featurecla": "Admin-1 capital",
                "name": "Denver",
                "namepar": null,
                "namealt": "Denver-Aurora",
                "diffascii": 0,
                "nameascii": "Denver",
                "adm0cap": 0,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "United States",
                "sov_a3": "USA",
                "adm0name": "United States of America",
                "adm0_a3": "USA",
                "adm1name": "Colorado",
                "iso_a2": "US",
                "note": null,
                "latitude": 39.7391880484,
                "longitude": -104.984015952,
                "changed": 5,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 2313000,
                "pop_min": 1548599,
                "pop_other": 1521278,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 5419384,
                "meganame": "Denver-Aurora",
                "ls_name": "Denver",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 3.7
            },
            "bbox": [
                -104.985962,
                39.741134,
                -104.985962,
                39.741134
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -104.985962,
                    39.741134
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 2,
                "natscale": 200,
                "labelrank": 2,
                "featurecla": "Admin-0 capital",
                "name": "Dhaka",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Dhaka",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Bangladesh",
                "sov_a3": "BGD",
                "adm0name": "Bangladesh",
                "adm0_a3": "BGD",
                "adm1name": "Dhaka",
                "iso_a2": "BD",
                "note": null,
                "latitude": 23.7230597117,
                "longitude": 90.4085794667,
                "changed": 5,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 12797394,
                "pop_min": 7000940,
                "pop_other": 14995538,
                "rank_max": 14,
                "rank_min": 13,
                "geonameid": 1185241,
                "meganame": "Dhaka",
                "ls_name": "Dhaka",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 4
            },
            "bbox": [
                90.406634,
                23.725006,
                90.406634,
                23.725006
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    90.406634,
                    23.725006
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Dili",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Dili",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "East Timor",
                "sov_a3": "TLS",
                "adm0name": "East Timor",
                "adm0_a3": "TLS",
                "adm1name": "Dili",
                "iso_a2": "TL",
                "note": null,
                "latitude": -8.55938840855,
                "longitude": 125.579455932,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 234331,
                "pop_min": 193563,
                "pop_other": 55154,
                "rank_max": 10,
                "rank_min": 9,
                "geonameid": 1645457,
                "meganame": null,
                "ls_name": "Dili",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                125.579456,
                -8.559388,
                125.579456,
                -8.559388
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    125.579456,
                    -8.559388
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 4,
                "natscale": 50,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Djibouti",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Djibouti",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Djibouti",
                "sov_a3": "DJI",
                "adm0name": "Djibouti",
                "adm0_a3": "DJI",
                "adm1name": "Djibouti",
                "iso_a2": "DJ",
                "note": null,
                "latitude": 11.5950144643,
                "longitude": 43.1480016671,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 923000,
                "pop_min": 604013,
                "pop_other": 335001,
                "rank_max": 11,
                "rank_min": 11,
                "geonameid": 223817,
                "meganame": null,
                "ls_name": "Djibouti",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5.6
            },
            "bbox": [
                43.148002,
                11.595014,
                43.148002,
                11.595014
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    43.148002,
                    11.595014
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 4,
                "natscale": 50,
                "labelrank": 5,
                "featurecla": "Admin-0 capital alt",
                "name": "Dodoma",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Dodoma",
                "adm0cap": 0,
                "capalt": 1,
                "capin": "Offical capital",
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "United Republic of Tanzania",
                "sov_a3": "TZA",
                "adm0name": "Tanzania",
                "adm0_a3": "TZA",
                "adm1name": "Dodoma",
                "iso_a2": "TZ",
                "note": null,
                "latitude": -6.18330605177,
                "longitude": 35.7500036201,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Location adjusted.",
                "pop_max": 218269,
                "pop_min": 180541,
                "pop_other": 0,
                "rank_max": 10,
                "rank_min": 9,
                "geonameid": 160196,
                "meganame": null,
                "ls_name": "Dodoma",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5.6
            },
            "bbox": [
                35.750004,
                -6.183306,
                35.750004,
                -6.183306
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    35.750004,
                    -6.183306
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 4,
                "natscale": 50,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Doha",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Doha",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Qatar",
                "sov_a3": "QAT",
                "adm0name": "Qatar",
                "adm0_a3": "QAT",
                "adm1name": "Ad Dawhah",
                "iso_a2": "QA",
                "note": null,
                "latitude": 25.2865560089,
                "longitude": 51.5329678943,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Location adjusted. Changed scale rank.",
                "pop_max": 1450000,
                "pop_min": 731310,
                "pop_other": 0,
                "rank_max": 12,
                "rank_min": 11,
                "geonameid": 290030,
                "meganame": null,
                "ls_name": "Doha",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 5.6
            },
            "bbox": [
                51.532968,
                25.286556,
                51.532968,
                25.286556
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    51.532968,
                    25.286556
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 1,
                "natscale": 300,
                "labelrank": 8,
                "featurecla": "Admin-1 capital",
                "name": "Dubai",
                "namepar": "Dubayy",
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Dubai",
                "adm0cap": 0,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "United Arab Emirates",
                "sov_a3": "ARE",
                "adm0name": "United Arab Emirates",
                "adm0_a3": "ARE",
                "adm1name": "Dubay",
                "iso_a2": "AE",
                "note": null,
                "latitude": 25.2299961538,
                "longitude": 55.2799743234,
                "changed": 1,
                "namediff": 1,
                "diffnote": "Name changed.",
                "pop_max": 1379000,
                "pop_min": 1137347,
                "pop_other": 1166878,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 292223,
                "meganame": "Dubayy",
                "ls_name": "Dubayy",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 3.7
            },
            "bbox": [
                55.278028,
                25.231942,
                55.278028,
                25.231942
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    55.278028,
                    25.231942
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 2,
                "natscale": 200,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Dublin",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Dublin",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "Ireland",
                "sov_a3": "IRL",
                "adm0name": "Ireland",
                "adm0_a3": "IRL",
                "adm1name": "Dublin",
                "iso_a2": "IE",
                "note": null,
                "latitude": 53.333061136,
                "longitude": -6.24890568178,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 1059000,
                "pop_min": 968976,
                "pop_other": 22478,
                "rank_max": 12,
                "rank_min": 11,
                "geonameid": 2964574,
                "meganame": "Dublin",
                "ls_name": "Dublin2",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 4
            },
            "bbox": [
                -6.250852,
                53.335007,
                -6.250852,
                53.335007
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -6.250852,
                    53.335007
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Dushanbe",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Dushanbe",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Tajikistan",
                "sov_a3": "TJK",
                "adm0name": "Tajikistan",
                "adm0_a3": "TJK",
                "adm1name": "Tadzhikistan Territories",
                "iso_a2": "TJ",
                "note": null,
                "latitude": 38.5600352163,
                "longitude": 68.7738793527,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 1086244,
                "pop_min": 679400,
                "pop_other": 1081361,
                "rank_max": 12,
                "rank_min": 11,
                "geonameid": 1221874,
                "meganame": null,
                "ls_name": "Dushanbe",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                68.773879,
                38.560035,
                68.773879,
                38.560035
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    68.773879,
                    38.560035
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Freetown",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Freetown",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Sierra Leone",
                "sov_a3": "SLE",
                "adm0name": "Sierra Leone",
                "adm0_a3": "SLE",
                "adm1name": "Western",
                "iso_a2": "SL",
                "note": null,
                "latitude": 8.47001141249,
                "longitude": -13.2342157404,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 827000,
                "pop_min": 13768,
                "pop_other": 1074640,
                "rank_max": 11,
                "rank_min": 6,
                "geonameid": 2408770,
                "meganame": "Freetown",
                "ls_name": "Freetown",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                -13.236162,
                8.471957,
                -13.236162,
                8.471957
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -13.236162,
                    8.471957
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 6,
                "natscale": 30,
                "labelrank": 0,
                "featurecla": "Admin-0 capital",
                "name": "Funafuti",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Funafuti",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Tuvalu",
                "sov_a3": "TUV",
                "adm0name": "Tuvalu",
                "adm0_a3": "TUV",
                "adm1name": null,
                "iso_a2": "TV",
                "note": null,
                "latitude": -8.51665199904,
                "longitude": 179.216647094,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Population from GeoNames. Changed scale rank.",
                "pop_max": 4749,
                "pop_min": 4749,
                "pop_other": 0,
                "rank_max": 4,
                "rank_min": 4,
                "geonameid": 2110394,
                "meganame": null,
                "ls_name": "Funafuti",
                "ls_match": 0,
                "checkme": 5,
                "min_zoom": 6
            },
            "bbox": [
                179.216647,
                -8.516652,
                179.216647,
                -8.516652
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    179.216647,
                    -8.516652
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 7,
                "featurecla": "Admin-0 capital",
                "name": "Gaborone",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Gaborone",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Botswana",
                "sov_a3": "BWA",
                "adm0name": "Botswana",
                "adm0_a3": "BWA",
                "adm1name": "South-East",
                "iso_a2": "BW",
                "note": null,
                "latitude": -24.6463134574,
                "longitude": 25.9119477933,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 208411,
                "pop_min": 159243,
                "pop_other": 158896,
                "rank_max": 10,
                "rank_min": 9,
                "geonameid": 933773,
                "meganame": null,
                "ls_name": "Gaborone",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                25.911948,
                -24.646313,
                25.911948,
                -24.646313
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    25.911948,
                    -24.646313
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 1,
                "natscale": 300,
                "labelrank": 7,
                "featurecla": "Admin-1 capital",
                "name": "Geneva",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Geneva",
                "adm0cap": 0,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 0,
                "sov0name": "Switzerland",
                "sov_a3": "CHE",
                "adm0name": "Switzerland",
                "adm0_a3": "CHE",
                "adm1name": "Genève",
                "iso_a2": "CH",
                "note": null,
                "latitude": 46.2100075471,
                "longitude": 6.14002803409,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 1240000,
                "pop_min": 192385,
                "pop_other": 508284,
                "rank_max": 12,
                "rank_min": 9,
                "geonameid": 2660646,
                "meganame": null,
                "ls_name": "Geneva",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 3.7
            },
            "bbox": [
                6.140028,
                46.210008,
                6.140028,
                46.210008
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    6.140028,
                    46.210008
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Georgetown",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Georgetown",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Guyana",
                "sov_a3": "GUY",
                "adm0name": "Guyana",
                "adm0_a3": "GUY",
                "adm1name": "East Berbice-Corentyne",
                "iso_a2": "GY",
                "note": null,
                "latitude": 6.80197369275,
                "longitude": -58.1670286475,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 264350,
                "pop_min": 235017,
                "pop_other": 264350,
                "rank_max": 10,
                "rank_min": 10,
                "geonameid": 3378644,
                "meganame": null,
                "ls_name": "Georgetown1",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 4
            },
            "bbox": [
                -58.167029,
                6.801974,
                -58.167029,
                6.801974
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -58.167029,
                    6.801974
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Guatemala",
                "namepar": null,
                "namealt": "Ciudad de Guatemala (Guatemala City)",
                "diffascii": 0,
                "nameascii": "Guatemala",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Guatemala",
                "sov_a3": "GTM",
                "adm0name": "Guatemala",
                "adm0_a3": "GTM",
                "adm1name": "Guatemala",
                "iso_a2": "GT",
                "note": null,
                "latitude": 14.6211346628,
                "longitude": -90.5269655779,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 1024000,
                "pop_min": 994938,
                "pop_other": 2391150,
                "rank_max": 12,
                "rank_min": 11,
                "geonameid": 3598132,
                "meganame": "Ciudad de Guatemala (Guatemala City)",
                "ls_name": "Guatemala",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                -90.528911,
                14.623081,
                -90.528911,
                14.623081
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -90.528911,
                    14.623081
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 2,
                "natscale": 200,
                "labelrank": 5,
                "featurecla": "Admin-0 capital",
                "name": "Hanoi",
                "namepar": null,
                "namealt": "H",
                "diffascii": 0,
                "nameascii": "Hanoi",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Vietnam",
                "sov_a3": "VNM",
                "adm0name": "Vietnam",
                "adm0_a3": "VNM",
                "adm1name": "Thái Nguyên",
                "iso_a2": "VN",
                "note": null,
                "latitude": 21.0333272491,
                "longitude": 105.8500142,
                "changed": 5,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 4378000,
                "pop_min": 1431270,
                "pop_other": 5466347,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 1581130,
                "meganame": "Hh Noi",
                "ls_name": "Hanoi",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 4
            },
            "bbox": [
                105.848068,
                21.035273,
                105.848068,
                21.035273
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    105.848068,
                    21.035273
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 6,
                "featurecla": "Admin-0 capital",
                "name": "Harare",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Harare",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Zimbabwe",
                "sov_a3": "ZWE",
                "adm0name": "Zimbabwe",
                "adm0_a3": "ZWE",
                "adm1name": "Harare",
                "iso_a2": "ZW",
                "note": null,
                "latitude": -17.8177896944,
                "longitude": 31.0447094307,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 1572000,
                "pop_min": 1542813,
                "pop_other": 1831877,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 890299,
                "meganame": "Harare",
                "ls_name": "Harare",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 4
            },
            "bbox": [
                31.042764,
                -17.815844,
                31.042764,
                -17.815844
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    31.042764,
                    -17.815844
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 0,
                "featurecla": "Admin-0 capital",
                "name": "Hargeysa",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Hargeysa",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Somaliland",
                "sov_a3": "SOL",
                "adm0name": "Somaliland",
                "adm0_a3": "SOL",
                "adm1name": null,
                "iso_a2": "-99",
                "note": null,
                "latitude": 9.56002239882,
                "longitude": 44.0653100167,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 477876,
                "pop_min": 247018,
                "pop_other": 247018,
                "rank_max": 10,
                "rank_min": 10,
                "geonameid": 57289,
                "meganame": null,
                "ls_name": "Hargeysa",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 5
            },
            "bbox": [
                44.06531,
                9.560022,
                44.06531,
                9.560022
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    44.06531,
                    9.560022
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 2,
                "natscale": 200,
                "labelrank": 6,
                "featurecla": "Admin-0 capital",
                "name": "Havana",
                "namepar": null,
                "namealt": "La Habana",
                "diffascii": 0,
                "nameascii": "Havana",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Cuba",
                "sov_a3": "CUB",
                "adm0name": "Cuba",
                "adm0_a3": "CUB",
                "adm1name": "Ciudad de la Habana",
                "iso_a2": "CU",
                "note": null,
                "latitude": 23.1319588409,
                "longitude": -82.3641821713,
                "changed": 5,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 2174000,
                "pop_min": 1990917,
                "pop_other": 1930305,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 3553478,
                "meganame": "La Habana",
                "ls_name": "Havana",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 4
            },
            "bbox": [
                -82.366128,
                23.133905,
                -82.366128,
                23.133905
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -82.366128,
                    23.133905
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 2,
                "natscale": 200,
                "labelrank": 7,
                "featurecla": "Admin-0 capital",
                "name": "Helsinki",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Helsinki",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "Finland",
                "sov_a3": "FIN",
                "adm0name": "Finland",
                "adm0_a3": "FIN",
                "adm1name": "Southern Finland",
                "iso_a2": "FI",
                "note": null,
                "latitude": 60.175563374,
                "longitude": 24.9341263415,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 1115000,
                "pop_min": 558457,
                "pop_other": 762958,
                "rank_max": 12,
                "rank_min": 11,
                "geonameid": 658225,
                "meganame": "Helsinki",
                "ls_name": "Helsinki",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 4
            },
            "bbox": [
                24.93218,
                60.177509,
                24.93218,
                60.177509
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    24.93218,
                    60.177509
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 0,
                "natscale": 600,
                "labelrank": 0,
                "featurecla": "Admin-0 region capital",
                "name": "Hong Kong",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Hong Kong",
                "adm0cap": 0,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "China",
                "sov_a3": "CHN",
                "adm0name": "Hong Kong S.A.R.",
                "adm0_a3": "HKG",
                "adm1name": null,
                "iso_a2": "HK",
                "note": null,
                "latitude": 22.304980895,
                "longitude": 114.185009317,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 7206000,
                "pop_min": 4551579,
                "pop_other": 4549026,
                "rank_max": 13,
                "rank_min": 12,
                "geonameid": 1819729,
                "meganame": "Hong Kong",
                "ls_name": "Hong Kong",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 3
            },
            "bbox": [
                114.183063,
                22.306927,
                114.183063,
                22.306927
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.183063,
                    22.306927
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Honiara",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Honiara",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Solomon Islands",
                "sov_a3": "SLB",
                "adm0name": "Solomon Islands",
                "adm0_a3": "SLB",
                "adm1name": "Guadalcanal",
                "iso_a2": "SB",
                "note": null,
                "latitude": -9.43799429509,
                "longitude": 159.949765734,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 76328,
                "pop_min": 56298,
                "pop_other": 76328,
                "rank_max": 8,
                "rank_min": 8,
                "geonameid": 2108502,
                "meganame": null,
                "ls_name": "Honiara",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                159.949766,
                -9.437994,
                159.949766,
                -9.437994
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    159.949766,
                    -9.437994
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 1,
                "natscale": 300,
                "labelrank": 1,
                "featurecla": "Populated place",
                "name": "Houston",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Houston",
                "adm0cap": 0,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "United States",
                "sov_a3": "USA",
                "adm0name": "United States of America",
                "adm0_a3": "USA",
                "adm1name": "Texas",
                "iso_a2": "US",
                "note": null,
                "latitude": 29.8199743846,
                "longitude": -95.3399792905,
                "changed": 5,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 4459000,
                "pop_min": 3647574,
                "pop_other": 3607616,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 4699066,
                "meganame": "Houston",
                "ls_name": "Houston",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 3
            },
            "bbox": [
                -95.341925,
                29.82192,
                -95.341925,
                29.82192
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -95.341925,
                    29.82192
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 2,
                "featurecla": "Admin-0 capital",
                "name": "Islamabad",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Islamabad",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Pakistan",
                "sov_a3": "PAK",
                "adm0name": "Pakistan",
                "adm0_a3": "PAK",
                "adm1name": "F.C.T.",
                "iso_a2": "PK",
                "note": null,
                "latitude": 33.6999959503,
                "longitude": 73.1666344797,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 780000,
                "pop_min": 601600,
                "pop_other": 893673,
                "rank_max": 11,
                "rank_min": 11,
                "geonameid": 1176615,
                "meganame": "Islamabad",
                "ls_name": "Islamabad",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                73.164689,
                33.701942,
                73.164689,
                33.701942
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    73.164689,
                    33.701942
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 0,
                "natscale": 600,
                "labelrank": 5,
                "featurecla": "Admin-1 capital",
                "name": "Istanbul",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Istanbul",
                "adm0cap": 0,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "Turkey",
                "sov_a3": "TUR",
                "adm0name": "Turkey",
                "adm0_a3": "TUR",
                "adm1name": "Istanbul",
                "iso_a2": "TR",
                "note": null,
                "latitude": 41.1049961538,
                "longitude": 29.0100015856,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 10061000,
                "pop_min": 9945610,
                "pop_other": 9651488,
                "rank_max": 14,
                "rank_min": 13,
                "geonameid": 745044,
                "meganame": "Istanbul",
                "ls_name": "Istanbul",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 3
            },
            "bbox": [
                29.008056,
                41.106942,
                29.008056,
                41.106942
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    29.008056,
                    41.106942
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 0,
                "natscale": 600,
                "labelrank": 1,
                "featurecla": "Admin-0 capital",
                "name": "Jakarta",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Jakarta",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "Indonesia",
                "sov_a3": "IDN",
                "adm0name": "Indonesia",
                "adm0_a3": "IDN",
                "adm1name": "Jakarta Raya",
                "iso_a2": "ID",
                "note": null,
                "latitude": -6.17441770541,
                "longitude": 106.829437621,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 9125000,
                "pop_min": 8540121,
                "pop_other": 9129613,
                "rank_max": 13,
                "rank_min": 13,
                "geonameid": 1642911,
                "meganame": "Jakarta",
                "ls_name": "Jakarta",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 2.1
            },
            "bbox": [
                106.827492,
                -6.172472,
                106.827492,
                -6.172472
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    106.827492,
                    -6.172472
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 0,
                "featurecla": "Admin-0 capital",
                "name": "Jerusalem",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Jerusalem",
                "adm0cap": 1,
                "capalt": null,
                "capin": "De facto capita",
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Israel",
                "sov_a3": "IS1",
                "adm0name": "Israel",
                "adm0_a3": "ISR",
                "adm1name": "Jerusalem",
                "iso_a2": "IL",
                "note": null,
                "latitude": 31.7784078156,
                "longitude": 35.2066259346,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 1029300,
                "pop_min": 801000,
                "pop_other": 1072567,
                "rank_max": 12,
                "rank_min": 11,
                "geonameid": 281184,
                "meganame": null,
                "ls_name": "Jerusalem",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 3.7
            },
            "bbox": [
                35.206626,
                31.778408,
                35.206626,
                31.778408
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    35.206626,
                    31.778408
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 1,
                "natscale": 300,
                "labelrank": 3,
                "featurecla": "Admin-0 capital",
                "name": "Johannesburg",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Johannesburg",
                "adm0cap": 0,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "South Africa",
                "sov_a3": "ZAF",
                "adm0name": "South Africa",
                "adm0_a3": "ZAF",
                "adm1name": "Gauteng",
                "iso_a2": "ZA",
                "note": null,
                "latitude": -26.17004474,
                "longitude": 28.0300097236,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Changed feature class.",
                "pop_max": 3435000,
                "pop_min": 2026469,
                "pop_other": 3852246,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 993800,
                "meganame": "Johannesburg",
                "ls_name": "Johannesburg",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 3
            },
            "bbox": [
                28.028064,
                -26.168099,
                28.028064,
                -26.168099
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    28.028064,
                    -26.168099
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 4,
                "natscale": 50,
                "labelrank": 5,
                "featurecla": "Admin-0 capital",
                "name": "Juba",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Juba",
                "adm0cap": 0,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "South Sudan",
                "sov_a3": "SSD",
                "adm0name": "South Sudan",
                "adm0_a3": "SSD",
                "adm1name": "Central Equatoria",
                "iso_a2": "SS",
                "note": null,
                "latitude": 4.82997519828,
                "longitude": 31.5800255928,
                "changed": 20,
                "namediff": 0,
                "diffnote": "Changed country.",
                "pop_max": 111975,
                "pop_min": 111975,
                "pop_other": 111975,
                "rank_max": 9,
                "rank_min": 9,
                "geonameid": 373303,
                "meganame": null,
                "ls_name": "Juba",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5.1
            },
            "bbox": [
                31.580026,
                4.829975,
                31.580026,
                4.829975
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    31.580026,
                    4.829975
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 1,
                "natscale": 300,
                "labelrank": 5,
                "featurecla": "Admin-0 capital",
                "name": "Kabul",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Kabul",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Afghanistan",
                "sov_a3": "AFG",
                "adm0name": "Afghanistan",
                "adm0_a3": "AFG",
                "adm1name": "Kabul",
                "iso_a2": "AF",
                "note": null,
                "latitude": 34.5166902863,
                "longitude": 69.1832600493,
                "changed": 5,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 3277000,
                "pop_min": 3043532,
                "pop_other": 3475519,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 1138958,
                "meganame": "Kabul",
                "ls_name": "Kabul",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 3.7
            },
            "bbox": [
                69.181314,
                34.518636,
                69.181314,
                34.518636
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    69.181314,
                    34.518636
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 5,
                "featurecla": "Admin-0 capital",
                "name": "Kampala",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Kampala",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Uganda",
                "sov_a3": "UGA",
                "adm0name": "Uganda",
                "adm0_a3": "UGA",
                "adm1name": "Kampala",
                "iso_a2": "UG",
                "note": null,
                "latitude": 0.31665895477,
                "longitude": 32.5833235257,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 1420000,
                "pop_min": 1353189,
                "pop_other": 2153702,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 232422,
                "meganame": "Kampala",
                "ls_name": "Kampala",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                32.581378,
                0.318605,
                32.581378,
                0.318605
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    32.581378,
                    0.318605
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 6,
                "featurecla": "Admin-0 capital",
                "name": "Kathmandu",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Kathmandu",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Nepal",
                "sov_a3": "NPL",
                "adm0name": "Nepal",
                "adm0_a3": "NPL",
                "adm1name": "Bhaktapur",
                "iso_a2": "NP",
                "note": null,
                "latitude": 27.7166919139,
                "longitude": 85.3166422108,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 895000,
                "pop_min": 895000,
                "pop_other": 1099610,
                "rank_max": 11,
                "rank_min": 11,
                "geonameid": 1283240,
                "meganame": "Kathmandu",
                "ls_name": "Kathmandu",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                85.314696,
                27.718638,
                85.314696,
                27.718638
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    85.314696,
                    27.718638
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 2,
                "natscale": 200,
                "labelrank": 5,
                "featurecla": "Admin-0 capital",
                "name": "Khartoum",
                "namepar": null,
                "namealt": "Al-Khartum",
                "diffascii": 0,
                "nameascii": "Khartoum",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Sudan",
                "sov_a3": "SDN",
                "adm0name": "Sudan",
                "adm0_a3": "SDN",
                "adm1name": "Khartoum",
                "iso_a2": "SD",
                "note": null,
                "latitude": 15.5880782257,
                "longitude": 32.5341792386,
                "changed": 5,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 4754000,
                "pop_min": 1974647,
                "pop_other": 2325931,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 379252,
                "meganame": "Al-Khartum",
                "ls_name": "Khartoum",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 4
            },
            "bbox": [
                32.532233,
                15.590024,
                32.532233,
                15.590024
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    32.532233,
                    15.590024
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 1,
                "natscale": 300,
                "labelrank": 5,
                "featurecla": "Admin-0 capital",
                "name": "Kiev",
                "namepar": null,
                "namealt": "Kyiv",
                "diffascii": 0,
                "nameascii": "Kiev",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Ukraine",
                "sov_a3": "UKR",
                "adm0name": "Ukraine",
                "adm0_a3": "UKR",
                "adm1name": "Kiev",
                "iso_a2": "UA",
                "note": null,
                "latitude": 50.433367329,
                "longitude": 30.5166279691,
                "changed": 5,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 2709000,
                "pop_min": 1662508,
                "pop_other": 1611692,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 703448,
                "meganame": "Kyiv",
                "ls_name": "Kiev",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 3.7
            },
            "bbox": [
                30.514682,
                50.435313,
                30.514682,
                50.435313
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    30.514682,
                    50.435313
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 4,
                "natscale": 50,
                "labelrank": 0,
                "featurecla": "Admin-0 capital",
                "name": "Kigali",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Kigali",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Rwanda",
                "sov_a3": "RWA",
                "adm0name": "Rwanda",
                "adm0_a3": "RWA",
                "adm1name": "Kigali City",
                "iso_a2": "RW",
                "note": null,
                "latitude": -1.95359006868,
                "longitude": 30.0605317777,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 860000,
                "pop_min": 745261,
                "pop_other": 1152904,
                "rank_max": 11,
                "rank_min": 11,
                "geonameid": 202061,
                "meganame": "Kigali",
                "ls_name": "Kigali",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5.1
            },
            "bbox": [
                30.058586,
                -1.951644,
                30.058586,
                -1.951644
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    30.058586,
                    -1.951644
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Kingston",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Kingston",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Jamaica",
                "sov_a3": "JAM",
                "adm0name": "Jamaica",
                "adm0_a3": "JAM",
                "adm1name": "Kingston",
                "iso_a2": "JM",
                "note": null,
                "latitude": 17.9770766238,
                "longitude": -76.7674337137,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Location adjusted.",
                "pop_max": 937700,
                "pop_min": 664973,
                "pop_other": 18171,
                "rank_max": 11,
                "rank_min": 11,
                "geonameid": 3489854,
                "meganame": null,
                "ls_name": "Kingston1",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 5
            },
            "bbox": [
                -76.767434,
                17.977077,
                -76.767434,
                17.977077
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -76.767434,
                    17.977077
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 4,
                "natscale": 50,
                "labelrank": 0,
                "featurecla": "Admin-0 capital",
                "name": "Kingstown",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Kingstown",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Saint Vincent and the Grenadines",
                "sov_a3": "VCT",
                "adm0name": "Saint Vincent and the Grenadines",
                "adm0_a3": "VCT",
                "adm1name": null,
                "iso_a2": "VC",
                "note": null,
                "latitude": 13.1482788279,
                "longitude": -61.2120624203,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Location adjusted. Changed scale rank.",
                "pop_max": 49485,
                "pop_min": 24518,
                "pop_other": 0,
                "rank_max": 7,
                "rank_min": 7,
                "geonameid": 4359981,
                "meganame": null,
                "ls_name": "Kingstown",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 5.1
            },
            "bbox": [
                -61.212062,
                13.148279,
                -61.212062,
                13.148279
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -61.212062,
                    13.148279
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 1,
                "natscale": 300,
                "labelrank": 3,
                "featurecla": "Admin-0 capital",
                "name": "Kinshasa",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Kinshasa",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Congo (Kinshasa)",
                "sov_a3": "COD",
                "adm0name": "Congo (Kinshasa)",
                "adm0_a3": "COD",
                "adm1name": "Kinshasa City",
                "iso_a2": "CD",
                "note": null,
                "latitude": -4.32972410189,
                "longitude": 15.3149718818,
                "changed": 5,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 7843000,
                "pop_min": 5565703,
                "pop_other": 4738154,
                "rank_max": 13,
                "rank_min": 13,
                "geonameid": 2314302,
                "meganame": "Kinshasa",
                "ls_name": "Kinshasa",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 3
            },
            "bbox": [
                15.313026,
                -4.327778,
                15.313026,
                -4.327778
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    15.313026,
                    -4.327778
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 2,
                "natscale": 200,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "København",
                "namepar": "Copenhagen",
                "namealt": null,
                "diffascii": 1,
                "nameascii": "Kobenhavn",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "Denmark",
                "sov_a3": "DNK",
                "adm0name": "Denmark",
                "adm0_a3": "DNK",
                "adm1name": "Hovedstaden",
                "iso_a2": "DK",
                "note": null,
                "latitude": 55.6785641904,
                "longitude": 12.5634857473,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 1085000,
                "pop_min": 1085000,
                "pop_other": 1038288,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 2618425,
                "meganame": "K",
                "ls_name": "Copenhagen",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 4
            },
            "bbox": [
                12.56154,
                55.68051,
                12.56154,
                55.68051
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    12.56154,
                    55.68051
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 0,
                "natscale": 600,
                "labelrank": 1,
                "featurecla": "Admin-1 capital",
                "name": "Kolkata",
                "namepar": "Calcutta",
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Kolkata",
                "adm0cap": 0,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "India",
                "sov_a3": "IND",
                "adm0name": "India",
                "adm0_a3": "IND",
                "adm1name": "West Bengal",
                "iso_a2": "IN",
                "note": null,
                "latitude": 22.4949692983,
                "longitude": 88.3246756581,
                "changed": 4,
                "namediff": 1,
                "diffnote": "Name changed. Changed scale rank.",
                "pop_max": 14787000,
                "pop_min": 4631392,
                "pop_other": 7783716,
                "rank_max": 14,
                "rank_min": 12,
                "geonameid": 1275004,
                "meganame": "Kolkata",
                "ls_name": "Calcutta",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 3.7
            },
            "bbox": [
                88.32273,
                22.496915,
                88.32273,
                22.496915
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    88.32273,
                    22.496915
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 2,
                "natscale": 200,
                "labelrank": 6,
                "featurecla": "Admin-0 capital",
                "name": "Kuala Lumpur",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Kuala Lumpur",
                "adm0cap": 1,
                "capalt": null,
                "capin": "Official and le",
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "Malaysia",
                "sov_a3": "MYS",
                "adm0name": "Malaysia",
                "adm0_a3": "MYS",
                "adm1name": "Selangor",
                "iso_a2": "MY",
                "note": null,
                "latitude": 3.1666658721,
                "longitude": 101.699983275,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 1448000,
                "pop_min": 1448000,
                "pop_other": 2667990,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 1735161,
                "meganame": "Kuala Lumpur",
                "ls_name": "Kuala Lumpur",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 4
            },
            "bbox": [
                101.698037,
                3.168612,
                101.698037,
                3.168612
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    101.698037,
                    3.168612
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 2,
                "natscale": 200,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Kuwait",
                "namepar": null,
                "namealt": "Al Kuwayt|Kuwait City",
                "diffascii": 0,
                "nameascii": "Kuwait",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Kuwait",
                "sov_a3": "KWT",
                "adm0name": "Kuwait",
                "adm0_a3": "KWT",
                "adm1name": "Al Kuwayt",
                "iso_a2": "KW",
                "note": null,
                "latitude": 29.36971763,
                "longitude": 47.9783011462,
                "changed": 5,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 2063000,
                "pop_min": 60064,
                "pop_other": 1682968,
                "rank_max": 12,
                "rank_min": 8,
                "geonameid": 285787,
                "meganame": "Al Kuwayt (Kuwait City)",
                "ls_name": "Kuwait",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 4
            },
            "bbox": [
                47.976355,
                29.371663,
                47.976355,
                29.371663
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    47.976355,
                    29.371663
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 4,
                "natscale": 50,
                "labelrank": 2,
                "featurecla": "Admin-0 capital alt",
                "name": "Kyoto",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Kyoto",
                "adm0cap": 0,
                "capalt": 1,
                "capin": "Official capita",
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Japan",
                "sov_a3": "JPN",
                "adm0name": "Japan",
                "adm0_a3": "JPN",
                "adm1name": "Kyoto",
                "iso_a2": "JP",
                "note": null,
                "latitude": 35.0299922882,
                "longitude": 135.749997924,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 1805000,
                "pop_min": 1459640,
                "pop_other": 1827367,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 1857910,
                "meganame": "Kyoto",
                "ls_name": "Kyoto",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5.1
            },
            "bbox": [
                135.748052,
                35.031938,
                135.748052,
                35.031938
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    135.748052,
                    35.031938
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 6,
                "featurecla": "Admin-0 capital",
                "name": "La Paz",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "La Paz",
                "adm0cap": 1,
                "capalt": null,
                "capin": "Administrative",
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Bolivia",
                "sov_a3": "BOL",
                "adm0name": "Bolivia",
                "adm0_a3": "BOL",
                "adm1name": "La Paz",
                "iso_a2": "BO",
                "note": null,
                "latitude": -16.4979736137,
                "longitude": -68.1499851905,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 1590000,
                "pop_min": 812799,
                "pop_other": 4400,
                "rank_max": 12,
                "rank_min": 11,
                "geonameid": 3911925,
                "meganame": "La Paz",
                "ls_name": "La Paz3",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 4
            },
            "bbox": [
                -68.151931,
                -16.496028,
                -68.151931,
                -16.496028
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -68.151931,
                    -16.496028
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 4,
                "natscale": 50,
                "labelrank": 5,
                "featurecla": "Admin-0 capital alt",
                "name": "Laayoune",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Laayoune",
                "adm0cap": 0,
                "capalt": 1,
                "capin": "Claimed as capi",
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Morocco",
                "sov_a3": "MAR",
                "adm0name": "Morocco",
                "adm0_a3": "MAR",
                "adm1name": "Laâyoune - Boujdour - Sakia El Hamra",
                "iso_a2": "MA",
                "note": null,
                "latitude": 27.1499823191,
                "longitude": -13.2000059422,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 188084,
                "pop_min": 176365,
                "pop_other": 176365,
                "rank_max": 9,
                "rank_min": 9,
                "geonameid": 2462881,
                "meganame": null,
                "ls_name": "Laayoune",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5.6
            },
            "bbox": [
                -13.200006,
                27.149982,
                -13.200006,
                27.149982
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -13.200006,
                    27.149982
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 0,
                "natscale": 600,
                "labelrank": 2,
                "featurecla": "Admin-0 capital alt",
                "name": "Lagos",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Lagos",
                "adm0cap": 0,
                "capalt": 1,
                "capin": "Former capital",
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "Nigeria",
                "sov_a3": "NGA",
                "adm0name": "Nigeria",
                "adm0_a3": "NGA",
                "adm1name": "Lagos",
                "iso_a2": "NG",
                "note": null,
                "latitude": 6.44326165348,
                "longitude": 3.39153107121,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Location adjusted. Changed scale rank.",
                "pop_max": 9466000,
                "pop_min": 1536,
                "pop_other": 6567892,
                "rank_max": 13,
                "rank_min": 3,
                "geonameid": 2332459,
                "meganame": "Lagos",
                "ls_name": "Lagos",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 2
            },
            "bbox": [
                3.389585,
                6.445208,
                3.389585,
                6.445208
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3.389585,
                    6.445208
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 7,
                "featurecla": "Admin-0 capital",
                "name": "Libreville",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Libreville",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Gabon",
                "sov_a3": "GAB",
                "adm0name": "Gabon",
                "adm0_a3": "GAB",
                "adm1name": "Estuaire",
                "iso_a2": "GA",
                "note": null,
                "latitude": 0.38538860972,
                "longitude": 9.45796504582,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 578156,
                "pop_min": 483355,
                "pop_other": 483522,
                "rank_max": 11,
                "rank_min": 10,
                "geonameid": 2399697,
                "meganame": null,
                "ls_name": "Libreville",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                9.457965,
                0.385389,
                9.457965,
                0.385389
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    9.457965,
                    0.385389
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Lilongwe",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Lilongwe",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Malawi",
                "sov_a3": "MWI",
                "adm0name": "Malawi",
                "adm0_a3": "MWI",
                "adm1name": "Lilongwe",
                "iso_a2": "MW",
                "note": null,
                "latitude": -13.9832950655,
                "longitude": 33.78330196,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 646750,
                "pop_min": 646750,
                "pop_other": 1061388,
                "rank_max": 11,
                "rank_min": 11,
                "geonameid": 927967,
                "meganame": null,
                "ls_name": "Lilongwe",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                33.783302,
                -13.983295,
                33.783302,
                -13.983295
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    33.783302,
                    -13.983295
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 1,
                "natscale": 300,
                "labelrank": 5,
                "featurecla": "Admin-0 capital",
                "name": "Lima",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Lima",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Peru",
                "sov_a3": "PER",
                "adm0name": "Peru",
                "adm0_a3": "PER",
                "adm1name": "Lima",
                "iso_a2": "PE",
                "note": null,
                "latitude": -12.0480126761,
                "longitude": -77.0500620948,
                "changed": 5,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 8012000,
                "pop_min": 6758234,
                "pop_other": 6068380,
                "rank_max": 13,
                "rank_min": 13,
                "geonameid": 3936456,
                "meganame": "Lima",
                "ls_name": "Lima2",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 3
            },
            "bbox": [
                -77.052008,
                -12.046067,
                -77.052008,
                -12.046067
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -77.052008,
                    -12.046067
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 2,
                "natscale": 200,
                "labelrank": 6,
                "featurecla": "Admin-0 capital",
                "name": "Lisbon",
                "namepar": "Lisboa",
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Lisbon",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "Portugal",
                "sov_a3": "PRT",
                "adm0name": "Portugal",
                "adm0_a3": "PRT",
                "adm1name": "Lisboa",
                "iso_a2": "PT",
                "note": null,
                "latitude": 38.7227228779,
                "longitude": -9.14486630549,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Location adjusted. Changed scale rank.",
                "pop_max": 2812000,
                "pop_min": 517802,
                "pop_other": 1795582,
                "rank_max": 12,
                "rank_min": 11,
                "geonameid": 2267057,
                "meganame": "Lisboa",
                "ls_name": "Lisbon",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 4
            },
            "bbox": [
                -9.146812,
                38.724669,
                -9.146812,
                38.724669
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -9.146812,
                    38.724669
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 4,
                "natscale": 50,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Ljubljana",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Ljubljana",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Slovenia",
                "sov_a3": "SVN",
                "adm0name": "Slovenia",
                "adm0_a3": "SVN",
                "adm1name": "Osrednjeslovenska",
                "iso_a2": "SI",
                "note": null,
                "latitude": 46.0552883088,
                "longitude": 14.5149690335,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 314807,
                "pop_min": 255115,
                "pop_other": 256316,
                "rank_max": 10,
                "rank_min": 10,
                "geonameid": 3196359,
                "meganame": null,
                "ls_name": "Ljubljana",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5.6
            },
            "bbox": [
                14.514969,
                46.055288,
                14.514969,
                46.055288
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    14.514969,
                    46.055288
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 6,
                "natscale": 30,
                "labelrank": 8,
                "featurecla": "Admin-0 capital alt",
                "name": "Lobamba",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Lobamba",
                "adm0cap": 0,
                "capalt": 1,
                "capin": "Legislative and",
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Swaziland",
                "sov_a3": "SWZ",
                "adm0name": "Swaziland",
                "adm0_a3": "SWZ",
                "adm1name": "Manzini",
                "iso_a2": "SZ",
                "note": null,
                "latitude": -26.4666674614,
                "longitude": 31.1999971097,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 9782,
                "pop_min": 4557,
                "pop_other": 0,
                "rank_max": 5,
                "rank_min": 4,
                "geonameid": 935048,
                "meganame": null,
                "ls_name": "Lobamba",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 6
            },
            "bbox": [
                31.199997,
                -26.466667,
                31.199997,
                -26.466667
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    31.199997,
                    -26.466667
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Lomé",
                "namepar": null,
                "namealt": "Lome",
                "diffascii": 0,
                "nameascii": "Lome",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Togo",
                "sov_a3": "TGO",
                "adm0name": "Togo",
                "adm0_a3": "TGO",
                "adm1name": "Maritime",
                "iso_a2": "TG",
                "note": null,
                "latitude": 6.13193707166,
                "longitude": 1.22275711936,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 1452000,
                "pop_min": 749700,
                "pop_other": 1256715,
                "rank_max": 12,
                "rank_min": 11,
                "geonameid": 2365267,
                "meganame": "Lomi",
                "ls_name": "Lome",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                1.220811,
                6.133883,
                1.220811,
                6.133883
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    1.220811,
                    6.133883
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 0,
                "natscale": 600,
                "labelrank": 5,
                "featurecla": "Admin-0 capital",
                "name": "London",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "London",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "United Kingdom",
                "sov_a3": "GBR",
                "adm0name": "United Kingdom",
                "adm0_a3": "GBR",
                "adm1name": "Westminster",
                "iso_a2": "GB",
                "note": null,
                "latitude": 51.4999947297,
                "longitude": -0.11672184386,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 8567000,
                "pop_min": 7421209,
                "pop_other": 326670,
                "rank_max": 13,
                "rank_min": 13,
                "geonameid": 2643743,
                "meganame": "London",
                "ls_name": "London2",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 1.7
            },
            "bbox": [
                -0.118668,
                51.501941,
                -0.118668,
                51.501941
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -0.118668,
                    51.501941
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 0,
                "natscale": 600,
                "labelrank": 1,
                "featurecla": "Populated place",
                "name": "Los Angeles",
                "namepar": null,
                "namealt": "Los Angeles-Long Beach-Santa Ana",
                "diffascii": 0,
                "nameascii": "Los Angeles",
                "adm0cap": 0,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "United States",
                "sov_a3": "USA",
                "adm0name": "United States of America",
                "adm0_a3": "USA",
                "adm1name": "California",
                "iso_a2": "US",
                "note": null,
                "latitude": 33.9899782502,
                "longitude": -118.179980511,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 12500000,
                "pop_min": 3694820,
                "pop_other": 142265,
                "rank_max": 14,
                "rank_min": 12,
                "geonameid": 5368361,
                "meganame": "Los Angeles-Long Beach-Santa Ana",
                "ls_name": "Los Angeles1",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 2
            },
            "bbox": [
                -118.181926,
                33.991924,
                -118.181926,
                33.991924
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -118.181926,
                    33.991924
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 2,
                "natscale": 200,
                "labelrank": 6,
                "featurecla": "Admin-0 capital",
                "name": "Luanda",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Luanda",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Angola",
                "sov_a3": "AGO",
                "adm0name": "Angola",
                "adm0_a3": "AGO",
                "adm1name": "Luanda",
                "iso_a2": "AO",
                "note": null,
                "latitude": -8.83828611363,
                "longitude": 13.2344270413,
                "changed": 5,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 5172900,
                "pop_min": 1951272,
                "pop_other": 1951272,
                "rank_max": 13,
                "rank_min": 12,
                "geonameid": 2240449,
                "meganame": "Luanda",
                "ls_name": "Luanda",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 4
            },
            "bbox": [
                13.232481,
                -8.83634,
                13.232481,
                -8.83634
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    13.232481,
                    -8.83634
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 6,
                "featurecla": "Admin-0 capital",
                "name": "Lusaka",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Lusaka",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Zambia",
                "sov_a3": "ZMB",
                "adm0name": "Zambia",
                "adm0_a3": "ZMB",
                "adm1name": "Lusaka",
                "iso_a2": "ZM",
                "note": null,
                "latitude": -15.4166442679,
                "longitude": 28.2833275947,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 1328000,
                "pop_min": 1267440,
                "pop_other": 1240558,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 909137,
                "meganame": "Lusaka",
                "ls_name": "Lusaka",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 4
            },
            "bbox": [
                28.281382,
                -15.414698,
                28.281382,
                -15.414698
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    28.281382,
                    -15.414698
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 6,
                "natscale": 30,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Luxembourg",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Luxembourg",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Luxembourg",
                "sov_a3": "LUX",
                "adm0name": "Luxembourg",
                "adm0_a3": "LUX",
                "adm1name": "Luxembourg",
                "iso_a2": "LU",
                "note": null,
                "latitude": 49.6116603791,
                "longitude": 6.13000280623,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 107260,
                "pop_min": 76684,
                "pop_other": 106219,
                "rank_max": 9,
                "rank_min": 8,
                "geonameid": 2960316,
                "meganame": null,
                "ls_name": "Luxembourg",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 6
            },
            "bbox": [
                6.130003,
                49.61166,
                6.130003,
                49.61166
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    6.130003,
                    49.61166
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 1,
                "natscale": 300,
                "labelrank": 3,
                "featurecla": "Admin-0 capital",
                "name": "Madrid",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Madrid",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "Kingdom of Spain",
                "sov_a3": "ESP",
                "adm0name": "Spain",
                "adm0_a3": "ESP",
                "adm1name": "Comunidad de Madrid",
                "iso_a2": "ES",
                "note": null,
                "latitude": 40.4000262645,
                "longitude": -3.683351686,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 5567000,
                "pop_min": 50437,
                "pop_other": 3673427,
                "rank_max": 13,
                "rank_min": 8,
                "geonameid": 3117735,
                "meganame": "Madrid",
                "ls_name": "Madrid",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 3
            },
            "bbox": [
                -3.685298,
                40.401972,
                -3.685298,
                40.401972
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -3.685298,
                    40.401972
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 6,
                "natscale": 30,
                "labelrank": 0,
                "featurecla": "Admin-0 capital",
                "name": "Majuro",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Majuro",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Marshall Islands",
                "sov_a3": "MHL",
                "adm0name": "Marshall Islands",
                "adm0_a3": "MHL",
                "adm1name": null,
                "iso_a2": "MH",
                "note": null,
                "latitude": 7.10300431122,
                "longitude": 171.380000176,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 25400,
                "pop_min": 20500,
                "pop_other": 0,
                "rank_max": 7,
                "rank_min": 7,
                "geonameid": 2113779,
                "meganame": null,
                "ls_name": "Majuro",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 6
            },
            "bbox": [
                171.38,
                7.103004,
                171.38,
                7.103004
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    171.38,
                    7.103004
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Malabo",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Malabo",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Equatorial Guinea",
                "sov_a3": "GNQ",
                "adm0name": "Equatorial Guinea",
                "adm0_a3": "GNQ",
                "adm1name": "Bioko Norte",
                "iso_a2": "GQ",
                "note": null,
                "latitude": 3.75001527803,
                "longitude": 8.78327754582,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Location adjusted.",
                "pop_max": 155963,
                "pop_min": 155963,
                "pop_other": 0,
                "rank_max": 9,
                "rank_min": 9,
                "geonameid": 2309527,
                "meganame": null,
                "ls_name": "Malabo",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                8.783278,
                3.750015,
                8.783278,
                3.750015
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    8.783278,
                    3.750015
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 0,
                "featurecla": "Admin-0 capital",
                "name": "Malé",
                "namepar": null,
                "namealt": null,
                "diffascii": 1,
                "nameascii": "Male",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Maldives",
                "sov_a3": "MDV",
                "adm0name": "Maldives",
                "adm0_a3": "MDV",
                "adm1name": null,
                "iso_a2": "MV",
                "note": null,
                "latitude": 4.16670818981,
                "longitude": 73.499947468,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 112927,
                "pop_min": 103693,
                "pop_other": 0,
                "rank_max": 9,
                "rank_min": 9,
                "geonameid": 3174186,
                "meganame": null,
                "ls_name": "Male",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 5
            },
            "bbox": [
                73.499947,
                4.166708,
                73.499947,
                4.166708
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    73.499947,
                    4.166708
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Managua",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Managua",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Nicaragua",
                "sov_a3": "NIC",
                "adm0name": "Nicaragua",
                "adm0_a3": "NIC",
                "adm1name": "Managua",
                "iso_a2": "NI",
                "note": null,
                "latitude": 12.1530165801,
                "longitude": -86.2684916603,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 920000,
                "pop_min": 920000,
                "pop_other": 1088194,
                "rank_max": 11,
                "rank_min": 11,
                "geonameid": 3617763,
                "meganame": "Managua",
                "ls_name": "Managua",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                -86.270438,
                12.154962,
                -86.270438,
                12.154962
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.270438,
                    12.154962
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 4,
                "natscale": 50,
                "labelrank": 0,
                "featurecla": "Admin-0 capital",
                "name": "Manama",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Manama",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Bahrain",
                "sov_a3": "BHR",
                "adm0name": "Bahrain",
                "adm0_a3": "BHR",
                "adm1name": null,
                "iso_a2": "BH",
                "note": null,
                "latitude": 26.2361362905,
                "longitude": 50.5830517159,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 563920,
                "pop_min": 157474,
                "pop_other": 563666,
                "rank_max": 11,
                "rank_min": 9,
                "geonameid": 290340,
                "meganame": null,
                "ls_name": "Manama",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 5.6
            },
            "bbox": [
                50.583052,
                26.236136,
                50.583052,
                26.236136
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    50.583052,
                    26.236136
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 1,
                "natscale": 300,
                "labelrank": 5,
                "featurecla": "Admin-0 capital",
                "name": "Manila",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Manila",
                "adm0cap": 1,
                "capalt": null,
                "capin": "Official, de fa",
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "Philippines",
                "sov_a3": "PHL",
                "adm0name": "Philippines",
                "adm0_a3": "PHL",
                "adm1name": "Metropolitan Manila",
                "iso_a2": "PH",
                "note": null,
                "latitude": 14.6041589548,
                "longitude": 120.982217162,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 11100000,
                "pop_min": 3077575,
                "pop_other": 2381280,
                "rank_max": 14,
                "rank_min": 12,
                "geonameid": 1701668,
                "meganame": "Manila",
                "ls_name": "Manila",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 2.7
            },
            "bbox": [
                120.980271,
                14.606105,
                120.980271,
                14.606105
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    120.980271,
                    14.606105
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 6,
                "featurecla": "Admin-0 capital",
                "name": "Maputo",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Maputo",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Mozambique",
                "sov_a3": "MOZ",
                "adm0name": "Mozambique",
                "adm0_a3": "MOZ",
                "adm1name": "Maputo",
                "iso_a2": "MZ",
                "note": null,
                "latitude": -25.9552774874,
                "longitude": 32.5891629626,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 1446000,
                "pop_min": 1191613,
                "pop_other": 1365454,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 1040652,
                "meganame": "Maputo",
                "ls_name": "Maputo",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                32.587217,
                -25.953332,
                32.587217,
                -25.953332
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    32.587217,
                    -25.953332
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Maseru",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Maseru",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Lesotho",
                "sov_a3": "LSO",
                "adm0name": "Lesotho",
                "adm0_a3": "LSO",
                "adm1name": "Maseru",
                "iso_a2": "LS",
                "note": null,
                "latitude": -29.3166743787,
                "longitude": 27.48327307,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 361324,
                "pop_min": 118355,
                "pop_other": 356225,
                "rank_max": 10,
                "rank_min": 9,
                "geonameid": 932505,
                "meganame": null,
                "ls_name": "Maseru",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                27.483273,
                -29.316674,
                27.483273,
                -29.316674
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.483273,
                    -29.316674
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 4,
                "natscale": 50,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Mbabane",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Mbabane",
                "adm0cap": 1,
                "capalt": null,
                "capin": "Administrative",
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Swaziland",
                "sov_a3": "SWZ",
                "adm0name": "Swaziland",
                "adm0_a3": "SWZ",
                "adm1name": "Hhohho",
                "iso_a2": "SZ",
                "note": null,
                "latitude": -26.3166507784,
                "longitude": 31.1333345121,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 90138,
                "pop_min": 76218,
                "pop_other": 89979,
                "rank_max": 8,
                "rank_min": 8,
                "geonameid": 934985,
                "meganame": null,
                "ls_name": "Mbabane",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5.6
            },
            "bbox": [
                31.133335,
                -26.316651,
                31.133335,
                -26.316651
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    31.133335,
                    -26.316651
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 1,
                "natscale": 300,
                "labelrank": 3,
                "featurecla": "Admin-1 capital",
                "name": "Melbourne",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Melbourne",
                "adm0cap": 0,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "Australia",
                "sov_a3": "AUS",
                "adm0name": "Australia",
                "adm0_a3": "AUS",
                "adm1name": "Victoria",
                "iso_a2": "AU",
                "note": null,
                "latitude": -37.8200313123,
                "longitude": 144.975016235,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Changed feature class. Changed scale rank.",
                "pop_max": 4170000,
                "pop_min": 93625,
                "pop_other": 1805353,
                "rank_max": 12,
                "rank_min": 8,
                "geonameid": 2158177,
                "meganame": "Melbourne",
                "ls_name": "Melbourne2",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 3
            },
            "bbox": [
                144.97307,
                -37.818085,
                144.97307,
                -37.818085
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    144.97307,
                    -37.818085
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 6,
                "natscale": 30,
                "labelrank": 0,
                "featurecla": "Admin-0 capital",
                "name": "Melekeok",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Melekeok",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Palau",
                "sov_a3": "PLW",
                "adm0name": "Palau",
                "adm0_a3": "PLW",
                "adm1name": null,
                "iso_a2": "PW",
                "note": null,
                "latitude": 7.48739617298,
                "longitude": 134.626548467,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Location adjusted. Changed scale rank.",
                "pop_max": 7026,
                "pop_min": 7026,
                "pop_other": 0,
                "rank_max": 5,
                "rank_min": 5,
                "geonameid": 1559804,
                "meganame": null,
                "ls_name": "Melekeok",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 6
            },
            "bbox": [
                134.626548,
                7.487396,
                134.626548,
                7.487396
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    134.626548,
                    7.487396
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 0,
                "natscale": 600,
                "labelrank": 2,
                "featurecla": "Admin-0 capital",
                "name": "Mexico City",
                "namepar": null,
                "namealt": "Ciudad de M",
                "diffascii": 0,
                "nameascii": "Mexico City",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "Mexico",
                "sov_a3": "MEX",
                "adm0name": "Mexico",
                "adm0_a3": "MEX",
                "adm1name": "Distrito Federal",
                "iso_a2": "MX",
                "note": null,
                "latitude": 19.4424424428,
                "longitude": -99.1309882017,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 19028000,
                "pop_min": 10811002,
                "pop_other": 10018444,
                "rank_max": 14,
                "rank_min": 14,
                "geonameid": 3530597,
                "meganame": "Ciudad de Mdxico",
                "ls_name": "Mexico City",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 2.1
            },
            "bbox": [
                -99.132934,
                19.444388,
                -99.132934,
                19.444388
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -99.132934,
                    19.444388
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 1,
                "natscale": 300,
                "labelrank": 1,
                "featurecla": "Populated place",
                "name": "Miami",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Miami",
                "adm0cap": 0,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "United States",
                "sov_a3": "USA",
                "adm0name": "United States of America",
                "adm0_a3": "USA",
                "adm1name": "Florida",
                "iso_a2": "US",
                "note": null,
                "latitude": 25.7876106964,
                "longitude": -80.2241060808,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 5585000,
                "pop_min": 382894,
                "pop_other": 1037811,
                "rank_max": 13,
                "rank_min": 10,
                "geonameid": 4164138,
                "meganame": "Miami",
                "ls_name": "Miami",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 2.1
            },
            "bbox": [
                -80.226052,
                25.789557,
                -80.226052,
                25.789557
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -80.226052,
                    25.789557
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 6,
                "featurecla": "Admin-0 capital",
                "name": "Minsk",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Minsk",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Belarus",
                "sov_a3": "BLR",
                "adm0name": "Belarus",
                "adm0_a3": "BLR",
                "adm1name": "Minsk",
                "iso_a2": "BY",
                "note": null,
                "latitude": 53.8999774364,
                "longitude": 27.5666271553,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 1805000,
                "pop_min": 1577138,
                "pop_other": 1557919,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 625144,
                "meganame": "Minsk",
                "ls_name": "Minsk",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                27.564681,
                53.901923,
                27.564681,
                53.901923
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.564681,
                    53.901923
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Mogadishu",
                "namepar": null,
                "namealt": "Muqdisho",
                "diffascii": 0,
                "nameascii": "Mogadishu",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Somalia",
                "sov_a3": "SOM",
                "adm0name": "Somalia",
                "adm0_a3": "SOM",
                "adm1name": "Banaadir",
                "iso_a2": "SO",
                "note": null,
                "latitude": 2.06668133433,
                "longitude": 45.3666776111,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 1100000,
                "pop_min": 875388,
                "pop_other": 849392,
                "rank_max": 12,
                "rank_min": 11,
                "geonameid": 53654,
                "meganame": "Muqdisho",
                "ls_name": "Mogadishu",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 4
            },
            "bbox": [
                45.364732,
                2.068627,
                45.364732,
                2.068627
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    45.364732,
                    2.068627
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 6,
                "natscale": 30,
                "labelrank": 0,
                "featurecla": "Admin-0 capital",
                "name": "Monaco",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Monaco",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Monaco",
                "sov_a3": "MCO",
                "adm0name": "Monaco",
                "adm0_a3": "MCO",
                "adm1name": null,
                "iso_a2": "MC",
                "note": null,
                "latitude": 43.7396456879,
                "longitude": 7.40691317347,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Location adjusted. Changed scale rank.",
                "pop_max": 36371,
                "pop_min": 36371,
                "pop_other": 102371,
                "rank_max": 7,
                "rank_min": 7,
                "geonameid": 2993458,
                "meganame": null,
                "ls_name": "Monaco",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5.1
            },
            "bbox": [
                7.406913,
                43.739646,
                7.406913,
                43.739646
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    7.406913,
                    43.739646
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 2,
                "natscale": 200,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Monrovia",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Monrovia",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Liberia",
                "sov_a3": "LBR",
                "adm0name": "Liberia",
                "adm0_a3": "LBR",
                "adm1name": "Montserrado",
                "iso_a2": "LR",
                "note": null,
                "latitude": 6.31055665987,
                "longitude": -10.8047516291,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 1041000,
                "pop_min": 785662,
                "pop_other": 806416,
                "rank_max": 12,
                "rank_min": 11,
                "geonameid": 2274895,
                "meganame": "Monrovia",
                "ls_name": "Monrovia",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 4
            },
            "bbox": [
                -10.79966,
                6.314582,
                -10.79966,
                6.314582
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -10.79966,
                    6.314582
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 1,
                "natscale": 300,
                "labelrank": 2,
                "featurecla": "Admin-1 capital",
                "name": "Monterrey",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Monterrey",
                "adm0cap": 0,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Mexico",
                "sov_a3": "MEX",
                "adm0name": "Mexico",
                "adm0_a3": "MEX",
                "adm1name": "Nuevo León",
                "iso_a2": "MX",
                "note": null,
                "latitude": 25.6699951365,
                "longitude": -100.329984784,
                "changed": 5,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 3712000,
                "pop_min": 1122874,
                "pop_other": 3225636,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 3995465,
                "meganame": "Monterrey",
                "ls_name": "Monterrey",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 3.7
            },
            "bbox": [
                -100.331931,
                25.671941,
                -100.331931,
                25.671941
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -100.331931,
                    25.671941
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Montevideo",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Montevideo",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Uruguay",
                "sov_a3": "URY",
                "adm0name": "Uruguay",
                "adm0_a3": "URY",
                "adm1name": "Montevideo",
                "iso_a2": "UY",
                "note": null,
                "latitude": -34.8580415662,
                "longitude": -56.1710522884,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 1513000,
                "pop_min": 5324,
                "pop_other": 1276128,
                "rank_max": 12,
                "rank_min": 5,
                "geonameid": 5038018,
                "meganame": "Montevideo",
                "ls_name": "Montevideo",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 4
            },
            "bbox": [
                -56.172998,
                -34.856096,
                -56.172998,
                -34.856096
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -56.172998,
                    -34.856096
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 6,
                "natscale": 30,
                "labelrank": 0,
                "featurecla": "Admin-0 capital",
                "name": "Moroni",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Moroni",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Comoros",
                "sov_a3": "COM",
                "adm0name": "Comoros",
                "adm0_a3": "COM",
                "adm1name": null,
                "iso_a2": "KM",
                "note": null,
                "latitude": -11.7041576957,
                "longitude": 43.2402440987,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 128698,
                "pop_min": 42872,
                "pop_other": 0,
                "rank_max": 9,
                "rank_min": 7,
                "geonameid": 921772,
                "meganame": null,
                "ls_name": "Moroni",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 6
            },
            "bbox": [
                43.240244,
                -11.704158,
                43.240244,
                -11.704158
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    43.240244,
                    -11.704158
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 0,
                "natscale": 600,
                "labelrank": 2,
                "featurecla": "Admin-0 capital",
                "name": "Moscow",
                "namepar": "Moskva",
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Moscow",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "Russia",
                "sov_a3": "RUS",
                "adm0name": "Russia",
                "adm0_a3": "RUS",
                "adm1name": "Moskva",
                "iso_a2": "RU",
                "note": null,
                "latitude": 55.7521641226,
                "longitude": 37.6155228259,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 10452000,
                "pop_min": 10452000,
                "pop_other": 10585385,
                "rank_max": 14,
                "rank_min": 14,
                "geonameid": 524901,
                "meganame": "Moskva",
                "ls_name": "Moscow",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 1.7
            },
            "bbox": [
                37.613577,
                55.75411,
                37.613577,
                55.75411
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.613577,
                    55.75411
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 0,
                "natscale": 600,
                "labelrank": 1,
                "featurecla": "Admin-1 capital",
                "name": "Mumbai",
                "namepar": "Bombay",
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Mumbai",
                "adm0cap": 0,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "India",
                "sov_a3": "IND",
                "adm0name": "India",
                "adm0_a3": "IND",
                "adm1name": "Maharashtra",
                "iso_a2": "IN",
                "note": null,
                "latitude": 19.0169903757,
                "longitude": 72.8569892974,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 18978000,
                "pop_min": 12691836,
                "pop_other": 12426085,
                "rank_max": 14,
                "rank_min": 14,
                "geonameid": 1275339,
                "meganame": "Mumbai",
                "ls_name": "Mumbai",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 1.7
            },
            "bbox": [
                72.855043,
                19.018936,
                72.855043,
                19.018936
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    72.855043,
                    19.018936
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Muscat",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Muscat",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Oman",
                "sov_a3": "OMN",
                "adm0name": "Oman",
                "adm0_a3": "OMN",
                "adm1name": "Muscat",
                "iso_a2": "OM",
                "note": null,
                "latitude": 23.6133248077,
                "longitude": 58.5933121326,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 734697,
                "pop_min": 586861,
                "pop_other": 586861,
                "rank_max": 11,
                "rank_min": 11,
                "geonameid": 287286,
                "meganame": null,
                "ls_name": "Muscat",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                58.593312,
                23.613325,
                58.593312,
                23.613325
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    58.593312,
                    23.613325
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 0,
                "natscale": 600,
                "labelrank": 5,
                "featurecla": "Admin-0 capital",
                "name": "Nairobi",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Nairobi",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "Kenya",
                "sov_a3": "KEN",
                "adm0name": "Kenya",
                "adm0_a3": "KEN",
                "adm1name": "Nairobi",
                "iso_a2": "KE",
                "note": null,
                "latitude": -1.28334674185,
                "longitude": 36.8166568591,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 3010000,
                "pop_min": 2750547,
                "pop_other": 3400962,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 184745,
                "meganame": "Nairobi",
                "ls_name": "Nairobi",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 2
            },
            "bbox": [
                36.814711,
                -1.281401,
                36.814711,
                -1.281401
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    36.814711,
                    -1.281401
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 0,
                "featurecla": "Admin-0 capital",
                "name": "Nassau",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Nassau",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Bahamas, The",
                "sov_a3": "BHS",
                "adm0name": "The Bahamas",
                "adm0_a3": "BHS",
                "adm1name": null,
                "iso_a2": "BS",
                "note": null,
                "latitude": 25.0833901154,
                "longitude": -77.3500437843,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 227940,
                "pop_min": 160966,
                "pop_other": 0,
                "rank_max": 10,
                "rank_min": 9,
                "geonameid": 3571824,
                "meganame": null,
                "ls_name": "Nassau",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 5
            },
            "bbox": [
                -77.350044,
                25.08339,
                -77.350044,
                25.08339
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -77.350044,
                    25.08339
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 5,
                "featurecla": "Admin-0 capital",
                "name": "Naypyidaw",
                "namepar": null,
                "namealt": "Nay Pyi Taw",
                "diffascii": 0,
                "nameascii": "Naypyidaw",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Myanmar",
                "sov_a3": "MMR",
                "adm0name": "Myanmar",
                "adm0_a3": "MMR",
                "adm1name": "Mandalay",
                "iso_a2": "MM",
                "note": null,
                "latitude": 19.7665570261,
                "longitude": 96.1186185292,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Location adjusted.",
                "pop_max": 930000,
                "pop_min": 194824,
                "pop_other": 0,
                "rank_max": 11,
                "rank_min": 9,
                "geonameid": 6611854,
                "meganame": "Nay Pyi Taw",
                "ls_name": "Naypyidaw",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                96.116673,
                19.768503,
                96.116673,
                19.768503
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    96.116673,
                    19.768503
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 7,
                "featurecla": "Admin-0 capital",
                "name": "Ndjamena",
                "namepar": null,
                "namealt": "N'Djamnna",
                "diffascii": 0,
                "nameascii": "Ndjamena",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Chad",
                "sov_a3": "TCD",
                "adm0name": "Chad",
                "adm0_a3": "TCD",
                "adm1name": "Hadjer-Lamis",
                "iso_a2": "TD",
                "note": null,
                "latitude": 12.1130965362,
                "longitude": 15.0491483141,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 989000,
                "pop_min": 681387,
                "pop_other": 686347,
                "rank_max": 11,
                "rank_min": 11,
                "geonameid": 2427123,
                "meganame": "N'Djam-na",
                "ls_name": "Ndjamena",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                15.047202,
                12.115042,
                15.047202,
                12.115042
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    15.047202,
                    12.115042
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 1,
                "natscale": 300,
                "labelrank": 1,
                "featurecla": "Admin-0 capital",
                "name": "New Delhi",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "New Delhi",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 0,
                "sov0name": "India",
                "sov_a3": "IND",
                "adm0name": "India",
                "adm0_a3": "IND",
                "adm1name": "Delhi",
                "iso_a2": "IN",
                "note": null,
                "latitude": 28.6000230092,
                "longitude": 77.1999800201,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 317797,
                "pop_min": 317797,
                "pop_other": 8060107,
                "rank_max": 10,
                "rank_min": 10,
                "geonameid": 1261481,
                "meganame": null,
                "ls_name": "New Delhi",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 2.1
            },
            "bbox": [
                77.19998,
                28.600023,
                77.19998,
                28.600023
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    77.19998,
                    28.600023
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 0,
                "natscale": 600,
                "labelrank": 1,
                "featurecla": "Populated place",
                "name": "New York",
                "namepar": null,
                "namealt": "New York-Newark",
                "diffascii": 0,
                "nameascii": "New York",
                "adm0cap": 0,
                "capalt": null,
                "capin": "UN Headquarters",
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "United States",
                "sov_a3": "USA",
                "adm0name": "United States of America",
                "adm0_a3": "USA",
                "adm1name": "New York",
                "iso_a2": "US",
                "note": null,
                "latitude": 40.749979064,
                "longitude": -73.9800169288,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 19040000,
                "pop_min": 8008278,
                "pop_other": 9292603,
                "rank_max": 14,
                "rank_min": 13,
                "geonameid": 5128581,
                "meganame": "New York-Newark",
                "ls_name": "New York",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 1.7
            },
            "bbox": [
                -73.981963,
                40.751925,
                -73.981963,
                40.751925
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -73.981963,
                    40.751925
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 6,
                "featurecla": "Admin-0 capital",
                "name": "Niamey",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Niamey",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Niger",
                "sov_a3": "NER",
                "adm0name": "Niger",
                "adm0_a3": "NER",
                "adm1name": "Niamey",
                "iso_a2": "NE",
                "note": null,
                "latitude": 13.5167059519,
                "longitude": 2.11665604514,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 915000,
                "pop_min": 742791,
                "pop_other": 715325,
                "rank_max": 11,
                "rank_min": 11,
                "geonameid": 2440485,
                "meganame": "Niamey",
                "ls_name": "Niamey",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                2.11471,
                13.518652,
                2.11471,
                13.518652
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    2.11471,
                    13.518652
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 0,
                "featurecla": "Admin-0 capital",
                "name": "Nicosia",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Nicosia",
                "adm0cap": 1,
                "capalt": null,
                "capin": "Capital of both",
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Cyprus",
                "sov_a3": "CYP",
                "adm0name": "Cyprus",
                "adm0_a3": "CYP",
                "adm1name": null,
                "iso_a2": "CY",
                "note": null,
                "latitude": 35.1666764517,
                "longitude": 33.3666348864,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 224300,
                "pop_min": 200452,
                "pop_other": 222985,
                "rank_max": 10,
                "rank_min": 10,
                "geonameid": 146268,
                "meganame": null,
                "ls_name": "Nicosia",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 5
            },
            "bbox": [
                33.366635,
                35.166676,
                33.366635,
                35.166676
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    33.366635,
                    35.166676
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 7,
                "featurecla": "Admin-0 capital",
                "name": "Nouakchott",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Nouakchott",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Mauritania",
                "sov_a3": "MRT",
                "adm0name": "Mauritania",
                "adm0_a3": "MRT",
                "adm1name": "Nouakchott",
                "iso_a2": "MR",
                "note": null,
                "latitude": 18.0864270212,
                "longitude": -15.9753404149,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 742144,
                "pop_min": 661400,
                "pop_other": 742144,
                "rank_max": 11,
                "rank_min": 11,
                "geonameid": 2377450,
                "meganame": null,
                "ls_name": "Nouakchott",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                -15.97534,
                18.086427,
                -15.97534,
                18.086427
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -15.97534,
                    18.086427
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 0,
                "featurecla": "Admin-0 capital",
                "name": "Nukualofa",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Nukualofa",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Tonga",
                "sov_a3": "TON",
                "adm0name": "Tonga",
                "adm0_a3": "TON",
                "adm1name": null,
                "iso_a2": "TO",
                "note": null,
                "latitude": -21.1385123567,
                "longitude": -175.220564478,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Location adjusted.",
                "pop_max": 42620,
                "pop_min": 23658,
                "pop_other": 42620,
                "rank_max": 7,
                "rank_min": 7,
                "geonameid": 4032402,
                "meganame": null,
                "ls_name": "Nukualofa",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 5
            },
            "bbox": [
                -175.220564,
                -21.138512,
                -175.220564,
                -21.138512
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -175.220564,
                    -21.138512
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 1,
                "natscale": 300,
                "labelrank": 2,
                "featurecla": "Admin-1 region capital",
                "name": "Ōsaka",
                "namepar": null,
                "namealt": "Osaka-Kobe",
                "diffascii": 0,
                "nameascii": "Osaka",
                "adm0cap": 0,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "Japan",
                "sov_a3": "JPN",
                "adm0name": "Japan",
                "adm0_a3": "JPN",
                "adm1name": "Osaka",
                "iso_a2": "JP",
                "note": null,
                "latitude": 34.7500352163,
                "longitude": 135.460144815,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Changed feature to Admin-0 region capital.",
                "pop_max": 11294000,
                "pop_min": 2592413,
                "pop_other": 9630783,
                "rank_max": 14,
                "rank_min": 12,
                "geonameid": 1853909,
                "meganame": "Osaka-Kobe",
                "ls_name": "Osaka",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 3
            },
            "bbox": [
                135.458199,
                34.751981,
                135.458199,
                34.751981
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    135.458199,
                    34.751981
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 2,
                "natscale": 200,
                "labelrank": 7,
                "featurecla": "Admin-0 capital",
                "name": "Oslo",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Oslo",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "Kingdom of Norway",
                "sov_a3": "NOR",
                "adm0name": "Norway",
                "adm0_a3": "NOR",
                "adm1name": "Oslo",
                "iso_a2": "NO",
                "note": null,
                "latitude": 59.9166902864,
                "longitude": 10.749979206,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 835000,
                "pop_min": 580000,
                "pop_other": 701804,
                "rank_max": 11,
                "rank_min": 11,
                "geonameid": 3143244,
                "meganame": "Oslo",
                "ls_name": "Oslo",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 4
            },
            "bbox": [
                10.748033,
                59.918636,
                10.748033,
                59.918636
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    10.748033,
                    59.918636
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 2,
                "featurecla": "Admin-0 capital",
                "name": "Ottawa",
                "namepar": null,
                "namealt": "Ottawa-Gatineau",
                "diffascii": 0,
                "nameascii": "Ottawa",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Canada",
                "sov_a3": "CAN",
                "adm0name": "Canada",
                "adm0_a3": "CAN",
                "adm1name": "Ontario",
                "iso_a2": "CA",
                "note": null,
                "latitude": 45.4166967967,
                "longitude": -75.7000153012,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 1145000,
                "pop_min": 812129,
                "pop_other": 872781,
                "rank_max": 12,
                "rank_min": 11,
                "geonameid": 6094817,
                "meganame": "Ottawa-Gatineau",
                "ls_name": "Ottawa",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 3
            },
            "bbox": [
                -75.701961,
                45.418643,
                -75.701961,
                45.418643
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -75.701961,
                    45.418643
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Ouagadougou",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Ouagadougou",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Burkina Faso",
                "sov_a3": "BFA",
                "adm0name": "Burkina Faso",
                "adm0_a3": "BFA",
                "adm1name": "Kadiogo",
                "iso_a2": "BF",
                "note": null,
                "latitude": 12.3703159779,
                "longitude": -1.5247237563,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 1149000,
                "pop_min": 835457,
                "pop_other": 713874,
                "rank_max": 12,
                "rank_min": 11,
                "geonameid": 2357048,
                "meganame": "Ouagadougou",
                "ls_name": "Ouagadougou",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                -1.52667,
                12.372262,
                -1.52667,
                12.372262
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -1.52667,
                    12.372262
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 6,
                "natscale": 30,
                "labelrank": 0,
                "featurecla": "Admin-0 capital",
                "name": "Palikir",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Palikir",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Federated States of Micronesia",
                "sov_a3": "FSM",
                "adm0name": "Federated States of Micronesia",
                "adm0_a3": "FSM",
                "adm1name": null,
                "iso_a2": "FM",
                "note": null,
                "latitude": 6.91664369601,
                "longitude": 158.149974324,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 4645,
                "pop_min": 4645,
                "pop_other": 0,
                "rank_max": 4,
                "rank_min": 4,
                "geonameid": 2081986,
                "meganame": null,
                "ls_name": "Palikir",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 6
            },
            "bbox": [
                158.149974,
                6.916644,
                158.149974,
                6.916644
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    158.149974,
                    6.916644
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Panama City",
                "namepar": null,
                "namealt": "Ciudad de Panam",
                "diffascii": 0,
                "nameascii": "Panama City",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Panama",
                "sov_a3": "PAN",
                "adm0name": "Panama",
                "adm0_a3": "PAN",
                "adm1name": "Panama",
                "iso_a2": "PA",
                "note": null,
                "latitude": 8.96801719048,
                "longitude": -79.5330371518,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 1281000,
                "pop_min": 408168,
                "pop_other": 939725,
                "rank_max": 12,
                "rank_min": 10,
                "geonameid": 3703443,
                "meganame": "Ciudad de Panam",
                "ls_name": "Panama City1",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                -79.534983,
                8.969963,
                -79.534983,
                8.969963
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -79.534983,
                    8.969963
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Paramaribo",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Paramaribo",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Suriname",
                "sov_a3": "SUR",
                "adm0name": "Suriname",
                "adm0_a3": "SUR",
                "adm1name": "Paramaribo",
                "iso_a2": "SR",
                "note": null,
                "latitude": 5.83503012992,
                "longitude": -55.1670308854,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 254169,
                "pop_min": 223757,
                "pop_other": 248161,
                "rank_max": 10,
                "rank_min": 10,
                "geonameid": 3383330,
                "meganame": null,
                "ls_name": "Paramaribo",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 5
            },
            "bbox": [
                -55.167031,
                5.83503,
                -55.167031,
                5.83503
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -55.167031,
                    5.83503
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 0,
                "natscale": 600,
                "labelrank": 3,
                "featurecla": "Admin-0 capital",
                "name": "Paris",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Paris",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "French Republic",
                "sov_a3": "FRA",
                "adm0name": "France",
                "adm0_a3": "FRA",
                "adm1name": "Île-de-France",
                "iso_a2": "FR",
                "note": null,
                "latitude": 48.8666929312,
                "longitude": 2.33333532574,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 9904000,
                "pop_min": 11177,
                "pop_other": 7142744,
                "rank_max": 13,
                "rank_min": 6,
                "geonameid": 2988507,
                "meganame": "Paris",
                "ls_name": "Paris",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 1.7
            },
            "bbox": [
                2.331389,
                48.868639,
                2.331389,
                48.868639
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    2.331389,
                    48.868639
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Phnom Penh",
                "namepar": null,
                "namealt": "Phnum Penh",
                "diffascii": 0,
                "nameascii": "Phnom Penh",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Cambodia",
                "sov_a3": "KHM",
                "adm0name": "Cambodia",
                "adm0_a3": "KHM",
                "adm1name": "Phnom Penh",
                "iso_a2": "KH",
                "note": null,
                "latitude": 11.5500301299,
                "longitude": 104.91663448,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 1466000,
                "pop_min": 1466000,
                "pop_other": 1604086,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 1821306,
                "meganame": "Phnum Penh",
                "ls_name": "Phnom Penh",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 5
            },
            "bbox": [
                104.914689,
                11.551976,
                104.914689,
                11.551976
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    104.914689,
                    11.551976
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 4,
                "natscale": 50,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Podgorica",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Podgorica",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Montenegro",
                "sov_a3": "MNE",
                "adm0name": "Montenegro",
                "adm0_a3": "MNE",
                "adm1name": "Podgorica",
                "iso_a2": "ME",
                "note": null,
                "latitude": 42.4659725129,
                "longitude": 19.2663069241,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Location adjusted. Changed scale rank.",
                "pop_max": 145850,
                "pop_min": 136473,
                "pop_other": 0,
                "rank_max": 9,
                "rank_min": 9,
                "geonameid": 3193044,
                "meganame": null,
                "ls_name": "Podgorica",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5.6
            },
            "bbox": [
                19.266307,
                42.465973,
                19.266307,
                42.465973
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    19.266307,
                    42.465973
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 4,
                "natscale": 50,
                "labelrank": 0,
                "featurecla": "Admin-0 capital",
                "name": "Port Louis",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Port Louis",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Mauritius",
                "sov_a3": "MUS",
                "adm0name": "Mauritius",
                "adm0_a3": "MUS",
                "adm1name": null,
                "iso_a2": "MU",
                "note": null,
                "latitude": -20.1666385714,
                "longitude": 57.4999938546,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 595491,
                "pop_min": 148416,
                "pop_other": 304613,
                "rank_max": 11,
                "rank_min": 9,
                "geonameid": 934154,
                "meganame": null,
                "ls_name": "Port Louis",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 5.6
            },
            "bbox": [
                57.499994,
                -20.166639,
                57.499994,
                -20.166639
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    57.499994,
                    -20.166639
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Port Moresby",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Port Moresby",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Papua New Guinea",
                "sov_a3": "PNG",
                "adm0name": "Papua New Guinea",
                "adm0_a3": "PNG",
                "adm1name": "Central",
                "iso_a2": "PG",
                "note": null,
                "latitude": -9.46470782587,
                "longitude": 147.192503621,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 283733,
                "pop_min": 251136,
                "pop_other": 251304,
                "rank_max": 10,
                "rank_min": 10,
                "geonameid": 2088122,
                "meganame": null,
                "ls_name": "Port Moresby",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 4
            },
            "bbox": [
                147.192504,
                -9.464708,
                147.192504,
                -9.464708
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    147.192504,
                    -9.464708
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Port Vila",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Port Vila",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Vanuatu",
                "sov_a3": "VUT",
                "adm0name": "Vanuatu",
                "adm0_a3": "VUT",
                "adm1name": "Shefa",
                "iso_a2": "VU",
                "note": null,
                "latitude": -17.733350404,
                "longitude": 168.316640584,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 44040,
                "pop_min": 35901,
                "pop_other": 7702,
                "rank_max": 7,
                "rank_min": 7,
                "geonameid": 2135171,
                "meganame": null,
                "ls_name": "Port-Vila",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 4
            },
            "bbox": [
                168.316641,
                -17.73335,
                168.316641,
                -17.73335
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    168.316641,
                    -17.73335
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Port-au-Prince",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Port-au-Prince",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Haiti",
                "sov_a3": "HTI",
                "adm0name": "Haiti",
                "adm0_a3": "HTI",
                "adm1name": "Ouest",
                "iso_a2": "HT",
                "note": null,
                "latitude": 18.5410245961,
                "longitude": -72.3360345883,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 1998000,
                "pop_min": 1234742,
                "pop_other": 2385397,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 3718426,
                "meganame": "Port-au-Prince",
                "ls_name": "Port-au-Prince",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                -72.33798,
                18.54297,
                -72.33798,
                18.54297
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -72.33798,
                    18.54297
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 4,
                "natscale": 50,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Port-of-Spain",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Port-of-Spain",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Trinidad and Tobago",
                "sov_a3": "TTO",
                "adm0name": "Trinidad and Tobago",
                "adm0_a3": "TTO",
                "adm1name": "Port of Spain",
                "iso_a2": "TT",
                "note": null,
                "latitude": 10.6519970896,
                "longitude": -61.5170308854,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 294934,
                "pop_min": 49031,
                "pop_other": 419082,
                "rank_max": 10,
                "rank_min": 7,
                "geonameid": 3573890,
                "meganame": null,
                "ls_name": "Port-of-Spain",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 5.1
            },
            "bbox": [
                -61.517031,
                10.651997,
                -61.517031,
                10.651997
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -61.517031,
                    10.651997
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 4,
                "natscale": 50,
                "labelrank": 8,
                "featurecla": "Admin-0 capital alt",
                "name": "Porto-Novo",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Porto-Novo",
                "adm0cap": 0,
                "capalt": 1,
                "capin": "Official capita",
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Benin",
                "sov_a3": "BEN",
                "adm0name": "Benin",
                "adm0_a3": "BEN",
                "adm1name": "Ouémé",
                "iso_a2": "BJ",
                "note": null,
                "latitude": 6.48331097302,
                "longitude": 2.61662552757,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 300000,
                "pop_min": 234168,
                "pop_other": 806945,
                "rank_max": 10,
                "rank_min": 10,
                "geonameid": 2392087,
                "meganame": null,
                "ls_name": "Porto-Novo",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5.6
            },
            "bbox": [
                2.616626,
                6.483311,
                2.616626,
                6.483311
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    2.616626,
                    6.483311
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 2,
                "natscale": 200,
                "labelrank": 7,
                "featurecla": "Admin-0 capital",
                "name": "Prague",
                "namepar": "Praha",
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Prague",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "Czech Republic",
                "sov_a3": "CZE",
                "adm0name": "Czech Republic",
                "adm0_a3": "CZE",
                "adm1name": "Prague",
                "iso_a2": "CZ",
                "note": null,
                "latitude": 50.0833370149,
                "longitude": 14.4659797757,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 1162000,
                "pop_min": 2087,
                "pop_other": 1088042,
                "rank_max": 12,
                "rank_min": 4,
                "geonameid": 4548393,
                "meganame": "Praha",
                "ls_name": "Prague",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 4.7
            },
            "bbox": [
                14.464034,
                50.085283,
                14.464034,
                50.085283
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    14.464034,
                    50.085283
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 0,
                "featurecla": "Admin-0 capital",
                "name": "Praia",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Praia",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Cape Verde",
                "sov_a3": "CPV",
                "adm0name": "Cape Verde",
                "adm0_a3": "CPV",
                "adm1name": null,
                "iso_a2": "CV",
                "note": null,
                "latitude": 14.9166980173,
                "longitude": -23.516688885,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 113364,
                "pop_min": 88859,
                "pop_other": 89205,
                "rank_max": 9,
                "rank_min": 8,
                "geonameid": 3374333,
                "meganame": null,
                "ls_name": "Praia",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 5
            },
            "bbox": [
                -23.516689,
                14.916698,
                -23.516689,
                14.916698
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -23.516689,
                    14.916698
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 3,
                "featurecla": "Admin-0 capital",
                "name": "Pretoria",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Pretoria",
                "adm0cap": 1,
                "capalt": null,
                "capin": "Administrative",
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "South Africa",
                "sov_a3": "ZAF",
                "adm0name": "South Africa",
                "adm0_a3": "ZAF",
                "adm1name": "Gauteng",
                "iso_a2": "ZA",
                "note": null,
                "latitude": -25.7069205538,
                "longitude": 28.2294290758,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 1338000,
                "pop_min": 1338000,
                "pop_other": 1443084,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 964137,
                "meganame": "Pretoria",
                "ls_name": "Pretoria",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                28.227483,
                -25.704975,
                28.227483,
                -25.704975
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    28.227483,
                    -25.704975
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 4,
                "natscale": 50,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Pristina",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Pristina",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Kosovo",
                "sov_a3": "KOS",
                "adm0name": "Kosovo",
                "adm0_a3": "KOS",
                "adm1name": "Pristina",
                "iso_a2": "-99",
                "note": null,
                "latitude": 42.6667096141,
                "longitude": 21.1659842516,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 465186,
                "pop_min": 198214,
                "pop_other": 261783,
                "rank_max": 10,
                "rank_min": 9,
                "geonameid": 786714,
                "meganame": null,
                "ls_name": "Pristina",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5.6
            },
            "bbox": [
                21.165984,
                42.66671,
                21.165984,
                42.66671
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.165984,
                    42.66671
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 4,
                "natscale": 50,
                "labelrank": 6,
                "featurecla": "Admin-0 capital alt",
                "name": "Putrajaya",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Putrajaya",
                "adm0cap": 0,
                "capalt": 1,
                "capin": "Administrative",
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Malaysia",
                "sov_a3": "MYS",
                "adm0name": "Malaysia",
                "adm0_a3": "MYS",
                "adm1name": "Selangor",
                "iso_a2": "MY",
                "note": null,
                "latitude": 2.91401979462,
                "longitude": 101.70194698,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 67964,
                "pop_min": 50000,
                "pop_other": 956431,
                "rank_max": 8,
                "rank_min": 7,
                "geonameid": 6697380,
                "meganame": null,
                "ls_name": "Putrajaya",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 5.6
            },
            "bbox": [
                101.701947,
                2.91402,
                101.701947,
                2.91402
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    101.701947,
                    2.91402
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 2,
                "natscale": 200,
                "labelrank": 6,
                "featurecla": "Admin-0 capital",
                "name": "Pyongyang",
                "namepar": null,
                "namealt": "P'yongyang",
                "diffascii": 0,
                "nameascii": "Pyongyang",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Korea, North",
                "sov_a3": "PRK",
                "adm0name": "North Korea",
                "adm0_a3": "PRK",
                "adm1name": "P'yongyang",
                "iso_a2": "KP",
                "note": null,
                "latitude": 39.0194386994,
                "longitude": 125.754690714,
                "changed": 5,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 3300000,
                "pop_min": 2498797,
                "pop_other": 2483216,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 1871859,
                "meganame": "P'yongyang",
                "ls_name": "Pyongyang",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 4.7
            },
            "bbox": [
                125.752745,
                39.021385,
                125.752745,
                39.021385
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    125.752745,
                    39.021385
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 7,
                "featurecla": "Admin-0 capital",
                "name": "Quito",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Quito",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Ecuador",
                "sov_a3": "ECU",
                "adm0name": "Ecuador",
                "adm0_a3": "ECU",
                "adm1name": "Pichincha",
                "iso_a2": "EC",
                "note": null,
                "latitude": -0.21498818065,
                "longitude": -78.5000511085,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 1701000,
                "pop_min": 1399814,
                "pop_other": 1435528,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 3652462,
                "meganame": "Quito",
                "ls_name": "Quito",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 4
            },
            "bbox": [
                -78.501997,
                -0.213042,
                -78.501997,
                -0.213042
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -78.501997,
                    -0.213042
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 5,
                "featurecla": "Admin-0 capital",
                "name": "Rabat",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Rabat",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Morocco",
                "sov_a3": "MAR",
                "adm0name": "Morocco",
                "adm0_a3": "MAR",
                "adm1name": "Rabat - Salé - Zemmour - Zaer",
                "iso_a2": "MA",
                "note": null,
                "latitude": 34.0252990916,
                "longitude": -6.83613082013,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 1705000,
                "pop_min": 1655753,
                "pop_other": 2029349,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 2538475,
                "meganame": "Rabat",
                "ls_name": "Rabat",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                -6.836408,
                34.025307,
                -6.836408,
                34.025307
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -6.836408,
                    34.025307
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 2,
                "natscale": 200,
                "labelrank": 5,
                "featurecla": "Admin-0 capital",
                "name": "Rangoon",
                "namepar": null,
                "namealt": "Yangon",
                "diffascii": 0,
                "nameascii": "Rangoon",
                "adm0cap": 0,
                "capalt": null,
                "capin": "Former capital",
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Myanmar",
                "sov_a3": "MMR",
                "adm0name": "Myanmar",
                "adm0_a3": "MMR",
                "adm1name": "Yangon",
                "iso_a2": "MM",
                "note": null,
                "latitude": 16.7833541046,
                "longitude": 96.1666776113,
                "changed": 5,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 4088000,
                "pop_min": 3301820,
                "pop_other": 3124090,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 1298824,
                "meganame": "Yangon",
                "ls_name": "Rangoon",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 4
            },
            "bbox": [
                96.164732,
                16.7853,
                96.164732,
                16.7853
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    96.164732,
                    16.7853
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Reykjavík",
                "namepar": null,
                "namealt": null,
                "diffascii": 1,
                "nameascii": "Reykjavik",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Iceland",
                "sov_a3": "ISL",
                "adm0name": "Iceland",
                "adm0_a3": "ISL",
                "adm1name": "Suðurnes",
                "iso_a2": "IS",
                "note": null,
                "latitude": 64.1500236197,
                "longitude": -21.9500144872,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 166212,
                "pop_min": 113906,
                "pop_other": 160116,
                "rank_max": 9,
                "rank_min": 9,
                "geonameid": 3413829,
                "meganame": null,
                "ls_name": "Reykjavik",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 3.7
            },
            "bbox": [
                -21.950014,
                64.150024,
                -21.950014,
                64.150024
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -21.950014,
                    64.150024
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Riga",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Riga",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Latvia",
                "sov_a3": "LVA",
                "adm0name": "Latvia",
                "adm0_a3": "LVA",
                "adm1name": "Riga",
                "iso_a2": "LV",
                "note": null,
                "latitude": 56.9500238232,
                "longitude": 24.0999653714,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 742572,
                "pop_min": 705033,
                "pop_other": 0,
                "rank_max": 11,
                "rank_min": 11,
                "geonameid": 456172,
                "meganame": null,
                "ls_name": "Riga",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 4
            },
            "bbox": [
                24.099965,
                56.950024,
                24.099965,
                56.950024
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    24.099965,
                    56.950024
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 0,
                "natscale": 600,
                "labelrank": 1,
                "featurecla": "Admin-1 capital",
                "name": "Rio de Janeiro",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Rio de Janeiro",
                "adm0cap": 0,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "Brazil",
                "sov_a3": "BRA",
                "adm0name": "Brazil",
                "adm0_a3": "BRA",
                "adm1name": "Rio de Janeiro",
                "iso_a2": "BR",
                "note": null,
                "latitude": -22.9250231742,
                "longitude": -43.2250207942,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 11748000,
                "pop_min": 2010175,
                "pop_other": 1821489,
                "rank_max": 14,
                "rank_min": 12,
                "geonameid": 3451190,
                "meganame": "Rio de Janeiro",
                "ls_name": "Rio de Janeiro",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 1.7
            },
            "bbox": [
                -43.226967,
                -22.923077,
                -43.226967,
                -22.923077
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -43.226967,
                    -22.923077
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 0,
                "natscale": 600,
                "labelrank": 5,
                "featurecla": "Admin-0 capital",
                "name": "Riyadh",
                "namepar": null,
                "namealt": "Ar-Riyadh",
                "diffascii": 0,
                "nameascii": "Riyadh",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "Saudi Arabia",
                "sov_a3": "SAU",
                "adm0name": "Saudi Arabia",
                "adm0_a3": "SAU",
                "adm1name": "Ar Riyad",
                "iso_a2": "SA",
                "note": null,
                "latitude": 24.6408331492,
                "longitude": 46.7727416573,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 4465000,
                "pop_min": 4205961,
                "pop_other": 5148778,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 108410,
                "meganame": "Ar-Riyadh",
                "ls_name": "Riyadh",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 3.7
            },
            "bbox": [
                46.770796,
                24.642779,
                46.770796,
                24.642779
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    46.770796,
                    24.642779
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 0,
                "natscale": 600,
                "labelrank": 3,
                "featurecla": "Admin-0 capital",
                "name": "Rome",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Rome",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "Italy",
                "sov_a3": "ITA",
                "adm0name": "Italy",
                "adm0_a3": "ITA",
                "adm1name": "Lazio",
                "iso_a2": "IT",
                "note": null,
                "latitude": 41.8959556265,
                "longitude": 12.4832584215,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 3339000,
                "pop_min": 35452,
                "pop_other": 2050212,
                "rank_max": 12,
                "rank_min": 7,
                "geonameid": 3169070,
                "meganame": "Rome",
                "ls_name": "Rome",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 2.7
            },
            "bbox": [
                12.481313,
                41.897901,
                12.481313,
                41.897901
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    12.481313,
                    41.897901
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 4,
                "natscale": 50,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Roseau",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Roseau",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Dominica",
                "sov_a3": "DMA",
                "adm0name": "Dominica",
                "adm0_a3": "DMA",
                "adm1name": "Saint George",
                "iso_a2": "DM",
                "note": null,
                "latitude": 15.3010156443,
                "longitude": -61.3870129818,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 23336,
                "pop_min": 16571,
                "pop_other": 23336,
                "rank_max": 7,
                "rank_min": 6,
                "geonameid": 3575635,
                "meganame": null,
                "ls_name": "Roseau",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 5.1
            },
            "bbox": [
                -61.387013,
                15.301016,
                -61.387013,
                15.301016
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -61.387013,
                    15.301016
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 4,
                "natscale": 50,
                "labelrank": 0,
                "featurecla": "Admin-0 capital",
                "name": "Saint George's",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Saint George's",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Grenada",
                "sov_a3": "GRD",
                "adm0name": "Grenada",
                "adm0_a3": "GRD",
                "adm1name": null,
                "iso_a2": "GD",
                "note": null,
                "latitude": 12.0526334017,
                "longitude": -61.7416432261,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 33734,
                "pop_min": 27343,
                "pop_other": 27343,
                "rank_max": 7,
                "rank_min": 7,
                "geonameid": 3579925,
                "meganame": null,
                "ls_name": "Saint Georgee۪s",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 5.1
            },
            "bbox": [
                -61.741643,
                12.052633,
                -61.741643,
                12.052633
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -61.741643,
                    12.052633
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 4,
                "natscale": 50,
                "labelrank": 0,
                "featurecla": "Admin-0 capital",
                "name": "Saint John's",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Saint John's",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Antigua and Barbuda",
                "sov_a3": "ATG",
                "adm0name": "Antigua and Barbuda",
                "adm0_a3": "ATG",
                "adm1name": null,
                "iso_a2": "AG",
                "note": null,
                "latitude": 17.1180365183,
                "longitude": -61.8500338151,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 35499,
                "pop_min": 24226,
                "pop_other": 0,
                "rank_max": 7,
                "rank_min": 7,
                "geonameid": 3576022,
                "meganame": null,
                "ls_name": "Saint John's",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 5.1
            },
            "bbox": [
                -61.850034,
                17.118037,
                -61.850034,
                17.118037
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -61.850034,
                    17.118037
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 1,
                "natscale": 300,
                "labelrank": 1,
                "featurecla": "Populated place",
                "name": "San Francisco",
                "namepar": null,
                "namealt": "San Francisco-Oakland",
                "diffascii": 0,
                "nameascii": "San Francisco",
                "adm0cap": 0,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "United States",
                "sov_a3": "USA",
                "adm0name": "United States of America",
                "adm0_a3": "USA",
                "adm1name": "California",
                "iso_a2": "US",
                "note": null,
                "latitude": 37.7400077505,
                "longitude": -122.459977663,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 3450000,
                "pop_min": 732072,
                "pop_other": 27400,
                "rank_max": 12,
                "rank_min": 11,
                "geonameid": 5391959,
                "meganame": "San Francisco-Oakland",
                "ls_name": "San Francisco1",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 2.7
            },
            "bbox": [
                -122.417169,
                37.769196,
                -122.417169,
                37.769196
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -122.417169,
                    37.769196
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "San José",
                "namepar": null,
                "namealt": "San Jose",
                "diffascii": 1,
                "nameascii": "San Jose",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Costa Rica",
                "sov_a3": "CRI",
                "adm0name": "Costa Rica",
                "adm0_a3": "CRI",
                "adm1name": "San José",
                "iso_a2": "CR",
                "note": null,
                "latitude": 9.93501242974,
                "longitude": -84.0840513527,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 1284000,
                "pop_min": 1724,
                "pop_other": 1434681,
                "rank_max": 12,
                "rank_min": 3,
                "geonameid": 3669623,
                "meganame": "San Josi",
                "ls_name": "San Jose1",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 5
            },
            "bbox": [
                -84.085997,
                9.936958,
                -84.085997,
                9.936958
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -84.085997,
                    9.936958
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 7,
                "natscale": 20,
                "labelrank": 0,
                "featurecla": "Admin-0 capital",
                "name": "San Marino",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "San Marino",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "San Marino",
                "sov_a3": "SMR",
                "adm0name": "San Marino",
                "adm0_a3": "SMR",
                "adm1name": null,
                "iso_a2": "SM",
                "note": null,
                "latitude": 43.9171500845,
                "longitude": 12.4666702867,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 29579,
                "pop_min": 29000,
                "pop_other": 0,
                "rank_max": 7,
                "rank_min": 7,
                "geonameid": 3168070,
                "meganame": null,
                "ls_name": "San Marino",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 6.1
            },
            "bbox": [
                12.44177,
                43.936096,
                12.44177,
                43.936096
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    12.44177,
                    43.936096
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "San Salvador",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "San Salvador",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "El Salvador",
                "sov_a3": "SLV",
                "adm0name": "El Salvador",
                "adm0_a3": "SLV",
                "adm1name": "San Salvador",
                "iso_a2": "SV",
                "note": null,
                "latitude": 13.7100016469,
                "longitude": -89.2030412208,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 1433000,
                "pop_min": 2807,
                "pop_other": 2139587,
                "rank_max": 12,
                "rank_min": 4,
                "geonameid": 1690681,
                "meganame": "San Salvador",
                "ls_name": "San Salvador",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 5
            },
            "bbox": [
                -89.204987,
                13.711948,
                -89.204987,
                13.711948
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -89.204987,
                    13.711948
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 2,
                "natscale": 200,
                "labelrank": 6,
                "featurecla": "Admin-0 capital",
                "name": "Sanaa",
                "namepar": null,
                "namealt": "Sana'a'",
                "diffascii": 0,
                "nameascii": "Sanaa",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Yemen",
                "sov_a3": "YEM",
                "adm0name": "Yemen",
                "adm0_a3": "YEM",
                "adm1name": "Amanat Al Asimah",
                "iso_a2": "YE",
                "note": null,
                "latitude": 15.3547332957,
                "longitude": 44.2065933826,
                "changed": 5,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 2008000,
                "pop_min": 1835853,
                "pop_other": 1742507,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 71137,
                "meganame": "Sana'a'",
                "ls_name": "Sanaa",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 4
            },
            "bbox": [
                44.204648,
                15.356679,
                44.204648,
                15.356679
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    44.204648,
                    15.356679
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 0,
                "natscale": 600,
                "labelrank": 3,
                "featurecla": "Admin-0 capital",
                "name": "Santiago",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Santiago",
                "adm0cap": 1,
                "capalt": null,
                "capin": "Official, admin",
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "Chile",
                "sov_a3": "CHL",
                "adm0name": "Chile",
                "adm0_a3": "CHL",
                "adm1name": "Región Metropolitana de Santiago",
                "iso_a2": "CL",
                "note": null,
                "latitude": -33.4500138155,
                "longitude": -70.6670408546,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 5720000,
                "pop_min": 46611,
                "pop_other": 3066651,
                "rank_max": 13,
                "rank_min": 7,
                "geonameid": 3449741,
                "meganame": "Santiago",
                "ls_name": "Santiago3",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 2
            },
            "bbox": [
                -70.668987,
                -33.448068,
                -70.668987,
                -33.448068
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -70.668987,
                    -33.448068
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 2,
                "natscale": 200,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Santo Domingo",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Santo Domingo",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Dominican Republic",
                "sov_a3": "DOM",
                "adm0name": "Dominican Republic",
                "adm0_a3": "DOM",
                "adm1name": "Distrito Nacional",
                "iso_a2": "DO",
                "note": null,
                "latitude": 18.4700728546,
                "longitude": -69.9000850847,
                "changed": 5,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 2154000,
                "pop_min": 2873,
                "pop_other": 3322037,
                "rank_max": 12,
                "rank_min": 4,
                "geonameid": 3668373,
                "meganame": "Santo Domingo",
                "ls_name": "Santo Domingo",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 4
            },
            "bbox": [
                -69.902031,
                18.472019,
                -69.902031,
                18.472019
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -69.902031,
                    18.472019
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 0,
                "natscale": 600,
                "labelrank": 1,
                "featurecla": "Admin-1 capital",
                "name": "São Paulo",
                "namepar": null,
                "namealt": "Sao Paulo|Sio Paulo",
                "diffascii": 0,
                "nameascii": "Sao Paulo",
                "adm0cap": 0,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "Brazil",
                "sov_a3": "BRA",
                "adm0name": "Brazil",
                "adm0_a3": "BRA",
                "adm1name": "São Paulo",
                "iso_a2": "BR",
                "note": null,
                "latitude": -23.558679587,
                "longitude": -46.6250199804,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 18845000,
                "pop_min": 10021295,
                "pop_other": 11522944,
                "rank_max": 14,
                "rank_min": 14,
                "geonameid": 3448439,
                "meganame": "S",
                "ls_name": "Sao Paolo",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 3
            },
            "bbox": [
                -46.626966,
                -23.556734,
                -46.626966,
                -23.556734
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -46.626966,
                    -23.556734
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 0,
                "featurecla": "Admin-0 capital",
                "name": "São Tomé",
                "namepar": null,
                "namealt": null,
                "diffascii": 1,
                "nameascii": "Sao Tome",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Sao Tome and Principe",
                "sov_a3": "STP",
                "adm0name": "Sao Tome and Principe",
                "adm0_a3": "STP",
                "adm1name": null,
                "iso_a2": "ST",
                "note": null,
                "latitude": 0.33340211883,
                "longitude": 6.73332515323,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 88219,
                "pop_min": 56166,
                "pop_other": 88219,
                "rank_max": 8,
                "rank_min": 8,
                "geonameid": 3388092,
                "meganame": null,
                "ls_name": "Sao Tome",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 5
            },
            "bbox": [
                6.733325,
                0.333402,
                6.733325,
                0.333402
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    6.733325,
                    0.333402
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Sarajevo",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Sarajevo",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Bosnia and Herzegovina",
                "sov_a3": "BIH",
                "adm0name": "Bosnia and Herzegovina",
                "adm0_a3": "BIH",
                "adm1name": "Sarajevo",
                "iso_a2": "BA",
                "note": null,
                "latitude": 43.850022399,
                "longitude": 18.383001667,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 696731,
                "pop_min": 628902,
                "pop_other": 627065,
                "rank_max": 11,
                "rank_min": 11,
                "geonameid": 3191281,
                "meganame": null,
                "ls_name": "Sarajevo",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 5
            },
            "bbox": [
                18.383002,
                43.850022,
                18.383002,
                43.850022
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    18.383002,
                    43.850022
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 1,
                "natscale": 300,
                "labelrank": 3,
                "featurecla": "Admin-0 capital",
                "name": "Seoul",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Seoul",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "Korea, South",
                "sov_a3": "KOR",
                "adm0name": "South Korea",
                "adm0_a3": "KOR",
                "adm1name": "Seoul",
                "iso_a2": "KR",
                "note": null,
                "latitude": 37.5663490998,
                "longitude": 126.999730997,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 9796000,
                "pop_min": 9796000,
                "pop_other": 12018058,
                "rank_max": 13,
                "rank_min": 13,
                "geonameid": 1835848,
                "meganame": "Seoul",
                "ls_name": "Seoul",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 3
            },
            "bbox": [
                126.997785,
                37.568295,
                126.997785,
                37.568295
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    126.997785,
                    37.568295
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 0,
                "natscale": 600,
                "labelrank": 1,
                "featurecla": "Admin-1 capital",
                "name": "Shanghai",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Shanghai",
                "adm0cap": 0,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "China",
                "sov_a3": "CHN",
                "adm0name": "China",
                "adm0_a3": "CHN",
                "adm1name": "Shanghai",
                "iso_a2": "CN",
                "note": null,
                "latitude": 31.2164524526,
                "longitude": 121.436504678,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 14987000,
                "pop_min": 14608512,
                "pop_other": 16803572,
                "rank_max": 14,
                "rank_min": 14,
                "geonameid": 1796236,
                "meganame": "Shanghai",
                "ls_name": "Shanghai",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 2
            },
            "bbox": [
                121.434559,
                31.218398,
                121.434559,
                31.218398
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    121.434559,
                    31.218398
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 0,
                "natscale": 600,
                "labelrank": 0,
                "featurecla": "Admin-0 capital",
                "name": "Singapore",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Singapore",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "Singapore",
                "sov_a3": "SGP",
                "adm0name": "Singapore",
                "adm0_a3": "SGP",
                "adm1name": null,
                "iso_a2": "SG",
                "note": null,
                "latitude": 1.29303346649,
                "longitude": 103.855820678,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 5183700,
                "pop_min": 3289529,
                "pop_other": 3314179,
                "rank_max": 13,
                "rank_min": 12,
                "geonameid": 1880252,
                "meganame": "Singapore",
                "ls_name": "Singapore",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 2.1
            },
            "bbox": [
                103.853875,
                1.294979,
                103.853875,
                1.294979
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.853875,
                    1.294979
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 4,
                "natscale": 50,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Skopje",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Skopje",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Macedonia",
                "sov_a3": "MKD",
                "adm0name": "Macedonia",
                "adm0_a3": "MKD",
                "adm1name": "Centar",
                "iso_a2": "MK",
                "note": null,
                "latitude": 42.0000061229,
                "longitude": 21.4334614651,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 494087,
                "pop_min": 474889,
                "pop_other": 491890,
                "rank_max": 10,
                "rank_min": 10,
                "geonameid": 785842,
                "meganame": null,
                "ls_name": "Skopje",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 5.6
            },
            "bbox": [
                21.433461,
                42.000006,
                21.433461,
                42.000006
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.433461,
                    42.000006
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 7,
                "featurecla": "Admin-0 capital",
                "name": "Sofia",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Sofia",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Bulgaria",
                "sov_a3": "BGR",
                "adm0name": "Bulgaria",
                "adm0_a3": "BGR",
                "adm1name": "Grad Sofiya",
                "iso_a2": "BG",
                "note": null,
                "latitude": 42.6833494253,
                "longitude": 23.3166540107,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 1185000,
                "pop_min": 874827,
                "pop_other": 871735,
                "rank_max": 12,
                "rank_min": 11,
                "geonameid": 727011,
                "meganame": "Sofia",
                "ls_name": "Sofia",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                23.314708,
                42.685295,
                23.314708,
                42.685295
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    23.314708,
                    42.685295
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 4,
                "natscale": 50,
                "labelrank": 6,
                "featurecla": "Admin-0 capital alt",
                "name": "Sri Jawewardenepura Kotte",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Sri Jawewardenepura Kotte",
                "adm0cap": 0,
                "capalt": 1,
                "capin": "Legislative cap",
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Sri Lanka",
                "sov_a3": "LKA",
                "adm0name": "Sri Lanka",
                "adm0_a3": "LKA",
                "adm1name": "Colombo",
                "iso_a2": "LK",
                "note": null,
                "latitude": 6.90000388481,
                "longitude": 79.9499930409,
                "changed": 4,
                "namediff": 1,
                "diffnote": "Name changed.",
                "pop_max": 115826,
                "pop_min": 115826,
                "pop_other": 2456292,
                "rank_max": 9,
                "rank_min": 9,
                "geonameid": 1238992,
                "meganame": null,
                "ls_name": "Kotte",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5.6
            },
            "bbox": [
                79.949993,
                6.900004,
                79.949993,
                6.900004
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    79.949993,
                    6.900004
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 1,
                "natscale": 300,
                "labelrank": 7,
                "featurecla": "Admin-0 capital",
                "name": "Stockholm",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Stockholm",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "Sweden",
                "sov_a3": "SWE",
                "adm0name": "Sweden",
                "adm0_a3": "SWE",
                "adm1name": "Stockholm",
                "iso_a2": "SE",
                "note": null,
                "latitude": 59.3507599543,
                "longitude": 18.0973347328,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Location adjusted.",
                "pop_max": 1264000,
                "pop_min": 1253309,
                "pop_other": 0,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 2673730,
                "meganame": "Stockholm",
                "ls_name": "Stockholm",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 3
            },
            "bbox": [
                18.095389,
                59.352706,
                18.095389,
                59.352706
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    18.095389,
                    59.352706
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 6,
                "featurecla": "Admin-0 capital",
                "name": "Sucre",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Sucre",
                "adm0cap": 1,
                "capalt": null,
                "capin": "Official (const",
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Bolivia",
                "sov_a3": "BOL",
                "adm0name": "Bolivia",
                "adm0_a3": "BOL",
                "adm1name": "Chuquisaca",
                "iso_a2": "BO",
                "note": null,
                "latitude": -19.0409708467,
                "longitude": -65.2595156267,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 224838,
                "pop_min": 221736,
                "pop_other": 221736,
                "rank_max": 10,
                "rank_min": 10,
                "geonameid": 3903987,
                "meganame": null,
                "ls_name": "Sucre",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 4.7
            },
            "bbox": [
                -65.259516,
                -19.040971,
                -65.259516,
                -19.040971
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -65.259516,
                    -19.040971
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Suva",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Suva",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Fiji",
                "sov_a3": "FJI",
                "adm0name": "Fiji",
                "adm0_a3": "FJI",
                "adm1name": "Central",
                "iso_a2": "FJ",
                "note": null,
                "latitude": -18.1330159314,
                "longitude": 178.441707315,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Location adjusted.",
                "pop_max": 175399,
                "pop_min": 88271,
                "pop_other": 0,
                "rank_max": 9,
                "rank_min": 8,
                "geonameid": 2198148,
                "meganame": null,
                "ls_name": "Suva",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                178.441707,
                -18.133016,
                178.441707,
                -18.133016
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    178.441707,
                    -18.133016
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 0,
                "natscale": 600,
                "labelrank": 3,
                "featurecla": "Admin-1 capital",
                "name": "Sydney",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Sydney",
                "adm0cap": 0,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "Australia",
                "sov_a3": "AUS",
                "adm0name": "Australia",
                "adm0_a3": "AUS",
                "adm1name": "New South Wales",
                "iso_a2": "AU",
                "note": null,
                "latitude": -33.9200109672,
                "longitude": 151.185179809,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Changed feature class.",
                "pop_max": 4630000,
                "pop_min": 3641422,
                "pop_other": 2669348,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 2147714,
                "meganame": "Sydney",
                "ls_name": "Sydney1",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 1.7
            },
            "bbox": [
                151.183234,
                -33.918065,
                151.183234,
                -33.918065
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.183234,
                    -33.918065
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 1,
                "natscale": 300,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Taipei",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Taipei",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "Taiwan",
                "sov_a3": "TWN",
                "adm0name": "Taiwan",
                "adm0_a3": "TWN",
                "adm1name": "Taipei City",
                "iso_a2": "TW",
                "note": null,
                "latitude": 25.03583333333,
                "longitude": 121.56833333333,
                "changed": 1,
                "namediff": 0,
                "diffnote": "Corrected coordinates.",
                "pop_max": 6900273,
                "pop_min": 2618772,
                "pop_other": 5698241,
                "rank_max": 13,
                "rank_min": 12,
                "geonameid": 1668341,
                "meganame": "Taipei",
                "ls_name": "Taipei",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 3.7
            },
            "bbox": [
                121.568333,
                25.035833,
                121.568333,
                25.035833
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    121.568333,
                    25.035833
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Tallinn",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Tallinn",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Estonia",
                "sov_a3": "EST",
                "adm0name": "Estonia",
                "adm0_a3": "EST",
                "adm1name": "Harju",
                "iso_a2": "EE",
                "note": null,
                "latitude": 59.4338773795,
                "longitude": 24.7280407295,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 394024,
                "pop_min": 340027,
                "pop_other": 317949,
                "rank_max": 10,
                "rank_min": 10,
                "geonameid": 588409,
                "meganame": null,
                "ls_name": "Tallinn",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                24.728041,
                59.433877,
                24.728041,
                59.433877
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    24.728041,
                    59.433877
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 6,
                "natscale": 30,
                "labelrank": 0,
                "featurecla": "Admin-0 capital",
                "name": "Tarawa",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Tarawa",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Kiribati",
                "sov_a3": "KIR",
                "adm0name": "Kiribati",
                "adm0_a3": "KIR",
                "adm1name": null,
                "iso_a2": "KI",
                "note": null,
                "latitude": 1.33818750562,
                "longitude": 173.017570829,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Location adjusted. Changed scale rank.",
                "pop_max": 28802,
                "pop_min": 22534,
                "pop_other": 0,
                "rank_max": 7,
                "rank_min": 7,
                "geonameid": 2110079,
                "meganame": null,
                "ls_name": "Tarawa",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 6
            },
            "bbox": [
                173.017571,
                1.338188,
                173.017571,
                1.338188
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    173.017571,
                    1.338188
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 1,
                "natscale": 300,
                "labelrank": 6,
                "featurecla": "Admin-0 capital",
                "name": "Tashkent",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Tashkent",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Uzbekistan",
                "sov_a3": "UZB",
                "adm0name": "Uzbekistan",
                "adm0_a3": "UZB",
                "adm1name": "Tashkent",
                "iso_a2": "UZ",
                "note": null,
                "latitude": 41.311701883,
                "longitude": 69.2949328195,
                "changed": 5,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 2184000,
                "pop_min": 1978028,
                "pop_other": 2806287,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 1512569,
                "meganame": "Tashkent",
                "ls_name": "Tashkent",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 3.7
            },
            "bbox": [
                69.292987,
                41.313648,
                69.292987,
                41.313648
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    69.292987,
                    41.313648
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Tbilisi",
                "namepar": null,
                "namealt": "T'Bilisi",
                "diffascii": 0,
                "nameascii": "Tbilisi",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Georgia",
                "sov_a3": "GEO",
                "adm0name": "Georgia",
                "adm0_a3": "GEO",
                "adm1name": "Tbilisi",
                "iso_a2": "GE",
                "note": null,
                "latitude": 41.7250099885,
                "longitude": 44.7907954496,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 1100000,
                "pop_min": 1005257,
                "pop_other": 977179,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 611717,
                "meganame": "Tbilisi",
                "ls_name": "Tbilisi",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                44.78885,
                41.726956,
                44.78885,
                41.726956
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    44.78885,
                    41.726956
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Tegucigalpa",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Tegucigalpa",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Honduras",
                "sov_a3": "HND",
                "adm0name": "Honduras",
                "adm0_a3": "HND",
                "adm1name": "Francisco Morazán",
                "iso_a2": "HN",
                "note": null,
                "latitude": 14.1020449005,
                "longitude": -87.2175293393,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 946000,
                "pop_min": 850848,
                "pop_other": 1014546,
                "rank_max": 11,
                "rank_min": 11,
                "geonameid": 3600949,
                "meganame": "Tegucigalpa",
                "ls_name": "Tegucigalpa",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                -87.219475,
                14.103991,
                -87.219475,
                14.103991
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -87.219475,
                    14.103991
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 1,
                "natscale": 300,
                "labelrank": 5,
                "featurecla": "Admin-0 capital",
                "name": "Tehran",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Tehran",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Iran",
                "sov_a3": "IRN",
                "adm0name": "Iran",
                "adm0_a3": "IRN",
                "adm1name": "Tehran",
                "iso_a2": "IR",
                "note": null,
                "latitude": 35.6719427684,
                "longitude": 51.4243440336,
                "changed": 5,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 7873000,
                "pop_min": 7153309,
                "pop_other": 8209012,
                "rank_max": 13,
                "rank_min": 13,
                "geonameid": 112931,
                "meganame": "Tehran",
                "ls_name": "Tehran",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 3
            },
            "bbox": [
                51.422398,
                35.673889,
                51.422398,
                35.673889
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    51.422398,
                    35.673889
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 2,
                "natscale": 200,
                "labelrank": 8,
                "featurecla": "Admin-0 capital alt",
                "name": "Tel Aviv-Yafo",
                "namepar": null,
                "namealt": "Tel Aviv-Jaffa",
                "diffascii": 0,
                "nameascii": "Tel Aviv-Yafo",
                "adm0cap": 0,
                "capalt": 1,
                "capin": "While Jerulsale",
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Israel",
                "sov_a3": "IS1",
                "adm0name": "Israel",
                "adm0_a3": "ISR",
                "adm1name": "Tel Aviv",
                "iso_a2": "IL",
                "note": null,
                "latitude": 32.0799914744,
                "longitude": 34.7700117582,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 3112000,
                "pop_min": 378358,
                "pop_other": 2306851,
                "rank_max": 12,
                "rank_min": 10,
                "geonameid": 293394,
                "meganame": "Tel Aviv-Yafo",
                "ls_name": "Tel Aviv-Yafo",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 4
            },
            "bbox": [
                34.768066,
                32.081937,
                34.768066,
                32.081937
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    34.768066,
                    32.081937
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 4,
                "natscale": 50,
                "labelrank": 8,
                "featurecla": "Admin-0 capital alt",
                "name": "The Hague",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "The Hague",
                "adm0cap": 0,
                "capalt": 1,
                "capin": "Official, legis",
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Kingdom of the Netherlands",
                "sov_a3": "NLD",
                "adm0name": "Netherlands",
                "adm0_a3": "NLD",
                "adm1name": "Zuid-Holland",
                "iso_a2": "NL",
                "note": null,
                "latitude": 52.080036844,
                "longitude": 4.26996130231,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 1406000,
                "pop_min": 501725,
                "pop_other": 688599,
                "rank_max": 12,
                "rank_min": 11,
                "geonameid": 2747373,
                "meganame": null,
                "ls_name": "The Hague",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5.6
            },
            "bbox": [
                4.269961,
                52.080037,
                4.269961,
                52.080037
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.269961,
                    52.080037
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Thimphu",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Thimphu",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Bhutan",
                "sov_a3": "BTN",
                "adm0name": "Bhutan",
                "adm0_a3": "BTN",
                "adm1name": "Thimphu",
                "iso_a2": "BT",
                "note": null,
                "latitude": 27.4729858592,
                "longitude": 89.639014037,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Location adjusted.",
                "pop_max": 98676,
                "pop_min": 79185,
                "pop_other": 0,
                "rank_max": 8,
                "rank_min": 8,
                "geonameid": 1252416,
                "meganame": null,
                "ls_name": "Thimphu",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                89.639014,
                27.472986,
                89.639014,
                27.472986
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    89.639014,
                    27.472986
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Tirana",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Tirana",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Albania",
                "sov_a3": "ALB",
                "adm0name": "Albania",
                "adm0_a3": "ALB",
                "adm1name": "Durrës",
                "iso_a2": "AL",
                "note": null,
                "latitude": 41.3275407095,
                "longitude": 19.8188830146,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 895350,
                "pop_min": 421286,
                "pop_other": 517792,
                "rank_max": 11,
                "rank_min": 10,
                "geonameid": 3183875,
                "meganame": null,
                "ls_name": "Tirana",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                19.818883,
                41.327541,
                19.818883,
                41.327541
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    19.818883,
                    41.327541
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 0,
                "natscale": 600,
                "labelrank": 2,
                "featurecla": "Admin-0 capital",
                "name": "Tokyo",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Tokyo",
                "adm0cap": 1,
                "capalt": null,
                "capin": "De facto capita",
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "Japan",
                "sov_a3": "JPN",
                "adm0name": "Japan",
                "adm0_a3": "JPN",
                "adm1name": "Tokyo",
                "iso_a2": "JP",
                "note": null,
                "latitude": 35.6850169058,
                "longitude": 139.751407429,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 35676000,
                "pop_min": 8336599,
                "pop_other": 12945252,
                "rank_max": 14,
                "rank_min": 13,
                "geonameid": 1850147,
                "meganame": "Tokyo",
                "ls_name": "Tokyo",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 1.7
            },
            "bbox": [
                139.749462,
                35.686963,
                139.749462,
                35.686963
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    139.749462,
                    35.686963
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 1,
                "natscale": 300,
                "labelrank": 2,
                "featurecla": "Admin-1 capital",
                "name": "Toronto",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Toronto",
                "adm0cap": 0,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "Canada",
                "sov_a3": "CAN",
                "adm0name": "Canada",
                "adm0_a3": "CAN",
                "adm1name": "Ontario",
                "iso_a2": "CA",
                "note": null,
                "latitude": 43.6999798778,
                "longitude": -79.4200207944,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 5213000,
                "pop_min": 3934421,
                "pop_other": 3749229,
                "rank_max": 13,
                "rank_min": 12,
                "geonameid": 6167865,
                "meganame": "Toronto",
                "ls_name": "Toronto",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 2.1
            },
            "bbox": [
                -79.421967,
                43.701926,
                -79.421967,
                43.701926
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -79.421967,
                    43.701926
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 2,
                "natscale": 200,
                "labelrank": 7,
                "featurecla": "Admin-0 capital",
                "name": "Tripoli",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Tripoli",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Libya",
                "sov_a3": "LBY",
                "adm0name": "Libya",
                "adm0_a3": "LBY",
                "adm1name": "Tajura' wa an Nawahi al Arba",
                "iso_a2": "LY",
                "note": null,
                "latitude": 32.8925000194,
                "longitude": 13.1800117581,
                "changed": 5,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 2189000,
                "pop_min": 229398,
                "pop_other": 1149981,
                "rank_max": 12,
                "rank_min": 10,
                "geonameid": -1,
                "meganame": "Tarabulus",
                "ls_name": "Tripoli1",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 4
            },
            "bbox": [
                13.180012,
                32.8925,
                13.180012,
                32.8925
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    13.180012,
                    32.8925
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 7,
                "featurecla": "Admin-0 capital",
                "name": "Tunis",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Tunis",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Tunisia",
                "sov_a3": "TUN",
                "adm0name": "Tunisia",
                "adm0_a3": "TUN",
                "adm1name": "Tunis",
                "iso_a2": "TN",
                "note": null,
                "latitude": 36.8027781362,
                "longitude": 10.1796780992,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 2412500,
                "pop_min": 728453,
                "pop_other": 1675117,
                "rank_max": 12,
                "rank_min": 11,
                "geonameid": 2464470,
                "meganame": null,
                "ls_name": "Tunis",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                10.179678,
                36.802778,
                10.179678,
                36.802778
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    10.179678,
                    36.802778
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 7,
                "featurecla": "Admin-0 capital",
                "name": "Ulaanbaatar",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Ulaanbaatar",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Mongolia",
                "sov_a3": "MNG",
                "adm0name": "Mongolia",
                "adm0_a3": "MNG",
                "adm1name": "Ulaanbaatar",
                "iso_a2": "MN",
                "note": null,
                "latitude": 47.9166733999,
                "longitude": 106.916615762,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 885000,
                "pop_min": 769612,
                "pop_other": 765359,
                "rank_max": 11,
                "rank_min": 11,
                "geonameid": 2028462,
                "meganame": "Ulaanbaatar",
                "ls_name": "Ulaanbaatar",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 4
            },
            "bbox": [
                106.91467,
                47.918619,
                106.91467,
                47.918619
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    106.91467,
                    47.918619
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 1,
                "natscale": 300,
                "labelrank": 1,
                "featurecla": "Admin-1 capital",
                "name": "Ürümqi",
                "namepar": null,
                "namealt": "rumqi|Wulumqi",
                "diffascii": 0,
                "nameascii": "Urumqi",
                "adm0cap": 0,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "China",
                "sov_a3": "CHN",
                "adm0name": "China",
                "adm0_a3": "CHN",
                "adm1name": "Xinjiang Uygur",
                "iso_a2": "CN",
                "note": null,
                "latitude": 43.8050122264,
                "longitude": 87.5750056549,
                "changed": 5,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 2151000,
                "pop_min": 1508225,
                "pop_other": 2044401,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 1529102,
                "meganame": "Cramqi (Wulumqi)",
                "ls_name": "Urumqi",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 3.7
            },
            "bbox": [
                87.57306,
                43.806958,
                87.57306,
                43.806958
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    87.57306,
                    43.806958
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 7,
                "natscale": 20,
                "labelrank": 0,
                "featurecla": "Admin-0 capital",
                "name": "Vaduz",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Vaduz",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Liechtenstein",
                "sov_a3": "LIE",
                "adm0name": "Liechtenstein",
                "adm0_a3": "LIE",
                "adm1name": null,
                "iso_a2": "LI",
                "note": null,
                "latitude": 47.1337237743,
                "longitude": 9.51666947291,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 36281,
                "pop_min": 5342,
                "pop_other": 33009,
                "rank_max": 7,
                "rank_min": 5,
                "geonameid": 3042030,
                "meganame": null,
                "ls_name": "Vaduz",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 6.7
            },
            "bbox": [
                9.516669,
                47.133724,
                9.516669,
                47.133724
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    9.516669,
                    47.133724
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 0,
                "featurecla": "Admin-0 capital",
                "name": "Valletta",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Valletta",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Malta",
                "sov_a3": "MLT",
                "adm0name": "Malta",
                "adm0_a3": "MLT",
                "adm1name": null,
                "iso_a2": "MT",
                "note": null,
                "latitude": 35.8997324819,
                "longitude": 14.5147106513,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 368250,
                "pop_min": 6966,
                "pop_other": 336174,
                "rank_max": 10,
                "rank_min": 5,
                "geonameid": 2562305,
                "meganame": null,
                "ls_name": "Valletta",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 5
            },
            "bbox": [
                14.514711,
                35.899732,
                14.514711,
                35.899732
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    14.514711,
                    35.899732
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 3,
                "featurecla": "Admin-0 capital alt",
                "name": "Valparaíso",
                "namepar": null,
                "namealt": "Valparaiso",
                "diffascii": 1,
                "nameascii": "Valparaiso",
                "adm0cap": 0,
                "capalt": 1,
                "capin": "Legislative cap",
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Chile",
                "sov_a3": "CHL",
                "adm0name": "Chile",
                "adm0_a3": "CHL",
                "adm1name": "Valparaíso",
                "iso_a2": "CL",
                "note": null,
                "latitude": -33.0477644666,
                "longitude": -71.6210136329,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 854000,
                "pop_min": 15938,
                "pop_other": 130815,
                "rank_max": 11,
                "rank_min": 6,
                "geonameid": 3445575,
                "meganame": "Valpara so",
                "ls_name": "Valparaiso2",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                -71.622959,
                -33.045819,
                -71.622959,
                -33.045819
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -71.622959,
                    -33.045819
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 1,
                "natscale": 300,
                "labelrank": 2,
                "featurecla": "Populated place",
                "name": "Vancouver",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Vancouver",
                "adm0cap": 0,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Canada",
                "sov_a3": "CAN",
                "adm0name": "Canada",
                "adm0_a3": "CAN",
                "adm1name": "British Columbia",
                "iso_a2": "CA",
                "note": null,
                "latitude": 49.2734165841,
                "longitude": -123.121644218,
                "changed": 5,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 2313328,
                "pop_min": 603502,
                "pop_other": 482002,
                "rank_max": 12,
                "rank_min": 11,
                "geonameid": 6173331,
                "meganame": "Vancouver",
                "ls_name": "Vancouver2",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 2.1
            },
            "bbox": [
                -123.12359,
                49.275362,
                -123.12359,
                49.275362
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -123.12359,
                    49.275362
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 8,
                "natscale": 10,
                "labelrank": 3,
                "featurecla": "Admin-0 capital",
                "name": "Vatican City",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Vatican City",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 0,
                "sov0name": "Vatican (Holy Sea)",
                "sov_a3": "VAT",
                "adm0name": "Vatican (Holy See)",
                "adm0_a3": "VAT",
                "adm1name": "Lazio",
                "iso_a2": "VA",
                "note": null,
                "latitude": 41.9000122264,
                "longitude": 12.4478083889,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 832,
                "pop_min": 832,
                "pop_other": 562430,
                "rank_max": 2,
                "rank_min": 2,
                "geonameid": 6691831,
                "meganame": null,
                "ls_name": "Vatican City",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 7
            },
            "bbox": [
                12.453387,
                41.903282,
                12.453387,
                41.903282
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    12.453387,
                    41.903282
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 0,
                "featurecla": "Admin-0 capital",
                "name": "Victoria",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Victoria",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Seychelles",
                "sov_a3": "SYC",
                "adm0name": "Seychelles",
                "adm0_a3": "SYC",
                "adm1name": null,
                "iso_a2": "SC",
                "note": null,
                "latitude": -4.61663165397,
                "longitude": 55.4499897856,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 33576,
                "pop_min": 22881,
                "pop_other": 33737,
                "rank_max": 7,
                "rank_min": 7,
                "geonameid": 241131,
                "meganame": null,
                "ls_name": "Victoria4",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 5
            },
            "bbox": [
                55.44999,
                -4.616632,
                55.44999,
                -4.616632
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    55.44999,
                    -4.616632
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 1,
                "natscale": 300,
                "labelrank": 7,
                "featurecla": "Admin-0 capital",
                "name": "Vienna",
                "namepar": "Wien",
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Vienna",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "Austria",
                "sov_a3": "AUT",
                "adm0name": "Austria",
                "adm0_a3": "AUT",
                "adm1name": "Wien",
                "iso_a2": "AT",
                "note": null,
                "latitude": 48.2000152782,
                "longitude": 16.3666389554,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 2400000,
                "pop_min": 1731000,
                "pop_other": 1480886,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 2761369,
                "meganame": "Wien",
                "ls_name": "Vienna",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 3.7
            },
            "bbox": [
                16.364693,
                48.201961,
                16.364693,
                48.201961
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.364693,
                    48.201961
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Vientiane",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Vientiane",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Laos",
                "sov_a3": "LAO",
                "adm0name": "Laos",
                "adm0_a3": "LAO",
                "adm1name": "Vientiane [prefecture]",
                "iso_a2": "LA",
                "note": null,
                "latitude": 17.9666927276,
                "longitude": 102.59998002,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 754000,
                "pop_min": 570348,
                "pop_other": 469811,
                "rank_max": 11,
                "rank_min": 11,
                "geonameid": 1651944,
                "meganame": null,
                "ls_name": "Vientiane",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                102.59998,
                17.966693,
                102.59998,
                17.966693
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    102.59998,
                    17.966693
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Vilnius",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Vilnius",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Lithuania",
                "sov_a3": "LTU",
                "adm0name": "Lithuania",
                "adm0_a3": "LTU",
                "adm1name": "Vilniaus",
                "iso_a2": "LT",
                "note": null,
                "latitude": 54.6833663118,
                "longitude": 25.3166352933,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 542366,
                "pop_min": 507029,
                "pop_other": 494356,
                "rank_max": 11,
                "rank_min": 11,
                "geonameid": 593116,
                "meganame": null,
                "ls_name": "Vilnius",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                25.316635,
                54.683366,
                25.316635,
                54.683366
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    25.316635,
                    54.683366
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 2,
                "natscale": 200,
                "labelrank": 5,
                "featurecla": "Admin-0 capital",
                "name": "Warsaw",
                "namepar": "Warszawa",
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Warsaw",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "Poland",
                "sov_a3": "POL",
                "adm0name": "Poland",
                "adm0_a3": "POL",
                "adm1name": "Masovian",
                "iso_a2": "PL",
                "note": null,
                "latitude": 52.2500006298,
                "longitude": 20.9999995511,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 1707000,
                "pop_min": 1702139,
                "pop_other": 2012431,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 756135,
                "meganame": "Warszawa",
                "ls_name": "Warsaw",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 4
            },
            "bbox": [
                20.998054,
                52.251946,
                20.998054,
                52.251946
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.998054,
                    52.251946
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 0,
                "natscale": 600,
                "labelrank": 1,
                "featurecla": "Admin-0 capital",
                "name": "Washington, D.C.",
                "namepar": null,
                "namealt": "Washington D.C.",
                "diffascii": 0,
                "nameascii": "Washington, D.C.",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 1,
                "megacity": 1,
                "sov0name": "United States",
                "sov_a3": "USA",
                "adm0name": "United States of America",
                "adm0_a3": "USA",
                "adm1name": "District of Columbia",
                "iso_a2": "US",
                "note": null,
                "latitude": 38.8995493765,
                "longitude": -77.0094185808,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 4338000,
                "pop_min": 552433,
                "pop_other": 2175991,
                "rank_max": 12,
                "rank_min": 11,
                "geonameid": 4140963,
                "meganame": "Washington, D.C.",
                "ls_name": "Washington, D.C.",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 2.1
            },
            "bbox": [
                -77.011364,
                38.901495,
                -77.011364,
                38.901495
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -77.011364,
                    38.901495
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Wellington",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Wellington",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "New Zealand",
                "sov_a3": "NZL",
                "adm0name": "New Zealand",
                "adm0_a3": "NZL",
                "adm1name": "Manawatu-Wanganui",
                "iso_a2": "NZ",
                "note": "Wellington metropolitan area",
                "latitude": -41.29998785369,
                "longitude": 174.78326585928,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 393400,
                "pop_min": 393400,
                "pop_other": 0,
                "rank_max": 10,
                "rank_min": 9,
                "geonameid": 2144168,
                "meganame": null,
                "ls_name": "Wellington",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 4
            },
            "bbox": [
                174.783266,
                -41.299988,
                174.783266,
                -41.299988
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    174.783266,
                    -41.299988
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 6,
                "featurecla": "Admin-0 capital",
                "name": "Windhoek",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Windhoek",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Namibia",
                "sov_a3": "NAM",
                "adm0name": "Namibia",
                "adm0_a3": "NAM",
                "adm1name": "Khomas",
                "iso_a2": "NA",
                "note": null,
                "latitude": -22.5700060844,
                "longitude": 17.0835461005,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 268132,
                "pop_min": 262796,
                "pop_other": 262796,
                "rank_max": 10,
                "rank_min": 10,
                "geonameid": 3352136,
                "meganame": null,
                "ls_name": "Windhoek",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                17.083546,
                -22.570006,
                17.083546,
                -22.570006
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    17.083546,
                    -22.570006
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Yamoussoukro",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Yamoussoukro",
                "adm0cap": 1,
                "capalt": 1,
                "capin": "Official capita",
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Ivory Coast",
                "sov_a3": "CIV",
                "adm0name": "Ivory Coast",
                "adm0_a3": "CIV",
                "adm1name": "Lacs",
                "iso_a2": "CI",
                "note": null,
                "latitude": 6.81838096,
                "longitude": -5.27550256491,
                "changed": 4,
                "namediff": 0,
                "diffnote": "Changed scale rank.",
                "pop_max": 206499,
                "pop_min": 194530,
                "pop_other": 206499,
                "rank_max": 10,
                "rank_min": 9,
                "geonameid": 2279755,
                "meganame": null,
                "ls_name": "Yamoussoukro",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                -5.275503,
                6.818381,
                -5.275503,
                6.818381
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -5.275503,
                    6.818381
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 6,
                "featurecla": "Admin-0 capital",
                "name": "Yaounde",
                "namepar": null,
                "namealt": "Yaounde",
                "diffascii": 0,
                "nameascii": "Yaounde",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Cameroon",
                "sov_a3": "CMR",
                "adm0name": "Cameroon",
                "adm0_a3": "CMR",
                "adm1name": "Centre",
                "iso_a2": "CM",
                "note": null,
                "latitude": 3.86670066214,
                "longitude": 11.5166507555,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 1611000,
                "pop_min": 1060587,
                "pop_other": 1060747,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 2220957,
                "meganame": "Yaound",
                "ls_name": "Yaounde",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                11.514705,
                3.868647,
                11.514705,
                3.868647
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    11.514705,
                    3.868647
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Yerevan",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Yerevan",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 1,
                "sov0name": "Armenia",
                "sov_a3": "ARM",
                "adm0name": "Armenia",
                "adm0_a3": "ARM",
                "adm1name": "Erevan",
                "iso_a2": "AM",
                "note": null,
                "latitude": 40.1811507355,
                "longitude": 44.5135513904,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 1102000,
                "pop_min": 1093485,
                "pop_other": 1154748,
                "rank_max": 12,
                "rank_min": 12,
                "geonameid": 616052,
                "meganame": "Yerevan",
                "ls_name": "Yerevan",
                "ls_match": 1,
                "checkme": 5,
                "min_zoom": 5
            },
            "bbox": [
                44.511606,
                40.183097,
                44.511606,
                40.183097
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    44.511606,
                    40.183097
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "scalerank": 3,
                "natscale": 110,
                "labelrank": 8,
                "featurecla": "Admin-0 capital",
                "name": "Zagreb",
                "namepar": null,
                "namealt": null,
                "diffascii": 0,
                "nameascii": "Zagreb",
                "adm0cap": 1,
                "capalt": null,
                "capin": null,
                "worldcity": 0,
                "megacity": 0,
                "sov0name": "Croatia",
                "sov_a3": "HRV",
                "adm0name": "Croatia",
                "adm0_a3": "HRV",
                "adm1name": "Grad Zagreb",
                "iso_a2": "HR",
                "note": null,
                "latitude": 45.8000067333,
                "longitude": 15.9999946682,
                "changed": 0,
                "namediff": 0,
                "diffnote": null,
                "pop_max": 722526,
                "pop_min": 698966,
                "pop_other": 690638,
                "rank_max": 11,
                "rank_min": 11,
                "geonameid": 3186886,
                "meganame": null,
                "ls_name": "Zagreb",
                "ls_match": 1,
                "checkme": 0,
                "min_zoom": 5
            },
            "bbox": [
                15.999995,
                45.800007,
                15.999995,
                45.800007
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    15.999995,
                    45.800007
                ]
            }
        }
    ],
    "bbox": [
        -175.220564477617,
        -41.2999878536917,
        179.216647094029,
        64.1500236197392
    ]
}


let cityCoordinates = {};

const GLOBE_CONTAINER = document.getElementById('container');
const GLOBE_IMAGE_URL = "./night_map.png";
const TOTAL_CITIES = 100//parseInt(prompt("How many cities do you want to connect"));
const ADJACENCY_FACTOR = 4;

const createLabelArray = (points) => {
    let labelArray = [];
    points.map(point => {
        let label = {
            lat: point.properties.latitude,
            lng: point.properties.longitude,
            text: point.properties.name,
            pop_max: point.properties.pop_max,
        }
        labelArray.push(label);
    })
    return labelArray;
}

let ringData = [{
    "lat": null,
    "lng": null,
    "color": "#FFFFFF",
    "name": null
}, {
    "lat": null,
    "lng": null,
    "color": "#f16c6c",
    "name": null
}];
const drawRing = (globe) => {
    let k = ringData[1].lat === null ? ringData.slice(0, 1) : ringData;
    globe.ringsData(k)
        .ringColor((r) => r.color)
        .ringAltitude(0.0115)
}

const createPaths = (globe, coords) => {
    // console.log("FINE TILL NOW");
    // console.log(coords);
    globe
        .pathsData(coords)
        .pathPoints(p => p.coords)
        .pathLabel(p => p.name)
        .pathColor(() => "#124600")
        .pathDashLength(0.1)
        .pathDashGap(0.008)
        .pathDashAnimateTime(50000)
}

const createAdjacencyMatrix = (truthTable) => {
    const matrix = truthTable.map(place => {
        return place.map(dest => {
            if (dest !== 0) {
                return Math.ceil((Math.random() * 23000) + 2000);
            } else {
                return Infinity;
            }
        })
    })
    return matrix;
}

const createTruthTable = (length) => {
    let truthTable = [];
    PLACES.features.slice(0, length).map((place, pos) => {
        const placeConnectionTruthTable = (_place, index) => {
            let tableArray = new Array(length).fill(0);
            // let newArray = tableArray.map((_val, i) => Math.random() < 0.05 && index !== i ? 1 : 0);
            let nArray = tableArray.map(_val => Math.floor(Math.random() * 243) < ADJACENCY_FACTOR ? 1 : 0);
            // let totalOnes = 0;
            // const totalConnections = Math.ceil(Math.random() * 2);
            return nArray;
        }
        truthTable.push(placeConnectionTruthTable(place, pos));
    })
    return truthTable;
};

const initializeGlobe = (container, myImageUrl, labels) => {
    const myGlobe = Globe({
        renderConfig: { antialias: true, alpha: true },
        animateIn: true,
        waitForGlobeReady: true
    });
    myGlobe(container)
        .globeImageUrl(myImageUrl)
        .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
        .labelsData(labels)
        .labelText(label => label.text)
        .labelAltitude(0.01)
        .labelIncludeDot(true)
        .labelSize(0.5)
        .labelDotRadius(0.4)
        // .labelSize(label => Math.sqrt(label.pop_max) * 4e-4)
        // .labelDotRadius(label => Math.sqrt(label.pop_max) * 4e-4)
        .labelColor(() => '#FFFFFF')
        .labelResolution(2)
        .onLabelClick((event) => {
            // console.log("clicked");
            // console.log(event);
            handleLabelClick(event);
        })
        // .onPointLabelClick(label => {

        //     label.style.color = 'desiredColor';
        // })
        // .arcsData(arcs)
        .onGlobeReady(() => console.log("globe loaded"))
        .showGraticules(true)
        .showAtmosphere(true)
        // .atmosphereColor("rgb(1, 168, 81)")
        .atmosphereAltitude(0.15);
    // .onGlobeClick(({ lat, lng }) => {
    //     POINTS.push([lat, lng]);
    //     console.log(lat, lng);
    //     console.log("globe clicked")
    // })
    return myGlobe;
}

//BASED ON ADJACENCY_MATRIX, NOW FETCH LOCATIONS(lat, lang for each) AND ITERATE OVER EACH ROW FOR DESTINATION AND GENERATE PATH
const generatePaths = () => {
    let count = 0;
    const LOCATIONS = PLACES.features.map(feature => {
        const { latitude, longitude, name } = feature.properties;
        return [latitude, longitude, name];
    });
    // console.log(LOCATIONS);
    let paths = [];
    //PATHS MUST BE IN THE FOLLOWING FORMAT
    /*
    //ARRAY [
        OBJECT {
        "coords": ARRAY[ARRAY[s_latitude, s_longitude], ARRAY[d_latitude, d_longitude]],
        "name": STRING "___"
        }
        ..OBJECT{}
        ..OBJECT{}
        ..OBJECT{}
    ]

    */

    adjacencyMatrix.map((place, i) => {
        const sourceArray = [PLACES.features[i].properties.latitude, PLACES.features[i].properties.longitude];
        place.map((dest, j) => {
            if (dest !== -1 && dest !== Infinity) {
                count++;
                // console.log(LOCATIONS[j]);
                const destinationArray = [PLACES.features[j].properties.latitude, PLACES.features[j].properties.longitude];
                let obj = {
                    "coords": [],
                    "name": null
                }
                obj.coords.push(sourceArray);
                obj.coords.push(destinationArray);
                obj.name = dest
                paths.push(obj);
            }
        })
    })
    // console.log(count);
    // console.log(paths);
    createPaths(GLOBE, paths);
}

const LABELS = createLabelArray(PLACES.features.slice(0, TOTAL_CITIES));
const GLOBE = initializeGlobe(GLOBE_CONTAINER, GLOBE_IMAGE_URL, LABELS);

//ZOOM IN
setTimeout(() => document.querySelector("canvas").dispatchEvent(new WheelEvent('wheel', { deltaY: -4000 })), 500);
//TAKES LENGTH AS ARGUMENT GENERATING LENGTHxLENGTH MATRIX
const truthTable = createTruthTable(length = TOTAL_CITIES);
//TAKES TRUTH TABLE AS ARGUMENT AND GENERATES ADJACENCY_MATRIX FOR EACH PLACE
const adjacencyMatrix = createAdjacencyMatrix(truthTable);
generatePaths();
// createPaths(GLOBE, PATHS_DATA);

//CLICK FUNCTIONALITY
let source = null;

// let fromPlace = prompt("Where do you wanna go from?");
// let toPlace = prompt("Enter your destination: ");
const getPlaceIndex = (placeName) => {
    let ind = -1;
    PLACES.features.map((f, i) => f.properties.name.toLowerCase() === placeName.toLowerCase() ? ind = i : ind);
    return ind;
}



//FORM STUFF
const sourceInput = document.getElementById("source-input");
const destInput = document.getElementById("destination-input");
const distanceButton = document.getElementById("distance-button");
const distanceHeading = document.getElementById("distance-heading");
const warshallDistanceHeading = document.getElementById("warshall-distance-heading");

const pathPara = document.getElementById("path");

sourceInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && destInput.value.trim().length > 0) {
        distanceButton.dispatchEvent(new Event("click"));
    }
})

destInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        distanceButton.dispatchEvent(new Event("click"));
    }
})

distanceButton.addEventListener("click", () => {
    const source = getPlaceIndex(sourceInput.value);
    const dest = getPlaceIndex(destInput.value);
    // console.log(source);
    // console.log(dest);
    let t = adjacencyMatrix[source][dest];
    distanceHeading.innerHTML = t;
    // console.log(t);
    let y = next[source][dest];
    warshallDistanceHeading.innerHTML = y;
    // Find shortest path from node 0 to node 3
    let shortestPathDistance = findShortestPath({ dist, next }, source, dest);
    console.log('Shortest Path Distance:', shortestPathDistance); // Output: 7
    warshallDistanceHeading.innerHTML = shortestPathDistance;
    if (shortestPathDistance === Infinity) {
        let p = PLACES.features[source].properties;
        let labelClickEvent = {
            "lat": p.latitude,
            "lng": p.longitude,
            "text": sourceInput.value.toLowerCase()
        }
        handleLabelClick(labelClickEvent);
        p = PLACES.features[dest].properties;
        labelClickEvent = {
            "lat": p.latitude,
            "lng": p.longitude,
            "text": destInput.value.toLowerCase()
        }
        handleLabelClick(labelClickEvent);
        return;
    }
    let path = constructPath(next, source, dest);

    console.log('Path:', path);
    let floydWarshallArcs = [];
    pathPara.innerHTML = JSON.stringify(path.map((placeIndex, ind) => {
        const property = PLACES.features[placeIndex].properties
        if (ind + 1 < path.length) {
            const nextProperty = PLACES.features[path[ind + 1]].properties
            floydWarshallArcs.push({
                name: "Total Distance: " + shortestPathDistance,
                startLat: property.latitude,
                startLng: property.longitude,
                endLat: nextProperty.latitude,
                endLng: nextProperty.longitude,
                color: "green",
                dashLength: 0.05,
                dashGap: 0.01,
                dashAnimateTime: 5000
            });
        }
        return property.name;
    }));
    console.log("floydWarshallArcs are: ");
    console.log(floydWarshallArcs);
    let labelClickEvent = {
        "lat": floydWarshallArcs[0].startLat,
        "lng": floydWarshallArcs[0].startLng,
        "text": sourceInput.value.toLowerCase()
    }
    handleLabelClick(labelClickEvent);
    const finalElem = floydWarshallArcs[floydWarshallArcs.length - 1];
    labelClickEvent = {
        "lat": finalElem.endLat,
        "lng": finalElem.endLng,
        "text": destInput.value.toLowerCase()
    };
    handleLabelClick(labelClickEvent);
    ARCS = ARCS.slice(0, 1);
    ARCS = ARCS.concat(floydWarshallArcs);
    GLOBE.arcsData(ARCS)
        .arcLabel(a => a.name)
        .arcColor(a => a.name === Infinity ? "red" : a.color)
        .arcStroke(a => a.color === "green" ? 1.2 : 0.7)
        .arcDashLength(0.05)
        .arcDashGap(0.01)
        .arcDashAnimateTime(a => a.color === "green" ? 10000 : 40000);
})



//FLOYD-WARSHALL ALGORITHM
function floydWarshall(adjMatrix) {
    const len = adjMatrix.length;
    let dist = [];
    let next = [];

    // Initialize distance and path reconstruction matrices
    for (let i = 0; i < len; i++) {
        dist[i] = [];
        next[i] = [];
        for (let j = 0; j < len; j++) {
            dist[i][j] = adjMatrix[i][j];
            next[i][j] = adjMatrix[i][j] !== Infinity ? j : null;
        }
    }

    // Applying Floyd-Warshall algorithm
    for (let k = 0; k < len; k++) {
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                if (dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                    next[i][j] = next[i][k];
                }
            }
        }
    }

    return { dist, next };
}

function findShortestPath(resultMatrix, start, end) {
    return resultMatrix.dist[start][end];
}

function constructPath(nextMatrix, start, end) {
    if (nextMatrix[start][end] === null) return null;
    let path = [start];
    while (start !== end) {
        start = nextMatrix[start][end];
        path.push(start);
    }
    return path;
}


const handleLabelClick = (event) => {

    const { lat, lng, text } = event;
    if (source === null) {
        source = [lat, lng, text.toLowerCase()];
        ringData[0].lat = lat;
        ringData[0].lng = lng;
        ringData[0].name = text.toLowerCase();
        console.log(ringData);
        drawRing(GLOBE);
        sourceInput.value = text;
    } else {
        //CANCEL IF SOURCE AND DEST IS SAME
        if (source[2] === text.toLowerCase()) {
            return;
        }
        /*
        FORMAT OF SINGLE ARC OBJECT
        {
            name: null,
            startLat: null,
            startLng: null,
            endLat: null,
            endLng: null,
            color: "white",
            dashLength: 0.05,
            dashGap: 0.01,
            dashAnimateTime: 10000
        }
        */
        //FIND DISTANCE FROM MATRIX LATER ON
        // console.log(event);
        let s = getPlaceIndex(source[2]);
        let destination = getPlaceIndex(text);
        ARCS[0].name = adjacencyMatrix[s][destination];
        ARCS[0].startLat = source[0];
        ARCS[0].startLng = source[1];
        ARCS[0].endLat = lat;
        ARCS[0].endLng = lng;
        ringData[1].lat = lat;
        ringData[1].lng = lng;
        ringData[1].name = text.toLowerCase();
        const firstIndex = getPlaceIndex(ringData[0].name);
        const secondIndex = getPlaceIndex(ringData[1].name);
        destInput.value = text;
        // console.log("adjacendy matrix shows them as:");
        // console.log(adjacencyMatrix[firstIndex][secondIndex]);
        drawRing(GLOBE);
        GLOBE.arcsData(ARCS.slice(0, 1))
            .arcStroke(0.7)
            .arcColor(a => a.name === Infinity ? "red" : a.color)
            .arcDashLength(0.05)
            .arcDashGap(0.01)
            .arcDashAnimateTime(a => a.color === "green" ? 10000 : 40000);
        source = null;
        // showMatrix(next);
    }
}


//FLOYD-WARSHALL
let { dist, next } = floydWarshall(adjacencyMatrix);



//SHOW MATRIX FUNCTION

const showMatrix = (matrix) => {
    const cellSize = 5;
    const svg = d3.select("#matrix");

    const row = svg.selectAll(".row")
        .data(matrix)
        .enter().append("g")
        .attr("class", "row")
        .attr("transform", (d, i) => `translate(0, ${i * cellSize})`);

    const cell = row.selectAll(".cell")
        .data(d => d)
        .enter().append("g")
        .attr("class", "cell")
        .attr("transform", (d, i) => `translate(${i * cellSize}, 0)`);

    cell.append("rect")
        .attr("width", cellSize)
        .attr("height", cellSize)
        .style("fill", "white")
        .style("stroke", "white");

    cell.append("text")
        .attr("x", cellSize / 2)
        .attr("y", cellSize / 2)
        .attr("dy", ".15em")
        .text(d => d === Infinity ? '∞' : d);
}

// showMatrix(adjacencyMatrix);