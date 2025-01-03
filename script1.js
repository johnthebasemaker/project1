const materials = [
     
    { id: 1001, name: "Face Shield - Glass", image: "img/1001.jpg" },
    { id: 1002, name: "Face Shield - Gear", image: "img/1002.jpg" },
    { id: 1003, name: "Dust Mask", image: "img/1003.jpg" },
    { id: 1004, name: "Tyvek Coverall - XL", image: "img/1004.jpg" },
    { id: 1005, name: "Tyvek Coverall - Large", image: "img/1005.jpg" },
    { id: 1006, name: "Tyvek Coverall - Medium", image: "img/1006.jpg" },
    { id: 1007, name: "Cotton - Disposable Coverall XL", image: "img/1007.jpg" },
    { id: 1008, name: "Green Coated Gloves", image: "img/1008.jpg" },
    { id: 1009, name: "Cotton Gloves", image: "img/1009.jpg" },
    { id: 1010, name: "Ear Plug", image: "img/1010.jpg" },
    { id: 1011, name: "Mono Goggle", image: "img/1011.jpg" },
    { id: 1012, name: "Safety Glass - Clear", image: "img/1012.jpg" },
    { id: 1013, name: "Blasting Gloves", image: "img/1013.jpg" },
    { id: 1014, name: "Handle-Roller Brush ", image: "img/1014.jpg" },
    { id: 1015, name: "Plastic Bucket 5 ltrs", image: "img/1015.jpg" },
    { id: 1016, name: "Rubber Bucket 10 ltrs", image: "img/1016.jpg" },
    { id: 1017, name: "Sand Paper G120", image: "img/1017.jpg" },
    { id: 1018, name: "Sand Paper G80", image: "img/1018.jpg" },
    { id: 1019, name: "Nylon Rope - 5 mm", image: "img/1019.jpg" },
    { id: 1020, name: "Nylon Rope - 10mm - 100 Running mtrs / Pc.", image: "img/1020.jpg" },
    { id: 1021, name: "Nylon Rope - 18mm", image: "img/1021.jpg" },
    { id: 1022, name: "Anti-Vibrating Gloves", image: "img/1022.jpg" },
    { id: 1023, name: "Cut Resistant Gloves", image: "img/1023.jpg" },
    { id: 1024, name: "Chemical Gloves", image: "img/1024.jpg" },
    { id: 1025, name: "Tarpaulin - Orange 10 Yard X 10 Yard", image: "img/1025.jpg" },
    {id: 1026, name: "Masking Tape 1", image: "img/1026.jpg" },
    { id: 1027, name: "Masking Tape 2", image: "img/1027.jpg" },
    { id: 1028, name: "Safety Warning Tape - Red & White ", image: "img/1028.jpg" },
    { id: 1029, name: "Safety Warning Tape - Yellow & Black", image: "img/1029.jpg" },
    { id: 1030, name: "100W LED light", image: "img/1030.jpg" },
    { id: 1031, name: "150W LED light", image: "img/1031.jpg" },
    { id: 1032, name: "200W LED light", image: "img/1032.jpg" },
    { id: 1033, name: "16 AMPS 220 Male Socket", image: "img/1033.jpg" },
    { id: 1034, name: "16 AMPS 220 FeMale Socket", image: "img/1034.jpg" },
    { id: 1035, name: "3 core Cable", image: "img/1035.jpg" },
    { id: 1036, name: "Y Connector", image: "img/1036.jpg" },
    { id: 1037, name: "8 Exhaust fan with duct", image: "img/1037.jpg" },
    { id: 1038, name: "10 Exhaust fan with duct", image: "img/1038.jpg" },
    { id: 1039, name: "12 Exhaust fan with duct", image: "img/1039.jpg" },
    { id: 1040, name: "14 Exhaust fan with duct", image: "img/1040.jpg" },
    { id: 1041, name: "16 Exhaust fan with duct", image: "img/1041.jpg" },
    { id: 1042, name: "18 Exhaust fan with duct", image: "img/1042.jpg" },
    { id: 1043, name: "8 Duct for Exhaust fan", image: "img/1043.jpg" },
    { id: 1044, name: "10 Duct for Exhaust fan", image: "img/1044.jpg" },
    { id: 1045, name: "12 Duct for Exhaust fan", image: "img/1045.jpg" },
    { id: 1046, name: "14 Duct for Exhaust fan", image: "img/1046.jpg" },
    { id: 1047, name: "16 Duct for Exhaust fan", image: "img/1047.jpg" },
    { id: 1048, name: "18 Duct for Exhaust fan", image: "img/1048.jpg" },
    { id: 1049, name: "Cable Tie Wire", image: "img/1049.jpg" },
    { id: 1050, name: "Broom stick ", image: "img/1050.jpg" },
    { id: 1051, name: "Broom stick - Brush only", image: "img/1051.jpg" },
    { id: 1052, name: "Cotton Waste", image: "img/1052.jpg" },
    { id: 1053, name: "Binding Wire", image: "img/1053.jpg" },
    { id: 1054, name: "Cutter Olfa knife", image: "img/1054.jpg" },
    { id: 1055, name: "5 meter Measuring tape", image: "img/1055.jpg" },
    { id: 1056, name: "3 meter Measuring tape", image: "img/1056.jpg" },
    { id: 1057, name: "7 meter Measuring tape", image: "img/1057.jpg" },
    { id: 1058, name: "White Marker", image: "img/1058.jpg" },
    { id: 1059, name: "Olfa knife Blade", image: "img/1059.jpg" },
    { id: 1060, name: "Fein Blade - 63903234210 Star lock", image: "img/1060.jpg" },
    { id: 1061, name: "Fein Machine - Star Lock Model", image: "img/1061.jpg" },
    { id: 1062, name: "Fein Machine - Super Cut Model", image: "img/1062.jpg" },
    { id: 1063, name: "Fein Blade - SUPER CUT ", image: "img/1063.jpg" },
    { id: 1064, name: "Grinding Machine 4.5", image: "img/1064.jpg" },
    { id: 1065, name: "Sanding Disc - G36-25  Pcs./box", image: "img/1065.jpg" },
    { id: 1066, name: "Sanding Disc - G36-50  Pcs./box", image: "img/1066.jpg" },
    { id: 1067, name: "Sanding Disc - G24", image: "img/1067.jpg" },
    { id: 1068, name: "Trash bags - BLACK COLOUR", image: "img/1068.jpg" },
    { id: 1069, name: "Blasting Glass - SMALL SIZE", image: "img/1069.jpg" },
    { id: 1070, name: "Blasting Glass - BIG SIZE", image: "img/1070.jpg" },
    { id: 1071, name: "Duct Tape - Grey 2", image: "img/1071.jpg" },
    { id: 1072, name: "Garnet empty Bag", image: "img/1072.jpg" },
    { id: 1073, name: "Roller Brush", image: "img/1073.jpg" },
    { id: 1074, name: "Chalk", image: "img/1074.jpg" },
    { id: 1075, name: "Chalk Line", image: "img/1075.jpg" },
    { id: 1076, name: "Teflon Tape", image: "img/1076.jpg" },
    { id: 1077, name: "4.5 Flex Pad", image: "img/1077.jpg" },
    { id: 1078, name: "3M Filter Mask Cartridge only 6066 ", image: "img/1078.jpg" },
    { id: 1079, name: "3M Filter Mask only", image: "img/1079.jpg" },
    { id: 1080, name: "Multi Gas Monitor-Honeywell Matrix BTW II", image: "img/1080.jpg" },
    { id: 1081, name: "125 amps Panel Board", image: "img/1081.jpg" },
    { id: 1082, name: "SCABA - Portable", image: "img/1082.jpg" },
    { id: 1083, name: "Safety Shoe - 40", image: "img/1083.jpg" },
    { id: 1084, name: "Safety Shoe - 41", image: "img/1084.jpg" },
    { id: 1085, name: "Safety Shoe - 42", image: "img/1085.jpg" },
    { id: 1086, name: "Safety Shoe - 43", image: "img/1086.jpg" },
    { id: 1087, name: "Safety Shoe - 44", image: "img/1087.jpg" },
    { id: 1088, name: "Push knife", image: "img/1088.jpg" },
    { id: 1089, name: "Hot knife blade", image: "img/1089.jpg" },
    { id: 1090, name: "Cable Duct - 3 way", image: "img/1090.jpg" },
    { id: 1091, name: "Chisel 1", image: "img/1091.jpg" },
    { id: 1092, name: "Chisel 1.5", image: "img/1092.jpg" },
    { id: 1093, name: "Chisel 3/4", image: "img/1093.jpg" },
    { id: 1094, name: "Flood Light 55 W", image: "img/1094.jpg" },
    { id: 1095, name: "Leather Gloves - welding", image: "img/1095.jpg" },
    { id: 1096, name: "Paint Brush 1", image: "img/1096.jpg" },
    { id: 1097, name: "Paint Brush 1.5", image: "img/1097.jpg" },
    { id: 1098, name: "Paint Brush 2", image: "img/1098.jpg" },
    { id: 1099, name: "Carbon Brush - Grinder Machine - E64", image: "img/1099.jpg" },
    { id: 1100, name: "Carbon Brush-Scrapper Machine - Fein - Starlock model", image: "img/1100.jpg" },
    { id: 1101, name: "Insulation Tape", image: "img/1101.jpg" },
    { id: 1102, name: "Wall Scrapper 1", image: "img/1102.jpg" },
    { id: 1103, name: "Wall Scrapper 2", image: "img/1103.jpg" },
    { id: 1104, name: "Wall Scrapper 3", image: "img/1104.jpg" },
    { id: 1105, name: "Wall Scrapper 4", image: "img/1105.jpg" },
    { id: 1106, name: "Cable Duct - 5 way", image: "img/1106.jpg" },
    { id: 1107, name: "Cloth for Lining", image: "img/1107.jpg" },
    { id: 1108, name: "Flash Light", image: "img/1108.jpg" },
    { id: 1109, name: "Hose Clamp 2.5 - Curing - # 76", image: "img/1109.jpg" },
    { id: 1110, name: "Orifice Blast Nozzle", image: "img/1110.jpg" },
    { id: 1111, name: "Dead Man Switch", image: "img/1111.jpg" },
    { id: 1112, name: "Blast Hood with suit", image: "img/1112.jpg" },
    { id: 1113, name: "Air Cone - Dust Remover", image: "img/1113.jpg" },
    { id: 1114, name: "4 core Cable", image: "img/1114.jpg" },
    { id: 1115, name: "63 Amps Male Connector - 5 Pin -380 V", image: "img/1115.jpg" },
    { id: 1116, name: "63 Amps Female Connector - 5 Pin -380 V", image: "img/1116.jpg" },
    { id: 1117, name: "32 Amps Male Connector - 5 Pin -380 V", image: "img/1117.jpg" },
    { id: 1118, name: "32 Amps Female Connector - 5 Pin -380 V", image: "img/1118.jpg" },
    { id: 1119, name: "Hackshaw Blade", image: "img/1119.jpg" },
    { id: 1120, name: "Nurling Roller - Lining", image: "img/1120.jpg" },
    { id: 1121, name: "1055 - 5mm Rubber sheet - 14.5 RM", image: "img/1121.jpg" },
    { id: 1122, name: "1055 - 5mm Rubber sheet - 18.3 RM", image: "img/1122.jpg" },
    { id: 1123, name: "621 BC - 5mm Rubber sheet", image: "img/1123.jpg" },
    { id: 1124, name: "Blair 289 - Chemlok", image: "img/1124.jpg" },
    { id: 1125, name: "Blair 290 - Chemlok", image: "img/1125.jpg" },
    { id: 1126, name: "Blair 286 - Chemlok", image: "img/1126.jpg" },
    { id: 1127, name: "Polycorp 286 - Chemlok", image: "img/1127.jpg" },
    { id: 1128, name: "Polycorp 289 - Chemlok", image: "img/1128.jpg" },
    { id: 1129, name: "Polycorp 290 - Chemlok", image: "img/1129.jpg" },
    { id: 1130, name: "C202 S - Adhesive", image: "img/1130.jpg" },
    { id: 1131, name: "Toluene ", image: "img/1131.jpg" },
    { id: 1132, name: "Garnet 30/60", image: "img/1132.jpg" },
    { id: 1133, name: "Coverall Uniform Small (S) - with GI, SAR Logo", image: "img/1133.jpg" },
    { id: 1134, name: "Coverall Uniform Medium (M) - with GI, SAR Logo", image: "img/1134.jpg" },
    { id: 1135, name: "Coverall Uniform Large (L)- with GI, SAR Logo", image: "img/1135.jpg" },
    { id: 1136, name: "Coverall Uniform Xlarge (XL)- with GI, SAR Logo", image: "img/1136.jpg" },
    { id: 1137, name: "Coverall Uniform 4XL- with GI, SAR Logo", image: "img/1137.jpg" },
    { id: 1138, name: "Pneumatic Jackhammer", image: "img/1138.jpg" },
    { id: 1139, name: "Blotter Paper", image: "img/1139.jpg" },
    { id: 1140, name: "Shoe Cap", image: "img/1140.jpg" },
    { id: 1141, name: "Hammer 1.5 Lbs", image: "img/1141.jpg" },
    { id: 1142, name: "Divider 450mm Dia", image: "img/1142.jpg" },
    { id: 1143, name: "Twine Thread", image: "img/1143.jpg" },
    { id: 1144, name: "Cone Stone", image: "img/1144.jpg" },
    { id: 1145, name: "Carpenter Nail 1", image: "img/1145.jpg" },
    { id: 1146, name: "Carpenter Nail 1.5", image: "img/1146.jpg" },
    { id: 1147, name: "Hammer Handle", image: "img/1147.jpg" },
    { id: 1148, name: "Hose Wiplash Arrester 1", image: "img/1148.jpg" },
    { id: 1149, name: "Hose Wiplash Arrester 1.5", image: "img/1149.jpg" },
    { id: 1150, name: "Hose Wiplash Arrester 2", image: "img/1150.jpg" },
    { id: 1151, name: "Wire Brush", image: "img/1151.jpg" },
    { id: 1152, name: "Chalk - (1074)", image: "img/1152.jpg" },
    { id: 1153, name: "Safety Chain Plastic - Red & White", image: "img/1153.jpg" },
    { id: 1154, name: "Green Flag", image: "img/1154.jpg" },
    { id: 1155, name: "Red Flag", image: "img/1155.jpg" },
    { id: 1156, name: "Gunny Cloth", image: "img/1156.jpg" },
    { id: 1157, name: "Oil stone - Knife Sharping", image: "img/1157.jpg" },
    { id: 1158, name: "Air Compressor - Air man 750 CFM", image: "img/1158.jpg" },
    { id: 1159, name: "Temporary water storage tank (2,000 Litre)", image: "img/1159.jpg" },
    { id: 1160, name: "Garnet Suction machines / Dry Vacuum Sucker", image: "img/1160.jpg" },
    { id: 1161, name: "Portable office Cabin 20X12'- Office 1", image: "img/1161.jpg" },
    { id: 1162, name: "Portable office Cabin 20X12'- Office 2", image: "img/1162.jpg" },
    { id: 1163, name: "Portable Mess hall container ", image: "img/1163.jpg" },
    { id: 1164, name: "Portable 20' Dry container", image: "img/1164.jpg" },
    { id: 1165, name: "Portable 40' Refer container", image: "img/1165.jpg" },
    { id: 1166, name: "Boom truck capcity min 7 ton ", image: "img/1166.jpg" },
    { id: 1167, name: "Bus", image: "img/1167.jpg" },
    { id: 1168, name: "Pick up", image: "img/1168.jpg" },
    { id: 1169, name: "Car", image: "img/1169.jpg" },
    { id: 1170, name: "Diesel Tanker 5000 ltrs", image: "img/1170.jpg" },
    { id: 1171, name: "Diesel tank (1000 Litre)", image: "img/1171.jpg" },
    { id: 1172, name: "Pressure Guage (0-10 BAR)", image: "img/1172.jpg" },
    { id: 1173, name: "DFT Gauge (12000 Microns)", image: "img/1173.jpg" },
    { id: 1174, name: "Spark Tester", image: "img/1174.jpg" },
    { id: 1175, name: "Air Receiver", image: "img/1175.jpg" },
    { id: 1176, name: "Ladder & Platform (Aluminium)", image: "img/1176.jpg" },
    { id: 1177, name: "Ladder & Platform (Steel)", image: "img/1177.jpg" },
    { id: 1178, name: "Blasting pot", image: "img/1178.jpg" },
    { id: 1179, name: "Air hose 2", image: "img/1179.jpg" },
    { id: 1180, name: "Air purifier", image: "img/1180.jpg" },
    { id: 1181, name: "Spray Gun", image: "img/1181.jpg" },
    { id: 1182, name: "Steam Header", image: "img/1182.jpg" },
    { id: 1183, name: "Dip trays - For Diesel Tank & Boiler", image: "img/1183.jpg" },
    { id: 1184, name: "Steel table (12m x 1.2m)", image: "img/1184.jpg" },
    { id: 1185, name: "Steel table (6m x 1.2m)", image: "img/1185.jpg" },
    { id: 1186, name: "Temperature Gauge (Dial Guage)", image: "img/1186.jpg" },
    { id: 1187, name: "Temperature Gauge (Laser)", image: "img/1187.jpg" },
    { id: 1188, name: "Needle pressure gauge", image: "img/1188.jpg" },
    { id: 1189, name: "Profile gauge", image: "img/1189.jpg" },
    { id: 1190, name: "Thickness gauge (Banana)", image: "img/1190.jpg" },
    { id: 1191, name: "Hardness Gauge", image: "img/1191.jpg" },
    { id: 1192, name: "Blast coupling screw", image: "img/1192.jpg" },
    { id: 1193, name: "Vacuum cleaner  industrial heavy duty ", image: "img/1193.jpg" },
    { id: 1194, name: "Water hose (100 m)", image: "img/1194.jpg" },
    { id: 1195, name: "Hose - Blasting  end couplings male ", image: "img/1195.jpg" },
    { id: 1196, name: "Hose - Blasting  end couplings female ", image: "img/1196.jpg" },
    { id: 1197, name: "Earthing wire 19 wires", image: "img/1197.jpg" },
    { id: 1198, name: "Earthing Rod with cable connector ", image: "img/1198.jpg" },
    { id: 1199, name: "Steam hose 1.5", image: "img/1199.jpg" },
    { id: 1200, name: "Blinds with fastners", image: "img/1200.jpg" },
    { id: 1201, name: "Doom type blind for steam trap", image: "img/1201.jpg" },
    { id: 1202, name: "Extension Cable box", image: "img/1202.jpg" },
    { id: 1203, name: "Tube Lights for Office", image: "img/1203.jpg" },
    { id: 1204, name: "Cables (Extension Cable)", image: "img/1204.jpg" },
    { id: 1205, name: "Pushcot (Jack Trolley) ", image: "img/1205.jpg" },
    { id: 1206, name: "Tripod with winch -  Karam ", image: "img/1206.jpg" },
    { id: 1207, name: "Tripod only - Karam ", image: "img/1207.jpg" },
    { id: 1208, name: "1 HP suction motor ", image: "img/1208.jpg" },
    { id: 1209, name: "Blasting yellow holder ", image: "img/1209.jpg" },
    { id: 1210, name: "Table Scale  2mtr and 4 mtr ", image: "img/1210.jpg" },
    { id: 1211, name: "Right angle", image: "img/1211.jpg" },
    { id: 1212, name: "Spanner set all size", image: "img/1212.jpg" },
    { id: 1213, name: "Allenkey set all size", image: "img/1213.jpg" },
    { id: 1214, name: "Pipe wrinch 12", image: "img/1214.jpg" },
    { id: 1215, name: "Pipe wrinch 10", image: "img/1215.jpg" },
    { id: 1216, name: "Pipe wrinch 20", image: "img/1216.jpg" },
    { id: 1217, name: "Pencil grinder - 220 v", image: "img/1217.jpg" },
    { id: 1218, name: "Air Hose: 3/4  x 40 Meter", image: "img/1218.jpg" },
    { id: 1219, name: "Air Hose: 3/8 x 25 Meter", image: "img/1219.jpg" },
    { id: 1220, name: "Air conditioner - Window 2 Ton - 2 Nos", image: "img/1220.jpg" },
    { id: 1221, name: "Screw Driver Set", image: "img/1221.jpg" },
    { id: 1222, name: "Adjustable Spanner 12", image: "img/1222.jpg" },
    { id: 1223, name: "Adjustable Spanner 8", image: "img/1223.jpg" },
    { id: 1224, name: "Wire Cutter", image: "img/1224.jpg" },
    { id: 1225, name: "D Shackle 1", image: "img/1225.jpg" },
    { id: 1226, name: "D Shackle 3/4", image: "img/1226.jpg" },
    { id: 1227, name: "Ac Coil Cleaner", image: "img/1227.jpg" },
    { id: 1228, name: "Lifting Belt  1 Ton", image: "img/1228.jpg" },
    { id: 1229, name: "Lifting Belt  2 Ton", image: "img/1229.jpg" },
    { id: 1230, name: "Lifting Belt  3 Ton", image: "img/1230.jpg" },
    { id: 1231, name: "Lifting Belt  4 Ton", image: "img/1231.jpg" },
    { id: 1232, name: "Cable Drum 40 meters", image: "img/1232.jpg" },
    { id: 1233, name: "Kettle for office", image: "img/1233.jpg" },
    { id: 1234, name: "Karam Winch only", image: "img/1234.jpg" },
    { id: 1235, name: "Sanford Torch", image: "img/1235.jpg" },
    { id: 1236, name: "Paper Cutter", image: "img/1236.jpg" },
    { id: 1237, name: "File Tray", image: "img/1237.jpg" },
    { id: 1238, name: "Manila Rope", image: "img/1238.jpg" },
    { id: 1239, name: "Tower Tool Box", image: "img/1239.jpg" },
    { id: 1240, name: "Tower Socket & Screw Box", image: "img/1240.jpg" },
    { id: 1241, name: "Dewalt Drill Set", image: "img/1241.jpg" },
    { id: 1242, name: "Tiedao Impact Drill", image: "img/1242.jpg" },
    { id: 1243, name: "Chain for ladder", image: "img/1243.jpg" },
    { id: 1244, name: "Ocarina Insect Killer Light", image: "img/1244.jpg" },
    { id: 1245, name: "Oil hand pump", image: "img/1245.jpg" },
    { id: 1246, name: "Dust Collector Tank", image: "img/1246.jpg" },
    { id: 1247, name: "Water level hose - 6mm X Mtrs", image: "img/1247.jpg" },
    { id: 1248, name: "Water level hose  - 1.5 inch", image: "img/1248.jpg" },
    { id: 1249, name: "Hand wire brush with wooden handle", image: "img/1249.jpg" },
    { id: 1250, name: "50mm Padlock", image: "img/1250.jpg" },
    { id: 1251, name: "Tool Box - 16", image: "img/1251.jpg" },
    { id: 1252, name: "Tool Box - 19", image: "img/1252.jpg" },
    { id: 1253, name: "Jerry can - 20 L", image: "img/1253.jpg" },
    { id: 1254, name: "Jerry can - 10 L", image: "img/1254.jpg" },
    { id: 1255, name: "Jerry can - 5 L", image: "img/1255.jpg" },
    { id: 1256, name: "Writing Pad", image: "img/1256.jpg" },
    { id: 1257, name: "Safety Horn", image: "img/1257.jpg" },
    { id: 1258, name: "Safety Concrete Post", image: "img/1258.jpg" },
    { id: 1259, name: "Garden Sweeping Rack", image: "img/1259.jpg" },
    { id: 1260, name: "Electrical cable 2 core (2 x 1 Sq.mm)", image: "img/1260.jpg" },
    { id: 1261, name: "Ladder for wagon entry", image: "img/1261.jpg" },
    { id: 1262, name: "Table Scale - 1 Meter", image: "img/1262.jpg" },
    { id: 1263, name: "Snake Gaiters", image: "img/1263.jpg" },
    { id: 1264, name: "Blasting Air Receiver Pot Coupling", image: "img/1264.jpg" },
    { id: 1265, name: "Helmet - blue", image: "img/1265.jpg" },
    { id: 1266, name: "Helmet - white", image: "img/1266.jpg" },
    { id: 1267, name: "Harness - Safety Harness ", image: "img/1267.jpg" },
    { id: 1268, name: "Safety Vest Orange without SAR logo", image: "img/1268.jpg" },
    { id: 1269, name: "Fire Extinguser(10 Kgs) DCP", image: "img/1269.jpg" },
    { id: 1270, name: "Stretcher", image: "img/1270.jpg" },
    { id: 1271, name: "Eye Wash shower", image: "img/1271.jpg" },
    { id: 1272, name: "Oil spil kit", image: "img/1272.jpg" },
    { id: 1273, name: "Dust bin", image: "img/1273.jpg" },
    { id: 1274, name: "First Aid kit", image: "img/1274.jpg" },
    { id: 1275, name: "Bump Kit", image: "img/1275.jpg" },
    { id: 1276, name: "Safety Vest Orange with SAR Logo", image: "img/1276.jpg" },
    { id: 1277, name: "Scaffolding Key", image: "img/1277.jpg" },
    { id: 1278, name: "Safety Cone - Red", image: "img/1278.jpg" },
    { id: 1279, name: "Wheel Barrow", image: "img/1279.jpg" },
    { id: 1280, name: "Shovel - Large", image: "img/1280.jpg" },
    { id: 1281, name: "SS 316 L - Weld Electrode 2.6mm", image: "img/1281.jpg" },
    { id: 1282, name: "SS 316 L - Weld Electrode 3.2mm", image: "img/1282.jpg" },
    { id: 1283, name: "Cup Brush 2.5 Twisted", image: "img/1283.jpg" },
    { id: 1284, name: "Cup Brush 4 Crimped", image: "img/1284.jpg" },
    { id: 1285, name: "Cup Brush 4 Twisted", image: "img/1285.jpg" },
    { id: 1286, name: "Welding Holder 500AMPS", image: "img/1286.jpg" },
    { id: 1287, name: "Flap Disc - Aluminium oxide 4.5", image: "img/1287.jpg" },
    { id: 1288, name: "Cutting Disc 4.5 1.6mm", image: "img/1288.jpg" },
    { id: 1289, name: "Cutting Disc 4.5 3.2mm", image: "img/1289.jpg" },
    { id: 1290, name: "DP - Cleaner ", image: "img/1290.jpg" },
    { id: 1291, name: "DP - Penatrant", image: "img/1291.jpg" },
    { id: 1292, name: "DP - Developer", image: "img/1292.jpg" },
    { id: 1293, name: "Welding Apron", image: "img/1293.jpg" },
    { id: 1294, name: "Welding Hand sleeve", image: "img/1294.jpg" },
    { id: 1295, name: "Welding - Cleaning Wire Brush", image: "img/1295.jpg" },
    { id: 1296, name: "D-Shackle Small (For Ladder Chain)", image: "img/1296.jpg" },
    { id: 1297, name: "3 core Cable - 1.5mm", image: "img/1297.jpg" },
    { id: 1298, name: "Hook for Manila Rope", image: "img/1298.jpg" },
    { id: 1299, name: "Blasting- Air line hose 1/2X 1/4 Nipple", image: "img/1299.jpg" },
    { id: 1300, name: "2 sticker type safety warning tape r&w", image: "img/1300.jpg" },
    { id: 1301, name: "Carbon brush E64 - 4.5 Grinder machine ", image: "img/1301.jpg" },
    { id: 1302, name: "Carbide bit", image: "img/1302.jpg" },
    { id: 1303, name: "Nurling Roller - Lining - 3/4", image: "img/1303.jpg" },
    { id: 1304, name: "Nurling Roller - Lining - 1", image: "img/1304.jpg" },
    { id: 1305, name: "Flex Hose 3/4 for Wiring", image: "img/1305.jpg" },
    { id: 1306, name: "flex Hose 1.5 for Wiring", image: "img/1306.jpg" },
    { id: 1307, name: "Grinding Disc 5mm - Metal", image: "img/1307.jpg" },
    { id: 1308, name: "Apron - for coating work", image: "img/1308.jpg" },
    { id: 1309, name: "Earthing Wire 12 AWG", image: "img/1309.jpg" },
    { id: 1310, name: "FIRE Extinguser(5 Kgs) CO2", image: "img/1310.jpg" },
    { id: 1311, name: "Welding Helmut ", image: "img/1311.jpg" },
    { id: 1312, name: "Flap wheel - Aluminium oxide coarse", image: "img/1312.jpg" },
    { id: 1313, name: "Remafix S +H3 SOFT PASTE", image: "img/1313.jpg" },
    { id: 1314, name: "Chemlok 220", image: "img/1314.jpg" },
    { id: 1315, name: "Chemlok 205", image: "img/1315.jpg" },
    { id: 1316, name: "Weld Electrod - 7018 (3.2mm)", image: "img/1316.jpg" },
    { id: 1317, name: "Fire Blanket", image: "img/1317.jpg" },
    { id: 1318, name: "Clear Tape 2", image: "img/1318.jpg" },
    { id: 1319, name: "Wire wheel - Mechanical", image: "img/1319.jpg" },
    { id: 1320, name: "SC 2000 - BLACK", image: "img/1320.jpg" },
    { id: 1321, name: "Weld Electrod - E6013 (2.6mm)", image: "img/1321.jpg" },
    { id: 1322, name: "Weld Electrod - 7018 (2.6mm)", image: "img/1322.jpg" },
    { id: 1323, name: "Grinding Disc 6mm - Metal", image: "img/1323.jpg" },
    { id: 1324, name: "Weld Electrod - E6013 (3.2mm)", image: "img/1324.jpg" },
    
    ];
    
    // Get the hamburger and nav-links elements
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    // Add event listener to toggle the active class on the nav links
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    
    const gallery = document.getElementById("gallery");
    const searchBar = document.getElementById("search-bar");
    
    
    
    // Display all materials initially
    function displayMaterials(filteredMaterials) {
        gallery.innerHTML = ""; // Clear existing materials
        filteredMaterials.forEach(material => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <img src="${material.image}" alt="${material.name}">
                <p>${material.name}</p>
            `;
            gallery.appendChild(card);
        });
    }
    
    // Search functionality
    const fuse = new Fuse(materials, {
        keys: ["name", "id"], // Search by name and image ID
        threshold: 0.4        // Adjust for approximate matches
    });
    
    searchBar.addEventListener("input", () => {
        const query = searchBar.value;
        const results = fuse.search(query);
        const filteredMaterials = results.map(result => result.item);
        displayMaterials(filteredMaterials);
    });
    
    searchBar.addEventListener("input", () => {
        const query = searchBar.value.toLowerCase();
        const filteredMaterials = materials.filter(material =>
            material.name.toLowerCase().includes(query) || // Match material name
            material.id.toString().includes(query)         // Match image name (ID)
        );
        displayMaterials(filteredMaterials);
    });
    
    
    
    
    // Initial load
    displayMaterials(materials);
    