export const morphology_list = {
    options: {
        "Shoveling":[0, ["UC", "UI2", "UI1", "LC", "LI2", "LI1"], [0, 7, 9]],
        "Double-Shoveling":[1, ["UP2", "UC", "UI2", "UI1", "LP2", "LC", "LI2", "LI1"], [0, 6, 9]],
        "Canine Distal Acc Ridge":[2, ["UC", "LC"], [0, 5, 9]],
        "Enamel Extensions":[3, ["UM3", "UM2", "UM1", "UP2", "UP1", "LM3", "LM2", "LM1", "LP2", "LP1"], [0, 3, 9]],
        "Radical Number":[4, ["UM3", "UM2", "UM1", "UP2", "UP1", "UC", "UI2", "UI1", "LM3", "LM2", "LM1", "LP2", "LP1", "LC", "LI2", "LI1"], [1, 8, 9]],
        "Odontome":[5, ["UP2", "UP1", "LP2", "LP1"], [0, 1, 9]],

        "Winging":[6, ["UI1"], [1, 5, 9]],
        "Labial Convexity":[7, ["UI2", "UI1"], [0, 4, 9]],
        "Interruption Groove":[8, ["UI2", "UI1"], [0, 4, 9]],
        "Tuberculum Dentale":[9, ["UC", "UI2", "UI1"], [0, 7, 9]],
        "Canine Mesial Ridge":[10, ["UC"], [0, 3, 9]],
        "PreM Mes and Dist Acc Cups":[11, ["UP2, UP1"], [0, 1, 9]],
        "Tricuspid Premolars":[12, ["UP2", "UP1"], [0, 1, 9]],
        "Distosaggital Ridge":[13, ["UP1"], [0, 1, 9]],
        "Metacone":[14, ["UM3", "UM2", "UM1"], [0, 5, 9]], //3.5?????
        "Hypocone":[15, ["UM3", "UM2", "UM1"], [0, 5, 9]], //3.5?????
        "Metaconule":[16, ["UM3", "UM2", "UM1"], [0, 5, 9]],
        "Carabelli's Trait":[17, ["UM3", "UM2", "UM1"], [0, 7, 9]],
        "Parastyle":[18, ["UM3", "UM2", "UM1"], [0, 6, 9]],
        "Maxillary Root Number":[19, ["UM3", "UM2", "UM1", "UP2", "UP1"], [1, 4, 9]],
        "Peg-Shaped Teeth":[20, ["UM3", "UI2"], [0, 2, 9]],
        
        "Premolar Ling Cusp Variation": [21, ["LP2", "LP1"],[0, 12]], //1.5?
        "Anterior Fovea":[22, ["LM1"], [0, 6, 9]],
        "Groove Pattern":[23, ["LM3", "LM2", "LM1"], [1, 4, 9]],
        "Cusp Number":[24, ["LM3", "LM2", "LM1"], [4, 6, 9]],
        "Deflecting Wrinkle":[25, ["LM1"], [1, 5, 9]],
        "Distal Trigonid Crest":[26, ["LM3", "LM2", "LM1"], [1, 5, 9]],
        "Protostylid":[27, ["LM3", "LM2", "LM1"], [1, 5, 9]],
        "Cusp 5 (Hypoconulid)":[28, ["LM3", "LM2", "LM1"], [1, 5, 9]],
        "Cusp 6 (Entoconulid)":[29, ["LM3", "LM2", "LM1"], [1, 5, 9]],
        "Cusp 7":[30, ["LM3", "LM2", "LM1"], [1, 5, 9]],
        "Tome's Root":[31, ["LP1"], [0, 5, 9]],
        "Mandibular Root Number":[32, ["LM3", "LM2", "LM1", "LC"], [1, 4, 9]],
    },
    help: {
        "Winging":<>
            <p className="help-text-title">Winging</p>
            <div className="help-text-contents">
            The axial rotation of one or both of the central maxillary incisors is known as winging.  No plaque.
            </div>
            <div className="help-text-list">
            1. Bilateral winging: Central incisors are rotated mesiolingually, giving a V-shaped appearance when viewed from the occlusal surface. The angle formed is less than 20 degrees.  <br/><br/>
            2. The angle formed is greater than 20 degrees.<br/><br/>
            3. Unilateral winging: Only one of the incisors is rotated. The other is straight.  Score the straight tooth as "4". <br/><br/>
            4. Straight: One or both teeth form a straight labial surface, or follow the curvature of the dental arcade. <br/><br/>
            5. Counter-winging: One or both teeth are rotated distolingually.  This is not scored as present if it is due to tooth crowding.  Score the straight tooth as "4".<br/><br/>
            9. Unobservable.
            </div>
        </>,
        "Shoveling":<>
        <p className="help-text-title">Shoveling</p>
        <div className="help-text-contents">
        The presence of lingual marginal ridges or elevated enamel ridges that give teeth a shovel appearance.  Use plaque 1 for maxillary central incisors.  Use plaque 2 for maxillary lateral incisors and canines.  Use plaque 14 for mandibular incisors and plaque 2 for mandibular canines.
        </div>
        <div className="help-text-list">
        1. Bilateral winging: Central incisors are rotated mesiolingually, giving a V-shaped appearance when viewed from the occlusal surface. The angle formed is less than 20 degrees. <br/><br/>
        2. The angle formed is greater than 20 degrees.<br/><br/>
        3. Unilateral winging: Only one of the incisors is rotated. The other is straight.  Score the straight tooth as "4". <br/><br/>
        4. Straight: One or both teeth form a straight labial surface, or follow the curvature of the dental arcade. <br/><br/>
        5. Counter-winging: One or both teeth are rotated distolingually.  This is not scored as present if it is due to tooth crowding.  Score the straight tooth as "4".<br/><br/>
        9. Unobservable.<br/><br/>
        </div>
        </>
    }
}