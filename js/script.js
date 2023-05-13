$(document).ready(function(){
  var swiper = new Swiper('.swiper-container', {
     effect: 'coverflow',
     grabCursor: true,
     centeredSlides: true,
     slidesPerView: 'auto',
     coverflowEffect: {
       rotate: 90,
       stretch: 10,
       depth: 100,
       modifier: 1,
       slideShadows: true,
     },
     pagination: {
       el: '.swiper-pagination',
     },
   });
// ==========================================================
// Declaration of an array of objects
// ==========================================================
var shoes = [
      {
        id : 101,
        name : 'MERCEDES SPEEDCAT MID SNEAKERS',
        color : 'White',
        price : '180$',
        categorie : 'Lifestyle',
        photo : 'lifeStyle-1.jpg',
        description : 'Mid height with padded collar Leather upper Rubber outsole for grip Padded tongue Lace with hook-and-loop closure for snug fit PUMA Formstrip at medial and lateral sides Mercedes-AMG Petronas Motorsport branding at lateral tag '

      },

      {
        id : 102,
        name : 'STYLE RIDER PRO-TECH SNEAKERS',
        color : 'Black',
        price : '180$',
        categorie : 'Lifestyle',
        photo : 'lifeStyle-2.jpg',
        description : 'Low boot Perforated premium leather upper with leather overlays Federbein outsole for optimum shock absorption Mesh tongue Lace closure TPU gel detail at heel Zig-zag stitching details PUMA Wordmark at tongu PUMA Formstrip at lateral side '

      },

      {
        id : 103,
        name : 'FUTURE RIDER NEW TONES SNEAKERS',
        color : 'Gold',
        price : '140$',
        categorie : 'Lifestyle',
        photo : 'lifeStyle-3.jpg',
        description : 'Born in 1980, the Fast Rider launched when running moved from the track to the street.'

      },

      {
        id : 104,
        name : 'RALPH SAMPSON ROYAL MID-TOP SNEAKERS',
        color : 'White',
        price : '170$',
        categorie : 'Lifestyle',
        photo : 'lifeStyle-4.jpg',
        description : 'PUMA celebrates the legacy of basketball legend Ralph Sampson with an updated reissue from our deep 80s archives. These clean, classic, basketball inspired sneakers were the peak of performance wear in their day.'

      },

      {
        id : 201,
        name : 'RS-2K RF',
        color : 'Gold',
        price : '190$',
        categorie : 'RS-Collection',
        photo : 'collection-1.jpg',
        description : 'These brand-new RS-2K RF Sneakers are formulated for our ever-evolving world, fusing 2000s influence with a futuristic palette. With its richly layered upper and comfy PU midsole.'

      },

      {
        id : 202,
        name : 'RS-2K THE UNITY COLLECTION',
        color : 'White',
        price : '190$',
        categorie : 'RS-Collection',
        photo : 'collection-2.jpg',
        description : 'We are living in the midst of a paradigm shift. Our world is becoming more digital by the second, blurring the line between the artificial and the real.'

      },

      {
        id : 203,
        name : 'RS 2.0 JAPANORAMA',
        color : 'Gray',
        price : '130$',
        categorie : 'RS-Collection',
        photo : 'collection-3.jpg',
        description : 'Retro RS sillhouette Mesh upper with suede, nubuck and synthetic leather overlays Full lace closure Lightweight PU midsole for soft cushioning Rubber outsole provides grip and traction PUMA Formstrip overlay at side Japanorama embroidered patch at lateral side RS-0 branded loop at tongue '

      },

      {
        id : 204,
        name : 'PUMA X EMOJI RS-2K',
        color : 'White',
        price : '190$',
        categorie : 'RS-Collection',
        photo : 'collection-4.jpg',
        description : 'Retro RS sillhouette Mesh upper with suede, nubuck and synthetic leather overlays Full lace closure Lightweight PU midsole for soft cushioning Rubber outsole provides grip and traction PUMA Formstrip overlay at side Japanorama embroidered patch at lateral side RS-0 branded loop at tongue '

      },

      {
        id : 301,
        name : 'JAAB XT PWR MENS TRAINING',
        color : 'Black',
        price : '91$',
        categorie : 'Running',
        photo : 'running-1.jpg',
        description : 'Crafted for power, the Jaab XT PWR Training Shoes boast PUMAs best technology to date. They feature a supportive webbing upper, HYBRID technology for bounce and an ultra-responsive ProFoam midsole. '

      },

      {
        id : 302,
        name : 'RETALIATE MENS TRAINING',
        color : 'Black',
        price : '80$',
        categorie : 'Running',
        photo : 'running-2.jpg',
        description : 'Bite back with true street style in our Retaliate Sneaker. This contemporary shoe packs a punch of attitude with bold PUMA branding while still delivering the performance you expect of a PUMA classic, with its full length EVA midsole and SoftFoam sockliner ensuring supreme comfort. '

      },

      {
        id : 303,
        name : 'IGNITE FLASH EVOKNIT MENS TRAINING',
        color : 'Gray',
        price : '77$',
        categorie : 'Running',
        photo : 'running-3.jpg',
        description : 'Turn heads with offset lacing and sleek, monochromatic design lines in the tech-forward IGNITE Flash evoKNIT, perfect both for everyday wear and advanced athletic training.'

      },

      {
        id : 304,
        name : 'LQDCELL METHOD MENS TRAINING',
        color : 'White',
        price : '130$',
        categorie : 'Running',
        photo : 'running-4.jpg',
        description : 'This high-tech training shoe pairs LQDCELL technology with a ProFoam midsole for the lightest stride you have felt yet. Perfect for any agile athlete on the move. '

      }
];

// ==========================================================
// Function call to display all items
// ==========================================================

allShoes(); //displays all items on home page
$('#refresh').click(function(){
  allShoes('animate__animated animate__bounce');
});

// ==========================================================
// Display items as per user's input - breed filter call
// ==========================================================

$('#showChoice').click(function(){
  var inputArray = [];

  // read input of users and store
  var running = $('#running:checked').val();
  var rsColl = $('#rsColl:checked').val();
  var lifeStyle = $('#lifeStyle:checked').val();
console.log(running, rsColl, lifeStyle);
  //push user's choice into an array
  if (running === 'checked') {
        inputArray.push('Running');
        console.log(inputArray);
  }

  if (rsColl === 'checked') {
        inputArray.push('RS-Collection');
        console.log(inputArray);
  }

  if (lifeStyle === 'checked') {
        inputArray.push('Lifestyle');
        console.log(inputArray);
  }

  console.log(inputArray);

  //call the function to filter user's choice
  filteredShoes(inputArray);

});//showChoice click function

// ==========================================================
// Behaviour filter call
// ==========================================================

$('#showSelection').click(function(){
  var color = $('#color').val();
  console.log(color);
  filteredColor(color);
});

// ==========================================================
// Function to display all items
// ==========================================================

function allShoes(){
  var i = 0;
  for (i = 0 ; i < shoes.length; i++){

    //bootstrap cards to $display
    displayCards(i);
    cardModal();
  } //end of for loop
  } //end of allCats function

// ==========================================================
// Modal
// ==========================================================

  function cardModal(){

    $('.moreDetails').click(function(){
      $('#imageShoe').text(' '); //clearing the content
      console.log(this.id);
      var categorie = '';
      var i=0;
      for (i = 0; i < shoes.length; i++) {
        console.log(parseInt(this.id), shoes[i].id);
        if (parseInt(this.id) === shoes[i].id) {
          categorie = shoes[i].categorie;
          console.log(categorie);
          console.log(shoes[i].id, shoes[i].name, shoes[i].categorie);
            $('#exampleModalLabel').text(shoes[i].categorie);
            //append will keep  adding to existing content, so clear if you want
            //or else use html to replace existing content
            $('#imageShoe').append('<img class="img-fluid" src="images/' + shoes[i].photo + '" alt="' + shoes[i].categorie + '"/>'+
            '<div class="bg-light text-dark">' + 
            '<p class="shoe-title text card-title">'+ shoes[i].categorie + '</p>' +
            '<p class="text card-text text-dark font-weight-bold">Name : ' + ' ' + '<span class=" text-dark font-weight-light">' + shoes[i].name + '</span> <br></p>' +
             '<p class="text card-text text-dark font-weight-bold">Color : ' + ' ' + '<span class=" text-dark font-weight-light">' + shoes[i].color + '</span> <br></p>' +
             '<p class="text card-text text-dark font-weight-bold modalText">Description : ' + ' ' + '<span class="fs-6 text-dark font-weight-light paraModal ">' + shoes[i].description + '</span> <br></p>' +
             '</div>'
          );
        } //end of if statement
      }//end of for statement
      console.log(categorie);
      // shoeCarousel(categorie);
    }); // end of moreDetails click event
  } //cardModal
// ==========================================================
// Filter by shoe type
// ==========================================================

function filteredShoes(shoeCategorie){
  console.log(shoeCategorie);
  var i,j;
  $('#result').text(' ');
  for(i = 0 ; i < shoes.length; i++) {
    for (j = 0 ; j < shoeCategorie.length; j++){
      if (shoeCategorie[j] === shoes[i].categorie) {
        displayCards(i);
        cardModal();
      }//if
    }//for j
  }//for i
}//filteredCats

// ==========================================================
// Filter by shoes behaviour
// ==========================================================

function filteredColor(shoeColor){
  console.log(shoeColor);
  var i,j;
  $('#result').text(' ');
  for(i = 0 ; i < shoes.length; i++) {
    for (j = 0 ; j < shoeColor.length; j++){
      console.log(shoeColor[j], shoes[i].color)
      if (shoeColor[j] === shoes[i].color) {
        displayCards(i);
        cardModal();

      }//if
    }//for j
  }//for i
}//filteredBehaviour

// ==========================================================
// Display cards
// ==========================================================

function displayCards(j){
  //access properties of objects using index number
  $('#result').append( '<div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-2 animate__animated animate__bounce">' +
                          '<div class="card text-danger" >' +
                             '<img id="' + shoes[j].id + '" data-toggle="modal" data-target="#exampleModal" src="images/' + shoes[j].photo + '" class="card-img-top moreDetails" alt="' + shoes[j].categorie + '">' +

                          '</div>' +
                      '</div>'
                  ); //append ends here
  }; //displayCards
}); //document.ready()