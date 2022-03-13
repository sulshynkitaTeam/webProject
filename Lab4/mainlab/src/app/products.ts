export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Dog Bark Collar for Small Medium Large Dogs,No Bark Collar with No Shock Mode,Rechargeable Anti Barking Collar with Beep Vibration Harmless Shock',
    price: 59.99,
    description: 'Suitable for All Dog Sizes of All Breeds - The dog collar is suitable for small, medium and large dogs. The length of the conductive probe cover can be changed, and can be replaced according to the length of the dog hair. ',
    image: '/assets/dog-bark.jpg',
    rating: 5,
    url: 'https://www.amazon.com/Collar-Rechargeable-Barking-Vibration-Harmless/dp/B09P9Z2KWX?ref=dlx_deals_gd_dcl_img_4_7afa60b2_dt_sl15_b4'
  },
  {
    id: 2,
    name: 'PASER 32oz/64oz/128oz Motivational Water Bottle with Time Marker & Handle, Leakproof Tritan BPA Free Water Jug Ensure You Drink Enough Water Daily for Fitness, Gym and Outdoor Sports',
    price: 11.04,
    description: 'Motivational Quote & Time Markers: With unique inspirational quote and time markers, this water bottle is designed to reminding you to drink enough required water intake daily, and ensures you stay hydrated and healthy. A must have for any fitness goals including weight loss and overall health.',
    image: '/assets/fitness-bottle.jpg',
    rating: 4.6,
    url: 'https://www.amazon.com/PASER-Motivational-Leakproof-Fitness-Outdoor/dp/B08VG222BJ?ref=dlx_deals_gd_dcl_img_6_9489019d_dt_sl15_b4'
  },
  {
    id: 3,
    name: 'BISSELL CrossWave X7 Cordless Pet Pro Multi-Surface Wet Dry Vacuum with WiFi Connectivity, 3279',
    price: 449.99,
    description: 'Advanced Cleaning for Homes with Pets. Save time by vacuuming and washing at the same time, across multiple surfaces, with our best CrossWave product for pet parents.',
    image: '/assets/crosswave.jpg',
    rating: 4,
    url: 'https://www.amazon.com/CrossWave-Cordless-Multi-Surface-Connectivity-3279/dp/B09Q81PRM5?ref=dlx_deals_gd_dcl_img_7_8b01f03b_dt_sl15_b4'
  },
  {
    id: 4,
    name: 'Pefei Tweezers Set - Professional Stainless Steel Tweezers for Eyebrows - Great Precision for Facial Hair, Splinter and Ingrown Hair Removal (Black)',
    price: 8.49,
    description: 'MULTI - FUNCTION - 4 in 1 Set, This set contains a pair of classic, slant, pointed, and pointed slant tweezers. Perfect choice to handle a variety of jobs.',
    image: '/assets/tweezers.jpg',
    rating: 4.5,
    url: 'https://www.amazon.com/Tweezers-Set-Professional-Eyebrows/dp/B07QSY7XK6?ref=dlx_deals_gd_dcl_img_9_42fdc8a3_dt_sl15_b4&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFPUDBEWUJEV1JNS0EmZW5jcnlwdGVkSWQ9QTA5MDM0OTYxV1M3OFoxUVEyMjRQJmVuY3J5cHRlZEFkSWQ9QTAwNTE3NTMzUEdZS0dXSzFCRE01JndpZGdldE5hbWU9c3BfZ2JfbWFpbl9zdXBwbGUmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl'
  },

  {
    id: 5,
    name: 'JUNO & Co. Clean 10 Cleansing Balm 10 Ingredients Makeup Remover 85g / 3.0oz',
    price: 12.74,
    description: 'An uncomplicated list of only 10 ingredients',
    image: '/assets/juno.jpg',
    rating: 4.6,
    url: 'https://www.amazon.com/JUNO-Co-Cleansing-Ingredients-Remover/dp/B08Q3CQM7X?ref=dlx_deals_gd_dcl_img_10_380bf083_dt_sl15_b4&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFPUDBEWUJEV1JNS0EmZW5jcnlwdGVkSWQ9QTA5MDM0OTYxV1M3OFoxUVEyMjRQJmVuY3J5cHRlZEFkSWQ9QTA3MzU0MjkyQVZVTFNFTVNHVkhCJndpZGdldE5hbWU9c3BfZ2JfbWFpbl9zdXBwbGUmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl'
  },

  {
    id: 6,
    name: 'Black Disposable Face Masks, 100 Pack Black Face Masks 3 Ply Filter Protection',
    price: 6.76,
    description: 'Black disposable face mask,Surface is evenly covered with air pores, good breathability.',
    image: '/assets/mask.jpg',
    rating: 4.7,
    url: 'https://www.amazon.com/Black-Disposable-Face-Masks-Protection/dp/B09B6V9Q8J?ref=dlx_deals_gd_dcl_img_16_51b7ab93_dt_sl15_b4&th=1'
  },

  {
    id: 7,
    name: 'Botanic Hearth Tea Tree Shampoo and Conditioner Set - with 100% Pure Tea Tree Oil, for Itchy and Dry Scalp, Sulfate Free, Paraben Free - for Men and Women - (Packaging May Vary) - 16 fl oz each',
    price: 21.20,
    description: 'Clarifying shampoo and conditioner set that invigorates, soothes, and deeply nourishes your hair and scalp; sulfate free; paraben free; made in USA',
    image: '/assets/botanic.jpg',
    rating: 4.1,
    url: 'https://www.amazon.com/Botanic-Hearth-Tree-Shampoo-Conditioner/dp/B07P547Z3F?ref=dlx_deals_gd_dcl_img_19_f344aea8_dt_sl15_b4&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFPUDBEWUJEV1JNS0EmZW5jcnlwdGVkSWQ9QTA5MDM0OTYxV1M3OFoxUVEyMjRQJmVuY3J5cHRlZEFkSWQ9QTA4NTA4OTgyRk8yV1BKVkMwNkRDJndpZGdldE5hbWU9c3BfZ2JfbWFpbl9zdXBwbGUmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl'
  },

  {
    id: 8,
    name: 'KROSER Laptop Bag Premium Laptop Briefcase Fits Up to 17.3 Inch Laptop Expandable Water-Repellent Shoulder Messenger Bag Computer Bag for Travel/Business/School/Men/Women-Black',
    price: 30.59,
    description: 'MATERIAL: The laptop briefcase is made of environment-friendly canvas poly fabric which is durable and water-repellent; Dimensions: 18”x12.8”x7.5”/9.5”; Weight:2.88LBS.',
    image: '/assets/kroser.jpg',
    rating: 4.7,
    url: 'https://www.amazon.com/KROSER-Briefcase-Expandable-Water-Repellent-Women-Black/dp/B07M5N8X11?ref=dlx_deals_gd_dcl_img_25_f1c7eada_dt_sl15_b4&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFPUDBEWUJEV1JNS0EmZW5jcnlwdGVkSWQ9QTA5MDM0OTYxV1M3OFoxUVEyMjRQJmVuY3J5cHRlZEFkSWQ9QTA3MTczNzYxWlZSNEYwTFk1Tko0JndpZGdldE5hbWU9c3BfZ2JfbWFpbl9zdXBwbGUmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl'
  },

  {
    id: 9,
    name: 'USB C Fast Charger, Sacrack 90W 6 Port USB C Charging Station, Portable Fast USB C Wall Charger PD Adapter 3 USB C and 3 QC USB A for All iPad, iPhone 13 12 11 Max Mini, Pixel Samsung Galaxy',
    price: 42.49,
    description: ' It with total 90 watt power. 3x20W USB-C Power Delivery port for iPhone 13/12/12 Pro/12 Pro Max, iPhone 11/11Pro/XS/XR/X, iPad Pro, iPad Air, Galaxy S10 / S9 and other Samsung phones and tablets, more up to 3× faster than with an original old charger. 3 X10W USB A fast charger port for your other devices',
    image: '/assets/charger.jpg',
    rating: 4.7,
    url: 'https://www.amazon.com/Charger-Sacrack-Charging-Station-Portable/dp/B09GJXVHVK?ref=dlx_deals_gd_dcl_img_30_dd7bf1ef_dt_sl15_b4&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFPUDBEWUJEV1JNS0EmZW5jcnlwdGVkSWQ9QTA5MDM0OTYxV1M3OFoxUVEyMjRQJmVuY3J5cHRlZEFkSWQ9QTAxODMzNzYxSkJPTTMyQjFaNExDJndpZGdldE5hbWU9c3BfZ2JfbWFpbl9zdXBwbGUmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl'
  },
  {
    id: 10,
    name: 'Magicteam Sound Machines White Noise Machine with 20 Non Looping Natural Soothing Sounds and Memory Function 32 Levels of Volume Powered by AC or USB and Sleep Sound Timer Therapy for Baby Kids Adults',
    price: 19.99,
    description: '20 Non-Looping Sleep Sounds: White noise ,Brown noise, pink noise, blue noise, fan,brook, rain, ocean,bird and Bonfire,suitable for for Baby and Kids and Adults.',
    image: '/assets/magicteam.jpg',
    rating: 4.5,
    url: 'https://www.amazon.com/Magicteam-Machine-Looping-Soothing-Function/dp/B07RWRJ4XW?ref=dlx_deals_gd_dcl_img_48_db174b56_dt_sl15_b4'
  },

];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
