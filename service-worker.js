importScripts('workbox-sw.prod.v1.0.1.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/iD.css",
    "revision": "6582c59edfec74789919a1f7674fe867"
  },
  {
    "url": "/iD.js",
    "revision": "be8df21eeeff3ecf163f533ffd93ece9"
  },
  {
    "url": "/iD.min.js",
    "revision": "a0b89e1be14a0746390a13761b473cc5"
  },
  {
    "url": "/img/arrow-icon.png",
    "revision": "e87a559b081d2793eb138d05e4ec1a9c"
  },
  {
    "url": "/img/background-pattern-1.png",
    "revision": "7e75a7b8b154d98c249650e94b76e888"
  },
  {
    "url": "/img/background-pattern-opacity.png",
    "revision": "a55ec677b1d2f5ed71df0a0b74303678"
  },
  {
    "url": "/img/cursor-draw-connect-line.png",
    "revision": "1989f6773b3db8fbe98b8af844089625"
  },
  {
    "url": "/img/cursor-draw-connect-line2x.png",
    "revision": "44d5585d03752a51496a859177baa19c"
  },
  {
    "url": "/img/cursor-draw-connect-vertex.png",
    "revision": "887398be4072fd5dd9003b7dada29e83"
  },
  {
    "url": "/img/cursor-draw-connect-vertex2x.png",
    "revision": "ea98d2f872abc39ef84a63949b82f7a2"
  },
  {
    "url": "/img/cursor-draw.png",
    "revision": "a60b351c4d593cc219b54480c940f6bb"
  },
  {
    "url": "/img/cursor-draw2x.png",
    "revision": "38f11be00ed6cb4cc3da0ee13afec393"
  },
  {
    "url": "/img/cursor-grab.png",
    "revision": "2ef1668883e0e4712de4994112766f71"
  },
  {
    "url": "/img/cursor-grab2x.png",
    "revision": "2c872c66f0daf878e4f8feffcf7de8e5"
  },
  {
    "url": "/img/cursor-grabbing.png",
    "revision": "7670934993aa334801f78eea35e26b89"
  },
  {
    "url": "/img/cursor-grabbing2x.png",
    "revision": "8d097931283c9ea62721d4979d174630"
  },
  {
    "url": "/img/cursor-pointer.png",
    "revision": "71b6f94d2663fde14c3f282b9d3f8e73"
  },
  {
    "url": "/img/cursor-pointer2x.png",
    "revision": "286d2d8b2b63fc0fe648b1b0b0163b94"
  },
  {
    "url": "/img/cursor-pointing.png",
    "revision": "aa0b358527a13427d3c94bc35531f7a6"
  },
  {
    "url": "/img/cursor-pointing2x.png",
    "revision": "00b791994d568f956528600d12c0d53c"
  },
  {
    "url": "/img/cursor-select-acting.png",
    "revision": "212b0f49c13632ecb50d7f98dd26262d"
  },
  {
    "url": "/img/cursor-select-acting2x.png",
    "revision": "dcb50a5ed44c8fbb83b257d1a129aa69"
  },
  {
    "url": "/img/cursor-select-add.png",
    "revision": "fbe35d4833859183b6656ebea65214a5"
  },
  {
    "url": "/img/cursor-select-add2x.png",
    "revision": "bb3daea5378a74ebf1864584a01955dd"
  },
  {
    "url": "/img/cursor-select-area.png",
    "revision": "d20c044f47eb6f516ce2033c31bf8a3b"
  },
  {
    "url": "/img/cursor-select-area2x.png",
    "revision": "9097de5f263ccb01af81394abb032dc7"
  },
  {
    "url": "/img/cursor-select-line.png",
    "revision": "0174756a5d87b7aeea1c8459a749b686"
  },
  {
    "url": "/img/cursor-select-line2x.png",
    "revision": "1a69c7779dd4f47a139011046695c3aa"
  },
  {
    "url": "/img/cursor-select-point.png",
    "revision": "36b7bc8428fac983736c74bc2f37396f"
  },
  {
    "url": "/img/cursor-select-point2x.png",
    "revision": "8fe17e8d1fc5bb6c59100db265ab2fa9"
  },
  {
    "url": "/img/cursor-select-remove.png",
    "revision": "be004921f28ac28ca50b063bb8e2733b"
  },
  {
    "url": "/img/cursor-select-remove2x.png",
    "revision": "1bba7a313091466f333f89c78c3389b2"
  },
  {
    "url": "/img/cursor-select-split.png",
    "revision": "8772b555c54fe5aeefbfb360d23d11f9"
  },
  {
    "url": "/img/cursor-select-split2x.png",
    "revision": "32151e63e3e33720d1e4f22a87217608"
  },
  {
    "url": "/img/cursor-select-vertex.png",
    "revision": "3a1cb81aa685235cc0b62d55fed7c96c"
  },
  {
    "url": "/img/cursor-select-vertex2x.png",
    "revision": "c57efdd9c73efd7ce3c8ff5aa26ef074"
  },
  {
    "url": "/img/iD-sprite.svg",
    "revision": "8eb10e6854507de49d511c752ec04c4b"
  },
  {
    "url": "/img/loader_bg.gif",
    "revision": "4b1ad7cfcce93cf00243ab31a7b375a6"
  },
  {
    "url": "/img/loader-black.gif",
    "revision": "81cd8b1454d3d028af026ac0299f5c51"
  },
  {
    "url": "/img/loader-white.gif",
    "revision": "ba7e63ed180236f4dc405a20b39f5702"
  },
  {
    "url": "/img/logo.png",
    "revision": "81c4221b4ed4ec14becb4d41514d7e87"
  },
  {
    "url": "/img/maki-sprite.svg",
    "revision": "11536485aa755fce84aea721e904e73f"
  },
  {
    "url": "/img/mini-loader.gif",
    "revision": "f2eb1d182a22b27645626ae1f1e36aa8"
  },
  {
    "url": "/img/pattern/cemetery.png",
    "revision": "fae5d833bd56d38339cf8b48443f8976"
  },
  {
    "url": "/img/pattern/construction.png",
    "revision": "738cb096bfa253259a3dbcf553033b5d"
  },
  {
    "url": "/img/pattern/dots.png",
    "revision": "ec42d105099dbee94edb8d247fd8d49c"
  },
  {
    "url": "/img/pattern/farmland.png",
    "revision": "75a847f4f3d4ea8a9631ef4e4fbb7659"
  },
  {
    "url": "/img/pattern/orchard.png",
    "revision": "75d6fdd65a2d9e3d8c03958d87b64095"
  },
  {
    "url": "/img/pattern/vineyard.png",
    "revision": "35b67603501274c4f994662ecca2fa3e"
  },
  {
    "url": "/img/pattern/wetland.png",
    "revision": "55d4990380e2829c6bd03092765348cb"
  },
  {
    "url": "/img/traffic-signs/traffic-signs.json",
    "revision": "0dea51dede8668e6a0c9057de52aaada"
  },
  {
    "url": "/img/traffic-signs/traffic-signs.png",
    "revision": "bb02b09da1932e3583ce26949c7a7d1b"
  },
  {
    "url": "/index.html",
    "revision": "652b444d992c145d0e2db910eca8bbf8"
  },
  {
    "url": "/land.html",
    "revision": "3ff607f4782e561e2dc2334a20f70710"
  },
  {
    "url": "/locales/af.json",
    "revision": "89ae00d8015815793cae33811ee845dc"
  },
  {
    "url": "/locales/ar-AA.json",
    "revision": "9b3568cb9665b084ac696a71f012173a"
  },
  {
    "url": "/locales/ar.json",
    "revision": "e99d1df63075fb21d857294025014291"
  },
  {
    "url": "/locales/ast.json",
    "revision": "734f868cc15b4770e53e04b23a88c9ff"
  },
  {
    "url": "/locales/bg-BG.json",
    "revision": "cd8edce469b2a97107ac78c8ce6ad5aa"
  },
  {
    "url": "/locales/bg.json",
    "revision": "41b21ac47a7309d7996aed6c913e15c7"
  },
  {
    "url": "/locales/bn.json",
    "revision": "d57b178a609f1556b81f8e84e7c56624"
  },
  {
    "url": "/locales/bs.json",
    "revision": "3de5812f84c5b97af564f7b0bd10e0a0"
  },
  {
    "url": "/locales/ca.json",
    "revision": "2dba4bc82198d56000de3129fcdbe010"
  },
  {
    "url": "/locales/cs.json",
    "revision": "124d2adca0a5c1040d8d265fa3f4594d"
  },
  {
    "url": "/locales/da.json",
    "revision": "8b53c95bbbc1dd0512d0e85d04532566"
  },
  {
    "url": "/locales/de.json",
    "revision": "a4c0b92028b49b1215ecbd19bd231cbc"
  },
  {
    "url": "/locales/el.json",
    "revision": "7720dfb3f38ea76faf29d15f7f6d531e"
  },
  {
    "url": "/locales/en-GB.json",
    "revision": "06aa65ecf163d61d9373a8e3409bff14"
  },
  {
    "url": "/locales/en.json",
    "revision": "b1a878ab1f66f16836b369590f641827"
  },
  {
    "url": "/locales/eo.json",
    "revision": "fc6245674b9b71ea3add6d01173022a3"
  },
  {
    "url": "/locales/es.json",
    "revision": "72821ea824cf65e6815d05bea6fe2b81"
  },
  {
    "url": "/locales/et.json",
    "revision": "6e3b0f41d1869d7593e026e3481b60d8"
  },
  {
    "url": "/locales/fa.json",
    "revision": "e6e24cc258b89b25462528b0abd06f20"
  },
  {
    "url": "/locales/fi.json",
    "revision": "da3262b50c61868bc5090ef810e19880"
  },
  {
    "url": "/locales/fr.json",
    "revision": "4f4cfe921473927d9652e8527141e3eb"
  },
  {
    "url": "/locales/gan.json",
    "revision": "0bed5f07f9167931ffcbf71096f13e72"
  },
  {
    "url": "/locales/gl.json",
    "revision": "f978b74b2356c03eb391fe5d38121dcc"
  },
  {
    "url": "/locales/gu.json",
    "revision": "6424d484bfaec6943e4cb72282d6b86c"
  },
  {
    "url": "/locales/he.json",
    "revision": "cc853ad2185449be38c4f781c66141ae"
  },
  {
    "url": "/locales/hi.json",
    "revision": "632305d816aec6ba542d663cf9eb9df2"
  },
  {
    "url": "/locales/hr.json",
    "revision": "c8425b6cbf3c1f5d874805072a7504ca"
  },
  {
    "url": "/locales/hu.json",
    "revision": "3de5b0468decba32fdb892de71f4c6a0"
  },
  {
    "url": "/locales/hy.json",
    "revision": "cb0789156bc292f8a1a31674774cbcbf"
  },
  {
    "url": "/locales/ia.json",
    "revision": "cd364c0538cca93e0726aa2b37357c7a"
  },
  {
    "url": "/locales/id.json",
    "revision": "31ca4f13caf8c2222e91b75931f0c113"
  },
  {
    "url": "/locales/is.json",
    "revision": "93c851f54e0999b1b6f1532f29dfa054"
  },
  {
    "url": "/locales/it.json",
    "revision": "cea5744beb3130097948ac33c039d04c"
  },
  {
    "url": "/locales/ja.json",
    "revision": "c742b2618e0a7cbddd014a013fb8497e"
  },
  {
    "url": "/locales/jv.json",
    "revision": "fd5934dc5bd70306185a7ebe07ad1ca2"
  },
  {
    "url": "/locales/km.json",
    "revision": "1ed5d0fc3dabcbb3310a0ba72b5b2e72"
  },
  {
    "url": "/locales/kn.json",
    "revision": "deef968609f97bcdc5b20a2c2007265d"
  },
  {
    "url": "/locales/ko.json",
    "revision": "e8bc467ef208c4e5fa84658582026285"
  },
  {
    "url": "/locales/ku.json",
    "revision": "86ce82b6e3d44cc4d798c4dfb69edbd9"
  },
  {
    "url": "/locales/lij.json",
    "revision": "76e69b9922a0d85e9c8b6882dec68ba1"
  },
  {
    "url": "/locales/lt.json",
    "revision": "ef8e5e884d978ab8c819d85d42d6e09c"
  },
  {
    "url": "/locales/lv.json",
    "revision": "bbe08819057889661717d63f258b22e4"
  },
  {
    "url": "/locales/mg.json",
    "revision": "64de8016eda970c679619614d39b5831"
  },
  {
    "url": "/locales/mk.json",
    "revision": "cf5ccced4b2815c219c39f150b0c0bac"
  },
  {
    "url": "/locales/ml.json",
    "revision": "bdd05ce3ebc96fcf37be74bf44321f72"
  },
  {
    "url": "/locales/mn.json",
    "revision": "2253f80c3d4107120187c1db2d01c18b"
  },
  {
    "url": "/locales/ms.json",
    "revision": "c54a2d483e036406dec5d2d13b7533f4"
  },
  {
    "url": "/locales/ne.json",
    "revision": "3b207910aee3471fbdcaba718d61a5b3"
  },
  {
    "url": "/locales/nl.json",
    "revision": "21d0787fb99dea173a43ca2188094b6e"
  },
  {
    "url": "/locales/nn.json",
    "revision": "a19e339194e4a9f41c8558f32779306b"
  },
  {
    "url": "/locales/no.json",
    "revision": "1830b7296545103a540c5044f4e9d6ee"
  },
  {
    "url": "/locales/nv.json",
    "revision": "a4ecfc38d3abcf94d47acafa2426f2aa"
  },
  {
    "url": "/locales/pl.json",
    "revision": "c04d2cfd6c80888060be214373ec09be"
  },
  {
    "url": "/locales/pt-BR.json",
    "revision": "21d7b0e96c1cbb7696de5565de4522c5"
  },
  {
    "url": "/locales/pt.json",
    "revision": "376ba08b7f537b19193c80dccaa65ec7"
  },
  {
    "url": "/locales/rm.json",
    "revision": "88a2119c92cf5cc35214f5c6f5b56d1e"
  },
  {
    "url": "/locales/ro.json",
    "revision": "98b95ff94932d027deb8174a97d36b50"
  },
  {
    "url": "/locales/ru.json",
    "revision": "2922958b6aa3e279cd575e1ab61da91e"
  },
  {
    "url": "/locales/sc.json",
    "revision": "b456712296165218df1d62c6b155d809"
  },
  {
    "url": "/locales/si.json",
    "revision": "a45926b41204d58effaabefebe7e4d68"
  },
  {
    "url": "/locales/sk.json",
    "revision": "47985a0513d06793735cc77652d73dca"
  },
  {
    "url": "/locales/sl.json",
    "revision": "69940b8f44f0051b203f958eb36a4da9"
  },
  {
    "url": "/locales/sq.json",
    "revision": "f8ef9fbdcc08dc54fc13072da8a679c0"
  },
  {
    "url": "/locales/sr.json",
    "revision": "bc7f5e61ff2ceb95f7686121375d4084"
  },
  {
    "url": "/locales/sv.json",
    "revision": "135db275e45ca779d2c3236c4669eaf4"
  },
  {
    "url": "/locales/ta.json",
    "revision": "6c645810189ff0afba1d2e288de93009"
  },
  {
    "url": "/locales/te.json",
    "revision": "66e1488bec054266912999d7231dc090"
  },
  {
    "url": "/locales/th.json",
    "revision": "cb653d8a95dbb5ff9fec19c95dcc57e0"
  },
  {
    "url": "/locales/tl.json",
    "revision": "e40fe9dcd4fd594153d6201fff5c3fc8"
  },
  {
    "url": "/locales/tr.json",
    "revision": "4f12e67c6558747fb238551a9f94754f"
  },
  {
    "url": "/locales/uk.json",
    "revision": "0c4b31217ce27cb781787f30a018c8a4"
  },
  {
    "url": "/locales/ur.json",
    "revision": "797b4250b6e5e71a2f11754c29129b97"
  },
  {
    "url": "/locales/vi.json",
    "revision": "b12889ff12ebfde093f798df93a04e34"
  },
  {
    "url": "/locales/yue.json",
    "revision": "799da04d57d2b0efcac5278ecd63f08c"
  },
  {
    "url": "/locales/zh-CN.json",
    "revision": "e6d660314046fc888e7201c1b12c5ed4"
  },
  {
    "url": "/locales/zh-HK.json",
    "revision": "f3f1818c8a5fb350e107e06506358862"
  },
  {
    "url": "/locales/zh-TW.json",
    "revision": "85a638939755fc326751756b3fd83cad"
  },
  {
    "url": "/locales/zh.json",
    "revision": "0a73800c8b7025cc86ea11ba3e5956a5"
  },
  {
    "url": "/mapillary-js/arrow-up-white.svg",
    "revision": "70f9ada510f74b33289669bf2323cdb8"
  },
  {
    "url": "/mapillary-js/cover-logo.svg",
    "revision": "358dd514e44468339d419ae89528c5c3"
  },
  {
    "url": "/mapillary-js/pano-indicator.svg",
    "revision": "f064d5ac0f5c5ff86bd766a67d120ac0"
  },
  {
    "url": "/mapillary-js/pano.svg",
    "revision": "6cbc6d71e5972f835106873073856deb"
  },
  {
    "url": "/mapillary-js/pointer-wheat.svg",
    "revision": "5b946ea50fc0ad5f6defc603b62b6398"
  },
  {
    "url": "/mapillary-js/pointer-white.svg",
    "revision": "e6734d100b29734992d543c5c16fa239"
  },
  {
    "url": "/mapillary-js/spinner.svg",
    "revision": "4fea664f954f3747c081c281c3acfe49"
  },
  {
    "url": "/mapillary-js/stepper-left.svg",
    "revision": "3d6d92ffa7623a7c0c4ec7f5139b098a"
  },
  {
    "url": "/mapillary-js/stepper-play.svg",
    "revision": "e7408ff4356bad00b4c8cebab19c4f39"
  },
  {
    "url": "/mapillary-js/stepper-right.svg",
    "revision": "542105cc89e5d568bef02b78206e6bcb"
  },
  {
    "url": "/mapillary-js/stepper-stop.svg",
    "revision": "08e67247bc1bd0a96e8094ad951ed843"
  },
  {
    "url": "/mapillary-js/turn-around.svg",
    "revision": "d825567a1a1968dea71c7424e74f2996"
  },
  {
    "url": "/mapillary-js/turn.svg",
    "revision": "48f442bffb936063caebc146efa367fa"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
