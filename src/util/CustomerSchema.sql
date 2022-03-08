create schema if not exists rare_bookstore;
use rare_bookstore;

DROP TABLE IF EXISTS `customer`;

CREATE TABLE `customer` (
  `id` mediumint(8) unsigned NOT NULL auto_increment,
  `firstName` varchar(255) default NULL,
  `lastName` varchar(255) default NULL,
  `username` varchar(255) default NULL,
  `email` TEXT default NULL,
  `address` mediumint,
  `vip` varchar(255) default NULL,
  PRIMARY KEY (`id`)
) AUTO_INCREMENT=1;

INSERT INTO `customer` (`firstName`,`lastName`,`username`,`email`,`address`,`vip`)
VALUES
  ("Harrison","Mcgowan","m.harrison@google.com","m.harrison@google.com",1,"true"),
  ("Michael","Hogan","mhogan@protonmail.com","mhogan@protonmail.com",2,"true"),
  ("Autumn","Meadows","autumn-meadows@hotmail.com","autumn-meadows@hotmail.com",3,"true"),
  ("Myles","Pearson","p.myles4361@google.com","p.myles4361@google.com",4,"true"),
  ("Dacey","Riggs","d_riggs4914@icloud.com","d_riggs4914@icloud.com",5,"true"),
  ("Carla","Mcbride","mcbride.carla@google.com","mcbride.carla@google.com",6,"true"),
  ("Zenia","Maxwell","maxwell_zenia@icloud.com","maxwell_zenia@icloud.com",7,"true"),
  ("Kato","Fuentes","k-fuentes6343@protonmail.com","k-fuentes6343@protonmail.com",8,"true"),
  ("Emery","Jarvis","jarvis-emery3271@hotmail.com","jarvis-emery3271@hotmail.com",9,"true"),
  ("Melyssa","Merritt","m-melyssa4377@aol.com","m-melyssa4377@aol.com",10,"false"),
  ("Tanisha","Lott","t-lott@icloud.com","t-lott@icloud.com",11,"false"),
  ("Marsden","Sawyer","msawyer8570@outlook.com","msawyer8570@outlook.com",12,"true"),
  ("Yeo","Shields","y-shields@outlook.com","y-shields@outlook.com",13,"true"),
  ("Dustin","Roach","roach.dustin@outlook.com","roach.dustin@outlook.com",14,"true"),
  ("Sandra","Joyner","joyner_sandra8715@hotmail.com","joyner_sandra8715@hotmail.com",15,"false"),
  ("Eagan","Fowler","efowler1857@google.com","efowler1857@google.com",16,"true"),
  ("Vielka","Wolf","wvielka@google.com","wvielka@google.com",17,"true"),
  ("Kane","Melendez","k.melendez@protonmail.com","k.melendez@protonmail.com",18,"false"),
  ("Dante","Haney","h.dante2619@outlook.com","h.dante2619@outlook.com",19,"false"),
  ("Aretha","Oliver","a_oliver@google.com","a_oliver@google.com",20,"true"),
  ("Danielle","Ross","rdanielle@outlook.com","rdanielle@outlook.com",21,"false"),
  ("Velma","Cooper","vcooper@google.com","vcooper@google.com",22,"false"),
  ("Aileen","Shannon","saileen2364@hotmail.com","saileen2364@hotmail.com",23,"true"),
  ("Yoko","Burke","y_burke@yahoo.com","y_burke@yahoo.com",24,"true"),
  ("Joelle","Vaughn","vjoelle6306@yahoo.com","vjoelle6306@yahoo.com",25,"false"),
  ("Brynne","Frank","frankbrynne9546@hotmail.com","frankbrynne9546@hotmail.com",26,"true"),
  ("Mari","Cummings","mcummings594@google.com","mcummings594@google.com",27,"false"),
  ("Neve","Holloway","n_holloway@google.com","n_holloway@google.com",28,"true"),
  ("Jelani","Sweeney","jelani-sweeney3666@protonmail.com","jelani-sweeney3666@protonmail.com",29,"true"),
  ("Maile","Walters","m.walters@hotmail.com","m.walters@hotmail.com",30,"false"),
  ("Tobias","Langley","tobias_langley7508@google.com","tobias_langley7508@google.com",31,"false"),
  ("Giacomo","Woodard","gwoodard7854@aol.com","gwoodard7854@aol.com",32,"true"),
  ("Abigail","Barber","barber_abigail3333@yahoo.com","barber_abigail3333@yahoo.com",33,"true"),
  ("Phillip","Solomon","s.phillip@aol.com","s.phillip@aol.com",34,"false"),
  ("Joy","Bernard","joy-bernard@outlook.com","joy-bernard@outlook.com",35,"false"),
  ("Zane","Montoya","montoyazane5056@protonmail.com","montoyazane5056@protonmail.com",36,"true"),
  ("Akeem","Wilson","wilson.akeem@yahoo.com","wilson.akeem@yahoo.com",37,"true"),
  ("Elton","Callahan","e-callahan2613@yahoo.com","e-callahan2613@yahoo.com",38,"false"),
  ("Adele","Baxter","adelebaxter6572@yahoo.com","adelebaxter6572@yahoo.com",39,"true"),
  ("Patience","Larson","patience.larson6203@icloud.com","patience.larson6203@icloud.com",40,"true"),
  ("Prescott","Brooks","brooks_prescott622@outlook.com","brooks_prescott622@outlook.com",41,"true"),
  ("Christopher","Lane","christopher_lane@protonmail.com","christopher_lane@protonmail.com",42,"true"),
  ("Bianca","Mcdaniel","m_bianca@icloud.com","m_bianca@icloud.com",43,"false"),
  ("Dale","Lloyd","ldale@icloud.com","ldale@icloud.com",44,"false"),
  ("Quemby","Eaton","qeaton@icloud.com","qeaton@icloud.com",45,"false"),
  ("Jin","Ellison","jin_ellison@aol.com","jin_ellison@aol.com",46,"true"),
  ("Hakeem","Knight","hknight6551@outlook.com","hknight6551@outlook.com",47,"false"),
  ("Conan","Salas","salas.conan@google.com","salas.conan@google.com",48,"true"),
  ("Amelia","Sawyer","amelia_sawyer6661@yahoo.com","amelia_sawyer6661@yahoo.com",49,"true"),
  ("Mariam","Shelton","shelton_mariam@aol.com","shelton_mariam@aol.com",50,"false");
