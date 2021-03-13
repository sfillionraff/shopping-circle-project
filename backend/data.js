const users = [
  {
    name: "Vanya Hargreeves",
    type: "seller",
    email: "vanya.hargreeves@yahoo.com",
    profilePicture:
      "https://www.imdb.com/title/tt1312171/mediaviewer/rm3746802177/?ft0=name&fv0=nm0680983&ft1=image_type&fv1=still_frame",
  },
  {
    name: "Luther Hargreeves",
    type: "seller",
    email: "luther@hargreeves.com",
    profilePicture:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F66.media.tumblr.com%2Ff29af1974a0087baec41269bbeba2b59%2Fe0bd0c458b0e9ebf-6d%2Fs400x600%2F970eb521fb28c99eda59b74a9d86fd311386e1a5.jpg&f=1&nofb=1",
  },
  {
    name: "Diego Hargreeves",
    type: "seller",
    email: "dihar@gmail.com",
    profilePicture:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fumbrellaacademy%2Fimages%2F8%2F85%2FDiego_Hargreeves.jpg%2Frevision%2Flatest%3Fcb%3D20190103162332&f=1&nofb=1",
  },
  {
    name: "Allison Hargreeves",
    type: "seller",
    email: "ali.hargreeves@gmail.com",
    profilePicture:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.lJ98igEf4scxo5DwqocbHAHaJn%26pid%3DApi&f=1",
  },
  {
    name: "Klaus Hargreeves",
    type: "seller",
    email: "hargreevesklaus@gmail.com",
    profilePicture:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.AyLqDiEbVsSnOFhIsWUU9wHaHa%26pid%3DApi&f=1",
  },
  {
    name: "Five",
    type: "buyer",
    email: "fivealive@gmail.com",
    profilePicture:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.popbuzz.com%2Fimages%2F38603%3Fcrop%3D16_9%26width%3D660%26relax%3D1%26signature%3DH5KCpMdlcUwiaD4RGJxjGZNgkF4%3D&f=1&nofb=1",
  },
  {
    name: "Ben Hargreeves",
    type: "buyer",
    email: "bentacles@yahoo.com",
    profilePicture:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fultimateapparels.com%2Fimage%2Fcache%2Fdata%2F2020%2FMen%2FThe-Umbrella-Academy-Ben-Hargreeves-Jackets-875x1000.jpg&f=1&nofb=1",
  },
  {
    name: "Hazel",
    type: "buyer",
    email: "donuts_hazel@yahoo.com",
    profilePicture:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fumbrellaacademy%2Fimages%2F3%2F3a%2FHazel_2.jpg%2Frevision%2Flatest%3Fcb%3D20190103162332&f=1&nofb=1",
  },
  {
    name: "Cha-Cha",
    type: "buyer",
    email: "chax3@yahoo.com",
    profilePicture:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.qIoHlrHOGx3jukuGY-PrswHaEM%26pid%3DApi&f=1",
  },
  {
    name: "Reginald Hargreeves",
    type: "buyer",
    email: "reginald@hargreeves.com",
    profilePicture:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.uromivoice.com%2Fwp-content%2Fuploads%2F2020%2F08%2Fwhat-exactly-is-sir-reginald-hargreeves-in-umbrella-academy-season-2-scaled.jpg&f=1&nofb=1",
  },
];

