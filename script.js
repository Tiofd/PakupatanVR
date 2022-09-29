(function(){
    var script = {
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_85F4F301_8848_A66D_41E0_75E3E00206B8], 'cardboardAvailable')",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.IconButton_85F4F301_8848_A66D_41E0_75E3E00206B8",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "propagateClick": false,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "paddingRight": 0,
 "vrPolyfillScale": 0.5,
 "verticalAlign": "top",
 "minWidth": 20,
 "layout": "absolute",
 "definitions": [{
 "levels": [
  {
   "url": "media/popup_98544939_873F_273C_41DB_0407BA8BEE71_0_0.jpg",
   "width": 4080,
   "class": "ImageResourceLevel",
   "height": 3072
  },
  {
   "url": "media/popup_98544939_873F_273C_41DB_0407BA8BEE71_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1542
  },
  {
   "url": "media/popup_98544939_873F_273C_41DB_0407BA8BEE71_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 771
  },
  {
   "url": "media/popup_98544939_873F_273C_41DB_0407BA8BEE71_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 385
  }
 ],
 "id": "ImageResource_A3EE6F41_872D_3B4F_41D0_91A716500752",
 "class": "ImageResource"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_899BCA12_86BC_B71A_41DF_A5F8015BAED1_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_899BCA12_86BC_B71A_41DF_A5F8015BAED1_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_899BCA12_86BC_B71A_41DF_A5F8015BAED1_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_899BCA12_86BC_B71A_41DF_A5F8015BAED1_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_899BCA12_86BC_B71A_41DF_A5F8015BAED1_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_899BCA12_86BC_B71A_41DF_A5F8015BAED1_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_899BCA12_86BC_B71A_41DF_A5F8015BAED1_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_899BCA12_86BC_B71A_41DF_A5F8015BAED1_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_899BCA12_86BC_B71A_41DF_A5F8015BAED1_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_899BCA12_86BC_B71A_41DF_A5F8015BAED1_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_899BCA12_86BC_B71A_41DF_A5F8015BAED1_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_899BCA12_86BC_B71A_41DF_A5F8015BAED1_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_899BCA12_86BC_B71A_41DF_A5F8015BAED1_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_899BCA12_86BC_B71A_41DF_A5F8015BAED1_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_899BCA12_86BC_B71A_41DF_A5F8015BAED1_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_899BCA12_86BC_B71A_41DF_A5F8015BAED1_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_899BCA12_86BC_B71A_41DF_A5F8015BAED1_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_899BCA12_86BC_B71A_41DF_A5F8015BAED1_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_899BCA12_86BC_B71A_41DF_A5F8015BAED1_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_899BCA12_86BC_B71A_41DF_A5F8015BAED1_t.jpg",
 "hfovMin": "135%",
 "id": "panorama_899BCA12_86BC_B71A_41DF_A5F8015BAED1",
 "class": "Panorama",
 "label": "20220924_200928_838",
 "hfovMax": 130,
 "partial": false,
 "hfov": 360,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 90.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_87B2FB3C_8859_E694_41C1_F317E10EECE8",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_8820CE31_86BC_4F17_41D3_B363835DEE5F_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8820CE31_86BC_4F17_41D3_B363835DEE5F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8820CE31_86BC_4F17_41D3_B363835DEE5F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8820CE31_86BC_4F17_41D3_B363835DEE5F_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8820CE31_86BC_4F17_41D3_B363835DEE5F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8820CE31_86BC_4F17_41D3_B363835DEE5F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8820CE31_86BC_4F17_41D3_B363835DEE5F_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8820CE31_86BC_4F17_41D3_B363835DEE5F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8820CE31_86BC_4F17_41D3_B363835DEE5F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_8820CE31_86BC_4F17_41D3_B363835DEE5F_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8820CE31_86BC_4F17_41D3_B363835DEE5F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8820CE31_86BC_4F17_41D3_B363835DEE5F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8820CE31_86BC_4F17_41D3_B363835DEE5F_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8820CE31_86BC_4F17_41D3_B363835DEE5F_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8820CE31_86BC_4F17_41D3_B363835DEE5F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8820CE31_86BC_4F17_41D3_B363835DEE5F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8820CE31_86BC_4F17_41D3_B363835DEE5F_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8820CE31_86BC_4F17_41D3_B363835DEE5F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8820CE31_86BC_4F17_41D3_B363835DEE5F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "20220924_202118_705",
 "hfovMin": "135%",
 "id": "panorama_8820CE31_86BC_4F17_41D3_B363835DEE5F",
 "class": "Panorama",
 "overlays": [
  "this.overlay_889849F2_8733_274C_41C5_20DE8F8CD49B",
  "this.overlay_960BDF4A_8732_FB5C_41A2_9838407CF0FA",
  "this.overlay_967BDC18_872D_3CFC_41BB_B49C1DECA5EF"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 2.34,
   "yaw": 89.06,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8A38172F_86BC_7D0B_41B8_23387D5A3C7B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8A398A34_86BF_D71D_41D4_F394D0B1AF72"
  },
  {
   "backwardYaw": 84.16,
   "yaw": -93.39,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8AD0E5EF_86BC_DD0A_41B1_98F1D0BC35D0"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8820CE31_86BC_4F17_41D3_B363835DEE5F_t.jpg",
 "hfovMax": 130
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 4.12,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "popupMaxWidth": "95%",
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "id": "popup_9841E3AB_8735_6BDC_41D2_8CE0CBAAFF29",
 "image": {
  "levels": [
   {
    "url": "media/popup_9841E3AB_8735_6BDC_41D2_8CE0CBAAFF29_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 771
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 4.68,
 "hideEasing": "cubic_out",
 "hfov": 11.68
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8AC4D61C_86BC_DF0D_41C6_909D43608752_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8ACC4819_86BC_7317_41B1_572973713036_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_8ACC4819_86BC_7317_41B1_572973713036_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ACC4819_86BC_7317_41B1_572973713036_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ACC4819_86BC_7317_41B1_572973713036_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8ACC4819_86BC_7317_41B1_572973713036_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ACC4819_86BC_7317_41B1_572973713036_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ACC4819_86BC_7317_41B1_572973713036_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8ACC4819_86BC_7317_41B1_572973713036_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ACC4819_86BC_7317_41B1_572973713036_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ACC4819_86BC_7317_41B1_572973713036_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_8ACC4819_86BC_7317_41B1_572973713036_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ACC4819_86BC_7317_41B1_572973713036_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ACC4819_86BC_7317_41B1_572973713036_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8ACC4819_86BC_7317_41B1_572973713036_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8ACC4819_86BC_7317_41B1_572973713036_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ACC4819_86BC_7317_41B1_572973713036_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ACC4819_86BC_7317_41B1_572973713036_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8ACC4819_86BC_7317_41B1_572973713036_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ACC4819_86BC_7317_41B1_572973713036_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ACC4819_86BC_7317_41B1_572973713036_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8ACC4819_86BC_7317_41B1_572973713036_t.jpg",
 "hfovMin": "135%",
 "id": "panorama_8ACC4819_86BC_7317_41B1_572973713036",
 "class": "Panorama",
 "label": "20220924_200720_109",
 "hfovMax": 130,
 "partial": false,
 "hfov": 360,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_89B030B2_86BB_B315_41D5_B6E317C390AF_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8AD32B36_86BC_551D_41A0_F27558AA8279_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -100.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_87812B2D_8859_E6B5_41D4_B3E32472E050",
 "class": "PanoramaCamera"
},
{
 "levels": [
  {
   "url": "media/popup_9890F8D3_873D_E573_41A8_BD1496038844_0_0.jpg",
   "width": 4080,
   "class": "ImageResourceLevel",
   "height": 3072
  },
  {
   "url": "media/popup_9890F8D3_873D_E573_41A8_BD1496038844_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1542
  },
  {
   "url": "media/popup_9890F8D3_873D_E573_41A8_BD1496038844_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 771
  },
  {
   "url": "media/popup_9890F8D3_873D_E573_41A8_BD1496038844_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 385
  }
 ],
 "id": "ImageResource_A3E45F51_872D_3B4C_41DA_33C9B597579E",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": 3.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_997EDD64_8859_E2AB_41D7_140C57CBAF54",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8836E539_86BF_FD17_41C8_DCFB05040C19_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -90.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_994F7D54_8859_E2EB_41D8_088919FE9452",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -2.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_98FA5C9B_8859_E39D_41D7_0467DBD35441",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8AD1E7F5_86BC_5D1F_41DC_EBF48F97DFC1_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8AD00B1E_86BC_F50A_41BF_667B7A7CAE1A_camera",
 "class": "PanoramaCamera"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -2.97,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "popupMaxWidth": "95%",
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "id": "popup_9F4C096D_8753_2754_41D2_0F82281B76AC",
 "image": {
  "levels": [
   {
    "url": "media/popup_9F4C096D_8753_2754_41D2_0F82281B76AC_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 771
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 9.22,
 "hideEasing": "cubic_out",
 "hfov": 11.32
},
{
 "initialPosition": {
  "yaw": 107.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_98470B7F_8859_E695_41D1_1A04E6E61E64",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 167.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_98A3FD1F_8859_E295_41D8_BC7764AF0235",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_8A3BA068_86BF_D336_41D1_9967BD4EB429_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8A3BA068_86BF_D336_41D1_9967BD4EB429_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8A3BA068_86BF_D336_41D1_9967BD4EB429_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8A3BA068_86BF_D336_41D1_9967BD4EB429_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8A3BA068_86BF_D336_41D1_9967BD4EB429_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8A3BA068_86BF_D336_41D1_9967BD4EB429_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8A3BA068_86BF_D336_41D1_9967BD4EB429_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8A3BA068_86BF_D336_41D1_9967BD4EB429_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8A3BA068_86BF_D336_41D1_9967BD4EB429_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_8A3BA068_86BF_D336_41D1_9967BD4EB429_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8A3BA068_86BF_D336_41D1_9967BD4EB429_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8A3BA068_86BF_D336_41D1_9967BD4EB429_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8A3BA068_86BF_D336_41D1_9967BD4EB429_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8A3BA068_86BF_D336_41D1_9967BD4EB429_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8A3BA068_86BF_D336_41D1_9967BD4EB429_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8A3BA068_86BF_D336_41D1_9967BD4EB429_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8A3BA068_86BF_D336_41D1_9967BD4EB429_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8A3BA068_86BF_D336_41D1_9967BD4EB429_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8A3BA068_86BF_D336_41D1_9967BD4EB429_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "20220924_202001_257",
 "hfovMin": "135%",
 "id": "panorama_8A3BA068_86BF_D336_41D1_9967BD4EB429",
 "class": "Panorama",
 "overlays": [
  "this.overlay_9D8002B6_873D_2535_41DB_834F9CF5509F",
  "this.overlay_9B52EF3D_8733_7B34_41DD_42A0D0F070A4",
  "this.overlay_9CA0A3B7_8735_2B34_41CD_B075572D9939",
  "this.overlay_A7FC2C6B_8733_1D53_41CF_0BE794FAC086",
  "this.popup_A7CFCA49_8733_655F_41DE_E69C3D3FFF36"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 91.52,
   "yaw": 7.25,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8A38172F_86BC_7D0B_41B8_23387D5A3C7B"
  },
  {
   "backwardYaw": -175.03,
   "yaw": 101.02,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8836E539_86BF_FD17_41C8_DCFB05040C19"
  },
  {
   "backwardYaw": -88.48,
   "yaw": -75.39,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8AD32B36_86BC_551D_41A0_F27558AA8279"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8A3BA068_86BF_D336_41D1_9967BD4EB429_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_8864772A_86BD_DD0A_41D2_8F54F789CB75_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8864772A_86BD_DD0A_41D2_8F54F789CB75_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8864772A_86BD_DD0A_41D2_8F54F789CB75_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8864772A_86BD_DD0A_41D2_8F54F789CB75_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8864772A_86BD_DD0A_41D2_8F54F789CB75_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8864772A_86BD_DD0A_41D2_8F54F789CB75_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8864772A_86BD_DD0A_41D2_8F54F789CB75_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8864772A_86BD_DD0A_41D2_8F54F789CB75_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8864772A_86BD_DD0A_41D2_8F54F789CB75_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_8864772A_86BD_DD0A_41D2_8F54F789CB75_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8864772A_86BD_DD0A_41D2_8F54F789CB75_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8864772A_86BD_DD0A_41D2_8F54F789CB75_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8864772A_86BD_DD0A_41D2_8F54F789CB75_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8864772A_86BD_DD0A_41D2_8F54F789CB75_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8864772A_86BD_DD0A_41D2_8F54F789CB75_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8864772A_86BD_DD0A_41D2_8F54F789CB75_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8864772A_86BD_DD0A_41D2_8F54F789CB75_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8864772A_86BD_DD0A_41D2_8F54F789CB75_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8864772A_86BD_DD0A_41D2_8F54F789CB75_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "20220924_201038_001",
 "hfovMin": "135%",
 "id": "panorama_8864772A_86BD_DD0A_41D2_8F54F789CB75",
 "class": "Panorama",
 "overlays": [
  "this.overlay_9FF152F7_8753_6534_41DF_9E327FCFE352"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -177.25,
   "yaw": -176.32,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8AD4712E_86BC_B50D_41D4_2A5B6C64B294"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8864772A_86BD_DD0A_41D2_8F54F789CB75_t.jpg",
 "hfovMax": 130
},
{
 "levels": [
  {
   "url": "media/popup_98BF41ED_8735_2754_41C9_9FB0DFAF4363_0_0.jpg",
   "width": 4080,
   "class": "ImageResourceLevel",
   "height": 3072
  },
  {
   "url": "media/popup_98BF41ED_8735_2754_41C9_9FB0DFAF4363_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1542
  },
  {
   "url": "media/popup_98BF41ED_8735_2754_41C9_9FB0DFAF4363_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 771
  },
  {
   "url": "media/popup_98BF41ED_8735_2754_41C9_9FB0DFAF4363_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 385
  }
 ],
 "id": "ImageResource_A3F01F41_872D_3B4F_41B9_13BA0BB19A76",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": 86.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9887ECFF_8859_E394_41DC_D2F464B80274",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_89B030B2_86BB_B315_41D5_B6E317C390AF_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_89B030B2_86BB_B315_41D5_B6E317C390AF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_89B030B2_86BB_B315_41D5_B6E317C390AF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_89B030B2_86BB_B315_41D5_B6E317C390AF_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_89B030B2_86BB_B315_41D5_B6E317C390AF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_89B030B2_86BB_B315_41D5_B6E317C390AF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_89B030B2_86BB_B315_41D5_B6E317C390AF_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_89B030B2_86BB_B315_41D5_B6E317C390AF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_89B030B2_86BB_B315_41D5_B6E317C390AF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_89B030B2_86BB_B315_41D5_B6E317C390AF_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_89B030B2_86BB_B315_41D5_B6E317C390AF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_89B030B2_86BB_B315_41D5_B6E317C390AF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_89B030B2_86BB_B315_41D5_B6E317C390AF_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_89B030B2_86BB_B315_41D5_B6E317C390AF_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_89B030B2_86BB_B315_41D5_B6E317C390AF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_89B030B2_86BB_B315_41D5_B6E317C390AF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_89B030B2_86BB_B315_41D5_B6E317C390AF_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_89B030B2_86BB_B315_41D5_B6E317C390AF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_89B030B2_86BB_B315_41D5_B6E317C390AF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_89B030B2_86BB_B315_41D5_B6E317C390AF_t.jpg",
 "hfovMin": "135%",
 "id": "panorama_89B030B2_86BB_B315_41D5_B6E317C390AF",
 "class": "Panorama",
 "label": "20220924_200644_808",
 "hfovMax": 130,
 "partial": false,
 "hfov": 360,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": -6.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_98D85C56_8859_E297_41E0_D4A9DEA7CF67",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_8AD00B1E_86BC_F50A_41BF_667B7A7CAE1A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD00B1E_86BC_F50A_41BF_667B7A7CAE1A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD00B1E_86BC_F50A_41BF_667B7A7CAE1A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8AD00B1E_86BC_F50A_41BF_667B7A7CAE1A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD00B1E_86BC_F50A_41BF_667B7A7CAE1A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD00B1E_86BC_F50A_41BF_667B7A7CAE1A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8AD00B1E_86BC_F50A_41BF_667B7A7CAE1A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD00B1E_86BC_F50A_41BF_667B7A7CAE1A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD00B1E_86BC_F50A_41BF_667B7A7CAE1A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_8AD00B1E_86BC_F50A_41BF_667B7A7CAE1A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD00B1E_86BC_F50A_41BF_667B7A7CAE1A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD00B1E_86BC_F50A_41BF_667B7A7CAE1A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8AD00B1E_86BC_F50A_41BF_667B7A7CAE1A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8AD00B1E_86BC_F50A_41BF_667B7A7CAE1A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD00B1E_86BC_F50A_41BF_667B7A7CAE1A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD00B1E_86BC_F50A_41BF_667B7A7CAE1A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8AD00B1E_86BC_F50A_41BF_667B7A7CAE1A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD00B1E_86BC_F50A_41BF_667B7A7CAE1A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD00B1E_86BC_F50A_41BF_667B7A7CAE1A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "20220924_201741_818",
 "hfovMin": "135%",
 "id": "panorama_8AD00B1E_86BC_F50A_41BF_667B7A7CAE1A",
 "class": "Panorama",
 "overlays": [
  "this.overlay_95EDA5F5_86B4_7D1F_41E0_B4706FDE1441",
  "this.overlay_A89C822D_88F3_24D4_41AD_E7B3323828E5"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -50.44,
   "yaw": 140.2,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8A38172F_86BC_7D0B_41B8_23387D5A3C7B"
  },
  {
   "backwardYaw": 4.08,
   "yaw": -178.57,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_89F7FE2B_86BC_CF0B_41CA_94C5BD0F49ED"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8AD00B1E_86BC_F50A_41BF_667B7A7CAE1A_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_8A38E3AC_86BD_B50E_41CB_B235346A714E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8A38E3AC_86BD_B50E_41CB_B235346A714E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8A38E3AC_86BD_B50E_41CB_B235346A714E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8A38E3AC_86BD_B50E_41CB_B235346A714E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8A38E3AC_86BD_B50E_41CB_B235346A714E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8A38E3AC_86BD_B50E_41CB_B235346A714E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8A38E3AC_86BD_B50E_41CB_B235346A714E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8A38E3AC_86BD_B50E_41CB_B235346A714E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8A38E3AC_86BD_B50E_41CB_B235346A714E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_8A38E3AC_86BD_B50E_41CB_B235346A714E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8A38E3AC_86BD_B50E_41CB_B235346A714E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8A38E3AC_86BD_B50E_41CB_B235346A714E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8A38E3AC_86BD_B50E_41CB_B235346A714E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8A38E3AC_86BD_B50E_41CB_B235346A714E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8A38E3AC_86BD_B50E_41CB_B235346A714E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8A38E3AC_86BD_B50E_41CB_B235346A714E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8A38E3AC_86BD_B50E_41CB_B235346A714E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8A38E3AC_86BD_B50E_41CB_B235346A714E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8A38E3AC_86BD_B50E_41CB_B235346A714E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8A38E3AC_86BD_B50E_41CB_B235346A714E_t.jpg",
 "hfovMin": "135%",
 "id": "panorama_8A38E3AC_86BD_B50E_41CB_B235346A714E",
 "class": "Panorama",
 "label": "20220924_201020_703",
 "hfovMax": 130,
 "partial": false,
 "hfov": 360,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 174.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_87E08DB5_8859_FD95_41BF_F632AD795F61",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8ADF906C_86BC_530D_41CE_DAD2670C6218_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -177.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_980CEBE2_8859_E5AF_41A4_E41AA6FE0B79",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8ACD92E7_86BC_573B_41D3_ECDC1A71CA9D_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_8AC4D61C_86BC_DF0D_41C6_909D43608752_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AC4D61C_86BC_DF0D_41C6_909D43608752_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AC4D61C_86BC_DF0D_41C6_909D43608752_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8AC4D61C_86BC_DF0D_41C6_909D43608752_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AC4D61C_86BC_DF0D_41C6_909D43608752_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AC4D61C_86BC_DF0D_41C6_909D43608752_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8AC4D61C_86BC_DF0D_41C6_909D43608752_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AC4D61C_86BC_DF0D_41C6_909D43608752_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AC4D61C_86BC_DF0D_41C6_909D43608752_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_8AC4D61C_86BC_DF0D_41C6_909D43608752_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AC4D61C_86BC_DF0D_41C6_909D43608752_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AC4D61C_86BC_DF0D_41C6_909D43608752_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8AC4D61C_86BC_DF0D_41C6_909D43608752_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8AC4D61C_86BC_DF0D_41C6_909D43608752_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AC4D61C_86BC_DF0D_41C6_909D43608752_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AC4D61C_86BC_DF0D_41C6_909D43608752_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8AC4D61C_86BC_DF0D_41C6_909D43608752_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AC4D61C_86BC_DF0D_41C6_909D43608752_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AC4D61C_86BC_DF0D_41C6_909D43608752_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "20220924_200905_379",
 "hfovMin": "135%",
 "id": "panorama_8AC4D61C_86BC_DF0D_41C6_909D43608752",
 "class": "Panorama",
 "overlays": [
  "this.overlay_9390839E_8777_2BF4_41BB_A8C916788182",
  "this.overlay_92E2905C_8775_2574_41CD_CFC2E0C50C12",
  "this.overlay_9860554A_8735_EF5D_41DC_EB366991BD01",
  "this.popup_98BF41ED_8735_2754_41C9_9FB0DFAF4363",
  "this.overlay_989BF54F_8735_6F54_41DB_AD9F8F1FD419",
  "this.popup_9804CAC2_8735_254C_41DF_FD69CB9297FB"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_898A1C72_86BD_F31A_41DE_1384F46F3D74"
  },
  {
   "backwardYaw": 96.43,
   "yaw": -15.02,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_884B522F_86BC_F70B_41BE_AB0F60060908"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8AC4D61C_86BC_DF0D_41C6_909D43608752_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_89DEAC08_86BC_72F6_41C1_C628DDB6D941_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_89DEAC08_86BC_72F6_41C1_C628DDB6D941_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_89DEAC08_86BC_72F6_41C1_C628DDB6D941_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_89DEAC08_86BC_72F6_41C1_C628DDB6D941_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_89DEAC08_86BC_72F6_41C1_C628DDB6D941_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_89DEAC08_86BC_72F6_41C1_C628DDB6D941_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_89DEAC08_86BC_72F6_41C1_C628DDB6D941_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_89DEAC08_86BC_72F6_41C1_C628DDB6D941_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_89DEAC08_86BC_72F6_41C1_C628DDB6D941_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_89DEAC08_86BC_72F6_41C1_C628DDB6D941_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_89DEAC08_86BC_72F6_41C1_C628DDB6D941_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_89DEAC08_86BC_72F6_41C1_C628DDB6D941_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_89DEAC08_86BC_72F6_41C1_C628DDB6D941_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_89DEAC08_86BC_72F6_41C1_C628DDB6D941_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_89DEAC08_86BC_72F6_41C1_C628DDB6D941_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_89DEAC08_86BC_72F6_41C1_C628DDB6D941_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_89DEAC08_86BC_72F6_41C1_C628DDB6D941_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_89DEAC08_86BC_72F6_41C1_C628DDB6D941_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_89DEAC08_86BC_72F6_41C1_C628DDB6D941_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "20220924_201625_043",
 "hfovMin": "135%",
 "id": "panorama_89DEAC08_86BC_72F6_41C1_C628DDB6D941",
 "class": "Panorama",
 "overlays": [
  "this.overlay_9D191D6A_8735_3F5C_41D5_E02C7BE0C629",
  "this.overlay_9D5450B4_8733_E534_41D3_3A334F69D74B",
  "this.overlay_999D1075_8753_2537_41E0_1A2D3A3DA884",
  "this.overlay_A7793960_873F_E74C_41C5_6E2080E6F218",
  "this.popup_98544939_873F_273C_41DB_0407BA8BEE71"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8AD1E7F5_86BC_5D1F_41DC_EBF48F97DFC1"
  },
  {
   "backwardYaw": -0.05,
   "yaw": 172.71,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8836E539_86BF_FD17_41C8_DCFB05040C19"
  },
  {
   "backwardYaw": -84.8,
   "yaw": -89.29,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8AD4712E_86BC_B50D_41D4_2A5B6C64B294"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_89DEAC08_86BC_72F6_41C1_C628DDB6D941_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 104.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9846DE55_8859_FE94_41DE_B7F59BC7D8CB",
 "class": "PanoramaCamera"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 114.32,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "popupMaxWidth": "95%",
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "id": "popup_98E8FAEB_873D_2553_4161_2BD881736DF9",
 "image": {
  "levels": [
   {
    "url": "media/popup_98E8FAEB_873D_2553_4161_2BD881736DF9_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 771
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 0.47,
 "hideEasing": "cubic_out",
 "hfov": 7.11
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_886E7CA3_86BB_F33B_41D9_815E9E73875F_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_886E7CA3_86BB_F33B_41D9_815E9E73875F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_886E7CA3_86BB_F33B_41D9_815E9E73875F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_886E7CA3_86BB_F33B_41D9_815E9E73875F_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_886E7CA3_86BB_F33B_41D9_815E9E73875F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_886E7CA3_86BB_F33B_41D9_815E9E73875F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_886E7CA3_86BB_F33B_41D9_815E9E73875F_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_886E7CA3_86BB_F33B_41D9_815E9E73875F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_886E7CA3_86BB_F33B_41D9_815E9E73875F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_886E7CA3_86BB_F33B_41D9_815E9E73875F_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_886E7CA3_86BB_F33B_41D9_815E9E73875F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_886E7CA3_86BB_F33B_41D9_815E9E73875F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_886E7CA3_86BB_F33B_41D9_815E9E73875F_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_886E7CA3_86BB_F33B_41D9_815E9E73875F_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_886E7CA3_86BB_F33B_41D9_815E9E73875F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_886E7CA3_86BB_F33B_41D9_815E9E73875F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_886E7CA3_86BB_F33B_41D9_815E9E73875F_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_886E7CA3_86BB_F33B_41D9_815E9E73875F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_886E7CA3_86BB_F33B_41D9_815E9E73875F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_886E7CA3_86BB_F33B_41D9_815E9E73875F_t.jpg",
 "hfovMin": "135%",
 "id": "panorama_886E7CA3_86BB_F33B_41D9_815E9E73875F",
 "class": "Panorama",
 "label": "20220924_200627_764",
 "hfovMax": 130,
 "partial": false,
 "hfov": 360,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 91.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_87A42E23_8859_FEAC_41C6_745245F3D28C",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_89DEAC08_86BC_72F6_41C1_C628DDB6D941_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8AD4712E_86BC_B50D_41D4_2A5B6C64B294_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8A3BA068_86BF_D336_41D1_9967BD4EB429_camera",
 "class": "PanoramaCamera"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -155.08,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "popupMaxWidth": "95%",
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "id": "popup_A7CFCA49_8733_655F_41DE_E69C3D3FFF36",
 "image": {
  "levels": [
   {
    "url": "media/popup_A7CFCA49_8733_655F_41DE_E69C3D3FFF36_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 771
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 6.48,
 "hideEasing": "cubic_out",
 "hfov": 14.5
},
{
 "levels": [
  {
   "url": "media/popup_9804CAC2_8735_254C_41DF_FD69CB9297FB_0_0.jpg",
   "width": 4080,
   "class": "ImageResourceLevel",
   "height": 3072
  },
  {
   "url": "media/popup_9804CAC2_8735_254C_41DF_FD69CB9297FB_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1542
  },
  {
   "url": "media/popup_9804CAC2_8735_254C_41DF_FD69CB9297FB_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 771
  },
  {
   "url": "media/popup_9804CAC2_8735_254C_41DF_FD69CB9297FB_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 385
  }
 ],
 "id": "ImageResource_A3F31F41_872D_3B4F_41D0_866C4C27748A",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_886E7CA3_86BB_F33B_41D9_815E9E73875F_camera",
 "class": "PanoramaCamera"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 104.39,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "popupMaxWidth": "95%",
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "id": "popup_98C663D8_873D_2B7C_41E0_D0692A48CA27",
 "image": {
  "levels": [
   {
    "url": "media/popup_98C663D8_873D_2B7C_41E0_D0692A48CA27_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 771
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 5.89,
 "hideEasing": "cubic_out",
 "hfov": 7.07
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_898B1D12_86B4_4D15_41D4_DB00897CF0EF_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_8AD32B36_86BC_551D_41A0_F27558AA8279_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD32B36_86BC_551D_41A0_F27558AA8279_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD32B36_86BC_551D_41A0_F27558AA8279_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8AD32B36_86BC_551D_41A0_F27558AA8279_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD32B36_86BC_551D_41A0_F27558AA8279_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD32B36_86BC_551D_41A0_F27558AA8279_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8AD32B36_86BC_551D_41A0_F27558AA8279_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD32B36_86BC_551D_41A0_F27558AA8279_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD32B36_86BC_551D_41A0_F27558AA8279_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_8AD32B36_86BC_551D_41A0_F27558AA8279_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD32B36_86BC_551D_41A0_F27558AA8279_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD32B36_86BC_551D_41A0_F27558AA8279_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8AD32B36_86BC_551D_41A0_F27558AA8279_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8AD32B36_86BC_551D_41A0_F27558AA8279_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD32B36_86BC_551D_41A0_F27558AA8279_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD32B36_86BC_551D_41A0_F27558AA8279_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8AD32B36_86BC_551D_41A0_F27558AA8279_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD32B36_86BC_551D_41A0_F27558AA8279_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD32B36_86BC_551D_41A0_F27558AA8279_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "20220924_201938_770",
 "hfovMin": "135%",
 "id": "panorama_8AD32B36_86BC_551D_41A0_F27558AA8279",
 "class": "Panorama",
 "overlays": [
  "this.overlay_99B8FF05_87F5_3CD4_41B8_7C94B7C50BE8",
  "this.overlay_980426A1_8733_6DCF_41C2_FCA596FAAB5C",
  "this.popup_98663F2D_8733_1CD4_41BF_0453E520DB57",
  "this.overlay_98154E66_8733_3D55_41DE_B9635B62E857",
  "this.popup_A751F1C3_8733_674C_41DC_98D6EDF2790A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -75.39,
   "yaw": -88.48,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8A3BA068_86BF_D336_41D1_9967BD4EB429"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8AD32B36_86BC_551D_41A0_F27558AA8279_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_8ACA0467_86BC_533B_41B4_F1992385C2C6_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ACA0467_86BC_533B_41B4_F1992385C2C6_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ACA0467_86BC_533B_41B4_F1992385C2C6_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8ACA0467_86BC_533B_41B4_F1992385C2C6_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ACA0467_86BC_533B_41B4_F1992385C2C6_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ACA0467_86BC_533B_41B4_F1992385C2C6_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8ACA0467_86BC_533B_41B4_F1992385C2C6_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ACA0467_86BC_533B_41B4_F1992385C2C6_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ACA0467_86BC_533B_41B4_F1992385C2C6_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_8ACA0467_86BC_533B_41B4_F1992385C2C6_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ACA0467_86BC_533B_41B4_F1992385C2C6_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ACA0467_86BC_533B_41B4_F1992385C2C6_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8ACA0467_86BC_533B_41B4_F1992385C2C6_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8ACA0467_86BC_533B_41B4_F1992385C2C6_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ACA0467_86BC_533B_41B4_F1992385C2C6_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ACA0467_86BC_533B_41B4_F1992385C2C6_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8ACA0467_86BC_533B_41B4_F1992385C2C6_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ACA0467_86BC_533B_41B4_F1992385C2C6_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ACA0467_86BC_533B_41B4_F1992385C2C6_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8ACA0467_86BC_533B_41B4_F1992385C2C6_t.jpg",
 "hfovMin": "135%",
 "id": "panorama_8ACA0467_86BC_533B_41B4_F1992385C2C6",
 "class": "Panorama",
 "label": "20220924_200702_151",
 "hfovMax": 130,
 "partial": false,
 "hfov": 360,
 "pitch": 0
},
{
 "levels": [
  {
   "url": "media/popup_98663F2D_8733_1CD4_41BF_0453E520DB57_0_0.jpg",
   "width": 4080,
   "class": "ImageResourceLevel",
   "height": 3072
  },
  {
   "url": "media/popup_98663F2D_8733_1CD4_41BF_0453E520DB57_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1542
  },
  {
   "url": "media/popup_98663F2D_8733_1CD4_41BF_0453E520DB57_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 771
  },
  {
   "url": "media/popup_98663F2D_8733_1CD4_41BF_0453E520DB57_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 385
  }
 ],
 "id": "ImageResource_A3E88F41_872D_3B4F_41C3_806E2B1B4FE0",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": -172.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9952AD2E_8859_E2B7_41D0_BA184298C561",
 "class": "PanoramaCamera"
},
{
 "gyroscopeEnabled": true,
 "touchControlMode": "drag_rotation",
 "class": "PanoramaPlayer",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "buttonCardboardView": "this.IconButton_85F4F301_8848_A66D_41E0_75E3E00206B8",
 "mouseControlMode": "drag_acceleration",
 "displayPlaybackBar": true
},
{
 "initialPosition": {
  "yaw": 1.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_98B6AD0F_8859_E275_41C2_40BE679A42A3",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -78.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_87AB4B5F_8859_E695_41DB_7C2B6950D781",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -95.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_983FBC11_8859_E26D_41CD_FB13FDAAAE64",
 "class": "PanoramaCamera"
},
{
 "levels": [
  {
   "url": "media/popup_9841E3AB_8735_6BDC_41D2_8CE0CBAAFF29_0_0.jpg",
   "width": 4080,
   "class": "ImageResourceLevel",
   "height": 3072
  },
  {
   "url": "media/popup_9841E3AB_8735_6BDC_41D2_8CE0CBAAFF29_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1542
  },
  {
   "url": "media/popup_9841E3AB_8735_6BDC_41D2_8CE0CBAAFF29_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 771
  },
  {
   "url": "media/popup_9841E3AB_8735_6BDC_41D2_8CE0CBAAFF29_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 385
  }
 ],
 "id": "ImageResource_A3E7CF51_872D_3B4C_4198_292824ACA5F4",
 "class": "ImageResource"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_8ACD92E7_86BC_573B_41D3_ECDC1A71CA9D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ACD92E7_86BC_573B_41D3_ECDC1A71CA9D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ACD92E7_86BC_573B_41D3_ECDC1A71CA9D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8ACD92E7_86BC_573B_41D3_ECDC1A71CA9D_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ACD92E7_86BC_573B_41D3_ECDC1A71CA9D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ACD92E7_86BC_573B_41D3_ECDC1A71CA9D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8ACD92E7_86BC_573B_41D3_ECDC1A71CA9D_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ACD92E7_86BC_573B_41D3_ECDC1A71CA9D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ACD92E7_86BC_573B_41D3_ECDC1A71CA9D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_8ACD92E7_86BC_573B_41D3_ECDC1A71CA9D_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ACD92E7_86BC_573B_41D3_ECDC1A71CA9D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ACD92E7_86BC_573B_41D3_ECDC1A71CA9D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8ACD92E7_86BC_573B_41D3_ECDC1A71CA9D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8ACD92E7_86BC_573B_41D3_ECDC1A71CA9D_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ACD92E7_86BC_573B_41D3_ECDC1A71CA9D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ACD92E7_86BC_573B_41D3_ECDC1A71CA9D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8ACD92E7_86BC_573B_41D3_ECDC1A71CA9D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ACD92E7_86BC_573B_41D3_ECDC1A71CA9D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ACD92E7_86BC_573B_41D3_ECDC1A71CA9D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "20220924_201839_340",
 "hfovMin": "135%",
 "id": "panorama_8ACD92E7_86BC_573B_41D3_ECDC1A71CA9D",
 "class": "Panorama",
 "overlays": [
  "this.overlay_90C39ADC_86BC_D70E_41C6_9DA95DFC9810",
  "this.overlay_90A2A914_8753_E4F4_41D4_600237C1FEFD",
  "this.popup_9F4C096D_8753_2754_41D2_0F82281B76AC"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 177.9,
   "yaw": -12.95,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_89F7FE2B_86BC_CF0B_41CA_94C5BD0F49ED"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8ACD92E7_86BC_573B_41D3_ECDC1A71CA9D_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8A38E3AC_86BD_B50E_41CB_B235346A714E_camera",
 "class": "PanoramaCamera"
},
{
 "levels": [
  {
   "url": "media/popup_98C663D8_873D_2B7C_41E0_D0692A48CA27_0_0.jpg",
   "width": 4080,
   "class": "ImageResourceLevel",
   "height": 3072
  },
  {
   "url": "media/popup_98C663D8_873D_2B7C_41E0_D0692A48CA27_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1542
  },
  {
   "url": "media/popup_98C663D8_873D_2B7C_41E0_D0692A48CA27_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 771
  },
  {
   "url": "media/popup_98C663D8_873D_2B7C_41E0_D0692A48CA27_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 385
  }
 ],
 "id": "ImageResource_A3EC6F41_872D_3B4F_41D1_E9B3F2202E10",
 "class": "ImageResource"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_8ADF906C_86BC_530D_41CE_DAD2670C6218_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ADF906C_86BC_530D_41CE_DAD2670C6218_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ADF906C_86BC_530D_41CE_DAD2670C6218_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8ADF906C_86BC_530D_41CE_DAD2670C6218_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ADF906C_86BC_530D_41CE_DAD2670C6218_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ADF906C_86BC_530D_41CE_DAD2670C6218_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8ADF906C_86BC_530D_41CE_DAD2670C6218_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ADF906C_86BC_530D_41CE_DAD2670C6218_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ADF906C_86BC_530D_41CE_DAD2670C6218_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_8ADF906C_86BC_530D_41CE_DAD2670C6218_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ADF906C_86BC_530D_41CE_DAD2670C6218_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ADF906C_86BC_530D_41CE_DAD2670C6218_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8ADF906C_86BC_530D_41CE_DAD2670C6218_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8ADF906C_86BC_530D_41CE_DAD2670C6218_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ADF906C_86BC_530D_41CE_DAD2670C6218_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ADF906C_86BC_530D_41CE_DAD2670C6218_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8ADF906C_86BC_530D_41CE_DAD2670C6218_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ADF906C_86BC_530D_41CE_DAD2670C6218_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ADF906C_86BC_530D_41CE_DAD2670C6218_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8ADF906C_86BC_530D_41CE_DAD2670C6218_t.jpg",
 "hfovMin": "135%",
 "id": "panorama_8ADF906C_86BC_530D_41CE_DAD2670C6218",
 "class": "Panorama",
 "label": "20220924_201002_416",
 "hfovMax": 130,
 "partial": false,
 "hfov": 360,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8820CE31_86BC_4F17_41D3_B363835DEE5F_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -175.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9861DB9E_8859_E597_41D7_326067ABB202",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_8AD4712E_86BC_B50D_41D4_2A5B6C64B294_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD4712E_86BC_B50D_41D4_2A5B6C64B294_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD4712E_86BC_B50D_41D4_2A5B6C64B294_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8AD4712E_86BC_B50D_41D4_2A5B6C64B294_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD4712E_86BC_B50D_41D4_2A5B6C64B294_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD4712E_86BC_B50D_41D4_2A5B6C64B294_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8AD4712E_86BC_B50D_41D4_2A5B6C64B294_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD4712E_86BC_B50D_41D4_2A5B6C64B294_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD4712E_86BC_B50D_41D4_2A5B6C64B294_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_8AD4712E_86BC_B50D_41D4_2A5B6C64B294_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD4712E_86BC_B50D_41D4_2A5B6C64B294_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD4712E_86BC_B50D_41D4_2A5B6C64B294_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8AD4712E_86BC_B50D_41D4_2A5B6C64B294_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8AD4712E_86BC_B50D_41D4_2A5B6C64B294_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD4712E_86BC_B50D_41D4_2A5B6C64B294_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD4712E_86BC_B50D_41D4_2A5B6C64B294_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8AD4712E_86BC_B50D_41D4_2A5B6C64B294_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD4712E_86BC_B50D_41D4_2A5B6C64B294_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD4712E_86BC_B50D_41D4_2A5B6C64B294_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "20220924_201658_258",
 "hfovMin": "135%",
 "id": "panorama_8AD4712E_86BC_B50D_41D4_2A5B6C64B294",
 "class": "Panorama",
 "overlays": [
  "this.overlay_92766F9E_86DC_4D0A_41C2_19124A4431A7",
  "this.overlay_957CF54A_86DD_DD75_41CF_6047FA930111",
  "this.overlay_9EFFF5AA_8753_6FDD_41B5_95363B29C764"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -176.32,
   "yaw": -177.25,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8864772A_86BD_DD0A_41D2_8F54F789CB75"
  },
  {
   "backwardYaw": -89.29,
   "yaw": -84.8,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_89DEAC08_86BC_72F6_41C1_C628DDB6D941"
  },
  {
   "backwardYaw": -5.84,
   "yaw": 89.88,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8AD0E5EF_86BC_DD0A_41B1_98F1D0BC35D0"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8AD4712E_86BC_B50D_41D4_2A5B6C64B294_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_8AD0E5EF_86BC_DD0A_41B1_98F1D0BC35D0_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD0E5EF_86BC_DD0A_41B1_98F1D0BC35D0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD0E5EF_86BC_DD0A_41B1_98F1D0BC35D0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8AD0E5EF_86BC_DD0A_41B1_98F1D0BC35D0_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD0E5EF_86BC_DD0A_41B1_98F1D0BC35D0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD0E5EF_86BC_DD0A_41B1_98F1D0BC35D0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8AD0E5EF_86BC_DD0A_41B1_98F1D0BC35D0_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD0E5EF_86BC_DD0A_41B1_98F1D0BC35D0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD0E5EF_86BC_DD0A_41B1_98F1D0BC35D0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_8AD0E5EF_86BC_DD0A_41B1_98F1D0BC35D0_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD0E5EF_86BC_DD0A_41B1_98F1D0BC35D0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD0E5EF_86BC_DD0A_41B1_98F1D0BC35D0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8AD0E5EF_86BC_DD0A_41B1_98F1D0BC35D0_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8AD0E5EF_86BC_DD0A_41B1_98F1D0BC35D0_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD0E5EF_86BC_DD0A_41B1_98F1D0BC35D0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD0E5EF_86BC_DD0A_41B1_98F1D0BC35D0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8AD0E5EF_86BC_DD0A_41B1_98F1D0BC35D0_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD0E5EF_86BC_DD0A_41B1_98F1D0BC35D0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD0E5EF_86BC_DD0A_41B1_98F1D0BC35D0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "20220924_201719_814",
 "hfovMin": "135%",
 "id": "panorama_8AD0E5EF_86BC_DD0A_41B1_98F1D0BC35D0",
 "class": "Panorama",
 "overlays": [
  "this.overlay_95FED02A_86D5_D335_41D2_D1A84AD6E834",
  "this.overlay_949E700A_86DC_D2F5_41CE_B4FB3C0523C6",
  "this.overlay_9925B3DA_872F_2B7D_41DD_E1A5ACFAAF85",
  "this.overlay_999A94EF_872F_ED53_41A0_DEA748214527",
  "this.overlay_AC185CF1_8955_3D4C_4180_DB7331AC64FB"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -101.16,
   "yaw": -97.48,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_88036993_86BB_D51A_41BE_3881D96313A7"
  },
  {
   "backwardYaw": 89.88,
   "yaw": -5.84,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8AD4712E_86BC_B50D_41D4_2A5B6C64B294"
  },
  {
   "backwardYaw": -93.39,
   "yaw": 84.16,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8820CE31_86BC_4F17_41D3_B363835DEE5F"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8AD0E5EF_86BC_DD0A_41B1_98F1D0BC35D0_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -174.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_98524E37_8859_FE94_41DD_4C50DA16D9D2",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_898B1D12_86B4_4D15_41D4_DB00897CF0EF_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_898B1D12_86B4_4D15_41D4_DB00897CF0EF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_898B1D12_86B4_4D15_41D4_DB00897CF0EF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_898B1D12_86B4_4D15_41D4_DB00897CF0EF_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_898B1D12_86B4_4D15_41D4_DB00897CF0EF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_898B1D12_86B4_4D15_41D4_DB00897CF0EF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_898B1D12_86B4_4D15_41D4_DB00897CF0EF_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_898B1D12_86B4_4D15_41D4_DB00897CF0EF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_898B1D12_86B4_4D15_41D4_DB00897CF0EF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_898B1D12_86B4_4D15_41D4_DB00897CF0EF_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_898B1D12_86B4_4D15_41D4_DB00897CF0EF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_898B1D12_86B4_4D15_41D4_DB00897CF0EF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_898B1D12_86B4_4D15_41D4_DB00897CF0EF_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_898B1D12_86B4_4D15_41D4_DB00897CF0EF_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_898B1D12_86B4_4D15_41D4_DB00897CF0EF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_898B1D12_86B4_4D15_41D4_DB00897CF0EF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_898B1D12_86B4_4D15_41D4_DB00897CF0EF_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_898B1D12_86B4_4D15_41D4_DB00897CF0EF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_898B1D12_86B4_4D15_41D4_DB00897CF0EF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "20220924_200518_856",
 "hfovMin": "135%",
 "id": "panorama_898B1D12_86B4_4D15_41D4_DB00897CF0EF",
 "class": "Panorama",
 "overlays": [
  "this.overlay_90546473_876E_ED4C_41C4_D18EBD41242F",
  "this.overlay_905E0469_876D_2D5C_41D1_77903D4B2340",
  "this.overlay_98037F63_8735_1B4C_41D0_EFA77AB9C424",
  "this.popup_9845FD4F_8735_3F54_41D5_750F8197E58F"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8ACD92E7_86BC_573B_41D3_ECDC1A71CA9D"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_898B1D12_86B4_4D15_41D4_DB00897CF0EF_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_884B522F_86BC_F70B_41BE_AB0F60060908_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8ACA0467_86BC_533B_41B4_F1992385C2C6_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 78.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_98E5CCBA_8859_E39C_41C5_26D98D2ACB66",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8AD1836F_86BC_750A_41C7_51718FF3FE08_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8A38172F_86BC_7D0B_41B8_23387D5A3C7B_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8ACA6B50_86BC_5515_41AC_AAAC8FDEBBCA_camera",
 "class": "PanoramaCamera"
},
{
 "levels": [
  {
   "url": "media/popup_A751F1C3_8733_674C_41DC_98D6EDF2790A_0_0.jpg",
   "width": 4080,
   "class": "ImageResourceLevel",
   "height": 3072
  },
  {
   "url": "media/popup_A751F1C3_8733_674C_41DC_98D6EDF2790A_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1542
  },
  {
   "url": "media/popup_A751F1C3_8733_674C_41DC_98D6EDF2790A_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 771
  },
  {
   "url": "media/popup_A751F1C3_8733_674C_41DC_98D6EDF2790A_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 385
  }
 ],
 "id": "ImageResource_A3EA7F51_872D_3B4C_41DF_373D27AF8056",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": -90.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9894DCE0_8859_E3AB_41D4_E4AF10F133F1",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_899BCA12_86BC_B71A_41DF_A5F8015BAED1_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_884B522F_86BC_F70B_41BE_AB0F60060908_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_884B522F_86BC_F70B_41BE_AB0F60060908_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_884B522F_86BC_F70B_41BE_AB0F60060908_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_884B522F_86BC_F70B_41BE_AB0F60060908_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_884B522F_86BC_F70B_41BE_AB0F60060908_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_884B522F_86BC_F70B_41BE_AB0F60060908_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_884B522F_86BC_F70B_41BE_AB0F60060908_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_884B522F_86BC_F70B_41BE_AB0F60060908_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_884B522F_86BC_F70B_41BE_AB0F60060908_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_884B522F_86BC_F70B_41BE_AB0F60060908_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_884B522F_86BC_F70B_41BE_AB0F60060908_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_884B522F_86BC_F70B_41BE_AB0F60060908_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_884B522F_86BC_F70B_41BE_AB0F60060908_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_884B522F_86BC_F70B_41BE_AB0F60060908_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_884B522F_86BC_F70B_41BE_AB0F60060908_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_884B522F_86BC_F70B_41BE_AB0F60060908_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_884B522F_86BC_F70B_41BE_AB0F60060908_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_884B522F_86BC_F70B_41BE_AB0F60060908_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_884B522F_86BC_F70B_41BE_AB0F60060908_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "20220924_200843_544",
 "hfovMin": "135%",
 "id": "panorama_884B522F_86BC_F70B_41BE_AB0F60060908",
 "class": "Panorama",
 "overlays": [
  "this.overlay_9173EEE1_8773_3D4C_41DF_37AF650AC21C",
  "this.overlay_9134A8C0_876D_254C_41BB_63E04F82F1C0",
  "this.overlay_981CEA36_8737_2534_41DF_819107AFB10B",
  "this.popup_98BFDF11_8736_FCCC_41DD_F4D1CF9C9C99"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -15.02,
   "yaw": 96.43,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8AC4D61C_86BC_DF0D_41C6_909D43608752"
  },
  {
   "backwardYaw": -167.03,
   "yaw": -89.3,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8AD1836F_86BC_750A_41C7_51718FF3FE08"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_884B522F_86BC_F70B_41BE_AB0F60060908_t.jpg",
 "hfovMax": 130
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -18.89,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "popupMaxWidth": "95%",
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "id": "popup_98663F2D_8733_1CD4_41BF_0453E520DB57",
 "image": {
  "levels": [
   {
    "url": "media/popup_98663F2D_8733_1CD4_41BF_0453E520DB57_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 771
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 2.86,
 "hideEasing": "cubic_out",
 "hfov": 14.56
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_89F7FE2B_86BC_CF0B_41CA_94C5BD0F49ED_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -39.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_995C4D44_8859_E2F4_41CB_CA3BF91AAF63",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_88036993_86BB_D51A_41BE_3881D96313A7_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 82.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_879FDDE7_8859_FDB5_4184_052AD0F454EE",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -7.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_98546B6E_8859_E6B4_41D9_A6E12EC27277",
 "class": "PanoramaCamera"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -6.21,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "popupMaxWidth": "95%",
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "id": "popup_98BFDF11_8736_FCCC_41DD_F4D1CF9C9C99",
 "image": {
  "levels": [
   {
    "url": "media/popup_98BFDF11_8736_FCCC_41DD_F4D1CF9C9C99_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 771
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 6.95,
 "hideEasing": "cubic_out",
 "hfov": 14.47
},
{
 "levels": [
  {
   "url": "media/popup_98E8FAEB_873D_2553_4161_2BD881736DF9_0_0.jpg",
   "width": 4080,
   "class": "ImageResourceLevel",
   "height": 3072
  },
  {
   "url": "media/popup_98E8FAEB_873D_2553_4161_2BD881736DF9_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1542
  },
  {
   "url": "media/popup_98E8FAEB_873D_2553_4161_2BD881736DF9_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 771
  },
  {
   "url": "media/popup_98E8FAEB_873D_2553_4161_2BD881736DF9_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 385
  }
 ],
 "id": "ImageResource_A3F2BF41_872D_3B4F_41C7_8C3F6E2280DA",
 "class": "ImageResource"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_89B11ED8_86BC_CF16_41D3_AC914379ACC0_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_89B11ED8_86BC_CF16_41D3_AC914379ACC0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_89B11ED8_86BC_CF16_41D3_AC914379ACC0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_89B11ED8_86BC_CF16_41D3_AC914379ACC0_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_89B11ED8_86BC_CF16_41D3_AC914379ACC0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_89B11ED8_86BC_CF16_41D3_AC914379ACC0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_89B11ED8_86BC_CF16_41D3_AC914379ACC0_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_89B11ED8_86BC_CF16_41D3_AC914379ACC0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_89B11ED8_86BC_CF16_41D3_AC914379ACC0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_89B11ED8_86BC_CF16_41D3_AC914379ACC0_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_89B11ED8_86BC_CF16_41D3_AC914379ACC0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_89B11ED8_86BC_CF16_41D3_AC914379ACC0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_89B11ED8_86BC_CF16_41D3_AC914379ACC0_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_89B11ED8_86BC_CF16_41D3_AC914379ACC0_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_89B11ED8_86BC_CF16_41D3_AC914379ACC0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_89B11ED8_86BC_CF16_41D3_AC914379ACC0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_89B11ED8_86BC_CF16_41D3_AC914379ACC0_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_89B11ED8_86BC_CF16_41D3_AC914379ACC0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_89B11ED8_86BC_CF16_41D3_AC914379ACC0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_89B11ED8_86BC_CF16_41D3_AC914379ACC0_t.jpg",
 "hfovMin": "135%",
 "id": "panorama_89B11ED8_86BC_CF16_41D3_AC914379ACC0",
 "class": "Panorama",
 "label": "20220924_200755_617",
 "hfovMax": 130,
 "partial": false,
 "hfov": 360,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 72.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_87851DF1_8859_FDAD_41C6_AEB206C38EF7",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_88036993_86BB_D51A_41BE_3881D96313A7_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_88036993_86BB_D51A_41BE_3881D96313A7_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_88036993_86BB_D51A_41BE_3881D96313A7_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_88036993_86BB_D51A_41BE_3881D96313A7_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_88036993_86BB_D51A_41BE_3881D96313A7_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_88036993_86BB_D51A_41BE_3881D96313A7_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_88036993_86BB_D51A_41BE_3881D96313A7_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_88036993_86BB_D51A_41BE_3881D96313A7_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_88036993_86BB_D51A_41BE_3881D96313A7_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_88036993_86BB_D51A_41BE_3881D96313A7_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_88036993_86BB_D51A_41BE_3881D96313A7_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_88036993_86BB_D51A_41BE_3881D96313A7_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_88036993_86BB_D51A_41BE_3881D96313A7_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_88036993_86BB_D51A_41BE_3881D96313A7_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_88036993_86BB_D51A_41BE_3881D96313A7_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_88036993_86BB_D51A_41BE_3881D96313A7_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_88036993_86BB_D51A_41BE_3881D96313A7_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_88036993_86BB_D51A_41BE_3881D96313A7_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_88036993_86BB_D51A_41BE_3881D96313A7_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "20220924_200606_645",
 "hfovMin": "135%",
 "id": "panorama_88036993_86BB_D51A_41BE_3881D96313A7",
 "class": "Panorama",
 "overlays": [
  "this.overlay_90C46A47_86B4_777A_41B1_470323A835E2",
  "this.overlay_91D99D0A_8754_B2F5_41D1_951107F69733"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -97.48,
   "yaw": -101.16,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8AD0E5EF_86BC_DD0A_41B1_98F1D0BC35D0"
  },
  {
   "backwardYaw": -107.25,
   "yaw": 79.66,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8AD1836F_86BC_750A_41C7_51718FF3FE08"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_88036993_86BB_D51A_41BE_3881D96313A7_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 100.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_98295C27_8859_E2B5_41C1_2A0A1BE58A2A",
 "class": "PanoramaCamera"
},
{
 "levels": [
  {
   "url": "media/popup_9845FD4F_8735_3F54_41D5_750F8197E58F_0_0.jpg",
   "width": 4080,
   "class": "ImageResourceLevel",
   "height": 3072
  },
  {
   "url": "media/popup_9845FD4F_8735_3F54_41D5_750F8197E58F_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1542
  },
  {
   "url": "media/popup_9845FD4F_8735_3F54_41D5_750F8197E58F_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 771
  },
  {
   "url": "media/popup_9845FD4F_8735_3F54_41D5_750F8197E58F_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 385
  }
 ],
 "id": "ImageResource_A3F5BF41_872D_3B4F_41D8_139E6AA8B555",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8864772A_86BD_DD0A_41D2_8F54F789CB75_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_8A398A34_86BF_D71D_41D4_F394D0B1AF72_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8A398A34_86BF_D71D_41D4_F394D0B1AF72_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8A398A34_86BF_D71D_41D4_F394D0B1AF72_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8A398A34_86BF_D71D_41D4_F394D0B1AF72_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8A398A34_86BF_D71D_41D4_F394D0B1AF72_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8A398A34_86BF_D71D_41D4_F394D0B1AF72_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8A398A34_86BF_D71D_41D4_F394D0B1AF72_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8A398A34_86BF_D71D_41D4_F394D0B1AF72_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8A398A34_86BF_D71D_41D4_F394D0B1AF72_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_8A398A34_86BF_D71D_41D4_F394D0B1AF72_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8A398A34_86BF_D71D_41D4_F394D0B1AF72_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8A398A34_86BF_D71D_41D4_F394D0B1AF72_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8A398A34_86BF_D71D_41D4_F394D0B1AF72_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8A398A34_86BF_D71D_41D4_F394D0B1AF72_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8A398A34_86BF_D71D_41D4_F394D0B1AF72_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8A398A34_86BF_D71D_41D4_F394D0B1AF72_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8A398A34_86BF_D71D_41D4_F394D0B1AF72_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8A398A34_86BF_D71D_41D4_F394D0B1AF72_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8A398A34_86BF_D71D_41D4_F394D0B1AF72_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "20220924_202052_859",
 "hfovMin": "135%",
 "id": "panorama_8A398A34_86BF_D71D_41D4_F394D0B1AF72",
 "class": "Panorama",
 "overlays": [
  "this.overlay_9678C4D6_872F_2D75_41CE_1FCF04374CBE",
  "this.overlay_97B4FEA5_872F_FDD4_41D6_43C9A069FC3D",
  "this.overlay_988B016A_8735_275D_41B0_326EE3EC9692",
  "this.popup_9841E3AB_8735_6BDC_41D2_8CE0CBAAFF29"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -79.07,
   "yaw": -72.45,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8836E539_86BF_FD17_41C8_DCFB05040C19"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8A398A34_86BF_D71D_41D4_F394D0B1AF72_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 95.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_981DDBB3_8859_E5AD_4161_99E1034BABB0",
 "class": "PanoramaCamera"
},
{
 "levels": [
  {
   "url": "media/popup_98BFDF11_8736_FCCC_41DD_F4D1CF9C9C99_0_0.jpg",
   "width": 4080,
   "class": "ImageResourceLevel",
   "height": 3072
  },
  {
   "url": "media/popup_98BFDF11_8736_FCCC_41DD_F4D1CF9C9C99_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1542
  },
  {
   "url": "media/popup_98BFDF11_8736_FCCC_41DD_F4D1CF9C9C99_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 771
  },
  {
   "url": "media/popup_98BFDF11_8736_FCCC_41DD_F4D1CF9C9C99_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 385
  }
 ],
 "id": "ImageResource_A3F68F41_872D_3B4F_41C9_40E490D9E6AA",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_898A1C72_86BD_F31A_41DE_1384F46F3D74_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 179.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9812DB9E_8859_E597_41E0_E512C41332FF",
 "class": "PanoramaCamera"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 137.18,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "popupMaxWidth": "95%",
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "id": "popup_98BF41ED_8735_2754_41C9_9FB0DFAF4363",
 "image": {
  "levels": [
   {
    "url": "media/popup_98BF41ED_8735_2754_41C9_9FB0DFAF4363_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 771
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 6.55,
 "hideEasing": "cubic_out",
 "hfov": 11.64
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8A398A34_86BF_D71D_41D4_F394D0B1AF72_camera",
 "class": "PanoramaCamera"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 103.07,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "popupMaxWidth": "95%",
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "id": "popup_9890F8D3_873D_E573_41A8_BD1496038844",
 "image": {
  "levels": [
   {
    "url": "media/popup_9890F8D3_873D_E573_41A8_BD1496038844_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 771
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 2.91,
 "hideEasing": "cubic_out",
 "hfov": 7.1
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 76.43,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "popupMaxWidth": "95%",
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "id": "popup_98544939_873F_273C_41DB_0407BA8BEE71",
 "image": {
  "levels": [
   {
    "url": "media/popup_98544939_873F_273C_41DB_0407BA8BEE71_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 771
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 2.45,
 "hideEasing": "cubic_out",
 "hfov": 14.57
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -98.25,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "popupMaxWidth": "95%",
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "id": "popup_9845FD4F_8735_3F54_41D5_750F8197E58F",
 "image": {
  "levels": [
   {
    "url": "media/popup_9845FD4F_8735_3F54_41D5_750F8197E58F_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 771
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 4.91,
 "hideEasing": "cubic_out",
 "hfov": 14.53
},
{
 "items": [
  {
   "media": "this.panorama_8ACD92E7_86BC_573B_41D3_ECDC1A71CA9D",
   "camera": "this.panorama_8ACD92E7_86BC_573B_41D3_ECDC1A71CA9D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_89F7FE2B_86BC_CF0B_41CA_94C5BD0F49ED",
   "camera": "this.panorama_89F7FE2B_86BC_CF0B_41CA_94C5BD0F49ED_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_8AD00B1E_86BC_F50A_41BF_667B7A7CAE1A",
   "camera": "this.panorama_8AD00B1E_86BC_F50A_41BF_667B7A7CAE1A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_8A38172F_86BC_7D0B_41B8_23387D5A3C7B",
   "camera": "this.panorama_8A38172F_86BC_7D0B_41B8_23387D5A3C7B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_898B1D12_86B4_4D15_41D4_DB00897CF0EF",
   "camera": "this.panorama_898B1D12_86B4_4D15_41D4_DB00897CF0EF_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_8820CE31_86BC_4F17_41D3_B363835DEE5F",
   "camera": "this.panorama_8820CE31_86BC_4F17_41D3_B363835DEE5F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_8AD0E5EF_86BC_DD0A_41B1_98F1D0BC35D0",
   "camera": "this.panorama_8AD0E5EF_86BC_DD0A_41B1_98F1D0BC35D0_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_88036993_86BB_D51A_41BE_3881D96313A7",
   "camera": "this.panorama_88036993_86BB_D51A_41BE_3881D96313A7_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_886E7CA3_86BB_F33B_41D9_815E9E73875F",
   "camera": "this.panorama_886E7CA3_86BB_F33B_41D9_815E9E73875F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_89B030B2_86BB_B315_41D5_B6E317C390AF",
   "camera": "this.panorama_89B030B2_86BB_B315_41D5_B6E317C390AF_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_8ACA0467_86BC_533B_41B4_F1992385C2C6",
   "camera": "this.panorama_8ACA0467_86BC_533B_41B4_F1992385C2C6_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_8ACC4819_86BC_7317_41B1_572973713036",
   "camera": "this.panorama_8ACC4819_86BC_7317_41B1_572973713036_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_8ACA6B50_86BC_5515_41AC_AAAC8FDEBBCA",
   "camera": "this.panorama_8ACA6B50_86BC_5515_41AC_AAAC8FDEBBCA_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_89B11ED8_86BC_CF16_41D3_AC914379ACC0",
   "camera": "this.panorama_89B11ED8_86BC_CF16_41D3_AC914379ACC0_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_884B522F_86BC_F70B_41BE_AB0F60060908",
   "camera": "this.panorama_884B522F_86BC_F70B_41BE_AB0F60060908_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_8AC4D61C_86BC_DF0D_41C6_909D43608752",
   "camera": "this.panorama_8AC4D61C_86BC_DF0D_41C6_909D43608752_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_899BCA12_86BC_B71A_41DF_A5F8015BAED1",
   "camera": "this.panorama_899BCA12_86BC_B71A_41DF_A5F8015BAED1_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_8854CD28_86BC_4D36_41D3_2B167CC7D2FC",
   "camera": "this.panorama_8854CD28_86BC_4D36_41D3_2B167CC7D2FC_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_8ADF906C_86BC_530D_41CE_DAD2670C6218",
   "camera": "this.panorama_8ADF906C_86BC_530D_41CE_DAD2670C6218_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_8A38E3AC_86BD_B50E_41CB_B235346A714E",
   "camera": "this.panorama_8A38E3AC_86BD_B50E_41CB_B235346A714E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_8864772A_86BD_DD0A_41D2_8F54F789CB75",
   "camera": "this.panorama_8864772A_86BD_DD0A_41D2_8F54F789CB75_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_898A1C72_86BD_F31A_41DE_1384F46F3D74",
   "camera": "this.panorama_898A1C72_86BD_F31A_41DE_1384F46F3D74_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_881520A8_86BD_B335_41B7_95FFE4EFE94B",
   "camera": "this.panorama_881520A8_86BD_B335_41B7_95FFE4EFE94B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_8AD1E7F5_86BC_5D1F_41DC_EBF48F97DFC1",
   "camera": "this.panorama_8AD1E7F5_86BC_5D1F_41DC_EBF48F97DFC1_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_89DEAC08_86BC_72F6_41C1_C628DDB6D941",
   "camera": "this.panorama_89DEAC08_86BC_72F6_41C1_C628DDB6D941_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_8AD4712E_86BC_B50D_41D4_2A5B6C64B294",
   "camera": "this.panorama_8AD4712E_86BC_B50D_41D4_2A5B6C64B294_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_8AD32B36_86BC_551D_41A0_F27558AA8279",
   "camera": "this.panorama_8AD32B36_86BC_551D_41A0_F27558AA8279_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_8A3BA068_86BF_D336_41D1_9967BD4EB429",
   "camera": "this.panorama_8A3BA068_86BF_D336_41D1_9967BD4EB429_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_8836E539_86BF_FD17_41C8_DCFB05040C19",
   "camera": "this.panorama_8836E539_86BF_FD17_41C8_DCFB05040C19_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_8A398A34_86BF_D71D_41D4_F394D0B1AF72",
   "camera": "this.panorama_8A398A34_86BF_D71D_41D4_F394D0B1AF72_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_8AD1836F_86BC_750A_41C7_51718FF3FE08",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_8AD1836F_86BC_750A_41C7_51718FF3FE08_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_89B11ED8_86BC_CF16_41D3_AC914379ACC0_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -88.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_87B0AE05_8859_FE75_41CE_47AC2AC5EF31",
 "class": "PanoramaCamera"
},
{
 "levels": [
  {
   "url": "media/popup_A7CFCA49_8733_655F_41DE_E69C3D3FFF36_0_0.jpg",
   "width": 4080,
   "class": "ImageResourceLevel",
   "height": 3072
  },
  {
   "url": "media/popup_A7CFCA49_8733_655F_41DE_E69C3D3FFF36_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1542
  },
  {
   "url": "media/popup_A7CFCA49_8733_655F_41DE_E69C3D3FFF36_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 771
  },
  {
   "url": "media/popup_A7CFCA49_8733_655F_41DE_E69C3D3FFF36_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 385
  }
 ],
 "id": "ImageResource_A3E5AF51_872D_3B4C_41C6_E0BF6E185999",
 "class": "ImageResource"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_8AD1E7F5_86BC_5D1F_41DC_EBF48F97DFC1_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD1E7F5_86BC_5D1F_41DC_EBF48F97DFC1_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD1E7F5_86BC_5D1F_41DC_EBF48F97DFC1_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8AD1E7F5_86BC_5D1F_41DC_EBF48F97DFC1_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD1E7F5_86BC_5D1F_41DC_EBF48F97DFC1_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD1E7F5_86BC_5D1F_41DC_EBF48F97DFC1_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8AD1E7F5_86BC_5D1F_41DC_EBF48F97DFC1_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD1E7F5_86BC_5D1F_41DC_EBF48F97DFC1_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD1E7F5_86BC_5D1F_41DC_EBF48F97DFC1_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_8AD1E7F5_86BC_5D1F_41DC_EBF48F97DFC1_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD1E7F5_86BC_5D1F_41DC_EBF48F97DFC1_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD1E7F5_86BC_5D1F_41DC_EBF48F97DFC1_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8AD1E7F5_86BC_5D1F_41DC_EBF48F97DFC1_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8AD1E7F5_86BC_5D1F_41DC_EBF48F97DFC1_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD1E7F5_86BC_5D1F_41DC_EBF48F97DFC1_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD1E7F5_86BC_5D1F_41DC_EBF48F97DFC1_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8AD1E7F5_86BC_5D1F_41DC_EBF48F97DFC1_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD1E7F5_86BC_5D1F_41DC_EBF48F97DFC1_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD1E7F5_86BC_5D1F_41DC_EBF48F97DFC1_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "20220924_201601_305",
 "hfovMin": "135%",
 "id": "panorama_8AD1E7F5_86BC_5D1F_41DC_EBF48F97DFC1",
 "class": "Panorama",
 "overlays": [
  "this.overlay_A7FD3910_873D_64CC_41DC_4D59F0625E78",
  "this.popup_98C663D8_873D_2B7C_41E0_D0692A48CA27",
  "this.overlay_A9D6D15B_88D5_2773_41DC_B120D47AE8C0",
  "this.overlay_AA6C9C28_88D3_1CDC_41AC_3C7058C54F50"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 173.34,
   "yaw": 5.1,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_881520A8_86BD_B335_41B7_95FFE4EFE94B"
  },
  {
   "backwardYaw": 173.34,
   "yaw": -174.16,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_881520A8_86BD_B335_41B7_95FFE4EFE94B"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8AD1E7F5_86BC_5D1F_41DC_EBF48F97DFC1_t.jpg",
 "hfovMax": 130
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -137.14,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "popupMaxWidth": "95%",
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "id": "popup_9804CAC2_8735_254C_41DF_FD69CB9297FB",
 "image": {
  "levels": [
   {
    "url": "media/popup_9804CAC2_8735_254C_41DF_FD69CB9297FB_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 771
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 8.77,
 "hideEasing": "cubic_out",
 "hfov": 14.41
},
{
 "levels": [
  {
   "url": "media/popup_9F4C096D_8753_2754_41D2_0F82281B76AC_0_0.jpg",
   "width": 4080,
   "class": "ImageResourceLevel",
   "height": 3072
  },
  {
   "url": "media/popup_9F4C096D_8753_2754_41D2_0F82281B76AC_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1542
  },
  {
   "url": "media/popup_9F4C096D_8753_2754_41D2_0F82281B76AC_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 771
  },
  {
   "url": "media/popup_9F4C096D_8753_2754_41D2_0F82281B76AC_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 385
  }
 ],
 "id": "ImageResource_9AE21A12_873D_64CD_41DB_F0F43B87397A",
 "class": "ImageResource"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_8AD1836F_86BC_750A_41C7_51718FF3FE08_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD1836F_86BC_750A_41C7_51718FF3FE08_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD1836F_86BC_750A_41C7_51718FF3FE08_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8AD1836F_86BC_750A_41C7_51718FF3FE08_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD1836F_86BC_750A_41C7_51718FF3FE08_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD1836F_86BC_750A_41C7_51718FF3FE08_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8AD1836F_86BC_750A_41C7_51718FF3FE08_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD1836F_86BC_750A_41C7_51718FF3FE08_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD1836F_86BC_750A_41C7_51718FF3FE08_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_8AD1836F_86BC_750A_41C7_51718FF3FE08_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD1836F_86BC_750A_41C7_51718FF3FE08_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD1836F_86BC_750A_41C7_51718FF3FE08_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8AD1836F_86BC_750A_41C7_51718FF3FE08_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8AD1836F_86BC_750A_41C7_51718FF3FE08_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD1836F_86BC_750A_41C7_51718FF3FE08_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD1836F_86BC_750A_41C7_51718FF3FE08_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8AD1836F_86BC_750A_41C7_51718FF3FE08_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD1836F_86BC_750A_41C7_51718FF3FE08_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8AD1836F_86BC_750A_41C7_51718FF3FE08_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "20220927_102122_509",
 "hfovMin": "135%",
 "id": "panorama_8AD1836F_86BC_750A_41C7_51718FF3FE08",
 "class": "Panorama",
 "overlays": [
  "this.overlay_92AB9F1A_8755_3CFD_41C7_1404F3132C5A",
  "this.overlay_98B268F1_87ED_E54F_41C7_F6227A3C1932"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 79.66,
   "yaw": -107.25,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_88036993_86BB_D51A_41BE_3881D96313A7"
  },
  {
   "backwardYaw": -89.3,
   "yaw": -167.03,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_884B522F_86BC_F70B_41BE_AB0F60060908"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8AD1836F_86BC_750A_41C7_51718FF3FE08_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8AD0E5EF_86BC_DD0A_41B1_98F1D0BC35D0_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -6.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_98C8BC7C_8859_E29B_419F_35331CD9167B",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 2.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_87BE4B4F_8859_E6F5_41D0_1FB08C205F64",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 129.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_98760B8E_8859_E674_41CF_C0D9604A6318",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 164.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_87E88DC7_8859_FDF5_41D4_F4EE80AD91CE",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8854CD28_86BC_4D36_41D3_2B167CC7D2FC_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_881520A8_86BD_B335_41B7_95FFE4EFE94B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_881520A8_86BD_B335_41B7_95FFE4EFE94B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_881520A8_86BD_B335_41B7_95FFE4EFE94B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_881520A8_86BD_B335_41B7_95FFE4EFE94B_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_881520A8_86BD_B335_41B7_95FFE4EFE94B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_881520A8_86BD_B335_41B7_95FFE4EFE94B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_881520A8_86BD_B335_41B7_95FFE4EFE94B_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_881520A8_86BD_B335_41B7_95FFE4EFE94B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_881520A8_86BD_B335_41B7_95FFE4EFE94B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_881520A8_86BD_B335_41B7_95FFE4EFE94B_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_881520A8_86BD_B335_41B7_95FFE4EFE94B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_881520A8_86BD_B335_41B7_95FFE4EFE94B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_881520A8_86BD_B335_41B7_95FFE4EFE94B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_881520A8_86BD_B335_41B7_95FFE4EFE94B_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_881520A8_86BD_B335_41B7_95FFE4EFE94B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_881520A8_86BD_B335_41B7_95FFE4EFE94B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_881520A8_86BD_B335_41B7_95FFE4EFE94B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_881520A8_86BD_B335_41B7_95FFE4EFE94B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_881520A8_86BD_B335_41B7_95FFE4EFE94B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "20220924_201122_289",
 "hfovMin": "135%",
 "id": "panorama_881520A8_86BD_B335_41B7_95FFE4EFE94B",
 "class": "Panorama",
 "overlays": [
  "this.overlay_982A02E8_8732_E55D_41D9_C97C9CE44528",
  "this.popup_98E8FAEB_873D_2553_4161_2BD881736DF9",
  "this.overlay_AA55BA05_892D_24D7_41D0_317621F6F7CF",
  "this.overlay_AC443EF6_892F_FD35_41D0_31DE6852D4F6"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 5.1,
   "yaw": 173.34,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8AD1E7F5_86BC_5D1F_41DC_EBF48F97DFC1"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_898A1C72_86BD_F31A_41DE_1384F46F3D74"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_881520A8_86BD_B335_41B7_95FFE4EFE94B_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 4.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_87BE9E0F_8859_FE75_41D7_A8FBBDC3FBB8",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_8ACA6B50_86BC_5515_41AC_AAAC8FDEBBCA_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ACA6B50_86BC_5515_41AC_AAAC8FDEBBCA_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ACA6B50_86BC_5515_41AC_AAAC8FDEBBCA_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8ACA6B50_86BC_5515_41AC_AAAC8FDEBBCA_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ACA6B50_86BC_5515_41AC_AAAC8FDEBBCA_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ACA6B50_86BC_5515_41AC_AAAC8FDEBBCA_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8ACA6B50_86BC_5515_41AC_AAAC8FDEBBCA_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ACA6B50_86BC_5515_41AC_AAAC8FDEBBCA_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ACA6B50_86BC_5515_41AC_AAAC8FDEBBCA_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_8ACA6B50_86BC_5515_41AC_AAAC8FDEBBCA_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ACA6B50_86BC_5515_41AC_AAAC8FDEBBCA_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ACA6B50_86BC_5515_41AC_AAAC8FDEBBCA_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8ACA6B50_86BC_5515_41AC_AAAC8FDEBBCA_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8ACA6B50_86BC_5515_41AC_AAAC8FDEBBCA_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ACA6B50_86BC_5515_41AC_AAAC8FDEBBCA_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ACA6B50_86BC_5515_41AC_AAAC8FDEBBCA_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8ACA6B50_86BC_5515_41AC_AAAC8FDEBBCA_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ACA6B50_86BC_5515_41AC_AAAC8FDEBBCA_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8ACA6B50_86BC_5515_41AC_AAAC8FDEBBCA_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8ACA6B50_86BC_5515_41AC_AAAC8FDEBBCA_t.jpg",
 "hfovMin": "135%",
 "id": "panorama_8ACA6B50_86BC_5515_41AC_AAAC8FDEBBCA",
 "class": "Panorama",
 "label": "20220924_200737_234",
 "hfovMax": 130,
 "partial": false,
 "hfov": 360,
 "pitch": 0
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_8854CD28_86BC_4D36_41D3_2B167CC7D2FC_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8854CD28_86BC_4D36_41D3_2B167CC7D2FC_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8854CD28_86BC_4D36_41D3_2B167CC7D2FC_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8854CD28_86BC_4D36_41D3_2B167CC7D2FC_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8854CD28_86BC_4D36_41D3_2B167CC7D2FC_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8854CD28_86BC_4D36_41D3_2B167CC7D2FC_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8854CD28_86BC_4D36_41D3_2B167CC7D2FC_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8854CD28_86BC_4D36_41D3_2B167CC7D2FC_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8854CD28_86BC_4D36_41D3_2B167CC7D2FC_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_8854CD28_86BC_4D36_41D3_2B167CC7D2FC_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8854CD28_86BC_4D36_41D3_2B167CC7D2FC_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8854CD28_86BC_4D36_41D3_2B167CC7D2FC_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8854CD28_86BC_4D36_41D3_2B167CC7D2FC_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8854CD28_86BC_4D36_41D3_2B167CC7D2FC_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8854CD28_86BC_4D36_41D3_2B167CC7D2FC_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8854CD28_86BC_4D36_41D3_2B167CC7D2FC_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8854CD28_86BC_4D36_41D3_2B167CC7D2FC_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8854CD28_86BC_4D36_41D3_2B167CC7D2FC_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8854CD28_86BC_4D36_41D3_2B167CC7D2FC_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8854CD28_86BC_4D36_41D3_2B167CC7D2FC_t.jpg",
 "hfovMin": "135%",
 "id": "panorama_8854CD28_86BC_4D36_41D3_2B167CC7D2FC",
 "class": "Panorama",
 "label": "20220924_200945_267",
 "hfovMax": 130,
 "partial": false,
 "hfov": 360,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_881520A8_86BD_B335_41B7_95FFE4EFE94B_camera",
 "class": "PanoramaCamera"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -163.39,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "popupMaxWidth": "95%",
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "id": "popup_A751F1C3_8733_674C_41DC_98D6EDF2790A",
 "image": {
  "levels": [
   {
    "url": "media/popup_A751F1C3_8733_674C_41DC_98D6EDF2790A_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 771
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 1.84,
 "hideEasing": "cubic_out",
 "hfov": 7.1
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_898A1C72_86BD_F31A_41DE_1384F46F3D74_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_898A1C72_86BD_F31A_41DE_1384F46F3D74_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_898A1C72_86BD_F31A_41DE_1384F46F3D74_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_898A1C72_86BD_F31A_41DE_1384F46F3D74_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_898A1C72_86BD_F31A_41DE_1384F46F3D74_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_898A1C72_86BD_F31A_41DE_1384F46F3D74_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_898A1C72_86BD_F31A_41DE_1384F46F3D74_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_898A1C72_86BD_F31A_41DE_1384F46F3D74_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_898A1C72_86BD_F31A_41DE_1384F46F3D74_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_898A1C72_86BD_F31A_41DE_1384F46F3D74_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_898A1C72_86BD_F31A_41DE_1384F46F3D74_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_898A1C72_86BD_F31A_41DE_1384F46F3D74_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_898A1C72_86BD_F31A_41DE_1384F46F3D74_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_898A1C72_86BD_F31A_41DE_1384F46F3D74_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_898A1C72_86BD_F31A_41DE_1384F46F3D74_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_898A1C72_86BD_F31A_41DE_1384F46F3D74_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_898A1C72_86BD_F31A_41DE_1384F46F3D74_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_898A1C72_86BD_F31A_41DE_1384F46F3D74_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_898A1C72_86BD_F31A_41DE_1384F46F3D74_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_898A1C72_86BD_F31A_41DE_1384F46F3D74_t.jpg",
 "hfovMin": "135%",
 "id": "panorama_898A1C72_86BD_F31A_41DE_1384F46F3D74",
 "class": "Panorama",
 "label": "20220924_201100_590",
 "hfovMax": 130,
 "partial": false,
 "hfov": 360,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 12.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_87910DD3_8859_FDED_41D9_813ED09B027A",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -83.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_98588E41_8859_FEEC_41D3_75122CFAD495",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 90.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_87FFFDA9_8859_FDBD_41CB_9068C9855B67",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_8836E539_86BF_FD17_41C8_DCFB05040C19_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8836E539_86BF_FD17_41C8_DCFB05040C19_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8836E539_86BF_FD17_41C8_DCFB05040C19_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8836E539_86BF_FD17_41C8_DCFB05040C19_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8836E539_86BF_FD17_41C8_DCFB05040C19_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8836E539_86BF_FD17_41C8_DCFB05040C19_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8836E539_86BF_FD17_41C8_DCFB05040C19_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8836E539_86BF_FD17_41C8_DCFB05040C19_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8836E539_86BF_FD17_41C8_DCFB05040C19_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_8836E539_86BF_FD17_41C8_DCFB05040C19_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8836E539_86BF_FD17_41C8_DCFB05040C19_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8836E539_86BF_FD17_41C8_DCFB05040C19_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8836E539_86BF_FD17_41C8_DCFB05040C19_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8836E539_86BF_FD17_41C8_DCFB05040C19_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8836E539_86BF_FD17_41C8_DCFB05040C19_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8836E539_86BF_FD17_41C8_DCFB05040C19_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8836E539_86BF_FD17_41C8_DCFB05040C19_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8836E539_86BF_FD17_41C8_DCFB05040C19_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8836E539_86BF_FD17_41C8_DCFB05040C19_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "20220924_202026_807",
 "hfovMin": "135%",
 "id": "panorama_8836E539_86BF_FD17_41C8_DCFB05040C19",
 "class": "Panorama",
 "overlays": [
  "this.overlay_969C34F7_872D_2D33_41E0_B8F4FF5F2CA8",
  "this.overlay_9568AB11_8753_64CC_41B4_B2BF3B6A78C7",
  "this.overlay_95A932C1_8757_654C_41D5_8FF3C5737F49",
  "this.overlay_980CCEC5_873D_1D54_41D1_20124EA2B2D3",
  "this.popup_9890F8D3_873D_E573_41A8_BD1496038844"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 101.02,
   "yaw": -175.03,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8A3BA068_86BF_D336_41D1_9967BD4EB429"
  },
  {
   "backwardYaw": 172.71,
   "yaw": -0.05,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_89DEAC08_86BC_72F6_41C1_C628DDB6D941"
  },
  {
   "backwardYaw": -72.45,
   "yaw": -79.07,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8A398A34_86BF_D71D_41D4_F394D0B1AF72"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8836E539_86BF_FD17_41C8_DCFB05040C19_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_89F7FE2B_86BC_CF0B_41CA_94C5BD0F49ED_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_89F7FE2B_86BC_CF0B_41CA_94C5BD0F49ED_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_89F7FE2B_86BC_CF0B_41CA_94C5BD0F49ED_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_89F7FE2B_86BC_CF0B_41CA_94C5BD0F49ED_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_89F7FE2B_86BC_CF0B_41CA_94C5BD0F49ED_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_89F7FE2B_86BC_CF0B_41CA_94C5BD0F49ED_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_89F7FE2B_86BC_CF0B_41CA_94C5BD0F49ED_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_89F7FE2B_86BC_CF0B_41CA_94C5BD0F49ED_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_89F7FE2B_86BC_CF0B_41CA_94C5BD0F49ED_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_89F7FE2B_86BC_CF0B_41CA_94C5BD0F49ED_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_89F7FE2B_86BC_CF0B_41CA_94C5BD0F49ED_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_89F7FE2B_86BC_CF0B_41CA_94C5BD0F49ED_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_89F7FE2B_86BC_CF0B_41CA_94C5BD0F49ED_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_89F7FE2B_86BC_CF0B_41CA_94C5BD0F49ED_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_89F7FE2B_86BC_CF0B_41CA_94C5BD0F49ED_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_89F7FE2B_86BC_CF0B_41CA_94C5BD0F49ED_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_89F7FE2B_86BC_CF0B_41CA_94C5BD0F49ED_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_89F7FE2B_86BC_CF0B_41CA_94C5BD0F49ED_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_89F7FE2B_86BC_CF0B_41CA_94C5BD0F49ED_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "20220924_201803_025",
 "hfovMin": "135%",
 "id": "panorama_89F7FE2B_86BC_CF0B_41CA_94C5BD0F49ED",
 "class": "Panorama",
 "overlays": [
  "this.overlay_8901661B_86B4_5F0B_41CB_0CC399D844F4",
  "this.overlay_8940A6C5_86B5_FF7E_41D4_6D72C7E7193B"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -178.57,
   "yaw": 4.08,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8AD00B1E_86BC_F50A_41BF_667B7A7CAE1A"
  },
  {
   "backwardYaw": -12.95,
   "yaw": 177.9,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8ACD92E7_86BC_573B_41D3_ECDC1A71CA9D"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_89F7FE2B_86BC_CF0B_41CA_94C5BD0F49ED_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_8A38172F_86BC_7D0B_41B8_23387D5A3C7B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8A38172F_86BC_7D0B_41B8_23387D5A3C7B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8A38172F_86BC_7D0B_41B8_23387D5A3C7B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8A38172F_86BC_7D0B_41B8_23387D5A3C7B_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8A38172F_86BC_7D0B_41B8_23387D5A3C7B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8A38172F_86BC_7D0B_41B8_23387D5A3C7B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8A38172F_86BC_7D0B_41B8_23387D5A3C7B_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8A38172F_86BC_7D0B_41B8_23387D5A3C7B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8A38172F_86BC_7D0B_41B8_23387D5A3C7B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_8A38172F_86BC_7D0B_41B8_23387D5A3C7B_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8A38172F_86BC_7D0B_41B8_23387D5A3C7B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8A38172F_86BC_7D0B_41B8_23387D5A3C7B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8A38172F_86BC_7D0B_41B8_23387D5A3C7B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8A38172F_86BC_7D0B_41B8_23387D5A3C7B_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8A38172F_86BC_7D0B_41B8_23387D5A3C7B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8A38172F_86BC_7D0B_41B8_23387D5A3C7B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8A38172F_86BC_7D0B_41B8_23387D5A3C7B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8A38172F_86BC_7D0B_41B8_23387D5A3C7B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8A38172F_86BC_7D0B_41B8_23387D5A3C7B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "20220924_201917_380",
 "hfovMin": "135%",
 "id": "panorama_8A38172F_86BC_7D0B_41B8_23387D5A3C7B",
 "class": "Panorama",
 "overlays": [
  "this.overlay_8AA540D9_873D_257F_41B0_D4BA1D778B9E",
  "this.overlay_8ADB45C6_8735_6F55_41AF_7283681BFC99",
  "this.overlay_9E419280_8755_25CD_41A4_30127A7559BA"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 7.25,
   "yaw": 91.52,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8A3BA068_86BF_D336_41D1_9967BD4EB429"
  },
  {
   "backwardYaw": 140.2,
   "yaw": -50.44,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8AD00B1E_86BC_F50A_41BF_667B7A7CAE1A"
  },
  {
   "backwardYaw": 89.06,
   "yaw": 2.34,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8820CE31_86BC_4F17_41D3_B363835DEE5F"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8A38172F_86BC_7D0B_41B8_23387D5A3C7B_t.jpg",
 "hfovMax": 130
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "paddingRight": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "class": "ViewerArea",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowVerticalLength": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "paddingLeft": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "center",
 "maxWidth": 56,
 "id": "IconButton_85F4F301_8848_A66D_41E0_75E3E00206B8",
 "backgroundOpacity": 0,
 "maxHeight": 56,
 "right": "4.08%",
 "width": 56,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "bottom": "6.47%",
 "height": 56,
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_85F4F301_8848_A66D_41E0_75E3E00206B8.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton14318"
 },
 "cursor": "hand"
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "backgroundOpacity": 0.55,
 "right": 0,
 "borderRadius": 0,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 0,
 "top": 0,
 "paddingRight": 0,
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 0,
 "borderSize": 0,
 "class": "UIComponent",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "data": {
  "name": "UIComponent5110"
 },
 "shadow": false,
 "visible": false
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundOpacity": 1,
 "right": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [],
 "propagateClick": false,
 "minHeight": 0,
 "top": 0,
 "paddingRight": 0,
 "bottom": 0,
 "backgroundColor": [],
 "minWidth": 0,
 "borderSize": 0,
 "class": "ZoomImage",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "scaleMode": "custom",
 "data": {
  "name": "ZoomImage5111"
 },
 "shadow": false,
 "visible": false
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "horizontalAlign": "center",
 "id": "closeButtonPopupPanorama",
 "backgroundOpacity": 0.3,
 "shadowColor": "#000000",
 "right": 10,
 "iconHeight": 20,
 "borderRadius": 0,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "iconColor": "#000000",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "top": 10,
 "verticalAlign": "middle",
 "rollOverIconColor": "#666666",
 "paddingRight": 5,
 "pressedIconColor": "#888888",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderColor": "#000000",
 "minWidth": 0,
 "mode": "push",
 "fontSize": "1.29vmin",
 "class": "CloseButton",
 "paddingTop": 5,
 "backgroundColorDirection": "vertical",
 "paddingLeft": 5,
 "paddingBottom": 5,
 "label": "",
 "fontStyle": "normal",
 "borderSize": 0,
 "iconLineWidth": 5,
 "gap": 5,
 "layout": "horizontal",
 "data": {
  "name": "CloseButton5112"
 },
 "shadow": false,
 "iconWidth": 20,
 "visible": false,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8820CE31_86BC_4F17_41D3_B363835DEE5F_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 89.06,
   "hfov": 20.19,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.36
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8A38172F_86BC_7D0B_41B8_23387D5A3C7B, this.camera_980CEBE2_8859_E5AF_41A4_E41AA6FE0B79); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_90E26CEE_875D_7D55_41DA_8940E39E6CD4",
   "pitch": -16.36,
   "yaw": 89.06,
   "hfov": 20.19,
   "distance": 100
  }
 ],
 "id": "overlay_889849F2_8733_274C_41C5_20DE8F8CD49B",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8820CE31_86BC_4F17_41D3_B363835DEE5F_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -5.84,
   "hfov": 20.14,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.77
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_90E4BCEE_875D_7D55_41D0_EFB9BAD6AA0A",
   "pitch": -16.77,
   "yaw": -5.84,
   "hfov": 20.14,
   "distance": 100
  }
 ],
 "id": "overlay_960BDF4A_8732_FB5C_41A2_9838407CF0FA",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8820CE31_86BC_4F17_41D3_B363835DEE5F_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -93.39,
   "hfov": 20.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.32
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8AD0E5EF_86BC_DD0A_41B1_98F1D0BC35D0, this.camera_983FBC11_8859_E26D_41CD_FB13FDAAAE64); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_90E32CF6_875D_7D35_41DD_E8C49EE1E913",
   "pitch": -14.32,
   "yaw": -93.39,
   "hfov": 20.39,
   "distance": 100
  }
 ],
 "id": "overlay_967BDC18_872D_3CFC_41BB_B49C1DECA5EF",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8A3BA068_86BF_D336_41D1_9967BD4EB429_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 7.25,
   "hfov": 19.91,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.82
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8A38172F_86BC_7D0B_41B8_23387D5A3C7B, this.camera_87B0AE05_8859_FE75_41CE_47AC2AC5EF31); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A7EFEEA4_8733_3DD5_41DC_8526818FB2A0",
   "pitch": -18.82,
   "yaw": 7.25,
   "hfov": 19.91,
   "distance": 100
  }
 ],
 "id": "overlay_9D8002B6_873D_2535_41DB_834F9CF5509F",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8A3BA068_86BF_D336_41D1_9967BD4EB429_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -75.39,
   "hfov": 19.44,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.5
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8AD32B36_86BC_551D_41A0_F27558AA8279, this.camera_87A42E23_8859_FEAC_41C6_745245F3D28C); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A7EFBEA4_8733_3DD5_41DA_236FA66BC9D0",
   "pitch": -22.5,
   "yaw": -75.39,
   "hfov": 19.44,
   "distance": 100
  }
 ],
 "id": "overlay_9B52EF3D_8733_7B34_41DD_42A0D0F070A4",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8A3BA068_86BF_D336_41D1_9967BD4EB429_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 101.02,
   "hfov": 19.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.11
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8836E539_86BF_FD17_41C8_DCFB05040C19, this.camera_87BE9E0F_8859_FE75_41D7_A8FBBDC3FBB8); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A7E83EA4_8733_3DD5_417F_F786B1263462",
   "pitch": -21.11,
   "yaw": 101.02,
   "hfov": 19.63,
   "distance": 100
  }
 ],
 "id": "overlay_9CA0A3B7_8735_2B34_41CD_B075572D9939",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8A3BA068_86BF_D336_41D1_9967BD4EB429_0_HS_3_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -155.08,
   "hfov": 14.5,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.48
  }
 ],
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_A7CFCA49_8733_655F_41DE_E69C3D3FFF36, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_A3E5AF51_872D_3B4C_41C6_E0BF6E185999, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -155.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8A3BA068_86BF_D336_41D1_9967BD4EB429_0_HS_3_0.png",
      "width": 246,
      "class": "ImageResourceLevel",
      "height": 207
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.48,
   "hfov": 14.5
  }
 ],
 "id": "overlay_A7FC2C6B_8733_1D53_41CF_0BE794FAC086",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8864772A_86BD_DD0A_41D2_8F54F789CB75_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -176.32,
   "hfov": 12.27,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.64
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8AD4712E_86BC_B50D_41D4_2A5B6C64B294, this.camera_87BE4B4F_8859_E6F5_41D0_1FB08C205F64); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -176.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8864772A_86BD_DD0A_41D2_8F54F789CB75_0_HS_0_0.png",
      "width": 207,
      "class": "ImageResourceLevel",
      "height": 207
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.64,
   "hfov": 12.27
  }
 ],
 "id": "overlay_9FF152F7_8753_6534_41DF_9E327FCFE352",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8AD00B1E_86BC_F50A_41BF_667B7A7CAE1A_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 140.2,
   "hfov": 19.14,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.55
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8A38172F_86BC_7D0B_41B8_23387D5A3C7B, this.camera_98760B8E_8859_E674_41CF_C0D9604A6318); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_90E78CEE_875D_7D55_41DB_B9EDDA2A70A9",
   "pitch": -24.55,
   "yaw": 140.2,
   "hfov": 19.14,
   "distance": 100
  }
 ],
 "id": "overlay_95EDA5F5_86B4_7D1F_41E0_B4706FDE1441",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8AD00B1E_86BC_F50A_41BF_667B7A7CAE1A_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -178.57,
   "hfov": 20.56,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.29
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_89F7FE2B_86BC_CF0B_41CA_94C5BD0F49ED, this.camera_9861DB9E_8859_E597_41D7_326067ABB202); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AD4565D5_88ED_2F77_41A1_F7A7A27C8938",
   "pitch": -12.29,
   "yaw": -178.57,
   "hfov": 20.56,
   "distance": 100
  }
 ],
 "id": "overlay_A89C822D_88F3_24D4_41AD_E7B3323828E5",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8AC4D61C_86BC_DF0D_41C6_909D43608752_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -15.02,
   "hfov": 20.18,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.66
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_884B522F_86BC_F70B_41BE_AB0F60060908, this.camera_98588E41_8859_FEEC_41D3_75122CFAD495); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_9A0E39E3_873D_6753_41E0_D011CCFA013C",
   "pitch": -16.66,
   "yaw": -15.02,
   "hfov": 20.18,
   "distance": 100
  }
 ],
 "id": "overlay_9390839E_8777_2BF4_41BB_A8C916788182",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8AC4D61C_86BC_DF0D_41C6_909D43608752_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -108.84,
   "hfov": 20.48,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.57
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_9A0E89E3_873D_6753_41D5_F4DA6C11B590",
   "pitch": -13.57,
   "yaw": -108.84,
   "hfov": 20.48,
   "distance": 100
  }
 ],
 "id": "overlay_92E2905C_8775_2574_41CD_CFC2E0C50C12",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8AC4D61C_86BC_DF0D_41C6_909D43608752_0_HS_2_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 137.18,
   "hfov": 11.64,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.55
  }
 ],
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_98BF41ED_8735_2754_41C9_9FB0DFAF4363, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_A3F01F41_872D_3B4F_41B9_13BA0BB19A76, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 137.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8AC4D61C_86BC_DF0D_41C6_909D43608752_0_HS_2_0.png",
      "width": 197,
      "class": "ImageResourceLevel",
      "height": 165
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.55,
   "hfov": 11.64
  }
 ],
 "id": "overlay_9860554A_8735_EF5D_41DC_EB366991BD01",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8AC4D61C_86BC_DF0D_41C6_909D43608752_0_HS_3_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -137.14,
   "hfov": 14.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 8.77
  }
 ],
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_9804CAC2_8735_254C_41DF_FD69CB9297FB, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_A3F31F41_872D_3B4F_41D0_866C4C27748A, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -137.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8AC4D61C_86BC_DF0D_41C6_909D43608752_0_HS_3_0.png",
      "width": 246,
      "class": "ImageResourceLevel",
      "height": 207
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.77,
   "hfov": 14.41
  }
 ],
 "id": "overlay_989BF54F_8735_6F54_41DB_AD9F8F1FD419",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_89DEAC08_86BC_72F6_41C1_C628DDB6D941_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -6.18,
   "hfov": 16.93,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.03
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A1CE0D85_8935_7FD4_41D6_A912EC9948D3",
   "pitch": -11.03,
   "yaw": -6.18,
   "hfov": 16.93,
   "distance": 100
  }
 ],
 "id": "overlay_9D191D6A_8735_3F5C_41D5_E02C7BE0C629",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_89DEAC08_86BC_72F6_41C1_C628DDB6D941_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -89.29,
   "hfov": 16.96,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.93
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8AD4712E_86BC_B50D_41D4_2A5B6C64B294, this.camera_981DDBB3_8859_E5AD_4161_99E1034BABB0); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_9A09B9E3_873D_6753_41D1_FC6C78735030",
   "pitch": -24.93,
   "yaw": -89.29,
   "hfov": 16.96,
   "distance": 100
  }
 ],
 "id": "overlay_9D5450B4_8733_E534_41D3_3A334F69D74B",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_89DEAC08_86BC_72F6_41C1_C628DDB6D941_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 172.71,
   "hfov": 13.8,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.12
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8836E539_86BF_FD17_41C8_DCFB05040C19, this.camera_9812DB9E_8859_E597_41E0_E512C41332FF); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A4091F32_872D_3CCC_41D8_5ABF9F05F127",
   "pitch": -30.12,
   "yaw": 172.71,
   "hfov": 13.8,
   "distance": 100
  }
 ],
 "id": "overlay_999D1075_8753_2537_41E0_1A2D3A3DA884",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_89DEAC08_86BC_72F6_41C1_C628DDB6D941_0_HS_3_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 76.43,
   "hfov": 14.57,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.45
  }
 ],
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_98544939_873F_273C_41DB_0407BA8BEE71, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_A3EE6F41_872D_3B4F_41D0_91A716500752, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 76.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_89DEAC08_86BC_72F6_41C1_C628DDB6D941_0_HS_3_0.png",
      "width": 246,
      "class": "ImageResourceLevel",
      "height": 207
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.45,
   "hfov": 14.57
  }
 ],
 "id": "overlay_A7793960_873F_E74C_41C5_6E2080E6F218",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8AD32B36_86BC_551D_41A0_F27558AA8279_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -88.48,
   "hfov": 19.38,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.91
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8A3BA068_86BF_D336_41D1_9967BD4EB429, this.camera_9846DE55_8859_FE94_41DE_B7F59BC7D8CB); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_9A7368B2_87F7_25CC_41C5_DD36BD8CCD38",
   "pitch": -22.91,
   "yaw": -88.48,
   "hfov": 19.38,
   "distance": 100
  }
 ],
 "id": "overlay_99B8FF05_87F5_3CD4_41B8_7C94B7C50BE8",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8AD32B36_86BC_551D_41A0_F27558AA8279_0_HS_1_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -18.89,
   "hfov": 14.56,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.86
  }
 ],
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_98663F2D_8733_1CD4_41BF_0453E520DB57, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_A3E88F41_872D_3B4F_41C3_806E2B1B4FE0, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -18.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8AD32B36_86BC_551D_41A0_F27558AA8279_0_HS_1_0.png",
      "width": 246,
      "class": "ImageResourceLevel",
      "height": 207
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.86,
   "hfov": 14.56
  }
 ],
 "id": "overlay_980426A1_8733_6DCF_41C2_FCA596FAAB5C",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8AD32B36_86BC_551D_41A0_F27558AA8279_0_HS_2_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -163.39,
   "hfov": 7.1,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.84
  }
 ],
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_A751F1C3_8733_674C_41DC_98D6EDF2790A, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_A3EA7F51_872D_3B4C_41DF_373D27AF8056, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -163.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8AD32B36_86BC_551D_41A0_F27558AA8279_0_HS_2_0.png",
      "width": 120,
      "class": "ImageResourceLevel",
      "height": 101
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.84,
   "hfov": 7.1
  }
 ],
 "id": "overlay_98154E66_8733_3D55_41DE_B9635B62E857",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8ACD92E7_86BC_573B_41D3_ECDC1A71CA9D_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -12.95,
   "hfov": 9.74,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.59
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_89F7FE2B_86BC_CF0B_41CA_94C5BD0F49ED, this.camera_98FA5C9B_8859_E39D_41D7_0467DBD35441); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_90E69CEE_875D_7D55_41D8_A764AB512CF1",
   "pitch": -11.59,
   "yaw": -12.95,
   "hfov": 9.74,
   "distance": 100
  }
 ],
 "id": "overlay_90C39ADC_86BC_D70E_41C6_9DA95DFC9810",
 "data": {
  "label": "Arrow 05b Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8ACD92E7_86BC_573B_41D3_ECDC1A71CA9D_0_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -2.97,
   "hfov": 11.32,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 9.22
  }
 ],
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_9F4C096D_8753_2754_41D2_0F82281B76AC, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_9AE21A12_873D_64CD_41DB_F0F43B87397A, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -2.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8ACD92E7_86BC_573B_41D3_ECDC1A71CA9D_0_HS_1_0.png",
      "width": 193,
      "class": "ImageResourceLevel",
      "height": 180
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.22,
   "hfov": 11.32
  }
 ],
 "id": "overlay_90A2A914_8753_E4F4_41D4_600237C1FEFD",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8AD4712E_86BC_B50D_41D4_2A5B6C64B294_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 89.88,
   "hfov": 20.01,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8AD0E5EF_86BC_DD0A_41B1_98F1D0BC35D0, this.camera_87E08DB5_8859_FD95_41BF_F632AD795F61); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_90D80CE4_875D_7D54_41D2_F2DF56CE7CB7",
   "pitch": -18,
   "yaw": 89.88,
   "hfov": 20.01,
   "distance": 100
  }
 ],
 "id": "overlay_92766F9E_86DC_4D0A_41C2_19124A4431A7",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8AD4712E_86BC_B50D_41D4_2A5B6C64B294_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -84.8,
   "hfov": 20.56,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.27
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_89DEAC08_86BC_72F6_41C1_C628DDB6D941, this.camera_87FFFDA9_8859_FDBD_41CB_9068C9855B67); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_90D88CE4_875D_7D54_41B0_4329D87F0A09",
   "pitch": -12.27,
   "yaw": -84.8,
   "hfov": 20.56,
   "distance": 100
  }
 ],
 "id": "overlay_957CF54A_86DD_DD75_41CF_6047FA930111",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8AD4712E_86BC_B50D_41D4_2A5B6C64B294_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -177.25,
   "hfov": 20.59,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.86
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8864772A_86BD_DD0A_41D2_8F54F789CB75, this.camera_997EDD64_8859_E2AB_41D7_140C57CBAF54); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_9A08B9E3_873D_6753_41D9_FBB4BC8FB3AC",
   "pitch": -11.86,
   "yaw": -177.25,
   "hfov": 20.59,
   "distance": 100
  }
 ],
 "id": "overlay_9EFFF5AA_8753_6FDD_41B5_95363B29C764",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8AD0E5EF_86BC_DD0A_41B1_98F1D0BC35D0_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -97.48,
   "hfov": 19.49,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.09
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_88036993_86BB_D51A_41BE_3881D96313A7, this.camera_98E5CCBA_8859_E39C_41C5_26D98D2ACB66); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_90E75CE4_875D_7D54_41D1_BF40E769CC5E",
   "pitch": -22.09,
   "yaw": -97.48,
   "hfov": 19.49,
   "distance": 100
  }
 ],
 "id": "overlay_95FED02A_86D5_D335_41D2_D1A84AD6E834",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8AD0E5EF_86BC_DD0A_41B1_98F1D0BC35D0_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -5.84,
   "hfov": 20.14,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.77
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8AD4712E_86BC_B50D_41D4_2A5B6C64B294, this.camera_9894DCE0_8859_E3AB_41D4_E4AF10F133F1); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_90E72CE4_875D_7D54_41D8_2DC1B6D9109E",
   "pitch": -16.77,
   "yaw": -5.84,
   "hfov": 20.14,
   "distance": 100
  }
 ],
 "id": "overlay_949E700A_86DC_D2F5_41CE_B4FB3C0523C6",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8AD0E5EF_86BC_DD0A_41B1_98F1D0BC35D0_0_HS_2_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 100.3,
   "hfov": 4.12,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.04
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 100.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8AD0E5EF_86BC_DD0A_41B1_98F1D0BC35D0_0_HS_2_0.png",
      "width": 69,
      "class": "ImageResourceLevel",
      "height": 64
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.04,
   "hfov": 4.12
  }
 ],
 "id": "overlay_9925B3DA_872F_2B7D_41DD_E1A5ACFAAF85",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8AD0E5EF_86BC_DD0A_41B1_98F1D0BC35D0_0_HS_3_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 93.44,
   "hfov": 3.91,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.4
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 93.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8AD0E5EF_86BC_DD0A_41B1_98F1D0BC35D0_0_HS_3_0.png",
      "width": 66,
      "class": "ImageResourceLevel",
      "height": 51
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.4,
   "hfov": 3.91
  }
 ],
 "id": "overlay_999A94EF_872F_ED53_41A0_DEA748214527",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8AD0E5EF_86BC_DD0A_41B1_98F1D0BC35D0_0_HS_4_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 84.16,
   "hfov": 19.66,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.86
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8820CE31_86BC_4F17_41D3_B363835DEE5F, this.camera_9887ECFF_8859_E394_41DC_D2F464B80274); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_87C94AE4_8859_E7B4_41D9_803BAA03F6EC",
   "pitch": -20.86,
   "yaw": 84.16,
   "hfov": 19.66,
   "distance": 100
  }
 ],
 "id": "overlay_AC185CF1_8955_3D4C_4180_DB7331AC64FB",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_898B1D12_86B4_4D15_41D4_DB00897CF0EF_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -175.83,
   "hfov": 20.13,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.16
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_9A0C49E3_873D_6753_41CC_464D180AAE9D",
   "pitch": -17.16,
   "yaw": -175.83,
   "hfov": 20.13,
   "distance": 100
  }
 ],
 "id": "overlay_90546473_876E_ED4C_41C4_D18EBD41242F",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_898B1D12_86B4_4D15_41D4_DB00897CF0EF_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -6.47,
   "hfov": 20.36,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.85
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_9A0CF9E3_873D_6753_4180_C1CED6449F6C",
   "pitch": -14.85,
   "yaw": -6.47,
   "hfov": 20.36,
   "distance": 100
  }
 ],
 "id": "overlay_905E0469_876D_2D5C_41D1_77903D4B2340",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_898B1D12_86B4_4D15_41D4_DB00897CF0EF_0_HS_2_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -98.25,
   "hfov": 14.53,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.91
  }
 ],
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_9845FD4F_8735_3F54_41D5_750F8197E58F, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_A3F5BF41_872D_3B4F_41D8_139E6AA8B555, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -98.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_898B1D12_86B4_4D15_41D4_DB00897CF0EF_0_HS_2_0.png",
      "width": 246,
      "class": "ImageResourceLevel",
      "height": 207
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.91,
   "hfov": 14.53
  }
 ],
 "id": "overlay_98037F63_8735_1B4C_41D0_EFA77AB9C424",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_884B522F_86BC_F70B_41BE_AB0F60060908_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 96.43,
   "hfov": 20.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.59
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8AC4D61C_86BC_DF0D_41C6_909D43608752, this.camera_87E88DC7_8859_FDF5_41D4_F4EE80AD91CE); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_9A0FF9E3_873D_6753_41D8_90F20DA5103C",
   "pitch": -17.59,
   "yaw": 96.43,
   "hfov": 20.06,
   "distance": 100
  }
 ],
 "id": "overlay_9173EEE1_8773_3D4C_41DF_37AF650AC21C",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_884B522F_86BC_F70B_41BE_AB0F60060908_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -89.3,
   "hfov": 20.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.32
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8AD1836F_86BC_750A_41C7_51718FF3FE08, this.camera_87910DD3_8859_FDED_41D9_813ED09B027A); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_9A0FB9E3_873D_6753_41A2_B40B59B49EBD",
   "pitch": -14.32,
   "yaw": -89.3,
   "hfov": 20.39,
   "distance": 100
  }
 ],
 "id": "overlay_9134A8C0_876D_254C_41BB_63E04F82F1C0",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_884B522F_86BC_F70B_41BE_AB0F60060908_0_HS_2_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -6.21,
   "hfov": 14.47,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.95
  }
 ],
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_98BFDF11_8736_FCCC_41DD_F4D1CF9C9C99, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_A3F68F41_872D_3B4F_41C9_40E490D9E6AA, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -6.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_884B522F_86BC_F70B_41BE_AB0F60060908_0_HS_2_0.png",
      "width": 246,
      "class": "ImageResourceLevel",
      "height": 207
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.95,
   "hfov": 14.47
  }
 ],
 "id": "overlay_981CEA36_8737_2534_41DF_819107AFB10B",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_88036993_86BB_D51A_41BE_3881D96313A7_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 79.66,
   "hfov": 19.49,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.09
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8AD1836F_86BC_750A_41C7_51718FF3FE08, this.camera_87851DF1_8859_FDAD_41C6_AEB206C38EF7); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_90DA5CE4_875D_7D54_41C1_93F9100DF30C",
   "pitch": -22.09,
   "yaw": 79.66,
   "hfov": 19.49,
   "distance": 100
  }
 ],
 "id": "overlay_90C46A47_86B4_777A_41B1_470323A835E2",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_88036993_86BB_D51A_41BE_3881D96313A7_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -101.16,
   "hfov": 18.88,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -26.18
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8AD0E5EF_86BC_DD0A_41B1_98F1D0BC35D0, this.camera_879FDDE7_8859_FDB5_4184_052AD0F454EE); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_90D9FCE4_875D_7D54_41A4_6F55B0C5FBE4",
   "pitch": -26.18,
   "yaw": -101.16,
   "hfov": 18.88,
   "distance": 100
  }
 ],
 "id": "overlay_91D99D0A_8754_B2F5_41D1_951107F69733",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8A398A34_86BF_D71D_41D4_F394D0B1AF72_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 99.3,
   "hfov": 20.48,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.2
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_90E33CEE_875D_7D55_41BE_B75CF7FAE168",
   "pitch": -13.2,
   "yaw": 99.3,
   "hfov": 20.48,
   "distance": 100
  }
 ],
 "id": "overlay_9678C4D6_872F_2D75_41CE_1FCF04374CBE",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8A398A34_86BF_D71D_41D4_F394D0B1AF72_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -72.45,
   "hfov": 15.73,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.2
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8836E539_86BF_FD17_41C8_DCFB05040C19, this.camera_98295C27_8859_E2B5_41C1_2A0A1BE58A2A); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_90E3ECEE_875D_7D55_41E0_6EF0F809692F",
   "pitch": -16.2,
   "yaw": -72.45,
   "hfov": 15.73,
   "distance": 100
  }
 ],
 "id": "overlay_97B4FEA5_872F_FDD4_41D6_43C9A069FC3D",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8A398A34_86BF_D71D_41D4_F394D0B1AF72_0_HS_2_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 4.12,
   "hfov": 11.68,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.68
  }
 ],
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_9841E3AB_8735_6BDC_41D2_8CE0CBAAFF29, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_A3E7CF51_872D_3B4C_4198_292824ACA5F4, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 4.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8A398A34_86BF_D71D_41D4_F394D0B1AF72_0_HS_2_0.png",
      "width": 197,
      "class": "ImageResourceLevel",
      "height": 174
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.68,
   "hfov": 11.68
  }
 ],
 "id": "overlay_988B016A_8735_275D_41B0_326EE3EC9692",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8AD1E7F5_86BC_5D1F_41DC_EBF48F97DFC1_0_HS_0_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 104.39,
   "hfov": 7.07,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 5.89
  }
 ],
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_98C663D8_873D_2B7C_41E0_D0692A48CA27, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_A3EC6F41_872D_3B4F_41D1_E9B3F2202E10, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 104.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8AD1E7F5_86BC_5D1F_41DC_EBF48F97DFC1_0_HS_0_0.png",
      "width": 120,
      "class": "ImageResourceLevel",
      "height": 101
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.89,
   "hfov": 7.07
  }
 ],
 "id": "overlay_A7FD3910_873D_64CC_41DC_4D59F0625E78",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8AD1E7F5_86BC_5D1F_41DC_EBF48F97DFC1_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 5.1,
   "hfov": 20.51,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.9
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_881520A8_86BD_B335_41B7_95FFE4EFE94B, this.camera_98D85C56_8859_E297_41E0_D4A9DEA7CF67); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A1CF1D85_8935_7FD4_41D9_D859D6F5D5EA",
   "pitch": -12.9,
   "yaw": 5.1,
   "hfov": 20.51,
   "distance": 100
  }
 ],
 "id": "overlay_A9D6D15B_88D5_2773_41DC_B120D47AE8C0",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8AD1E7F5_86BC_5D1F_41DC_EBF48F97DFC1_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -174.16,
   "hfov": 18.98,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.37
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_881520A8_86BD_B335_41B7_95FFE4EFE94B, this.camera_98C8BC7C_8859_E29B_419F_35331CD9167B); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A1CFAD85_8935_7FD4_41D2_C1DF2FFA0155",
   "pitch": -23.37,
   "yaw": -174.16,
   "hfov": 18.98,
   "distance": 100
  }
 ],
 "id": "overlay_AA6C9C28_88D3_1CDC_41AC_3C7058C54F50",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8AD1836F_86BC_750A_41C7_51718FF3FE08_1_HS_0_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -107.25,
   "hfov": 19.77,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.03
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_88036993_86BB_D51A_41BE_3881D96313A7, this.camera_87812B2D_8859_E6B5_41D4_B3E32472E050); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_90E38CF6_875D_7D35_41AE_C931C34EE8C6",
   "pitch": -20.03,
   "yaw": -107.25,
   "hfov": 19.77,
   "distance": 50
  }
 ],
 "id": "overlay_92AB9F1A_8755_3CFD_41C7_1404F3132C5A",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8AD1836F_86BC_750A_41C7_51718FF3FE08_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -167.03,
   "hfov": 19.96,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.41
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_884B522F_86BC_F70B_41BE_AB0F60060908, this.camera_87B2FB3C_8859_E694_41C1_F317E10EECE8); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_9898641B_87EE_ECF3_41D9_023BE7124672",
   "pitch": -18.41,
   "yaw": -167.03,
   "hfov": 19.96,
   "distance": 100
  }
 ],
 "id": "overlay_98B268F1_87ED_E54F_41C7_F6227A3C1932",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_881520A8_86BD_B335_41B7_95FFE4EFE94B_0_HS_0_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 114.32,
   "hfov": 7.11,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.47
  }
 ],
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_98E8FAEB_873D_2553_4161_2BD881736DF9, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_A3F2BF41_872D_3B4F_41C7_8C3F6E2280DA, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 114.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_881520A8_86BD_B335_41B7_95FFE4EFE94B_0_HS_0_0.png",
      "width": 120,
      "class": "ImageResourceLevel",
      "height": 101
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.47,
   "hfov": 7.11
  }
 ],
 "id": "overlay_982A02E8_8732_E55D_41D9_C97C9CE44528",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_881520A8_86BD_B335_41B7_95FFE4EFE94B_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -7.07,
   "hfov": 20.01,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A1C86D85_8935_7FD4_41D0_6135EDEE16B9",
   "pitch": -18,
   "yaw": -7.07,
   "hfov": 20.01,
   "distance": 100
  }
 ],
 "id": "overlay_AA55BA05_892D_24D7_41D0_317621F6F7CF",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_881520A8_86BD_B335_41B7_95FFE4EFE94B_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 173.34,
   "hfov": 16.52,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.12
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8AD1E7F5_86BC_5D1F_41DC_EBF48F97DFC1, this.camera_98524E37_8859_FE94_41DD_4C50DA16D9D2); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A1C8FD85_8935_7FD4_41E0_BAA1DDD7A790",
   "pitch": -19.12,
   "yaw": 173.34,
   "hfov": 16.52,
   "distance": 100
  }
 ],
 "id": "overlay_AC443EF6_892F_FD35_41D0_31DE6852D4F6",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8836E539_86BF_FD17_41C8_DCFB05040C19_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -79.07,
   "hfov": 19.91,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.82
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8A398A34_86BF_D71D_41D4_F394D0B1AF72, this.camera_98470B7F_8859_E695_41D1_1A04E6E61E64); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_90E46CEE_875D_7D55_41D5_5E62377C6415",
   "pitch": -18.82,
   "yaw": -79.07,
   "hfov": 19.91,
   "distance": 100
  }
 ],
 "id": "overlay_969C34F7_872D_2D33_41E0_B8F4FF5F2CA8",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8836E539_86BF_FD17_41C8_DCFB05040C19_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -0.05,
   "hfov": 20.43,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.81
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_89DEAC08_86BC_72F6_41C1_C628DDB6D941, this.camera_98546B6E_8859_E6B4_41D9_A6E12EC27277); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_90E4DCEE_875D_7D55_41D4_4A08404BB5AF",
   "pitch": -13.81,
   "yaw": -0.05,
   "hfov": 20.43,
   "distance": 100
  }
 ],
 "id": "overlay_9568AB11_8753_64CC_41B4_B2BF3B6A78C7",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8836E539_86BF_FD17_41C8_DCFB05040C19_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -175.03,
   "hfov": 20.35,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.73
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8A3BA068_86BF_D336_41D1_9967BD4EB429, this.camera_87AB4B5F_8859_E695_41DB_7C2B6950D781); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_90E34CEE_875D_7D55_41D8_02072859C2D2",
   "pitch": -14.73,
   "yaw": -175.03,
   "hfov": 20.35,
   "distance": 100
  }
 ],
 "id": "overlay_95A932C1_8757_654C_41D5_8FF3C5737F49",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8836E539_86BF_FD17_41C8_DCFB05040C19_0_HS_3_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 103.07,
   "hfov": 7.1,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.91
  }
 ],
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_9890F8D3_873D_E573_41A8_BD1496038844, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_A3E45F51_872D_3B4C_41DA_33C9B597579E, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 103.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8836E539_86BF_FD17_41C8_DCFB05040C19_0_HS_3_0.png",
      "width": 120,
      "class": "ImageResourceLevel",
      "height": 101
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.91,
   "hfov": 7.1
  }
 ],
 "id": "overlay_980CCEC5_873D_1D54_41D1_20124EA2B2D3",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_89F7FE2B_86BC_CF0B_41CA_94C5BD0F49ED_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 4.08,
   "hfov": 13.64,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.58
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8AD00B1E_86BC_F50A_41BF_667B7A7CAE1A, this.camera_98B6AD0F_8859_E275_41C2_40BE679A42A3); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_90E66CEE_875D_7D55_41B2_69A382C75E8D",
   "pitch": -21.58,
   "yaw": 4.08,
   "hfov": 13.64,
   "distance": 100
  }
 ],
 "id": "overlay_8901661B_86B4_5F0B_41CB_0CC399D844F4",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_89F7FE2B_86BC_CF0B_41CA_94C5BD0F49ED_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 177.9,
   "hfov": 14.34,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.26
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8ACD92E7_86BC_573B_41D3_ECDC1A71CA9D, this.camera_98A3FD1F_8859_E295_41D8_BC7764AF0235); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_90E6DCEE_875D_7D55_41DD_2049398A610D",
   "pitch": -22.26,
   "yaw": 177.9,
   "hfov": 14.34,
   "distance": 100
  }
 ],
 "id": "overlay_8940A6C5_86B5_FF7E_41D4_6D72C7E7193B",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8A38172F_86BC_7D0B_41B8_23387D5A3C7B_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 2.34,
   "hfov": 20.27,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.55
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8820CE31_86BC_4F17_41D3_B363835DEE5F, this.camera_994F7D54_8859_E2EB_41D8_088919FE9452); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_90E50CEE_875D_7D55_41D8_6B3B99AE4C5E",
   "pitch": -15.55,
   "yaw": 2.34,
   "hfov": 20.27,
   "distance": 100
  }
 ],
 "id": "overlay_8AA540D9_873D_257F_41B0_D4BA1D778B9E",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8A38172F_86BC_7D0B_41B8_23387D5A3C7B_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 91.52,
   "hfov": 20.46,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.5
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8A3BA068_86BF_D336_41D1_9967BD4EB429, this.camera_9952AD2E_8859_E2B7_41D0_BA184298C561); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_90E5FCEE_875D_7D55_41C8_EFF2C79254FE",
   "pitch": -13.5,
   "yaw": 91.52,
   "hfov": 20.46,
   "distance": 100
  }
 ],
 "id": "overlay_8ADB45C6_8735_6F55_41AF_7283681BFC99",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8A38172F_86BC_7D0B_41B8_23387D5A3C7B_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -50.44,
   "hfov": 19.82,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.64
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8AD00B1E_86BC_F50A_41BF_667B7A7CAE1A, this.camera_995C4D44_8859_E2F4_41CB_CA3BF91AAF63); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_9AF509F3_873D_674C_41DC_024042AB4F5B",
   "pitch": -19.64,
   "yaw": -50.44,
   "hfov": 19.82,
   "distance": 100
  }
 ],
 "id": "overlay_9E419280_8755_25CD_41A4_30127A7559BA",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8820CE31_86BC_4F17_41D3_B363835DEE5F_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_90E26CEE_875D_7D55_41DA_8940E39E6CD4",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8820CE31_86BC_4F17_41D3_B363835DEE5F_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_90E4BCEE_875D_7D55_41D0_EFB9BAD6AA0A",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8820CE31_86BC_4F17_41D3_B363835DEE5F_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_90E32CF6_875D_7D35_41DD_E8C49EE1E913",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8A3BA068_86BF_D336_41D1_9967BD4EB429_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_A7EFEEA4_8733_3DD5_41DC_8526818FB2A0",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8A3BA068_86BF_D336_41D1_9967BD4EB429_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_A7EFBEA4_8733_3DD5_41DA_236FA66BC9D0",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8A3BA068_86BF_D336_41D1_9967BD4EB429_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_A7E83EA4_8733_3DD5_417F_F786B1263462",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8AD00B1E_86BC_F50A_41BF_667B7A7CAE1A_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_90E78CEE_875D_7D55_41DB_B9EDDA2A70A9",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8AD00B1E_86BC_F50A_41BF_667B7A7CAE1A_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_AD4565D5_88ED_2F77_41A1_F7A7A27C8938",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8AC4D61C_86BC_DF0D_41C6_909D43608752_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_9A0E39E3_873D_6753_41E0_D011CCFA013C",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8AC4D61C_86BC_DF0D_41C6_909D43608752_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_9A0E89E3_873D_6753_41D5_F4DA6C11B590",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_89DEAC08_86BC_72F6_41C1_C628DDB6D941_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_A1CE0D85_8935_7FD4_41D6_A912EC9948D3",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_89DEAC08_86BC_72F6_41C1_C628DDB6D941_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_9A09B9E3_873D_6753_41D1_FC6C78735030",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_89DEAC08_86BC_72F6_41C1_C628DDB6D941_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_A4091F32_872D_3CCC_41D8_5ABF9F05F127",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8AD32B36_86BC_551D_41A0_F27558AA8279_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_9A7368B2_87F7_25CC_41C5_DD36BD8CCD38",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8ACD92E7_86BC_573B_41D3_ECDC1A71CA9D_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_90E69CEE_875D_7D55_41D8_A764AB512CF1",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8AD4712E_86BC_B50D_41D4_2A5B6C64B294_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_90D80CE4_875D_7D54_41D2_F2DF56CE7CB7",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8AD4712E_86BC_B50D_41D4_2A5B6C64B294_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_90D88CE4_875D_7D54_41B0_4329D87F0A09",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8AD4712E_86BC_B50D_41D4_2A5B6C64B294_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_9A08B9E3_873D_6753_41D9_FBB4BC8FB3AC",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8AD0E5EF_86BC_DD0A_41B1_98F1D0BC35D0_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_90E75CE4_875D_7D54_41D1_BF40E769CC5E",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8AD0E5EF_86BC_DD0A_41B1_98F1D0BC35D0_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_90E72CE4_875D_7D54_41D8_2DC1B6D9109E",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8AD0E5EF_86BC_DD0A_41B1_98F1D0BC35D0_0_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_87C94AE4_8859_E7B4_41D9_803BAA03F6EC",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_898B1D12_86B4_4D15_41D4_DB00897CF0EF_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_9A0C49E3_873D_6753_41CC_464D180AAE9D",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_898B1D12_86B4_4D15_41D4_DB00897CF0EF_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_9A0CF9E3_873D_6753_4180_C1CED6449F6C",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_884B522F_86BC_F70B_41BE_AB0F60060908_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_9A0FF9E3_873D_6753_41D8_90F20DA5103C",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_884B522F_86BC_F70B_41BE_AB0F60060908_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_9A0FB9E3_873D_6753_41A2_B40B59B49EBD",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_88036993_86BB_D51A_41BE_3881D96313A7_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_90DA5CE4_875D_7D54_41C1_93F9100DF30C",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_88036993_86BB_D51A_41BE_3881D96313A7_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_90D9FCE4_875D_7D54_41A4_6F55B0C5FBE4",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8A398A34_86BF_D71D_41D4_F394D0B1AF72_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_90E33CEE_875D_7D55_41BE_B75CF7FAE168",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8A398A34_86BF_D71D_41D4_F394D0B1AF72_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_90E3ECEE_875D_7D55_41E0_6EF0F809692F",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8AD1E7F5_86BC_5D1F_41DC_EBF48F97DFC1_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_A1CF1D85_8935_7FD4_41D9_D859D6F5D5EA",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8AD1E7F5_86BC_5D1F_41DC_EBF48F97DFC1_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_A1CFAD85_8935_7FD4_41D2_C1DF2FFA0155",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8AD1836F_86BC_750A_41C7_51718FF3FE08_1_HS_0_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_90E38CF6_875D_7D35_41AE_C931C34EE8C6",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8AD1836F_86BC_750A_41C7_51718FF3FE08_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_9898641B_87EE_ECF3_41D9_023BE7124672",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_881520A8_86BD_B335_41B7_95FFE4EFE94B_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_A1C86D85_8935_7FD4_41D0_6135EDEE16B9",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_881520A8_86BD_B335_41B7_95FFE4EFE94B_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_A1C8FD85_8935_7FD4_41E0_BAA1DDD7A790",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8836E539_86BF_FD17_41C8_DCFB05040C19_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_90E46CEE_875D_7D55_41D5_5E62377C6415",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8836E539_86BF_FD17_41C8_DCFB05040C19_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_90E4DCEE_875D_7D55_41D4_4A08404BB5AF",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8836E539_86BF_FD17_41C8_DCFB05040C19_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_90E34CEE_875D_7D55_41D8_02072859C2D2",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_89F7FE2B_86BC_CF0B_41CA_94C5BD0F49ED_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_90E66CEE_875D_7D55_41B2_69A382C75E8D",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_89F7FE2B_86BC_CF0B_41CA_94C5BD0F49ED_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_90E6DCEE_875D_7D55_41DD_2049398A610D",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8A38172F_86BC_7D0B_41B8_23387D5A3C7B_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_90E50CEE_875D_7D55_41D8_6B3B99AE4C5E",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8A38172F_86BC_7D0B_41B8_23387D5A3C7B_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_90E5FCEE_875D_7D55_41C8_EFF2C79254FE",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8A38172F_86BC_7D0B_41B8_23387D5A3C7B_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_9AF509F3_873D_674C_41DC_024042AB4F5B",
 "rowCount": 6,
 "class": "AnimatedImageResource"
}],
 "backgroundPreloadEnabled": true,
 "class": "Player",
 "paddingTop": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "scripts": {
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "registerKey": function(key, value){  window[key] = value; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getKey": function(key){  return window[key]; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "unregisterKey": function(key){  delete window[key]; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "existsKey": function(key){  return key in window; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player4472"
 },
 "mouseWheelEnabled": true,
 "shadow": false,
 "downloadEnabled": false,
 "defaultVRPointer": "laser",
 "gap": 10
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