INSERT INTO `customer` (`firstName`,`lastName`,`username`,`email`,`address`,`vip`)
VALUES
  ("Brenden","Mccray","mccraybrenden@outlook.com","mccraybrenden@outlook.com",51,"true"),
  ("Caleb","Moody","moodycaleb8781@yahoo.com","moodycaleb8781@yahoo.com",52,"false"),
  ("Linus","Walsh","l.walsh6640@protonmail.com","l.walsh6640@protonmail.com",53,"true"),
  ("Debra","Mcfarland","m.debra8880@yahoo.com","m.debra8880@yahoo.com",54,"true"),
  ("Macaulay","Beasley","m_beasley@yahoo.com","m_beasley@yahoo.com",55,"true"),
  ("Paloma","Golden","paloma.golden1890@icloud.com","paloma.golden1890@icloud.com",56,"false"),
  ("Ila","Pacheco","i.pacheco@hotmail.com","i.pacheco@hotmail.com",57,"false"),
  ("Natalie","Strong","strong.natalie@icloud.com","strong.natalie@icloud.com",58,"true"),
  ("Alfreda","Rogers","rogersalfreda@hotmail.com","rogersalfreda@hotmail.com",59,"false"),
  ("Hiroko","Murphy","h_murphy1449@hotmail.com","h_murphy1449@hotmail.com",60,"false"),
  ("Sylvester","Becker","sbecker5579@outlook.com","sbecker5579@outlook.com",61,"true"),
  ("Jacob","Rollins","j.rollins@protonmail.com","j.rollins@protonmail.com",62,"true"),
  ("Howard","Gross","hgross5684@outlook.com","hgross5684@outlook.com",63,"true"),
  ("Leilani","Barlow","b_leilani@icloud.com","b_leilani@icloud.com",64,"false"),
  ("Kermit","Little","littlekermit3672@hotmail.com","littlekermit3672@hotmail.com",65,"true"),
  ("Winter","Sandoval","winter-sandoval@aol.com","winter-sandoval@aol.com",66,"false"),
  ("Keelie","Ross","k-ross@outlook.com","k-ross@outlook.com",67,"false"),
  ("Jana","Lara","jana.lara9626@icloud.com","jana.lara9626@icloud.com",68,"false"),
  ("Perry","Hines","hines.perry4823@aol.com","hines.perry4823@aol.com",69,"false"),
  ("Gloria","Estes","estes.gloria@protonmail.com","estes.gloria@protonmail.com",70,"false"),
  ("Nero","Petersen","petersennero7403@icloud.com","petersennero7403@icloud.com",71,"true"),
  ("Brian","Banks","brianbanks6285@yahoo.com","brianbanks6285@yahoo.com",72,"false"),
  ("Shannon","Blevins","blevins_shannon7319@hotmail.com","blevins_shannon7319@hotmail.com",73,"true"),
  ("Matthew","James","m-james@hotmail.com","m-james@hotmail.com",74,"true"),
  ("Elliott","Boone","elliottboone@protonmail.com","elliottboone@protonmail.com",75,"false"),
  ("Orson","Weeks","worson525@aol.com","worson525@aol.com",76,"false"),
  ("Wing","Barnett","barnett_wing6672@protonmail.com","barnett_wing6672@protonmail.com",77,"true"),
  ("Tanya","Lancaster","t-lancaster7079@outlook.com","t-lancaster7079@outlook.com",78,"true"),
  ("Beatrice","Delgado","dbeatrice7242@icloud.com","dbeatrice7242@icloud.com",79,"true"),
  ("Callie","Mayo","m_callie888@icloud.com","m_callie888@icloud.com",80,"false"),
  ("Carol","Harris","c.harris@yahoo.com","c.harris@yahoo.com",81,"false"),
  ("Kennedy","Ramsey","ramsey_kennedy1104@protonmail.com","ramsey_kennedy1104@protonmail.com",82,"true"),
  ("Rhonda","Becker","rhonda_becker5174@hotmail.com","rhonda_becker5174@hotmail.com",83,"false"),
  ("Larissa","Trujillo","larissatrujillo9788@yahoo.com","larissatrujillo9788@yahoo.com",84,"true"),
  ("Ella","Casey","casey_ella@aol.com","casey_ella@aol.com",85,"true"),
  ("Zia","Larson","larsonzia@yahoo.com","larsonzia@yahoo.com",86,"false"),
  ("Kerry","Kerr","kerrkerry@hotmail.com","kerrkerry@hotmail.com",87,"true"),
  ("Indigo","Cook","icook3483@outlook.com","icook3483@outlook.com",88,"false"),
  ("Otto","Moon","moonotto2204@outlook.com","moonotto2204@outlook.com",89,"true"),
  ("Mark","Reed","m.reed8042@yahoo.com","m.reed8042@yahoo.com",90,"true"),
  ("Jameson","Henson","henson.jameson@aol.com","henson.jameson@aol.com",91,"true"),
  ("Troy","Macias","m-troy@outlook.com","m-troy@outlook.com",92,"false"),
  ("Patrick","Garrett","garrett_patrick@outlook.com","garrett_patrick@outlook.com",93,"false"),
  ("Anjolie","Oliver","o.anjolie@hotmail.com","o.anjolie@hotmail.com",94,"true"),
  ("Quinn","Miller","miller_quinn@hotmail.com","miller_quinn@hotmail.com",95,"false"),
  ("Cleo","Cross","cleo-cross5724@hotmail.com","cleo-cross5724@hotmail.com",96,"false"),
  ("Alice","Hale","h_alice@hotmail.com","h_alice@hotmail.com",97,"false"),
  ("Richard","Good","rgood1534@google.com","rgood1534@google.com",98,"true"),
  ("Shea","Delacruz","dshea7198@yahoo.com","dshea7198@yahoo.com",99,"true"),
  ("Rowan","Moody","r-moody@aol.com","r-moody@aol.com",100,"false");