const products = [
  {
    name: "Levis High-Rise Boyfriend Jeans",
    brand: "Levis",
    category: "Clothes",
    price: 50,
    quantity: 1,
    sellerId: "S-04",
    description: "Never worn Levis high-waisted jeans! The size is 30/32.",
    productImage:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F79%2Fd9%2F79d94b8660a5ae7c57525f68855d482baa34158f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_jeans_loose%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
  },
  {
    name: "Levis High-Rise Skinny Jeans",
    brand: "Levis",
    category: "Clothes",
    price: 45,
    quantity: 2,
    sellerId: "S-04",
    description:
      "Two pairs of ightly worn Levis high-waisted jeans. The size is 30/32.",
    productImage:
      "https://cdn.cliqueinc.com/posts/287549/best-high-waisted-black-jeans-287549-1591049484434-main.700x0c.jpg",
  },
  {
    name: "Plaid Button-Up Shirt",
    brand: "American Eagle",
    category: "Clothes",
    price: 35,
    quantity: 1,
    sellerId: "S-02",
    description: "Men's plaid shirt. Size XXL",
    productImage:
      "https://www.flare.com/wp-content/uploads/2018/02/INLINE_01.jpg",
  },
  {
    name: "Airpods",
    brand: "Apple",
    category: "Electronics",
    price: 150,
    quantity: 1,
    sellerId: "S-02",
    description: "Never used, brand new, in the package Airpods!",
    productImage:
      "https://i.pcmag.com/imagery/reviews/008cFI5zJXJfja1Xq9sjCgc-5..1569469989.jpg",
  },
  {
    name: "Anker Soundcore Motion Plus",
    brand: "Anker",
    category: "Electronics",
    price: 75,
    quantity: 1,
    sellerId: "S-01",
    description: "Lightly used speaker. Great sound quality.",
    productImage:
      "https://cnet3.cbsistatic.com/img/ddAb2HfECmO9jYEYMJTSyJCxx7k=/420x236/2020/05/15/7076ef86-6d02-4f78-8704-351f865042de/anker-soundcore-motion-plus-11.jpg",
  },
  {
    name: "Tomato Seeds",
    category: "Hobbies",
    price: 5,
    quantity: 6,
    sellerId: "S-01",
    description: "Seeds to start a tomato garden!",
    productImage:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg1.etsystatic.com%2F016%2F0%2F5709809%2Fil_570xN.423189647_sc58.jpg&f=1&nofb=1",
  },
  {
    name: "Art Starter Kit",
    category: "Hobbies",
    price: 45,
    quantity: 1,
    sellerId: "S-05",
    description:
      "Never opened art kit complete with markers, crayons, and paints",
    productImage:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHLB1DDmPacnrK1RjSspkxh5uvXXam%2F150pcs-set-Pencil-Students-Paint-Brush-Art-Supplies-Painting-Oil-Pastel-Drawing-Crayon-Water-Color-School.jpeg&f=1&nofb=1",
  },
  {
    name: "Marshall Guitar Amp",
    category: "Hobbies",
    price: 200,
    quantity: 1,
    sellerId: "S-03",
    description: "Lightly used Marshall AS50D guitar amp",
    productImage:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.reverb.com%2Fimage%2Fupload%2Fs--GBuUqqOd--%2Fa_exif%2Cc_limit%2Cf_auto%2Cfl_progressive%2Cg_south%2Cq_auto%3Aeco%2Cw_1280%2Fv1515727358%2Ffwotzg68qwys7grtz9sr.jpg&f=1&nofb=1",
  },
  {
    name: "Birdwatching Binoculars",
    category: "Hobbies",
    price: 150,
    quantity: 1,
    sellerId: "S-03",
    description: "New birdwatching binoculars. Legend 12x50mm",
    productImage:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimage.sportsmansguide.com%2Fadimgs%2Fl%2F2%2F222067_ts.jpg&f=1&nofb=1",
  },
  {
    name: "Used Film Camera",
    category: "Hobbies",
    price: 115,
    quantity: 1,
    sellerId: "S-05",
    description:
      "Lightly used Olympus 35mm film camera. Comes with a free roll of film.",
    productImage:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fharrisoncameras.s3.amazonaws.com%2Fp%2Fl%2FUSED-2012430-3103930.jpg&f=1&nofb=1",
  },
  {
    name: "Teal Armchair",
    category: "Household Goods",
    price: 350,
    quantity: 1,
    sellerId: "S-05",
    description: "Solid wood armchair. Great for a living room or a study!",
    productImage:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd3d71ba2asa5oz.cloudfront.net%2F12002360%2Fimages%2F833-632v01gn_armchair_(12).jpg&f=1&nofb=1",
  },
  {
    name: "Vintage Bread Plate Set",
    category: "Household Goods",
    price: 60,
    quantity: 1,
    sellerId: "S-05",
    description: "Vintage, complete set of bread plates",
    productImage:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvintageamericanpottery.com%2Ffiestaware%2FVintage-fiesta-bread-butter-6-inch-plates-original-colors-for-sale15.jpg&f=1&nofb=1",
  },
  {
    name: "Bicycle",
    category: "Sporting Goods",
    price: 350,
    quantity: 1,
    sellerId: "S-03",
    description: "Vintage bicycle with a new brake line",
    productImage:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbarnfinds.com%2Fwp-content%2Fuploads%2F2018%2F07%2F072618-1973-Triumph-Bicycle-1.jpg&f=1&nofb=1",
  },
  {
    name: "Skateboard",
    category: "Sporting Goods",
    price: 100,
    quantity: 1,
    sellerId: "S-05",
    description: "Brand new skateboard!",
    productImage:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F4%2F41%2FGlobe_Skateboard.jpg%2F1200px-Globe_Skateboard.jpg&f=1&nofb=1",
  },
  {
    name: "Dockers Hiking Boots",
    category: "Sporting Goods",
    price: 75,
    quantity: 1,
    sellerId: "S-02",
    description:
      "Lightly used hiking boots. Only used for a year and laces just replaced!",
    productImage:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.v-6KaTm-fgyjO5-T2zTKegHaFj%26pid%3DApi&f=1",
  },
];

module.exports = { users, products };
