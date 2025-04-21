export const morphology_list = {
    maxillary: {
        "Winging":[0, ["UI1"], [1, 5, 9]],
        "Shoveling":[1, ["UC", "UI2", "UI1"], [0, 7, 9]],
        "Double-Shoveling":[2, ["UP2", "UC", "UI2", "UI1"], [0, 6, 9]],
        "Labial Convexity":[3, ["UI2", "UI1"], [0, 4, 9]],
    },
    mandibular: {
        "Shoveling":[21, ["LC", "LI2", "LI1"], [0, 7, 9]],
        "Double-Shoveling":[22, ["LC", "LI2", "LI1"], [0, 6, 9]],
        "Canine Distal Acc Ridge":[23, ["LC"], [0, 5, 9]],
        "Premolar Ling Cusp Variation": [24, ["LP2", "LP1"],[0, 12]]
    },
    help: {
        0:"The axial rotation of one or both of the central maxillary incisors is known as winging.  No plaque.\n1. Bilateral winging: Central incisors are rotated mesiolingually, giving a V-shaped appearance when viewed from the occlusal surface. The angle formed is less than 20 degrees.  \n2. The angle formed is greater than 20 degrees.\n3. Unilateral winging: Only one of the incisors is rotated. The other is straight.  Score the straight tooth as \"4\". \n4. Straight: One or both teeth form a straight labial surface, or follow the curvature of the dental arcade. \n5. Counter-winging: One or both teeth are rotated distolingually.  This is not scored as present if it is due to tooth crowding.  Score the straight tooth as \"4\".\n9. Unobservable."
    }
}