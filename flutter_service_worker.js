'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "eef3f67181da5a91e3941ea782da01b2",
"assets/AssetManifest.bin.json": "5a208d7e6fae6d9516d59705b2116c03",
"assets/AssetManifest.json": "bdfde56f2564742d4f291c9f0d82e319",
"assets/assets/icons/2.0x/after_effects.png": "295a07c97510949f602f9cb348ed3bf7",
"assets/assets/icons/2.0x/android.png": "dcf25c2d93f4abe18497dc9e19cdb3a1",
"assets/assets/icons/2.0x/android_studio.png": "30fdd952529c27cb552fabbeec1fa038",
"assets/assets/icons/2.0x/arrow_down.png": "7940fd7a224aac2533d29d77143cd891",
"assets/assets/icons/2.0x/arrow_left.png": "caf68e2c5104701721685bd25a5b4032",
"assets/assets/icons/2.0x/arrow_left_outlined.png": "a03ec4a22eedc867cc7f64d76a5c8dcc",
"assets/assets/icons/2.0x/arrow_left_thin.png": "22b2b2504429a77067540b62b72d03e8",
"assets/assets/icons/2.0x/blender.png": "a56710ae7ee663d64ef369bcd213a0a5",
"assets/assets/icons/2.0x/c%2523.png": "f2e9a7d19c21452e7014a5d7d2056ca0",
"assets/assets/icons/2.0x/c++.png": "b895af4f522fd8888217b9de8a3bace7",
"assets/assets/icons/2.0x/cancel.png": "5da0097912db3e91837aa281a4552211",
"assets/assets/icons/2.0x/contact.png": "e5a568a5a78de5d5d1fdaf9c72eb9df7",
"assets/assets/icons/2.0x/dart.png": "5b317993dc32b27ed1bd9a87ae4f1bad",
"assets/assets/icons/2.0x/degree.png": "46a03555761cc3172c320c93a6e50122",
"assets/assets/icons/2.0x/email.png": "519abd1c85c32ad1bb75612c91d36104",
"assets/assets/icons/2.0x/express.png": "8639c4f9ceede75b37550ac939631d8e",
"assets/assets/icons/2.0x/facebook.png": "ab3307e61c8e8db4f9175c4492b60a1e",
"assets/assets/icons/2.0x/figma.png": "802188a37ee77bdeeb67b6030d20c41b",
"assets/assets/icons/2.0x/firebase.png": "3558b80166e3359660afa40368e7c5b0",
"assets/assets/icons/2.0x/flutter.png": "30993d02dfedf23c1046a39182579d59",
"assets/assets/icons/2.0x/game.png": "fe5bde4db4c705dddac0bfc2df91fd88",
"assets/assets/icons/2.0x/gcs.png": "fdcda0552176db8a085325b60e73afe0",
"assets/assets/icons/2.0x/github.png": "ef9f0f3797040498415e6d9ededde1f0",
"assets/assets/icons/2.0x/godot.png": "5cfceb612c4dbd623dcc4382f781848f",
"assets/assets/icons/2.0x/googleplay.png": "b51c1be8daf5ef8c90430b30ef9c9dc3",
"assets/assets/icons/2.0x/graphic.png": "a1ecd2e98572afa0278c3eeefd9c6094",
"assets/assets/icons/2.0x/html.png": "30625e74bea148b27e072c1d56a77bb4",
"assets/assets/icons/2.0x/illustrator.png": "a7c571b672b1afef44b1fe052f962819",
"assets/assets/icons/2.0x/info.png": "e91dde37d7691b0df0a532a1238af5a2",
"assets/assets/icons/2.0x/intellij.png": "18796f7e099362b9c7119bded2246093",
"assets/assets/icons/2.0x/java.png": "23f20dd4f84f1b25c90e5bbf05658f3d",
"assets/assets/icons/2.0x/javafx.png": "a206b7a67cd463efbc8f254e11353140",
"assets/assets/icons/2.0x/js.png": "ce3ca391ba891b029b99337eb2710ac8",
"assets/assets/icons/2.0x/json.png": "b923600dfefd6613936fe8ceab74cc38",
"assets/assets/icons/2.0x/language.png": "7f3691921026cb3fd9bffcf16023d57c",
"assets/assets/icons/2.0x/linkedin.png": "428d4dc4715a89d834ac04a3e825ab4c",
"assets/assets/icons/2.0x/location.png": "7c6dfd8f53017a9952acac75d5b89311",
"assets/assets/icons/2.0x/mobile.png": "8a2280a2659d2eac7a8455c49fd00c23",
"assets/assets/icons/2.0x/mongodb.png": "4f879d5e49c4dd6ec3bcc000569af1e6",
"assets/assets/icons/2.0x/netbeans.png": "8255fb6100bb45388194017a672bc662",
"assets/assets/icons/2.0x/nodejs.png": "11c5510ec47d0e6370602f7f79ba699f",
"assets/assets/icons/2.0x/pattern.png": "eab8b1502f8423512201d57a2e7fc45a",
"assets/assets/icons/2.0x/photoshop.png": "a7451d6098faaa1df96642425671e68b",
"assets/assets/icons/2.0x/python.png": "b85802232f6c6e40f16c01babdffb1f8",
"assets/assets/icons/2.0x/sfml.png": "c0a5837f63a6f2a88bb5ed428f0719de",
"assets/assets/icons/2.0x/sql.png": "1f145edb04dde49fea7aa52593426b9d",
"assets/assets/icons/2.0x/state.png": "326de668f0fabb6281c1d01f9332d1f8",
"assets/assets/icons/2.0x/testing.png": "24bc243cdb90ef980d663192ea0b89eb",
"assets/assets/icons/2.0x/uiux.png": "51a25e3e6f36fdb56445c10daa4b3dc0",
"assets/assets/icons/2.0x/unity.png": "c9ee32f76591671dbd08f7efae7dec57",
"assets/assets/icons/2.0x/vs.png": "1927fcececdf8566416f7026fa117fc1",
"assets/assets/icons/2.0x/web.png": "af2c0b6d8465b498e07e03d0dad8f655",
"assets/assets/icons/2.0x/windows.png": "a331dd9ab1f6f7c6c6b85985c78e23d5",
"assets/assets/icons/2.0x/xd.png": "015ca187bef2c2a54310dcbfca377f4a",
"assets/assets/icons/3.0x/after_effects.png": "ab26d75155cdc65874e9ac3eb201acb1",
"assets/assets/icons/3.0x/android.png": "c5b50a262420cca5282d5445462b6670",
"assets/assets/icons/3.0x/android_studio.png": "cef839216e9cc84edf45a75277b4162b",
"assets/assets/icons/3.0x/arrow_down.png": "4860ac64d96ab1575c5ca38c70027810",
"assets/assets/icons/3.0x/arrow_left.png": "da12bc02ed1de10a9aa580718f087d84",
"assets/assets/icons/3.0x/arrow_left_outlined.png": "b7f0ae6f66f6034402720204b588518a",
"assets/assets/icons/3.0x/arrow_left_thin.png": "de23dd11d0732e0c88485fcf382cfdcf",
"assets/assets/icons/3.0x/blender.png": "63ee09295f1f41e3871a74fc4e5193bf",
"assets/assets/icons/3.0x/c%2523.png": "b5fe2daee91bf6add59753a995e96a45",
"assets/assets/icons/3.0x/c++.png": "92a26df564fc0925e279adf8c94270ed",
"assets/assets/icons/3.0x/cancel.png": "e5ded50d5baab3986a128ed5ad043d91",
"assets/assets/icons/3.0x/contact.png": "8ed0e64b05510ce476fd7c7b92a7f8ff",
"assets/assets/icons/3.0x/dart.png": "d1d9f9431a7631958bae25a5b4bcb97f",
"assets/assets/icons/3.0x/degree.png": "989355d2daf9aba29f5c56a9945c1860",
"assets/assets/icons/3.0x/email.png": "0f9f1987fc035414182f10178820d016",
"assets/assets/icons/3.0x/express.png": "00267e665173228b0fcbae6dc4174bcc",
"assets/assets/icons/3.0x/facebook.png": "749c5898931e4d76f430aa50d5f95748",
"assets/assets/icons/3.0x/figma.png": "83c36c7d4edfb7d71d6e2f825a312aa6",
"assets/assets/icons/3.0x/flutter.png": "93f39507031dced527dc8e0a4f442e93",
"assets/assets/icons/3.0x/game.png": "b327574cd17a4f5017e48ebfa41ea734",
"assets/assets/icons/3.0x/gcs.png": "b5e9c536fcea218c21d0d0e77a45481c",
"assets/assets/icons/3.0x/github.png": "0b0bb88e47daeac468e03cca260c1839",
"assets/assets/icons/3.0x/godot.png": "eaab526679f41c5df0400af22d112f16",
"assets/assets/icons/3.0x/googleplay.png": "4b66325972790c761224d81c812bae84",
"assets/assets/icons/3.0x/graphic.png": "385873ce77a3631dfd7d914d252b0fd4",
"assets/assets/icons/3.0x/html.png": "d9fab22de7ad7d1d89ee7c70d77da26e",
"assets/assets/icons/3.0x/illustrator.png": "881d5d418cff6080a12cf9cb092d5cbd",
"assets/assets/icons/3.0x/info.png": "9c3dc4b89a3cca2d1eaa7920d7d0cc92",
"assets/assets/icons/3.0x/intellij.png": "7b66bdfbc3793cf8a0b78421858fa0bf",
"assets/assets/icons/3.0x/java.png": "887068235c12ada74ee19e2887761437",
"assets/assets/icons/3.0x/javafx.png": "5242844c169872ab5e75f8de8b5c853f",
"assets/assets/icons/3.0x/js.png": "8dec589bd098995424f36863f5ace1cb",
"assets/assets/icons/3.0x/json.png": "7ac905e48e6f7d1030f85d702bc76b20",
"assets/assets/icons/3.0x/language.png": "0c108f57e2bdaea3c7428979ffb3839d",
"assets/assets/icons/3.0x/linkedin.png": "188bb77029105a572251e66a89280b47",
"assets/assets/icons/3.0x/location.png": "d2a5acda5c540fbcfa48bf62124755be",
"assets/assets/icons/3.0x/mobile.png": "b66e6059ebd5c6d745fdf2e102a2d7c2",
"assets/assets/icons/3.0x/mongodb.png": "ba26cd6a6c8aca6c7c919ac79b590e9d",
"assets/assets/icons/3.0x/netbeans.png": "a9ab7c41ddad013b0dbda155106eae67",
"assets/assets/icons/3.0x/nodejs.png": "3929cda05a38622dfcb42a6bec00806f",
"assets/assets/icons/3.0x/pattern.png": "a7f760514c6c511c45d5a3fe453b30f5",
"assets/assets/icons/3.0x/photoshop.png": "73f3ba08b8c3581468656a0b88e743a2",
"assets/assets/icons/3.0x/python.png": "b95560293533a187edd86e8dfa2c2245",
"assets/assets/icons/3.0x/sfml.png": "e24b6afe7403469cd052da313ed0bb39",
"assets/assets/icons/3.0x/sql.png": "79267366c91eca105ab56bd167f314c3",
"assets/assets/icons/3.0x/state.png": "7e216edcacbfa4ed2843abe35eaaf99b",
"assets/assets/icons/3.0x/testing.png": "f5512cbcb373d8bf8610b0255dbe8308",
"assets/assets/icons/3.0x/uiux.png": "a9cd3b7cbcbdc06df5148d8f102468d1",
"assets/assets/icons/3.0x/unity.png": "d82ef13d9c8e8b21944e7c1157927e6b",
"assets/assets/icons/3.0x/vs.png": "b9af0089e340cb0bd17e291af37830f5",
"assets/assets/icons/3.0x/web.png": "8df19b6bce482aca54ddf6b9e62ca12f",
"assets/assets/icons/3.0x/windows.png": "2394f8077669380b3ab7dbad12b66e1d",
"assets/assets/icons/3.0x/xd.png": "e677962b56b825971c35bb661639ac41",
"assets/assets/icons/4.0x/after_effects.png": "62124c4d96b66164e038ea180378858c",
"assets/assets/icons/4.0x/android.png": "5d21a92a9b6bcdffbae4f83b6431dcda",
"assets/assets/icons/4.0x/android_studio.png": "cff9e34d46fd366bf7a32b48af9477b2",
"assets/assets/icons/4.0x/arrow_down.png": "c809424839eb8baf9efd6371350dd0f6",
"assets/assets/icons/4.0x/arrow_left.png": "74e4927ded413266ed9dd100138f5ba6",
"assets/assets/icons/4.0x/arrow_left_outlined.png": "1a3d0437b73cc43f19f7181c686f2970",
"assets/assets/icons/4.0x/arrow_left_thin.png": "fcdc57929fc279e286b2564f011ae79b",
"assets/assets/icons/4.0x/blender.png": "b6c7c898169f2f3df7dec324a2ffd345",
"assets/assets/icons/4.0x/c%2523.png": "542a3818050fb745a19a1aa22720120d",
"assets/assets/icons/4.0x/c++.png": "580d87572606ff20034287c71f6d9b79",
"assets/assets/icons/4.0x/cancel.png": "21d110c59f95577039ab1cb8af76e81f",
"assets/assets/icons/4.0x/contact.png": "1278846847e52c27d9eb80535f926607",
"assets/assets/icons/4.0x/dart.png": "d3f54a1d5dcbcfe85dd846c31462534b",
"assets/assets/icons/4.0x/degree.png": "85ad9780f85db5cb7d72126dc6a15a23",
"assets/assets/icons/4.0x/email.png": "cca4c934b0aee1f9334d628865d111d9",
"assets/assets/icons/4.0x/express.png": "1954b9ad4151e97a52739c36714c2eb5",
"assets/assets/icons/4.0x/facebook.png": "25a3e43f4f96d7c3dedf6bd6201dc5d8",
"assets/assets/icons/4.0x/figma.png": "b426727554cb4f56cd6ec19846d4bae0",
"assets/assets/icons/4.0x/flutter.png": "d7a14d16d69d0e839e17f72a49fd5669",
"assets/assets/icons/4.0x/game.png": "4133c5bc119e8e61fa3af0a5f2708592",
"assets/assets/icons/4.0x/gcs.png": "8cf435ec496cb0dd8cec1b0347a43e1b",
"assets/assets/icons/4.0x/github.png": "b49dc0038d6a4a185271804ed1f5dcc9",
"assets/assets/icons/4.0x/godot.png": "9fa3b329fd972ecd1c48d77704048328",
"assets/assets/icons/4.0x/googleplay.png": "59bbd49fd01648364f37152efbb23050",
"assets/assets/icons/4.0x/graphic.png": "8ba688a90e2b3980bd037028bc29a418",
"assets/assets/icons/4.0x/html.png": "dc611c9f9158ada07151e4e78081e327",
"assets/assets/icons/4.0x/illustrator.png": "45e96549098b3652d17605a5c058b395",
"assets/assets/icons/4.0x/info.png": "bf61d7c003a24de79cef99785136298b",
"assets/assets/icons/4.0x/intellij.png": "37838a4af66e239be95ba755e76c03c3",
"assets/assets/icons/4.0x/java.png": "a24bdcc27e9800e20f510ddca3cef1b5",
"assets/assets/icons/4.0x/javafx.png": "89d6f233637091be0db9445def2c54fd",
"assets/assets/icons/4.0x/js.png": "2bc7947c2fd7a0f72718367f181f92b6",
"assets/assets/icons/4.0x/json.png": "2d85a1399c224188ad4e1af409fba71a",
"assets/assets/icons/4.0x/language.png": "781d7db55f563e3ff27bbda066e8d19a",
"assets/assets/icons/4.0x/linkedin.png": "71dfb9baa9a0df2e48fa9c71d0bbb62b",
"assets/assets/icons/4.0x/location.png": "9c7cd2e2e195a9e38de856a691c78207",
"assets/assets/icons/4.0x/mobile.png": "3846ce538e7f7b29ea9a2d26d3953170",
"assets/assets/icons/4.0x/mongodb.png": "7ca5d5e6fd953b6aef4ddf38c754aefd",
"assets/assets/icons/4.0x/netbeans.png": "b9a191ce6de6673f2676309429dbb48c",
"assets/assets/icons/4.0x/nodejs.png": "5059de94b345dcc5d5c1c64f826cc8e2",
"assets/assets/icons/4.0x/pattern.png": "684f6d2eae0e26f1e6b92982652d09ee",
"assets/assets/icons/4.0x/photoshop.png": "9b5343d33d9a6fa37df36f184a2e9d21",
"assets/assets/icons/4.0x/python.png": "1946b08b8f281f097ae86fb2750fd498",
"assets/assets/icons/4.0x/sfml.png": "207c82a907a83ed65842afbe3b092950",
"assets/assets/icons/4.0x/sql.png": "f4e2e8e2b432d0caf8a5b0e9c917c647",
"assets/assets/icons/4.0x/state.png": "efbc40581d8fd153ac7d67567d6cd367",
"assets/assets/icons/4.0x/testing.png": "83fbff1b4b27b64385fae65e9f2a4d34",
"assets/assets/icons/4.0x/uiux.png": "8b15e19aff7d9f0e1430379a05e1213b",
"assets/assets/icons/4.0x/unity.png": "458082f28cee0dfc5191194636ec4a5e",
"assets/assets/icons/4.0x/vs.png": "08d749c3767358b4ae1be94a1f96185e",
"assets/assets/icons/4.0x/web.png": "b99d7d9b9b3e306bb27b99748b13afa5",
"assets/assets/icons/4.0x/windows.png": "e2401dcfd23c4072ee50b8db6383d51c",
"assets/assets/icons/4.0x/xd.png": "c4027dce976906152fe28e39e7620db4",
"assets/assets/icons/5.0x/after_effects.png": "7e433ac811f7bea992c4d65974c38f59",
"assets/assets/icons/5.0x/android.png": "1b9381d48488a5168920f61f969b3a96",
"assets/assets/icons/5.0x/android_studio.png": "22d2f4e7f718a17aac727c8f5833cdb8",
"assets/assets/icons/5.0x/arrow_down.png": "1574f49853bde0954f9ee5e92748286b",
"assets/assets/icons/5.0x/arrow_left.png": "7a84306f045e43a5436a38622082e2d0",
"assets/assets/icons/5.0x/arrow_left_outlined.png": "6877515c8bd7b3b124241e9e6cca1a76",
"assets/assets/icons/5.0x/arrow_left_thin.png": "b13f7bd58759b2d71c672e8369629f4b",
"assets/assets/icons/5.0x/blender.png": "8a8c9bebd78568c2b595b51b84bb1490",
"assets/assets/icons/5.0x/c%2523.png": "dea7c0ed1ba64bb678c2d3976744e9fb",
"assets/assets/icons/5.0x/c++.png": "ccdcdced5cc4f95f46f81e87a9b14fb5",
"assets/assets/icons/5.0x/cancel.png": "c92cf513e08b9c713f17aeeacd622e34",
"assets/assets/icons/5.0x/contact.png": "a9a48dec7cd9de7d41c3a8ba7690daaa",
"assets/assets/icons/5.0x/dart.png": "0efff5f0183440198b71c60d67e8414e",
"assets/assets/icons/5.0x/degree.png": "a1888d0ba50400cce5cb89e6ba3ba16b",
"assets/assets/icons/5.0x/email.png": "a4e11a265aa637e0291f59a788c3d2b2",
"assets/assets/icons/5.0x/express.png": "33da2137e10b619bea1a391cf97834e7",
"assets/assets/icons/5.0x/facebook.png": "af220da76fc1ba45dd629bed4c0e3cbf",
"assets/assets/icons/5.0x/figma.png": "579ce82216262606d62a3f08fa06db3b",
"assets/assets/icons/5.0x/firebase.png": "3dc7e64e62603d46e0bbef81174939bd",
"assets/assets/icons/5.0x/flutter.png": "79bce519f5428aba303b2aeb56bb9ccd",
"assets/assets/icons/5.0x/game.png": "7c40072ed346a31e0169ca8281a5852f",
"assets/assets/icons/5.0x/gcs.png": "d913e6378ea71c5ec95daaddd8916325",
"assets/assets/icons/5.0x/github.png": "97a80c94b5d212a707a76be795f8ee3f",
"assets/assets/icons/5.0x/godot.png": "b4b1c014ef0fbdafe3219b48b5f13b8a",
"assets/assets/icons/5.0x/googleplay.png": "bc2431061c2cbe8e7f50b51cdadfe78f",
"assets/assets/icons/5.0x/graphic.png": "9c42a46f2ee2f0e0d3ee3339bcb15061",
"assets/assets/icons/5.0x/html.png": "c0c0415c639f096db0d8a3d3421be64e",
"assets/assets/icons/5.0x/illustrator.png": "0b316b86407b29f7d1c7d9e4b616967f",
"assets/assets/icons/5.0x/info.png": "ed862827e3b3f7a1f6c18f60753055f3",
"assets/assets/icons/5.0x/intellij.png": "6ad60bdd4f0afae50d289088720d5e98",
"assets/assets/icons/5.0x/java.png": "09800ccce13cf8739e097556f6e4b6c3",
"assets/assets/icons/5.0x/javafx.png": "51d6cde3fe4bce9909f1d7a349fc6f31",
"assets/assets/icons/5.0x/js.png": "183554290953d423c903c6ca5b034132",
"assets/assets/icons/5.0x/json.png": "088465e003f59ec3764c94fcd0e85f35",
"assets/assets/icons/5.0x/language.png": "fc9041b9c049b85e4f9e6f882e327513",
"assets/assets/icons/5.0x/linkedin.png": "eb6e0bd3a28359a027048f70087708b1",
"assets/assets/icons/5.0x/location.png": "70efa833616c32e4ee081a08fcefcd8f",
"assets/assets/icons/5.0x/mobile.png": "649de5770cc18a8e069710a1e3dc3a38",
"assets/assets/icons/5.0x/mongodb.png": "70dd784364dfe42fb8f11aa3ad01a426",
"assets/assets/icons/5.0x/netbeans.png": "9da4528a6f6a36d4cfe4a10a104538ff",
"assets/assets/icons/5.0x/nodejs.png": "8dbf0056522553891a44f8819bfa387f",
"assets/assets/icons/5.0x/pattern.png": "ca88a26e42cd4f9e618ebccb2eba276c",
"assets/assets/icons/5.0x/photoshop.png": "66803620d6d9f7d3cabd802e42b8ce30",
"assets/assets/icons/5.0x/python.png": "e73ceb6e4d50e2f0468139e28a50a1cf",
"assets/assets/icons/5.0x/sfml.png": "675a482037eeefbc35f719561ef49856",
"assets/assets/icons/5.0x/sql.png": "7803caa710e7faf19be377eeb6b60ccd",
"assets/assets/icons/5.0x/state.png": "546cbe5933773fb49fa0c901a757e089",
"assets/assets/icons/5.0x/testing.png": "dae4110195d246e10037b25d56206855",
"assets/assets/icons/5.0x/uiux.png": "9c6776b47c22097b55af1a8a4a3a2f47",
"assets/assets/icons/5.0x/unity.png": "298cc6f41fd52ad9a4b38ba510d19800",
"assets/assets/icons/5.0x/vs.png": "271854292830e9e82d7e88ecd47ad4f1",
"assets/assets/icons/5.0x/web.png": "0d9d441b9dea0c766fd472be7a396da2",
"assets/assets/icons/5.0x/windows.png": "23d10a5949dec6ec7da8f24f405f8f78",
"assets/assets/icons/5.0x/xd.png": "8666c2cc17a4a7f86a8e79f43cf811e1",
"assets/assets/icons/after_effects.png": "aeef9a7130fd377688f1ec0c74be220d",
"assets/assets/icons/android.png": "22efb053ebe30f39aaaa17309bad528c",
"assets/assets/icons/android_studio.png": "c0b58294453a936f2959cce2c6bd0055",
"assets/assets/icons/arrow_down.png": "18f49c244bac3897206c1a10d697d776",
"assets/assets/icons/arrow_left.png": "4ef1a2f0c011bab2bf6d7069f1ebe5aa",
"assets/assets/icons/arrow_left_outlined.png": "32602c8dc9a33967b1e5e289567f5599",
"assets/assets/icons/arrow_left_thin.png": "4c4464dec72473de0d83eae7ba1eaa7b",
"assets/assets/icons/blender.png": "ba9c83fd2ec340370471307b8a499c0a",
"assets/assets/icons/c%2523.png": "acfc87216b5f2232e094c8cfaa090c2b",
"assets/assets/icons/c++.png": "ea1586c608051cc1ea4d501ec11870c3",
"assets/assets/icons/cancel.png": "1901a183b42185dc44e5c9e5219f630a",
"assets/assets/icons/contact.png": "d18810f6d4d8d477714a4c2b9fcf1ea9",
"assets/assets/icons/dart.png": "e53092f58ea00163073d4ecc76d0a2e3",
"assets/assets/icons/degree.png": "9b1f6e691d582d69aaf1a2a08c502fb4",
"assets/assets/icons/ehance.png": "2ed35a276c8fd6f00e42e417e3b8dc73",
"assets/assets/icons/email.png": "9a3487cd2d3f551add4ab1552806884b",
"assets/assets/icons/express.png": "e7c1ed3298ddd6b7b738252aa1b11559",
"assets/assets/icons/facebook.png": "96f84f637808b7d0056bb821d396c97b",
"assets/assets/icons/figma.png": "f3b7881dc40238de79eb01f11a821ac9",
"assets/assets/icons/firebase.png": "17cb693811a2a4fcb235b262687b1d8b",
"assets/assets/icons/flutter.png": "55eb02ac0f165b2e48e37c3ac56321f9",
"assets/assets/icons/game.png": "3f66c759a5051f5270e04ce1fc4bb306",
"assets/assets/icons/gcs.png": "b67860c5b8e3677bb7cbc0e3440a427e",
"assets/assets/icons/github.png": "ee9bce655f4f89ae6dcf2f51ff74366d",
"assets/assets/icons/godot.png": "846ec20ff0e22bb359d6f9dcf0905121",
"assets/assets/icons/googleplay.png": "6dce3ab727f00eb3195e2fe07ff88562",
"assets/assets/icons/graphic.png": "e8e798a23ca959b199ab64eeb1cc9ab2",
"assets/assets/icons/html.png": "e1eef80885cc6341e8ddebf5f19d355b",
"assets/assets/icons/illustrator.png": "0b6b6cf0a2275b011a0941306a438b0f",
"assets/assets/icons/info.png": "1462bd0ff0fde525895d976d84a9a65b",
"assets/assets/icons/intellij.png": "8d50a009f209fe50790c7637c0429e73",
"assets/assets/icons/java.png": "f309fee83d8f4f5ceb516955bccf2bbe",
"assets/assets/icons/javafx.png": "550457d3ecb6c6fd841d956f1cdd1bb9",
"assets/assets/icons/js.png": "58deabd11e8aed26d17cbc5a1d1beed3",
"assets/assets/icons/json.png": "38dd380460ee851432b93313fd6ee754",
"assets/assets/icons/language.png": "7d993c49fd4930442b30f1444472c6a9",
"assets/assets/icons/linkedin.png": "d112191f095e99e56561a6327031daee",
"assets/assets/icons/location.png": "ca1df69dfeb25d54709023f2464c80b3",
"assets/assets/icons/mobile.png": "630d9614e158fd08f3bc3f8b52c8b03a",
"assets/assets/icons/mongodb.png": "e4f9adaff02c051ae5545b53ec9ad2e6",
"assets/assets/icons/netbeans.png": "5dc97541841c46ac57661606921f1bf0",
"assets/assets/icons/nodejs.png": "833ec32ec389e08e2ae0c5102c054f67",
"assets/assets/icons/pattern.png": "8536bba0a1ebb83fee7c8348e13b46f5",
"assets/assets/icons/photoshop.png": "efdcfb7397be6420a6e4cccfc624ac0b",
"assets/assets/icons/python.png": "0e7ec08704ba9d62cb90de1bf77e789b",
"assets/assets/icons/sfml.png": "f25e3c825064d398017bb8e1db5eae92",
"assets/assets/icons/sql.png": "746915ed8a0997b6c432a027707ba240",
"assets/assets/icons/state.png": "c16a637ba0904ec9714c3a6b0369dee0",
"assets/assets/icons/testing.png": "ac7de196e6495ad93ac83c9d22c5b990",
"assets/assets/icons/uiux.png": "82d0fe040aa6c82b878d7be908981004",
"assets/assets/icons/unity.png": "77656d9a7fae5c2d6ebbe84b33503fa0",
"assets/assets/icons/vs.png": "1d74f86f39135320a6a0bce237cc5dae",
"assets/assets/icons/web.png": "106b11be5a9fdc37b6440b55ef688ebd",
"assets/assets/icons/windows.png": "db71493dd29b12eeeef542290bd67ea6",
"assets/assets/icons/xd.png": "0471a9156421c1e9d5ae908032925f2a",
"assets/assets/images/animezone.jpg": "0207be60b6908d548bc110602dabff45",
"assets/assets/images/animezone_1.jpg": "4eea43669926415025cbb95c039978f7",
"assets/assets/images/animezone_2.jpg": "0a682062bca1f431cf7af23cd329445e",
"assets/assets/images/animezone_3.jpg": "8ed134390a160ea649580b00946b8a1e",
"assets/assets/images/animezone_4.jpg": "cf4d8fa41217e122d5a32a28db58a536",
"assets/assets/images/animezone_5.jpg": "e907e2f28a8eac56640536676471b091",
"assets/assets/images/animezone_6.jpg": "49ee80cdafcefdcf041a377681f8c205",
"assets/assets/images/animezone_7.jpg": "83363734bf908fb38996d504221e51fd",
"assets/assets/images/fastfreshmarket.jpg": "5a0460d085806bec08d1d8e2c0d78587",
"assets/assets/images/fastfreshmarket_1.jpg": "57f78a744b82db628e96d5f59532b813",
"assets/assets/images/fastfreshmarket_2.jpg": "5bba2ea34d9d9a55923e47b93c747ba0",
"assets/assets/images/fastfreshmarket_3.jpg": "e7d5ec6ebf481d6c896d6cbc21d4649f",
"assets/assets/images/fastfreshmarket_4.jpg": "7aa7b751ea6bc8e8685c0ceb14fe05b8",
"assets/assets/images/fastfreshmarket_5.jpg": "4fe764e6a849fbb04e962b920ac9dbd5",
"assets/assets/images/fastfreshmarket_6.jpg": "44b0e66ccb7fc18f252967cc3364ae0c",
"assets/assets/images/fastfreshmarket_7.jpg": "f3dceba7d4e3e94fd702090a989f2d97",
"assets/assets/images/fastfreshmarket_8.jpg": "90f6517fa377ccc4a06421c3829f1c32",
"assets/assets/images/memories.jpg": "204dd9c987e1c7f7dd7039fa07b52f5f",
"assets/assets/images/memories_1.jpg": "326073c820b68d37b510381ee26233ee",
"assets/assets/images/memories_2.jpg": "1250404eb175897f5b4daca9a137f487",
"assets/assets/images/memories_3.jpg": "a3e430586d3f0b5475c0b4ce2738e9e3",
"assets/assets/images/memories_4.jpg": "a9d6bb64fef22450325572c16491283a",
"assets/assets/images/memories_5.jpg": "13151aeb947bc3c9cb1c9ae2c3be2c00",
"assets/assets/images/peach.jpg": "3504427d263a7ac66bd59399767dbe71",
"assets/assets/images/peach_1.jpg": "d81460413f4d8974f347cf995183dffe",
"assets/assets/images/peach_2.jpg": "96d8a71ba852467b5b2d83c1299558bb",
"assets/assets/images/peach_3.jpg": "39de70e76d95eaf44eb1dae68f2d3a09",
"assets/assets/images/peach_4.jpg": "c12a04269ff304955cce61ad52518b03",
"assets/assets/images/peach_5.jpg": "783fe1ed15413ca89eb97d6ed8dc5104",
"assets/assets/images/peach_6.jpg": "a012f8655c1c68d2b8a614871e5f985e",
"assets/assets/images/peach_7.jpg": "b1ad4213c08bbf58db029039952198be",
"assets/assets/images/selfpng.png": "a05e59e7daedac8aa215658e5422f20e",
"assets/FontManifest.json": "d281cacc9891700e04981979a8160a2f",
"assets/fonts/DynaPuff-Bold.ttf": "9434d9ac478a30d261dc696d9686f035",
"assets/fonts/DynaPuff-Medium.ttf": "4d843906b48d4f91d1166d4a2e75338f",
"assets/fonts/DynaPuff-Regular.ttf": "ac8f79db50080055c501b63b784c4dae",
"assets/fonts/DynaPuff-SemiBold.ttf": "e27189581e2a6bfc3336d9a332afa31e",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/fonts/Montserrat-Black.ttf": "cce7ff8c1d7999f907b6760fbe75d99d",
"assets/fonts/Montserrat-Bold.ttf": "ed86af2ed5bbaf879e9f2ec2e2eac929",
"assets/fonts/Montserrat-ExtraBold.ttf": "9e07cac927a9b4d955e2138bf6136d6a",
"assets/fonts/Montserrat-ExtraLight.ttf": "a7fe50578d9aa3966c925cb9722db03a",
"assets/fonts/Montserrat-Light.ttf": "94fbe93542f684134cad1d775947ca92",
"assets/fonts/Montserrat-Medium.ttf": "bdb7ba651b7bdcda6ce527b3b6705334",
"assets/fonts/Montserrat-Regular.ttf": "5e077c15f6e1d334dd4e9be62b28ac75",
"assets/fonts/Montserrat-SemiBold.ttf": "cc10461cb5e0a6f2621c7179f4d6de17",
"assets/fonts/Montserrat-Thin.ttf": "b3638b16904211d1d24d04ce53810c4d",
"assets/NOTICES": "009184d7441f83be9fca4c1b61eb1d97",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "32cc31c7f950543ad75e035fcaeb2892",
"canvaskit/canvaskit.js.symbols": "bb7854ddbcaa2e58e5bdef66b58d4b47",
"canvaskit/canvaskit.wasm": "6134e7617dab3bf54500b0a2d94fe17a",
"canvaskit/chromium/canvaskit.js": "6a5bd08897043608cb8858ce71bcdd8a",
"canvaskit/chromium/canvaskit.js.symbols": "f23279209989f44e047062055effde63",
"canvaskit/chromium/canvaskit.wasm": "ad6f889daae572b3fd08afc483572ecd",
"canvaskit/skwasm.js": "e95d3c5713624a52bf0509ccb24a6124",
"canvaskit/skwasm.js.symbols": "dc16cade950cfed532b8c29e0044fe42",
"canvaskit/skwasm.wasm": "aff2178f40209a9841d8d1b47a6e6ec7",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "fd998cc8f3e9f5c5c3d6c00f71f35f86",
"flutter.js": "5de281a37b2308e43846d3a0b545c921",
"flutter_bootstrap.js": "1b6c13daebbb3a22c32ce3dc088e1b30",
"icons/icon-192.png": "5f3bd37a6c40ee16ab802cf2ee4115e7",
"icons/icon-512.png": "7f96b845df5443ed8400b9e26dd1a7d3",
"icons/icon-maskable-192.png": "a246791cca526480628b5ad37a5339e2",
"icons/icon-maskable-512.png": "014d615df7ecd57739ca4ea9faef7b09",
"index.html": "dc3433bb34fd2d1182a38be178ad13bf",
"/": "dc3433bb34fd2d1182a38be178ad13bf",
"main.dart.js": "5a300f0402bb9f5503d67fc41bd68511",
"manifest.json": "39d42d775e7fd3c717073956b8c44aea",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
